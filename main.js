(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/index/index.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Components/index/index.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\nbdColor = \"rgba(1, 80, 140, 0.95)\"\nsize = \"large\"\ncolor = \"#EEE8AA\"\ntype = \"ball-clip-rotate\"\n></ngx-spinner>\n<div class=\"ohisje\">\n  <div class=\"container-fluid middle\">\n    <div class=\"row\">\n      <div class=\"col-xl-4 col-lg-3 col-md-2 col-sm-1\" ></div>\n        <div class=\"col-xl-4 col-lg-6 col-md-8 col-sm-10 logo\" >\n            <img src=\"./assets/Slike/logo2take1.png\" alt=\"Smiley face\" id=\"imgMain\">\n        </div>\n        <div class=\"col-xl-4 col-lg-3 col-md-2 col-sm-1\" ></div> \n    </div>\n    <div class=\"row\">\n      <div class=\"col-xl-4 col-lg-3 col-md-2 col-sm-1\" ></div>\n        <div class=\"col-xl-4 col-lg-6 col-md-8 col-sm-10 txtSloganIndex\">\n            <h2>Spletno oblikovanje in razvoj</h2>\n        </div>\n        <div class=\"col-xl-4 col-lg-3 col-md-2 col-sm-1\" ></div> \n    </div>\n    <div class=\"row\">\n      <div class=\"col-xl-4 col-lg-3 col-md-2 col-sm-1\" ></div>\n        <div class=\"col-xl-4 col-lg-6 col-md-8 col-sm-10  txtOpisIndex\" >\n            <p>Obiskali ste moj osebni portfolio. Tukaj lahko preberete več o meni, s katerimi jeziki se ukvarjam in katere projekte sem naredil.</p>\n        </div>\n        <div class=\"col-xl-4 col-lg-3 col-md-2 col-sm-1\" ></div> \n    </div>\n    <div class=\"row\">\n      <div class=\"col-xl-4 col-lg-3 col-md-2 col-sm-1\" ></div>\n        <div class=\"col-xl-4 col-lg-6 col-md-8 col-sm-10\">\n            <a routerLink=\"/kontakt\" id=\"bntKontakt\">Kontakt</a>\n        </div>\n        <div class=\"col-xl-4 col-lg-3 col-md-2 col-sm-1\" ></div> \n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Components/index/index.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/Components/index/index.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  margin: 0 auto;\n  text-align: center; }\n\n.ohisje {\n  text-align: center;\n  height: -o-calc(100vh - 60px);\n  height: calc(100vh - 60px); }\n\n.ohisje .middle {\n    text-align: center;\n    position: relative;\n    top: 23%;\n    -webkit-transform: translateY(-23%);\n            transform: translateY(-23%);\n    color: white; }\n\n@media only screen and (max-width: 992px) {\n      .ohisje .middle {\n        top: 14%; } }\n\n@media only screen and (max-width: 576px) {\n      .ohisje .middle {\n        top: 18%; } }\n\n.ohisje .middle #imgMain {\n      opacity: 0;\n      -webkit-animation: imgMain 1.5s forwards 3s ease-in;\n              animation: imgMain 1.5s forwards 3s ease-in;\n      border: 3px solid white;\n      vertical-align: middle;\n      height: 100%; }\n\n@media only screen and (max-width: 992px) {\n        .ohisje .middle #imgMain {\n          width: 165px;\n          height: 140px; } }\n\n@media only screen and (max-width: 576px) {\n        .ohisje .middle #imgMain {\n          width: 125px;\n          height: 110px; } }\n\n@media only screen and (max-width: 424px) {\n        .ohisje .middle #imgMain {\n          width: 100px;\n          height: 90px;\n          border: 2px solid white; } }\n\n@-webkit-keyframes imgMain {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes imgMain {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.ohisje .middle #bntKontakt {\n      border: 2px solid white;\n      background-color: #1498d5;\n      color: white;\n      padding: 8px 40px 8px 40px;\n      text-decoration: none;\n      margin-top: 10px;\n      font-family: 'Playfair Display', serif;\n      font-size: 1.4em;\n      opacity: 0;\n      -webkit-animation: Gumb 1.2s forwards 8s linear;\n              animation: Gumb 1.2s forwards 8s linear; }\n\n@media only screen and (max-width: 576px) {\n        .ohisje .middle #bntKontakt {\n          border: 1px solid white;\n          font-size: 1.2em;\n          padding: 4px 20px 4px 20px; } }\n\n@media only screen and (max-width: 424px) {\n        .ohisje .middle #bntKontakt {\n          font-size: 1em; } }\n\n@-webkit-keyframes Gumb {\n  0% {\n    -webkit-transform: rotate(0) translateY(20%);\n            transform: rotate(0) translateY(20%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotate(0) translateY(0);\n            transform: rotate(0) translateY(0);\n    opacity: 1; } }\n\n@keyframes Gumb {\n  0% {\n    -webkit-transform: rotate(0) translateY(20%);\n            transform: rotate(0) translateY(20%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotate(0) translateY(0);\n            transform: rotate(0) translateY(0);\n    opacity: 1; } }\n\n.ohisje .middle .txtSloganIndex {\n      margin-top: 15px;\n      margin-bottom: 30px; }\n\n@media only screen and (max-width: 576px) {\n        .ohisje .middle .txtSloganIndex {\n          margin-bottom: 5px; } }\n\n.ohisje .middle .txtSloganIndex h2 {\n        opacity: 0;\n        font-family: 'Work Sans', sans-serif;\n        font-size: 3.9rem;\n        -webkit-animation: slogan 1.5s forwards 4.75s linear;\n                animation: slogan 1.5s forwards 4.75s linear; }\n\n@media only screen and (max-width: 992px) {\n          .ohisje .middle .txtSloganIndex h2 {\n            font-size: 3rem; } }\n\n@media only screen and (max-width: 576px) {\n          .ohisje .middle .txtSloganIndex h2 {\n            font-size: 2rem; } }\n\n@media only screen and (max-width: 424px) {\n          .ohisje .middle .txtSloganIndex h2 {\n            font-size: 1.7rem; } }\n\n@-webkit-keyframes slogan {\n  0% {\n    -webkit-transform: rotate(0) translateY(-15%);\n            transform: rotate(0) translateY(-15%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotate(0) translateY(0);\n            transform: rotate(0) translateY(0);\n    opacity: 1; } }\n\n@keyframes slogan {\n  0% {\n    -webkit-transform: rotate(0) translateY(-15%);\n            transform: rotate(0) translateY(-15%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotate(0) translateY(0);\n            transform: rotate(0) translateY(0);\n    opacity: 1; } }\n\n.ohisje .middle .txtOpisIndex {\n      margin-bottom: 20px; }\n\n.ohisje .middle .txtOpisIndex p {\n        font-family: 'Playfair Display', serif;\n        font-size: 1.2em;\n        opacity: 0;\n        -webkit-animation: Opis 1.2s forwards 6.25s linear;\n                animation: Opis 1.2s forwards 6.25s linear; }\n\n@media only screen and (max-width: 576px) {\n          .ohisje .middle .txtOpisIndex p {\n            font-size: 1em;\n            width: 72%;\n            margin: 0 auto; } }\n\n@media only screen and (max-width: 424px) {\n          .ohisje .middle .txtOpisIndex p {\n            font-size: .8rem; } }\n\n@-webkit-keyframes Opis {\n  0% {\n    -webkit-transform: rotate(0) translateY(-20%);\n            transform: rotate(0) translateY(-20%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotate(0) translateY(0);\n            transform: rotate(0) translateY(0);\n    opacity: 1; } }\n\n@keyframes Opis {\n  0% {\n    -webkit-transform: rotate(0) translateY(-20%);\n            transform: rotate(0) translateY(-20%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotate(0) translateY(0);\n            transform: rotate(0) translateY(0);\n    opacity: 1; } }\n"

/***/ }),

