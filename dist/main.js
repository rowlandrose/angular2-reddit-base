"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var article_data_service_1 = require('./app/article-data.service');
var _1 = require('./app/');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.redditApp, [http_1.HTTP_PROVIDERS, article_data_service_1.ArticleDataService]);
//# sourceMappingURL=main.js.map