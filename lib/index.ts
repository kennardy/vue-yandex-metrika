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

import type { Config } from "./types.js";
import { YaMetrikaObject } from "./ya-object.js";

let _metrikaInstance = new YaMetrikaObject();

export function initYandexMetrika(app: App, options: Config) {
  const emptyMetrika = new EmptyYaMetrika();
  _metrikaInstance.setMetrika(emptyMetrika);

  app.config.globalProperties.$yandexMetrika = _metrikaInstance;
  updateConfig(options);
  checkConfig();
  loadScript(() => {
    const metrika = createMetrika(app);
    _metrikaInstance.setMetrika(metrika);
    startTracking(_metrikaInstance);
  }, options.scriptSrc);
}

export function useYandexMetrika() {
  return _metrikaInstance;
}
