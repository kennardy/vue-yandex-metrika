import Router from 'vue-router';

export interface Options {
  accurateTrackBounce?: boolean,
  childIframe?: boolean,
  clickmap?: boolean,
  defer?: boolean,
  ecommerce?: boolean,
  params?: Array<any>|{[key: string]: any},
  userParams?: {[key: string]: any},
  trackHash?: boolean,
  trackLinks?: boolean,
  trustedDomains?: Array<string>,
  type?: number,
  webvisor?: boolean,
  triggerEvent?: boolean
}

interface YaOptions extends Options {
  id?: null|string,
}

export interface Config {
  id?: null|string,
  options?: {
    accurateTrackBounce?: boolean,
    clickmap?: boolean,
    defer?: boolean,
    ecommerce?: boolean,
    params?: Array<any>,
    userParams?: {[key: string]: any},
    trackHash?: boolean,
    trackLinks?: boolean,
    type?: number,
    webvisor?: boolean,
    triggerEvent?: boolean
  },
  router?: null|Router,
  scriptSrc?: 'https://mc.yandex.ru/metrika/tag.js',
  debug?: boolean,
  ignoreRoutes?: Array<string>,
  skipSamePath?: boolean,
  errorLoad?: (err: Event|string) => void
}

declare global {
  interface Window {
    yaCounters: {[key: string]: YaMetrika };
  }
}

declare interface SubParams {
  callback?: ()=>void,
  ctx?: any,
  params?: {
    order_price?:number,
    currency?: string
  },
  referer?: string,
  title?: string
}

export declare class YaMetrika {
  public Metrika2(params: YaOptions): YaMetrika;
  public addFileExtension(vals: string|Array<string>): void;
  public extLink(url: string, options?:SubParams): void;
  public file(url: string, options?:SubParams): void;
  public getClientID(callback: (clientID: string) => void): void;
  public hit(url: string, options?:SubParams): void;
  public notBounce(options?: {callback: ()=>void, ctx?: any}): void;
  public params(parameters: Array<any>|{[key: string]: any}): void;
  public reachGoal(target: string, params?: { order_price?:number, currency?: string }, callback?: ()=>void, ctx?: any): void;
  public replacePhones(): void;
  public setUserID(userID: string): void;
  public userParams(parameters: {[key: string]: any}): void;
}

declare global {
  class Ya extends YaMetrika {}
}

declare module 'vue/types/vue' {
  interface VueConstructor {
    $metrika: YaMetrika
  }

  interface Vue {
    $metrika: YaMetrika,
  }
}