/***/ "./src/app/Components/index/index.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = /** @class */ (function () {
    function IndexComponent(spinner) {
        this.spinner = spinner;
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/Components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/Components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/Components/jeziki/jeziki.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/jeziki/jeziki.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\nbdColor = \"rgba(1, 80, 140, 0.95)\"\nsize = \"large\"\ncolor = \"#EEE8AA\"\ntype = \"ball-clip-rotate\"\n></ngx-spinner>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xl-6 col-lg-8 col-md-12 col-sm-12 overlay\">\n      <h1>Jeziki in tehnologije s katerimi se ukvarjam</h1>\n      <hr>\n      <div class=\"jezik\">\n        <i class=\"fab fa-html5\"></i>\n        <h3>HTML5</h3>\n      </div>\n      <div class=\"jezik\">\n        <i class=\"fab fa-css3-alt\"></i>\n        <h3>CSS3</h3>\n      </div>\n      <div class=\"jezik\">\n        <i class=\"fab fa-js\"></i>\n        <h3>JavaScript</h3>\n      </div>\n      <div class=\"jezik\">\n        <i class=\"fab fa-sass\"></i>\n        <h3>Sass</h3>\n      </div>\n      <div class=\"jezik\">\n          <i class=\"fab fa-angular\"></i>\n          <h3>Angular</h3>\n      </div>\n      <div class=\"jezik\">\n        <img src=\"./assets/Slike/ts_ico.png\" alt=\"ts_ico.png\" />\n        <h3>TypeScript</h3>\n      </div>\n      <div class=\"jezik\">\n          <img src=\"./assets/Slike/bootstrap_ico.png\" alt=\"bootstrap_ico\" />\n          <h3>Bootstrap</h3>\n      </div>\n      <div class=\"jezik\">\n        <img src=\"./assets/Slike/jquery_ico.png\" alt=\"jquery_ico\" />\n        <h3>jQuery</h3>\n      </div>\n      <div class=\"jezik\">\n        <i class=\"fab fa-php\"></i>\n        <h3>PHP</h3>\n      </div>\n      <div class=\"jezik\">\n        <img src=\"./assets/Slike/sql_ico.png\" alt=\"sql_ico.png\" />\n        <h3>SQL</h3>\n      </div>\n    </div>\n    <div class=\"col-xl-6 col-lg-4\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/jeziki/jeziki.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/jeziki/jeziki.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  height: -o-calc(100vh - 60px);\n  height: calc(100vh - 60px); }\n  .container-fluid .row {\n    height: -o-calc(100vh - 60px);\n    height: calc(100vh - 60px); }\n  .container-fluid .row .overlay {\n      margin-top: 70px;\n      text-align: center; }\n  @media only screen and (max-width: 576px) {\n        .container-fluid .row .overlay {\n          margin-top: 30px; } }\n  .container-fluid .row .overlay h1 {\n        color: #EEE8AA;\n        font-family: 'Mukta Malar', sans-serif; }\n  @media only screen and (max-width: 767px) {\n          .container-fluid .row .overlay h1 {\n            font-size: 1.5em; } }\n  @media only screen and (max-width: 361px) {\n          .container-fluid .row .overlay h1 {\n            font-size: 1.3em; } }\n  .container-fluid .row .overlay hr {\n        border: 1px solid #EEE8AA;\n        width: 60%;\n        border-radius: 5px;\n        margin-bottom: 70px; }\n  @media only screen and (max-width: 615px) {\n          .container-fluid .row .overlay hr {\n            margin-bottom: 10px; } }\n  .container-fluid .row .overlay .jezik {\n        margin: 15px 90px 15px 90px;\n        display: inline-block;\n        color: white; }\n  @media only screen and (max-width: 615px) {\n          .container-fluid .row .overlay .jezik {\n            margin: 10px 30px 10px 30px; } }\n  .container-fluid .row .overlay .jezik i {\n          color: white;\n          font-size: 5em; }\n  @media only screen and (max-width: 615px) {\n            .container-fluid .row .overlay .jezik i {\n              font-size: 3em; } }\n  .container-fluid .row .overlay .jezik img {\n          width: 70px;\n          height: 70px; }\n  @media only screen and (max-width: 615px) {\n            .container-fluid .row .overlay .jezik img {\n              margin: 10px 10px 10px 10px;\n              width: 50px;\n              height: 50px; } }\n  .container-fluid .row .overlay .jezik h3 {\n          color: #EEE8AA; }\n  @media only screen and (max-width: 615px) {\n            .container-fluid .row .overlay .jezik h3 {\n              font-size: 1em; } }\n  .container-fluid .row .overlay .jezik:nth-child(6) {\n        margin: 15px 90px 15px 75px; }\n  @media only screen and (max-width: 615px) {\n          .container-fluid .row .overlay .jezik:nth-child(6) {\n            margin: 10px 30px 10px 30px; } }\n  @media only screen and (max-width: 452px) {\n          .container-fluid .row .overlay .jezik:nth-child(6) {\n            margin: 10px 15px 10px 30px; } }\n  @media only screen and (max-width: 371px) {\n          .container-fluid .row .overlay .jezik:nth-child(6) {\n            margin: 10px 15px 10px 15px; } }\n  .container-fluid .row .overlay .jezik:nth-child(5) {\n        margin: 15px 90px 15px 85px; }\n  @media only screen and (max-width: 615px) {\n          .container-fluid .row .overlay .jezik:nth-child(5) {\n            margin: 10px 30px 10px 30px; } }\n  .container-fluid .row .overlay .jezik:nth-child(9) {\n        margin: 15px 90px 15px 40px; }\n  @media only screen and (max-width: 615px) {\n          .container-fluid .row .overlay .jezik:nth-child(9) {\n            margin: 10px 30px 10px 00px; } }\n  @media only screen and (max-width: 452px) {\n          .container-fluid .row .overlay .jezik:nth-child(9) {\n            margin: 10px 30px 10px 30px; } }\n  @media only screen and (max-width: 385px) {\n          .container-fluid .row .overlay .jezik:nth-child(9) {\n            margin: 10px 30px 10px 10px; } }\n  .container-fluid .row .overlay .jezik:nth-child(8) {\n        margin: 15px 90px 15px 50px; }\n  @media only screen and (max-width: 615px) {\n          .container-fluid .row .overlay .jezik:nth-child(8) {\n            margin: 10px 30px 10px 00px; } }\n  @media only screen and (max-width: 452px) {\n          .container-fluid .row .overlay .jezik:nth-child(8) {\n            margin: 10px 30px 10px 15px; } }\n  @media only screen and (max-width: 360px) {\n          .container-fluid .row .overlay .jezik:nth-child(8) {\n            margin: 10px 30px 10px 20px; } }\n  .container-fluid .row .overlay .jezik:nth-child(11) {\n        margin: 25px 90px 15px 70px; }\n  @media only screen and (max-width: 615px) {\n          .container-fluid .row .overlay .jezik:nth-child(11) {\n            margin: 10px 30px 10px 30px; } }\n  .container-fluid .row .overlay .jezik:nth-child(12) {\n        margin: 45px 90px 15px 90px; }\n  @media only screen and (max-width: 615px) {\n          .container-fluid .row .overlay .jezik:nth-child(12) {\n            margin: 0px; } }\n  @media only screen and (max-width: 361px) {\n          .container-fluid .row .overlay .jezik:nth-child(12) {\n            margin: 10px 30px 10px 20px; } }\n  @media only screen and (max-width: 452px) {\n        .container-fluid .row .overlay .jezik:nth-child(10) {\n          margin: 10px 20px 10px 20px; } }\n"

/***/ }),

