self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('offline').then(function(cache) {
        return cache.addAll([
          '/',
          'style.css',
          'scripts.js',
          'index.html' // Customize this as per your needs
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  