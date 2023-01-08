import type { Config, YaMetrika } from "./types"

export function getMetrikaInstance (config: Config | Record<string, any>): YaMetrika {
    const instance = new window.Ya.Metrika2(config)
    setMetrikaInstance(instance, config as Config)
    return instance
}

function setMetrikaInstance (instance: YaMetrika, config: Config) {
    window[`yaCounter${config.id}`] = instance
}