import type { Config, YaMetrika } from "./types.js";
export declare function getMetrikaInstance(config: Config | Record<string, any>, params: {
    /** If `true`, try using `Ya.Metrika` first */
    tryMetrika1: boolean;
}): YaMetrika;
