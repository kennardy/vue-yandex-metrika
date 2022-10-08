/* istanbul ignore file */
import { App } from 'vue'
import { updateConfig, checkConfig, loadScript, createMetrika, startTracking } from './helpers'
import { Config, YaMetrika } from './types'

let _metrikaInstance: YaMetrika | null = null

export function initYandexMetrika (app: App, options: Config) {
    updateConfig(options)
    checkConfig()
    loadScript(() => {
        _metrikaInstance = createMetrika(app)
        startTracking(_metrikaInstance)
    }, options.scriptSrc)
}

export function useYandexMetrika() {
    if (_metrikaInstance) {
        return _metrikaInstance
    }
    throw Error('Yandex metrika should be initialized.')
}
