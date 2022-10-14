import config from "./config";
var EmptyYaMetrika = /** @class */ (function () {
    function EmptyYaMetrika() {
        this.config = config;
    }
    EmptyYaMetrika.prototype.addFileExtension = function () {
        if (this.config.debug) {
            console.log("[vue-yandex-metrika] addFileExtension:", arguments);
        }
    };
    EmptyYaMetrika.prototype.extLink = function () {
        if (this.config.debug) {
            console.log("[vue-yandex-metrika] extLink:", arguments);
        }
    };
    EmptyYaMetrika.prototype.file = function () {
        if (this.config.debug) {
            console.log("[vue-yandex-metrika] file:", arguments);
        }
    };
    EmptyYaMetrika.prototype.getClientID = function () {
        if (this.config.debug) {
            console.log("[vue-yandex-metrika] getClientID:", arguments);
        }
    };
    EmptyYaMetrika.prototype.hit = function () {
        if (this.config.debug) {
            console.log("[vue-yandex-metrika] hit:", arguments);
        }
    };
    EmptyYaMetrika.prototype.notBounce = function () {
        if (this.config.debug) {
            console.log("[vue-yandex-metrika] notBounce:", arguments);
        }
    };
    EmptyYaMetrika.prototype.params = function () {
        if (this.config.debug) {
            console.log("[vue-yandex-metrika] params:", arguments);
        }
    };
    EmptyYaMetrika.prototype.reachGoal = function () {
        if (this.config.debug) {
            console.log("[vue-yandex-metrika] reachGoal:", arguments);
        }
    };
    EmptyYaMetrika.prototype.replacePhones = function () {
        if (this.config.debug) {
            console.log("[vue-yandex-metrika] replacePhones:", arguments);
        }
    };
    EmptyYaMetrika.prototype.setUserID = function () {
        if (this.config.debug) {
            console.log("[vue-yandex-metrika] setUserID:", arguments);
        }
    };
    EmptyYaMetrika.prototype.userParams = function () {
        if (this.config.debug) {
            console.log("[vue-yandex-metrika] userParams:", arguments);
        }
    };
    return EmptyYaMetrika;
}());
export { EmptyYaMetrika };
