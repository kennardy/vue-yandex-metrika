import { App } from "vue";
import type { YaMetrika } from "./types.js";
export declare function updateConfig(params: Record<string, any>): void;
export declare function checkConfig(): void;
export declare function loadScript(callback: () => void, scriptSrc?: import("./types.js").ScriptSrcTy): void;
export declare function createMetrika(app: App): YaMetrika;
export declare function startTracking(metrika: YaMetrika): void;
