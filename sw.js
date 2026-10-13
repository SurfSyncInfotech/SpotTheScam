var CACHE = "spot-the-scam-v1";

var FILES = [
  "./",
  "./index.html",
  "./case1.html",
  "./case2.html",
  "./case3.html",
  "./safety.html",
  "./training.html",
  "./quiz.html",
  "./result.html",
  "./manifest.json",
  "./css/base.css",
  "./css/index.css",
  "./css/case1.css",
  "./css/case2.css",
  "./css/case3.css",
  "./css/safety.css",
  "./css/training.css",
  "./css/quiz.css",
  "./css/result.css",
  "./js/app.js",
  "./js/questions.js",
  "./js/case1.js",
  "./js/case2.js",
  "./js/case3.js",
  "./js/safety.js",
  "./js/training.js",
  "./js/quiz.js",
  "./js/result.js",
  "./js/install.js",
  "./assets/images/logo.svg",
  "./assets/images/icon-192.png",
  "./assets/images/icon-512.png",
  "./assets/images/icon-maskable-512.png",
  "./assets/images/case-mail.svg",
  "./assets/images/case-choice.svg",
  "./assets/images/case-world.svg",
  "./assets/images/training.svg",
  "./assets/images/shield.svg"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(FILES);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          if (key !== CACHE) return caches.delete(key);
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", function (event) {
  var request = event.request;
  if (request.method !== "GET") return;

  var url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(request).then(function (response) {
      if (response && response.ok) {
        var copy = response.clone();
        caches.open(CACHE).then(function (cache) {
          cache.put(request, copy);
        });
      }
      return response;
    }).catch(function () {
      return caches.match(request).then(function (cached) {
        if (cached) return cached;
        if (request.mode === "navigate") return caches.match("./index.html");
      });
    })
  );
});
