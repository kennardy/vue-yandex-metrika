import { YaMetrika, SubParams } from "./types";
export declare class YaMetrikaObject implements YaMetrika {
    metrika: YaMetrika | null;
    setMetrika(metrika: YaMetrika | null): void;
    private _setFunctions;
    addFileExtension(vals: string | string[]): void;
    extLink(url: string, options?: SubParams | undefined): void;
    file(url: string, options?: SubParams | undefined): void;
    getClientID(callback: (clientID: string) => void): void;
    hit(url: string, options?: SubParams | undefined): void;
    notBounce(options?: {
        callback: () => void;
        ctx?: any;
    } | undefined): void;
    params(parameters: any[] | {
        [key: string]: any;
    }): void;
    reachGoal(target: string, params?: {
        order_price?: number | undefined;
        currency?: string | undefined;
    } | undefined, callback?: (() => void) | undefined, ctx?: any): void;
    replacePhones(): void;
    setUserID(userID: string): void;
    userParams(parameters: {
        [key: string]: any;
    }): void;
}
