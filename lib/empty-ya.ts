import config from './config'

import {
    Config,
    EcommerceAdd,
    EcommerceClick,
    EcommerceDetail,
    EcommerceImpressions,
    EcommercePurchase,
    EcommerceRemove,
    YaMetrika
} from './types'

export class EmptyYaMetrika implements YaMetrika {
    config: Config;
    constructor() {
      this.config = config;
    }
    addFileExtension() {
      if (this.config.debug) {
        console.log("[vue-yandex-metrika] addFileExtension:", arguments);
      }
    }
    extLink() {
      if (this.config.debug) {
        console.log("[vue-yandex-metrika] extLink:", arguments);
      }
    }
    file() {
      if (this.config.debug) {
        console.log("[vue-yandex-metrika] file:", arguments);
      }
    }
    getClientID() {
      if (this.config.debug) {
        console.log("[vue-yandex-metrika] getClientID:", arguments);
      }
    }
    hit() {
      if (this.config.debug) {
        console.log("[vue-yandex-metrika] hit:", arguments);
      }
    }
    notBounce() {
      if (this.config.debug) {
        console.log("[vue-yandex-metrika] notBounce:", arguments);
      }
    }
    params() {
      if (this.config.debug) {
        console.log("[vue-yandex-metrika] params:", arguments);
      }
    }
    reachGoal() {
      if (this.config.debug) {
        console.log("[vue-yandex-metrika] reachGoal:", arguments);
      }
    }
    replacePhones() {
      if (this.config.debug) {
        console.log("[vue-yandex-metrika] replacePhones:", arguments);
      }
    }
    setUserID() {
      if (this.config.debug) {
        console.log("[vue-yandex-metrika] setUserID:", arguments);
      }
    }
    userParams() {
      if (this.config.debug) {
        console.log("[vue-yandex-metrika] userParams:", arguments);
      }
    }

    ecommerceImpressions(data: EcommerceImpressions): void {
        if (this.config.debug) {
            console.log('[vue-yandex-metrika] EcommerceImpressions data:', arguments)
        }
    }

    ecommerceClick(data: EcommerceClick): void {
        if (this.config.debug) {
            console.log('[vue-yandex-metrika] EcommerceClick data:', arguments)
        }
    }

    ecommerceDetail(data: EcommerceDetail): void {
        if (this.config.debug) {
            console.log('[vue-yandex-metrika] EcommerceDetail data:', arguments)
        }
    }

    ecommerceAdd(data: EcommerceAdd): void {
        if (this.config.debug) {
            console.log('[vue-yandex-metrika] EcommerceAdd data:', arguments)
        }
    }

    ecommerceRemove(data: EcommerceRemove): void {
        if (this.config.debug) {
            console.log('[vue-yandex-metrika] EcommerceRemove data:', arguments)
        }
    }

    ecommercePurchase(data: EcommercePurchase): void {
        if (this.config.debug) {
            console.log('[vue-yandex-metrika] EcommercePurchase data:', arguments)
        }
    }
  }