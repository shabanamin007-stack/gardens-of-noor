const CACHE_NAME = 'gardens-of-noor-v1';
const urlsToCache = [
  '/gardens-of-noor/',
  '/gardens-of-noor/game.html',
  '/gardens-of-noor/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
