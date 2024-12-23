const CACHE_NAME = "fastball-extreme-v0.0.1";
const urlsToCache = [
  "/",
  "/levels/",
  ...Array(40).map((_, i) => `/level/${i}`),
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        Promise.all(
          urlsToCache.map((url) =>
            cache
              .add(url)
              .catch((err) =>
                console.warn(`Failed to cache ${url}: ${err.message}`),
              ),
          ),
        ),
      ),
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
