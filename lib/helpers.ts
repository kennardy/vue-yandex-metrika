/* istanbul ignore file */
import { App } from "vue";
import config from "./config";
import { EmptyYaMetrika } from "./empty-ya";
import { getMetrikaInstance } from "./getMetrikaInstance";

import type { YaMetrika } from "./types";

export function updateConfig(params: Record<string, any>) {
  // Merges default config and plugin options
  const _config = config as Record<string, any>;
  Object.keys(params).forEach(function (key) {
    _config[key] = params[key];
  });
}

export function checkConfig() {
  // Checks if config is valid
  if (typeof document === "undefined") {
    return;
  }
  if (!config.id) {
    throw new Error(
      "[vue-yandex-metrika] Please enter a Yandex Metrika tracking ID"
    );
  }
  if (!config.router && config.env !== "production") {
    return console.warn(
      "[vue-yandex-metrika] Router is not passed, autotracking is disabled"
    );
  }
}

export function loadScript(callback: () => void, scriptSrc = config.scriptSrc) {
  var head = document.head || document.getElementsByTagName("head")[0];
  const script = document.createElement("script");

  script.async = true;
  script.charset = "utf-8";
  script.src = scriptSrc;

  head.appendChild(script);

  script.onload = callback;
}

export function createMetrika(app: App): YaMetrika {
  if (config.env === "production") {
    // Creates Metrika
    const init = {
      id: config.id,
      ...config.options,
    };
    let metrika = getMetrikaInstance(init, {
      tryMetrika1: config.scriptSrc === "https://mc.yandex.ru/metrika/watch.js",
    });
    return (app.config.globalProperties.$yandexMetrika = metrika);
  } else {
    // Mock metrika
    console.warn(
      '[vue-yandex-metrika] Tracking is disabled, because env option is not "production"'
    );
    if (config.debug) {
      console.warn(
        "[vue-yandex-metrika] DEBUG is true: you'll see all API calls in the console"
      );
    }
    return (app.config.globalProperties.$yandexMetrika =
      new EmptyYaMetrika() as YaMetrika);
  }
}

export function startTracking(metrika: YaMetrika) {
  // Starts autotracking if router is passed
  if (config.router) {
    config.router.afterEach(function (to, from) {
      // check if route is in ignoreRoutes
      if (
        config.ignoreRoutes &&
        config.ignoreRoutes.indexOf(String(to.name)) > -1
      ) {
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
