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

    this.addFileExtension = m.addFileExtension?.bind(m);
    this.extLink = m.extLink?.bind(m);
    this.file = m.file?.bind(m);
    this.getClientID = m.getClientID?.bind(m);
    this.hit = m.hit?.bind(m);
    this.notBounce = m.notBounce?.bind(m);
    this.params = m.params?.bind(m);
    this.reachGoal = m.reachGoal?.bind(m);
    this.replacePhones = m.replacePhones?.bind(m);
    this.setUserID = m.setUserID?.bind(m);
    this.userParams = m.userParams?.bind(m);
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
