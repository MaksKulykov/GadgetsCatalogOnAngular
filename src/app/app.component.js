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
var Gadget = (function () {
    function Gadget() {
    }
    return Gadget;
}());
exports.Gadget = Gadget;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Gadgets Catalog';
        this.gadget = {
            gadgetName: 'HTC',
            gadgetPrice: '2222',
            gadgetPopular: true,
            gadgetDate: '1467440203727'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n          <h1>{{title}}</h1>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"thumbnail\">\n                <div class=\"caption\">\n                  <p><b>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:</b>     {{gadget.gadgetName}} </p>\n                  <p><b>\u0426\u0435\u043D\u0430:</b>         {{gadget.gadgetPrice}} \u0433\u0440\u043D</p>\n                  <p><b>\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u044C:</b> {{gadget.gadgetPopular | modifyPopular}}</p>\n                  <p><b>\u0414\u0430\u0442\u0430:</b>         {{gadget.gadgetDate | date:\"dd/MM/yyyy\"}}</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-2\">\n              <div class=\"btn btn-default\" data-class=\"btnEdit\">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</div>\n            </div>\n           </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map