import { Config, YaMetrika } from "./types";
import Vue from 'vue';
export declare function loadScript(callback: () => void, scriptSrc?: string, err?: OnErrorEventHandler): void;
export declare function createMetrika(v: typeof Vue, config: Config): YaMetrika;
export declare function startTracking(metrika: YaMetrika, config: Config): void;
