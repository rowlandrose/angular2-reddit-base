"use strict";
var testing_1 = require('@angular/core/testing');
var angular2_reddit_base_component_1 = require('../app/angular2-reddit-base.component');
testing_1.beforeEachProviders(function () { return [angular2_reddit_base_component_1.Angular2RedditBaseAppComponent]; });
testing_1.describe('App: Angular2RedditBase', function () {
    testing_1.it('should create the app', testing_1.inject([angular2_reddit_base_component_1.Angular2RedditBaseAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'angular2-reddit-base works!\'', testing_1.inject([angular2_reddit_base_component_1.Angular2RedditBaseAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('angular2-reddit-base works!');
    }));
});
//# sourceMappingURL=angular2-reddit-base.component.spec.js.map