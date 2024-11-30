import {Router} from 'vue-router'

export interface Options {
  accurateTrackBounce?: boolean;
  childIframe?: boolean;
  clickmap?: boolean;
  defer?: boolean;
  ecommerce?: boolean;
  params?:
    | Array<any>
    | {
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

/**
 * Metrika script.
 *
 * `tag.js` is version 2,
 * `watch.js` is version 1
 *
 * Differences: https://yandex.com/support/metrica/general/tag-info.html
 */
export type ScriptSrcTy =
  | "https://mc.yandex.ru/metrika/tag.js"
  | "https://mc.yandex.ru/metrika/watch.js";

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
  scriptSrc: ScriptSrcTy;
  debug?: boolean;
  env: string;
  ignoreRoutes?: Array<string>;
  skipSamePath?: boolean;
  errorLoad?: (err: Event | string) => void;
}
declare global {
  interface Window {
    [key: `yaCounter${string}`]: YaMetrika;

    Ya: {
      Metrika: YaMetrikaInit;
      Metrika2: YaMetrikaInit;
    };
  }
}

export declare interface SubParams {
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

type DefaultEcommerce = {
  currencyCode: string
}

type DefaultEcommerceProduct ={
  id: string
  name: string
  price?: number
  brand?: string
  category?: string
  variant?: string
  list?: string
  position?: number
}

type DefaultEcommerceProductsList = { products: DefaultEcommerceProduct[] }

export type EcommerceImpressions = DefaultEcommerce & {
  impressions: DefaultEcommerceProductsList
}

export type EcommerceClick = DefaultEcommerce & {
  click: DefaultEcommerceProductsList
}

export type EcommerceAdd = DefaultEcommerce & {
  add: DefaultEcommerceProductsList
}

export type EcommerceDetail = DefaultEcommerce & {
  detail: DefaultEcommerceProductsList
}

export type EcommercePurchase = DefaultEcommerce & {
  purchase: DefaultEcommerceProductsList & {
    actionField?: {
      id : string
    },
  }
}

export type EcommerceRemove = DefaultEcommerce & {
  remove: DefaultEcommerceProductsList
}

export declare class YaMetrika {
  addFileExtension(vals: string | Array<string>): void;
  extLink(url: string, options?: SubParams): void;
  file(url: string, options?: SubParams): void;
  getClientID(callback: (clientID: string) => void): void;
  hit(url: string, options?: SubParams): void;
  notBounce(options?: { callback: () => void; ctx?: any }): void;
  params(
    parameters:
      | Array<any>
      | {
          [key: string]: any;
        }
  ): void;
  reachGoal(
    target: string,
    params?: {
      order_price?: number;
      currency?: string;
    },
    callback?: () => void,
    ctx?: any
  ): void;
  replacePhones(): void;
  setUserID(userID: string): void;
  userParams(parameters: { [key: string]: any }): void;
}

declare module "vue" {
  interface VueConstructor {
    $yandexMetrika: YaMetrika;
  }
  interface Vue {
    $yandexMetrika: YaMetrika;
  }
  interface ComponentCustomProperties {
    $yandexMetrika: YaMetrika;
  }
}
export {};
