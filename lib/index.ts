/* istanbul ignore file */
import { App } from "vue";
import { EmptyYaMetrika } from "./empty-ya.js";
import {
  updateConfig,
  checkConfig,
  loadScript,
  createMetrika,
  startTracking,
} from "./helpers.js";

import type { Config, YaMetrika } from "./types.js";

let _metrikaInstance: YaMetrika | null = null;

export function initYandexMetrika(app: App, options: Config) {
  app.config.globalProperties.$yandexMetrika = new EmptyYaMetrika();
  updateConfig(options);
  checkConfig();
  loadScript(() => {
    _metrikaInstance = createMetrika(app);
    startTracking(_metrikaInstance);
  }, options.scriptSrc);
}

export function useYandexMetrika() {
  if (_metrikaInstance) {
    return _metrikaInstance;
  } else {
    console.error("Yandex metrika has not been initialized");
    return (_metrikaInstance = new EmptyYaMetrika());
  }
}
