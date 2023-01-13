const staticPomodoro = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/index.js",
  "/icons/rainbow.png",
  "/audio/bell.mp3"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticPomodoro).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
