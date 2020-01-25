/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["css/image.css","73df27af9deeb66033e9801e91afafbf"],["css/style.css","01a7bf03f080fe44ef51809b192acd63"],["design1.html","ad255a30d2c8f2b62b1fa9b55b75ce2a"],["design2.html","e36aaafb0f9465c88696fdf315666cae"],["images/Compressed/Photography/DSCF7608.jpg","308df2de6b15e1853a2281569b0ae2f1"],["images/Compressed/Photography/IMG_20170121_145559.jpg","f357a43b851312da869b9b1e56b45152"],["images/Compressed/Photography/IMG_20170121_150712.jpg","297ca86e2efdc0a2b53c38a29007c23d"],["images/Compressed/Photography/IMG_20170913_143103.jpg","1f9a5288b71fc2ebfb6f45318e3f5539"],["images/Compressed/Photography/IMG_20170913_170112.jpg","d71f729895c8a620f1cdc3e2f5242a58"],["images/Compressed/Photography/IMG_20170913_170217.jpg","a0717c11eaf4734255f81d2707a7a1a9"],["images/Compressed/Photography/IMG_20170913_170259.jpg","5bf3b413374fc1ab440d47beea092eaf"],["images/Compressed/Photography/IMG_20170913_172401.jpg","dc796374a367a42aa2b88ea3b06b02af"],["images/Compressed/Photography/IMG_20171008_161533~2.jpg","0d77f9daceee06b44ba34cab496c3435"],["images/Compressed/Photography/IMG_20171020_211521.jpg","318b4e6cace0c7b874b89b0d4a0e967b"],["images/Compressed/Photography/IMG_20171101_151350~2.jpg","1746ceb1e3177ff3569b492fb69a8695"],["images/Compressed/Photography/IMG_20171103_154710.jpg","5c81b7471192cc1a39472859916d6f9d"],["images/Compressed/Photography/IMG_20171109_153510.jpg","9c98c187e0d13237db3be957fe5e30da"],["images/Compressed/Photography/IMG_20171126_150603~2.jpg","1e8372aeffc394f321c220b7afa9789d"],["images/Compressed/Photography/IMG_20171205_070351.jpg","fca9e7190d6c39586bdb2087e7a38c8d"],["images/Compressed/Photography/IMG_20171216_185052.jpg","7c3787c61b4c11066956f2dacc6a4f86"],["images/Compressed/Photography/IMG_20171231_130902.jpg","4b9f01e886dff0bf436aa8dd4b9f253e"],["images/Compressed/Photography/IMG_20171231_130937.jpg","7845d224d01da4270313136b6f90e86c"],["images/Compressed/Photography/IMG_20180121_140016.jpg","1fc42018b1efdf34b17b25f7d828affa"],["images/Compressed/Photography/IMG_20180121_144209.jpg","a7c58ac41e36b78fcbc65d07be96d941"],["images/Compressed/Photography/IMG_20180204_164345~2.jpg","85a1bc6958f9841a8ca2e659faaf1a24"],["images/Compressed/Photography/IMG_20180208_213855.jpg","29a701d64c0e003469643b44e32ce4fc"],["images/Compressed/Photography/IMG_20180220_100531~2.jpg","ccfe5ebabf69a7fada398ab5a9c4b178"],["images/Compressed/Photography/IMG_20180404_130717.jpg","f2b96959ebeca97b35f25545a629724d"],["images/Compressed/Photography/IMG_20180404_130913.jpg","e10214afd370258043c82013e5fb1d3e"],["images/Compressed/Photography/IMG_20180408_140942~2.jpg","da88e4719eaa0aecc9f84c1c2bad753d"],["images/Compressed/Photography/IMG_20180408_141427.jpg","20b434db29c235f34b46441110a2b853"],["images/Compressed/Photography/IMG_20180414_172746.jpg","6e52bfe2a99e988356c9e4125ee44c4c"],["images/Compressed/Photography/IMG_20180421_140651~2.jpg","85648c849c8a2b8c009cd518911760fa"],["images/Compressed/Photography/IMG_20180425_142314.jpg","126994dcc6a165acb559bd525fe3c6e9"],["images/Compressed/Photography/IMG_20180426_163205.jpg","28e422fdcda3f0e33f5645bd3f28b0d8"],["images/Compressed/Photography/IMG_20180428_113214~2.jpg","84664c1769e624360567f88a3694c222"],["images/Compressed/Photography/IMG_20180726_094503~2.jpg","f368f7426c5c554bfd660e0efda4b4c9"],["images/Photography/getfilename.cpp","d07e189847d526808ee907a668654d3c"],["images/Reviews/bandicam 2019-03-29 22-15-59-651.jpg","868fefda56d43d4d4498d19f63a414a8"],["images/Reviews/bandicam 2019-03-29 22-16-47-372.jpg","e8c483563ac52ea917e0d62a27577738"],["images/Reviews/bandicam 2019-03-29 22-17-46-361.jpg","f75b208a5e105b830af28e277dbaaa73"],["images/Reviews/bandicam 2019-03-29 22-18-47-174.jpg","fa3c55ab962a72cd826ee2ee1e4ed8d5"],["images/Reviews/bandicam 2019-03-29 22-19-01-756.jpg","6d962c2f738d3e08a053363a30d09ff4"],["images/Reviews/bandicam 2019-03-29 22-19-20-818.jpg","672fc06a9dbd6467aca6f9292e3f4ae2"],["images/Reviews/bandicam 2019-03-29 22-19-45-196.jpg","febafb88eebb27cb1823ba3662c6a043"],["images/Reviews/bandicam 2019-03-29 22-19-53-901.jpg","bb2d0e14260b712771eb92c52856c7ee"],["images/Reviews/bandicam 2019-03-29 22-20-03-237.jpg","647ae5554f7d4b1244fb936bddb492ac"],["images/Visual/Abhinandan.jpg","ac98e188e3041eaafec9a498e93daf8a"],["images/Visual/CSinfinity.jpg","5b431daff2e0266ebb7991ef6b3eb6bc"],["images/Visual/RealEducation.png","208e52c2c815e98316275acae6949a7d"],["images/logo.png","4e0d7f8575e2dffe8e782757a376c30e"],["index.html","7e043f886041c75888b869ceca5c7d86"],["regress/footer.css","6fcd46b40226da9c78bfcf60c555fba3"],["regress/index.html","22fabfe98ae96af413b7205da4660765"],["regress/logo.png","4e0d7f8575e2dffe8e782757a376c30e"],["regress/regress.js","9d36f9e1d261df1b5ba82734718c3de6"],["regress/style.css","79a18b3f9f773565d0285dcc3d61828f"],["reviews.html","328b7623e853e229ab5aecbe4e2e0c41"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







