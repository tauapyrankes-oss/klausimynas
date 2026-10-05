// Programėlės failai saugomi telefone, kad ji greitai atsidarytų (teorija ir pratimai veikia ir be interneto).
// Pakeitus failus, padidink VERSION.
const VERSION = 'kalbek-v3-ema';
const SHELL = [
  './', 'index.html', 'styles.css', 'manifest.webmanifest',
  'js/app.js', 'js/util.js', 'js/exercise.js', 'js/live.js', 'js/audio.js', 'js/prompt.js', 'js/store.js', 'js/pcm-worklet.js',
  'curriculum/a1plus.js', 'curriculum/a2.js', 'curriculum/a2plus.js', 'curriculum/b1.js',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png',
  'assets/ema/manifest.json',
  'assets/ema/idle.svg',
  'assets/ema/wave.svg',
  'assets/ema/listening.svg',
  'assets/ema/talking.svg',
  'assets/ema/thinking.svg',
  'assets/ema/happy.svg',
  'assets/ema/encourage.svg',
  'assets/levels/a1plus.svg',
  'assets/levels/a2.svg',
  'assets/levels/a2plus.svg',
  'assets/levels/b1.svg',
  'assets/sfx/correct.mp3',
  'assets/sfx/wrong.mp3',
  'assets/sfx/levelup.mp3',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Savi failai: pirmiausia tinklas (kad atnaujinimai ateitų iškart), nepavykus – iš talpyklos.
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
