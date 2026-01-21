'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0be64a4b74ce21d08ea81837391a33f8",
"assets/AssetManifest.bin.json": "9d0dfea50077f063f8b7877cfd25d881",
"assets/AssetManifest.json": "d513a9745660443188eb37863ff62e01",
"assets/assets/fonts/goku/Goku%2520Stencil.ttf": "5e8fc0d94e7dcafce16e78d0e4821821",
"assets/assets/fonts/goku/Goku.ttf": "097905deb5713ad867cfff37b04f1941",
"assets/assets/fonts/raleway/Raleway-Black.ttf": "ca057783cb90d483d16662f202212050",
"assets/assets/fonts/raleway/Raleway-BlackItalic.ttf": "6bb69e40367ae9814db8c80152eed900",
"assets/assets/fonts/raleway/Raleway-Bold.ttf": "21c82294041b1504a5cbe4f566c8acd6",
"assets/assets/fonts/raleway/Raleway-BoldItalic.ttf": "17cc8fb94a06e0808b3a1e93a5ddee28",
"assets/assets/fonts/raleway/Raleway-ExtraBold.ttf": "1d8b73517fb37be5cf23cd3843ad4eb2",
"assets/assets/fonts/raleway/Raleway-ExtraBoldItalic.ttf": "33da5d431479287ebc94ecd1a9d1d039",
"assets/assets/fonts/raleway/Raleway-ExtraLight.ttf": "39de59bc225416348683ae039df2a1f9",
"assets/assets/fonts/raleway/Raleway-ExtraLightItalic.ttf": "7ef38cb3e0f9b6aa829cc7c9b90a615d",
"assets/assets/fonts/raleway/Raleway-Italic.ttf": "5579b5fda3005b7d349336b3425b9f89",
"assets/assets/fonts/raleway/Raleway-Light.ttf": "a36750fa9f5530b0c2760267df04ae37",
"assets/assets/fonts/raleway/Raleway-LightItalic.ttf": "bd42d0599d807527617bb3f5ed8df31b",
"assets/assets/fonts/raleway/Raleway-Medium.ttf": "0c8c5471e4a8bfe0f6167f56bcf1e2d3",
"assets/assets/fonts/raleway/Raleway-MediumItalic.ttf": "5aeca04536968ff9f32afc0bcd61eb60",
"assets/assets/fonts/raleway/Raleway-Regular.ttf": "d95649da7dfb965a289ac29105ce8771",
"assets/assets/fonts/raleway/Raleway-SemiBold.ttf": "804eb7bc11d3a38d5f5e108f8d1d1acd",
"assets/assets/fonts/raleway/Raleway-SemiBoldItalic.ttf": "5890daae80f0d711900058b808f819ec",
"assets/assets/fonts/raleway/Raleway-Thin.ttf": "02cf7464c6ce00474e8d90b69f103d75",
"assets/assets/fonts/raleway/Raleway-ThinItalic.ttf": "73456336793992177ea8a337ccaa6950",
"assets/assets/images/2.png": "439ebb43330d8f12f6e4325682193950",
"assets/assets/images/3.png": "61f5e053aad45ff310a5aa762413bd7d",
"assets/assets/images/me.JPG": "1cb8600b9cb345d4f48bd44577e6ca25",
"assets/assets/images/me.png": "c44b25c423b00481bf7bc34b3a46f26c",
"assets/assets/images/multan.png": "534ee134c11730ee5ea59d73a7537c28",
"assets/assets/images/project-images/reflection_app-1.png": "ed71b52f326ec56c4897ea280e92b9d3",
"assets/assets/images/project-images/reflection_app-10.png": "71b2aefdf360b886fd9f8f579fba8307",
"assets/assets/images/project-images/reflection_app-11.png": "12da28390f6e296637080c76f74529e0",
"assets/assets/images/project-images/reflection_app-12.png": "b1fbe4e44657742f933d9ed6b2bbe3b6",
"assets/assets/images/project-images/reflection_app-2.png": "11a3e8ada7c5579350441f1c5638eef4",
"assets/assets/images/project-images/reflection_app-3.png": "b33380b99ff55147799d226b438e54bf",
"assets/assets/images/project-images/reflection_app-4.png": "b401cc6a4a7cba0d821d45a243b6e41e",
"assets/assets/images/project-images/reflection_app-5.png": "4e4bbbaee766356ee0b2751c9546d5d1",
"assets/assets/images/project-images/reflection_app-6.png": "e28b54f8d9a59b1d079ed6e32b5acc08",
"assets/assets/images/project-images/reflection_app-7.png": "dc5d808217ebfcdd9ed532028f37b25b",
"assets/assets/images/project-images/reflection_app-8.png": "87ed5eb1b3f5cb37709bd8836c82fd94",
"assets/assets/images/project-images/reflection_app-9.png": "ca6748efdfd76e7a6019d5778fc86c58",
"assets/assets/images/project-images/ri-1.png": "1729168e1d3fbcd64b1d78fc97630a10",
"assets/assets/images/project-images/ri-10.png": "07577dc8c8bf5545086475769d128de6",
"assets/assets/images/project-images/ri-11.png": "d669a774889e3900bef0017ed87c2570",
"assets/assets/images/project-images/ri-12.png": "cc91b16598af0f98560456455e43009c",
"assets/assets/images/project-images/ri-13.png": "fc0b333e7983841b0f5a320212f3ba11",
"assets/assets/images/project-images/ri-14.png": "b9d729cd50e491fbd99e3246871562a1",
"assets/assets/images/project-images/ri-15.png": "a324faf4163fa5e95ab41faaa12c5200",
"assets/assets/images/project-images/ri-16.png": "627f4e3798c61009a647fe79f1add71a",
"assets/assets/images/project-images/ri-2.png": "3d9bbeff1814be7b32b001bb87f9db08",
"assets/assets/images/project-images/ri-3.png": "61123cd863418107cd8f751f4b243e19",
"assets/assets/images/project-images/ri-4.png": "cd7a8e9b92df7d725506688580179100",
"assets/assets/images/project-images/ri-5.png": "8d95723edf80740e9737c770833b67c0",
"assets/assets/images/project-images/ri-6.png": "4a8635050726373b9b0961a05927c8d6",
"assets/assets/images/project-images/ri-7.png": "26acea62b312f6d5cb25c99f73911ca7",
"assets/assets/images/project-images/ri-8.png": "deb84958ea46425803f1405f68e4a604",
"assets/assets/images/project-images/ri-9.png": "ddb10460c7ffcb1d2c5385c1a1b7f380",
"assets/assets/images/project-images/units_app-1.png": "3c24d93fd75e2fa88ec04917f97318a0",
"assets/assets/images/project-images/units_app-10.png": "616f93bc421697560cee5600269e8904",
"assets/assets/images/project-images/units_app-11.png": "32035bc935139c8af863427983cf13fd",
"assets/assets/images/project-images/units_app-12.png": "9e234f5e0477974dc6b29b0cced53c6e",
"assets/assets/images/project-images/units_app-2.png": "2f4447444b2af92e02a72a3e26a3b32f",
"assets/assets/images/project-images/units_app-3.png": "79019ed79ede3e4e3122dfa519f97d6c",
"assets/assets/images/project-images/units_app-4.png": "b4d4f7e7aa49d7996241fa8aff2a3ed2",
"assets/assets/images/project-images/units_app-5.png": "20910ccbf464066787705e434a899c7c",
"assets/assets/images/project-images/units_app-6.png": "dea161c2a58d863e7d8f893374c8c4a9",
"assets/assets/images/project-images/units_app-7.png": "f0d2560079176e7fc7e3d91e04ac5ef2",
"assets/assets/images/project-images/units_app-8.png": "6e8252cbecda1de6986fd7110d67a751",
"assets/assets/images/project-images/units_app-9.png": "c86030106eb12085ce7bd9f959389803",
"assets/assets/images/project-images/weather_app-1.png": "21f0a089dabd4e8bfe16942d6cc3dfe8",
"assets/assets/images/project-images/weather_app-2.png": "9560a6ead80feea1635fa9e7ea6297ef",
"assets/assets/images/project-images/weather_app-3.png": "220a7d5405cf4944a90250d20de83d88",
"assets/assets/images/project-images/weather_app-4.png": "8859a260e15f7719d600369c601a26aa",
"assets/assets/images/project-images/weather_app-5.png": "e190a250cd99a604da43d31db9e29a39",
"assets/assets/svg/apple.svg": "00587615733dd4954be85d8bf79f1d6f",
"assets/assets/svg/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/svg/linkedIn.svg": "fc81555a452e0fafcb442f489ceef19d",
"assets/assets/svg/playstore.svg": "c84e1855c8200db61a045eb5721d36ec",
"assets/assets/svg/x.svg": "8f662cde3e6a9aca24b77c1639d9423e",
"assets/FontManifest.json": "c6ae2fed216fe0b93cceb7bbdd9279af",
"assets/fonts/MaterialIcons-Regular.otf": "3c4e7aca6effe2f5704910174563e53d",
"assets/NOTICES": "f54ac14489d5b3de8d0d766ff1a1c589",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bbc3a2d2265f7ff6bef4ba339a0ba4c9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dbf0a93d2b23d99b7af4b1a6ab94e122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4bc7849a5c7774cfa18e4bc2ef82404a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "81e3df3daf4537a226240686c17880a1",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "2fbdebdaaa4ad902ce56af82fc6fb4b6",
"icons/faviconn.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8b0c192bdde8c3c6c87fe125371ac544",
"/": "8b0c192bdde8c3c6c87fe125371ac544",
"main.dart.js": "e13d3669df295e391c6d1dcf8b9f3d79",
"manifest.json": "9ec8f36492ca508b651d2254f888d123",
"version.json": "8be2ee309988a49452a6bb465ab1c17e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
