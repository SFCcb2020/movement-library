// Minimal service worker: just enough to make the app installable and
// usable offline for a repeat visit. It deliberately does NOT try to cache
// or intercept anything going to Supabase (your data) -- only the app's own
// static shell (HTML/JS/CSS/icons) is cached, and even those are fetched
// fresh from the network first whenever possible so you never get stuck on
// a stale version after a redeploy.
//
// Bump CACHE_NAME any time you want to force every installed copy to fetch
// fresh files on next load (Vite's hashed build filenames already handle
// this for JS/CSS automatically -- bumping this mainly matters for
// index.html, manifest.json, and the icons).
const CACHE_NAME = "movement-library-shell-v1";
const SHELL_FILES = ["/", "/index.html", "/manifest.json", "/icon-192.png", "/icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  // Only ever handle same-origin GETs -- never touch Supabase API calls,
  // auth redirects, or anything cross-origin.
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return res;
      })
      .catch(() => caches.match(req).then((cached) => cached || caches.match("/index.html")))
  );
});
