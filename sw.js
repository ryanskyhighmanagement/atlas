/* Atlas service worker.
   Keeps the app itself (pages, scripts, map library, country borders) on the device so it opens
   instantly and from the home screen. Map tiles, photos and sound recordings always come from the
   network: they are large, and the app already shows placeholders when they cannot load.
   Change VERSION whenever the app's files change, so installed copies pick up the new ones. */
const VERSION = 'atlas-39';
const SHELL = [
  './', 'index.html', 'styles.css', 'app.js', 'data.js', 'galleries.json', 'sound.js', 'manifest.json',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
  'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css',
  'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js',
  'https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js',
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
];

self.addEventListener('install', (e) => {
  // one failed file must not block the install; 'reload' skips the browser's own cache so the copy is current
  e.waitUntil(caches.open(VERSION).then((c) => Promise.all(SHELL.map((u) => c.add(new Request(u, { cache: 'reload' })).catch(() => null)))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => {
    const old = keys.filter((k) => k !== VERSION);
    return Promise.all(old.map((k) => caches.delete(k))).then(() => self.clients.claim()).then(() => {
      // An older copy of the app was installed: the page on screen was built from it. Reload it once,
      // so nobody keeps looking at the previous version after an update.
      if (!old.length) return null;
      return self.clients.matchAll({ type: 'window' }).then((list) => Promise.all(list.map((c) => (c.navigate ? c.navigate(c.url).catch(() => null) : null))));
    });
  }));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || req.headers.has('range')) return;
  const url = new URL(req.url);
  const own = url.origin === self.location.origin;
  const lib = url.hostname === 'cdn.jsdelivr.net' || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!own && !lib) return;                                   // tiles, photos, recordings: straight to the network
  e.respondWith(caches.open(VERSION).then((cache) => cache.match(req, { ignoreSearch: own }).then((hit) => {
    if (lib) return hit || fetch(req).then((res) => { if (res && res.ok) cache.put(req, res.clone()); return res; });   // libraries and fonts never change
    // The app's own files: the network's copy first, so an update shows the first time the app is opened.
    // The saved copy is the fallback when offline, or when the network takes longer than three seconds.
    const fresh = fetch(req.mode === 'navigate' ? new Request(req.url, { cache: 'no-cache', credentials: 'same-origin' }) : new Request(req, { cache: 'no-cache' })).then((res) => { if (res && res.ok) cache.put(req, res.clone()); return res; });
    if (!hit) return fresh;
    const slow = new Promise((done) => setTimeout(() => done(hit), 3000));
    return Promise.race([fresh.then((res) => (res && res.ok ? res : hit)).catch(() => hit), slow]);
  })));
});
