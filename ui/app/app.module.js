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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
require('./core/rxjs-extensions');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var page_not_found_component_1 = require('./page-not-found.component');
/* Feature Modules */
var core_module_1 = require('./core/core.module');
var login_module_1 = require('./login/login.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                login_module_1.LoginModule,
                // Routes get loaded in order. It is important that login
                // come before AppRoutingModule, as
                // AppRoutingModule defines the catch-all ** route
                app_routing_module_1.AppRoutingModule,
                core_module_1.CoreModule,
            ],
            declarations: [app_component_1.AppComponent, page_not_found_component_1.PageNotFoundComponent],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map