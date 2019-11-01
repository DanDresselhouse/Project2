(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/artistoptionspage/artistoptionspage.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/artistoptionspage/artistoptionspage.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>artistoptionspage works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/createaccountpage/createaccountpage.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/createaccountpage/createaccountpage.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\r\n    <div class=\"container\" id=\"container\">\r\n        <div class=\"page-header\" id=\"title\">\r\n            <h1 class=\"display-1\">\r\n                Generic Music Website&trade;\r\n            </h1>\r\n        </div>\r\n        <div class=\"creation\" id=\"creation\">\r\n            <h1>Create an account</h1>\r\n            <form action=\"POST\" id=\"creationform\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\" id=\"creationname\">Please enter your full name:</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"name\" name=\"name\" id=\"name\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\" id=\"creationusername\">Please create a username:</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"username\"\r\n                        name=\"username\" id=\"username\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\" id=\"creationpassword\">Please enter a password:</label>\r\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\"\r\n                        name=\"password\" id=\"password\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"confirmpassword\" id=\"confirmpassword\">Please reenter your password:</label>\r\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"confirmpassword\"\r\n                        name=\"confirmpassword\" id=\"confirmpasswordinput\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"artist\">Please select this box if you are an artist: </label>&nbsp;\r\n                    <input type=\"checkbox\" [(ngModel)]=\"isartist\" name=\"artist\">\r\n                </div>\r\n                <div class=\"submitsection\" id=\"submitsection\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/loginpage\" id=\"cancel\">Cancel</button>\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"createaccount()\" id=\"submit\">Create New\r\n                        Account</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"response\" id=\"response\">\r\n            <span class=\"alert alert-danger\" *ngIf=\"confirmation\">{{confirmationmessage}}</span>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loginaristpage/loginaristpage.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/loginaristpage/loginaristpage.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\r\n    <div class=\"container\" id=\"container\">\r\n        <div class=\"page-header\" id=\"title\">\r\n            <h1 class=\"display-1\">\r\n                Generic Music Website&trade;\r\n            </h1>\r\n        </div>\r\n        <div class=\"login\" id=\"logincontainer\">\r\n            <h1>Sign In As An Artist</h1>\r\n            <form action=\"POST\" id=\"loginform\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\" id=\"usernamelabel\">Username:</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"username\"\r\n                        name=\"username\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\" id=\"passwordlabel\">Password:</label>\r\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\"\r\n                        name=\"password\">\r\n                </div>\r\n                <div class=\"links\" id=\"links\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/loginpage\">Back to user login</button>\r\n                    <button type=\"button\" (click)=\"login()\" class=\"btn btn-primary\">Sign In</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loginpage/loginpage.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/loginpage/loginpage.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\r\n    <div class=\"container\" id=\"container\">\r\n        <div class=\"page-header\" id=\"title\">\r\n            <h1 class=\"display-1\">\r\n                Generic Music Website&trade;\r\n            </h1>\r\n        </div>\r\n        <div class=\"login\" id=\"logincontainer\">\r\n            <h1>Sign In or Create a New Account</h1>\r\n            <form action=\"POST\" id=\"loginform\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\" id=\"usernamelabel\">Username:</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"username\"\r\n                        name=\"username\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\" id=\"passwordlabel\">Password:</label>\r\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\"\r\n                        name=\"password\">\r\n                </div>\r\n                <button type=\"button\" (click)=\"login()\" class=\"btn btn-primary\">Sign In</button>\r\n            </form>\r\n            <div class=\"links\" id=\"links\">\r\n                <a routerLink=\"/createaccountpage\">Create New Account</a>\r\n                <a routerLink=\"/loginartistpage\">Login as Artist</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/useroptionspage/useroptionspage.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/useroptionspage/useroptionspage.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- User needs to look up songs by song name, artist name, or album(?) and comment on songs -->\r\n<button type=\"button\" routerLink = \"/loginpage\">Logout</button>\r\n<button type=\"button\" (click) = \"getallartists()\">View Artists</button>\r\n\r\n<!-- searchinput will go into url on the components-->\r\n<input type=\"search\" [(ngModel)]=\"searchinput\" placeholder=\"Type song name or Artist Name\">\r\n<button type=\"button\" (click)=\"search()\">Search</button>\r\n\r\n<!-- Maybe make a pipe for song that formats the song information and adds a comments option? -->\r\n<!-- Make artist name a link to artist page to view artists profile and song list? -->\r\n\r\n<ul>\r\n    <li *ngFor=\"let song of songs\">{{song}}</li>\r\n</ul>\r\n\r\n<table>\r\n    <tr *ngFor=\"let artist of artists\">\r\n    <td>{{artist.username}}</td>\r\n</tr>\r\n</table>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_createaccountpage_createaccountpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/createaccountpage/createaccountpage.component */ "./src/app/components/createaccountpage/createaccountpage.component.ts");
/* harmony import */ var _components_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loginpage/loginpage.component */ "./src/app/components/loginpage/loginpage.component.ts");
/* harmony import */ var _components_loginaristpage_loginaristpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/loginaristpage/loginaristpage.component */ "./src/app/components/loginaristpage/loginaristpage.component.ts");
/* harmony import */ var _components_artistoptionspage_artistoptionspage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/artistoptionspage/artistoptionspage.component */ "./src/app/components/artistoptionspage/artistoptionspage.component.ts");
/* harmony import */ var _components_useroptionspage_useroptionspage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/useroptionspage/useroptionspage.component */ "./src/app/components/useroptionspage/useroptionspage.component.ts");








