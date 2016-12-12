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
var search_service_1 = require('./search.service');
var core_2 = require('../../app/core');
var SearchComponent = (function () {
    function SearchComponent(spinnerService, modalService, toastService, searchService) {
        this.spinnerService = spinnerService;
        this.modalService = modalService;
        this.toastService = toastService;
        this.searchService = searchService;
        this.isReady = true;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.toastService.activate('Loaded search');
    };
    SearchComponent.prototype.resetSearch = function () {
        this.spinnerService.hide();
        this.isReady = true;
    };
    SearchComponent.prototype.search = function (page) {
        var _this = this;
        if (this.isReady && this.searchText) {
            this.isReady = false;
            this.spinnerService.show();
            return this.searchService.getInfluencers(this.searchText, page).then(function (data) {
                _this.resetSearch();
                _this.results = data;
                _this.results.page_info.previous_page =
                    _this.results.page_info.current_page !== 0 ? (_this.results.page_info.current_page - 1) : undefined;
            }, function (err) {
                _this.resetSearch();
                _this.modalService.activate(err.message, err.statusCode + ' - ' + err.error);
                console.error(err);
            });
        }
    };
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'site-search',
            templateUrl: 'search.component.html',
            styleUrls: ['search.component.css'],
            providers: [search_service_1.SearchService]
        }), 
        __metadata('design:paramtypes', [core_2.SpinnerService, core_2.ModalService, core_2.ToastService, search_service_1.SearchService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map