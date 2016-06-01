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
var ArticleModel = (function () {
    function ArticleModel(title, link, votes) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    ArticleModel.prototype.voteUp = function () {
        this.votes += 1;
    };
    ArticleModel.prototype.voteDown = function () {
        this.votes -= 1;
    };
    ArticleModel.prototype.domain = function () {
        try {
            var link = this.link.split('//')[1];
            return link.split('/')[0];
        }
        catch (err) {
            return null;
        }
    };
    ArticleModel = __decorate([
        core_1.Directive({
            selector: '[article-model]'
        }), 
        __metadata('design:paramtypes', [String, String, Number])
    ], ArticleModel);
    return ArticleModel;
}());
exports.ArticleModel = ArticleModel;
//# sourceMappingURL=article-model.directive.js.map