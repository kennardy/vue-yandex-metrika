export function getMetrikaInstance (config) {
    const instance = new Ya.Metrika2(config)
    setMetrikaInstance(instance)
    return instance
}

function setMetrikaInstance (instance) {
    window[`yaCounter${config.id}`] = instance
}