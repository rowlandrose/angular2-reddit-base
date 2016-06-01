"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var article_component_1 = require('./article/article.component');
var article_model_directive_1 = require('./article-model.directive');
var article_data_service_1 = require('./article-data.service');
var redditApp = (function () {
    function redditApp(_articleDataService) {
        var _this = this;
        this._articleDataService = _articleDataService;
        this.articles = [];
        this._articleDataService.getArticles().subscribe(function (result) { return _this.articlesLoaded(result); });
    }
    redditApp.prototype.articlesLoaded = function (result) {
        for (var i = 0; i < result.data.articles.length; i++) {
            var a = result.data.articles[i];
            this.articles.push(new article_model_directive_1.ArticleModel(a.title, a.link, a.votes));
        }
    };
    redditApp.prototype.addArticle = function (title, link) {
        console.log("Adding article title: " + title.value + " and link: " + link.value);
        this.articles.push(new article_model_directive_1.ArticleModel(title.value, link.value, 0));
        title.value = '';
        link.value = '';
    };
    redditApp = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'reddit',
            templateUrl: 'redditApp.component.html',
            styleUrls: ['redditApp.component.css'],
            directives: [article_component_1.ArticleComponent],
            providers: [article_data_service_1.ArticleDataService]
        }), 
        __metadata('design:paramtypes', [article_data_service_1.ArticleDataService])
    ], redditApp);
    return redditApp;
}());
exports.redditApp = redditApp;
//# sourceMappingURL=redditApp.component.js.map