/***/ "./src/app/Components/jeziki/jeziki.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/jeziki/jeziki.component.ts ***!
  \*******************************************************/
/*! exports provided: JezikiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JezikiComponent", function() { return JezikiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JezikiComponent = /** @class */ (function () {
    function JezikiComponent(spinner) {
        this.spinner = spinner;
    }
    JezikiComponent.prototype.ngOnInit = function () {
    };
    JezikiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jeziki',
            template: __webpack_require__(/*! ./jeziki.component.html */ "./src/app/Components/jeziki/jeziki.component.html"),
            styles: [__webpack_require__(/*! ./jeziki.component.scss */ "./src/app/Components/jeziki/jeziki.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], JezikiComponent);
    return JezikiComponent;
}());



/***/ }),

/***/ "./src/app/Components/kontakt/kontakt.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Components/kontakt/kontakt.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\nbdColor = \"rgba(1, 80, 140, 0.95)\"\nsize = \"large\"\ncolor = \"#EEE8AA\"\ntype = \"ball-clip-rotate\"\n></ngx-spinner>\n<div class=\"container-fluid ohisje\">\n <div class=\"row\">\n    <div class=\"col-xl-7 col-lg-4  col-md-2 col-sm-2 col-1 jebemti\"></div>\n   <div class=\"col-xl-4 col-lg-7 col-md-8 col-sm-8 col-10\">\n     <div id=\"conContainer\">\n        <img src=\"./assets/Slike/profile_pic.jpg\" alt=\"profile_picture\" class=\"rounded-circle profilna\" />\n        <h1 id=\"conIme\">Bernard Val Burnik</h1>\n        <ul>\n          <li><a href=\"https://www.facebook.com/bernard.burnik\"><img alt=\"facebook\" src=\"./assets/Slike/fb.png\"></a></li>\n          <li><a href=\"https://www.linkedin.com/in/bernard-val-burnik-217307166/\"><img alt=\"linked in\" src=\"./assets/Slike/in.png\"></a></li>\n          <li><a href=\"https://www.instagram.com/bernard_burnik/\"><img alt=\"insta\" src=\"./assets/Slike/insta.png\"></a></li>\n        </ul>\n        <h1 id=\"conMob\"><i class=\"fa fa-mobile-alt\" id=\"mobilc\"></i>051 618 814</h1>\n        <h3 id=\"conMail\"><a href=\"mailto:bernard.burnik@gmail.com?subject=burnik.com\"><i class=\"far fa-envelope\" id=\"koverta\"></i>bernard.burnik@gmail.com</a></h3>\n     </div>\n   </div>\n   <div class=\"col-md-2 col-sm-2 col-1\"></div>\n </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/kontakt/kontakt.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/Components/kontakt/kontakt.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ohisje {\n  margin-top: 180px; }\n  @media only screen and (max-width: 1200px) {\n    .ohisje {\n      margin-top: 30px; } }\n  .ohisje #conContainer {\n    border: 3px solid white;\n    color: white;\n    border-radius: 5px;\n    font-family: 'Mukta Malar', sans-serif; }\n  .ohisje #conContainer .profilna {\n      margin-top: 20px;\n      width: 200px;\n      height: auto;\n      border: 2px solid white;\n      margin-bottom: 15px; }\n  @media only screen and (max-width: 576px) {\n        .ohisje #conContainer .profilna {\n          width: 140px; } }\n  .ohisje #conContainer #conIme {\n      margin-bottom: 40px; }\n  @media only screen and (max-width: 576px) {\n        .ohisje #conContainer #conIme {\n          font-size: 1.25em;\n          margin-bottom: 0px; } }\n  .ohisje #conContainer #conMob {\n      font-size: 3.6em; }\n  @media only screen and (max-width: 576px) {\n        .ohisje #conContainer #conMob {\n          font-size: 2em; } }\n  .ohisje #conContainer #conMob #mobilc {\n        color: white;\n        margin-bottom: 15px;\n        font-size: .8em;\n        margin-right: 13px;\n        margin-top: 5px; }\n  .ohisje #conContainer #conMail {\n      font-size: 2em;\n      margin-bottom: 25px; }\n  @media only screen and (max-width: 576px) {\n        .ohisje #conContainer #conMail {\n          font-size: 1.25em; } }\n  .ohisje #conContainer #conMail #koverta {\n        color: white;\n        font-size: 1.2em;\n        margin-right: 13px; }\n  .ohisje #conContainer a {\n      color: #1498d5; }\n  @media only screen and (max-width: 1400px) {\n        .ohisje #conContainer a {\n          font-size: .8em; } }\n  .ohisje #conContainer ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      display: none; }\n  @media only screen and (max-width: 576px) {\n        .ohisje #conContainer ul {\n          display: block; } }\n  .ohisje #conContainer ul li {\n        display: inline-block;\n        margin: 1rem .7rem .7rem .7rem; }\n  .ohisje #conContainer ul li a {\n          text-decoration: none; }\n  .ohisje #conContainer ul li a img {\n            width: 15px;\n            height: 15px; }\n"

