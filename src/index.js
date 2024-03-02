import { EmptyYaMetrika } from './empty-ya.js';
import { checkConfig, createMetrika, loadScript, startTracking, updateConfig, } from './helpers.js';
import { YaMetrikaObject } from './ya-object.js';
let _metrikaInstance = new YaMetrikaObject();
let _app = null;
export function initYandexMetrika(app, options) {
    const emptyMetrika = new EmptyYaMetrika();
    _metrikaInstance.setMetrika(emptyMetrika);
    setApp(app);
    updateYandexMerikaByConfig(options);
}
export function useYandexMetrika() {
    return _metrikaInstance;
}
export function updateYandexMerikaByConfig(options) {
    if (!_app) {
        throw Error('Update available after init');
    }
    _app.config.globalProperties.$yandexMetrika = _metrikaInstance;
    updateConfig(options);
    checkConfig();
    loadScript(() => {
        if (!_app) {
            throw Error('Update available after init');
        }
        const metrika = createMetrika(_app);
        _metrikaInstance.setMetrika(metrika);
        startTracking(_metrikaInstance);
    }, options.scriptSrc);
}
export function setApp(app) {
    _app = app;
}
