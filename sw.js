const CACHE_NAME = "gigas-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./qrcode.html",
  "./area.do.cliente.html",
  "./pedidos.html",
  "./manifest.webmanifest"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((resp) => resp || fetch(e.request)));
});
