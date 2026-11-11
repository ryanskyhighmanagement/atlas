/* Atlas service worker.
   Keeps the app itself (pages, scripts, map library, country borders) on the device so it opens
   instantly and from the home screen. Map tiles, photos and sound recordings always come from the
   network: they are large, and the app already shows placeholders when they cannot load.
   Change VERSION whenever the app's files change, so installed copies pick up the new ones. */
const VERSION = 'atlas-12';
const SHELL = [
  './', 'index.html', 'styles.css', 'app.js', 'data.js', 'sound.js', 'manifest.json',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
  'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css',
  'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js',
  'https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js',
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
];

self.addEventListener('install', (e) => {
  // one failed file must not block the install
  e.waitUntil(caches.open(VERSION).then((c) => Promise.all(SHELL.map((u) => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || req.headers.has('range')) return;
  const url = new URL(req.url);
  const own = url.origin === self.location.origin;
  const lib = url.hostname === 'cdn.jsdelivr.net' || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!own && !lib) return;                                   // tiles, photos, recordings: straight to the network
  e.respondWith(caches.open(VERSION).then((cache) => cache.match(req, { ignoreSearch: own }).then((hit) => {
    const fresh = fetch(req).then((res) => { if (res && res.ok) cache.put(req, res.clone()); return res; });
    if (lib) return hit || fresh;                             // libraries and fonts never change: cache first
    if (hit) { fresh.catch(() => null); return hit; }         // the app's own files: answer from cache, refresh behind
    return fresh;
  })));
});
