/* Atlas sound engine

   Two kinds of sound:
     1. The Atlas theme: soft melodic menu music for the world map, composed live with the Web Audio API.
     2. Places: real field recordings (rainforest, surf, rain, streets, crowds, wind) streamed from
        Wikimedia Commons, looped seamlessly and levelled to the same loudness. No keys, no accounts.
        The temple soundscape is bells and a low drone, also made live.

   If a recording cannot be loaded (offline), the Atlas theme plays instead, so there is never noise or silence.

   Using your own audio: put a loopable file in sounds/ and name it in LOCAL below, for example
       jungle: 'sounds/jungle.mp3'
   A local file always wins over the streamed recording.

   Wiring (from app.js): 'atlas:begin' starts the engine inside the user's tap; 'atlas:view' switches
   to the country's or place's profile, and back to the theme on the world view. */
(function () {
  'use strict';

  const LOCAL = { space: null, jungle: null, ocean: null, rainforest: null, city: null, metropolis: null, desert: null, mountains: null, temple: null };

  const C = 'https://upload.wikimedia.org/wikipedia/commons/transcoded/';
  const REC = {
    toucans: { src: C + '8/87/404114_felix-blume_toucans-singing-in-the-amazonian-rainforest-brazil.ogg/404114_felix-blume_toucans-singing-in-the-amazonian-rainforest-brazil.ogg.mp3', by: 'Felix Blume', lic: 'CC0', what: 'Amazon rainforest, Brazil' },
    forest: { src: C + '0/0a/20090610_0_ambience.ogg/20090610_0_ambience.ogg.mp3', by: 'nille', lic: 'Public domain', what: 'forest ambience, Costa Rica' },
    cicadas: { src: C + 'f/fa/Calling_of_Cicads_on_Ko_Tao%2C_Thailand_1.ogg/Calling_of_Cicads_on_Ko_Tao%2C_Thailand_1.ogg.mp3', by: 'Amada44', lic: 'CC BY-SA 3.0', what: 'cicadas, Ko Tao' },
    surf: { src: C + '6/64/Ocean_Waves_on_a_Tropical_Beach.ogg/Ocean_Waves_on_a_Tropical_Beach.ogg.mp3', by: 'Jarrod Stanley', lic: 'CC0', what: 'waves on a tropical beach' },
    rain: { src: C + '9/92/Rain_on_leaves_%28Gravity_Sound%29.wav/Rain_on_leaves_%28Gravity_Sound%29.wav.mp3', by: 'Gravity Sound', lic: 'CC BY 4.0', what: 'rain on leaves' },
    street: { src: C + '5/5d/Sunday_in_the_city_street_noise1.ogg/Sunday_in_the_city_street_noise1.ogg.mp3', by: 'cori', lic: 'Public domain', what: 'a city street' },
    crowd: { src: C + 'a/a9/360703_eguobyte_large-crowd-medium-distance-stereo.wav/360703_eguobyte_large-crowd-medium-distance-stereo.wav.mp3', by: 'eguobyte', lic: 'CC0', what: 'a large crowd' },
    mexico: { src: C + '4/4a/Sunday_in_the_center_of_Mexico_City_%28close_to_Alameda_Park%29%2C_Schoeps_MS_Setup.flac/Sunday_in_the_center_of_Mexico_City_%28close_to_Alameda_Park%29%2C_Schoeps_MS_Setup.flac.mp3', by: 'Felix Blume', lic: 'CC0', what: 'downtown Mexico City on a Sunday morning' },
    square: { src: C + '4/48/2023-Mai-20_15h50min_Wien_Stephansplatz_Ecke_Schulerstra%C3%9Fe_Rotenturmgasse_Fiaker_Anhalten_Abfahren.wav/2023-Mai-20_15h50min_Wien_Stephansplatz_Ecke_Schulerstra%C3%9Fe_Rotenturmgasse_Fiaker_Anhalten_Abfahren.wav.mp3', by: 'DrTrumpet', lic: 'CC BY-SA 4.0', what: 'Stephansplatz, Vienna' },
    sellers: { src: C + '2/27/Sounds_of_Traffic_and_Sellers.ogg/Sounds_of_Traffic_and_Sellers.ogg.mp3', by: 'Ready Street', lic: 'CC BY-SA 4.0', what: 'traffic and street sellers' },
    breeze: { src: C + 'd/df/Het_ruisen_van_de_wind_-_SoundCloud_-_Beeld_en_Geluid.ogg/Het_ruisen_van_de_wind_-_SoundCloud_-_Beeld_en_Geluid.ogg.mp3', by: 'Beeld en Geluid', lic: 'CC BY-SA 3.0', what: 'wind' },
  };

  // Each profile: a display name and its layers (recording key, relative level).
  const PROFILES = {
    space: { name: 'Atlas theme' },
    jungle: { name: 'Jungle: birds and insects in the forest', layers: [['forest', 1], ['cicadas', 0.18]] },
    rainforest: { name: 'Rainforest: rain on the leaves', layers: [['rain', 0.9], ['toucans', 0.2]] },
    ocean: { name: 'Ocean: waves on the shore', layers: [['surf', 1]] },
    city: { name: 'City: a street going about its day', layers: [['street', 1]] },
    'city-latam': { name: 'City: a downtown morning', layers: [['mexico', 1]] },
    'city-europe': { name: 'City: an old-town square', layers: [['square', 1]] },
    'city-market': { name: 'City: traffic and street sellers', layers: [['sellers', 0.85]] },
    metropolis: { name: 'Metropolis: crowds and traffic', layers: [['crowd', 0.8], ['street', 0.55]] },
    desert: { name: 'Desert: a soft, dry wind', layers: [['breeze', 0.6, 0.72]] },   // third value: playback speed (slower = deeper, softer)
    mountains: { name: 'Mountains: wind in the high air', layers: [['breeze', 0.9]] },
    temple: { name: 'Temple: slow bells' },
  };

  const FADE = 1.5, CROSS = 2.0;      // seconds
  const TARGET = 0.075;               // loudness every recording is levelled to (RMS)
  const TRIM = { space: 0.5, temple: 0.8 };
  const AC = window.AudioContext || window.webkitAudioContext;

  let ctx = null, master = null, meter = null, reverb = null;
  let current = null, currentName = null, playingName = null, muted = false, volume = 0.7, offline = false;

  /* ---------- Layer: owns its nodes and timers so it can be stopped cleanly ---------- */

  function Layer(name) {
    this.name = name;
    this.out = ctx.createGain();
    this.out.gain.value = 0;
    this.out.connect(master);
    this.nodes = [];
    this.timers = [];
  }
  Layer.prototype.keep = function (n) { this.nodes.push(n); return n; };
  Layer.prototype.later = function (fn, ms) { const t = setTimeout(fn, ms); this.timers.push(t); return t; };
  Layer.prototype.fadeTo = function (v, secs) {
    const t = ctx.currentTime;
    this.out.gain.cancelScheduledValues(t);
    this.out.gain.setValueAtTime(this.out.gain.value, t);
    this.out.gain.linearRampToValueAtTime(v, t + secs);
  };
  Layer.prototype.stop = function (fade) {
    this.fadeTo(0, fade);
    if (this.sendGain) { const t = ctx.currentTime; this.sendGain.gain.setValueAtTime(this.sendGain.gain.value, t); this.sendGain.gain.linearRampToValueAtTime(0, t + fade); }
    this.dead = true;
    this.timers.forEach(clearTimeout);
    if (this.audio) setTimeout(() => { try { this.audio.pause(); } catch (e) { /* ok */ } }, fade * 1000 + 50);
    setTimeout(() => {
      this.nodes.forEach((n) => { try { if (n.stop) n.stop(); } catch (e) { /* already stopped */ } try { n.disconnect(); } catch (e) { /* ok */ } });
      try { this.out.disconnect(); } catch (e) { /* ok */ }
    }, fade * 1000 + 150);
  };

  /* ---------- Recordings: fetch, decode, level, loop ---------- */

  const buffers = new Map();     // key -> AudioBuffer (most recent last)
  const loading = new Map();

  function decode(data) {
    return new Promise((res, rej) => { const p = ctx.decodeAudioData(data, res, rej); if (p && p.catch) p.catch(rej); });
  }

  // Turn a clip into a seamless loop: the tail is crossfaded into the head, and the level is normalised.
  // The work is done in short slices with a pause between them, so a map flight in progress keeps its frames.
  const breath = () => new Promise((r) => setTimeout(r, 0));
  async function prepare(src) {
    const SLICE = 120000;
    const sr = src.sampleRate, skip = Math.floor(sr * 0.5);
    const n = src.length - skip, x = Math.min(Math.floor(sr * 3), Math.floor(n / 4)), len = n - x;
    const out = ctx.createBuffer(src.numberOfChannels, len, sr);
    let sum = 0, peak = 0;
    for (let c = 0; c < src.numberOfChannels; c++) {
      const a = src.getChannelData(c), o = out.getChannelData(c);
      for (let from = 0; from < len; from += SLICE) {
        const to = Math.min(len, from + SLICE);
        for (let i = from; i < to; i++) {
          let v = a[skip + i];
          if (i < x) { const w = i / x; v = v * Math.sqrt(w) + a[skip + len + i] * Math.sqrt(1 - w); }
          o[i] = v; sum += v * v; if (v > peak) peak = v; else if (-v > peak) peak = -v;
        }
        await breath();
      }
    }
    const rms = Math.sqrt(sum / (len * src.numberOfChannels)) || 1e-6;
    const gain = Math.min(TARGET / rms, 0.9 / (peak || 1), 12);
    for (let c = 0; c < out.numberOfChannels; c++) {
      const o = out.getChannelData(c);
      for (let from = 0; from < len; from += SLICE * 4) { const to = Math.min(len, from + SLICE * 4); for (let i = from; i < to; i++) o[i] *= gain; await breath(); }
    }
    return out;
  }

  function loadRecording(key) {
    if (buffers.has(key)) { const b = buffers.get(key); buffers.delete(key); buffers.set(key, b); return Promise.resolve(b); }
    if (loading.has(key)) return loading.get(key);
    const url = REC[key].src;
    // The first megabyte (roughly a minute of sound) is plenty for a loop and keeps memory low on phones.
    const job = fetch(url, { headers: { Range: 'bytes=0-999999' } })
      .then((r) => (r.ok ? r : Promise.reject(new Error('range'))))
      .catch(() => fetch(url).then((r) => (r.ok ? r : Promise.reject(new Error('fetch ' + r.status)))))
      .then((r) => r.arrayBuffer()).then(decode).then(prepare).then((b) => {
        buffers.set(key, b);
        while (buffers.size > 6) buffers.delete(buffers.keys().next().value);
        loading.delete(key);
        return b;
      })
      .catch((e) => { loading.delete(key); throw e; });
    loading.set(key, job);
    return job;
  }

  function playBuffer(L, buf, level, rate) {
    const s = L.keep(ctx.createBufferSource());
    s.buffer = buf; s.loop = true;
    if (rate) s.playbackRate.value = rate;
    const g = L.keep(ctx.createGain());
    g.gain.value = level;
    s.connect(g); g.connect(L.out);
    s.start(0, Math.random() * Math.max(0, buf.duration - 1));   // start somewhere new each visit
  }

  /* ---------- Reverb (shared): a soft generated room ---------- */

  function room() {
    if (reverb) return reverb;
    const sr = ctx.sampleRate, len = Math.floor(sr * 3.2);
    const ir = ctx.createBuffer(2, len, sr);
    for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6); }
    reverb = ctx.createConvolver();
    reverb.buffer = ir;
    const wet = ctx.createGain(); wet.gain.value = 0.9;
    reverb.connect(wet); wet.connect(master);
    return reverb;
  }

  /* ---------- The Atlas theme: slow, warm, melodic, with a steady pulse ---------- */

  const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);

  function theme(L) {
    const BPM = 76, beat = 60 / BPM, bar = beat * 4;
    // D major, two bars per chord: Dmaj9, Bm9, Gmaj9, A6/9
    const CHORDS = [
      { bass: 38, pad: [57, 61, 64, 66], arp: [62, 66, 69, 73, 76, 73, 69, 66] },
      { bass: 35, pad: [57, 61, 62, 66], arp: [59, 62, 66, 69, 73, 69, 66, 62] },
      { bass: 43, pad: [59, 62, 66, 69], arp: [55, 59, 62, 66, 69, 66, 62, 59] },
      { bass: 45, pad: [59, 61, 64, 66], arp: [57, 61, 64, 66, 71, 66, 64, 61] },
    ];
    // one phrase per chord: [note, starting beat, length in beats] across the chord's eight beats
    const MELODY = [
      [[78, 0, 3], [76, 3, 1], [73, 4, 4]],
      [[74, 0, 2], [73, 2, 2], [69, 4, 4]],
      [[71, 0, 3], [74, 3, 1], [78, 4, 4]],
      [[76, 0, 2], [73, 2, 2], [71, 4, 4]],
    ];

    const dry = L.keep(ctx.createGain()); dry.gain.value = 1; dry.connect(L.out);
    const send = L.keep(ctx.createGain()); send.gain.value = 0.34;
    const wetIn = room(); send.connect(wetIn);
    L.sendGain = send;   // the reverb returns through master, so the send is faded out with the layer
    const echo = L.keep(ctx.createDelay(1.5)); echo.delayTime.value = beat * 0.75;
    const fb = L.keep(ctx.createGain()); fb.gain.value = 0.36;
    const echoOut = L.keep(ctx.createGain()); echoOut.gain.value = 0.3;
    echo.connect(fb); fb.connect(echo); echo.connect(echoOut); echoOut.connect(dry); echoOut.connect(send);

    const voice = (type, f, t, a, hold, r, gain, opts) => {
      const o = ctx.createOscillator(); o.type = type; o.frequency.value = f;
      if (opts && opts.detune) o.detune.value = opts.detune;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(gain, t + a);
      g.gain.setValueAtTime(gain, t + a + hold);
      g.gain.exponentialRampToValueAtTime(0.0001, t + a + hold + r);
      let tail = g;
      if (opts && opts.lp) { const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = opts.lp; g.connect(lp); tail = lp; }
      o.connect(g); tail.connect(dry);
      if (!opts || opts.wet !== 0) tail.connect(send);
      if (opts && opts.echo) tail.connect(echo);
      o.start(t); o.stop(t + a + hold + r + 0.1);
    };

    const pad = (ch, t) => ch.pad.forEach((n, i) => [-6, 6].forEach((d) => voice('triangle', midi(n), t, bar * 0.45, bar * 1.25, bar * 0.9, 0.019, { detune: d + i, lp: 1400 })));
    const bass = (ch, t) => { voice('sine', midi(ch.bass), t, 0.03, beat * 2.6, beat * 1.2, 0.11, { wet: 0 }); voice('sine', midi(ch.bass), t + bar, 0.03, beat * 1.6, beat * 1.2, 0.085, { wet: 0 }); voice('sine', midi(ch.bass + 7), t + bar + beat * 2.5, 0.03, beat * 0.8, beat * 0.8, 0.05, { wet: 0 }); };
    const pluck = (n, t, gain) => { voice('sine', midi(n), t, 0.006, 0.02, 0.5, gain, { echo: true }); voice('triangle', midi(n + 12), t, 0.004, 0.01, 0.22, gain * 0.22, { lp: 3000 }); };
    const lead = (n, t, beats) => { voice('sine', midi(n), t, 0.06, beat * beats * 0.6, beat * beats * 0.9 + 0.6, 0.034, { echo: true }); voice('sine', midi(n) * 2, t, 0.08, beat * beats * 0.4, beat * beats * 0.6, 0.006, {}); };
    const kick = (t) => { const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(95, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.14); const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.12, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3); o.connect(g); g.connect(dry); o.start(t); o.stop(t + 0.35); };
    const tick = (t, gain) => { const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = 6200; const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 5000; const g = ctx.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.035); o.connect(hp); hp.connect(g); g.connect(dry); o.start(t); o.stop(t + 0.05); };

    // Look-ahead scheduler: two bars (one chord) at a time.
    let step = 0, next = ctx.currentTime + 0.15;
    const schedule = () => {
      if (L.dead) return;
      while (next < ctx.currentTime + 1.2) {
        const idx = step % CHORDS.length, ch = CHORDS[idx], t = next, cycle = Math.floor(step / CHORDS.length);
        pad(ch, t);
        if (cycle >= 1 || idx >= 2) bass(ch, t);
        for (let i = 0; i < 16; i++) {                       // eighth notes across two bars
          const at = t + i * beat / 2;
          if (cycle >= 1 || idx >= 1) pluck(ch.arp[i % 8], at, i % 4 === 0 ? 0.06 : 0.04);
          if (cycle >= 2) { if (i % 2 === 1) tick(at, 0.012); if (i % 4 === 0) kick(at); }
        }
        if (cycle >= 2 && cycle % 3 !== 0) MELODY[idx].forEach((m) => lead(m[0], t + m[1] * beat, m[2]));
        next += bar * 2; step++;
      }
      L.later(schedule, 300);
    };
    schedule();
  }

  /* ---------- Temple: a low drone and slow bells, no noise ---------- */

  function temple(L) {
    const send = L.keep(ctx.createGain()); send.gain.value = 0.5; send.connect(room()); L.sendGain = send;
    [[98, 0.05], [146.8, 0.028], [196, 0.014]].forEach(([f, g], i) => {
      const o = L.keep(ctx.createOscillator()); o.type = 'sine'; o.frequency.value = f;
      const a = L.keep(ctx.createGain()); a.gain.value = g;
      const l = L.keep(ctx.createOscillator()); l.frequency.value = 0.05 + i * 0.02; const lg = L.keep(ctx.createGain()); lg.gain.value = g * 0.5; l.connect(lg); lg.connect(a.gain); l.start();
      o.connect(a); a.connect(L.out); a.connect(send); o.start();
    });
    const bell = (freq, gain, decay) => {
      const t = ctx.currentTime;
      [[1, 1], [2.0, 0.55], [2.76, 0.3], [4.07, 0.16], [5.4, 0.08]].forEach(([ratio, amp], i) => {
        const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = freq * ratio;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(gain * amp, t + 0.012);
        g.gain.exponentialRampToValueAtTime(0.0001, t + decay / (1 + i * 0.4));
        o.connect(g); g.connect(L.out); g.connect(send);
        o.start(t); o.stop(t + decay + 0.1);
      });
    };
    const notes = [146.8, 196, 220, 293.7];
    const big = () => { if (L.dead) return; bell(notes[Math.floor(Math.random() * notes.length)], 0.11, 9); L.later(big, 6500 + Math.random() * 6500); };
    const small = () => { if (L.dead) return; bell(notes[Math.floor(Math.random() * notes.length)] * 4, 0.022, 3.5); L.later(small, 9000 + Math.random() * 14000); };
    L.later(big, 600); L.later(small, 5000);
  }

  /* ---------- Engine ---------- */

  function start() {
    if (ctx || !AC) return;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = muted ? 0 : volume;
    const limiter = ctx.createDynamicsCompressor();
    limiter.threshold.value = -14; limiter.knee.value = 10; limiter.ratio.value = 5; limiter.attack.value = 0.01; limiter.release.value = 0.3;
    master.connect(limiter); limiter.connect(ctx.destination);
    meter = ctx.createAnalyser(); meter.fftSize = 4096; limiter.connect(meter);
    if (ctx.state === 'suspended') ctx.resume();
    // iOS pauses audio when the app goes to the background; wake it when we come back
    document.addEventListener('visibilitychange', () => { if (!document.hidden && ctx && ctx.state === 'suspended') ctx.resume(); });
  }

  function build(name) {
    const L = new Layer(name);
    const prof = PROFILES[name];
    if (LOCAL[name]) {                                   // your own file in sounds/
      const a = new Audio(LOCAL[name]); a.loop = true; L.audio = a;
      const node = L.keep(ctx.createMediaElementSource(a)); node.connect(L.out);
      a.play().catch(() => { if (!L.dead) { try { node.disconnect(); } catch (e) { /* ok */ } theme(L); } });
      return L;
    }
    if (name === 'space') { theme(L); return L; }
    if (name === 'temple') { temple(L); return L; }
    L.pending = true;
    Promise.all(prof.layers.map((l) => loadRecording(l[0]))).then((bufs) => {
      if (L.dead) return;
      bufs.forEach((b, i) => playBuffer(L, b, prof.layers[i][1], prof.layers[i][2]));
      L.pending = false; offline = false;
      if (current === L) { playingName = name; update(); }
    }).catch(() => {
      if (L.dead) return;
      theme(L); L.pending = false; offline = true;       // offline: music instead of silence
      if (current === L) { playingName = 'space'; L.fadeTo(TRIM.space, FADE); update(); }
    });
    return L;
  }

  function play(name) {
    if (!ctx || !PROFILES[name]) return;
    if (currentName === name && current && !current.dead) return;
    const old = current;
    const fade = old ? CROSS : FADE;
    if (old) old.stop(fade);
    current = build(name);
    currentName = name;
    playingName = current.pending ? null : name;
    current.fadeTo(TRIM[name] || 1, fade);
    update();
  }

  function stop() { if (current) current.stop(FADE); current = null; currentName = null; playingName = null; update(); }

  function setMaster(target) {
    if (!ctx) return;
    const t = ctx.currentTime;
    master.gain.cancelScheduledValues(t);
    master.gain.setValueAtTime(master.gain.value, t);
    master.gain.linearRampToValueAtTime(target, t + 0.4);
  }
  function setMuted(m) { muted = m; setMaster(m ? 0 : volume); save(); update(); }
  function setVolume(v) { volume = Math.max(0, Math.min(1, v)); if (!muted) setMaster(volume); save(); update(); }

  function save() { try { localStorage.setItem('atlas.sound', JSON.stringify({ muted, volume })); } catch (e) { /* ok */ } }
  try { const s = JSON.parse(localStorage.getItem('atlas.sound')); if (s) { muted = !!s.muted; if (typeof s.volume === 'number') volume = s.volume; } } catch (e) { /* ok */ }

  function credits(name) {
    const p = PROFILES[name];
    if (!p || !p.layers || LOCAL[name]) return '';
    return 'Sound: ' + p.layers.map((l) => `${REC[l[0]].what} by ${REC[l[0]].by} (${REC[l[0]].lic})`).join(', ') + ', via Wikimedia Commons.';
  }

  // Output right now: level, plus how tonal it is (0 = pure tones, 1 = pure noise). Used by the tests.
  function level() {
    if (!meter) return { rms: 0, peak: 0, flatness: 0 };
    const d = new Float32Array(meter.fftSize); meter.getFloatTimeDomainData(d);
    let s = 0, p = 0; for (let i = 0; i < d.length; i++) { s += d[i] * d[i]; p = Math.max(p, Math.abs(d[i])); }
    const f = new Float32Array(meter.frequencyBinCount); meter.getFloatFrequencyData(f);
    let geo = 0, ar = 0, n = 0;
    for (let i = 4; i < 700; i++) { const pw = Math.pow(10, f[i] / 10); geo += Math.log(pw + 1e-20); ar += pw; n++; }
    return { rms: Math.sqrt(s / d.length), peak: p, flatness: Math.exp(geo / n) / (ar / n + 1e-20), state: ctx.state };
  }

  /* ---------- UI: sound control and "now listening" ---------- */

  const ui = {};
  function update() {
    if (!ui.box) return;
    ui.box.classList.toggle('is-muted', muted);
    ui.box.classList.toggle('is-off', !currentName);
    ui.slider.value = Math.round(volume * 100);
    let label = 'Sound off';
    if (currentName) label = current && current.pending ? 'Tuning in' : (offline && playingName === 'space' && currentName !== 'space' ? 'Atlas theme (recording unavailable)' : PROFILES[currentName].name);
    ui.name.textContent = label;
    ui.mute.setAttribute('aria-label', muted ? 'Unmute' : 'Mute');
    ui.mute.setAttribute('aria-pressed', muted ? 'true' : 'false');
    const c = currentName ? credits(currentName) : '';
    ui.box.title = c;
    setTimeout(() => { const el = document.getElementById('soundCredit'); if (el) el.textContent = currentName ? credits(currentName) : ''; }, 700);
  }

  function mountUI() {
    const box = document.getElementById('sound');
    if (!box || ui.box) return;
    ui.box = box; ui.mute = box.querySelector('#soundMute'); ui.slider = box.querySelector('#soundVol'); ui.name = box.querySelector('#soundName');
    ui.mute.addEventListener('click', () => setMuted(!muted));
    box.querySelector('#soundLabel').addEventListener('click', () => box.classList.toggle('is-open'));
    ui.slider.addEventListener('input', () => setVolume(ui.slider.value / 100));
    update();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountUI); else mountUI();

  function cityFor(c) {
    const r = c.region || '';
    if (c.id === '484' || /Central America|Caribbean|South America/.test(r)) return 'city-latam';
    if (/Europe/.test(r)) return 'city-europe';
    if (/Asia|Africa|Middle East/.test(r)) return 'city-market';
    return 'city';
  }

  document.addEventListener('atlas:begin', () => { start(); play('space'); });
  document.addEventListener('atlas:view', (e) => {
    if (!ctx) return;
    const d = e.detail || {};
    let name = (d.place && d.place.sound) || (d.country && d.country.soundProfile) || 'space';
    if (name === 'city' && d.country) name = cityFor(d.country);      // city streets differ by part of the world
    play(PROFILES[name] ? name : 'space');
  });

  window.AtlasSound = { play, stop, setMuted, setVolume, level, credits, get profile() { return currentName; }, get playing() { return playingName; }, get muted() { return muted; }, get volume() { return volume; } };
})();
