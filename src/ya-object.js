export class YaMetrikaObject {
    constructor() {
        this.metrika = null;
    }
    setMetrika(metrika) {
        this.metrika = metrika;
        this._setFunctions();
    }
    _setFunctions() {
        const m = this.metrika;
        if (!m) {
            return;
        }
        this.addFileExtension = m.addFileExtension;
        this.extLink = m.extLink;
        this.file = m.file;
        this.getClientID = m.getClientID;
        this.hit = m.hit;
        this.notBounce = m.notBounce;
        this.params = m.params;
        this.reachGoal = m.reachGoal;
        this.replacePhones = m.replacePhones;
        this.setUserID = m.setUserID;
        this.userParams = m.userParams;
    }
    addFileExtension(vals) {
        throw new Error("Method not implemented.");
    }
    extLink(url, options) {
        throw new Error("Method not implemented.");
    }
    file(url, options) {
        throw new Error("Method not implemented.");
    }
    getClientID(callback) {
        throw new Error("Method not implemented.");
    }
    hit(url, options) {
        throw new Error("Method not implemented.");
    }
    notBounce(options) {
        throw new Error("Method not implemented.");
    }
    params(parameters) {
        throw new Error("Method not implemented.");
    }
    reachGoal(target, params, callback, ctx) {
        throw new Error("Method not implemented.");
    }
    replacePhones() {
        throw new Error("Method not implemented.");
    }
    setUserID(userID) {
        throw new Error("Method not implemented.");
    }
    userParams(parameters) {
        throw new Error("Method not implemented.");
    }
}
