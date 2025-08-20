self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("gigas-store").then(cache=>{
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/favicon-32.png",
        "/favicon-192.png",
        "/favicon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(resp=>resp || fetch(e.request))
  );
});