/***/ }),

/***/ "./src/app/Components/kontakt/kontakt.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/kontakt/kontakt.component.ts ***!
  \*********************************************************/
/*! exports provided: KontaktComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KontaktComponent", function() { return KontaktComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KontaktComponent = /** @class */ (function () {
    function KontaktComponent(spinner) {
        this.spinner = spinner;
    }
    KontaktComponent.prototype.ngOnInit = function () {
        /** spinner starts on init */
    };
    KontaktComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kontakt',
            template: __webpack_require__(/*! ./kontakt.component.html */ "./src/app/Components/kontakt/kontakt.component.html"),
            styles: [__webpack_require__(/*! ./kontakt.component.scss */ "./src/app/Components/kontakt/kontakt.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], KontaktComponent);
    return KontaktComponent;
}());



/***/ }),

/***/ "./src/app/Components/projekti/projekti.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Components/projekti/projekti.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\nbdColor = \"rgba(1, 80, 140, 0.95)\"\nsize = \"large\"\ncolor = \"#EEE8AA\"\ntype = \"ball-clip-rotate\"\n></ngx-spinner>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xl-3 col-lg-6 col-md-12 col-sm-12 overlay\">\n        <div class=\"collection\">\n          <h2>Info. sistem - StyleForYou</h2>\n          <hr/>\n          <p>\n            StyleForYou je informacijski sistem, kjer uporabnik lahko spozna samega sebe in se nauči izraziti skozi oblačila, ter se uvede v svet mode.\n          </p>\n          <div class=\"container_card\">\n            <video muted autoplay loop >\n              <source src=\"./assets/Videos/styleforyou.mp4\" type=\"video/mp4\">\n              Your browser does not support the video tag.\n            </video>\n            <div class=\"overlay_card\" style=\"background-color: rgb(238,232,170);\">\n              <h3 class=\"text_card\"><a href=\"http://www.styleforyou.men/\">StyleForYou.men</a></h3>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-6 col-md-12 col-sm-12 overlay\">\n        <div class=\"collection\">\n          <h2>Spletna stran - Agila</h2>\n          <hr/>\n          <p class=\"pRight\">Agila inteligentne poslovne rešitve d.o.o. je podjetje za svetovanje in izvedbo celovitih integriranih poslovnih rešitev in storitev.</p>\n          <div class=\"container_card\">\n            <video muted autoplay loop >\n              <source src=\"./assets/Videos/agila4.mp4\" type=\"video/mp4\">\n              Your browser does not support the video tag.\n            </video>\n            <div class=\"overlay_card\" style=\"background-color: rgb(238,232,170);\">\n              <h3 class=\"text_card\"><a href=\"./assets/WebPages/Agila/index.html\">Agila.html</a></h3>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-6\"></div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6 col-md-12 col-sm-12 overlay\">\n          <div class=\"collection\">\n            <h2>JS API - Star Wars</h2>\n            <hr/>\n            <p>Si oboževalec izjemne trilogije Star Wars? S Star Wars API spoznaj in se nauči o celotnem prebivalstvu dalnje dalnje galaksije.\n            </p>\n            <div class=\"container_card\">\n              <video muted autoplay loop >\n                <source src=\"./assets/Videos/starwars.mp4\" type=\"video/mp4\">\n                Your browser does not support the video tag.\n              </video>\n              <div class=\"overlay_card\" style=\"background-color: rgb(238,232,170);\">\n                <h3 class=\"text_card\"><a href=\"./assets/WebPages/Star_Wars_API/index.html\">StarWars.html</a></h3>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12 col-sm-12 overlay\">\n          <div class=\"collection\">\n            <h2>JavaScript Game - Memory</h2>\n            <hr/>\n            <p  class=\"pRight\">Sprosti se z preprosto igro spomina. Najdi 16 slikovnih parov in končaj igro v najkrajšem možnem času.</p>\n            <div class=\"container_card\">\n              <video muted autoplay loop >\n                <source src=\"./assets/Videos/memory.mp4\" type=\"video/mp4\">\n                Your browser does not support the video tag.\n              </video>\n              <div class=\"overlay_card\" style=\"background-color: rgb(238,232,170);\">\n                <h3 class=\"text_card\"><a href=\"./assets/WebPages/Memory/index.html\">Memory.html</a></h3>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-5\"></div>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/Components/projekti/projekti.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/Components/projekti/projekti.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  height: -o-calc(100vh - 60px);\n  height: calc(100vh - 60px); }\n  .container-fluid .row .overlay {\n    margin-top: 40px; }\n  @media only screen and (max-width: 1500px) {\n      .container-fluid .row .overlay {\n        margin-top: 100px; } }\n  @media only screen and (max-width: 1200px) {\n      .container-fluid .row .overlay {\n        margin-top: 40px; } }\n  @media only screen and (max-width: 350px) {\n      .container-fluid .row .overlay {\n        margin-top: 15px; } }\n  .container-fluid .row .overlay .collection {\n      display: inline-block; }\n  .container-fluid .row .overlay .collection h2 {\n        color: #EEE8AA;\n        font-family: 'Mukta Malar', sans-serif; }\n  @media only screen and (max-width: 1500px) {\n          .container-fluid .row .overlay .collection h2 {\n            font-size: 1.5em; } }\n  @media only screen and (max-width: 1200px) {\n          .container-fluid .row .overlay .collection h2 {\n            font-size: 2em; } }\n  @media only screen and (max-width: 576px) {\n          .container-fluid .row .overlay .collection h2 {\n            font-size: 1.5em; } }\n  @media only screen and (max-width: 350px) {\n          .container-fluid .row .overlay .collection h2 {\n            font-size: 1.25em; } }\n  .container-fluid .row .overlay .collection p {\n        margin: 0 auto;\n        width: 85%;\n        margin-bottom: 10px;\n        font-family: 'Mukta Malar', sans-serif;\n        color: #fff;\n        letter-spacing: .75px; }\n  @media only screen and (max-width: 1500px) {\n          .container-fluid .row .overlay .collection p {\n            font-size: .85em;\n            width: 100%; } }\n  @media only screen and (max-width: 1200px) {\n          .container-fluid .row .overlay .collection p {\n            font-size: 1em;\n            width: 85%; } }\n  @media only screen and (max-width: 992px) {\n          .container-fluid .row .overlay .collection p {\n            width: 50%; } }\n  @media only screen and (max-width: 576px) {\n          .container-fluid .row .overlay .collection p {\n            width: 85%;\n            font-size: .75em; } }\n  @media only screen and (max-width: 350px) {\n          .container-fluid .row .overlay .collection p {\n            font-size: .6em; } }\n  .container-fluid .row .overlay .collection .pRight {\n        width: 60%; }\n  @media only screen and (max-width: 1200px) {\n          .container-fluid .row .overlay .collection .pRight {\n            width: 70%; } }\n  @media only screen and (max-width: 992px) {\n          .container-fluid .row .overlay .collection .pRight {\n            width: 50%; } }\n  @media only screen and (max-width: 576px) {\n          .container-fluid .row .overlay .collection .pRight {\n            width: 85%; } }\n  .container-fluid .row .overlay h1 {\n      color: #EEE8AA;\n      font-family: 'Mukta Malar', sans-serif; }\n  .container-fluid .row .overlay hr {\n      border: 1px solid #EEE8AA;\n      width: 60%;\n      border-radius: 5px;\n      margin-bottom: 10px; }\n  @media only screen and (max-width: 992px) {\n        .container-fluid .row .overlay hr {\n          width: 40%; } }\n  @media only screen and (max-width: 576px) {\n        .container-fluid .row .overlay hr {\n          width: 60%;\n          border: .5px solid #EEE8AA;\n          margin-bottom: 5px;\n          margin-top: 5px; } }\n  .container_card {\n  position: relative; }\n  .container_card video {\n    border-radius: 5px;\n    border: 2px solid #fff;\n    width: 397px;\n    height: 225px; }\n  @media only screen and (max-width: 1500px) {\n      .container_card video {\n        width: 300px;\n        height: 170px; } }\n  @media only screen and (max-width: 1200px) {\n      .container_card video {\n        width: 397px;\n        height: 225px; } }\n  @media only screen and (max-width: 576px) {\n      .container_card video {\n        width: 300px;\n        height: 170px; } }\n  @media only screen and (max-width: 350px) {\n      .container_card video {\n        width: 224px;\n        height: 128px;\n        border: 1.5px solid #fff; } }\n  .overlay_card {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 98%;\n  width: 100%;\n  opacity: 0;\n  transition: .5s ease;\n  border-radius: 5px;\n  width: 397px;\n  margin: 0 auto;\n  border-radius: 5px; }\n  @media only screen and (max-width: 1500px) {\n    .overlay_card {\n      width: 300px; } }\n  @media only screen and (max-width: 1200px) {\n    .overlay_card {\n      width: 397px; } }\n  @media only screen and (max-width: 576px) {\n    .overlay_card {\n      width: 300px; } }\n  @media only screen and (max-width: 350px) {\n    .overlay_card {\n      width: 224px; } }\n  .container_card:hover .overlay_card {\n  opacity: .9; }\n  .text_card {\n  color: #000;\n  font-size: 2em;\n  position: absolute;\n  font-family: 'Titillium web',sans-serif;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center; }\n  @media only screen and (max-width: 1500px) {\n    .text_card {\n      font-size: 1.5em; } }\n  @media only screen and (max-width: 1200px) {\n    .text_card {\n      font-size: 2em; } }\n  @media only screen and (max-width: 576px) {\n    .text_card {\n      font-size: 1.5em; } }\n  @media only screen and (max-width: 350px) {\n    .text_card {\n      font-size: 1.3em; } }\n  .text_card a {\n  color: #000; }\n  .text_card a:hover {\n  color: #000; }\n"

