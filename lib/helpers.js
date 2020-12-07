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
var debug = process.env.NODE_ENV === "production";
export function loadScript(callback, scriptSrc, err) {
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
export function createMetrika(v, config) {
    var init = __assign({ id: config.id }, config.options);
    var metrika = new window.Ya.Metrika2(init);
    if (!window.yaCounters)
        window.yaCounters = {};
    window.yaCounters["" + config.id] = metrika;
    return v.prototype.$metrika = v.$metrika = metrika;
}
export function startTracking(metrika, config) {
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
