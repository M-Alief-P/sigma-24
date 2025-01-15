var cacheName = 'sigma24';
var filesToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/main.js',
    '/js/contact.js',
    '/js/jquary.ajaxchimp.min.js',
    '/js/jquary.form.js',
    '/js/jquary.validate.min.js',
    '/js/mail-script.js',
    '/security.js',
    '/script.js',
    '/App.js',
    '/auth.js',
    '/bookendv1.js',
    '/bookendv2.js',
    '/bookendv3.js',
    '/bookendv4.js',
    '/style.css',
    '/stories-haribesar.html',
    '/stories-kejuaraan.html',
    '/stories-pesat.html',
    '/stories-sigmafact.html',
    '/Kejuaraan 2014.html',
    '/Kejuaraan 2015.html',
    '/Kejuaraan 2016.html',
    '/Kejuaraan 2017.html',
    '/Kejuaraan 2018.html',
    '/Kejuaraan 2019.html',
    '/Kejuaraan 2020.html',
    '/Kepengurusan 2014',
    '/Kepengurusan 2015',
    '/Kepengurusan 2016',
    '/Kepengurusan 2017',
    '/Kepengurusan 2018',
    '/Kepengurusan 2019',
    '/Kepengurusan 2020',
    '404.html',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.req).then(function(response) {
            return response || fetch(e.req);
        })
    );
});
return response || fetch(e.res);