/***/ }),

/***/ "./src/app/Components/projekti/projekti.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/projekti/projekti.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjektiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjektiComponent", function() { return ProjektiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjektiComponent = /** @class */ (function () {
    function ProjektiComponent(spinner) {
        this.spinner = spinner;
    }
    ProjektiComponent.prototype.ngOnInit = function () {
    };
    ProjektiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projekti',
            template: __webpack_require__(/*! ./projekti.component.html */ "./src/app/Components/projekti/projekti.component.html"),
            styles: [__webpack_require__(/*! ./projekti.component.scss */ "./src/app/Components/projekti/projekti.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], ProjektiComponent);
    return ProjektiComponent;
}());



/***/ }),

/***/ "./src/app/Components/zivljenjepis/zivljenjepis.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Components/zivljenjepis/zivljenjepis.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\nbdColor = \"rgba(1, 80, 140, 0.95)\"\nsize = \"large\"\ncolor = \"#EEE8AA\"\ntype = \"ball-clip-rotate\"\n></ngx-spinner>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xl-6 col-lg-8 col-md-12 col-sm-12 overlay\">\n      <h1>Kdo sem jaz? Spoznajte me!</h1>\n      <hr/>\n        <p>\n          Moje ime je Bernard Val Burnik in se ukvarjam s spletnim oblikovanjem in razvojem. Rodil sem se 04.02.1999 in živim v Ljubljani,\n          v prostem času rad ustvarjam in oblikujem spletne strani, se učim programske jezike in nove tehnologije .\n          Zaključil sem šolanje za računalniškega tehnika na srednji strokovni šoli Vegova Ljubljana in opravil maturo.\n          Pridobil sem tudi certifikat iz angleščine in opravil CISCO CCNA tečaj.\n        </p>\n        <h1>Potrdila</h1>\n        <hr/>\n        <ul id=\"list1\">\n          <li><h5><a href=\"./assets/Pdf/CISCOCCNA.pdf\">CISCO CCNA certifikat</a></h5></li>\n          <li><h5><a href=\"./assets/Pdf/EnglishCertificate.pdf\">Certifikat iz angleščine</a></h5></li>\n        </ul>\n        <h1>Delovne izkušnje</h1>\n        <hr/>\n        <a href=\"https://omegaconsult.si/\"><img src=\"./assets/Slike/OmegaLogo.png\" alt=\"OmegaLogo\" id=\"OmegaLogo\"/></a>\n        <h5>od 20.08.2018 dalje</h5>\n        <p>Full-Stack Spletni razvijalec. Grajenje informacijskih sistemov z različnimi jeziki in orodji kot JSP, JavaScript, SQL, Java, SVN in Angular.\n          Delo v ekipi.\n        </p>\n    </div>\n    <div class=\"col-xl-6 col-lg-4\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/zivljenjepis/zivljenjepis.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Components/zivljenjepis/zivljenjepis.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  height: -o-calc(100vh - 60px);\n  height: calc(100vh - 60px); }\n  .container-fluid .row {\n    height: -o-calc(100vh - 60px);\n    height: calc(100vh - 60px); }\n  .container-fluid .row .overlay {\n      margin-top: 40px;\n      text-align: center; }\n  .container-fluid .row .overlay h1 {\n        color: #EEE8AA;\n        font-family: 'Mukta Malar', sans-serif; }\n  @media only screen and (max-width: 992px) {\n          .container-fluid .row .overlay h1 {\n            font-size: 2em; } }\n  @media only screen and (max-width: 576px) {\n          .container-fluid .row .overlay h1 {\n            font-size: 1.5em; } }\n  @media only screen and (max-width: 350px) {\n          .container-fluid .row .overlay h1 {\n            font-size: 1.25em; } }\n  .container-fluid .row .overlay hr {\n        border: 1px solid #EEE8AA;\n        width: 60%;\n        border-radius: 5px;\n        margin-bottom: 30px;\n        margin-top: 0px; }\n  @media only screen and (max-width: 576px) {\n          .container-fluid .row .overlay hr {\n            margin-bottom: 15px; } }\n  @media only screen and (max-width: 350px) {\n          .container-fluid .row .overlay hr {\n            border: .55px solid #EEE8AA;\n            margin-top: 0rem; } }\n  .container-fluid .row .overlay p {\n        display: inline-block;\n        width: 75%;\n        font-size: 1.3em;\n        letter-spacing: 1.1px;\n        color: white;\n        font-family: 'Mukta Malar', sans-serif;\n        margin-bottom: 30px; }\n  @media only screen and (max-width: 1537px) {\n          .container-fluid .row .overlay p {\n            width: 90%; } }\n  @media only screen and (max-width: 1200px) {\n          .container-fluid .row .overlay p {\n            width: 78%; } }\n  @media only screen and (max-width: 992px) {\n          .container-fluid .row .overlay p {\n            font-size: 1em; } }\n  @media only screen and (max-width: 576px) {\n          .container-fluid .row .overlay p {\n            font-size: .8em;\n            margin-bottom: 15px; } }\n  @media only screen and (max-width: 350px) {\n          .container-fluid .row .overlay p {\n            width: 95%;\n            font-size: .7em; } }\n  .container-fluid .row .overlay #list1 {\n        display: inline-block;\n        margin-right: 50px;\n        margin-bottom: 30px; }\n  @media only screen and (max-width: 992px) {\n          .container-fluid .row .overlay #list1 {\n            margin-bottom: 15px; } }\n  @media only screen and (max-width: 576px) {\n          .container-fluid .row .overlay #list1 li h5 {\n            font-size: .8em; } }\n  .container-fluid .row .overlay #list1 li h5 a {\n          text-decoration: none;\n          color: white; }\n  .container-fluid .row .overlay #list1 li h5 a:hover {\n            color: #EEE8AA; }\n  .container-fluid .row .overlay h5 {\n        color: #EEE8AA;\n        margin-bottom: 15px; }\n  @media only screen and (max-width: 992px) {\n          .container-fluid .row .overlay h5 {\n            font-size: 1em;\n            margin-bottom: 5px; } }\n  @media only screen and (max-width: 576px) {\n          .container-fluid .row .overlay h5 {\n            font-size: .8em; } }\n  @media only screen and (max-width: 350px) {\n          .container-fluid .row .overlay h5 {\n            font-size: .7em; } }\n  .container-fluid .row .overlay #OmegaLogo {\n        width: 175px;\n        height: auto;\n        margin-bottom: 15px; }\n  @media only screen and (max-width: 992px) {\n          .container-fluid .row .overlay #OmegaLogo {\n            width: 145px; } }\n  @media only screen and (max-width: 576px) {\n          .container-fluid .row .overlay #OmegaLogo {\n            width: 120px; } }\n  @media only screen and (max-width: 350px) {\n          .container-fluid .row .overlay #OmegaLogo {\n            width: 105px; } }\n"

/***/ }),

