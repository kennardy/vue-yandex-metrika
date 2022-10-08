import {Router} from 'vue-router';
export interface Options {
    accurateTrackBounce?: boolean;
    childIframe?: boolean;
    clickmap?: boolean;
    defer?: boolean;
    ecommerce?: boolean;
    params?: Array<any> | {
        [key: string]: any;
    };
    userParams?: {
        [key: string]: any;
    };
    trackHash?: boolean;
    trackLinks?: boolean;
    trustedDomains?: Array<string>;
    type?: number;
    webvisor?: boolean;
    triggerEvent?: boolean;
}
interface YaOptions extends Options {
    id?: null | string;
}
export interface Config {
    id?: null | string;
    options?: {
        accurateTrackBounce?: boolean;
        clickmap?: boolean;
        defer?: boolean;
        ecommerce?: boolean;
        params?: Array<any>;
        userParams?: {
            [key: string]: any;
        };
        trackHash?: boolean;
        trackLinks?: boolean;
        type?: number;
        webvisor?: boolean;
        triggerEvent?: boolean;
    };
    router?: null | Router;
    scriptSrc: 'https://mc.yandex.ru/metrika/tag.js';
    debug?: boolean;
    env: string;
    ignoreRoutes?: Array<string>;
    skipSamePath?: boolean;
    errorLoad?: (err: Event | string) => void;
}
declare global {
    interface Window {
        yaCounters?: {
            [key: string]: YaMetrika;
        };
        Ya: {
            Metrika2: YaMetrikaInit;
        };
    }
}
declare interface SubParams {
    callback?: () => void;
    ctx?: any;
    params?: {
        order_price?: number;
        currency?: string;
    };
    referer?: string;
    title?: string;
}
interface YaMetrikaInit {
    new (params: YaOptions): YaMetrika;
}
export declare class YaMetrika {
    addFileExtension(vals: string | Array<string>): void;
    extLink(url: string, options?: SubParams): void;
    file(url: string, options?: SubParams): void;
    getClientID(callback: (clientID: string) => void): void;
    hit(url: string, options?: SubParams): void;
    notBounce(options?: {
        callback: () => void;
        ctx?: any;
    }): void;
    params(parameters: Array<any> | {
        [key: string]: any;
    }): void;
    reachGoal(target: string, params?: {
        order_price?: number;
        currency?: string;
    }, callback?: () => void, ctx?: any): void;
    replacePhones(): void;
    setUserID(userID: string): void;
    userParams(parameters: {
        [key: string]: any;
    }): void;
}
declare module '@vue/runtime-core' {
    interface VueConstructor {
        $metrika: YaMetrika;
    }
    interface Vue {
        $metrika: YaMetrika;
    }
    interface ComponentCustomProperties {
        $metrika: YaMetrika;
    }
}
export {}
