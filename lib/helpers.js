"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startTracking = exports.createMetrika = exports.loadScript = void 0;
var debug = process.env.NODE_ENV === "production";
function loadScript(callback, scriptSrc, err) {
    if (scriptSrc === void 0) { scriptSrc = 'https://mc.yandex.ru/metrika/tag.js'; }
    var head = document.head || document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.async = true;
    script.charset = 'utf-8';
    script.src = scriptSrc;
    head.appendChild(script);
    script.onload = callback;
    if (err)
        script.onerror = err;
}
exports.loadScript = loadScript;
function createMetrika(v, config) {
    if (!debug) {
        // Creates Metrika
        var init = __assign({ id: config.id }, config.options);
        var metrika = (new Ya).Metrika2(init);
        window.yaCounters["" + config.id] = metrika;
        return v.prototype.$metrika = v.$metrika = metrika;
    }
    else {
        // Mock metrika
        console.warn('[vue-yandex-metrika] Tracking is disabled, because env option is not "production"');
        if (config.debug) {
            console.warn('[vue-yandex-metrika] DEBUG is true: you\'ll see all API calls in the console');
        }
        return v.prototype.$metrika = v.$metrika = {
            Metrika2: function () { return new Ya; },
            addFileExtension: function () { if (config.debug) {
                console.log('[vue-yandex-metrika] addFileExtension:', arguments);
            } },
            extLink: function () { if (config.debug) {
                console.log('[vue-yandex-metrika] extLink:', arguments);
            } },
            file: function () { if (config.debug) {
                console.log('[vue-yandex-metrika] file:', arguments);
            } },
            getClientID: function () { if (config.debug) {
                console.log('[vue-yandex-metrika] getClientID:', arguments);
            } },
            hit: function () { if (config.debug) {
                console.log('[vue-yandex-metrika] hit:', arguments);
            } },
            notBounce: function () { if (config.debug) {
                console.log('[vue-yandex-metrika] notBounce:', arguments);
            } },
            params: function () { if (config.debug) {
                console.log('[vue-yandex-metrika] params:', arguments);
            } },
            reachGoal: function () { if (config.debug) {
                console.log('[vue-yandex-metrika] reachGoal:', arguments);
            } },
            replacePhones: function () { if (config.debug) {
                console.log('[vue-yandex-metrika] replacePhones:', arguments);
            } },
            setUserID: function () { if (config.debug) {
                console.log('[vue-yandex-metrika] setUserID:', arguments);
            } },
            userParams: function () { if (config.debug) {
                console.log('[vue-yandex-metrika] userParams:', arguments);
            } }
        };
    }
}
exports.createMetrika = createMetrika;
function startTracking(metrika, config) {
    // Starts autotracking if router is passed
    if (config.router) {
        config.router.afterEach(function (to, from) {
            // check if route is in ignoreRoutes
            if (config.ignoreRoutes && to.name && config.ignoreRoutes.indexOf(to.name) > -1) {
                return;
            }
            // do not track page visit if previous and next routes URLs match
            if (config.skipSamePath && to.path == from.path) {
                return;
            }
            // track page visit
            metrika.hit(to.path, { referer: from.path });
        });
    }
}
exports.startTracking = startTracking;
