"use strict";
(self["webpackChunkausten_stone"] = self["webpackChunkausten_stone"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resume/resume.component */ 29);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: 'resume',
  component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_1__.ResumeComponent
}, {
  path: '**',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor() {
    this.title = 'austen-stone';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _home_github_corner_github_corner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/github-corner/github-corner.component */ 5857);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _home_special_button_special_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/special-button/special-button.component */ 5176);
/* harmony import */ var _home_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/header/header.component */ 4989);
/* harmony import */ var _home_weather_weather_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/weather/weather.component */ 5454);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resume/resume.component */ 29);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material-module */ 828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _material_module__WEBPACK_IMPORTED_MODULE_9__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _home_github_corner_github_corner_component__WEBPACK_IMPORTED_MODULE_2__.GithubCornerComponent, _home_special_button_special_button_component__WEBPACK_IMPORTED_MODULE_4__.SpecialButtonComponent, _home_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _home_weather_weather_component__WEBPACK_IMPORTED_MODULE_6__.WeatherComponent, _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__.ResumeComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _material_module__WEBPACK_IMPORTED_MODULE_9__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 5857:
/*!***************************************************************!*\
  !*** ./src/app/home/github-corner/github-corner.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GithubCornerComponent: () => (/* binding */ GithubCornerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class GithubCornerComponent {
  constructor() {}
  static #_ = this.ɵfac = function GithubCornerComponent_Factory(t) {
    return new (t || GithubCornerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GithubCornerComponent,
    selectors: [["app-github-corner"]],
    decls: 10,
    vars: 0,
    consts: [["href", "https://github.com/austenstone", "aria-label", "View me on GitHub", 1, "github-corner"], ["width", "80", "height", "80", "viewBox", "0 0 250 250", "aria-hidden", "true", 2, "position", "absolute", "top", "0", "border", "0", "right", "0"], ["d", "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"], ["d", "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2", "fill", "currentColor", 1, "octo-arm", 2, "transform-origin", "130px 106px"], ["d", "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z", "fill", "currentColor", 1, "octo-body"]],
    template: function GithubCornerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */", ".github-corner[_ngcontent-%COMP%]:hover   .octo-arm[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_octocat-wave 560ms ease-in-out\n  }\n\n  @keyframes _ngcontent-%COMP%_octocat-wave {\n\n    0%,\n    100% {\n      transform: rotate(0)\n    }\n\n    20%,\n    60% {\n      transform: rotate(-25deg)\n    }\n\n    40%,\n    80% {\n      transform: rotate(10deg)\n    }\n  }\n\n  @media (max-width:500px) {\n    .github-corner[_ngcontent-%COMP%]:hover   .octo-arm[_ngcontent-%COMP%] {\n      animation: none\n    }\n\n    .github-corner[_ngcontent-%COMP%]   .octo-arm[_ngcontent-%COMP%] {\n      animation: _ngcontent-%COMP%_octocat-wave 560ms ease-in-out\n    }\n  }"]
  });
}

/***/ }),

/***/ 4989:
/*!*************************************************!*\
  !*** ./src/app/home/header/header.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ 92);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


const ets = emoji => {
  let emojiHex = '';
  if (emoji.length === 2) {
    emojiHex = emoji;
  } else {
    let comp = (emoji.charCodeAt(0) - 0xD800) * 0x400 + (emoji.charCodeAt(1) - 0xDC00) + 0x10000;
    if (comp < 0) {
      emojiHex = emoji;
    }
    emojiHex = emoji;
    return `&#x${emojiHex.codePointAt(0).toString(16)};&#x${emojiHex.codePointAt(2).toString(16)};&#x${emojiHex.codePointAt(3).toString(16)};`;
  }
  return `&#x${emojiHex.codePointAt(0).toString(16)};`;
};
class HeaderComponent {
  constructor() {}
  ngOnInit() {
    const typed = new typed_js__WEBPACK_IMPORTED_MODULE_0__["default"]('.skills', {
      strings: [`Solutions Engineer `, `Solutions Engineer ${ets('🚀')}`, `Software Engineer ${ets('👨‍💻')}`, `Developer &amp; UI/UX Creator ${ets('🔨')}`, `App Creator ${ets('🔨')}`, `App Designer 🎨`, `Internet Of Things Maker ${ets('🔧')}`, `Internet Of Things Connector ${ets('🌐')}`, `Angular Developer`, `Angular Dev`, `Web Developer`],
      typeSpeed: 50,
      backSpeed: 40,
      smartBackspace: true,
      loop: true,
      startDelay: 200
    });
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 7,
    vars: 0,
    consts: [[1, "title", "hack-font"], [1, "sub-title", "hack-font"], [1, "skills"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "<Austen Stone>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: 100px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 5.5em;\n  font-weight: 700;\n  margin-bottom: 0;\n  line-height: initial;\n  white-space: nowrap;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: 3em;\n  font-weight: 400;\n  margin-left: 1em;\n  margin-top: 0;\n}\n\n.skills-container[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.skills[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n@media only screen and (max-width: 600px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 8vw;\n  }\n  .sub-title[_ngcontent-%COMP%] {\n    font-size: 4vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsY0FBQTtFQUNBLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsY0FBQTtFQUFGO0VBRUE7SUFDRSxjQUFBO0VBQUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLy8gbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDUuNWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uc2tpbGxzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnNraWxscyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogOHZ3O1xuICB9XG4gIC5zdWItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6459:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _github_corner_github_corner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-corner/github-corner.component */ 5857);
/* harmony import */ var _special_button_special_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./special-button/special-button.component */ 5176);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 4989);
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather/weather.component */ 5454);









