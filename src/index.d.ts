import { App } from 'vue';
import type { Config } from './types.js';
import { YaMetrikaObject } from './ya-object.js';
export declare function initYandexMetrika(app: App, options: Config): void;
export declare function useYandexMetrika(): YaMetrikaObject;
export declare function updateYandexMerikaByConfig(options: Config): void;
export declare function setApp(app: App): void;
