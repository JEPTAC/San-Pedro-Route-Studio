const CACHE_NAME = "san-pedro-route-dual-v1";
const APP = [
  "./",
  "./index.html",
  "./desktop.html",
  "./mobile.html",
  "./manifest.webmanifest",
  "./assets/logo-alcaldia.png",
  "./assets/logo-san-pedro.png",
  "./assets/logo-jept.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP)));
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

  const url = new URL(req.url);

  if (url.origin !== location.origin) {
    event.respondWith(fetch(req));
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
      return res;
    }).catch(() => {
      if (req.mode === "navigate") return caches.match("./index.html");
    }))
  );
});
