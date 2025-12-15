self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

// 캐시 안 쓰고 항상 네트워크에서 가져오기
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
