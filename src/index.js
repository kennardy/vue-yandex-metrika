import { updateConfig, checkConfig, loadScript, createMetrika, startTracking } from './helpers';
var _metrikaInstance = null;
export function initYandexMetrika(app, options) {
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
    throw Error('Yandex metrika should be initialized.');
}
