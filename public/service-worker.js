self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('your-app-cache').then((cache) => {
      return cache.addAll([
        // Add URLs of static resources you want to cache
        '/index.html',
        '/static/css/main.css',
        '/static/js/main.js',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
