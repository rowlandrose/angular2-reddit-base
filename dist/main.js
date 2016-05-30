"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
if (_1.environment.production) {
    core_1.enableProdMode();
}
var main = (function () {
    function main() {
        this.loading_text = 'Loading!!!';
    }
    return main;
}());
exports.main = main;
platform_browser_dynamic_1.bootstrap(_1.redditApp);
//# sourceMappingURL=main.js.map