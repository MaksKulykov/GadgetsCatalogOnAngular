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
        this.gadgets = GADGETS;
        this.gadget = {
            gadgetName: 'HTC',
            gadgetPrice: 2222,
            gadgetPopular: true,
            gadgetDate: 1467440203727
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n          <h1>{{title}}</h1>\n          <div class=\"row\"  *ngFor=\"let gadget of gadgets\">\n            <div class=\"col-lg-6\">\n              <div class=\"thumbnail\">\n                <div class=\"caption\">\n                  <div><label>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:</label>     {{gadget.gadgetName}} </div>\n                  <div><label>\u0426\u0435\u043D\u0430:</label>         {{gadget.gadgetPrice}} \u0433\u0440\u043D</div>\n                  <div><label>\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u044C:</label> {{gadget.gadgetPopular | modifyPopular}}</div>\n                  <div><label>\u0414\u0430\u0442\u0430:</label>        {{gadget.gadgetDate | date:\"dd/MM/yyyy\"}}</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-2\">\n              <div class=\"btn btn-default\" data-class=\"btnEdit\">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</div>\n            </div>\n           </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var GADGETS = [
    {
        "gadgetName": "HTC",
        "gadgetPrice": 12458,
        "gadgetPopular": true,
        "gadgetDate": 1467440203
    },
    {
        "gadgetName": "Sony",
        "gadgetPrice": 12458,
        "gadgetPopular": true,
        "gadgetDate": 1467440207
    },
    {
        "gadgetName": "HTC",
        "gadgetPrice": 12458,
        "gadgetPopular": true,
        "gadgetDate": 146744727
    },
    {
        "gadgetName": "HTC",
        "gadgetPrice": 12458,
        "gadgetPopular": true,
        "gadgetDate": 1467440227
    },
    {
        "gadgetName": "Sony",
        "gadgetPrice": 32458,
        "gadgetPopular": false,
        "gadgetDate": 14674402037
    },
    {
        "gadgetName": "Sony",
        "gadgetPrice": 32458,
        "gadgetPopular": false,
        "gadgetDate": 146744020327
    },
    {
        "gadgetName": "Sony",
        "gadgetPrice": 12458,
        "gadgetPopular": false,
        "gadgetDate": 1467440207
    },
    {
        "gadgetName": "HTC",
        "gadgetPrice": 12458,
        "gadgetPopular": true,
        "gadgetDate": 14644003727
    },
    {
        "gadgetName": "HTC",
        "gadgetPrice": 12458,
        "gadgetPopular": true,
        "gadgetDate": 146744203727
    },
    {
        "gadgetName": "HTC",
        "gadgetPrice": 12458,
        "gadgetPopular": true,
        "gadgetDate": 1467440203727
    },
    {
        "gadgetName": "HTC",
        "gadgetPrice": 12458,
        "gadgetPopular": true,
        "gadgetDate": 1467440203727
    }
];
//# sourceMappingURL=app.component.js.map