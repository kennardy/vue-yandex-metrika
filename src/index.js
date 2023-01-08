import { EmptyYaMetrika } from "./empty-ya.js";
import { updateConfig, checkConfig, loadScript, createMetrika, startTracking, } from "./helpers.js";
var _metrikaInstance = null;
export function initYandexMetrika(app, options) {
    app.config.globalProperties.$yandexMetrika = new EmptyYaMetrika();
    updateConfig(options);
    checkConfig();
    loadScript(function () {
        _metrikaInstance = createMetrika(app);
        startTracking(_metrikaInstance);
    }, options.scriptSrc);
}
export function useYandexMetrika() {
    if (_metrikaInstance) {
        return _metrikaInstance;
    }
    else {
        console.error("Yandex metrika has not been initialized");
        return (_metrikaInstance = new EmptyYaMetrika());
    }
}
