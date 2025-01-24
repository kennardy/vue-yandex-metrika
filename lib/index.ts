/* istanbul ignore file */
import {App} from 'vue'
import {EmptyYaMetrika} from './empty-ya'
import {checkConfig, createMetrika, loadScript, startTracking, updateConfig,} from './helpers'

import type {Config} from './types'
import {YaMetrikaObject} from './ya-object'

let _metrikaInstance = new YaMetrikaObject();
let _app: App | null = null

export function initYandexMetrika(app: App, options: Config) {
  setMetrikaInstance()
  setApp(app)
  updateYandexMerikaByConfig(options)
}

export function useYandexMetrika() {
  return _metrikaInstance;
}

export function updateYandexMerikaByConfig(options: Config, callbackOnReady?: () => void) {
  if (!_app) {
    throw Error('Update available after init')
  }
  _app.config.globalProperties.$yandexMetrika = _metrikaInstance
  updateConfig(options)
  checkConfig()
  loadScript(() => {
    if (!_app) {
      throw Error('Update available after init')
    }
    const metrika = createMetrika(_app)
    _metrikaInstance.setMetrika(metrika)
    startTracking(_metrikaInstance)
    if (callbackOnReady) callbackOnReady()
  }, options.scriptSrc)
}

export function setApp(app: App) {
  setMetrikaInstance()
  _app = app
}

function setMetrikaInstance() {
  const emptyMetrika = new EmptyYaMetrika();
  _metrikaInstance.setMetrika(emptyMetrika);
}

export * from './types'