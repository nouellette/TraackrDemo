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
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.getInfluencers = function (keywords, page) {
        if (page === void 0) { page = 0; }
        return this.http.post('/api/search/influencers', { keywords: keywords, page: page })
            .map(this.extractData)
            .catch(this.handleError)
            .toPromise();
    };
    SearchService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    SearchService.prototype.handleError = function (error) {
        var body = error.json();
        return Observable_1.Observable.throw(body);
    };
    SearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map