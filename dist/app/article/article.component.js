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
var ArticleInner = (function () {
    function ArticleInner(title, link, votes) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    ArticleInner = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'reddit-article',
            templateUrl: 'article.component.html',
            styleUrls: ['article.component.css'],
            host: {
                class: 'row'
            }
        }), 
        __metadata('design:paramtypes', [String, String, Number])
    ], ArticleInner);
    return ArticleInner;
}());
var ArticleComponent = (function () {
    function ArticleComponent() {
        this.article = new ArticleInner('Angular 2', 'http://angular.io', 10);
    }
    ArticleComponent.prototype.ngOnInit = function () { };
    ArticleComponent.prototype.voteUp = function () {
        this.article.votes += 1;
        return false;
    };
    ArticleComponent.prototype.voteDown = function () {
        this.article.votes -= 1;
        return false;
    };
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map