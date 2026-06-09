const CACHE_NAME = "san-pedro-route-universal-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/logo-alcaldia.png",
  "./assets/logo-san-pedro.png",
  "./assets/logo-jept.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;

  // No cacheamos tiles ni servicios externos de rutas para evitar datos viejos/pesados.
  const url = new URL(req.url);
  const isAppShell = url.origin === location.origin;

  if (!isAppShell) {
    event.respondWith(fetch(req).catch(() => caches.match("./index.html")));
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => {
      return cached || fetch(req).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        return response;
      }).catch(() => {
        if (req.mode === "navigate") return caches.match("./index.html");
      });
    })
  );
});
