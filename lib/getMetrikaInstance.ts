import { EmptyYaMetrika } from "./empty-ya";

import type { Config, YaMetrika } from "./types";

export function getMetrikaInstance(
  config: Config | Record<string, any>,
  params: {
    /** If `true`, try using `Ya.Metrika` first */
    tryMetrika1: boolean;
  }
): YaMetrika {
  let instance: YaMetrika | undefined;

  try {
    const hasMetrika1 = window?.Ya && window.Ya.Metrika;

    if (params.tryMetrika1 && hasMetrika1) {
      instance = new window.Ya.Metrika(config);
    } else {
      instance = new window.Ya.Metrika2(config);
    }
  } catch (e) {
    console.error("Error initializing yandex metrika: ", e);
  }

  if (!instance) {
    console.error("No Metrika or Metrika2 in window.Ya");

    instance = new EmptyYaMetrika() as YaMetrika;
  }

  setMetrikaInstance(instance, config as Config);
  return instance;
}

function setMetrikaInstance(instance: YaMetrika, config: Config) {
  window[`yaCounter${config.id}`] = instance;
}
