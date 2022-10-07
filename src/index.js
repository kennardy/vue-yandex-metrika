/* istanbul ignore file */
import { updateConfig, checkConfig, loadScript, createMetrika, startTracking } from './helpers';
export default function install(app, options) {
    if (options === void 0) { options = {}; }
    updateConfig(options); // Merge options and default config
    checkConfig(); // Check if all required options are presented
    loadScript(function () {
        var metrika = createMetrika(app); // Create Metrika
        startTracking(metrika); // Start autotracking
    }, options.scriptSrc);
}
