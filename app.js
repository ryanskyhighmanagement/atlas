/* Atlas: map, panels, search.
   Vanilla JS + Leaflet. No build step, no API keys.

   Flow: world map -> tap a country -> its places (photo cards) -> tap a place ->
   a full-screen photo experience of that place (the map is hidden until you come back).

   Other modules (sound, favourites) hook in through DOM events:
     atlas:begin  fired once, when the visitor taps "Begin exploring"
     atlas:view   fired on every change of view, detail = { country, place } (both null on the world view)
*/
(function () {
  'use strict';

  /* ---------- Configuration ---------- */

  const CONFIG = {
    // Basemap. The Esri ones need no key. The CARTO ones (the original plan) have required a free
    // API key since September 2026: get one at carto.com/basemaps/apikey and paste it into cartoKey.
    basemap: 'esri-dark',   // 'esri-dark' | 'esri-light' | 'carto-voyager' | 'carto-positron' | 'carto-dark'
    cartoKey: '',
    boundaries: 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
    photoApi: 'https://en.wikipedia.org/w/api.php',
    placeZoom: { City: 11, Historical: 13, Nature: 9, Beach: 11, Mountain: 10, Culture: 12 },
  };

  const esri = (service) => `https://server.arcgisonline.com/ArcGIS/rest/services/${service}/MapServer/tile/{z}/{y}/{x}`;
  const carto = (style) => `https://{s}.basemaps.cartocdn.com/${style}/{z}/{x}/{y}{r}.png` + (CONFIG.cartoKey ? `?key=${encodeURIComponent(CONFIG.cartoKey)}` : '');
  const ESRI_CREDIT = 'Tiles &copy; <a href="https://www.esri.com" target="_blank" rel="noopener">Esri</a>, HERE, Garmin, &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors';
  const CARTO_CREDIT = '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener">CARTO</a>';
  const BASEMAPS = {
    'esri-dark': { dark: true, native: 16, retina: true, credit: ESRI_CREDIT, base: esri('Canvas/World_Dark_Gray_Base'), labels: esri('Canvas/World_Dark_Gray_Reference') },
    'esri-light': { dark: false, native: 16, retina: true, credit: ESRI_CREDIT, base: esri('Canvas/World_Light_Gray_Base'), labels: esri('Canvas/World_Light_Gray_Reference') },
    'carto-voyager': { dark: false, native: 20, credit: CARTO_CREDIT, base: carto('rastertiles/voyager_nolabels'), labels: carto('rastertiles/voyager_only_labels') },
    'carto-positron': { dark: false, native: 20, credit: CARTO_CREDIT, base: carto('light_nolabels'), labels: carto('light_only_labels') },
    'carto-dark': { dark: true, native: 20, credit: CARTO_CREDIT, base: carto('dark_nolabels'), labels: carto('dark_only_labels') },
  };
  const BASE = BASEMAPS[CONFIG.basemap] || BASEMAPS['esri-dark'];
  const DARK = BASE.dark;

  const GOLD = '#c9a55c';
  const GOLD_DEEP = '#9a7a35';
  const GOLD_LIGHT = '#e6cd98';

  /* ---------- Icons (inline SVG, no emoji) ---------- */

  const svg = (body, vb) => `<svg viewBox="${vb || '0 0 24 24'}" aria-hidden="true">${body}</svg>`;
  const ICON = {
    globe: svg('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.8 2.6 2.8 14.4 0 17M12 3.5c-2.8 2.6-2.8 14.4 0 17"/>'),
    pin: svg('<path d="M12 21s6.5-6.2 6.5-11.2A6.5 6.5 0 0 0 5.5 9.8C5.5 14.8 12 21 12 21z"/><circle cx="12" cy="9.8" r="2.3"/>'),
    chevron: svg('<path d="M9 6l6 6-6 6"/>'),
    back: svg('<path d="M15 6l-6 6 6 6"/>'),
    calendar: svg('<rect x="4" y="5.5" width="16" height="14.5" rx="2.5"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>'),
    compass: svg('<circle cx="12" cy="12" r="8.5"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/>'),
    layers: svg('<path d="M12 4l8.5 4.5L12 13 3.5 8.5 12 4z"/><path d="M3.5 12.5L12 17l8.5-4.5"/>'),
    heart: svg('<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/>'),
    check: svg('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    alert: svg('<path d="M12 4l9 16H3L12 4z"/><path d="M12 10v4.5M12 17.3v.2"/>'),
    cat: {
      City: svg('<path d="M3 20h18M5 20V10l5-3v13M10 20V4l6 3v13M16 20v-8l3.5 2v6"/>'),
      Nature: svg('<path d="M5 19c0-8.5 5-13 14-14 0 9-5 14-14 14z"/><path d="M5 19l8.5-8.5"/>'),
      Historical: svg('<path d="M3.5 20h17M12 3.5l8 4.5H4l8-4.5zM6.5 8v12M12 8v12M17.5 8v12"/>'),
      Beach: svg('<circle cx="17" cy="7" r="2.8"/><path d="M3 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0M3 19.5c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>'),
      Mountain: svg('<path d="M2.5 19L9 7l4.5 8 2.5-4 5.5 8h-19z"/>'),
      Culture: svg('<path d="M3.5 6.5c5.5 1.6 11.5 1.6 17 0M5 10.5h14M8 7.3V20M16 7.3V20"/>'),
    },
  };
  const PIN_SVG = `<svg viewBox="0 0 30 40" aria-hidden="true"><path d="M15 1.5C8 1.5 2.5 7 2.5 13.8 2.5 23 15 38.5 15 38.5S27.5 23 27.5 13.8C27.5 7 22 1.5 15 1.5z" fill="${GOLD}" stroke="#0c0f14" stroke-width="1.5"/><circle cx="15" cy="14" r="4.6" fill="#0c0f14"/></svg>`;

  /* ---------- Small helpers ---------- */

  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const FOLD = { 'ø': 'o', 'đ': 'd', 'ł': 'l', 'ı': 'i', 'ß': 'ss', 'æ': 'ae', 'œ': 'oe', 'þ': 'th', 'ð': 'd', 'ʻ': '', '’': "'" };
  const norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[øđłıßæœþðʻ’]/g, (c) => FOLD[c]);
  const isMobile = () => window.matchMedia('(max-width: 760px)').matches;
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const haptic = () => { try { if (navigator.vibrate) navigator.vibrate(10); } catch (e) { /* not supported (iOS Safari) */ } };
  const emit = (name, detail) => document.dispatchEvent(new CustomEvent(name, { detail }));
  const fmtCoord = (lat, lng) => `${Math.abs(lat).toFixed(2)}° ${lat >= 0 ? 'N' : 'S'}, ${Math.abs(lng).toFixed(2)}° ${lng >= 0 ? 'E' : 'W'}`;

  /* ---------- Elements and state ---------- */

  const el = {
    body: document.body, panel: $('panel'), scroll: $('panelScroll'), view: $('view'), grab: $('panelGrab'),
    tip: $('tip'), toast: $('toast'), notice: $('notice'), welcome: $('welcome'), foot: $('welcomeFoot'),
    input: $('searchInput'), results: $('searchResults'), clear: $('searchClear'), search: $('search'),
    btnWorld: $('btnWorld'),
  };

  const DATA = (window.ATLAS_DATA && window.ATLAS_DATA.countries) || [];
  const byId = new Map(DATA.map((c) => [c.id, c]));
  const placeCount = DATA.reduce((n, c) => n + c.places.length, 0);

  /* ---------- Saved places and visited countries (kept in this browser) ---------- */

  const TOTAL_COUNTRIES = 195;
  const Store = (function () {
    const read = (k) => { try { return new Set(JSON.parse(localStorage.getItem(k)) || []); } catch (e) { return new Set(); } };
    const write = (k, set) => { try { localStorage.setItem(k, JSON.stringify(Array.from(set))); } catch (e) { /* storage unavailable: works for this visit only */ } };
    const favs = read('atlas.favs'), visited = read('atlas.visited');
    const key = (c, p) => c.id + ':' + p.name;
    return {
      isFav: (c, p) => favs.has(key(c, p)),
      toggleFav: (c, p) => { const k = key(c, p); if (favs.has(k)) favs.delete(k); else favs.add(k); write('atlas.favs', favs); return favs.has(k); },
      favs: () => { const out = []; DATA.forEach((c) => c.places.forEach((p, i) => { if (favs.has(key(c, p))) out.push({ c, p, i }); })); return out; },
      isVisited: (id) => visited.has(id),
      toggleVisited: (id) => { if (visited.has(id)) visited.delete(id); else visited.add(id); write('atlas.visited', visited); return visited.has(id); },
      visitedCount: () => visited.size,
    };
  })();
  const exploredLine = () => `${Store.visitedCount()} / ${TOTAL_COUNTRIES} countries explored`;
  const TEAL = '#6fbfb2';

  const state = { country: null, place: null, begun: false, mapReady: false, hoverId: null, sheet: 'half' };

  let map, geo, markers, pin, detail, cityLabels, borders;
  const WORLD = [[-85.0511, -180], [85.0511, 180]];

  function worldCanvas(className, pane) {
    const cv = document.createElement('canvas');
    cv.width = cv.height = 2048;
    // svgOverlay accepts any element and scales it with the map like an image
    L.svgOverlay(cv, WORLD, { pane, className, interactive: false, zIndex: 1 }).addTo(map);
    return cv;
  }

  function worldPicture(template) {
    const g = worldCanvas('atlas-under', 'base').getContext('2d');
    for (let x = 0; x < 8; x++) for (let y = 0; y < 8; y++) {
      const img = new Image();
      img.onload = () => g.drawImage(img, x * 256, y * 256, 257, 257);
      img.src = template.replace('{s}', 'abcd'[(x + y) % 4]).replace('{z}', 3).replace('{x}', x).replace('{y}', y).replace('{r}', '');
    }
  }

  // The same borders the live layer draws, painted once at world scale. It stands in for the live
  // border layer on the flight back to the world view, where scaling one picture is far cheaper.
  let ghost = null;
  function repaintBorders() { if (ghost) borderPicture(ghost.features); }
  function borderPicture(features) {
    if (!ghost) ghost = { g: worldCanvas('atlas-ghost', 'ghost').getContext('2d'), features };
    const g = ghost.g;
    g.clearRect(0, 0, 2048, 2048);
    const selected = state.country; state.country = null;        // painted as the world view, with nothing selected
    const X = (lng) => (lng + 180) / 360 * 2048;
    const Y = (lat) => { const r = Math.max(-85.05, Math.min(85.05, lat)) * Math.PI / 180; return (1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 * 2048; };
    g.lineJoin = 'round';
    [false, true].forEach((charted) => {
      features.forEach((f) => {
        if (!f.geometry || byId.has(f.id) !== charted) return;
        const st = styleOf(f);
        const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
        g.beginPath();
        polys.forEach((poly) => poly.forEach((ring) => { ring.forEach((pt, i) => (i ? g.lineTo(X(pt[0]), Y(pt[1])) : g.moveTo(X(pt[0]), Y(pt[1])))); g.closePath(); }));
        if (st.fillOpacity) { g.globalAlpha = st.fillOpacity; g.fillStyle = st.fillColor; g.fill('evenodd'); }
        g.globalAlpha = st.opacity; g.strokeStyle = st.color; g.lineWidth = st.weight * 1.5; g.stroke();
      });
    });
    state.country = selected;
  }
  const layersById = new Map();     // country id -> [leaflet layers]
  const featuresById = new Map();   // country id -> [geojson features]
  const dots = new Map();           // place -> marker

  /* ---------- Notices and toasts ---------- */

  function showNotice(title, text, action, onAction) {
    el.notice.innerHTML = `${ICON.alert}<h2>${esc(title)}</h2><p>${esc(text)}</p>${action ? `<button type="button">${esc(action)}</button>` : ''}`;
    el.notice.hidden = false;
    const b = el.notice.querySelector('button');
    if (b) b.addEventListener('click', () => { el.notice.hidden = true; onAction(); });
  }

  let toastT;
  function toast(html, ms) {
    el.toast.innerHTML = html;
    el.toast.classList.add('is-on');
    clearTimeout(toastT);
    toastT = setTimeout(() => el.toast.classList.remove('is-on'), ms || 3600);
  }

  /* ---------- Photos ----------
     place.image is either a full https URL (used as is) or "wiki:Article title",
     which resolves to that Wikipedia article's lead photo through the public,
     key-free MediaWiki API. Lookups are batched and cached in localStorage.
     Anything that fails to resolve or load keeps the gradient placeholder. */

  const Photos = (function () {
    const KEY = 'atlas.photos.v1';
    let cache = {};
    try { cache = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { cache = {}; }
    const missing = new Set();
    const inflight = new Map();
    let saveT;

    const titleOf = (ref) => (ref && ref.indexOf('wiki:') === 0 ? ref.slice(5).trim() : null);
    const save = () => { clearTimeout(saveT); saveT = setTimeout(() => { try { localStorage.setItem(KEY, JSON.stringify(cache)); } catch (e) { /* storage full or blocked */ } }, 400); };
    // Wikimedia serves thumbnails at fixed widths; 330px is the standard small step.
    const small = (url) => url.replace(/\/(\d+)px-/, (m, w) => (+w > 330 ? '/330px-' : m));

    function fetchBatch(titles) {
      const url = `${CONFIG.photoApi}?action=query&format=json&formatversion=2&origin=*&redirects=1&prop=pageimages&piprop=thumbnail%7Coriginal%7Cname&pithumbsize=960&pilimit=50&titles=${encodeURIComponent(titles.join('|'))}`;
      return fetch(url).then((r) => { if (!r.ok) throw new Error('photo lookup ' + r.status); return r.json(); }).then((json) => {
        const q = json.query || {};
        const hop = {};
        (q.normalized || []).forEach((n) => { hop[n.from] = n.to; });
        const red = {};
        (q.redirects || []).forEach((n) => { red[n.from] = n.to; });
        const pages = {};
        (q.pages || []).forEach((p) => { pages[p.title] = p; });
        titles.forEach((t) => {
          const t1 = hop[t] || t;
          const page = pages[red[t1] || t1];
          if (page && page.thumbnail && page.thumbnail.source) {
            cache[t] = { l: page.thumbnail.source, s: small(page.thumbnail.source), f: page.pageimage || '' };
          } else {
            missing.add(t);
          }
        });
        save();
      }).catch(() => { /* offline or blocked: placeholders stay, retried next time */ });
    }

    function resolve(refs) {
      const want = [];
      const waits = [];
      refs.forEach((ref) => {
        const t = titleOf(ref);
        if (!t || cache[t] || missing.has(t)) return;
        if (inflight.has(t)) { waits.push(inflight.get(t)); return; }
        if (want.indexOf(t) < 0) want.push(t);
      });
      for (let i = 0; i < want.length; i += 40) {
        const chunk = want.slice(i, i + 40);
        const p = fetchBatch(chunk).then(() => chunk.forEach((t) => inflight.delete(t)));
        chunk.forEach((t) => inflight.set(t, p));
        waits.push(p);
      }
      return Promise.all(waits);
    }

    function lookup(ref) {
      if (!ref) return null;
      const t = titleOf(ref);
      if (t) return cache[t] || null;
      if (/^https?:\/\//.test(ref)) return { l: ref, s: ref, f: '' };
      return null;
    }

    function apply(box) {
      const ref = box.dataset.photo;
      const info = lookup(ref);
      const size = box.dataset.size;
      const url = info && (size === 's' ? info.s : size === 'm' ? info.l.replace(/\/(\d+)px-/, (m, w) => (+w > 500 ? '/500px-' : m)) : info.l);
      const fail = () => { box.classList.remove('is-loading'); box.classList.add('is-empty'); };
      if (!url) return fail();
      const img = new Image();
      img.alt = box.dataset.alt || '';
      img.decoding = 'async';
      img.onload = () => {
        box.appendChild(img);
        box.classList.remove('is-loading');
        requestAnimationFrame(() => requestAnimationFrame(() => img.classList.add('is-in')));
        if (box.dataset.credit !== undefined) credit(box, ref, info);
      };
      img.onerror = fail;   // broken link: the gradient placeholder stays, never a broken-image icon
      img.src = url;
    }

    function credit(box, ref, info) {
      const host = box.parentNode;
      if (!host || host.querySelector('.credit')) return;
      let href = '', label = '';
      if (titleOf(ref) && info.f) { href = 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(info.f); label = 'Photo: Wikimedia Commons'; }
      else if (/unsplash\.com/.test(ref)) { href = 'https://unsplash.com'; label = 'Photo: Unsplash'; }
      if (!href) return;
      const a = document.createElement('a');
      a.className = 'credit'; a.href = href; a.target = '_blank'; a.rel = 'noopener'; a.textContent = label;
      host.appendChild(a);
    }

    function mount(root) {
      const boxes = Array.prototype.slice.call(root.querySelectorAll('.ph[data-photo]'));
      resolve(boxes.map((b) => b.dataset.photo)).then(() => boxes.forEach(apply));
    }

    return { mount, resolve, lookup };
  })();

  const photo = (ref, cat, size, alt, withCredit) =>
    `<div class="ph is-loading" data-cat="${esc(cat || '')}" data-photo="${esc(ref || '')}" data-size="${size}" data-alt="${esc(alt || '')}"${withCredit ? ' data-credit' : ''}><span class="ph__icon">${(cat && ICON.cat[cat]) || ICON.globe}</span></div>`;

  /* ---------- Panel content ---------- */

  const tag = (cat) => `<span class="tag" data-cat="${esc(cat)}">${ICON.cat[cat] || ''}${esc(cat)}</span>`;

  // A place in the country list: a wide photo card.
  function cardHTML(p, i, c) {
    return `<button class="pcard" type="button" data-place="${i}" aria-label="${esc(p.name)}">
      ${photo(p.image, p.category, 'l', p.name)}${c && Store.isFav(c, p) ? `<span class="pcard__saved" aria-label="Saved">${ICON.heart}</span>` : ''}
      <span class="pcard__shade"></span>
      <span class="pcard__body">${tag(p.category)}<span class="pcard__name">${esc(p.name)}</span><span class="pcard__tag">${esc(p.tagline)}</span></span>
      <span class="pcard__go">${ICON.chevron}</span>
    </button>`;
  }

  function countryHTML(c) {
    return `
      <div class="hero rise" style="--i:0">
        ${photo(c.hero || c.places[0].image, '', 'l', c.name, true)}
        <div class="hero__shade"></div>
        <div class="hero__text"><span class="kicker">${esc(c.region)}</span><h1 class="title">${esc(c.name)}</h1></div>
      </div>
      <div class="pad">
        <p class="summary rise" style="--i:1">${esc(c.summary)}</p>
        <div class="visit rise" style="--i:2">
          <button class="toggle${Store.isVisited(c.id) ? ' is-on' : ''}" type="button" data-act="visited" aria-pressed="${Store.isVisited(c.id)}">${ICON.check}<span>${Store.isVisited(c.id) ? 'Visited' : 'Mark as visited'}</span></button>
          <span class="visit__count" id="exploredLine">${exploredLine()}</span>
        </div>
        <div class="section rise" style="--i:2"><span>Places to see</span><span>${c.places.length}</span></div>
        <ul class="cards">${c.places.map((p, i) => `<li class="rise" style="--i:${i + 3}">${cardHTML(p, i, c)}</li>`).join('')}</ul>
      </div>`;
  }

  // "Your atlas": saved places and the countries explored so far.
  function atlasHTML() {
    const favs = Store.favs();
    const cards = favs.map((f, n) => `<li class="rise" style="--i:${n + 2}"><button class="pcard" type="button" data-fav="${f.c.id}:${f.i}" aria-label="${esc(f.p.name)}">
        ${photo(f.p.image, f.p.category, 'l', f.p.name)}<span class="pcard__shade"></span>
        <span class="pcard__body"><span class="tag" data-cat="${esc(f.p.category)}">${esc(f.c.name)}</span><span class="pcard__name">${esc(f.p.name)}</span><span class="pcard__tag">${esc(f.p.tagline)}</span></span>
        <span class="pcard__go">${ICON.chevron}</span></button></li>`).join('');
    const empty = `<div class="empty rise" style="--i:2">${ICON.heart}<strong>Nothing saved yet</strong><span>Open a place and tap Save, and it will be kept here for next time.</span></div>`;
    return `
      <div class="pad yours">
        <span class="kicker rise" style="--i:0">Your atlas</span>
        <h1 class="title rise" style="--i:0">Saved places</h1>
        <p class="yours__count rise" style="--i:1"><strong>${Store.visitedCount()}</strong> / ${TOTAL_COUNTRIES} countries explored</p>
        <div class="section rise" style="--i:1"><span>Saved</span><span>${favs.length}</span></div>
        ${favs.length ? `<ul class="cards">${cards}</ul>` : empty}
      </div>`;
  }

  function showYours() {
    if (state.country) { const before = state.country; state.country = null; el.body.classList.remove('has-country'); restyle(before.id); if (markers) { markers.clearLayers(); dots.clear(); pin = null; } Names.layout(); announce(); if (map) flyToWorld(); }
    state.yours = true;
    const wasOpen = el.panel.classList.contains('is-open');
    openPanel();
    swapView(atlasHTML(), !wasOpen);
    updateWorldButton();
  }

  let swapT;
  function swapView(html, instant) {
    clearTimeout(swapT);
    const run = () => {
      el.view.innerHTML = html;
      el.scroll.scrollTop = 0;
      el.view.classList.remove('is-leaving');
      setTimeout(() => Photos.mount(el.view), 220);   // photos start once the panel is already sliding
    };
    if (instant || !el.view.innerHTML) return run();
    el.view.classList.add('is-leaving');
    swapT = setTimeout(run, 300);
  }

  el.view.addEventListener('click', (e) => {
    const card = e.target.closest('[data-place]');
    if (card && state.country) return openPlace(state.country, +card.dataset.place);
    const fav = e.target.closest('[data-fav]');
    if (fav) { const parts = fav.dataset.fav.split(':'); const c = byId.get(parts[0]); if (c) openPlace(c, +parts[1]); return; }
    const vis = e.target.closest('[data-act="visited"]');
    if (vis && state.country) {
      const on = Store.toggleVisited(state.country.id);
      vis.classList.toggle('is-on', on);
      vis.setAttribute('aria-pressed', on);
      vis.querySelector('span').textContent = on ? 'Visited' : 'Mark as visited';
      const line = $('exploredLine'); if (line) line.textContent = exploredLine();
      restyle(state.country.id);
      repaintBorders();
      haptic();
    }
  });

  /* ---------- Panel and bottom sheet ---------- */

  function sheetSizes() {
    const vh = window.innerHeight;
    return { half: Math.round(vh * 0.56), full: Math.round(vh - 124), min: 150 };
  }
  function setSheet(snap) {
    state.sheet = snap;
    const s = sheetSizes();
    el.panel.style.setProperty('--sheet-h', (snap === 'full' ? s.full : s.half) + 'px');
    setLift();
  }
  function setLift() {
    const open = el.panel.classList.contains('is-open');
    const lift = (open && isMobile() ? sheetSizes().half : 0) + 'px';
    // set on the few elements that use it, not on the page root, so the browser does not re-style everything
    $('controls').style.setProperty('--lift', lift);
    el.toast.style.setProperty('--lift', lift);
    document.querySelectorAll('.leaflet-bottom').forEach((n) => { n.style.bottom = lift; });
  }
  function openPanel() {
    if (isMobile() && !el.panel.classList.contains('is-open')) setSheet('half');
    el.panel.classList.add('is-open');
    el.panel.setAttribute('aria-hidden', 'false');
    el.body.classList.add('has-panel');
    setLift();
  }
  function closePanel() {
    el.panel.classList.remove('is-open');
    el.panel.setAttribute('aria-hidden', 'true');
    el.body.classList.remove('has-panel');
    setLift();
  }

  // Drag handle: drag to resize, flick down to close, tap to toggle half / full.
  (function sheetDrag() {
    let startY = 0, startH = 0, lastY = 0, lastT = 0, vel = 0, moved = false, active = false;
    el.grab.addEventListener('pointerdown', (e) => {
      if (!isMobile()) return;
      active = true; moved = false;
      startY = lastY = e.clientY; lastT = e.timeStamp; vel = 0;
      startH = el.panel.getBoundingClientRect().height;
      el.panel.classList.add('is-dragging');
      el.grab.setPointerCapture(e.pointerId);
    });
    el.grab.addEventListener('pointermove', (e) => {
      if (!active) return;
      const dy = e.clientY - startY;
      if (Math.abs(dy) > 4) moved = true;
      const s = sheetSizes();
      const h = Math.max(90, Math.min(s.full, startH - dy));
      el.panel.style.setProperty('--sheet-h', h + 'px');
      const dt = e.timeStamp - lastT;
      if (dt > 0) vel = (e.clientY - lastY) / dt;
      lastY = e.clientY; lastT = e.timeStamp;
    });
    const end = () => {
      if (!active) return;
      active = false;
      el.panel.classList.remove('is-dragging');
      const s = sheetSizes();
      const h = el.panel.getBoundingClientRect().height;
      if (!moved) return setSheet(state.sheet === 'full' ? 'half' : 'full');
      if (h < s.min || (vel > 0.9 && h < s.half)) return closeCountry();
      if (vel < -0.5) return setSheet('full');
      if (vel > 0.5) return setSheet('half');
      setSheet(h > (s.half + s.full) / 2 ? 'full' : 'half');
    };
    el.grab.addEventListener('pointerup', end);
    el.grab.addEventListener('pointercancel', end);
  })();

  $('panelClose').addEventListener('click', () => closeCountry());

  /* ---------- Map ---------- */

  function worldView() {
    const s = map.getSize();
    const zW = Math.log2((s.x / 256) * (360 / 340));       // the whole world fits the width (desktop)
    const zH = Math.log2((s.y / 256) * 1.2);               // the inhabited latitudes fill the height (portrait phones)
    const zoom = Math.max(1, Math.round(Math.max(zW, zH) * 4) / 4);
    const worldPx = 256 * Math.pow(2, zoom);
    const slack = Math.max(0, ((worldPx - s.x) / 2 / worldPx) * 360);   // how far the centre can shift before the map edge shows
    const lng = Math.max(-slack, Math.min(slack, isMobile() ? -58 : 10));
    return { center: [isMobile() ? 22 : 24, lng], zoom };
  }

  // Space the map should keep clear: top bar, and the panel (right on desktop, bottom on mobile).
  function pads(panelOpen) {
    const open = panelOpen || el.panel.classList.contains('is-open');
    if (isMobile()) return { tl: [26, 96], br: [26, (open ? sheetSizes().half : 0) + 28] };
    return { tl: [70, 96], br: [(open ? el.panel.offsetWidth : 0) + 70, 70] };
  }

  function offsetCenter(latlng, zoom) {
    const p = pads();
    const pt = map.project(latlng, zoom).add([(p.br[0] - p.tl[0]) / 2, (p.br[1] - p.tl[1]) / 2]);
    return map.unproject(pt, zoom);
  }

  // Fit to the country's main landmass plus its places, ignoring far-flung territories
  // (so France frames metropolitan France, the USA frames the lower 48, and so on).
  // The main landmass of a country: its largest polygon, with bounding box and centre of mass.
  function mainLand(id) {
    let best = null, bestArea = -1, ring = null;
    (featuresById.get(id) || []).forEach((f) => {
      const g = f.geometry;
      if (!g) return;
      const polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
      polys.forEach((poly) => {
        let w = 180, e = -180, s = 90, n = -90;
        poly[0].forEach((pt) => { if (pt[0] < w) w = pt[0]; if (pt[0] > e) e = pt[0]; if (pt[1] < s) s = pt[1]; if (pt[1] > n) n = pt[1]; });
        const area = (e - w) * (n - s);
        if (area > bestArea) { bestArea = area; best = [[s, w], [n, e]]; ring = poly[0]; }
      });
    });
    if (!best) return null;
    let a = 0, cx = 0, cy = 0;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) { const k = ring[j][0] * ring[i][1] - ring[i][0] * ring[j][1]; a += k; cx += (ring[j][0] + ring[i][0]) * k; cy += (ring[j][1] + ring[i][1]) * k; }
    const centre = Math.abs(a) > 1e-9 ? [cy / (3 * a), cx / (3 * a)] : [(best[0][0] + best[1][0]) / 2, (best[0][1] + best[1][1]) / 2];
    return { box: best, centre };
  }

  function countryBounds(c) {
    if (c._bounds) return c._bounds;
    if (c.bounds) { c._bounds = L.latLngBounds(c.bounds); return c._bounds; }      // set by hand for very wide countries
    const land = mainLand(c.id), best = land && land.box;
    const b = best ? L.latLngBounds(best) : L.latLngBounds(c.places.map((p) => [p.lat, p.lng]));
    if (best) {
      const reach = L.latLngBounds([[best[0][0] - 15, best[0][1] - 15], [best[1][0] + 15, best[1][1] + 15]]);
      c.places.forEach((p) => { if (reach.contains([p.lat, p.lng])) b.extend([p.lat, p.lng]); });
    }
    c._bounds = b;
    return b;
  }

  // While the map is flying, the border layer is hidden: scaling 97,000 outline points every frame is what
  // made flights stutter. The basemap flies alone, and the outlines fade back in on arrival.
  let returnT, namesT;
  function takeOff() {
    const box = map.getContainer();
    box.classList.add('is-flying');
    map.once('moveend', () => box.classList.remove('is-flying'));
  }

  function flyToCountry(c) {
    const p = pads(true);
    takeOff();
    // If the window is mid-resize (rotating a phone, opening a side panel), the padding can be larger than the
    // map itself, which leaves Leaflet no room to fit the country. Then fall back to a plain fit, and never throw.
    const size = map.getSize();
    const room = size.x - p.tl[0] - p.br[0] > 40 && size.y - p.tl[1] - p.br[1] > 40;
    try {
      // capped below the close-up level, so small countries keep their outline and stay free of street labels
      if (room) map.flyToBounds(countryBounds(c), { paddingTopLeft: p.tl, paddingBottomRight: p.br, maxZoom: 8.25, duration: 1.7, easeLinearity: 0.16 });
      else map.fitBounds(countryBounds(c), { maxZoom: 8.25, animate: false });
    } catch (e) {
      try { map.invalidateSize(); map.fitBounds(countryBounds(c), { maxZoom: 8.25, animate: false }); } catch (e2) { /* leave the view as it is */ }
    }
  }

  function flyToWorld(duration) {
    const w = worldView();
    takeOff();
    // The way back: the close-up tiles and labels bow out and the world picture, with its painted borders,
    // carries the whole flight. Close-up detail fades back in once the map has landed and its tiles are ready.
    const box = map.getContainer();
    box.classList.add('is-returning');
    clearTimeout(returnT);
    map.once('moveend', () => {
      const land = () => { clearTimeout(returnT); box.classList.remove('is-returning'); };
      if (detail) detail.once('load', () => { returnT = setTimeout(land, 60); });
      returnT = setTimeout(land, 900);
    });
    map.flyTo(w.center, w.zoom, { duration: duration || 2.2, easeLinearity: 0.2 });
  }

  function styleOf(f) {
    const c = byId.get(f.id);
    const sel = state.country;
    if (DARK) {
      // On the dark map, countries with content are drawn as fine gold outlines; the fill only comes up on hover.
      // Selecting a country restyles only that country (and the one it replaces). The rest of the map is
      // dimmed by fading the basemap layer, which the GPU does for free, instead of repainting 240 shapes.
      if (!c) return { color: '#b4bac6', weight: 0.5, opacity: 0.12, fillColor: '#07090c', fillOpacity: 0 };
      const seen = Store.isVisited(c.id);       // visited countries are tinted teal
      if (sel && sel.id === c.id) return { color: seen ? '#a5e0d6' : GOLD_LIGHT, weight: 1.6, opacity: 1, fillColor: seen ? TEAL : '#d9b464', fillOpacity: 0.1 };
      if (state.hoverId === c.id) return { color: seen ? '#a5e0d6' : GOLD_LIGHT, weight: 1.4, opacity: 1, fillColor: seen ? TEAL : '#d9b464', fillOpacity: 0.3 };
      return { color: seen ? TEAL : '#d2ad5f', weight: 0.9, opacity: 0.85, fillColor: seen ? TEAL : '#d9b464', fillOpacity: seen ? 0.2 : 0.075 };
    }
    if (!c) return { color: '#3d382c', weight: 0.5, opacity: 0.2, fillColor: '#0c0f14', fillOpacity: 0 };
    if (sel && sel.id === c.id) return { color: GOLD_DEEP, weight: 1.8, opacity: 1, fillColor: GOLD, fillOpacity: 0.1 };
    if (state.hoverId === c.id) return { color: GOLD_DEEP, weight: 1.3, opacity: 0.95, fillColor: GOLD, fillOpacity: 0.38 };
    return Store.isVisited(c.id) ? { color: '#3f8f84', weight: 0.9, opacity: 0.8, fillColor: TEAL, fillOpacity: 0.3 } : { color: '#8d7743', weight: 0.7, opacity: 0.55, fillColor: GOLD, fillOpacity: 0.13 };
  }
  const restyle = (id) => { if (geo) (id ? (layersById.get(id) || []) : geo.getLayers()).forEach((l) => l.setStyle(styleOf(l.feature))); };

  function showTip(name, sub, ev) {
    el.tip.innerHTML = esc(name) + (sub ? `<small>${esc(sub)}</small>` : '');
    el.tip.classList.add('is-on');
    moveTip(ev);
  }
  function moveTip(ev) {
    if (!ev) return;
    el.tip.style.transform = `translate(${ev.clientX}px, ${ev.clientY}px) translate(-50%, -165%)`;
  }
  const hideTip = () => el.tip.classList.remove('is-on');

  function bindCountry(feature, layer) {
    const id = feature.id;
    const name = (byId.get(id) || {}).name || (feature.properties && feature.properties.name) || 'Unnamed territory';
    if (id !== undefined) {
      if (!layersById.has(id)) { layersById.set(id, []); featuresById.set(id, []); }
      layersById.get(id).push(layer);
      featuresById.get(id).push(feature);
    }
    if (canHover) {
      layer.on('mouseover', (e) => {
        const c = byId.get(id);
        if (c && !(state.country && state.country.id === id)) {
          state.hoverId = id; restyle(id);
          Photos.resolve([c.hero].concat(c.places.map((p) => p.image)));   // warm the photo lookups
        }
        if (!(state.country && state.country.id === id)) showTip(name, c ? c.places.length + ' places' : '', e.originalEvent);
      });
      layer.on('mousemove', (e) => moveTip(e.originalEvent));
      layer.on('mouseout', () => {
        hideTip();
        if (state.hoverId === id) { state.hoverId = null; restyle(id); }
      });
    }
    layer.on('click', () => {
      const c = byId.get(id);
      hideTip();
      if (c) { if (!(state.country && state.country.id === id)) selectCountry(c); return; }
      toast(`<strong>${esc(name)}</strong> is not part of this edition. The gold countries are open to explore.`);
    });
  }

  function initMap() {
    if (!window.L || !window.topojson) {
      showNotice('The map could not be loaded', 'Atlas needs a connection the first time it opens, to fetch the map. Check your connection and try again.', 'Try again', () => location.reload());
      return false;
    }
    if (!DATA.length) {
      showNotice('The atlas is empty', 'The place data file (data.js) did not load. Make sure it sits next to index.html.', 'Reload', () => location.reload());
      return false;
    }

    el.body.dataset.basemap = BASEMAPS[CONFIG.basemap] ? CONFIG.basemap : 'esri-dark';
    // The border layer is drawn a full screen beyond every edge, so dragging does not run off its drawn area.
    borders = L.svg({ padding: 1 });
    map = L.map('map', {
      zoomControl: false, attributionControl: false,
      minZoom: 1, maxZoom: 15, zoomSnap: 0.25, zoomDelta: 1, wheelPxPerZoomLevel: 90,
      maxBounds: [[-78, -230], [85, 230]], maxBoundsViscosity: 0.6,
      renderer: borders,
      inertiaDeceleration: 2400,
    });
    L.control.attribution({ position: 'bottomleft', prefix: false }).addTo(map);

    map.createPane('base').style.zIndex = 200;
    map.createPane('labels').style.zIndex = 450;
    map.createPane('ghost').style.zIndex = 399;
    // On high-density screens the base layer loads tiles one zoom level deeper at half size, so coastlines stay sharp.
    const sharp = !!BASE.retina && L.Browser.retina;
    document.documentElement.style.setProperty('--tile-base', (sharp ? 128.7 : 256.7) + 'px');
    // Tiles are only fetched once the map comes to rest. Fetching them mid-flight (hundreds per second
    // on a desktop screen) was the main cause of stutter.
    const tile = (url, pane, opts) => L.tileLayer(url, Object.assign({
      pane, subdomains: 'abcd', maxZoom: 20, maxNativeZoom: BASE.native, noWrap: true, bounds: [[-85.06, -180], [85.06, 180]],
      keepBuffer: 2, updateWhenIdle: true, updateWhenZooming: false,
    }, opts)).addTo(map);
    // A permanent picture of the whole world sits underneath (64 tiles stitched into one image), so there is
    // always complete map to look at while flying, however far the view travels.
    worldPicture(BASE.base);
    map.createPane('names').style.zIndex = 460;
    detail = tile(BASE.base, 'base', { attribution: BASE.credit, detectRetina: sharp, maxNativeZoom: sharp ? BASE.native - 1 : BASE.native, zIndex: 2 });
    // City and street labels belong to the close-up view only. From the world down to a single country,
    // the map carries its own crisp country names instead (see Names below).
    cityLabels = tile(BASE.labels, 'labels');
    map.removeLayer(cityLabels);

    markers = L.layerGroup().addTo(map);

    map.setView([20, 0], 2, { animate: false });
    const w = worldView();
    map.setMinZoom(Math.max(1, w.zoom - 0.75));
    map.setView(w.center, Math.max(1, w.zoom - 0.5), { animate: false });
    map.on('moveend zoomend', updateWorldButton);
    // On a long drag, redraw the borders around the new position before the drawn area runs out,
    // instead of waiting for the finger or mouse to let go.
    map.on('move', () => {
      if (!borders._center || map._animatingZoom || map.getContainer().classList.contains('is-flying')) return;
      if (map.getZoom() !== borders._zoom) return;
      const s = map.getSize();
      const off = map.latLngToLayerPoint(borders._center).distanceTo(map.latLngToLayerPoint(map.getCenter()));
      if (off > Math.min(s.x, s.y) * 0.6) borders._update();
    });
    map.on('moveend', () => { clearTimeout(namesT); if (dots.size) namesT = setTimeout(placeNames, 250); });
    map.on('zoom zoomend', () => map.getContainer().classList.toggle('is-close', map.getZoom() >= 8.75));
    map.on('zoomend', () => {
      const close = map.getZoom() >= 8.75;
      if (close && !map.hasLayer(cityLabels)) map.addLayer(cityLabels);
      else if (!close && map.hasLayer(cityLabels)) map.removeLayer(cityLabels);
    });
    el.body.classList.add('is-ready');
    return true;
  }

  function loadBoundaries() {
    el.foot.textContent = 'Charting the world';
    return fetch(CONFIG.boundaries)
      .then((r) => { if (!r.ok) throw new Error('boundaries ' + r.status); return r.json(); })
      .then((topo) => {
        const fc = window.topojson.feature(topo, topo.objects.countries);
        geo = L.geoJSON(fc, { style: styleOf, onEachFeature: bindCountry, smoothFactor: 1.2 }).addTo(map);
        borderPicture(fc.features);
        // Country names over the map are switched off. To bring them back: Names.build();
        state.mapReady = true;
        el.foot.textContent = `${DATA.length} countries  ·  ${placeCount} places`;
        emit('atlas:ready', { countries: DATA.length, places: placeCount });
      })
      .catch(() => {
        el.foot.textContent = '';
        showNotice('The borders could not be drawn', 'The country outlines did not download. Check your connection and try again.', 'Try again', loadBoundaries);
      });
  }

  /* ---------- Country names ----------
     Crisp text drawn by the browser, not baked into map tiles. A name appears once its country is wide
     enough on screen to hold it, so large countries are named first and smaller ones as you zoom in. */

  const Names = (function () {
    const items = [];
    let pane, raf = 0;
    const SIZES = { true: [10.5], false: [9.5] };       // one quiet size each, like a printed atlas

    function build() {
      pane = map.getPane('names');
      const ruler = document.createElement('canvas').getContext('2d');
      ruler.font = '500 10px Inter, sans-serif';
      featuresById.forEach((feats, id) => {
        if (id === undefined || id === '010') return;                     // unnumbered territories, Antarctica
        const land = mainLand(id);
        const c = byId.get(id);
        const name = (c && c.name) || (feats[0].properties && feats[0].properties.name);
        if (!land || !name) return;
        const text = name.toUpperCase();
        const span = document.createElement('span');
        span.className = 'cname' + (c ? ' cname--open' : '');
        span.textContent = name;
        pane.appendChild(span);
        items.push({ id, el: span, at: land.centre, w: land.box[1][1] - land.box[0][1], h: land.box[1][0] - land.box[0][0], open: !!c, unit: (ruler.measureText(text).width + text.length * 1.6) / 10, shown: false });
      });
      map.on('zoomstart', () => pane.classList.add('is-zooming'));
      map.on('zoomend viewreset', layout);
      layout();
    }

    function layout() {
      if (!pane) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const z = map.getZoom(), px = 256 * Math.pow(2, z) / 360, vw = map.getSize().x;
        const sel = state.country && state.country.id;
        items.forEach((it) => {
          const w = it.w * px, h = it.h * px * 1.15;
          let size = 0;
          if (z < 8.75 && it.id !== sel && w < vw * 1.5) size = SIZES[it.open].find((s) => it.unit * s <= w * 0.84 && s * 1.7 <= h) || 0;
          if (size) {
            const pt = map.latLngToLayerPoint(it.at);
            it.el.style.transform = `translate(${Math.round(pt.x)}px, ${Math.round(pt.y)}px) translate(-50%, -50%)`;
            it.el.style.fontSize = size + 'px';
          }
          if (!!size !== it.shown) { it.shown = !!size; it.el.classList.toggle('is-on', it.shown); }
        });
        pane.classList.remove('is-zooming');
      });
    }

    return { build, layout };
  })();

  /* ---------- Markers ---------- */

  function showDots(c) {
    markers.clearLayers();
    dots.clear();
    pin = null;
    c.places.forEach((p, i) => {
      const m = L.marker([p.lat, p.lng], {
        icon: L.divIcon({ className: 'dot-wrap', html: `<span class="dot" style="--i:${i}"></span><span class="dot__name">${esc(p.name)}</span>`, iconSize: [14, 14], iconAnchor: [7, 7] }),
        keyboard: false, riseOnHover: true, alt: p.name,
      });
      m.on('click', () => openPlace(c, i));
      if (canHover) {
        m.on('mouseover', (e) => showTip(p.name, p.category, e.originalEvent));
        m.on('mousemove', (e) => moveTip(e.originalEvent));
        m.on('mouseout', hideTip);
      }
      m.addTo(markers);
      dots.set(p, m);
    });
  }

  // Place names sit beside their dots once the map has landed. Where two would collide, the later one
  // flips to the left of its dot, and if that collides too it stays hidden (its dot is still there).
  function placeNames() {
    const taken = [];
    const hit = (r) => taken.some((t) => r.left < t.right + 4 && r.right > t.left - 4 && r.top < t.bottom + 2 && r.bottom > t.top - 2);
    dots.forEach((m) => {
      const root = m.getElement(), label = root && root.querySelector('.dot__name');
      if (!label) return;
      label.classList.remove('is-left', 'is-on');
      let r = label.getBoundingClientRect();
      if (hit(r)) { label.classList.add('is-left'); r = label.getBoundingClientRect(); }
      if (hit(r) || r.left < 4 || r.right > window.innerWidth - 4) return;
      taken.push(r);
      label.classList.add('is-on');
    });
  }

  function dropPin(p) {
    if (pin) markers.removeLayer(pin);
    dots.forEach((m, place) => m.setOpacity(place === p ? 0 : 1));
    pin = L.marker([p.lat, p.lng], {
      icon: L.divIcon({ className: 'pin-wrap', html: `<span class="pin">${PIN_SVG}</span>`, iconSize: [30, 40], iconAnchor: [15, 39] }),
      interactive: false, keyboard: false, zIndexOffset: 1000,
    }).addTo(markers);
  }

  /* ---------- Navigation ---------- */

  let panelT;
  function announce() { emit('atlas:view', { country: state.country, place: state.place }); }

  function selectCountry(c) {
    state.yours = false;
    const changed = !state.country || state.country.id !== c.id;
    const before = state.country, hovered = state.hoverId;
    state.country = c;
    state.place = null;
    state.hoverId = null;
    if (before && before.id !== c.id) restyle(before.id);
    if (hovered && hovered !== c.id) restyle(hovered);
    restyle(c.id);
    el.body.classList.add('has-country');
    Names.layout();
    if (changed) showDots(c);
    else { if (pin) { markers.removeLayer(pin); pin = null; } dots.forEach((m) => m.setOpacity(1)); }
    // The flight starts first; the panel is built a beat later so the two never land in the same frame.
    const wasOpen = el.panel.classList.contains('is-open');
    flyToCountry(c);
    haptic();
    announce();
    clearTimeout(panelT);
    const show = () => { if (state.country !== c) return; openPanel(); swapView(countryHTML(c), !wasOpen); };
    if (wasOpen) show(); else panelT = setTimeout(show, 110);
    updateWorldButton();
  }

  // Opening a place leaves the map: the stage (full-screen photos) takes over.
  function openPlace(c, i) {
    if (!state.country || state.country.id !== c.id) selectCountry(c);
    showStage(c, i);
  }

  // "View on the map" from inside a place: back to the map, zoomed to the spot with a pin.
  function showOnMap(p) {
    if (!map) return;
    dropPin(p);
    const z = p.zoom || CONFIG.placeZoom[p.category] || 10;
    takeOff();
    map.flyTo(offsetCenter([p.lat, p.lng], z), z, { duration: 1.9, easeLinearity: 0.16 });
  }

  function closeCountry() {
    const before = state.country;
    state.yours = false;
    state.country = null;
    state.place = null;
    el.body.classList.remove('has-country');
    clearTimeout(panelT);
    closePanel();
    if (markers) { markers.clearLayers(); dots.clear(); pin = null; }
    if (before) restyle(before.id);
    Names.layout();
    if (map) flyToWorld();
    announce();
    updateWorldButton();
  }

  function updateWorldButton() {
    if (!map) return;
    const away = !!state.country || map.getZoom() > worldView().zoom + 0.6;
    el.btnWorld.hidden = !away;
  }

  el.btnWorld.addEventListener('click', closeCountry);
  $('brand').addEventListener('click', closeCountry);
  $('btnYours').addEventListener('click', () => (state.yours && !state.country ? closeCountry() : showYours()));
  $('btnZoomIn').addEventListener('click', () => map && map.zoomIn(1));
  $('btnZoomOut').addEventListener('click', () => map && map.zoomOut(1));

  /* ---------- Gallery: many photos per place ----------
     Gathered live from Wikimedia (public, key-free), best first, and cached per place:
       1. photos that Wikimedia Commons reviewers rated "featured", "quality" or "valued",
          from the Commons category of the place (and of any extra articles listed in place.more)
       2. the photos editors chose for the place's Wikipedia article(s)
       3. only when 1 + 2 give fewer than 10: large unrated photos from the place's category
     Only sharp, recent photographs get through: at least 1600px wide (2400px for unrated ones),
     no maps, flags, logos, scans, portraits or sports events.
     Each photo keeps its author and licence, shown in the photo viewer. */

  const Gallery = (function () {
    const KEY = 'atlas.gallery.v5';
    const MAX = 40;
    try { ['v1', 'v2', 'v3', 'v4'].forEach((v) => localStorage.removeItem('atlas.gallery.' + v)); } catch (e) { /* ignore */ }
    let cache = {};
    try { cache = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { cache = {}; }
    const inflight = new Map();

    const IMG = 'prop=imageinfo&iiprop=url%7Csize%7Cmime%7Cextmetadata&iiurlwidth=1280&iiextmetadatafilter=DateTimeOriginal%7CArtist%7CLicenseShortName';
    const WIKI = CONFIG.photoApi;
    const COMMONS = 'https://commons.wikimedia.org/w/api.php';
    const WIKIDATA = 'https://www.wikidata.org/w/api.php';
    const BAD = /\b(maps?|flag|logo|seal|icon|diagram|chart|portrait|retrato|signature|stamp|montage|collage|emblem|symbol|banner|scheme|satellite|landsat|nasa|painting|engraving|lithograph|grabado|plaque|placa|poster|cover|ticket|coin|banknote)\b|locator|orthographic|coat of arms|escudo|bandera|mapa|karte|wappen|blason|\b(1[5-8]\d\d|19[0-6]\d)\b/i;
    const NEG = ' -rugby -football -futbol -soccer -tournament -torneo -championship -archery -match -team -player -cup -copa -olympic -marathon -cycling -concert -protest -election -president -minister -portrait -person -people';

    const json = (url) => fetch(url).then((r) => { if (!r.ok) throw new Error('gallery ' + r.status); return r.json(); });
    const clean = (html) => String(html || '').replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim().slice(0, 70);

    function usable(p, minWidth) {
      const i = p.imageinfo && p.imageinfo[0];
      if (!i || i.mime !== 'image/jpeg' || i.width < minWidth || i.height < 900) return false;
      const r = i.width / i.height;
      if (r < 0.62 || r > 2.6) return false;
      if (BAD.test(p.title)) return false;
      const d = i.extmetadata && i.extmetadata.DateTimeOriginal && i.extmetadata.DateTimeOriginal.value;
      const y = d && (String(d).match(/\b(1[5-9]\d\d|20\d\d)\b/) || [])[1];
      return !(y && +y < 2000);
    }
    function item(p) {
      const i = p.imageinfo[0], m = i.extmetadata || {};
      return { t: p.title, u: i.thumburl || i.url, w: i.width, h: i.height, a: clean(m.Artist && m.Artist.value), l: clean(m.LicenseShortName && m.LicenseShortName.value), p: i.descriptionurl || '' };
    }
    const pick = (pages, minWidth) => (pages || []).filter((p) => usable(p, minWidth)).map(item);

    const fromArticle = (title) => json(`${WIKI}?action=query&format=json&formatversion=2&origin=*&redirects=1&generator=images&gimlimit=50&titles=${encodeURIComponent(title)}&${IMG}`)
      .then((j) => pick(j.query && j.query.pages, 1600)).catch(() => []);

    const category = (title) => json(`${WIKI}?action=query&format=json&formatversion=2&origin=*&redirects=1&prop=pageprops&ppprop=wikibase_item&titles=${encodeURIComponent(title)}`)
      .then((j) => { const pg = j.query && j.query.pages && j.query.pages[0]; const q = pg && pg.pageprops && pg.pageprops.wikibase_item; if (!q) return null; return json(`${WIKIDATA}?action=wbgetclaims&format=json&origin=*&property=P373&entity=${q}`); })
      .then((w) => (w && w.claims && w.claims.P373 && w.claims.P373[0].mainsnak.datavalue && w.claims.P373[0].mainsnak.datavalue.value) || null)
      .catch(() => null);

    // P6731 is Commons' "quality assessment" statement: featured picture, quality image or valued image.
    const fromCommons = (cat, rated) => json(`${COMMONS}?action=query&format=json&formatversion=2&origin=*&generator=search&gsrnamespace=6&gsrlimit=50&gsrsearch=${encodeURIComponent(`deepcat:"${cat}" filetype:bitmap${rated ? ' haswbstatement:P6731' : ''}${NEG}`)}&${IMG}`)
      .then((j) => pick(((j.query && j.query.pages) || []).sort((a, b) => a.index - b.index), rated ? 1600 : 2400)).catch(() => []);

    // Skylines for cities, by day and by night. Reviewer-rated photos only, wide format, so nothing weak gets in.
    const skyline = (cat, words) => json(`${COMMONS}?action=query&format=json&formatversion=2&origin=*&generator=search&gsrnamespace=6&gsrlimit=20&gsrsearch=${encodeURIComponent(`deepcat:"${cat}" filetype:bitmap haswbstatement:P6731 ${words}`)}&${IMG}`)
      .then((j) => pick(((j.query && j.query.pages) || []).sort((a, b) => a.index - b.index), 2000).filter((x) => x.w / x.h >= 1.3 && x.w / x.h <= 3.2)).catch(() => []);
    const skylines = (cat) => Promise.all([skyline(cat, 'skyline -night -dusk -twilight -nacht -noche'), skyline(cat, 'skyline night'), skyline(cat, 'skyline dusk')])
      .then((r) => ({ day: r[0].slice(0, 4), night: r[1].concat(r[2]).filter((x, i, a) => a.findIndex((y) => y.t === x.t) === i).slice(0, 4) }));

    const titlesOf = (p) => {
      const t = [];
      if (p.wiki) t.push(p.wiki);
      if (p.image && p.image.indexOf('wiki:') === 0 && t.indexOf(p.image.slice(5)) < 0) t.push(p.image.slice(5));
      (p.more || []).forEach((m) => { if (t.indexOf(m) < 0) t.push(m); });
      return t.slice(0, 5);
    };
    const keyOf = (p) => p.name + '|' + titlesOf(p).join('|') + '|' + (p.photos || []).length;

    function build(p) {
      const own = (p.photos || []).map((u) => ({ t: u, u, w: 0, h: 0, a: '', l: '', p: u }));
      const titles = titlesOf(p);
      if (!titles.length) return Promise.resolve(own);
      const cats = Promise.all(titles.map(category)).then((list) => list.filter((c, i) => c && list.indexOf(c) === i));
      const rated = cats.then((list) => Promise.all(list.map((c) => fromCommons(c, true))));
      const sky = p.category === 'City' ? cats.then((list) => (list[0] ? skylines(list[0]) : { day: [], night: [] })) : Promise.resolve({ day: [], night: [] });
      return Promise.all([rated, Promise.all(titles.map(fromArticle)), sky]).then((res) => {
        const seen = new Set(), out = own.slice();
        const add = (x) => { if (x && !seen.has(x.t) && out.length < MAX) { seen.add(x.t); out.push(x); } };
        const weave = (lists) => { const n = Math.max.apply(null, lists.map((l) => l.length).concat(0)); for (let i = 0; i < n; i++) lists.forEach((l) => add(l[i])); };
        weave([res[2].day, res[2].night]);   // cities open with their skyline: day, night, day, night
        weave(res[0]);      // reviewer-rated photos first
        weave(res[1]);      // then the articles' own photos
        if (out.length >= 10) return out;
        return cats.then((list) => (list[0] ? fromCommons(list[0], false) : [])).then((extra) => { extra.slice(0, Math.max(0, 14 - out.length)).forEach(add); return out; });
      });
    }

    function load(p) {
      const k = keyOf(p);
      if (cache[k] && cache[k].length) return Promise.resolve(cache[k]);
      if (inflight.has(k)) return inflight.get(k);
      const job = build(p).catch(() => []).then((items) => {
        inflight.delete(k);
        if (items.length) {
          cache[k] = items;
          try { localStorage.setItem(KEY, JSON.stringify(cache)); }
          catch (e) { try { cache = {}; cache[k] = items; localStorage.setItem(KEY, JSON.stringify(cache)); } catch (e2) { /* storage unavailable */ } }
        }
        return items;
      });
      inflight.set(k, job);
      return job;
    }

    // Wikimedia serves fixed thumbnail widths. Pick the smallest one that covers the space, never above the original.
    function sized(it, want) {
      if (!/\/\d+px-/.test(it.u)) return it.u;
      const steps = [330, 500, 960, 1280, 1920].filter((s) => !it.w || s <= it.w);
      const step = steps.find((s) => s >= want) || steps[steps.length - 1] || 1280;
      return it.u.replace(/\/\d+px-/, '/' + step + 'px-');
    }

    return { load, sized, forget: (p) => { delete cache[keyOf(p)]; } };
  })();

  /* ---------- Layers: stage and photo viewer close with the browser Back button too ---------- */

  const layers = [];
  function pushLayer(close) {
    layers.push(close);
    try { history.pushState({ atlas: layers.length }, ''); } catch (e) { /* history unavailable: buttons still work */ }
  }
  function popLayer() { const close = layers.pop(); if (close) close(); }
  function closeTop() {
    if (!layers.length) return false;
    if (history.state && history.state.atlas) history.back(); else popLayer();
    return true;
  }
  window.addEventListener('popstate', () => { if (layers.length) popLayer(); });

  /* ---------- Stage: the full-screen place experience ---------- */

  const stage = { el: $('stage'), scroll: $('stageScroll'), body: $('stageBody'), label: $('stageBackLabel'), open: false, token: 0, items: [], slides: [], slide: 0, timer: 0, after: null, io: null, country: null };

  function stageHTML(c, p) {
    const others = c.places.map((o, i) => ({ o, i })).filter((x) => x.o !== p);
    return `
      <header class="shero" data-cat="${esc(p.category)}">
        <div class="shero__media ph" data-cat="${esc(p.category)}"><span class="ph__icon">${ICON.cat[p.category] || ICON.globe}</span></div>
        <div class="shero__shade"></div>
        <div class="shero__text">
          <span class="kicker reveal" style="--i:0">${esc(c.name)}  ·  ${esc(p.category)}</span>
          <h1 class="shero__title reveal" style="--i:1">${esc(p.name)}</h1>
          <p class="shero__tag reveal" style="--i:2">${esc(p.tagline)}</p>
          <button class="save reveal${Store.isFav(c, p) ? ' is-on' : ''}" style="--i:3" type="button" data-act="save" aria-pressed="${Store.isFav(c, p)}">${ICON.heart}<span>${Store.isFav(c, p) ? 'Saved' : 'Save'}</span></button>
        </div>
        <div class="shero__cue reveal" style="--i:4" aria-hidden="true"><span>Scroll</span><i></i></div>
      </header>
      <section class="sintro">
        <p class="sintro__lead">${esc(p.description)}</p>
        <dl class="facts">
          <div class="fact"><dt>${ICON.layers}Category</dt><dd>${esc(p.category)}</dd></div>
          <div class="fact"><dt>${ICON.calendar}Best time</dt><dd>${esc(p.bestTime)}</dd></div>
          <div class="fact fact--wide"><dt>${ICON.compass}Coordinates</dt><dd>${fmtCoord(p.lat, p.lng)}</dd></div>
        </dl>
        <button class="ghost" type="button" data-act="map">${ICON.pin}<span>View on the map</span></button>
      </section>
      <section class="sgal" aria-label="Photographs of ${esc(p.name)}">
        <div class="section"><span>Photographs</span><span id="galCount">Gathering</span></div>
        <div class="rows" id="galRows">
          <div class="row"><div class="tile tile--ghost" style="--r:1.5"></div></div>
          <div class="row"><div class="tile tile--ghost" style="--r:1.3"></div><div class="tile tile--ghost" style="--r:1.6"></div></div>
          <div class="row"><div class="tile tile--ghost" style="--r:1.5"></div></div>
        </div>
      </section>
      <section class="smore">
        <div class="section"><span>More in ${esc(c.name)}</span><span>${others.length}</span></div>
        <div class="mgrid">${others.map((x) => `<button class="mcard" type="button" data-place="${x.i}" aria-label="${esc(x.o.name)}">
          ${photo(x.o.image, x.o.category, 'm', x.o.name)}<span class="pcard__shade"></span>
          <span class="mcard__body"><span class="mcard__name">${esc(x.o.name)}</span><span class="mcard__tag">${esc(x.o.category)}</span></span>
        </button>`).join('')}</div>
        <button class="ghost ghost--wide" type="button" data-act="close">${ICON.globe}<span>Back to the map</span></button>
      </section>
      <footer class="sfoot">Photographs come from Wikimedia Commons. Tap any photo to see who took it and its licence.<span id="soundCredit"></span></footer>`;
  }

  function showStage(c, i) {
    const p = c.places[i];
    const token = ++stage.token;
    state.place = p;
    stage.country = c;
    stage.items = [];
    stage.slides = [];
    stage.slide = 0;
    stage.heroBig = null;
    clearTimeout(stage.timer);
    stage.label.textContent = c.name;
    const fill = () => {
      if (token !== stage.token) return;
      stage.body.innerHTML = stageHTML(c, p);
      stage.scroll.scrollTop = 0;
      stage.body.classList.remove('is-leaving');
      Photos.mount(stage.body);
      heroFirst(p, token);
      loadGallery(p, token);
    };
    if (!stage.open) {
      fill();
      stage.open = true;
      stage.el.classList.add('is-open');
      stage.el.setAttribute('aria-hidden', 'false');
      el.body.classList.add('has-stage');
      pushLayer(hideStage);
    } else {
      stage.body.classList.add('is-leaving');
      setTimeout(fill, 380);
    }
    haptic();
    announce();
  }

  function hideStage() {
    stage.open = false;
    stage.token++;
    clearTimeout(stage.timer);
    if (stage.io) { stage.io.disconnect(); stage.io = null; }
    stage.el.classList.remove('is-open');
    stage.el.setAttribute('aria-hidden', 'true');
    el.body.classList.remove('has-stage');
    state.place = null;
    announce();
    // the list behind the stage shows the saved hearts, so refresh it if anything changed
    if (stage.dirty) { stage.dirty = false; if (state.yours && !state.country) swapView(atlasHTML(), true); else if (state.country) swapView(countryHTML(state.country), true); }
    const then = stage.after;
    stage.after = null;
    if (then) then();
    setTimeout(() => { if (!stage.open) stage.body.innerHTML = ''; }, 900);
  }

  // Hero: photos crossfade slowly behind the title, each with a gentle drift.
  function heroShow(url, token) {
    const box = stage.body.querySelector('.shero__media');
    if (!box) return;
    const img = new Image();
    img.alt = '';
    img.className = 'shero__img';
    img.onload = () => {
      if (token !== stage.token || !box.isConnected) return;
      const old = Array.prototype.slice.call(box.querySelectorAll('.shero__img'));
      box.appendChild(img);
      box.classList.remove('is-loading');
      requestAnimationFrame(() => requestAnimationFrame(() => img.classList.add('is-on')));
      setTimeout(() => old.forEach((o) => o.remove()), 2400);
    };
    img.onerror = () => { if (token === stage.token && !box.querySelector('.shero__img')) box.classList.add('is-empty'); };
    img.src = url;
  }
  function heroFirst(p, token) {
    const box = stage.body.querySelector('.shero__media');
    if (box) box.classList.add('is-loading');
    Photos.resolve([p.image]).then(() => {
      if (token !== stage.token) return;
      const info = Photos.lookup(p.image);
      if (!info) { if (box) { box.classList.remove('is-loading'); box.classList.add('is-empty'); } return; }
      heroShow(info.l, token);
      // A full-screen photo needs more pixels than a card: swap in the 1920px version when the original is that large.
      const big = info.l.replace(/\/960px-/, '/1920px-');
      if (big === info.l) return;
      const pre = new Image();
      pre.onload = () => { if (token !== stage.token) return; stage.heroBig = big; if (stage.slides.length) stage.slides[0] = big; if (stage.slide === 0) heroShow(big, token); };
      pre.src = big;
    });
  }
  function heroCycle(token) {
    clearTimeout(stage.timer);
    if (stage.slides.length < 2) return;
    stage.timer = setTimeout(() => {
      if (token !== stage.token || !stage.open) return;
      if (stage.scroll.scrollTop < window.innerHeight * 0.7 && !lb.open && !document.hidden) {
        stage.slide = (stage.slide + 1) % stage.slides.length;
        heroShow(stage.slides[stage.slide], token);
      }
      heroCycle(token);
    }, 7000);
  }

  function loadGallery(p, token) {
    Gallery.load(p).then((items) => {
      if (token !== stage.token) return;
      stage.items = items;
      renderGallery(p, items);
      // the hero keeps the place's main photo first, then drifts through the widest gallery shots
      const info = Photos.lookup(p.image);
      // phones in portrait get upright photos first, wide screens get landscape ones
      const tall = (x) => x.h > x.w;
      const pool = items.filter((x) => !x.w || x.w >= 1280);
      const wide = (isMobile() ? pool.filter(tall).concat(pool.filter((x) => !tall(x))) : pool.filter((x) => x.w >= x.h * 1.2)).slice(0, 6)
        .map((x) => Gallery.sized(x, tall(x) ? 1280 : 1920));
      stage.slides = (info ? [stage.heroBig || info.l] : []).concat(wide);
      stage.slide = 0;
      if (!info && wide.length) heroShow(wide[0], token);
      heroCycle(token);
    });
  }

  // Justified rows: every photo keeps its own proportions, rows always fill the width.
  function renderGallery(p, items) {
    const host = $('galRows'), count = $('galCount');
    if (!host) return;
    if (!items.length) {
      count.textContent = '';
      host.innerHTML = `<div class="empty">${ICON.alert}<strong>The photographs did not arrive</strong><span>They load from Wikimedia Commons, so they need a connection. Check yours and try again.</span><button type="button" data-act="retry">Try again</button></div>`;
      return;
    }
    count.textContent = items.length + (items.length === 1 ? ' photograph' : ' photographs');
    const pattern = isMobile() ? [1, 1, 2] : [2, 3, 3, 2];
    const rows = [];
    let at = 0, n = 0;
    while (at < items.length) { const take = pattern[n++ % pattern.length]; rows.push(items.slice(at, at + take).map((x, k) => ({ x, i: at + k }))); at += take; }
    if (!isMobile() && rows.length > 1 && rows[rows.length - 1].length === 1) rows[rows.length - 2].push(rows.pop()[0]);
    host.innerHTML = rows.map((row) => `<div class="row">${row.map((c) => {
      const r = c.x.w && c.x.h ? Math.max(0.66, Math.min(2.4, c.x.w / c.x.h)) : 1.5;
      return `<button class="tile" type="button" data-tile="${c.i}" style="--r:${r.toFixed(3)}" aria-label="Open photo ${c.i + 1} of ${items.length}"></button>`;
    }).join('')}</div>`).join('');

    if (stage.io) stage.io.disconnect();
    const dpr = Math.min(window.devicePixelRatio || 1, 3);
    const loadTile = (tile) => {
      const it = items[+tile.dataset.tile];
      const img = new Image();
      img.alt = p.name;
      img.decoding = 'async';
      img.onload = () => { tile.appendChild(img); requestAnimationFrame(() => requestAnimationFrame(() => tile.classList.add('is-in'))); };
      img.onerror = () => { const row = tile.parentNode; tile.remove(); if (row && !row.children.length) row.remove(); };
      img.src = Gallery.sized(it, tile.getBoundingClientRect().width * dpr);
    };
    if (!('IntersectionObserver' in window)) { host.querySelectorAll('.tile').forEach(loadTile); return; }
    stage.io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { stage.io.unobserve(en.target); loadTile(en.target); } });
    }, { root: stage.scroll, rootMargin: '900px 0px' });
    host.querySelectorAll('.tile').forEach((t) => stage.io.observe(t));
  }

  stage.body.addEventListener('click', (e) => {
    const tile = e.target.closest('[data-tile]');
    if (tile) return lbOpen(+tile.dataset.tile);
    const card = e.target.closest('[data-place]');
    if (card && stage.country) return showStage(stage.country, +card.dataset.place);
    const act = e.target.closest('[data-act]');
    if (!act) return;
    const p = state.place;
    if (act.dataset.act === 'save' && p && stage.country) {
      const on = Store.toggleFav(stage.country, p);
      act.classList.toggle('is-on', on); act.setAttribute('aria-pressed', on);
      act.querySelector('span').textContent = on ? 'Saved' : 'Save';
      stage.dirty = true; haptic();
    }
    else if (act.dataset.act === 'map' && p) { stage.after = () => showOnMap(p); closeTop(); }
    else if (act.dataset.act === 'close') closeTop();
    else if (act.dataset.act === 'retry' && p) { Gallery.forget(p); $('galCount').textContent = 'Gathering'; loadGallery(p, stage.token); }
  });
  $('stageBack').addEventListener('click', () => closeTop());

  /* ---------- Photo viewer ---------- */

  const lb = { el: $('lightbox'), img: $('lbImg'), frame: $('lbFrame'), count: $('lbCount'), credit: $('lbCredit'), i: 0, open: false };

  function lbShow(i) {
    const items = stage.items;
    if (!items.length) return;
    lb.i = (i + items.length) % items.length;
    const it = items[lb.i];
    const want = Math.max(window.innerWidth, window.innerHeight) * Math.min(window.devicePixelRatio || 1, 3) > 1400 ? 1920 : 1280;
    const url = Gallery.sized(it, want);
    lb.img.classList.remove('is-in');
    const show = (src) => { if (items[lb.i] !== it) return; lb.img.src = src; lb.img.alt = (state.place && state.place.name) || ''; requestAnimationFrame(() => lb.img.classList.add('is-in')); };
    const pre = new Image();
    pre.onload = () => show(url);
    pre.onerror = () => show(it.u);
    pre.src = url;
    lb.count.textContent = (lb.i + 1) + ' / ' + items.length;
    lb.credit.textContent = [it.a, it.l].filter(Boolean).join('  ·  ') || 'Wikimedia Commons';
    if (it.p) lb.credit.href = it.p; else lb.credit.removeAttribute('href');
    const next = items[(lb.i + 1) % items.length];
    if (next) new Image().src = Gallery.sized(next, want);
  }
  function lbOpen(i) {
    if (lb.open) return lbShow(i);
    lb.open = true;
    lb.el.classList.add('is-open');
    lb.el.setAttribute('aria-hidden', 'false');
    lbShow(i);
    pushLayer(lbHide);
  }
  function lbHide() {
    lb.open = false;
    lb.el.classList.remove('is-open');
    lb.el.setAttribute('aria-hidden', 'true');
  }
  $('lbClose').addEventListener('click', () => closeTop());
  $('lbPrev').addEventListener('click', () => lbShow(lb.i - 1));
  $('lbNext').addEventListener('click', () => lbShow(lb.i + 1));
  (function swipe() {
    let x0 = null, y0 = 0;
    lb.frame.addEventListener('pointerdown', (e) => { x0 = e.clientX; y0 = e.clientY; });
    lb.frame.addEventListener('pointerup', (e) => {
      if (x0 === null) return;
      const dx = e.clientX - x0, dy = e.clientY - y0;
      x0 = null;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) return lbShow(lb.i + (dx < 0 ? 1 : -1));
      if (Math.abs(dy) > 90 && Math.abs(dy) > Math.abs(dx)) return closeTop();             // swipe up or down to dismiss
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8 && e.target === lb.frame) closeTop();       // tap the backdrop
    });
    lb.frame.addEventListener('pointercancel', () => { x0 = null; });
  })();

  /* ---------- Search ---------- */

  const INDEX = [];
  DATA.forEach((c) => {
    INDEX.push({ type: 'country', c, name: c.name, key: norm(c.name), aka: (c.aka || []).map(norm), sub: `${c.region}  ·  ${c.places.length} places`, text: '' });
    c.places.forEach((p, i) => INDEX.push({
      type: 'place', c, i, name: p.name, key: norm(p.name), aka: (p.aka || []).map(norm), sub: `${c.name}  ·  ${p.category}`,
      text: norm(p.tagline + ' ' + p.description), ckey: norm(c.name),
    }));
  });

  const words = (s) => s.split(/[^a-z0-9']+/).filter(Boolean);

  function rank(item, q) {
    if (item.key.indexOf(q) === 0) return 0;
    if (words(item.key).some((w) => w.indexOf(q) === 0)) return 1;
    if (item.aka.some((a) => a.indexOf(q) === 0 || words(a).some((w) => w.indexOf(q) === 0))) return 2;
    if (q.length >= 3 && item.key.indexOf(q) >= 0) return 3;
    if (item.ckey && item.ckey.indexOf(q) === 0) return 4;
    if (q.length >= 4 && item.text && words(item.text).some((w) => w.indexOf(q) === 0)) return 5;
    return -1;
  }

  function find(query) {
    const q = norm(query).trim();
    if (!q) return [];
    return INDEX.map((item) => ({ item, r: rank(item, q) }))
      .filter((x) => x.r >= 0)
      .sort((a, b) => a.r - b.r || (a.item.type === b.item.type ? 0 : a.item.type === 'country' ? -1 : 1) || a.item.name.localeCompare(b.item.name))
      .slice(0, 8)
      .map((x) => x.item);
  }

  function highlight(name, query) {
    const q = norm(query).trim();
    const k = norm(name);
    const at = k.indexOf(q);
    if (!q || at < 0 || k.length !== name.length) return esc(name);
    return esc(name.slice(0, at)) + '<mark>' + esc(name.slice(at, at + q.length)) + '</mark>' + esc(name.slice(at + q.length));
  }

  let hits = [], active = -1;

  function renderResults() {
    const q = el.input.value;
    el.clear.hidden = !q;
    if (!q.trim()) return closeResults();
    hits = find(q);
    active = hits.length ? 0 : -1;
    el.results.innerHTML = hits.length
      ? hits.map((h, n) => `<button class="result${n === 0 ? ' is-active' : ''}" type="button" role="option" data-hit="${n}">
          <span class="result__icon">${h.type === 'country' ? ICON.globe : ICON.pin}</span>
          <span><span class="result__name">${highlight(h.name, q)}</span><span class="result__sub">${esc(h.sub)}</span></span>
        </button>`).join('')
      : `<div class="results__empty"><strong>Nothing found for “${esc(q.trim())}”</strong><span>Try a country or a famous place, like Peru or Machu Picchu.</span></div>`;
    el.results.hidden = false;
    el.search.setAttribute('aria-expanded', 'true');
  }

  function closeResults() {
    el.results.hidden = true;
    el.search.setAttribute('aria-expanded', 'false');
    hits = []; active = -1;
  }

  function choose(n) {
    const h = hits[n];
    if (!h) return;
    el.input.value = '';
    el.clear.hidden = true;
    closeResults();
    el.input.blur();
    if (h.type === 'country') selectCountry(h.c);
    else openPlace(h.c, h.i);
  }

  function setActive(n) {
    const items = el.results.querySelectorAll('.result');
    if (!items.length) return;
    active = (n + items.length) % items.length;
    items.forEach((b, i) => b.classList.toggle('is-active', i === active));
    items[active].scrollIntoView({ block: 'nearest' });
  }

  el.input.addEventListener('input', renderResults);
  el.input.addEventListener('focus', () => { if (el.input.value.trim()) renderResults(); });
  el.input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(active + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
    else if (e.key === 'Enter') { e.preventDefault(); choose(active < 0 ? 0 : active); }
    else if (e.key === 'Escape') { closeResults(); el.input.blur(); }
  });
  el.results.addEventListener('click', (e) => { const b = e.target.closest('[data-hit]'); if (b) choose(+b.dataset.hit); });
  el.clear.addEventListener('click', () => { el.input.value = ''; renderResults(); el.input.focus(); });
  document.addEventListener('pointerdown', (e) => { if (!el.search.contains(e.target)) closeResults(); });

  document.addEventListener('keydown', (e) => {
    if (lb.open && e.key === 'ArrowRight') return lbShow(lb.i + 1);
    if (lb.open && e.key === 'ArrowLeft') return lbShow(lb.i - 1);
    if (e.key !== 'Escape' || document.activeElement === el.input) return;
    if (!closeTop() && state.country) closeCountry();
  });

  /* ---------- Welcome ---------- */

  (function starfield() {
    const cv = $('stars');
    const ctx = cv.getContext('2d');
    let stars = [], w = 0, h = 0, raf = 0, t0 = performance.now();
    function size() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(260, (w * h) / 5200));
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.pow(Math.random(), 1.35) * h * 0.86,
        r: Math.random() < 0.08 ? 1.2 + Math.random() * 0.6 : 0.35 + Math.random() * 0.7,
        a: 0.25 + Math.random() * 0.6, sp: 0.25 + Math.random() * 0.9, ph: Math.random() * 6.28,
        warm: Math.random() < 0.18,
      }));
    }
    function draw(now) {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const tw = 0.62 + 0.38 * Math.sin(t * s.sp + s.ph);
        const x = (s.x + t * 1.6) % w;                      // a very slow drift, as if in orbit
        ctx.globalAlpha = s.a * tw;
        ctx.fillStyle = s.warm ? '#f1dcae' : '#e9eef8';
        ctx.beginPath(); ctx.arc(x, s.y, s.r, 0, 6.2832); ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }
    size();
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', size);
    document.addEventListener('atlas:begin', () => setTimeout(() => { cancelAnimationFrame(raf); window.removeEventListener('resize', size); }, 1500));
  })();

  $('btnBegin').addEventListener('click', () => {
    if (state.begun) return;
    state.begun = true;
    haptic();
    emit('atlas:begin');                      // the sound engine starts here, inside the tap (Phase 2)
    el.welcome.classList.add('is-leaving');
    el.body.classList.add('is-live');
    if (map) { map.invalidateSize(); flyToWorld(2.6); }
    setTimeout(() => { el.welcome.hidden = true; }, 1500);
    announce();
  });

  /* ---------- Boot ---------- */

  window.addEventListener('resize', () => {
    if (!map) return;
    map.invalidateSize();
    map.setMinZoom(Math.max(1, worldView().zoom - 0.75));
    if (el.panel.classList.contains('is-open')) setSheet(state.sheet);
    setLift();
    updateWorldButton();
  });

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => { /* the app works without it */ }));
  }

  if (isMobile()) el.input.placeholder = 'Search places';

  if (initMap()) loadBoundaries();

  // Small public surface for the sound and favourites modules, and for debugging.
  window.Atlas = {
    state, data: DATA, store: Store, yours: showYours,
    selectCountry: (id) => { const c = byId.get(String(id)); if (c) selectCountry(c); },
    openPlace: (id, i) => { const c = byId.get(String(id)); if (c && c.places[i]) openPlace(c, i); },
    closePlace: () => closeTop(),
    world: closeCountry,
    get map() { return map; },
  };
})();