class HomeComponent {
  constructor(domSanitizer) {
    this.domSanitizer = domSanitizer;
  }
  ngOnInit() {
    console.log(`%c⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠋⠉⠉⠉⠙⠛⠻⢶⣤⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⡆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣠⣴⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡟⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⠶⠟⠛⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡟⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣴⠾⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡶⠛⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠞⠋⠀⠀⠀⠀⣠⣴⠶⠶⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣄⣀⣀⣤⡴⠟⠋⠀⠀⠀⠘⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣟⠉⠙⢷⣄⠀⠀⠀⠀⠀⠀⠘⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣷⡀⠀⠹⣧⡀⠀⠀⠀⠀⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⢀⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⡀⠀⠈⠛⣷⣤⣴⠶⠟⠃⠀⠀⠀⠀⠀⠀⠀⢀⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⡀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⠟⠛⣻⡿⠀⠀⠀⠀⠀⢀⣤⡾⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⠀⠀⠀⢀⣴⠟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠟⠀⠀⠀⠀⣠⣾⡿⠁⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠏⠀⠀⠀⢀⡾⢫⣿⠁⠀⣼⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠃⠀⠀⢀⣴⠟⢡⡟⣿⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠟⠁⠀⠀⣰⠟⠁⢠⡿⠀⢿⡄⢰⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠏⠀⠀⢠⣾⠋⠀⢀⡿⠁⠀⠈⠛⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡏⠀⠀⣴⢿⡟⠀⠀⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⣄⣾⠋⠘⣧⡀⢰⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠈⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`, "font-family:serif; font-size: 9px");
    //   new Typed.default('#about-title', {
    //     strings: [
    //       `About`
    //     ],
    //     typeSpeed: 50,
    //     backSpeed: 40,
    //     smartBackspace: true,
    //     showCursor: false,
    //     loop: false,
    //     onComplete: () => {
    //       new Typed.default('#main-projects-title', {
    //         strings: [
    //           `\<MainProjects\>`
    //         ],
    //         typeSpeed: 50,
    //         backSpeed: 40,
    //         smartBackspace: true,
    //         showCursor: false,
    //         loop: false,
    //         startDelay: 200
    //       });
    //     }
    //   });
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 265,
    vars: 33,
    consts: [[1, "wrapper", "easy-read"], [1, ""], ["id", "about"], [1, "portrait-container"], [1, "portrait", "mat-elevation-z8"], [1, "typed-title"], [1, "links"], [3, "text", "href", "img"], ["id", "github-actions", 1, "project-container"], [1, "project-info"], [1, "mat-elevation-z8"], ["mat-raised-button", "", "color", "primary", "href", "https://github.com/marketplace?query=austenstone", "target", "_blank", "rel", "noopener"], ["href", "https://github.com/marketplace?query=austenstone", "target", "_blank", "rel", "noopener", 1, "project-image", "elev-hover"], ["src", "assets/screenshots/chrome_nSvEKPj2YO.png", "alt", "deviceWISE View", "aria-label", "deviceWISE View"], [1, "project-container"], ["mat-raised-button", "", "color", "primary", "href", "https://view.devicewise.com/login?user=demo&pass=demo", "target", "_blank", "rel", "noopener"], ["mat-raised-button", "", "color", "primary", "href", "https://docs.devicewise.com/Content/Products/GatewayDevelopersGuide/deviceWISE_View/deviceWISE-View.htm", "target", "_blank", "rel", "noopener"], ["mat-raised-button", "", "color", "primary", "href", "https://youtu.be/Gh3EXo6ZuYE", "target", "_blank", "rel", "noopener"], ["href", "https://view.devicewise.com/login?user=demo&pass=demo", "target", "_blank", "rel", "noopener", 1, "project-image", "elev-hover"], ["src", "assets/screenshots/chrome_EWhfXl9Ecn.png", "alt", "deviceWISE View", "aria-label", "deviceWISE View"], ["mat-raised-button", "", "color", "primary", "href", "https://austenstone.github.io/github-actions-usage-report/", "target", "_blank", "rel", "noopener"], ["mat-raised-button", "", "color", "primary", "href", "https://github.com/austenstone/github-actions-usage-report", "target", "_blank", "rel", "noopener"], ["mat-raised-button", "", "color", "primary", "href", "https://youtu.be/VSrB4Qhqgs8", "target", "_blank", "rel", "noopener"], ["src", "assets/screenshots/chrome_xebwmFt39a.png", "alt", "Github Actions Usage Report", "aria-label", "Github Actions Usage Report"], [3, "text", "icon", "href"], [3, "text", "href", "icon"], ["src", "https://github.com/sponsors/austenstone/card", "title", "Sponsor austenstone", "height", "225", "width", "600", 2, "border", "0"], [1, "wrapper"], ["target", "_blank", "href", "https://www.strava.com/athletes/4518741", "aria-label", "Strava", "rel", "noopener"], ["alt", "bike", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 699.07 397.87", 1, "bike"], ["id", "Layer_2", "data-name", "Layer 2"], ["id", "Layer_1-2", "data-name", "Layer 1"], ["d", "M125,397.87c-3-.6-6.07-1.31-9.14-1.76a124.2,124.2,0,0,1-36.84-11.9A156,156,0,0,1,49.49,365C38,355.6,29,344.23,21.13,331.88A143.45,143.45,0,0,1,5.36,297.07c-5.16-16.57-6-33.62-5-50.71A115.26,115.26,0,0,1,7.71,213a164,164,0,0,1,16.38-32.9,134.77,134.77,0,0,1,32.26-34.21,143.58,143.58,0,0,1,51.3-24.6,135.47,135.47,0,0,1,44.5-3.44,142.27,142.27,0,0,1,63,20.28c2.41,1.47,4.85,2.9,7.18,4.48,2.93,2,3.46,2,5.6-.66,3.5-4.41,6.89-8.91,10.34-13.36s7-8.82,10.39-13.32c1.05-1.41,2.47-3.2,2.34-4.69-.27-2.92-1.44-5.77-2.44-8.57-.12-.37-1.48-.23-2.22-.45-2.61-.79-3.44-3.3-1.2-4.69,2.49-1.54,1.88-3.05,1.27-5-3.35-10.6-6.65-21.22-10-31.83-2.15-6.8-4.68-13.51-6.38-20.43-1.2-4.91-4.27-6.82-8.66-7.5-2.71-.42-5.84.36-7.06-3.31-.11-.33-1.45-.35-2.22-.36-1.3,0-2.78.49-3.87,0-8.87-3.63-18.45-5.52-26.57-11-2.19-1.48-4.78-2.35-7-3.77-1.77-1.12-4.09-2.39-3.27-5,.76-2.43,3.11-3.38,5.52-3.62a15.8,15.8,0,0,1,3.43.47C195,7.52,209.67,8.65,224.46,7.9c9.43-.48,18.83-1.28,28.25-1.93,4.79-.33,9.58-.87,14.37-.89a91.12,91.12,0,0,1,10.37,1.07,4.89,4.89,0,0,1,1,.26c3.44,1.13,5.47,3.36,5.29,5.8s-3,4.67-6.73,4.75c-6,.11-12-.1-18,0a12.77,12.77,0,0,0-4.7.92c-2.89,1.23-5.53,3.12-8.49,4.07-3.92,1.26-4.21,5.24-6.36,7.77-.72.85.33,3.42.87,5.11q8.46,26.58,17,53.12c.31,1,.27,2.44.89,2.77,3.39,1.83,3.08,4.92,3.55,8,.9,5.91,2.37,6.71,8.11,5.46L353.53,86c10.86-2.37,21.74-4.66,32.56-7.18,2.07-.48,3.82-2.35,5.89-2.78s4.25.54,6.3.26c3.77-.51,7.46-1.57,11.21-2.25,2.15-.38,4.23-.53,5.61-2.66.42-.65,2.2-1.28,2.53-1,3.05,2.68,6.17.61,9,.06,8.63-1.65,17.17-3.75,25.75-5.69,3.08-.7,3.68-1.56,3.64-4.77a26,26,0,0,1,.25-3.41c.26-2.26.38-4.2-2.58-5-1.77-.49-2.2-2.07-1.41-4,1.52-3.79,1.42-3.87-2-5.83-1.84-1.06-2.29-2.47-.93-4.07,3.46-4,7.23-7.37,13.26-5.76a11.56,11.56,0,0,0,4.9,0c5.38-1,10.77-2,16.07-3.32a13,13,0,0,0,4.9-3c2.75-2.37,6.18-2.53,9.32-2.52,4.94,0,9.86,1,14.81,1.39,1.71.13,3.76.13,5.16-.68a13.18,13.18,0,0,1,7.6-1.86c3.11.18,5.52-.65,6.63-4a10.27,10.27,0,0,1,2.19-3.31c3.63-4.07,7.26-8.14,11-12.08,3-3.12,4.47-3.21,8.41-1.4,5.13,2.36,9.68,8.27,6.83,15.63A21.17,21.17,0,0,0,558.89,22c-.27,2.59-.87,5.59.11,7.78,3,6.75,3.42,13.76,3.28,20.9-.09,4.58.38,8.94,3.12,12.81a2.83,2.83,0,0,1,.66,1.8,3.47,3.47,0,0,1-1.27,1.9c-.23.18-1.29-.28-1.57-.71a29.55,29.55,0,0,1-2.88-5.18c-.81-2.07-1.51-3.6-4.25-2.67-1.84.63-3.2-.5-4-2.19-.68-1.51-1.23-3.07-1.86-4.6a5.51,5.51,0,0,0-.5-.79,3.38,3.38,0,0,0-.38.82C548.3,58,547.61,64,550.34,70c.31.69-.09,1.71-.15,2.57-.84-.38-2.18-.57-2.42-1.19-1-2.59-2.26-5.3-2.35-8-.17-5.11.73-10.25.53-15.35-.14-3.57-1.36-7.1-2.17-10.63,0-.06-1.14-.11-1.36.16a25.52,25.52,0,0,0-2.82,4,5.19,5.19,0,0,0-.77,3.12c1.76,9.07-2,16.67-6.68,23.78-4.81,7.27-11.5,12.76-18.9,17.33a32.43,32.43,0,0,1-5.44,2.43,7.9,7.9,0,0,0-5.27,6.12c-1.11,5.52-2.47,11-3.27,16.57a24.68,24.68,0,0,0,2.13,14.9c1.1,2.22,2.13,2.71,4.6,1.71a136.61,136.61,0,0,1,34.2-8.58,130.08,130.08,0,0,1,23.33-1.05A148,148,0,0,1,607.17,127a136.4,136.4,0,0,1,40.9,23.36,133.13,133.13,0,0,1,22,23,157.54,157.54,0,0,1,23.85,46.81,89.6,89.6,0,0,1,4.28,21.39,11,11,0,0,0,.91,2.74v28.91a27.06,27.06,0,0,0-.93,3.24c-.63,3.75-1,7.54-1.75,11.26a138.77,138.77,0,0,1-32.17,63.67,141.93,141.93,0,0,1-35.15,28.29A132.26,132.26,0,0,1,584.4,396c-3.06.5-6.08,1.25-9.12,1.89H546.33c-2.08-.36-4.16-.72-6.24-1.06-20-3.32-39.06-9.29-56.53-19.82-9.58-5.77-17.91-13.16-26.08-20.67-3.88-3.55-6.94-8-10.33-12.07a124.89,124.89,0,0,1-21.74-38.89,166.7,166.7,0,0,1-8.23-37.76c-.95-8.91-.31-17.6.6-26.24a127.67,127.67,0,0,1,9.07-35.54,137.39,137.39,0,0,1,29.38-44.61c7.74-7.79,15.48-15.54,25.07-21.11,2.3-1.35,2.63-2.77,1.33-5.18a151.5,151.5,0,0,1-7.12-14.75c-2.11-5.21-3.29-7.63-9.23-2-14.47,13.83-25.9,30.18-38.71,45.38-6,7.09-11.58,14.49-17.37,21.74-9.73,12.16-19.51,24.28-29.21,36.46s-19.31,24.44-29,36.61c-1.18,1.48-2.35,2.62-1.59,4.79.5,1.44-.35,2.41-2,2.76a7.83,7.83,0,0,0-5.89,10.85,16.31,16.31,0,0,1,1.2,4.27c.29,3.05,2.17,4.41,4.85,4.81,3.6.55,7.23.9,10.86,1.27,7.08.71,14.17,1.35,21.25,2.08a6,6,0,0,1,5.17,3.39,7.88,7.88,0,0,1-.55,8.07c-1.64,2.48-4.06,3.13-6.93,2.87q-13.85-1.26-27.71-2.39c-2.43-.21-5.43-1.19-7.18-.16-2,1.19-3,4.19-4.25,6.47-4.62,8.17-11.76,12.9-20.79,14.64-11.36,2.19-22.8,4-34.19,6-4.89.86-9.78,2.65-14.65,2.58-6.08-.08-9.91,2.34-12.68,7.3-.08.14-.16.29-.25.43-6.91,9.86-15.33,18.39-24.24,26.34A120.06,120.06,0,0,1,196.57,387c-8.31,3.28-17,5.6-25.6,8.1-4.24,1.24-8.66,1.9-13,2.82ZM455.12,83.8c-4.32.57-9.73,1.33-15.15,2-6.9.82-13.84,1.41-20.72,2.34-8,1.07-16.05,2.4-24.06,3.62-11.63,1.77-23.29,3.33-34.86,5.37-17.14,3-34.23,6.31-51.31,9.69-12.36,2.44-24.67,5.17-37,7.91-3.95.88-4.56,2.19-3.36,6q9.85,31.6,19.76,63.2c.64,2.06,1.09,4.17,3.79,4.7a1.57,1.57,0,0,1,.86,2.73c-1.57,1.86-1,3.68-.42,5.62,1.22,4.13,2.34,8.3,3.64,12.41.32,1,.94,2.41,1.8,2.77,3.14,1.34,3.71,2.9,1.28,5.48-.38.41-.11,1.59.08,2.36,2.71,10.95,5.48,21.88,8.17,32.84.37,1.5.93,2.13,2.66,2.18,4.79.13,9.58.45,14,2.79,1.68.89,3.15.21,4.29-1.37,1.65-2.29,3.4-4.5,5.15-6.71,4.2-5.33,8.5-10.59,12.61-16,1.09-1.43,2.94-2.94,1.23-5.29-.21-.29,1.21-2.42,1.53-2.33,3.26.83,4.37-1.58,5.85-3.53,2.2-2.9,4.37-5.83,6.72-8.62,1.37-1.63,2.31-3.16,1.55-5.39-.63-1.85.16-3.1,2.17-2.66s3.15-.77,4.16-2c2.7-3.36,5.36-6.75,7.89-10.23,1.13-1.55,2.56-3,1.69-5.41-.59-1.58.43-2.71,2.13-2.3,2.37.58,3.21-1,4.35-2.45,4.38-5.61,8.83-11.17,13.27-16.74q16.1-20.22,32.21-40.43,14.69-18.48,29.27-37a17.22,17.22,0,0,0,1.73-3.82c-1.45-.56-2.89-1.16-4.37-1.65A12.29,12.29,0,0,0,455.12,83.8Zm68.35,186.49a23.39,23.39,0,0,0-3.61,2q-23.55,17.1-47,34.32c-5.07,3.73-9.87,7.84-15,11.5-2.34,1.67-1.94,2.94-.51,4.8,3.23,4.21,6.32,8.52,9.51,12.75,2.73,3.63,3.41,3.71,7.19,1,.54-.38,1-.83,1.55-1.25,7-5.59,13.94-11.21,21-16.76q20.47-16.18,41-32.3A5.15,5.15,0,0,0,539,285a2.19,2.19,0,0,0,.06-1.55c-3.52-1.15-4-4.69-5.76-7.17C531.14,273.31,529.14,270,523.47,270.29Zm43.8,74h.26q-.62-26.07-1.24-52.16c0-.5,0-1,0-1.49-.32-2.68-1.1-3.4-3.89-3.39a15.53,15.53,0,0,0-2.94.41c-3.18.63-6.29,2.39-9.63.42a1.83,1.83,0,0,0-1.63.61c-1,1.64-2.51,3.32-2.66,5.09-.62,6.92-.88,13.86-1.11,20.8-.41,12.41-.71,24.83-1.06,37.24,0,.33,0,.66,0,1-.31,6.44-.74,12.88-.87,19.32-.09,4.09.56,4.64,4.56,4.72,5.15.11,10.31.08,15.46,0,4.66,0,4.8-.15,4.82-4.71C567.3,362.91,567.27,353.62,567.27,344.32ZM136.59,219c-.56-1.29-.87-2-1.22-2.79-3.28-6.9-6.6-13.77-9.83-20.68-3.72-8-7.34-16-11.06-23.93-3.3-7.06-6.68-14.09-10-21.12-.43-.9-1.08-1.67-1.55-2.55-1-1.81-2.3-2.13-4.12-1.32-4.24,1.89-8.61,3.53-12.73,5.63-8.35,4.27-7,3.17-3.7,10.53C87.84,175,94,186.93,99.87,199c1.59,3.28,3,6.65,4.58,9.93q4.69,9.63,9.55,19.17c.73,1.44,1.75,3.23,2.61,0,.13-.46,1-1.15,1.3-1.07,1.81.47,2.7-1.49,3.54-1.6,3-.4,4.11-4.29,7.59-3.46,1.21.29,2.75-.36,4-.88A25.77,25.77,0,0,0,136.59,219Zm449,51.2a22.14,22.14,0,0,0-1.36,2.61c-1.06,3-2.15,5.88-5.47,7.3-1.24.53-3.11,1.9-3,2.75a13.92,13.92,0,0,0,2.12,6.86c1.72,2.34,4.36,4,6.62,6,8.57,7.31,17.18,14.56,25.7,21.93,6.27,5.42,12.38,11,18.62,16.46,3.37,2.93,6.91,5.67,10.31,8.57,1.59,1.35,2.93,1.28,4.27-.28,3.87-4.53,7.91-8.93,11.59-13.61,2.37-3,2.21-3.58-.88-6.08-3.61-2.92-7.48-5.51-11.15-8.35Q615.43,292.94,588,271.55A26.41,26.41,0,0,0,585.58,270.15Zm91.9-26.38c-1.42-6.12-2.82-12.24-4.26-18.35a2.5,2.5,0,0,0-3-2,30.69,30.69,0,0,0-3.9.71q-27.56,6.68-55.12,13.41c-7.25,1.77-14.47,3.65-21.7,5.53-1,.26-2.55,0-2.43,1.79.24,3.79.15,7.65.83,11.37.76,4.1,4.4,6.14,8.58,5.41q30.09-5.24,60.17-10.53c5.7-1,11.39-2.11,17.07-3.25C675.82,247.47,677.49,246.48,677.48,243.77Zm-98-10.21a6.84,6.84,0,0,0,5.66-3.82c4.78-9.12,9.67-18.17,14.59-27.21,5.39-9.91,10.9-19.76,16.27-29.69,2.22-4.09,4.18-8.31,6.31-12.45.75-1.47.52-2.46-1-3.25-4.26-2.25-8.44-4.65-12.73-6.83-7.11-3.63-7.52-3.44-11.1,3.87-.21.45-.43.9-.64,1.36-5.4,11.76-10.77,23.54-16.22,35.28-5,10.69-10,21.34-15,32-1.41,3-1.22,3.93,1.87,5.52,3.66,1.88,7.48,3.43,11.24,5.11A2.06,2.06,0,0,0,579.44,233.56Zm-548-14c-2.95-.22-4,1.1-4.44,3.1-1.39,6.12-2.73,12.25-4.17,18.35-.36,1.53.32,2.16,1.6,2.51,1.12.3,2.23.65,3.36.9q28.35,6.38,56.72,12.71,8,1.8,16,3.41c.59.12,1.29-.32,1.94-.5-1.79-1.6.89-3.52.19-4.29-2.51-2.8,2.4-5.19.16-7.85-.12-.14,1.9-1.61,1.86-2.41-.07-1.6,0-2.52,1.47-3.7,1.62-1.31.57-3.9-1.48-4.4q-35.73-8.75-71.48-17.46C32.39,219.72,31.58,219.57,31.43,219.54Zm87.71,70.26c-.18-.17-.35-.4-.41-.37-3.13,1.19-2.64-2.6-4.62-3.39s-4.39-2.8-4.72-4.61c-.46-2.51-3.82-3.45-2.84-6.31a14.21,14.21,0,0,0-3.55-1c-.64,0-1.28.95-2,1.45Q83,289.2,65,302.82c-7.51,5.7-14.86,11.62-22.43,17.23-2.18,1.62-2.28,3-.82,4.9Q47.2,332,52.72,339c1.35,1.73,2.77,2,4.63.52,4-3.22,8.15-6.22,12.15-9.41q14.55-11.61,29-23.31c6.56-5.31,13-10.7,19.56-16.06C118.43,290.47,118.78,290.13,119.14,289.8Zm171.39-36.49c3.77.31,3.9.28,3.22-2.62-.86-3.71-1.92-7.38-3-11-5.35-18.63-10.54-37.32-16.14-55.88s-11.63-37-17.53-55.5a40,40,0,0,0-2.19-4.71c-1.07,1.22-2.13,2.45-3.21,3.66-.44.5-.94.94-1.37,1.45-5.44,6.44-10.86,12.9-16.32,19.32a2.86,2.86,0,0,0,.17,4.38l2.81,2.82c4,4,8.23,7.79,11.88,12.08A144.49,144.49,0,0,1,269.18,199c7,14.72,10.68,30.26,12.53,46.3.82,7.06.54,7.09,7.51,7.93A11,11,0,0,0,290.53,253.31ZM218.36,334c4.34-.71,8.08-1.85,11.82-1.81,4.67.06,7.22-2.33,9.47-5.81,2-3.15,2.11-3.11-.86-5.86-1.09-1-2.13-2.1-3.31-3-10.9-8.35-21.84-16.64-32.73-25-6.3-4.83-12.52-9.77-18.81-14.62-2.26-1.74-4.66-3.26-7.73-2.6a4,4,0,0,0-1.59.81c.9,2.78-2.76,2.91-2.82,4.47-.1,2.86-4.53,2.76-3.57,5.95a9.32,9.32,0,0,0-.91.23c-2.84,1.12-3.17,2.48-.82,4.62,4.27,3.9,8.65,7.7,13.05,11.47q8.47,7.25,17,14.39c6.08,5.1,12.14,10.22,18.3,15.23A13.12,13.12,0,0,0,218.36,334Zm298-92.35c0-5-1-6.22-5.26-7.36l-6.74-1.81q-27.15-7.37-54.31-14.7c-3.68-1-5.29-.08-6.3,3.61-1.32,4.79-2.47,9.63-3.57,14.48s-1,4.77,3.77,6c.48.13,1,.23,1.45.34q17.48,4,34.93,8c10.68,2.41,21.37,4.75,32,7.22,1.58.36,1.81.33,2.5-1.47C516.78,251,514.09,245.7,516.36,241.68ZM204.72,156.53c-.54-.29-1.39-.75-2.25-1.19-5-2.57-9.92-5.37-15.07-7.64-4.21-1.85-5.36-1.13-7.31,3-3.94,8.4-7.83,16.83-11.84,25.2-5.6,11.66-11.32,23.27-16.94,34.92-1.22,2.54-2.24,5.17-3.39,7.74-.88,2-.54,2.79,1.82,2.46a4.36,4.36,0,0,1,2.53.86c4.08,2.54,6.53,2.37,9.58-1,1.56-1.7,2.9-3.61,4.42-5.35,5.24-6,10.55-11.88,15.76-17.88,2.48-2.87,5.3-5.61,7.08-8.9,4.89-9,9.32-18.34,13.89-27.56C203.58,160.09,203.91,158.79,204.72,156.53Zm385.69,84.55c.59-.19,1.22-.42,1.86-.57,18.7-4.48,37.41-8.89,56.09-13.43,6.92-1.69,13.75-3.72,20.66-5.5,2.4-.62,2.81-1.72,1.78-3.94-2.38-5.1-4.45-10.35-6.85-15.44-1.88-4-2.3-4.1-6.52-2.27-5,2.16-9.94,4.58-14.93,6.84-10.41,4.74-20.88,9.34-31.23,14.22a60.37,60.37,0,0,0-11.55,6.67c-3.08,2.41-5.4,5.79-8,8.8a24.58,24.58,0,0,0-2.29,3.24,1.8,1.8,0,0,0,0,1.25C589.49,241.07,590.05,241,590.41,241.08Zm-31.16-35.71c1,5.92,2,11.61,3,17.3.08.48.2,1,.31,1.43a7.71,7.71,0,0,0,1-1.3q13.86-29.19,27.66-58.4c2.34-4.94,4.66-9.89,6.77-14.93,1.33-3.18,1.07-3.55-2.3-4.46-5.27-1.42-10.57-2.76-15.9-4-4-.91-4.85-.28-6.09,3.71-.19.63-.31,1.28-.47,1.93q-5.73,23.38-11.45,46.77C560.87,197.46,560.08,201.52,559.25,205.37Zm37.55,65.9c-1.17,0-2.33,0-3.5,0a15.86,15.86,0,0,0-1.91.32,7.61,7.61,0,0,0,1.16,1.46q12.9,10.13,25.84,20.2,12.17,9.45,24.38,18.85c4.07,3.13,8.18,6.23,12.33,9.25,2.82,2.05,3.6,2,5.47-1.09a110.71,110.71,0,0,0,5.68-10.5c4.3-9.07,5.37-7.19-4.13-12-14.36-7.3-29.09-13.89-43.34-21.4C611.73,272.64,604.42,271.65,596.8,271.27Zm-28.48,56.08h-.4L569.3,373c0,.5,0,1,.07,1.49.09,1.66,1.09,2.55,2.62,2.25q9.5-1.84,18.93-4c2-.45,2.45-2.06,2.07-3.9-.47-2.27-1-4.52-1.52-6.78-3.12-14.22-6.68-28.37-9.21-42.69a53.28,53.28,0,0,0-12-25.19,7.23,7.23,0,0,0-1.46-1.07,10,10,0,0,0-.48,1.82c-.08,1,0,2,0,3Zm-83.79-59.14c6.65,0,13.29.1,19.93,0a24.07,24.07,0,0,0,6.8-1.11c3.62-1.18,7.12-2.72,10.64-4.18.53-.21.91-.78,1.36-1.18a11.36,11.36,0,0,0-1.39-.47c-5.32-1.21-10.66-2.38-16-3.6q-24.22-5.52-48.43-11.07c-4.85-1.1-9.7-2.19-14.58-3.06-3.34-.6-4.25.2-4.31,3.54-.1,5.64,0,11.28-.05,16.92,0,2.3,1,3.23,3.28,3.3,8.43.26,16.86.72,25.3.94C472.91,268.34,478.72,268.22,484.53,268.21Zm6.22,87.73a49.83,49.83,0,0,0,4.17-4.05c4.77-5.72,9.44-11.52,14.12-17.31q11.7-14.49,23.33-29a15.2,15.2,0,0,0,2.62-4.15c1.33-3.75,2.38-7.59,3.51-11.41a11.27,11.27,0,0,0,.22-1.85,6.16,6.16,0,0,0-2.19.63c-7.14,5.65-14.21,11.39-21.33,17.06-10.62,8.46-21.28,16.86-31.89,25.33-3.1,2.48-6.1,5.1-9.12,7.67-1.52,1.3-1.92,2.73-.21,4.17q7,5.91,14.12,11.73A12.53,12.53,0,0,0,490.75,355.94ZM104.17,270.86a4.26,4.26,0,0,0-1.23-.53c-6.32-.26-12.86-.35-18.64,2-13.66,5.6-27,11.94-40.47,18-4.37,2-8.57,4.37-13,6.23-2.39,1-2.45,2.3-1.57,4.23,2.34,5.13,4.59,10.3,7,15.38,1.86,3.86,2.37,3.93,5.92,1.77a18.27,18.27,0,0,0,1.62-1.15Q64,301.5,84.19,286.14c5.68-4.31,11.43-8.51,17.13-12.79C102.24,272.66,103.06,271.83,104.17,270.86Zm78.21-35.23c3-.64,6.05-1.27,9.11-2q22.48-5.31,45-10.68c5.16-1.24,10.24-2.75,15.38-4.07,2.13-.55,2.52-1.52,1.54-3.51-2.35-4.74-4.37-9.64-6.79-14.34-2.7-5.24-2.83-5.17-8.29-2.76-.76.33-1.49.73-2.24,1.1l-25,12.44c-7,3.47-13.8,7.38-21,10.2-5,1.95-7.34,6-10.17,9.71C178.41,233.7,179.82,235.68,182.38,235.63ZM119.29,294l-.49-1.35a6.21,6.21,0,0,0-1.29.64c-2.29,1.9-4.52,3.88-6.84,5.75q-14.49,11.69-29,23.32c-7.35,5.92-14.72,11.81-22,17.78-2.85,2.33-2.79,3.45.13,5.85s6.1,5.1,9.33,7.4c8.56,6.07,6.08,5.74,12.19-1.46,10.6-12.48,20.52-25.53,30.68-38.37,1.43-1.8,3.1-3.64,3.8-5.75C117.22,303.44,118.09,298.86,119.29,294ZM644.07,175.44a26.51,26.51,0,0,0-2.65-3.05c-3.52-3-7.08-6-10.72-8.82-5.15-4-5.45-4.15-8.8,1.63-5.56,9.59-10.75,19.4-16.08,29.13q-5.73,10.46-11.44,20.92-3.55,6.54-7,13.13a3.53,3.53,0,0,0-.12,1.36,4.27,4.27,0,0,0,1.35-.09c3.64-1.61,7.32-3.13,10.85-5a15.24,15.24,0,0,0,4.18-3.42c6.83-7.65,13.53-15.4,20.34-23.06,6.16-6.92,12.41-13.76,18.6-20.65A25.55,25.55,0,0,0,644.07,175.44ZM106.8,236.21l1.35-.41a9.6,9.6,0,0,0-.89-1.68c-1.79-2.17-3.51-4.42-5.49-6.41a20.67,20.67,0,0,0-5.06-3.94c-17.58-9.05-35.23-18-52.86-27a9.06,9.06,0,0,0-2.7-1.23,2.79,2.79,0,0,0-2.33.84c-3.13,6-6.14,12.12-9.13,18.23a1.79,1.79,0,0,0,1.22,2.73c1.26.41,2.53.77,3.82,1.1,12.72,3.21,25.43,6.46,38.17,9.6C84,230.82,95.17,233.43,106.8,236.21Zm571.66,24.08-.4,0c0-2.66,0-5.32,0-8,0-2.07-.88-3.08-3.09-2.7-6,1-12.1,2-18.14,3q-25,4.37-49.93,8.78c-2.45.43-4.9.84-7.33,1.33a2,2,0,0,0-1.18.81c-.1.16.3.9.62,1,4.7,2,8.74,5.47,14.18,5.77,9.09.51,18.16,1.35,27.26,1.84,8.94.49,17.9.7,26.84,1.08,2.46.11,4.92.29,7.36.56,1.75.2,2.4-.62,2.56-2.2C677.61,267.83,678,264.06,678.46,260.29ZM34.8,270.19l0,.25c6.94-.4,13.88-1,20.83-1.16,7.65-.2,15.32-.39,22.95,0,6.6.38,12.44-1.4,18.09-4.4,1.15-.61,2.22-1.37,3.32-2.05-1.32-.53-2.64-1.08-4-1.58a11.49,11.49,0,0,0-1.46-.34q-34.24-7.57-68.49-15.14c-3.06-.68-4.3-.05-4.53,3.44-.39,5.78-.27,11.6-.15,17.41,0,2.28,1.43,3.59,3.91,3.54C28.48,270.14,31.64,270.19,34.8,270.19Zm225.56-29c-1.37-5.95-2.75-11.9-4.08-17.86-.57-2.54-1.87-2.88-4.35-2.27-9.33,2.27-18.75,4.18-28.1,6.36q-18.89,4.42-37.69,9.1c-.92.23-1.62,1.29-2.42,2a33,33,0,0,0,2.44,2.29,3.08,3.08,0,0,0,1.43.31c11.22,1.28,22.46,2.52,33.68,3.84,5.88.7,11.78,1.36,17.61,2.4a25.83,25.83,0,0,0,11.7-.79,58.07,58.07,0,0,1,6.32-1.32C259.2,244.88,260.76,244.08,260.36,241.23ZM638.93,345.77a22.27,22.27,0,0,0-2.18-2.62c-5-4.38-10-8.68-15-13l-33.92-29.8c-3-2.62-6-5.26-8.94-7.87a3.55,3.55,0,0,0-.88-.41c-.11.26-.39.58-.32.78,1.68,5,1.24,10.58,4.42,15.11q5.72,8.11,11.5,16.19,11.83,16.56,23.72,33.1c2.11,2.93,2.68,3.25,5.68,1.23,5.2-3.51,10.11-7.44,15.11-11.24C638.51,346.94,638.62,346.37,638.93,345.77Zm-496.08-142c.78,4,1.54,8.08,2.42,12.11,0,.2,1.48.43,1.67.18a15.65,15.65,0,0,0,1.7-3c3.3-6.87,6.54-13.77,9.85-20.64,5.41-11.19,10.91-22.35,16.26-33.57,1.71-3.58,2.93-7.39,4.66-11,1.08-2.22.79-3.31-1.67-3.85-5.5-1.22-11-2.58-16.45-3.79-4.07-.89-4.57-.55-5.73,3.28-.24.78-.36,1.61-.53,2.41q-4.69,22.08-9.38,44.16C144.69,194.62,143.79,199.16,142.85,203.79Zm351.41-46.45a26.61,26.61,0,0,0-3.89,2c-4.46,3.42-8.81,7-13.27,10.4-1.34,1-.92,1.8-.09,2.85,3.68,4.68,7.28,9.42,10.95,14.12q13.89,17.78,27.83,35.53c2.08,2.65,2.11,2.6,4,.1a24.06,24.06,0,0,1,2.82-3.43c3-2.76,3.12-2.73,1.23-6.55-3.76-7.58-7.47-15.18-11.38-22.68-5.13-9.84-10.42-19.6-15.71-29.36A20.4,20.4,0,0,0,494.26,157.34Zm63.15,47.24c-.18-1.63-.23-2.46-.37-3.28q-3.9-23-7.83-45.94c-.7-4.07-1.43-8.14-2.26-12.19-.42-2-1.23-3.95-3.94-3.41-5.68,1.14-11.39,2.18-17,3.57-3.65.9-3.87,1.45-2.54,4.89,2,5.1,4.16,10.12,6.32,15.14q7.35,17.13,14.77,34.23c2.83,6.54,5.71,13.06,8.58,19.58a5.78,5.78,0,0,0,.8,1.06,6.2,6.2,0,0,0,.37-.89C555.41,212.84,556.5,208.35,557.41,204.58ZM141,203.52c-.11-.9-.16-1.57-.29-2.22q-5.09-24.8-10.2-49.58c-.6-2.92-1.15-5.86-1.95-8.72-.88-3.19-1.78-3.79-5-3.18-4.39.82-8.8,1.69-13.09,2.9-7.17,2-7.12,2.13-3.86,8.9q6,12.54,12,25.13,9.17,19.32,18.3,38.67a5.71,5.71,0,0,0,.86,1.06c.32-.33.85-.63.93-1C139.54,211.42,140.3,207.36,141,203.52ZM112.17,228c-.81-1.74-1.34-2.95-1.92-4.14q-13.74-28-27.46-55.92c-.66-1.33-1.15-2.75-1.79-4.1s-1.4-2.62-2.08-3.95c-1.11-2.17-2.65-2.22-4.44-.87-4.25,3.17-8.55,6.29-12.72,9.57-3.94,3.1-4.08,4.14-.85,8,5.93,7.13,12,14.11,18,21.21,5.77,6.84,11.74,13.53,17.07,20.69,3.67,4.93,8.83,7.34,13.85,10.13C110.31,228.86,111.25,228.24,112.17,228ZM543,305.7h.23c0-2.82.05-5.64-.07-8.46,0-.29-1.4-.83-1.46-.76-2.6,3.57-5.85,6.61-7.13,11.18-3.57,12.76-7.53,25.4-11.29,38.11-2.07,7-4,14-6.11,21-.71,2.32,0,3.45,2.18,4,5.91,1.62,11.81,3.27,17.73,4.84,1.69.45,3,0,3.13-2.06.34-3.94.82-7.88,1-11.84q.62-11.88,1-23.78C542.6,327.2,542.79,316.45,543,305.7Zm-30.55-35.85c-2.66.57-6,.85-9.05,2-14.1,5.39-28.11,11-42.13,16.58-4.77,1.9-9.48,4-14.22,6-1.95.82-2.89,2-1.85,4.25,2.28,5,4.26,10.07,6.59,15,1.76,3.74,2.46,4,6,1.66,4.58-3,8.94-6.28,13.35-9.5q21.67-15.82,43.3-31.71c1.31-1,2.47-2.14,3.7-3.21ZM253.63,300a10.11,10.11,0,0,0-1.65-1.73,45.71,45.71,0,0,0-5.11-3.06c-6.12-3-12.24-5.94-18.45-8.71-5-2.23-9.95-4.78-15.2-6.08-8.49-2.11-17.2-3.32-25.82-4.91a8.27,8.27,0,0,0-1.47-.21c-.31,0-.86.15-.88.29a2,2,0,0,0,.21,1.26,4.24,4.24,0,0,0,1.12,1q21.6,16.69,43.23,33.37,5.5,4.25,11.16,8.27c1.24.89,2.62,1.54,3.63-.55,2.69-5.5,5.48-10.95,8.21-16.43C253,301.79,253.24,301,253.63,300Zm260.51-66.76a3.31,3.31,0,0,0,1.25-.37c1.6-1.33,1.46-6.26-.34-7.33-4.13-2.47-8.37-4.75-12.55-7.12q-13.63-7.74-27.25-15.51c-4.33-2.47-8.6-5-12.92-7.5-4.64-2.65-5.34-2.46-8,2.45-1.67,3.06-3.22,6.19-4.71,9.34-3.71,7.81-5.59,7.23,4.73,10.09,15.35,4.26,30.74,8.38,46.13,12.51C505,231.05,509.48,232.11,514.14,233.28Zm-385,77.35c-.27-3.44-.52-6.88-.83-10.31-.17-1.81-1.32-2.42-2.56-1.2a78.08,78.08,0,0,0-5.17,6,22.72,22.72,0,0,0-5,9.57c-2,8.71-4.38,17.32-6.47,26-2.16,9-4.11,18.05-6.27,27.05-.46,1.91-.38,3.33,1.73,3.84,6.27,1.51,12.56,2.91,18.83,4.42,2.15.52,2.54-.53,2.6-2.34q.42-12.14,1-24.27c.11-2.25-1-3.22-3-3.89a29.33,29.33,0,0,1-6.35-2.78c-3.15-2-3-4.74-.09-7a4.48,4.48,0,0,0,1.84-2.49,14.23,14.23,0,0,1,3.9-8.59C126.88,320.71,130.72,316.76,129.17,310.63Zm119.45-39.42c2.67,0,5.33.06,8,0,3.84-.1,4.05-.27,4.15-3.88s.1-7,0-10.46c-.07-2.92-1-3.88-3.76-4.17-3.11-.32-6.22-.67-9.34-.87-4.09-.26-8.32-1.11-12.28-.44-11.27,1.9-22.44,4.43-33.64,6.74-3.67.76-4.23,2.26-1.68,5a7.54,7.54,0,0,0,3.82,2c4.69,1,9.42,1.89,14.16,2.64C228.19,269.37,238.26,271.58,248.62,271.21Zm223.24-1.93H450.92l-9.47,0c-2.14,0-2.91.83-2.42,3.11,1.15,5.33,1.93,10.74,3.12,16.06,1.09,4.86,1.29,4.86,6,3.57.63-.18,1.26-.41,1.87-.65q14.34-5.7,28.66-11.41,11.55-4.64,23.06-9.36a9.92,9.92,0,0,0,1.52-1,13.22,13.22,0,0,0-1.94-.3Zm41.06-47.83c-.7-1.09-1.18-1.95-1.78-2.72q-14.88-18.89-29.8-37.73c-1.84-2.32-3.83-4.54-5.76-6.8-1.12-1.32-2.24-1.25-3.3.05q-6.25,7.67-12.5,15.35c-1,1.21-.65,2.07.6,2.81.85.5,1.62,1.16,2.48,1.65q22.22,12.66,44.46,25.28c1.44.82,2.85,1.69,4.32,2.45C511.88,221.92,512.33,221.62,512.92,221.45Zm19.2,89.42a4.26,4.26,0,0,0-.29-.78,2.31,2.31,0,0,0-1.28.44c-2.28,2.61-4.56,5.23-6.74,7.92q-9.82,12.12-19.59,24.29c-3.21,4-6.49,7.92-9.59,12-2.14,2.82-2.12,3.08.85,4.83,3.85,2.27,7.84,4.3,11.83,6.32,7.14,3.62,7.35,3.48,9.61-4.09q5.88-19.74,11.82-39.45C529.88,318.55,531,314.74,532.12,310.87ZM190.28,337.65c4.4-.68,7.82-1.28,11.26-1.72,3.26-.42,6.54-.64,9.8-1,.57-.07,1.08-.6,1.62-.92a7.58,7.58,0,0,0-1.05-1.48c-3.85-3.4-7.69-6.79-11.6-10.12q-8.49-7.25-17.06-14.4-8.94-7.49-17.91-14.93a14.7,14.7,0,0,0-1.65-1,9.92,9.92,0,0,0,0,1.81c.72,3.4,1.38,6.82,2.28,10.17.68,2.53,1.18,5.33,2.64,7.38,5.67,7.94,11.63,15.68,17.65,23.36C187.43,336.18,189.36,337,190.28,337.65ZM94.4,219.56c-.41-.66-.64-1.11-.94-1.49-2.13-2.74-4.22-5.51-6.44-8.18q-9.66-11.62-19.41-23.17c-3-3.53-6.14-6.93-9.19-10.41-1.55-1.77-3-1.8-4.53,0-3.16,3.82-6.38,7.6-9.46,11.48-3.85,4.88-3.77,5.3,1.84,8.18q22.13,11.37,44.3,22.63a22.81,22.81,0,0,0,2.7,1.26C93.54,220,94,219.7,94.4,219.56Zm523.94,52.76-2,.61a25.27,25.27,0,0,0,2.44,1.57c10.83,5.43,21.65,10.88,32.51,16.23,5.65,2.78,11.39,5.38,17.1,8,1,.47,2.25,1.33,2.74-.53,1.72-6.54,3.33-13.12,5-19.66.47-1.78-.42-2.43-1.9-2.75a17.43,17.43,0,0,0-2.92-.54c-8.1-.38-16.2-.71-24.29-1.05-1,0-2,0-3-.09Zm-21.45,98.51c1.39-.43,2.21-.62,3-.95,4-1.7,7.94-3.38,11.86-5.17,7.1-3.23,7.13-2,2.39-9.13-6.55-9.77-13.6-19.21-20.44-28.78q-4.92-6.87-9.87-13.72a5.48,5.48,0,0,0-1.1-.92,6.43,6.43,0,0,0-.28,1.4,7.38,7.38,0,0,0,.32,1.45c3,13.59,5.93,27.18,9,40.75,1,4.35,2.15,8.67,3.4,13C595.38,369.6,596.39,370.26,596.89,370.83ZM558.67,138.4l0,.31c-2,0-4-.13-6,0-3.55.28-4.27,1.19-4,4.77.07.81.4,1.6.53,2.42,1.75,10.61,3.45,21.23,5.24,31.83,1,6.19,2.2,12.37,3.38,18.55a7.05,7.05,0,0,0,1.09,1.93c.2-.62.43-1.23.58-1.86,3.54-14.32,7.1-28.64,10.58-43,.89-3.69,1.5-7.46,2.28-11.19.32-1.57.09-2.45-1.83-2.59C566.56,139.34,562.62,138.82,558.67,138.4Zm-404.74,4.74c0-3.37-.71-4.34-3.74-4.42-5.49-.14-11-.12-16.47,0-3.49.06-4.06.82-3.34,4.32q5.26,25.8,10.64,51.58a11.6,11.6,0,0,0,.89,2.1,7.93,7.93,0,0,0,1.06-1.92q5-22.83,9.87-45.66C153.29,147,153.62,144.88,153.93,143.14ZM53.75,271.25v0c-7.82,0-15.63,0-23.44,0a22,22,0,0,0-4,.2c-3.83.69-4.51,1.65-3.68,5.43,1,4.69,2.16,9.36,3.32,14,1.23,4.95,1.36,5.16,6.07,3.07,15.77-7,31.47-14.19,47.18-21.31a18.06,18.06,0,0,0,1.65-.95,10.72,10.72,0,0,0-2.19-.47C70.37,271.24,62.06,271.25,53.75,271.25Zm605.88-75.16a6.79,6.79,0,0,0-.58-1.65q-5.88-7.69-11.83-15.33a1.84,1.84,0,0,0-3-.25,34.94,34.94,0,0,0-3,2.59c-3.65,4.06-7.18,8.24-10.85,12.28-7.24,8-14.54,15.91-21.81,23.86a9.1,9.1,0,0,0-1.18,1.59,6.52,6.52,0,0,0-.44,1.4,4.65,4.65,0,0,0,1.75,0c4.85-2.19,9.65-4.46,14.48-6.67,6.5-3,13-5.83,19.5-8.85,5-2.31,9.85-4.75,14.74-7.21A12.25,12.25,0,0,0,659.63,196.09Zm-417.48-2.45c-.61-1-1-1.76-1.49-2.42-3.15-4.24-6.27-8.51-9.5-12.69-2.63-3.42-3.32-3.4-6.56-.23-.94.93-1.91,1.85-2.76,2.86q-15.28,18.19-30.54,36.44a10.07,10.07,0,0,0-.93,1.68,6.78,6.78,0,0,0,2.2-.27q22.82-11.07,45.56-22.24a19.34,19.34,0,0,0,2.91-1.89A7.8,7.8,0,0,0,242.15,193.64ZM153,360.91h0V348c0-2.05-1-3.44-3-2.65-4.74,1.79-10.28-.27-14.69,3.26-.7.57-2.56,0-3.73-.41-1.82-.67-2.39-.15-2.44,1.66-.09,3.63-.29,7.26-.44,10.89-.17,4.45-.35,8.9-.49,13.36-.06,1.81.86,2.64,2.69,2.8,6.41.56,12.78,1.3,19.22.06,2-.39,2.95-1.12,2.94-3.14C152.93,369.52,153,365.21,153,360.91ZM113.8,316c0-.22-.12-.8-.19-.8a2.32,2.32,0,0,0-1.24.24,5.07,5.07,0,0,0-1,1.13c-7.42,9.32-14.86,18.62-22.23,28-3.27,4.17-6.4,8.44-9.57,12.69-1.22,1.64-1.14,3,1,3.94,4.81,2.24,9.51,4.73,14.39,6.82,5.06,2.16,5.13,2,6.67-3.22.14-.48.26-1,.38-1.44q5.45-21.7,10.87-43.39C113.19,318.67,113.48,317.38,113.8,316Zm61.77-88.75c3.39-1.48,7.89-2.65,10.94-6.11,5.47-6.21,10.64-12.69,16-19,6.48-7.74,12.89-15.54,19.5-23.18,4.45-5.15,4.28-7.09-1.55-10.64A2.31,2.31,0,0,1,220,168c-1.18-1.09-1.89-.54-2.79.53-4.47,5.33-9.14,10.5-13.55,15.88Q191.23,199.61,179,215a72.09,72.09,0,0,0-6.09,9.63C171.91,226.46,172.68,227.38,175.57,227.26Zm377.68-4.6a15.69,15.69,0,0,0-.69-2.64c-3.18-7.46-6.42-14.9-9.64-22.35-4.92-11.41-9.81-22.82-14.78-34.21-2.38-5.45-4.87-10.87-7.41-16.25-.35-.73-1.43-1.81-1.87-1.68a22.5,22.5,0,0,0-6.33,2.67c-.37.26.8,2.85,1.32,4.35a37.72,37.72,0,0,0,1.41,3.71c6.55,14.13,13.15,28.24,19.68,42.38,2.7,5.86,5.23,11.81,7.93,17.68a93.38,93.38,0,0,0,4.5,8.87,4,4,0,0,0,3.06,1.82c.9-.13,1.63-1.69,2.35-2.68A5.76,5.76,0,0,0,553.25,222.66ZM155,360.92h0c0,4.32,0,8.64,0,13,0,1.32,0,2.88,2.09,2.43q9.74-2.06,19.45-4.15a2.57,2.57,0,0,0,2.22-3.3c-1.7-7.76-3.4-15.53-5.31-23.25-.24-1-1.8-2.37-2.68-2.32-4.11.22-8.19.92-12.29,1.38-2.64.29-3.69,1.61-3.58,4.29C155.11,352.94,155,356.93,155,360.92ZM486.53,42.83c-4,.81-8.77,1.67-13.45,2.74-3.84.88-3.86,1.44-1.59,4.86a64.08,64.08,0,0,1,5.4,9.39c1.54,3.47,2.41,7.22,3.67,10.81,1,2.94,1.36,3,3.54,1,1.82-1.7,3.35-3.85,5.43-5.11,6.62-4,9.73-9.94,10.85-17.33.58-3.84-.21-5.33-4.07-5a11.05,11.05,0,0,1-6.13-1C489.35,42.76,488.23,43,486.53,42.83ZM154,318.49h0v19.87c0,2.28.77,3.26,3.33,2.83,3.74-.62,7.54-.82,11.32-1.18,3-.29,3.43-.74,2.8-3.74-1.27-6-2.53-12-4-17.89-.79-3.16-1.55-6.5-3.2-9.23-2.37-3.94-5.51-7.41-8.38-11a5,5,0,0,0-1.5-.9,5.63,5.63,0,0,0-.36,1.41C154,305.24,154,311.87,154,318.49Zm33.48,22.7c-2.66.36-4.62.65-6.58.9-6,.78-6.18.81-4.86,6.87s3,12.2,4.51,18.3c.54,2.15,1.84,3.23,4,2.22,5.26-2.42,10.56-4.79,15.67-7.52,2.83-1.51,2.93-2.18,1.15-4.66-3.48-4.83-7.13-9.53-10.87-14.16A10.12,10.12,0,0,0,187.5,341.19Zm81.26-14.11.07-.29c1.3-.07,2.63-.05,3.92-.24q12.4-1.79,24.8-3.7a11.41,11.41,0,0,0,3.24-1.19,1.44,1.44,0,0,0,.53-1.23c-.05-.38-.73-1-.85-1-2.66,1.27-4,.16-4.69-2.4a4.31,4.31,0,0,0-1.73.27c-1.12.52-2,.71-1.93-.93s-.62-2.12-2.13-1.84c-3.65.69-.89-2.27-1.8-3.29-1.16-1.31-4.08,1.1-3.85-1.64.19-2.22,0-3-2.32-2.8-.16,0-.77-1.2-.6-1.45,1.27-1.87,1.1-3-1.32-3.45a1.75,1.75,0,0,1-.45-1.51c1.83-2.63-1-2.92-2-4.11a30.92,30.92,0,0,0-1.76,3.11Q271,311,266.07,322.7c-.5,1.2-.95,2.43-1.42,3.64ZM203,339.7l-.12-.72c-3,.67-6.09,1.29-9.12,2-1.13.27-1.79,1.06-.91,2.19,3.7,4.68,7.47,9.3,11.16,14,.87,1.1,1.84,1.56,3,.69,5.5-4.26,11-8.55,16.38-12.92.46-.37.76-1.85.52-2-2.87-2.27-4.92-6-9.64-5C210.5,338.75,206.7,339.13,203,339.7Zm-50-12.18.36,0q-.66-9.39-1.34-18.8c-.07-1-.37-2.49-1.57-1.25-3.8,3.91-7.46,8-10.9,12.2-1.24,1.53-1.2,3.41.12,5.47,1.55,2.43,3.41,4.76,4.17,7.74.25,1,.87,1.59-.14,2.4a37.35,37.35,0,0,0-.88,6.18c1.62.22,3.24.41,4.86.58a5.57,5.57,0,0,0,1,0c3.64-.21,4.2-.73,4.3-4.53C153,334.16,152.94,330.84,152.94,327.52Zm41.51-82.15v-.23h-3.68c.56,1,1.13,2,1.68,3,1.35,2.45,2.66,4.92,4,7.36.73,1.32,1.77,1.64,3.33,1.32,9.22-1.92,18.46-3.72,27.69-5.58a6,6,0,0,0,1.23-.53c-.35-.31-.68-.83-1.07-.89-3.24-.5-6.49-.91-9.74-1.34ZM178.34,339c1.76-.29,3.51-.7,5.28-.83,2.17-.17,3.21-.35,1.32-2.7-5.16-6.43-10.1-13-15.14-19.55a7.32,7.32,0,0,0-1.08-.91,7.32,7.32,0,0,0,0,1.75c1.36,5.94,2.79,11.88,4.14,17.83C173.79,338.75,173.75,338.76,178.34,339Zm130.6-38.66c-3.43-.77-6,.76-8.34,2.71-.57.48-1.09,2.05-.79,2.38,2.33,2.61,5,5.32,8.62,5.34,3.41,0,6.84-1.12,10.24-1.86,1.08-.24,1.95-1.15.93-2.16C316.54,303.69,314.52,298.82,308.94,300.31ZM228.1,283.15l-1.13.69a5.55,5.55,0,0,0,1.09.92c7.59,3.63,15.15,7.32,22.8,10.83,3.54,1.62,3.91,1.3,5.14-2.61s1.16-4.08-2.8-4.89c-2.09-.43-4.23-.57-6.34-.9-1.61-.24-3.22-.54-4.81-.89C237.4,285.27,232.77,284.21,228.1,283.15ZM504.37,64.38h0c0-.33,0-.66,0-1l-.36-5c-1.61,1.36-3.29,2.64-4.79,4.11-.54.52-.61,1.5-.93,2.26-1.44,3.33-2.91,6.64-4.32,10-.62,1.47-1.11,3-1.66,4.49,1.67-.42,3.36-.75,5-1.27,4.87-1.58,7.11-5,7.05-10.1C504.36,66.69,504.37,65.53,504.37,64.38Zm-325,189.49a8.21,8.21,0,0,0-.24,1.39c-.08,4.22,1.3,5.41,5.37,4.62,2.76-.54,5.5-1.14,8.26-1.64,1.39-.26,1.68-1,1-2.06a18.36,18.36,0,0,0-2.57-3c-1.44-1.35-3.61-2.28-4.34-3.9-.93-2-1.79-1.83-3.38-1.32C179.49,249.25,179.41,249.29,179.4,253.87Zm102.41,8.84c0,1.49-.1,3,0,4.47a5.41,5.41,0,0,0,.88,2.7c.41.52,1.43.55,2.18.8.19-.58.63-1.24.5-1.74-.43-1.67-.34-2.31,1.78-2.23,2.63.09.37-2.73,1.43-3.29s2.6-.36,3.93-.52c.05,0,.05-.31.12-.46,2.2-5.06,2.2-5.05-3.27-5.78-.16,0-.32-.1-.48-.12C281.83,255.55,281.83,255.55,281.81,262.71ZM499.63,92.2c-3,1.34-5.55,2.45-8.05,3.73-.31.16-.38,1.22-.23,1.78,1.26,4.64,2.59,9.25,3.92,13.87a3.85,3.85,0,0,0,.46.84c.22-.32.55-.61.62-1,1.27-5.82,2.53-11.64,3.73-17.47C500.17,93.52,499.84,93,499.63,92.2ZM195.32,180.93c.75-.4,1.12-.49,1.31-.72,4.67-5.73,9.35-11.47,14-17.24,1.11-1.39.35-2.35-.94-3.19s-2.68-1.72-3.78.11c-1.27,2.11-2.35,4.35-3.51,6.53-2.23,4.22-4.47,8.43-6.68,12.66A7.91,7.91,0,0,0,195.32,180.93Zm319.73-124a17.14,17.14,0,0,0-.9-3.46,2.14,2.14,0,0,0-1.85-.86,6.45,6.45,0,0,0-4.87,6c-.18,3.47-.38,6.93-.55,10.39a4.29,4.29,0,0,0,.15.93c.3-.08.69-.07.88-.25A26.47,26.47,0,0,0,515.05,56.9Zm-20,9c-.42,0-.89-.1-1.11.08-2.87,2.45-5.8,4.86-8.54,7.46s-2.81,3.36-.95,6.76c.91,1.65,2.09,1.86,3,.35,2.62-4.56,5-9.25,7.51-13.89A3.47,3.47,0,0,0,495.05,65.89Zm86.42,172.56c1,1.15,1.54,2.27,2.44,2.74a2.72,2.72,0,0,0,2.43-.66c2.75-2.86,5.38-5.84,8-8.84a14,14,0,0,0,1.38-2.46,10.28,10.28,0,0,0-2.69.31c-2.15.86-4.5,1.57-6.28,3C584.76,234.06,583.31,236.31,581.47,238.45Zm18.79,31.64v.11c.83,0,1.66,0,2.49,0a6.55,6.55,0,0,0,1.34-.38c-.3-.35-.54-.83-.92-1a70.42,70.42,0,0,0-8.06-3.92c-2.67-1-5.59-1.35-7.87,1.11-1.33,1.44-.82,3,1.15,3.16C592.34,269.54,596.3,269.78,600.26,270.09Zm-69.91-44.47c-.84-1.74-1.64-3.35-2.38-5s-1.7-1.78-2.9-.41c-.54.62-1.16,1.17-1.75,1.74-1.35,1.33-2.78,3.1-1.43,4.7s3.66,2.59,5.57,3.79c.12.08.62-.2.74-.43C528.94,228.59,529.62,227.13,530.35,225.62ZM553.27,36.88h0c0-1.48,0-3,0-4.45a6.06,6.06,0,0,0-.35-1.41,7.42,7.42,0,0,0-1.49.83c-.61.54-1,1.4-1.67,1.78C547,35.2,547,37.45,548,40a31.58,31.58,0,0,1,1.33,3.71c.33,1.38,1,1.77,2,.75a7.64,7.64,0,0,0,2-3.15A19.89,19.89,0,0,0,553.27,36.88Zm14.88,209.73c2.77-.76,5.2-1.29,7.52-2.12,1.45-.52,1.43-1.67.41-2.75-2.3-2.45-6.73-2.49-9.39.13a3.61,3.61,0,0,0-1,3C566,245.63,567.34,246.07,568.15,246.61Zm9.22,51.29c-1-4.06-1.12-8.26-4.85-10.72-.77-.51-2.07-.2-3.13-.28,0,1.05-.5,2.35,0,3.08,1.81,2.94,3.89,5.72,5.92,8.52.26.35,1,.79,1.16.68A4.58,4.58,0,0,0,577.37,297.9Zm-418.09-5.59c-1,.33-2.76.58-2.8,1a5.89,5.89,0,0,0,.87,3.58c1.61,2.5,3.47,4.85,5.29,7.21a7.78,7.78,0,0,0,1.51,1.19,11.39,11.39,0,0,0-.06-2.19,83.69,83.69,0,0,1-2-8.72C161.87,292.17,161.08,292.06,159.28,292.31Zm396-71.12a15.08,15.08,0,0,0,1.13,3.47,2.6,2.6,0,0,0,2.23.94c.72-.16,1.88-1.18,1.81-1.7-.54-4.2-1.32-8.37-2.06-12.55,0-.28-.35-.51-.54-.76a2.42,2.42,0,0,0-.43.74C556.7,214.52,556,217.71,555.27,221.19Zm-37.93,24h.13c0,1.16-.35,2.49.1,3.44s1.68,1.31,2.57,1.94a11.14,11.14,0,0,0,1.23-2c.8-2.19-.64-5.08,2.11-6.71a2.09,2.09,0,0,0-.51-1.23c-1-.74-2.28-2-3.23-1.78s-1.71,1.78-2.14,2.91A12.22,12.22,0,0,0,517.34,245.16Zm63.92,16.26c0-3.44-2.75-6.23-5.55-5.85-1,.13-1.84,1.13-2.57,1.9-.12.13.62,1.31,1.17,1.76a47.85,47.85,0,0,0,4.31,3.18,11.2,11.2,0,0,0,2.17.88C581,262.52,581.17,261.75,581.26,261.42ZM184.17,272.34l-1.13.46a11.61,11.61,0,0,0,1.54,1.09,5.5,5.5,0,0,0,1.44.3q10.18,1.85,20.38,3.69a5.93,5.93,0,0,0,1.38-.11c-.28-.33-.5-.78-.86-1a11.87,11.87,0,0,0-3.17-1.35C197.43,274.39,191.09,273.43,184.17,272.34Zm-58.42,23.35-2.81-3.16c-.73.72-1.84,1.33-2.13,2.2-.88,2.66-1.47,5.42-2.14,8.15a5.74,5.74,0,0,0,0,1.37c.41-.2.94-.3,1.22-.63,1.39-1.63,2.75-3.3,4-5C124.56,297.84,125,296.94,125.75,295.69Zm162.64-1.1c-2-.23-2.88.55-2.36,2.44a12.23,12.23,0,0,0,1.72,3.47c.76,1.13,1.84,1.39,2.85.24,1.18-1.32,2.29-2.7,3.43-4.05l-4.69-1.82C289,294.75,288.71,294.68,288.39,294.59Zm256-7.91c-.3-.51-.76-1.28-1.21-2.06-.65.58-1.64,1.05-1.9,1.77-1,2.79-1.78,5.65-2.57,8.51a3.41,3.41,0,0,0,.23,1.36,6,6,0,0,0,1.28-.5C543.22,293.67,543.62,290.33,544.34,286.68Zm-3.47-29.62-4.56,3.06a12.65,12.65,0,0,0,2.42,2.61,17.29,17.29,0,0,0,4.16,1.48,7.05,7.05,0,0,0,1.84.06,5.43,5.43,0,0,0-.37-1.79C543.32,260.73,542.16,259,540.87,257.06Zm-308.43,79c-.68-.31-1-.61-1.31-.56q-4.83.75-9.62,1.65a1.36,1.36,0,0,0-.19,1c1.76,1.08,3.89,3.27,5.29,2.88C228.71,340.43,230.29,338,232.44,336.09ZM518.86,268.2a7.24,7.24,0,0,0,6.6-2.22c.37-.38.35-1.16.5-1.75-.59-.12-1.26-.49-1.75-.32-3,1-5.86,2.12-8.77,3.23a3.37,3.37,0,0,0-.75.52,3.59,3.59,0,0,0,1.06.52C516.57,268.26,517.4,268.2,518.86,268.2ZM140.13,216.26c0,.35-.21,1.06,0,1.29,1.21,1.17,2.54,2.21,3.82,3.3a26.66,26.66,0,0,0-.06-3.58c-.28-1.93-.71-3.85-1.16-5.75-.09-.4-.54-.73-.83-1.09-.28.3-.72.56-.81.91C140.74,212.92,140.47,214.53,140.13,216.26ZM95.37,269.19c3.62,0,6.4.53,7.74-2.62.54-1.25,0-2.13-1.2-1.86A35.49,35.49,0,0,0,96,266.87a18.5,18.5,0,0,0-2.72,1.83Zm219.14,4c.63-.75,2.18-1.78,2.38-3,.32-2-1.52-2.79-3.25-2.7a3.32,3.32,0,0,0-2.53,1.49C310.57,270.45,312.34,273,314.51,273.17ZM540,255c-2-1.33-3.12-2.75-4.17-2.68-1.45.1-3.48.82-3.14,3.07.19,1.26.71,2.87,2.52,2.26A32.27,32.27,0,0,0,540,255Zm28.31,17.92a14.1,14.1,0,0,0,0,2.57c.28,1,.68,1.88,1,2.82a23.06,23.06,0,0,0,2.67-2.65c.29-.39.11-1.31-.12-1.88-.58-1.41-.49-3.64-2.63-3.49C568.76,270.32,568.4,272.65,568.31,272.92Zm-44-12.25c.73-1,1.93-1.89,1.78-2.48-.31-1.23-1.33-2.29-2.06-3.42l-4.69,3.47ZM130.06,309.72h.05c0,1.81,0,3.62,0,5.44,0,.27.25.53.38.8.26-.17.69-.31.74-.52.57-2.54,1.4-5.08,1.46-7.63,0-1.14-1.5-2.31-2.33-3.47-.11,1.13-.24,2.26-.32,3.4C130,308.4,130.06,309.06,130.06,309.72Zm410.18-41.4,3.83-.37c-1.2-.7-2.36-1.48-3.62-2.06a14.73,14.73,0,0,0-3.74-1.26,7.3,7.3,0,0,0-2.55.54c.51.94.83,2.4,1.6,2.71C537.07,268.4,538.67,268.2,540.24,268.32Zm10.23,12.43c2,.18,6-3.71,6.21-5.75,0-.28-.17-.78-.35-.83a1.74,1.74,0,0,0-1.3.05q-2.73,2.05-5.33,4.27c-.31.26-.62,1-.47,1.21A4.42,4.42,0,0,0,550.47,280.75ZM304.9,314.63c0-.32,0-.57-.08-.64q-4.21-3.35-8.46-6.65c-.24.32-.71.91-.69.92,2.61,2.22,5.24,4.43,7.93,6.56C303.84,315,304.47,314.7,304.9,314.63Zm249.9-73.31c.25-.2.6-.35.74-.61.83-1.62,1.68-3.24,2.36-4.92a1.83,1.83,0,0,0-.37-1.72,2.19,2.19,0,0,0-1.8.16c-2.45,1.17-3.13,4.93-1.28,6.75C554.57,241.09,554.69,241.2,554.8,241.32Zm-11,30.4c-.07-.16-.21-.92-.43-.94-1.9-.16-3.82-.2-5.73-.21,0,0-.29,1-.12,1.14a13.39,13.39,0,0,0,3,2.35C542.46,275,543.7,274.11,543.8,271.72ZM106.5,228.63c-.23.34-.65.67-.63,1,.1,1.52,2.68,4.08,4.32,4.17a7.22,7.22,0,0,0,2.23-.61c-.43-.74-.68-1.74-1.32-2.16A41.75,41.75,0,0,0,106.5,228.63Zm151.43,21.42c.63-.54,2.51-1.49,2.42-2.2-.26-2.13-2-.53-3.09-.63a2.88,2.88,0,0,0-1,.09c-1.49.36-3,.75-4.45,1.13l4.36,1.14Zm-63.5,13.13,1.67-.83c-.52-.92-1.15-2.67-1.54-2.62a39.66,39.66,0,0,0-5.87,1.54l4.39,1.54C193.39,262.91,193.71,263,194.43,263.18ZM530,235.62c-.43-1-.5-1.64-.81-1.81-1.93-1-3.91-1.91-5.87-2.84.9,1.45,1.79,2.92,2.72,4.36.26.4.7,1,1,1A17.87,17.87,0,0,0,530,235.62Zm22.62,36.25c-.3-.51-.45-1-.62-1a28,28,0,0,0-4.76,0,4.24,4.24,0,0,0-.22,2.51c.07.27,1.51.49,2.16.27A25.11,25.11,0,0,0,552.61,271.87Zm-41-222.31c-1.65-1.13-2.88-2-4.17-2.77-.05,0-1,1-.89,1.23a42.54,42.54,0,0,0,1.91,4ZM325.24,311.74c-1.79-.81-2.61-1.52-3.1-1.33a26.71,26.71,0,0,0-3.88,2.13c.61.45,1.33,1.37,1.82,1.26A38.6,38.6,0,0,0,325.24,311.74Zm-12.06,4.56,2.71-1.73c-.76-.73-1.51-2-2.28-2.06-1.26,0-2.54.79-3.81,1.25ZM504.42,50.53c-.1-.57-.26-1.52-.43-2.47a25.22,25.22,0,0,0-1.27,2.55,8.91,8.91,0,0,0-.5,2.41,29.16,29.16,0,0,0,.06,2.95,15.35,15.35,0,0,0,1.93-2.6A9.26,9.26,0,0,0,504.42,50.53ZM125.34,230.31l3-2.29c-.56-.42-1.4-1.32-1.64-1.18a24.74,24.74,0,0,0-3.2,2.43Zm-19.63,25.8,1.43,2.32c.59-.66,1.69-1.35,1.65-2-.07-.91-.94-1.75-1.48-2.62Zm6.32-11-1.77-2.54a12.49,12.49,0,0,0-1.82,2.73c-.14.39.72,1.16,1.12,1.76Zm64.71-13.54c.61-.2,1-.21,1.16-.4,1-1.06,1.94-2.16,2.88-3.28a2.45,2.45,0,0,0,.3-.85c-.28-.08-.67-.31-.84-.21a29.2,29.2,0,0,0-3.9,2.67C176.08,229.74,176.58,230.84,176.74,231.58Zm380,50.13a30.37,30.37,0,0,0,2.3-3.32c.11-.2-.7-.89-1.08-1.36-.91,1.12-1.82,2.23-2.68,3.39C555.23,280.45,555.85,281,556.71,281.71Zm4-7.38a4.52,4.52,0,0,0,.73,1c.18.15.82.12.88,0,.62-1.28,1.17-2.59,1.68-3.91,0-.09-.62-.56-.63-.55-.87.91-1.72,1.85-2.55,2.8C560.69,273.8,560.72,274,560.67,274.33Zm7.9-37.78c-1.17-.88-1.81-1.64-2.58-1.82-.38-.08-1.37.9-1.41,1.45s.74,1.78,1.1,1.75C566.48,237.88,567.24,237.24,568.57,236.55Zm-334.1,46.76,2.17-.61c-.75-.26-1.48-.59-2.25-.78a20.18,20.18,0,0,0-3.35-.63,17.62,17.62,0,0,0-2.87.27c.82.26,1.62.56,2.44.78C231.87,282.68,233.14,283,234.47,283.31Zm98.79,17.89c-.67-.43-1.2-.89-1.3-.81-1.24,1-2.42,2.06-3.62,3.1a11.5,11.5,0,0,0,.86.94C330.49,303.47,331.72,302.45,333.26,301.2Zm45.56-6.81-1.72,1.89,2,1.65c.42-.56,1.18-1.12,1.18-1.67S379.46,295.18,378.82,294.39Zm182-55.08c-.48-.91-.77-1.49-1.07-2.06-.76,1.14-1.53,2.26-2.22,3.43a2.73,2.73,0,0,0,.85.73C559.26,240.76,560,240,560.85,239.31Zm-402.4,48.54c-.87-.46-1.48-1-1.71-.86a21.77,21.77,0,0,0-2.51,1.9c.49.35,1.13,1.09,1.44,1A15.5,15.5,0,0,0,158.45,287.85Zm159-25.08c-.47.94-.87,1.5-.78,1.6a22.35,22.35,0,0,0,2.47,2.19c.07.05.61-.52.94-.8Z"], ["href", "https://www.passmark.com/baselines/V10/display.php?id=147458042732"], ["src", "https://www.passmark.com/baselines/V10/images/147458042732.png", "alt", "PassMark Rating", "border", "0"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\n          About\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\n          Hey\uD83D\uDC4B, I'm Austen. I write code and solve people's business problems.\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "app-special-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "app-special-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\n      MainProjects\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "GitHub Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "\n            Marketplace\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "deviceWISE View");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "\n          A powerful no-code dashboard builder.\n          Visualize your data or create UI's by simply dragging and dropping widgets into a canvas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "\n            Demo\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "\n            Docs\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "videocam");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "\n            Video\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](102, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "Github Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "Usage Report Viewer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, "\n          Visualize a Github Actions usage report entirely client side.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "\n            Link\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "\n            Source\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "videocam");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, "\n            Video\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](143, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](145, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, "OtherProjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154, "The Game of Life");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](155, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](157, "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John\n      Horton\n      Conway in 1970.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](158, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "app-special-button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](163, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "app-special-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](165, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](166, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](169, "Spotify Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](170, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, "Share your liked Spotify songs with others.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](173, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](175, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "app-special-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](177, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "app-special-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](180, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](181, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](182, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](184, "Audi Car Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](185, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187, "I backwards engineered Audi's website so I could find the cheapest certified pre owned vehicle in America.\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](190, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "app-special-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](192, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](193, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](194, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](196, "React Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](197, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](199, "Simple chatroom using Firebase and React.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](200, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](202, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "app-special-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](204, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](205, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "app-special-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](207, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](208, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](209, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](210, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](211, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](212, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](213, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](214, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](215, "ContactMe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](216, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](217, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](218, "Have more questions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](219, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](220, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](221, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](222, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](223, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](224, "app-special-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](225, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](226, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](227, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](228, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](229, "Want to work together?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](230, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](231, "app-special-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](232, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](233, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](234, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](236, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](237, "iframe", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](238, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](239, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](240, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](241, "footer", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](242, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](243, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](244, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](245, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](246, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](247, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](248, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](249, "g", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](250, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](251, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](252, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](253, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](254, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](255, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](256, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](257, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](258, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](259, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](260, "app-weather");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](261, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](262, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](263, "app-github-corner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](264, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "GitHub")("href", "https://github.com/austenstone")("img", "https://cdn-icons-png.flaticon.com/512/25/25231.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "LinkedIn")("href", "https://www.linkedin.com/in/austenstone")("img", "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Life")("icon", "group_work")("href", "https://life.austen.info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Code")("href", "https://github.com/austenstone/game-of-life")("icon", "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Spotify Share")("href", "https://spotify-share.austen.info")("img", "assets/img/spotify-logo-png-7057.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Code")("href", "https://github.com/austenstone/spotify-share")("icon", "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Code")("href", "https://github.com/austenstone/audi-car-search")("icon", "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "React Chat")("href", "https://chat.austen.info")("img", "https://chat.austen.info/logo192.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Code")("href", "https://github.com/austenstone/react-chat")("icon", "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Email")("href", "mailto:hi@austen.info")("icon", "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Resume")("href", "/resume")("icon", "history_edu");
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _github_corner_github_corner_component__WEBPACK_IMPORTED_MODULE_0__.GithubCornerComponent, _special_button_special_button_component__WEBPACK_IMPORTED_MODULE_1__.SpecialButtonComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _weather_weather_component__WEBPACK_IMPORTED_MODULE_3__.WeatherComponent],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1075px;\n  margin: auto;\n  padding: 16px;\n  box-sizing: border-box;\n}\n\n.contact[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  width: 150px;\n}\n\n@media (max-width: 1024px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 9vw;\n  }\n  .sub-title[_ngcontent-%COMP%] {\n    font-size: 6vw;\n    margin-left: 5vw;\n  }\n}\nsection[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n  max-width: 100%;\n}\n\n.links[_ngcontent-%COMP%] {\n  margin: 20px 0 20px 0;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.links[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 10px 10px 0;\n}\n\n  .mat-tooltip {\n  white-space: pre-line;\n}\n\n.bike[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 25px;\n  transform: scaleX(-1);\n  max-width: 300px;\n}\n\n@media only screen and (max-width: 1000px) {\n  .bike[_ngcontent-%COMP%] {\n    position: initial;\n  }\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: 400;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 28px;\n}\n\n.home-header[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.project-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 40px;\n}\n.project-container[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%] {\n  grid-column: 1/8;\n  grid-area: 1/5/1/-1;\n  max-width: 100%;\n  max-height: 100%;\n  position: relative;\n  cursor: pointer;\n  border-radius: 4px;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n}\n.project-container[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  width: 100%;\n  height: 100%;\n}\n.project-container[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%]::after {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  mix-blend-mode: screen;\n  content: \"\";\n  transition: ease-in-out 0.2s;\n}\n.project-container[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%]:hover::after {\n  background: black;\n}\n.project-container[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%] {\n  z-index: 2;\n  grid-column: 6/-1;\n  grid-area: 1/1/-1/-7;\n}\n.project-container[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 24px;\n  padding: 20px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 10px 0px 40px;\n  font-size: 36px;\n  font-weight: 400;\n  letter-spacing: -0.25px;\n  line-height: 44px;\n  margin-left: -17px;\n}\n\nh1[_ngcontent-%COMP%]:before {\n  content: \"<\";\n}\n\nh1[_ngcontent-%COMP%]:after {\n  content: \">\";\n}\n\n.portrait[_ngcontent-%COMP%] {\n  float: right;\n  width: 300px;\n  height: 300px;\n  background-image: url(\"https://avatars.githubusercontent.com/u/22425467?v=4\");\n  background-size: cover;\n  background-position: center;\n  border-radius: 50%;\n}\n\n#about[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 50px;\n}\n#about[_ngcontent-%COMP%]   .portrait-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media (max-width: 700px) {\n  #about[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: auto;\n  }\n  .project-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 1fr);\n  }\n  .project-container[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%] {\n    grid-area: 4/1/7/1;\n  }\n  .project-container[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%] {\n    grid-area: 1/1/5/1;\n  }\n}\n@media (max-width: 1100px) {\n  h1[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n.typed-title[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBQTtFQUNGO0VBQ0E7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxpQkFBQTtFQURGO0FBQ0Y7QUFJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBRUEsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFMRjtBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxzQkFBQTtFQUNBLDJCQUFBO0FBTko7QUFPSTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMTjtBQVFJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FBTk47QUFTSTtFQUNFLGlCQUFBO0FBUE47QUFXRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBVEo7QUFXSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFUTjs7QUFjQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBWEY7O0FBY0E7RUFDRSxZQUFBO0FBWEY7O0FBYUE7RUFDRSxZQUFBO0FBVkY7O0FBYUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2RUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQVZGOztBQWFBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBQVZGO0FBV0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVEo7O0FBYUE7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtFQVZGO0VBWUE7SUFDRSwwQkFBQTtJQUNBLGtDQUFBO0VBVkY7RUFZRTtJQUNFLGtCQUFBO0VBVko7RUFZRTtJQUNFLGtCQUFBO0VBVko7QUFDRjtBQWNBO0VBQ0U7SUFDRSxjQUFBO0VBWkY7QUFDRjtBQWVBO0VBQ0UsYUFBQTtBQWJGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ud3JhcHBlciB7XG4gIG1heC13aWR0aDogMTA3NXB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb250YWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiA5dnc7XG4gIH1cbiAgLnN1Yi10aXRsZSB7XG4gICAgZm9udC1zaXplOiA2dnc7XG4gICAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgfVxufVxuXG5zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmxpbmtzIHtcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5saW5rcyA+ICoge1xuICBtYXJnaW46IDAgMTBweCAxMHB4IDA7XG59XG5cbjo6bmctZGVlcCAubWF0LXRvb2x0aXAge1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbi5iaWtlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAyNXB4O1xuICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSg5MCk7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmJpa2Uge1xuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICB9XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuaDMge1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxuLmhvbWUtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG5cbiAgLnByb2plY3QtaW1hZ2Uge1xuICAgIGdyaWQtY29sdW1uOiAxLzg7XG4gICAgZ3JpZC1hcmVhOiAxLzUvMS8tMTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaW1nIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4ycztcbiAgICB9XG5cbiAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICB9XG4gIH1cblxuICAucHJvamVjdC1pbmZvIHtcbiAgICB6LWluZGV4OiAyO1xuICAgIGdyaWQtY29sdW1uOiA2Ly0xO1xuICAgIGdyaWQtYXJlYTogMS8xLy0xLy03O1xuXG4gICAgbWF0LWNhcmQge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG5oMSB7XG4gIG1hcmdpbjogMTBweCAwcHggNDBweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjVweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTdweDtcbn1cblxuaDE6YmVmb3JlIHtcbiAgY29udGVudDogXCI8XCI7XG59XG5oMTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiPlwiO1xufVxuXG4ucG9ydHJhaXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzIyNDI1NDY3P3Y9NFwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiNhYm91dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGdhcDogNTBweDtcbiAgLnBvcnRyYWl0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgI2Fib3V0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgfVxuICAucHJvamVjdC1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7XG5cbiAgICAucHJvamVjdC1pbWFnZSB7XG4gICAgICBncmlkLWFyZWE6IDQvMS83LzE7XG4gICAgfVxuICAgIC5wcm9qZWN0LWluZm8ge1xuICAgICAgZ3JpZC1hcmVhOiAxLzEvNS8xO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIGgxIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG4udHlwZWQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5176:
/*!*****************************************************************!*\
  !*** ./src/app/home/special-button/special-button.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpecialButtonComponent: () => (/* binding */ SpecialButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 6515);




function SpecialButtonComponent_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function SpecialButtonComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n      ", ctx_r1.icon, "\n    ");
  }
}
class SpecialButtonComponent {
  constructor() {}
  static #_ = this.ɵfac = function SpecialButtonComponent_Factory(t) {
    return new (t || SpecialButtonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SpecialButtonComponent,
    selectors: [["app-special-button"]],
    inputs: {
      href: "href",
      img: "img",
      icon: "icon",
      text: "text"
    },
    decls: 10,
    vars: 4,
    consts: [["target", "_blank", "rel", "noopener", "mat-stroked-button", "", 3, "href"], [3, "src", 4, "ngIf"], [4, "ngIf"], [3, "src"]],
    template: function SpecialButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpecialButtonComponent_img_4_Template, 1, 1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SpecialButtonComponent_ng_container_6_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n  ", ctx.text, "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
    styles: ["[_nghost-%COMP%] {\n  \n\n}\n\n[_nghost-%COMP%]  a .mat-button-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n[_nghost-%COMP%]  a .mat-button-wrapper mat-icon {\n  margin-right: 5px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9zcGVjaWFsLWJ1dHRvbi9zcGVjaWFsLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC8qIGRpc3BsYXk6IGNvbnRlbnRzOyAqL1xufVxuXG46aG9zdDo6bmctZGVlcCBhIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuOmhvc3Q6Om5nLWRlZXAgYSAubWF0LWJ1dHRvbi13cmFwcGVyIG1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5454:
/*!***************************************************!*\
  !*** ./src/app/home/weather/weather.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherComponent: () => (/* binding */ WeatherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.service */ 7902);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function WeatherComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("It's ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 4, ctx_r0.fahrenheit, "1.0-0"), "\u00B0F with ", ctx_r0.weather.weather[0].description, " in ", ctx_r0.weather.name, ". ", ctx_r0.weatherThought, "!");
  }
}
class WeatherComponent {
  constructor(weatherService) {
    this.weatherService = weatherService;
    this.fahrenheit = 0;
    this.weatherThought = 'Not bad...';
  }
  ngOnInit() {
    this.weatherService.getWeather$().subscribe(weather => {
      if (weather) {
        this.weather = weather;
        this.fahrenheit = this.kelvinToFahrenheit(this.weather.main.temp);
        if (this.weather.weather[0].description.includes('cloud')) {
          this.weatherThought = 'Bring out the sun ⛅';
        } else if (this.weather.weather[0].description.includes('storm')) {
          this.weatherThought = 'Batten down the hatches ⚡';
        } else if (this.weather.weather[0].description.includes('rain')) {
          this.weatherThought = 'That\'s Florida for you ☔';
        } else {
          if (this.fahrenheit > 90) {
            this.weatherThought = 'It\'s hot 🔥';
          } else if (this.fahrenheit > 80) {
            this.weatherThought = 'It\'s pretty warm 🌞';
          } else if (this.fahrenheit > 70) {
            this.weatherThought = 'It\'s perfect weather 👌';
          } else if (this.fahrenheit > 65) {
            this.weatherThought = 'It\'s a little chilly for Florida 😮';
          } else {
            this.weatherThought = 'It\'s freezing 🥶';
          }
        }
      }
    });
  }
  kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
  }
  static #_ = this.ɵfac = function WeatherComponent_Factory(t) {
    return new (t || WeatherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: WeatherComponent,
    selectors: [["app-weather"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"]],
    template: function WeatherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WeatherComponent_div_0_Template, 6, 7, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fahrenheit);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7902:
/*!*************************************************!*\
  !*** ./src/app/home/weather/weather.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);



class WeatherService {
  constructor(http) {
    this.http = http;
    this.weather$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.OPEN_WEATHER_APP_ID = 'ff89e06fe8436ab85a00774b6af92d87';
    this.COUNTRY = 'us';
    this.ZIP_CODE = 33487;
    this._get_weather().subscribe(weather => {
      this.weather = weather;
      this.weather$.next(this.weather);
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(60000).subscribe(() => this._get_weather().subscribe(weather => {
      this.weather = weather;
      this.weather$.next(this.weather);
    }));
  }
  getWeather() {
    return this.weather;
  }
  getWeather$() {
    return this.weather$.asObservable();
  }
  _get_weather() {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?zip=${this.ZIP_CODE},${this.COUNTRY}&APPID=${this.OPEN_WEATHER_APP_ID}`);
  }
  static #_ = this.ɵfac = function WeatherService_Factory(t) {
    return new (t || WeatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: WeatherService,
    factory: WeatherService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 828:
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);





class MaterialModule {
  static #_ = this.ɵfac = function MaterialModule_Factory(t) {
    return new (t || MaterialModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MaterialModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule]
  });
})();

/***/ }),

/***/ 29:
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeComponent: () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ 1757);



