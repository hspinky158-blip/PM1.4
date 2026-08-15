// Service Worker cơ bản cho PWA thông báo Deadline
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Bỏ qua fetch cache để app luôn đọc dữ liệu thời gian thực từ Firebase Cloud
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
