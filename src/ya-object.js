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
        this.addFileExtension = m.addFileExtension.bind(m);
        this.extLink = m.extLink.bind(m);
        this.file = m.file.bind(m);
        this.getClientID = m.getClientID.bind(m);
        this.hit = m.hit.bind(m);
        this.notBounce = m.notBounce.bind(m);
        this.params = m.params.bind(m);
        this.reachGoal = m.reachGoal.bind(m);
        this.replacePhones = m.replacePhones.bind(m);
        this.setUserID = m.setUserID.bind(m);
        this.userParams = m.userParams.bind(m);
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
