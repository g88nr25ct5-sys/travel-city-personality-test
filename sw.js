/* =========================================================
   旅游城市人格测试 · Service Worker

   作用：让手机「添加到主屏幕」后可以离线打开。
   注意：改完网页内容后，把下面的 CACHE_VERSION 加一
        （v1 -> v2），用户下次打开就会拿到新版本。
   ========================================================= */

const CACHE_VERSION = "v5";

const CACHE_NAME = "travel-city-personality-" + CACHE_VERSION;

/* 首次安装时预先缓存的静态资源 */
const PRECACHE_URLS = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.webmanifest",
    "./assets/fonts/fonts.css",
    "./assets/fonts/MaShanZheng.woff2",
    "./assets/fonts/NotoSerifSC.woff2",
    "./assets/fonts/NotoSansSC.woff2",
    "./assets/fonts/ZCOOLXiaoWei.woff2",
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

    const url = new URL(request.url);

    /* 页面、样式、脚本：先走网络，保证改动立刻生效；断网时才用缓存。
       之前这里对 CSS 用的是「缓存优先」，这也是「改了样式但浏览器还在用
       旧样式」的原因之一。 */
    const isCode =
        request.mode === "navigate" ||
        request.destination === "style" ||
        request.destination === "script" ||
        /\.(css|js|html)$/.test(url.pathname);

    if (isCode) {

        event.respondWith(

            fetch(request)
                .then(function (response) {

                    const copy = response.clone();

                    caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(request, copy);
                    });

                    return response;
                })
                .catch(function () {
                    /* 忽略 ?v= 这类查询串，保证离线时也能命中缓存 */
                    return caches
                        .match(request, { ignoreSearch: true })
                        .then(function (hit) {
                            return hit || caches.match("./index.html");
                        });
                })
        );

        return;
    }

    /* 图片、字体等不常变的资源：缓存优先 */
    event.respondWith(

        caches.match(request, { ignoreSearch: true }).then(function (cached) {

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
