import { App } from "vue";
import type { YaMetrika } from "./types.js";
export declare function updateConfig(params: Record<string, any>): void;
export declare function checkConfig(): void;
export declare function loadScript(callback: () => void, scriptSrc?: "https://mc.yandex.ru/metrika/tag.js"): void;
export declare function createMetrika(app: App): YaMetrika;
export declare function startTracking(metrika: YaMetrika): void;
