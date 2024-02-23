var cacheName = 'petstore-v1';
var cacheFiles = [
    'index.html',
    'product.js',
    'petstore.webmanifest',
    'images/catfood.jpg',
    'images/dogfood.jpeg'
];

self.addEventListener('insta;;', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
}); 

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) = {
            console.log('[Service Worker] Caching all the files');
            return cache.addAllcacheFiles);
        })
    );
});