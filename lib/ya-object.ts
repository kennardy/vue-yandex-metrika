import { YaMetrika, SubParams } from "./types";

export class YaMetrikaObject implements YaMetrika {
  metrika: YaMetrika | null = null;

  setMetrika(metrika: YaMetrika | null) {
    this.metrika = metrika;

    this._setFunctions();
  }

  private _setFunctions() {
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

  addFileExtension(vals: string | string[]): void {
    throw new Error("Method not implemented.");
  }

  extLink(url: string, options?: SubParams | undefined): void {
    throw new Error("Method not implemented.");
  }
  file(url: string, options?: SubParams | undefined): void {
    throw new Error("Method not implemented.");
  }
  getClientID(callback: (clientID: string) => void): void {
    throw new Error("Method not implemented.");
  }
  hit(url: string, options?: SubParams | undefined): void {
    throw new Error("Method not implemented.");
  }
  notBounce(options?: { callback: () => void; ctx?: any } | undefined): void {
    throw new Error("Method not implemented.");
  }
  params(parameters: any[] | { [key: string]: any }): void {
    throw new Error("Method not implemented.");
  }
  reachGoal(
    target: string,
    params?:
      | { order_price?: number | undefined; currency?: string | undefined }
      | undefined,
    callback?: (() => void) | undefined,
    ctx?: any
  ): void {
    throw new Error("Method not implemented.");
  }
  replacePhones(): void {
    throw new Error("Method not implemented.");
  }
  setUserID(userID: string): void {
    throw new Error("Method not implemented.");
  }
  userParams(parameters: { [key: string]: any }): void {
    throw new Error("Method not implemented.");
  }
}
