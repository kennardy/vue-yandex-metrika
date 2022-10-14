import { App } from "vue";
import { Config, EmptyYaMetrika, YaMetrika } from "./types";
export declare function initYandexMetrika(app: App, options: Config): void;
export declare function useYandexMetrika(): YaMetrika | EmptyYaMetrika;
