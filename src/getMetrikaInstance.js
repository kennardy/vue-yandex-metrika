import { EmptyYaMetrika } from "./empty-ya.js";
export function getMetrikaInstance(config, params) {
    let instance;
    try {
        const hasMetrika1 = (window === null || window === void 0 ? void 0 : window.Ya) && window.Ya.Metrika;
        if (params.tryMetrika1 && hasMetrika1) {
            instance = new window.Ya.Metrika(config);
        }
        else {
            instance = new window.Ya.Metrika2(config);
        }
    }
    catch (e) {
        console.error("Error initializing yandex metrika: ", e);
    }
    if (!instance) {
        console.error("No Metrika or Metrika2 in window.Ya");
        instance = new EmptyYaMetrika();
    }
    setMetrikaInstance(instance, config);
    return instance;
}
function setMetrikaInstance(instance, config) {
    window[`yaCounter${config.id}`] = instance;
}
