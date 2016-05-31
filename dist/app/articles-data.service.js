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
var http_1 = require('@angular/http');
var ArticlesDataService = (function () {
    function ArticlesDataService(http) {
        this.http = http;
    }
    // Uses http.get() to load a single JSON file
    ArticlesDataService.prototype.getArticles = function () {
        var json = { 'data': { 'articles': [] } };
        json.data.articles.push({
            'title': 'Angular 2',
            'link': 'http://angular.io',
            'votes': 3
        });
        json.data.articles.push({
            'title': 'Fullstack',
            'link': 'http://fullstack.io',
            'votes': 16
        });
        json.data.articles.push({
            'title': 'Rowland\'s Homepage',
            'link': 'http://rowlandrose.com',
            'votes': 57
        });
        //return this.http.get('https://dl.dropboxusercontent.com/s/8ijycefu7mabr9g/sample_data.json?dl=0').map((res:Response) => res.json());
        return json;
    };
    ArticlesDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ArticlesDataService);
    return ArticlesDataService;
}());
exports.ArticlesDataService = ArticlesDataService;
//# sourceMappingURL=articles-data.service.js.map