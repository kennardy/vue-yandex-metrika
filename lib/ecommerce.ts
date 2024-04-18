export function prepareEcommerceDataLayer() {
    console.log(window)
    if (!window.dataLayer || !Array.isArray(window.dataLayer)) window.dataLayer = []
}

declare global {
    interface Window { dataLayer: unknown[]; }
}