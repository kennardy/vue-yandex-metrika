export function getMetrikaInstance(config) {
    const instance = new window.Ya.Metrika2(config);
    setMetrikaInstance(instance, config);
    return instance;
}
function setMetrikaInstance(instance, config) {
    window[`yaCounter${config.id}`] = instance;
}
