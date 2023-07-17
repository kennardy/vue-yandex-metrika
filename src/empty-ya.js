import config from "./config.js";
export class EmptyYaMetrika {
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
}