const routes = [
    { path: "loginpage", component: _components_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_4__["LoginpageComponent"] },
    { path: "artistoptionspage", component: _components_artistoptionspage_artistoptionspage_component__WEBPACK_IMPORTED_MODULE_6__["ArtistoptionspageComponent"] },
    { path: "useroptionspage", component: _components_useroptionspage_useroptionspage_component__WEBPACK_IMPORTED_MODULE_7__["UseroptionspageComponent"] },
    { path: "loginartistpage", component: _components_loginaristpage_loginaristpage_component__WEBPACK_IMPORTED_MODULE_5__["LoginaristpageComponent"] },
    { path: "createaccountpage", component: _components_createaccountpage_createaccountpage_component__WEBPACK_IMPORTED_MODULE_3__["CreateaccountpageComponent"] },
    { path: "**", component: _components_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_4__["LoginpageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/upload.service */ "./src/services/upload.service.ts");



let AppComponent = class AppComponent {
    constructor(uploadservice) {
        this.uploadservice = uploadservice;
        this.title = 'Project2';
    }
    ngOnInit() {
    }
    upload() {
        const file = this.selectedFiles.item(0);
        this.uploadservice.uploadFile(file);
    }
    selectFile(event) {
        this.selectedFiles = event.target.files;
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-file-uploader */ "./node_modules/angular-file-uploader/fesm2015/angular-file-uploader.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/loginpage/loginpage.component */ "./src/app/components/loginpage/loginpage.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_createaccountpage_createaccountpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/createaccountpage/createaccountpage.component */ "./src/app/components/createaccountpage/createaccountpage.component.ts");
/* harmony import */ var _components_loginaristpage_loginaristpage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/loginaristpage/loginaristpage.component */ "./src/app/components/loginaristpage/loginaristpage.component.ts");
/* harmony import */ var _components_artistoptionspage_artistoptionspage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/artistoptionspage/artistoptionspage.component */ "./src/app/components/artistoptionspage/artistoptionspage.component.ts");
/* harmony import */ var _components_useroptionspage_useroptionspage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/useroptionspage/useroptionspage.component */ "./src/app/components/useroptionspage/useroptionspage.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_6__["LoginpageComponent"],
            _components_createaccountpage_createaccountpage_component__WEBPACK_IMPORTED_MODULE_9__["CreateaccountpageComponent"],
            _components_loginaristpage_loginaristpage_component__WEBPACK_IMPORTED_MODULE_10__["LoginaristpageComponent"],
            _components_artistoptionspage_artistoptionspage_component__WEBPACK_IMPORTED_MODULE_11__["ArtistoptionspageComponent"],
            _components_useroptionspage_useroptionspage_component__WEBPACK_IMPORTED_MODULE_12__["UseroptionspageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            angular_file_uploader__WEBPACK_IMPORTED_MODULE_3__["AngularFileUploaderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/artistoptionspage/artistoptionspage.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/artistoptionspage/artistoptionspage.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aXN0b3B0aW9uc3BhZ2UvYXJ0aXN0b3B0aW9uc3BhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/artistoptionspage/artistoptionspage.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/artistoptionspage/artistoptionspage.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ArtistoptionspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistoptionspageComponent", function() { return ArtistoptionspageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/dataservice.service */ "./src/services/dataservice.service.ts");



let ArtistoptionspageComponent = class ArtistoptionspageComponent {
    constructor(idTransfer) {
        this.idTransfer = idTransfer;
        this.id = 0;
    }
    ngOnInit() {
        this.idTransfer.currentMessage.subscribe(id => this.id = id);
        console.log(this.id);
    }
};
ArtistoptionspageComponent.ctorParameters = () => [
    { type: src_services_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"] }
];
ArtistoptionspageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-artistoptionspage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./artistoptionspage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/artistoptionspage/artistoptionspage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./artistoptionspage.component.css */ "./src/app/components/artistoptionspage/artistoptionspage.component.css")).default]
    })
], ArtistoptionspageComponent);



