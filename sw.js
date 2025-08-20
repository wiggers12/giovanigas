self.addEventListener("install", e=>{
  e.waitUntil(caches.open("gigas-cache").then(cache=>{
    return cache.addAll(["/", "/index.html", "/favicon-192.png"]);
  }));
});
self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(resp=>resp || fetch(e.request))
  );
});
