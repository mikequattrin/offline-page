'use strict';

// Unique identifier to cache offline assets
var cacheVersion = 1;
var currentCache = {
  offline: 'offline-cache' + cacheVersion
};

const offlineUrl = 'offline.html';

// Install your ServiceWorker and cache assets when ready
this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCache.offline).then(function(cache) {
      return cache.addAll([
        './images/offline.svg',
        offlineUrl
      ]);
    })
  );
});

// If network is unavailable, provide cached assets.
this.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(event.request.url).catch(error => {
        return caches.match(offlineUrl);
      })
    );
  }
  // Otherwise, continue loading the page
  else {
    event.respondWith(caches.match(event.request)
      .then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});