/***/ }),

/***/ "./src/app/components/createaccountpage/createaccountpage.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/createaccountpage/createaccountpage.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-color: lightgray;\r\n}\r\n.container {\r\n    margin: auto;\r\n    height: 100%;\r\n    border-left: 1px solid orange;\r\n    border-right: 1px solid orange;\r\n    background-color: white;\r\n    text-align: center;\r\n}\r\n.display-1 {\r\n    font-size: 4em;\r\n}\r\n.field-icon {\r\n    float: right;\r\n    margin-left: -25px;\r\n    margin-top: -25px;\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n#creationform {\r\n    margin: auto;\r\n    padding: 15px;\r\n    width: 40%;\r\n}\r\n#creationname, #creationusername, #creationpassword, #confirmpassword, #cancel {\r\n    float: left;\r\n}\r\n#submit {\r\n    float: right;\r\n}\r\n#response {\r\n    margin-top: 5%;\r\n}\r\n#creation {\r\n    margin-top: 5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGVhY2NvdW50cGFnZS9jcmVhdGVhY2NvdW50cGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGVhY2NvdW50cGFnZS9jcmVhdGVhY2NvdW50cGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBvcmFuZ2U7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBvcmFuZ2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZGlzcGxheS0xIHtcclxuICAgIGZvbnQtc2l6ZTogNGVtO1xyXG59XHJcbi5maWVsZC1pY29uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4jY3JlYXRpb25mb3JtIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcbiNjcmVhdGlvbm5hbWUsICNjcmVhdGlvbnVzZXJuYW1lLCAjY3JlYXRpb25wYXNzd29yZCwgI2NvbmZpcm1wYXNzd29yZCwgI2NhbmNlbCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4jc3VibWl0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4jcmVzcG9uc2Uge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuI2NyZWF0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/createaccountpage/createaccountpage.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/createaccountpage/createaccountpage.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateaccountpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateaccountpageComponent", function() { return CreateaccountpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_postrequest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/postrequest.service */ "./src/services/postrequest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CreateaccountpageComponent = class CreateaccountpageComponent {
    constructor(postrequest, router) {
        this.postrequest = postrequest;
        this.router = router;
        this.name = "";
        this.username = "";
        this.password = "";
        this.confirmpassword = "";
        this.isartist = false;
        this.nameflag = false;
        this.confirmation = false;
        this.confirmationmessage = "";
    }
    checkname() {
        if (this.name === "") {
            this.nameflag = true;
        }
    }
    ngOnInit() {
    }
    createaccount() {
        let body = {
            id: 0,
            name: this.name,
            username: this.username,
            password: this.password
        };
        if (this.name === "") {
            this.confirmation = true;
            this.confirmationmessage = "Please enter your name";
        }
        else if (this.username === "") {
            this.confirmation = true;
            this.confirmationmessage = "Please enter a username";
        }
        else if (this.password === "") {
            this.confirmation = true;
            this.confirmationmessage = "Please enter a password";
        }
        else {
            if (this.confirmpassword != this.password) {
                this.confirmation = true;
                this.confirmationmessage = "Your passwords do not match";
            }
            else {
                this.confirmation = false;
                let url = "";
                //backend endpoint goes here
                if (this.isartist) {
                    url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/artist";
                }
                else {
                    url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/user";
                }
                console.log(url);
                this.postrequest.postmethod(url, body).then(() => {
                    console.log("success");
                    if (this.isartist) {
                        this.router.navigateByUrl("/loginpage");
                    }
                    else {
                        this.router.navigateByUrl("/loginpage");
                    }
                }).catch((response) => { console.log("Information couldn't be found"); });
            }
        }
    }
};
CreateaccountpageComponent.ctorParameters = () => [
    { type: src_services_postrequest_service__WEBPACK_IMPORTED_MODULE_2__["PostrequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CreateaccountpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createaccountpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createaccountpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/createaccountpage/createaccountpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createaccountpage.component.css */ "./src/app/components/createaccountpage/createaccountpage.component.css")).default]
    })
], CreateaccountpageComponent);



/***/ }),

