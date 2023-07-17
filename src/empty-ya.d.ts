import type { Config, YaMetrika } from "./types.js";
export declare class EmptyYaMetrika implements YaMetrika {
    config: Config;
    constructor();
    addFileExtension(): void;
    extLink(): void;
    file(): void;
    getClientID(): void;
    hit(): void;
    notBounce(): void;
    params(): void;
    reachGoal(): void;
    replacePhones(): void;
    setUserID(): void;
    userParams(): void;
}
