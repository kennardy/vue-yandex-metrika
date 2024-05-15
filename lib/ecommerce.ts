export function prepareEcommerceDataLayer() {
    if (!window.dataLayer || !Array.isArray(window.dataLayer)) window.dataLayer = []
}

declare global {
    interface Window { dataLayer: unknown[]; }
}