/***/ "./src/app/components/loginaristpage/loginaristpage.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/loginaristpage/loginaristpage.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: lightgray;\r\n}\r\n.container {\r\n    border-left: 1px solid orange;\r\n    border-right: 1px solid orange;\r\n    height: 100%;\r\n    background-color: white;\r\n    text-align: center;\r\n}\r\n.display-1 {\r\n    font-size: 4em;\r\n}\r\n.login {\r\n    margin-top: 5%;\r\n}\r\n#loginform {\r\n    width: 40%;\r\n    margin: auto;\r\n    padding: 15px;\r\n}\r\n#usernamelabel, #passwordlabel {\r\n    float: left;\r\n}\r\n.btn-primary {\r\n    float: right;\r\n}\r\n.btn-secondary {\r\n    float: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbmFyaXN0cGFnZS9sb2dpbmFyaXN0cGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luYXJpc3RwYWdlL2xvZ2luYXJpc3RwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIG9yYW5nZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIG9yYW5nZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kaXNwbGF5LTEge1xyXG4gICAgZm9udC1zaXplOiA0ZW07XHJcbn1cclxuLmxvZ2luIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbiNsb2dpbmZvcm0ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuI3VzZXJuYW1lbGFiZWwsICNwYXNzd29yZGxhYmVsIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/loginaristpage/loginaristpage.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/loginaristpage/loginaristpage.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoginaristpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginaristpageComponent", function() { return LoginaristpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_postrequest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/postrequest.service */ "./src/services/postrequest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_services_dataservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/dataservice.service */ "./src/services/dataservice.service.ts");





let LoginaristpageComponent = class LoginaristpageComponent {
    constructor(postrequest, router, idService) {
        this.postrequest = postrequest;
        this.router = router;
        this.idService = idService;
        this.username = "";
        this.password = "";
        this.artistID = 0;
    }
    ngOnInit() {
    }
    //this logins the artist and sets the artist object
    login() {
        let body = {
            id: 0,
            username: this.username,
            password: this.password
        };
        //console.log(info);
        this.artistID = 8;
        this.idService.changeMessage(this.artistID);
        this.router.navigateByUrl("/artistoptionspage");
        //backend endpoint goes here
        let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/artist/login";
        this.postrequest.postmethod(url, body).then((info) => {
            console.log(info);
            this.artistID = info.artistID;
            this.idService.changeMessage(this.artistID);
            this.router.navigateByUrl("/artistoptionspage");
        }).catch((response) => { console.log("Information couldn't be found"); });
    }
};
LoginaristpageComponent.ctorParameters = () => [
    { type: src_services_postrequest_service__WEBPACK_IMPORTED_MODULE_2__["PostrequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_services_dataservice_service__WEBPACK_IMPORTED_MODULE_4__["DataserviceService"] }
];
LoginaristpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loginaristpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loginaristpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loginaristpage/loginaristpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loginaristpage.component.css */ "./src/app/components/loginaristpage/loginaristpage.component.css")).default]
    })
], LoginaristpageComponent);



/***/ }),

/***/ "./src/app/components/loginpage/loginpage.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/loginpage/loginpage.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: lightgray;\r\n}\r\n.container {\r\n    border-left: 1px solid orange;\r\n    border-right: 1px solid orange;\r\n    height: 100%;\r\n    background-color: white;\r\n    text-align: center;\r\n}\r\n.display-1 {\r\n    font-size: 4em;\r\n}\r\n.login {\r\n    margin-top: 5%;\r\n}\r\n#loginform {\r\n    width: 40%;\r\n    margin: auto;\r\n    padding: 15px;\r\n}\r\n#usernamelabel, #passwordlabel {\r\n    float: left;\r\n}\r\n.links > a {\r\n    margin-left: 2%;\r\n    margin-right: 5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbnBhZ2UvbG9naW5wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2lucGFnZS9sb2dpbnBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgb3JhbmdlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgb3JhbmdlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmRpc3BsYXktMSB7XHJcbiAgICBmb250LXNpemU6IDRlbTtcclxufVxyXG4ubG9naW4ge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuI2xvZ2luZm9ybSB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG4jdXNlcm5hbWVsYWJlbCwgI3Bhc3N3b3JkbGFiZWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmxpbmtzID4gYSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/loginpage/loginpage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/loginpage/loginpage.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginpageComponent", function() { return LoginpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_postrequest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/postrequest.service */ "./src/services/postrequest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginpageComponent = class LoginpageComponent {
    constructor(postrequest, router) {
        this.postrequest = postrequest;
        this.router = router;
        this.username = "";
        this.password = "";
    }
    ngOnInit() {
    }
    //this logins the artist and sets the artist object
    login() {
        let body = {
            id: 0,
            username: this.username,
            password: this.password
        };
        //backend endpoint goes here
        let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/user/login";
        this.postrequest.postmethod(url, body).then(() => {
            console.log("success");
            this.router.navigateByUrl("/useroptionspage");
        }).catch((response) => { console.log("Information couldn't be found"); });
    }
};
LoginpageComponent.ctorParameters = () => [
    { type: src_services_postrequest_service__WEBPACK_IMPORTED_MODULE_2__["PostrequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loginpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loginpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loginpage/loginpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loginpage.component.css */ "./src/app/components/loginpage/loginpage.component.css")).default]
    })
], LoginpageComponent);