function ResumeComponent_blockquote_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.description);
  }
}
function ResumeComponent_mat_chip_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "accent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n            ", skill_r3, "\n          ");
  }
}
function ResumeComponent_div_85_a_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const experience_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", experience_r4.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r4.name);
  }
}
function ResumeComponent_div_85_h2_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const experience_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r4.name);
  }
}
function ResumeComponent_div_85_li_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bullet_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bullet_r10);
  }
}
function ResumeComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResumeComponent_div_85_a_9_Template, 5, 2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResumeComponent_div_85_h2_11_Template, 2, 1, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ResumeComponent_div_85_li_27_Template, 2, 1, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const experience_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r4.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !experience_r4.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n            ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 6, experience_r4.dateStart, "y"), " - ", experience_r4.dateEnd ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 9, experience_r4.dateEnd, "y") : "Present", "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", experience_r4.bullets);
  }
}
class ResumeComponent {
  constructor() {
    this.name = 'Austen Stone';
    this.title = 'Software Engineer';
    this.description = 'Passionate developer focused on using cutting edge technology to solve business problems.';
    this.skills = ['C', 'C++', 'Typescript', 'JavaScript', 'Angular', 'React', 'PWAs', 'Node', 'Git', 'Bash', 'Docker', 'Electron', 'Continuous integration', 'SCM', 'Object Oriented Design', 'Deployment'];
    this.workExperiences = [{
      title: 'Senior Solutions Engineer',
      name: 'GitHub',
      href: 'https://github.com/',
      dateStart: new Date('Mar 1, 2024'),
      dateEnd: null,
      bullets: []
    }, {
      title: 'Solutions Engineer',
      name: 'GitHub',
      href: 'https://github.com/',
      dateStart: new Date('Jan 11, 2021'),
      dateEnd: new Date('Mar 1, 2024'),
      bullets: ['Creator of GitHub Usage Report Viewer, a tool to visualize and analyze GitHub usage data.', 'Ran GitHub Actions roundtable for 100+ attendees to discuss best practices and new features.', 'Traveled to multiple hackathons, customer onsites, and conferences to represent GitHub and help developers.', 'Was GitHub Actions SME for the Solutions Engineering team.', 'developed internal tools to help the team be more efficient and effective.', 'Created countless GitHub Actions for customers and the community', 'FY23 Revenue Club Winner', 'FY23 Managers Choice Worldwide SE award winner']
    }, {
      title: 'Solutions Expert',
      name: 'Telit',
      href: 'https://www.telit.com/',
      dateStart: new Date('Dec 1, 2020'),
      dateEnd: new Date('Jan 10, 2021'),
      bullets: ['Creator of deviceWISE View, a drag/drop dashboard builder that has generated over $1m+ in revenue.', 'Worked collaboratively with the open source community on GitHub and Stack Overflow to add features or solve issues in third party libraries.', 'Gathered requirements and created proposals for clients outlining project scope and timeline.', 'Developed internal applications to evolve our processes and increase productivity such as a License Server, Tunneling Client, and modern CI/CD pipelines.', 'Worked between product management, developers, and sales team to solve problems and prioritize work.', 'Successfully delivered 100s of live demonstrations to customers including IBM, Siemens, Amazon, Dell, Lenovo, Coke, Ford, Honda, Caterpillar, Deloitte, Medtronic, Furuno.']
    }, {
      title: 'Solutions Engineer',
      name: 'Telit',
      href: 'https://www.telit.com/',
      dateStart: new Date('April 1, 2018'),
      dateEnd: new Date('Dec 1, 2020'),
      bullets: ['Creator of industrial C drivers: FANUC CNC, CAN Bus, Modbus, TCP, etc.', 'Creator of C extensions such as Siemens Mindsphere, Azure IoT Hub, AWS Sitewise, AWS IoT Core, IBM Maximo, etc.', 'Lead a large scale development for Foxconn to connect and visualize data from entire factory. In-person in Shenzhen, China.', 'Created and delivered J1939 CANbus solution with AT&T for Halliburton Company USA. Monitor and manage 1000\'s of fracking trucks remotely.', 'Matched customer problems to product features. Developed missing features by extending or creating new products.']
    }, {
      title: 'Engineer Intern',
      name: 'Telit',
      href: 'https://www.telit.com/',
      dateStart: new Date('October 1, 2016'),
      dateEnd: new Date('April 1, 2018')
    }, {
      title: 'Owner',
      name: 'Austen Stone Tech',
      dateStart: new Date('January 1, 2013'),
      dateEnd: new Date('January 1, 2019')
    }, {
      title: 'IT & Computer Graphics Specialist',
      name: 'JRPR Public Relations',
      dateStart: new Date('August 1, 2013'),
      dateEnd: new Date('December 1, 2016')
    }];
  }
  static #_ = this.ɵfac = function ResumeComponent_Factory(t) {
    return new (t || ResumeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ResumeComponent,
    selectors: [["app-resume"]],
    decls: 96,
    vars: 5,
    consts: [["id", "resume-container"], ["id", "resume"], ["id", "header"], [1, "no-margin"], ["id", "side-header"], [4, "ngIf"], ["id", "side"], [1, "side-section"], [1, "contact"], ["target", "_blank", "href", "mailto:hi@austen.info"], ["target", "_blank", "href", "https://austen.info/"], ["target", "_blank", "href", "https://www.linkedin.com/in/austenstone"], [1, "skill-chips"], [3, "color", 4, "ngFor", "ngForOf"], ["target", "_blank", "href", "https://www.fau.edu/"], [1, "education"], [1, "title"], [1, "accent-light"], ["id", "content"], [1, "banner"], ["class", "experience", 4, "ngFor", "ngForOf"], [1, "display-none", "print-only"], ["target", "_blank", "href", "https://austen.info/resume"], [3, "color"], [1, "experience"], [1, "experience-header"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "primary-light", 4, "ngIf"], [1, "flexer"], [1, "date", "primary-light"], [4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"], [1, "company-name", "primary-light"], [1, "primary-light"]],
    template: function ResumeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResumeComponent_blockquote_15_Template, 2, 1, "blockquote", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "hi@austen.info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "austen.info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "linkedin.com/in/austenstone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-chip-set", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ResumeComponent_mat_chip_54_Template, 2, 2, "mat-chip", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Florida Atlantic University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Bachelors of Science in Computer Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, ResumeComponent_div_85_Template, 31, 12, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n          View online at: austen.info/resume\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.workExperiences);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__.MatChip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__.MatChipSet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  min-height: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: auto;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n}\n\n#resume-container[_ngcontent-%COMP%] {\n  max-width: 1250px;\n  margin: auto;\n  display: block;\n  width: 100%;\n  padding: 30px;\n  box-sizing: border-box;\n}\n\n#resume[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: auto 1fr;\n  grid-template-areas: \"header side-header\" \"content side\" \"content side\";\n  width: 100%;\n  box-sizing: border-box;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n@media only screen and (max-width: 1024px) {\n  #resume[_ngcontent-%COMP%] {\n    grid-template-columns: auto;\n    grid-template-rows: auto;\n    grid-template-areas: \"header\" \"side-header\" \"content\" \"side\";\n  }\n  blockquote[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media (max-width: 512px) {\n  #resume-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.no-margin[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n#header[_ngcontent-%COMP%] {\n  grid-area: header;\n  padding: 20px 30px;\n}\n\n#side-header[_ngcontent-%COMP%] {\n  grid-area: side-header;\n  padding: 20px 30px;\n}\n\n#side[_ngcontent-%COMP%] {\n  grid-area: side;\n  padding: 20px 30px;\n}\n#side[_ngcontent-%COMP%]   .side-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n#content[_ngcontent-%COMP%] {\n  grid-area: content;\n  padding: 20px 30px;\n}\n\nblockquote[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n\n.experience[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.experience[_ngcontent-%COMP%]   .experience-header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 10px;\n}\n.experience[_ngcontent-%COMP%]   .experience-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  line-height: initial;\n  margin-bottom: 0;\n}\n.experience[_ngcontent-%COMP%]   .experience-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  line-height: initial;\n  margin-bottom: 0;\n  font-weight: 400;\n}\n.experience[_ngcontent-%COMP%]   .experience-header[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  white-space: pre;\n}\n\n.education[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  line-height: initial;\n  margin-bottom: 0;\n}\n.education[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  line-height: initial;\n  margin-bottom: 0;\n  font-weight: 400;\n}\n\nh1.banner[_ngcontent-%COMP%] {\n  font-size: 1.75em;\n}\n\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block;\n  }\n  [_nghost-%COMP%] {\n    display: block;\n    width: auto;\n    height: auto;\n    overflow: visible;\n    position: static;\n  }\n  #resume-container[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    width: 100%;\n    height: 100%;\n  }\n  #resume[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n  blockquote[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n.skill-chips[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1RUFDRTtFQUdGLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHdFQUFBO0FBREY7O0FBR0E7RUFDRTtJQUNFLDJCQUFBO0lBQ0Esd0JBQUE7SUFDQSw0REFDRTtFQURKO0VBTUE7SUFDRSxTQUFBO0VBSkY7QUFDRjtBQU9BO0VBQ0U7SUFDRSxVQUFBO0VBTEY7QUFDRjtBQU9BO0VBQ0UsU0FBQTtBQUxGOztBQU9BO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU1BO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBSEY7QUFLRTtFQUNFLG1CQUFBO0FBSEo7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRko7QUFJTTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUZSO0FBSU07RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZSO0FBS0k7RUFDRSxnQkFBQTtBQUhOOztBQVNFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBTko7QUFRRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTko7O0FBYUE7RUFDRSxpQkFBQTtBQVZGOztBQWFBO0VBQ0U7SUFDRSxhQUFBO0VBVkY7RUFhQTtJQUNFLGNBQUE7RUFYRjtFQWFBO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQVhGO0VBYUE7SUFDRSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBWEY7RUFhQTtJQUNFLGdCQUFBO0VBWEY7RUFhQTtJQUNFLFNBQUE7RUFYRjtBQUNGO0FBY0E7RUFDRSx5QkFBQTtVQUFBLGlCQUFBO0FBWkYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbn1cbiNyZXN1bWUtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jcmVzdW1lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiaGVhZGVyIHNpZGUtaGVhZGVyXCJcbiAgICBcImNvbnRlbnQgc2lkZVwiXG4gICAgXCJjb250ZW50IHNpZGVcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICNyZXN1bWUge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgIFwiaGVhZGVyXCJcbiAgICAgIFwic2lkZS1oZWFkZXJcIlxuICAgICAgXCJjb250ZW50XCJcbiAgICAgIFwic2lkZVwiO1xuICB9XG4gIGJsb2NrcXVvdGUge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTEycHgpIHtcbiAgI3Jlc3VtZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbi5uby1tYXJnaW4ge1xuICBtYXJnaW46IDA7XG59XG4jaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbn1cbiNzaWRlLWhlYWRlciB7XG4gIGdyaWQtYXJlYTogc2lkZS1oZWFkZXI7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgLy8gYmFja2dyb3VuZDogIzJlMzg5NDtcbn1cbiNzaWRlIHtcbiAgZ3JpZC1hcmVhOiBzaWRlO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIC8vIGJhY2tncm91bmQ6ICMwMzRjOWQ7XG4gIC5zaWRlLXNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbiNjb250ZW50IHtcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG59XG5cbmJsb2NrcXVvdGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmV4cGVyaWVuY2Uge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAuZXhwZXJpZW5jZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAudGl0bGUge1xuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgfVxuICAgIC5kYXRlIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgfVxuICB9XG59XG5cbi5lZHVjYXRpb24ge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxufVxuXG4uY29udGFjdCB7XG59XG5cbmgxLmJhbm5lciB7XG4gIGZvbnQtc2l6ZTogMS43NWVtO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAubm8tcHJpbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucHJpbnQtb25seSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG4gICNyZXN1bWUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gICNyZXN1bWUge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgYmxvY2txdW90ZSB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5za2lsbC1jaGlwcyB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map