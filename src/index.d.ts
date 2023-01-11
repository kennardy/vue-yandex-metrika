import { App } from "vue";
import { EmptyYaMetrika } from "./empty-ya.js";
import type { Config, YaMetrika } from "./types.js";
export declare function initYandexMetrika(app: App, options: Config): void;
export declare function useYandexMetrika(): YaMetrika | EmptyYaMetrika;
