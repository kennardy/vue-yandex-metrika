export function getMetrikaInstance(config) {
    var instance = new Ya.Metrika2(config);
    setMetrikaInstance(instance);
    return instance;
}
function setMetrikaInstance(instance) {
    window["yaCounter".concat(config.id)] = instance;
}
