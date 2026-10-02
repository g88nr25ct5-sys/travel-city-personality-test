/* =========================================================
   旅游城市人格测试 · Service Worker

   作用：让手机「添加到主屏幕」后可以离线打开。
   注意：改完网页内容后，把下面的 CACHE_VERSION 加一
        （v1 -> v2），用户下次打开就会拿到新版本。
   ========================================================= */

const CACHE_VERSION = "v1";

const CACHE_NAME = "travel-city-personality-" + CACHE_VERSION;

/* 首次安装时预先缓存的静态资源 */
const PRECACHE_URLS = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.webmanifest",
    "./assets/icons/icon-192.png",
    "./assets/icons/icon-512.png",
    "./assets/icons/apple-touch-icon.png",
    "./assets/cities/chengdu.jpg",
    "./assets/cities/quanzhou.jpg",
    "./assets/cities/chaozhou.jpg",
    "./assets/cities/dali.jpg",
    "./assets/cities/weihai.jpg",
    "./assets/cities/jiande.jpg",
    "./assets/cities/xian.jpg",
    "./assets/cities/jingdezhen.jpg",
    "./assets/cities/datong.jpg",
    "./assets/cities/xishuangbanna.jpg",
    "./assets/cities/yining.jpg",
    "./assets/cities/kashi.jpg"
];

self.addEventListener("install", function (event) {

    event.waitUntil(

        caches
            .open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(PRECACHE_URLS);
            })
            .then(function () {
                return self.skipWaiting();
            })
    );
});

self.addEventListener("activate", function (event) {

    event.waitUntil(

        caches
            .keys()
            .then(function (keys) {

                return Promise.all(
                    keys.map(function (key) {

                        if (key !== CACHE_NAME) {
                            return caches.delete(key);
                        }

                        return null;
                    })
                );
            })
            .then(function () {
                return self.clients.claim();
            })
    );
});

self.addEventListener("fetch", function (event) {

    const request = event.request;

    if (request.method !== "GET") {
        return;
    }

    /* 页面请求：先走网络，保证内容是最新的；断网时用缓存 */
    if (request.mode === "navigate") {

        event.respondWith(

            fetch(request)
                .then(function (response) {

                    const copy = response.clone();

                    caches.open(CACHE_NAME).then(function (cache) {
                        cache.put("./index.html", copy);
                    });

                    return response;
                })
                .catch(function () {
                    return caches.match("./index.html");
                })
        );

        return;
    }

    /* 其它资源（本地静态文件 + Google Fonts 等跨域字体）：缓存优先 */
    event.respondWith(

        caches.match(request).then(function (cached) {

            if (cached) {
                return cached;
            }

            return fetch(request).then(function (response) {

                /* 跨域的 opaque 响应同样可以缓存，这样离线时字体也不会报错 */
                if (response && (response.ok || response.type === "opaque")) {

                    const copy = response.clone();

                    caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(request, copy);
                    });
                }

                return response;
            });
        })
    );
});