/***/ "./src/app/Components/zivljenjepis/zivljenjepis.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/zivljenjepis/zivljenjepis.component.ts ***!
  \*******************************************************************/
/*! exports provided: ZivljenjepisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZivljenjepisComponent", function() { return ZivljenjepisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZivljenjepisComponent = /** @class */ (function () {
    function ZivljenjepisComponent(spinner) {
        this.spinner = spinner;
    }
    ZivljenjepisComponent.prototype.ngOnInit = function () {
    };
    ZivljenjepisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zivljenjepis',
            template: __webpack_require__(/*! ./zivljenjepis.component.html */ "./src/app/Components/zivljenjepis/zivljenjepis.component.html"),
            styles: [__webpack_require__(/*! ./zivljenjepis.component.scss */ "./src/app/Components/zivljenjepis/zivljenjepis.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], ZivljenjepisComponent);
    return ZivljenjepisComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div [ngClass]=\"bgClass\">\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xl-2 col-lg-1 col-md-1 col-sm-1 col-1\" id=\"logo\">\n      <a routerLink=\"/index\"><img src=\"./assets/Slike/logo2take1.png\" alt=\"Smiley face\"><b>Spletne rešitve</b></a>\n    </div>\n    <div id=\"navigation\" class=\"col-xl-8 col-lg-9 col-md-9 col-sm-9 col-11\">\n      <ul>\n        <li><a routerLink=\"/zivljenjepis\" routerLinkActive=\"bg1\">O MENI</a></li>\n        <li><a routerLink=\"/jeziki\" routerLinkActive=\"bg2\">JEZIKI</a></li>\n        <li><a routerLink=\"/projekti\">PROJEKTI</a></li>\n        <li><a routerLink=\"/kontakt\">KONTAKT</a></li>\n      </ul>\n    </div>\n    <div id=\"social\" class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-1\">\n      <ul>\n        <li><a href=\"https://www.facebook.com/bernard.burnik\"><img alt=\"facebook\" src=\"./assets/Slike/fb.png\"></a></li>\n        <li><a href=\"https://www.linkedin.com/in/bernard-val-burnik-217307166/\"><img alt=\"linked in\" src=\"./assets/Slike/in.png\"></a></li>\n        <li><a href=\"https://www.instagram.com/bernard_burnik/\"><img alt=\"insta\" src=\"./assets/Slike/insta.png\"></a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.title = 'Burnik - Spletne rešitve';
        this.bgClass = 'default';
        this.router.events.subscribe(function (event) {
            switch (_this.router.url) {
                case "/jeziki": {
                    _this.bgClass = "jeziki";
                    break;
                }
                case "/zivljenjepis": {
                    _this.bgClass = "zivljenjepis";
                    break;
                }
                case "/projekti": {
                    _this.bgClass = "projekti";
                    break;
                }
                case "/kontakt": {
                    _this.bgClass = "kontakt";
                    break;
                }
                case "/index": {
                    _this.bgClass = "index";
                    break;
                }
                default: {
                    _this.bgClass = "index";
                }
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/index/index.component */ "./src/app/Components/index/index.component.ts");
/* harmony import */ var _Components_zivljenjepis_zivljenjepis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/zivljenjepis/zivljenjepis.component */ "./src/app/Components/zivljenjepis/zivljenjepis.component.ts");
/* harmony import */ var _Components_jeziki_jeziki_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/jeziki/jeziki.component */ "./src/app/Components/jeziki/jeziki.component.ts");
/* harmony import */ var _Components_projekti_projekti_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/projekti/projekti.component */ "./src/app/Components/projekti/projekti.component.ts");
/* harmony import */ var _Components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/kontakt/kontakt.component */ "./src/app/Components/kontakt/kontakt.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _Components_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
                _Components_zivljenjepis_zivljenjepis_component__WEBPACK_IMPORTED_MODULE_5__["ZivljenjepisComponent"],
                _Components_jeziki_jeziki_component__WEBPACK_IMPORTED_MODULE_6__["JezikiComponent"],
                _Components_projekti_projekti_component__WEBPACK_IMPORTED_MODULE_7__["ProjektiComponent"],
                _Components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_8__["KontaktComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_9__["ROUTES"]),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__["AngularFontAwesomeModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _Components_index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/index/index.component */ "./src/app/Components/index/index.component.ts");
/* harmony import */ var _Components_zivljenjepis_zivljenjepis_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/zivljenjepis/zivljenjepis.component */ "./src/app/Components/zivljenjepis/zivljenjepis.component.ts");
/* harmony import */ var _Components_jeziki_jeziki_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/jeziki/jeziki.component */ "./src/app/Components/jeziki/jeziki.component.ts");
/* harmony import */ var _Components_projekti_projekti_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/projekti/projekti.component */ "./src/app/Components/projekti/projekti.component.ts");
/* harmony import */ var _Components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/kontakt/kontakt.component */ "./src/app/Components/kontakt/kontakt.component.ts");





var ROUTES = [
    {
        path: 'index',
        component: _Components_index_index_component__WEBPACK_IMPORTED_MODULE_0__["IndexComponent"],
    },
    {
        path: 'zivljenjepis',
        component: _Components_zivljenjepis_zivljenjepis_component__WEBPACK_IMPORTED_MODULE_1__["ZivljenjepisComponent"],
    },
    {
        path: 'jeziki',
        component: _Components_jeziki_jeziki_component__WEBPACK_IMPORTED_MODULE_2__["JezikiComponent"],
    },
    {
        path: 'projekti',
        component: _Components_projekti_projekti_component__WEBPACK_IMPORTED_MODULE_3__["ProjektiComponent"],
    },
    {
        path: 'kontakt',
        component: _Components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_4__["KontaktComponent"],
    },
    {
        path: '**',
        redirectTo: 'index',
    },
];


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bernard\BurnikWebsiteFinal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map