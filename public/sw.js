// Service worker : pages HTML en réseau d'abord (les mises à jour arrivent tout de suite),
// fichiers à empreinte (JS/CSS) en cache d'abord, et repli hors-ligne sur le cache.
const CACHE = 'dar-tabkha-v2';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(['./', './index.html', './manifest.webmanifest'])));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const isPage = req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html');
  if (isPage) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          caches.open(CACHE).then((c) => c.put(req, res.clone())).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((c) => c || caches.match('./index.html'))),
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) =>
      cached ||
      fetch(req).then((res) => {
        caches.open(CACHE).then((c) => c.put(req, res.clone())).catch(() => {});
        return res;
      }),
    ),
  );
});
