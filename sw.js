const CACHE_NAME = "gigas-cache-v2"; // sempre incremente para atualizar
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon-32.png",
  "/favicon-192.png",
  "/favicon-512.png",
  "/styles.css", // se você tiver um CSS separado
  "/app.js"      // se tiver seu JS separado
];

// Instala e faz cache inicial
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Service Worker: adicionando arquivos ao cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Ativa e remove caches antigos
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => {
          console.log("Service Worker: removendo cache antigo", key);
          return caches.delete(key);
        })
      );
    })
  );
});

// Intercepta requisições
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // 1º tenta do cache, se não tiver pega da rede
      return (
        response ||
        fetch(event.request).then(fetchResponse => {
          // salva no cache automaticamente os novos
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        }).catch(() => {
          // fallback offline: você pode mostrar uma página offline.html
          if (event.request.mode === "navigate") {
            return caches.match("/index.html");
          }
        })
      );
    })
  );
});
