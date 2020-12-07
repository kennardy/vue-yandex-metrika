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
import { loadScript, createMetrika, startTracking } from './helpers';
var debug = process.env.NODE_ENV === "production";
export var defaultConfig = {
    id: null,
    options: {
        accurateTrackBounce: true,
        clickmap: true,
        defer: false,
        ecommerce: false,
        params: [],
        userParams: {},
        trackHash: false,
        trackLinks: true,
        type: 0,
        webvisor: false,
        triggerEvent: false
    },
    router: null,
    scriptSrc: 'https://mc.yandex.ru/metrika/tag.js',
    debug: false,
    ignoreRoutes: [],
    skipSamePath: true
};
function createConfig(config) {
    return __assign(__assign({}, defaultConfig), config);
}
function validateConfig(config) {
    if (typeof document === 'undefined') {
        return;
    }
    if (!config.id) {
        throw new Error('[vue-yandex-metrika] Please enter a Yandex Metrika tracking ID');
    }
    if (!config.router && !debug) {
        return console.warn('[vue-yandex-metrika] Router is not passed, autotracking is disabled');
    }
}
export default function install(v, options) {
    if (options === void 0) { options = { scriptSrc: 'https://mc.yandex.ru/metrika/tag.js' }; }
    var config = createConfig(options);
    validateConfig(config);
    loadScript(function () {
        var metrika = createMetrika(v, config);
        startTracking(metrika, config);
    }, options.scriptSrc, function (err) {
        if (config.errorLoad)
            config.errorLoad(err);
    });
}
