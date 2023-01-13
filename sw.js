// mise en cache avant de lancer l'activation
var CACHE_NAME = 'pomodoro-cache-v1';
var urlsToCache = [
    '/',
    '/style.css',
    '/index.js',
]

// intall
self.addEventListener('install', evt => {
    // Perform install steps
    evt.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            // console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );

    // console.log("service worker has been installed!");
})

// activation
self.addEventListener('activate', evt => {
    // nettoyer les anciens fichiers pour un cache propre et a jour :)
    evt.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhiteList.indexOf(cacheName) === -1){
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );

    // console.log("service worker has been activate!");
})

// declenche lorsqu une requete HTTP est emise par l application
// permet d intercepter des requetes et d y repondre de façon personnalisee
self.addEventListener('fetch', evt => {
    // console.log("Ressource récupéreée" + evt.request.url);
})