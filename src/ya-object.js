export class YaMetrikaObject {
    constructor() {
        this.metrika = null;
    }
    setMetrika(metrika) {
        this.metrika = metrika;
        this._setFunctions();
    }
    _setFunctions() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const m = this.metrika;
        if (!m) {
            return;
        }
        this.addFileExtension = (_a = m.addFileExtension) === null || _a === void 0 ? void 0 : _a.bind(m);
        this.extLink = (_b = m.extLink) === null || _b === void 0 ? void 0 : _b.bind(m);
        this.file = (_c = m.file) === null || _c === void 0 ? void 0 : _c.bind(m);
        this.getClientID = (_d = m.getClientID) === null || _d === void 0 ? void 0 : _d.bind(m);
        this.hit = (_e = m.hit) === null || _e === void 0 ? void 0 : _e.bind(m);
        this.notBounce = (_f = m.notBounce) === null || _f === void 0 ? void 0 : _f.bind(m);
        this.params = (_g = m.params) === null || _g === void 0 ? void 0 : _g.bind(m);
        this.reachGoal = (_h = m.reachGoal) === null || _h === void 0 ? void 0 : _h.bind(m);
        this.replacePhones = (_j = m.replacePhones) === null || _j === void 0 ? void 0 : _j.bind(m);
        this.setUserID = (_k = m.setUserID) === null || _k === void 0 ? void 0 : _k.bind(m);
        this.userParams = (_l = m.userParams) === null || _l === void 0 ? void 0 : _l.bind(m);
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