/***/ }),

/***/ "./src/app/components/useroptionspage/useroptionspage.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/useroptionspage/useroptionspage.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcm9wdGlvbnNwYWdlL3VzZXJvcHRpb25zcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/useroptionspage/useroptionspage.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/useroptionspage/useroptionspage.component.ts ***!
  \*************************************************************************/
/*! exports provided: UseroptionspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseroptionspageComponent", function() { return UseroptionspageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_getrequest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/getrequest.service */ "./src/services/getrequest.service.ts");



let UseroptionspageComponent = class UseroptionspageComponent {
    constructor(getrequest) {
        this.getrequest = getrequest;
        this.searchinput = "";
    }
    ngOnInit() {
    }
    //this logins the artist and sets the artist object
    search() {
        //backend endpoint goes here
        let url = "";
        this.getrequest.getmethod(url).then((info) => {
            console.log("success");
            this.songs = info;
        }).catch((response) => { console.log("Information couldn't be found"); });
    }
    getallartists() {
        let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/artist";
        console.log(url);
        this.getrequest.getmethod(url).then((info) => {
            console.log("success");
            this.artists = info;
            console.log(info);
        }).catch((response) => { console.log("Information couldn't be found"); });
    }
};
UseroptionspageComponent.ctorParameters = () => [
    { type: src_services_getrequest_service__WEBPACK_IMPORTED_MODULE_2__["GetrequestService"] }
];
UseroptionspageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-useroptionspage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./useroptionspage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/useroptionspage/useroptionspage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./useroptionspage.component.css */ "./src/app/components/useroptionspage/useroptionspage.component.css")).default]
    })
], UseroptionspageComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/services/dataservice.service.ts":
/*!*********************************************!*\
  !*** ./src/services/dataservice.service.ts ***!
  \*********************************************/
/*! exports provided: DataserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataserviceService", function() { return DataserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let DataserviceService = class DataserviceService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(artistId) {
        this.messageSource.next(artistId);
    }
};
DataserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataserviceService);



/***/ }),

/***/ "./src/services/getrequest.service.ts":
/*!********************************************!*\
  !*** ./src/services/getrequest.service.ts ***!
  \********************************************/
/*! exports provided: GetrequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetrequestService", function() { return GetrequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GetrequestService = class GetrequestService {
    constructor(http) {
        this.http = http;
    }
    getmethod(url) {
        //put backend rest point here
        let response = this.http.get(url).toPromise();
        return response;
    }
};
GetrequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GetrequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetrequestService);



/***/ }),

/***/ "./src/services/postrequest.service.ts":
/*!*********************************************!*\
  !*** ./src/services/postrequest.service.ts ***!
  \*********************************************/
/*! exports provided: PostrequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostrequestService", function() { return PostrequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PostrequestService = class PostrequestService {
    constructor(http) {
        this.http = http;
    }
    //pass in url and body object
    postmethod(url, postObject) {
        //put backend rest point here
        let response = this.http.post(url, postObject).toPromise();
        return response;
    }
};
PostrequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostrequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostrequestService);



/***/ }),

/***/ "./src/services/upload.service.ts":
/*!****************************************!*\
  !*** ./src/services/upload.service.ts ***!
  \****************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-sdk/clients/s3 */ "./node_modules/aws-sdk/clients/s3.js");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_2__);



let UploadService = class UploadService {
    constructor() { }
    uploadFile(file) {
        const contentType = file.type;
        const bucket = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_2__({
            accessKeyId: 'AKIAUNBRJRRBG5IUQ3XG',
            secretAccessKey: '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',
            region: 'us-east-2'
        });
        const params = {
            Bucket: 'songcollectionbucket',
            Key: file.name,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading the file: ', err);
                return false;
            }
            console.log('Successfully uploaded file.', data);
            return true;
        });
    }
};
UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UploadService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Revature Programs\Project2\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map