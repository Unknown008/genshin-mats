(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/oW2":
/*!*************************************************!*\
  !*** ./src/app/_shared/navbar/navbar.module.ts ***!
  \*************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component */ "BrRq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class NavbarModule {
}
NavbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NavbarModule });
NavbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NavbarModule_Factory(t) { return new (t || NavbarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavbarModule, { declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                declarations: [
                    _navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]
                ],
                exports: [
                    _navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jeremy\source\angular-page-test\src\main.ts */"zUnb");


/***/ }),

/***/ "3Txa":
/*!***********************************************!*\
  !*** ./src/app/customize/customize.module.ts ***!
  \***********************************************/
/*! exports provided: CustomizeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizeModule", function() { return CustomizeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customize_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customize.component */ "s8R2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _customize_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customize.routing */ "BdeL");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/footer/footer.module */ "N0Hh");
/* harmony import */ var _layouts_character_character_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_layouts/character/character.module */ "j375");
/* harmony import */ var _layouts_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_layouts/mat-table/mat-table.module */ "c4UD");
/* harmony import */ var _layouts_user_data_user_data_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_layouts/user-data/user-data.module */ "C1zs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












class CustomizeModule {
}
CustomizeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomizeModule });
CustomizeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomizeModule_Factory(t) { return new (t || CustomizeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
            _layouts_character_character_module__WEBPACK_IMPORTED_MODULE_6__["CharacterModule"],
            _layouts_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _layouts_user_data_user_data_module__WEBPACK_IMPORTED_MODULE_8__["UserDataModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_customize_routing__WEBPACK_IMPORTED_MODULE_4__["CustomizeRoutes"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomizeModule, { declarations: [_customize_component__WEBPACK_IMPORTED_MODULE_2__["CustomizeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
        _layouts_character_character_module__WEBPACK_IMPORTED_MODULE_6__["CharacterModule"],
        _layouts_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _layouts_user_data_user_data_module__WEBPACK_IMPORTED_MODULE_8__["UserDataModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_customize_component__WEBPACK_IMPORTED_MODULE_2__["CustomizeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
                    _layouts_character_character_module__WEBPACK_IMPORTED_MODULE_6__["CharacterModule"],
                    _layouts_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                    _layouts_user_data_user_data_module__WEBPACK_IMPORTED_MODULE_8__["UserDataModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_customize_routing__WEBPACK_IMPORTED_MODULE_4__["CustomizeRoutes"]),
                ],
                declarations: [
                    _customize_component__WEBPACK_IMPORTED_MODULE_2__["CustomizeComponent"]
                ],
                exports: [
                    _customize_component__WEBPACK_IMPORTED_MODULE_2__["CustomizeComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "4qkZ":
/*!*******************************************************!*\
  !*** ./src/app/_layouts/default/default.component.ts ***!
  \*******************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_shared/navbar/navbar.component */ "BrRq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class DefaultComponent {
    constructor() { }
    ngOnInit() {
    }
}
DefaultComponent.ɵfac = function DefaultComponent_Factory(t) { return new (t || DefaultComponent)(); };
DefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultComponent, selectors: [["app-default"]], decls: 2, vars: 0, template: function DefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZhdWx0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-default',
                templateUrl: './default.component.html',
                styleUrls: ['./default.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/json.service */ "Osnj");
/* harmony import */ var _services_environment_path_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/environment-path.service */ "RR3w");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/footer/footer.component */ "JClc");






function HomeComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weapon_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", weapon_r12.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", weapon_r12.name)("ngClass", weapon_r12.quality);
} }
function HomeComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weapon_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", weapon_r13.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", weapon_r13.name)("ngClass", weapon_r13.quality);
} }
function HomeComponent_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weapon_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", weapon_r14.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", weapon_r14.name)("ngClass", weapon_r14.quality);
} }
function HomeComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weapon_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", weapon_r15.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", weapon_r15.name)("ngClass", weapon_r15.quality);
} }
function HomeComponent_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weapon_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", weapon_r16.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", weapon_r16.name)("ngClass", weapon_r16.quality);
} }
function HomeComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weapon_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", weapon_r17.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", weapon_r17.name)("ngClass", weapon_r17.quality);
} }
function HomeComponent_span_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const char_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", char_r18.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", char_r18.name);
} }
function HomeComponent_span_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const char_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", char_r19.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", char_r19.name);
} }
function HomeComponent_span_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const char_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", char_r20.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", char_r20.name);
} }
function HomeComponent_span_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const char_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", char_r21.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", char_r21.name);
} }
function HomeComponent_span_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const char_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", char_r22.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", char_r22.name);
} }
function HomeComponent_span_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const char_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", char_r23.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", char_r23.name);
} }
class HomeComponent {
    constructor(json, url) {
        this.json = json;
        this.url = url;
        this.talents = {
            "Freedom": [],
            "Prosperity": [],
            "Resistance": [],
            "Diligence": [],
            "Ballad": [],
            "Gold": []
        };
        this.charPath = this.url.getUrl("../../assets/resources/characters/", true);
        this.weapons = {
            "Decarabian": [],
            "Relic": [],
            "Fang": [],
            "Dango": [],
            "Shackle": [],
            "Aerosiderite": []
        };
        this.weapPath = this.url.getUrl("../../assets/resources/items/", true);
    }
    ngOnInit() {
        this.json.getJSON(this.url.getUrl("assets/resources/items/weapons.json"))
            .subscribe((data) => {
            for (let type in this.weapons) {
                for (let quality of data[type]) {
                    this.weapons[type].push({
                        name: quality.name.replace("_", " "),
                        quality: quality.quality,
                        path: this.weapPath + quality.name + ".png"
                    });
                }
            }
        });
        this.json.getJSON(this.url.getUrl("assets/resources/talents/talents.json"))
            .subscribe((data) => {
            for (let type in this.talents) {
                for (let char of data[type]) {
                    this.talents[type].push({
                        name: char,
                        path: this.charPath + char + ".png"
                    });
                }
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_json_service__WEBPACK_IMPORTED_MODULE_1__["JsonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_environment_path_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentPathService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 105, vars: 12, consts: [[1, "page", "col-md-12"], [1, "page-title"], [1, "day-row", "row"], [1, "col-md-4", "small-padding"], [1, "section"], [1, "table-header"], [1, "weapon-row", "row"], [1, "floating-title"], [1, "weapon-block"], [1, "mat-row"], [4, "ngFor", "ngForOf"], [1, "talent-row", "row"], [1, "char-block"], [1, "char-row"], [1, "mat", 3, "src", "alt", "ngClass"], [1, "char", 3, "src", "alt"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Upgrade materials domain daily rotation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mon/Thu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tue/Fri");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Wed/Sat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Weapon upgrade materials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HomeComponent_span_27_Template, 2, 3, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Decarabian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HomeComponent_span_32_Template, 2, 3, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Relic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, HomeComponent_span_39_Template, 2, 3, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Fang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HomeComponent_span_44_Template, 2, 3, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Dango");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, HomeComponent_span_51_Template, 2, 3, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Shackle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, HomeComponent_span_56_Template, 2, 3, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Aerosiderite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Talent upgrade materials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, HomeComponent_span_69_Template, 2, 2, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Freedom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, HomeComponent_span_74_Template, 2, 2, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Prosperity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, HomeComponent_span_81_Template, 2, 2, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Resistance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, HomeComponent_span_87_Template, 2, 2, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Diligence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, HomeComponent_span_95_Template, 2, 2, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Ballad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, HomeComponent_span_101_Template, 2, 2, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Gold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weapons.Decarabian);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weapons.Relic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weapons.Fang);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weapons.Dango);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weapons.Shackle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weapons.Aerosiderite);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.talents.Freedom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.talents.Prosperity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.talents.Resistance);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.talents.Diligence);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.talents.Ballad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.talents.Gold);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".page-title[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    margin: 10px auto;\r\n}\r\n\r\n.day-row[_ngcontent-%COMP%] {\r\n    color: #5eb3bc;\r\n}\r\n\r\n.small-padding[_ngcontent-%COMP%] {\r\n    padding: 0 3px !important;\r\n}\r\n\r\n.section[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    background-color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.weapon-row[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\r\n    padding-top: 50px;\r\n}\r\n\r\n.floating-title[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 0;\r\n    margin: 0;\r\n    padding: 20px 0 0 0;\r\n}\r\n\r\n.table-header[_ngcontent-%COMP%] {\r\n    padding: 10px 0 0 0;\r\n}\r\n\r\nfieldset[_ngcontent-%COMP%] {\r\n    border-width: 1px 0 0 0 !important;\r\n    border-top: #ffffff8c solid !important;\r\n}\r\n\r\nlegend[_ngcontent-%COMP%] {\r\n    float: none !important;\r\n    width: auto !important;\r\n    padding: 0 20px !important;\r\n}\r\n\r\n.weapon-block[_ngcontent-%COMP%] {\r\n    margin: 30px 20px 0;\r\n    overflow-x: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.mat-row[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n}\r\n\r\n.mat[_ngcontent-%COMP%] {\r\n    max-width: 100px;\r\n    max-height: 100px;\r\n    margin-bottom: 10px;\r\n    position: relative;\r\n}\r\n\r\n.green-mat[_ngcontent-%COMP%] {\r\n    left: 12%;\r\n}\r\n\r\n.blue-mat[_ngcontent-%COMP%] {\r\n    left: 4%;\r\n}\r\n\r\n.purple-mat[_ngcontent-%COMP%] {\r\n    right: 4%;\r\n}\r\n\r\n.gold-mat[_ngcontent-%COMP%] {\r\n    right: 12%;\r\n}\r\n\r\n.talent-row[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\r\n    padding-top: 50px;\r\n}\r\n\r\n.char-block[_ngcontent-%COMP%] {\r\n    margin: 30px 20px 0;\r\n}\r\n\r\n.char[_ngcontent-%COMP%] {\r\n    max-width: 70px;\r\n    max-height: 70px;\r\n    margin: 10px;\r\n}\r\n\r\n.char-row[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtdGl0bGUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG4uZGF5LXJvdyB7XHJcbiAgICBjb2xvcjogIzVlYjNiYztcclxufVxyXG5cclxuLnNtYWxsLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMCAzcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG59XHJcblxyXG4ud2VhcG9uLXJvdyAuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLmZsb2F0aW5nLXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xyXG59XHJcblxyXG4udGFibGUtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMCAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wOiAjZmZmZmZmOGMgc29saWQgIWltcG9ydGFudDtcclxufVxyXG5cclxubGVnZW5kIHtcclxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53ZWFwb24tYmxvY2sge1xyXG4gICAgbWFyZ2luOiAzMHB4IDIwcHggMDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5tYXQtcm93IHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5tYXQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmdyZWVuLW1hdCB7XHJcbiAgICBsZWZ0OiAxMiU7XHJcbn1cclxuXHJcbi5ibHVlLW1hdCB7XHJcbiAgICBsZWZ0OiA0JTtcclxufVxyXG5cclxuLnB1cnBsZS1tYXQge1xyXG4gICAgcmlnaHQ6IDQlO1xyXG59XHJcblxyXG4uZ29sZC1tYXQge1xyXG4gICAgcmlnaHQ6IDEyJTtcclxufVxyXG5cclxuLnRhbGVudC1yb3cgLnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5jaGFyLWJsb2NrIHtcclxuICAgIG1hcmdpbjogMzBweCAyMHB4IDA7XHJcbn1cclxuXHJcbi5jaGFyIHtcclxuICAgIG1heC13aWR0aDogNzBweDtcclxuICAgIG1heC1oZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5jaGFyLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-home",
                templateUrl: "./home.component.html",
                styleUrls: ["./home.component.css"]
            }]
    }], function () { return [{ type: _services_json_service__WEBPACK_IMPORTED_MODULE_1__["JsonService"] }, { type: _services_environment_path_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentPathService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
// import "zone.js/dist/zone-error";  // Included with Angular CLI.


/***/ }),

/***/ "BdeL":
/*!************************************************!*\
  !*** ./src/app/customize/customize.routing.ts ***!
  \************************************************/
/*! exports provided: CustomizeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizeRoutes", function() { return CustomizeRoutes; });
/* harmony import */ var _customize_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customize.component */ "s8R2");

const CustomizeRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _customize_component__WEBPACK_IMPORTED_MODULE_0__["CustomizeComponent"]
            }]
    }
];


/***/ }),

/***/ "BrRq":
/*!****************************************************!*\
  !*** ./src/app/_shared/navbar/navbar.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/customize"]; };
class NavbarComponent {
    constructor() {
        this.logoPath = "";
    }
    ngOnInit() {
        this.logoPath = "../../../assets/resources/logo.png";
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 15, vars: 5, consts: [[1, "navbar", "navbar-dark", "bg-dark"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["routerLinkActive", "active", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "nav-link", 3, "routerLink"], [1, "logo-row"], ["href", "https://genshin.mihoyo.com"], ["alt", "Genshin Impact", "title", "Go to official Genshin Impact website", 1, "genshin-logo", 3, "src"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Customize ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logoPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n    border: none;\r\n}\r\n\r\n.navbar-toggler[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none;\r\n}\r\n\r\n.logo-row[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: calc(50% - 68px);\r\n    top: 0;\r\n}\r\n\r\n.genshin-logo[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ubG9nby1yb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSA2OHB4KTtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuLmdlbnNoaW4tbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-navbar",
                templateUrl: "./navbar.component.html",
                styleUrls: ["./navbar.component.css"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "C1zs":
/*!********************************************************!*\
  !*** ./src/app/_layouts/user-data/user-data.module.ts ***!
  \********************************************************/
/*! exports provided: UserDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataModule", function() { return UserDataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-data.component */ "InRu");
/* harmony import */ var src_app_shared_directives_number_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_shared/directives/number-format */ "ZGsb");







class UserDataModule {
}
UserDataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserDataModule });
UserDataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserDataModule_Factory(t) { return new (t || UserDataModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_directives_number_format__WEBPACK_IMPORTED_MODULE_5__["NumberFormatPipeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserDataModule, { declarations: [_user_data_component__WEBPACK_IMPORTED_MODULE_4__["UserDataComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        src_app_shared_directives_number_format__WEBPACK_IMPORTED_MODULE_5__["NumberFormatPipeModule"]], exports: [_user_data_component__WEBPACK_IMPORTED_MODULE_4__["UserDataComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDataModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    src_app_shared_directives_number_format__WEBPACK_IMPORTED_MODULE_5__["NumberFormatPipeModule"]
                ],
                declarations: [
                    _user_data_component__WEBPACK_IMPORTED_MODULE_4__["UserDataComponent"]
                ],
                exports: [
                    _user_data_component__WEBPACK_IMPORTED_MODULE_4__["UserDataComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Fnai":
/*!**********************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.routing.ts ***!
  \**********************************************************/
/*! exports provided: PageNotFoundRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundRoutes", function() { return PageNotFoundRoutes; });
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.component */ "rQPh");

const PageNotFoundRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"]
            }]
    }
];


/***/ }),

/***/ "G5un":
/*!***********************************************************!*\
  !*** ./src/app/_layouts/mat-table/mat-table.component.ts ***!
  \***********************************************************/
/*! exports provided: MatTableComponent, expField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableComponent", function() { return MatTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expField", function() { return expField; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_directives_number_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_shared/directives/number-format */ "ZGsb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function MatTableComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r4, " ");
} }
function MatTableComponent_tr_18_td_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r5[col_r7], " ");
} }
function MatTableComponent_tr_18_td_1_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "numberFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r14.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r13.displayRarity ? item_r14.qly : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r14.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r14.name)("title", item_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("x ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, item_r14.qty), "");
} }
function MatTableComponent_tr_18_td_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTableComponent_tr_18_td_1_div_2_div_1_Template, 7, 8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r5[col_r7]);
} }
function MatTableComponent_tr_18_td_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Max");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MatTableComponent_tr_18_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTableComponent_tr_18_td_1_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTableComponent_tr_18_td_1_div_2_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatTableComponent_tr_18_td_1_div_3_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r7 == "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r7 != "Name" && row_r5[col_r7].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r7 != "Name" && row_r5[col_r7].length == 0);
} }
function MatTableComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTableComponent_tr_18_td_1_Template, 4, 3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.displayedColumns);
} }
function MatTableComponent_table_19_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total ", col_r20, " ");
} }
function MatTableComponent_table_19_tr_5_td_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "numberFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r25.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r24.displayRarity ? item_r25.qly : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r25.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r25.name)("title", item_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("x ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, item_r25.qty), "");
} }
function MatTableComponent_table_19_tr_5_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTableComponent_table_19_tr_5_td_1_div_1_Template, 7, 8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r23 = ctx.$implicit;
    const row_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r21[col_r23]);
} }
function MatTableComponent_table_19_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTableComponent_table_19_tr_5_td_1_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.totalColumns);
} }
function MatTableComponent_table_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatTableComponent_table_19_th_3_Template, 2, 1, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatTableComponent_table_19_tr_5_Template, 2, 1, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.totalColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.totalsData);
} }
class MatTableComponent {
    constructor(numberFormat) {
        this.displayedColumns = [];
        this.totalColumns = ["Exp", "Gems", "Local Specialties", "Common Drops", "Books", "Boss Drops", "Limited", "Mora"];
        this.tableData = [];
        this.totalsData = [];
        this.path = "./../../../assets/resources/";
        this.ascensionLevels = [20, 40, 50, 60, 70, 80];
        this.displayRarity = true;
        this.displayTotals = true;
        this.qualityOrder = ["grey", "green", "blue", "purple", "gold"];
        this.tagOrder = [
            "Mask", "Arrowhead", "Slime", "Scroll", "Nectar", "Treasure_Hoarder_Insignia",
            "Fatui_Insignia", "Branch", "Horn", "Bone", "Knife", "Mist_Grass", "Chaos",
            "adaptive", "Freedom", "Resistance", "Ballad", "Prosperity", "Diligence", "Gold",
            "pyro", "hydro", "electro", "anemo", "cryo", "geo", "weekly"
        ];
        this.numberFormat = numberFormat;
    }
    ngOnChanges() {
        if (this.characters == null ||
            this.levelUpData == null ||
            this.ascensionData == null ||
            this.expData == null ||
            this.talentData == null ||
            this.charData == null ||
            this.itemQualityData == null)
            return;
        this.displayedColumns = [];
        this.tableData = [];
        this.totalsData = [];
        for (let prop in this.characters[0]) {
            switch (prop) {
                case "name":
                    this.displayedColumns.push("Name");
                    break;
                case "level":
                    this.displayedColumns.push("Exp");
                    this.displayedColumns.push("Exp Mora");
                    break;
                case "ascension":
                    this.displayedColumns.push("Ascension");
                    this.displayedColumns.push("Ascension Mora");
                    break;
                case "balevel":
                    this.displayedColumns.push("Talent");
                    this.displayedColumns.push("Talent Mora");
                    break;
            }
        }
        for (let char of this.characters) {
            if (!char.display)
                continue;
            let exp = this.calcExp(char.level, char.tlevel);
            let talents = this.calcTalent(char.name, char.balevel, char.eslevel, char.eblevel, char.tbalevel, char.teslevel, char.teblevel);
            let ascensions = this.calcAscension(char.name, char.level, char.tlevel);
            this.tableData.push({
                "Name": char.name,
                "Exp": exp.exp,
                "Exp Mora": exp.mora,
                "Ascension": ascensions.items,
                "Ascension Mora": ascensions.mora,
                "Talent": talents.items,
                "Talent Mora": talents.mora
            });
            this.getTotals(exp, talents, ascensions);
        }
    }
    /**
     * Returns the total exp and mora required for level ups
     * @param clevel Current level of character
     * @param tlevel Target level of character
     */
    calcExp(clevel, tlevel) {
        let batch = [];
        for (let i = 0; this.ascensionLevels[i] < tlevel && this.ascensionLevels[i] < 90; i++) {
            if (clevel > this.ascensionLevels[i])
                continue;
            batch.push({
                from: clevel,
                to: this.ascensionLevels[i]
            });
            clevel = this.ascensionLevels[i];
        }
        batch.push({
            from: clevel,
            to: tlevel
        });
        let cards = [];
        for (let t in this.expData) {
            let d = this.expData[t];
            cards.push({
                name: t,
                path: this.path + "items/" + t + ".png",
                qty: 0,
                exp: d.exp,
                cost: d.cost,
                qly: this.displayRarity ? d.quality : ""
            });
        }
        cards = cards.sort((a, b) => b.exp - a.exp);
        for (let row of batch) {
            let texp = this.levelUpData[row.to];
            let cexp = this.levelUpData[row.from];
            let exp = texp.cumm_exp - cexp.cumm_exp;
            for (let card of cards) {
                card.qty += Math.floor(exp / card.exp);
                exp %= card.exp;
            }
            if (exp > 0)
                cards[cards.length - 1].qty += 1;
        }
        cards = cards.sort((a, b) => a.exp - b.exp);
        return {
            exp: cards.filter(c => c.qty > 0).map(c => ({
                name: c.name.replace(/_/g, " "),
                path: c.path,
                qty: c.qty,
                qly: c.qly,
                type: "item-exp"
            })),
            mora: [{
                    name: "Mora",
                    path: this.path + "items/Mora.png",
                    qty: cards.map(c => ({
                        cost: c.cost * c.qty
                    })).reduce((s, i) => s + i.cost, 0)
                }]
        };
    }
    /**
     * Returns the total materials and mora required for ascensions
     * @char Character name
     * @clevel Current level of character
     * @tlevel Target level of character
     */
    calcAscension(char, clevel, tlevel) {
        let characterAscensionData = this.charData[char].ascension;
        let mats = {
            cost: 0,
            gem: [],
            local_specialty: [],
            common_drop: [],
            boss_drop: []
        };
        for (let i = 0; this.ascensionLevels[i] < tlevel && this.ascensionLevels[i] < 90; i++) {
            let data = JSON.parse(JSON.stringify(this.ascensionData.cost[this.ascensionLevels[i]]));
            if (clevel > this.ascensionLevels[i])
                continue;
            mats.cost += data.cost;
            if (data.gem != null) {
                let reqs = this.ascensionData.gem[characterAscensionData.element];
                let gemName = reqs.gem + "_" +
                    this.itemQualityData.gem[data.gem.quality];
                let gemId = mats.gem.findIndex((g) => g.name == gemName.replace(/_/g, " "));
                if (gemId == -1)
                    mats.gem.push({
                        name: gemName.replace(/_/g, " "),
                        qty: data.gem.quantity,
                        qly: data.gem.quality,
                        path: this.path + "items/" + gemName + ".png",
                        type: "item-gem",
                        tag: characterAscensionData.element
                    });
                else
                    mats.gem[gemId].qty += data.gem.quantity;
                if (data.boss_drop != null && reqs.boss_drop != "") {
                    let bossDropName = reqs.boss_drop;
                    if (mats.boss_drop.length == 0)
                        mats.boss_drop.push({
                            name: bossDropName.replace(/_/g, " "),
                            qty: data.boss_drop.quantity,
                            qly: "purple",
                            path: this.path + "items/" + bossDropName + ".png",
                            type: "item-boss-drop",
                            tag: characterAscensionData.element
                        });
                    else
                        mats.boss_drop[0].qty += data.boss_drop.quantity;
                }
            }
            if (data.local_specialty != null) {
                let localSpecialtyName = characterAscensionData.local_specialty;
                if (mats.local_specialty.length == 0)
                    mats.local_specialty.push({
                        name: localSpecialtyName.replace(/_/g, " "),
                        qty: data.local_specialty.quantity,
                        qly: "grey",
                        path: this.path + "items/" + localSpecialtyName + ".png",
                        type: "item-local-specialty"
                    });
                else
                    mats.local_specialty[0].qty += data.local_specialty.quantity;
            }
            if (data.common_drop != null) {
                let commonDropName = this.itemQualityData
                    .common_drop[characterAscensionData.common_drop][data.common_drop.quality];
                let commonDropId = mats.common_drop.findIndex((c) => c.name == commonDropName.replace(/_/g, " "));
                if (commonDropId == -1)
                    mats.common_drop.push({
                        name: commonDropName.replace(/_/g, " "),
                        qty: data.common_drop.quantity,
                        qly: data.common_drop.quality,
                        path: this.path + "items/" + commonDropName + ".png",
                        type: "item-common-drop",
                        tag: characterAscensionData.common_drop
                    });
                else
                    mats.common_drop[commonDropId].qty += data.common_drop.quantity;
            }
        }
        return {
            items: [
                ...mats.gem,
                ...mats.local_specialty,
                ...mats.common_drop,
                ...mats.boss_drop
            ],
            mora: [{
                    name: "Mora",
                    path: this.path + "items/Mora.png",
                    qty: mats.cost
                }]
        };
    }
    /**
     * Returns the total materials and mora required to upgrade talents
     * @char Character name
     * @c1 Talent 1 current level
     * @c2 Talent 2 current level
     * @c3 Talent 3 current level
     * @t1 Talent 1 target level
     * @t2 Talent 2 target level
     * @t3 Talent 3 target level
     */
    calcTalent(char, c1, c2, c3, t1, t2, t3) {
        let characterTalentData = this.charData[char].talent;
        let mats = this.talentHandler(characterTalentData, 1, c1, t1);
        mats = this.talentHandler(characterTalentData, 2, c2, t2, mats);
        mats = this.talentHandler(characterTalentData, 3, c3, t3, mats);
        return {
            items: [
                ...mats.book,
                ...mats.common_drop,
                ...mats.boss_drop,
                ...mats.limited
            ],
            mora: [{
                    name: "Mora",
                    path: this.path + "items/Mora.png",
                    qty: mats.cost
                }]
        };
    }
    /**
     * Calculates talent requirements for specific talent
     * @charTalent Character talent data
     * @talentNo The talent number (1, 2 or 3)
     * @from From talent level
     * @to To talent level
     */
    talentHandler(charTalent, talentNo, from, to, mats = null) {
        if (mats == null) {
            mats = {
                cost: 0,
                book: [],
                common_drop: [],
                boss_drop: [],
                limited: []
            };
        }
        for (let i = from; i < to; i++) {
            let data = JSON.parse(JSON.stringify(this.talentData[i]));
            mats.cost = data.cost == null ? data.cost : mats.cost + data.cost;
            if (data.book != null) {
                let bookName = this.itemQualityData.talent[data.book.quality];
                let tag = "";
                if (charTalent.hasOwnProperty("talent" + talentNo.toString()))
                    tag = charTalent["talent" + talentNo.toString()][i].book;
                else
                    tag = charTalent.all.book;
                bookName += tag;
                let bookId = mats.book.findIndex((b) => b.name == bookName.replace(/_/g, " "));
                if (bookId == -1)
                    mats.book.push({
                        name: bookName.replace(/_/g, " "),
                        qty: data.book.quantity,
                        qly: data.book.quality,
                        path: this.path + "talents/" + bookName + ".png",
                        type: "item-book",
                        tag: tag
                    });
                else
                    mats.book[bookId].qty += data.book.quantity;
            }
            if (data.common_drop != null) {
                let commonDropType = "";
                if (charTalent.hasOwnProperty("talent" + talentNo.toString()))
                    commonDropType =
                        charTalent["talent" + talentNo.toString()][i].common_drop;
                else
                    commonDropType = charTalent.all.common_drop;
                let commonDropName = this.itemQualityData
                    .common_drop[commonDropType][data.common_drop.quality];
                let commonDropId = mats.common_drop.findIndex((d) => d.name == commonDropName.replace(/_/g, " "));
                if (commonDropId == -1)
                    mats.common_drop.push({
                        name: commonDropName.replace(/_/g, " "),
                        qty: data.common_drop.quantity,
                        qly: data.common_drop.quality,
                        path: this.path + "items/" + commonDropName + ".png",
                        type: "item-common-drop",
                        tag: commonDropType
                    });
                else
                    mats.common_drop[commonDropId].qty +=
                        data.common_drop.quantity;
            }
            if (data.boss_drop != null) {
                let bossDropName = "";
                if (charTalent.hasOwnProperty("talent" + talentNo.toString()))
                    bossDropName =
                        charTalent["talent" + talentNo.toString()][i].boss_drop;
                else
                    bossDropName = charTalent.all.boss_drop;
                let bossDropId = mats.boss_drop.findIndex((d) => d.name == bossDropName.replace(/_/g, " "));
                if (bossDropId == -1)
                    mats.boss_drop.push({
                        name: bossDropName.replace(/_/g, " "),
                        qty: data.boss_drop.quantity,
                        qly: "purple",
                        path: this.path + "talents/" + bossDropName + ".png",
                        type: "item-boss-drop",
                        tag: "weekly"
                    });
                else
                    mats.boss_drop[bossDropId].qty +=
                        data.boss_drop.quantity;
            }
            if (data.limited != null) {
                let limitedId = mats.limited
                    .findIndex((l) => l.name == "Crown of Insight");
                if (limitedId == -1)
                    mats.limited.push({
                        name: "Crown of Insight",
                        qty: data.limited.quantity,
                        qly: "gold",
                        path: this.path + "talents/Crown_of_Insight.png",
                        type: "item-limited"
                    });
                else
                    mats.limited[limitedId].qty +=
                        data.limited.quantity;
            }
        }
        return mats;
    }
    /**
     * Toggle values
     * @item item that requires toggling
     */
    toggle(item) {
        switch (item) {
            case "rarity":
                this.displayRarity = !this.displayRarity;
                break;
            case "totals":
                this.displayTotals = !this.displayTotals;
                break;
        }
    }
    /**
     * Generates the total items required
     * @exp List of exp items required
     * @talents List of ascension items required
     * @ascensions List of talent items required
     */
    getTotals(exp, talents, ascensions) {
        if (this.totalsData.length == 0) {
            let commonDropList = JSON.parse(JSON.stringify(ascensions.items
                .filter((i) => i.type == "item-common-drop")));
            for (let commonDrop of talents.items
                .filter((e) => e.type == "item-common-drop")) {
                let commonDropId = commonDropList
                    .findIndex((l) => l.name == commonDrop.name);
                if (commonDropId == -1) {
                    commonDropList.push(JSON.parse(JSON.stringify(commonDrop)));
                }
                else {
                    commonDropList[commonDropId].qty += commonDrop.qty;
                }
            }
            let bossDropList = JSON.parse(JSON.stringify(talents.items.filter((i) => i.type == "item-boss-drop")));
            for (let bossDrop of talents.items
                .filter((e) => e.type == "item-boss-drop")) {
                let bossDropId = bossDropList
                    .findIndex((l) => l.name == bossDrop.name);
                if (bossDropId == -1) {
                    bossDropList.push(JSON.parse(JSON.stringify(bossDrop)));
                }
                else {
                    bossDropList[bossDropId].qty += bossDrop.qty;
                }
            }
            this.totalsData.push({
                "Exp": JSON.parse(JSON.stringify(exp.exp)),
                "Gems": JSON.parse(JSON.stringify(ascensions.items.filter((i) => i.type == "item-gem"))),
                "Local Specialties": JSON.parse(JSON.stringify(ascensions.items.filter((i) => i.type == "item-local-specialty"))),
                "Common Drops": commonDropList,
                "Boss Drops": bossDropList,
                "Books": JSON.parse(JSON.stringify(talents.items.filter((i) => i.type == "item-book"))),
                "Limited": JSON.parse(JSON.stringify(talents.items.filter((i) => i.type == "item-limited"))),
                "Mora": [{
                        name: exp.mora[0].name,
                        path: exp.mora[0].path,
                        cost: (exp.mora[0].qty + ascensions.mora[0].qty +
                            talents.mora[0].qty),
                        qty: (exp.mora[0].qty + ascensions.mora[0].qty +
                            talents.mora[0].qty).toString().replace(/\d(?=(?:\d{3})+$)/g, (m) => {
                            return m + ",";
                        })
                    }]
            });
        }
        else {
            let expList = this.totalsData[0]["Exp"];
            for (let expItem of exp.exp) {
                let expId = expList.findIndex((e) => e.name == expItem.name);
                if (expId == -1) {
                    expList.push(JSON.parse(JSON.stringify(expItem)));
                }
                else {
                    expList[expId].qty += expItem.qty;
                }
            }
            this.totalsData[0]["Exp"] = expList;
            this.totalsData[0]["Mora"] = this.totalsData[0]["Mora"].map(d => ({
                name: d.name,
                path: d.path,
                qty: (d.cost + exp.mora[0].qty + ascensions.mora[0].qty +
                    talents.mora[0].qty).toString().replace(/\d(?=(?:\d{3})+$)/g, (m) => {
                    return m + ",";
                }),
                cost: d.cost + exp.mora[0].qty + ascensions.mora[0].qty +
                    talents.mora[0].qty,
            }));
            let gemList = this.totalsData[0]["Gems"];
            for (let gem of ascensions.items.filter((e) => e.type == "item-gem")) {
                let gemId = gemList.findIndex((g) => g.name == gem.name);
                if (gemId == -1) {
                    gemList.push(JSON.parse(JSON.stringify(gem)));
                }
                else {
                    gemList[gemId].qty += gem.qty;
                }
            }
            this.totalsData[0]["Gems"] = gemList;
            let localSpecialtyList = this.totalsData[0]["Local Specialties"];
            for (let localSpecialty of ascensions.items
                .filter((e) => e.type == "item-local-specialty")) {
                let localSpecialtyId = localSpecialtyList
                    .findIndex((l) => l.name == localSpecialty.name);
                if (localSpecialtyId == -1) {
                    localSpecialtyList.push(JSON.parse(JSON.stringify(localSpecialty)));
                }
                else {
                    localSpecialtyList[localSpecialtyId].qty += localSpecialty.qty;
                }
            }
            this.totalsData[0]["Local Specialties"] = localSpecialtyList;
            let commonDropList = this.totalsData[0]["Common Drops"];
            for (let commonDrop of ascensions.items
                .filter((e) => e.type == "item-common-drop")) {
                let commonDropId = commonDropList
                    .findIndex((l) => l.name == commonDrop.name);
                if (commonDropId == -1) {
                    commonDropList.push(JSON.parse(JSON.stringify(commonDrop)));
                }
                else {
                    commonDropList[commonDropId].qty += commonDrop.qty;
                }
            }
            for (let commonDrop of talents.items
                .filter((e) => e.type == "item-common-drop")) {
                let commonDropId = commonDropList
                    .findIndex((l) => l.name == commonDrop.name);
                if (commonDropId == -1) {
                    commonDropList.push(JSON.parse(JSON.stringify(commonDrop)));
                }
                else {
                    commonDropList[commonDropId].qty += commonDrop.qty;
                }
            }
            this.totalsData[0]["Common Drops"] = commonDropList;
            let bossDropList = this.totalsData[0]["Boss Drops"];
            for (let bossDrop of ascensions.items
                .filter((e) => e.type == "item-boss-drop")) {
                let bossDropId = bossDropList
                    .findIndex((l) => l.name == bossDrop.name);
                if (bossDropId == -1) {
                    bossDropList.push(JSON.parse(JSON.stringify(bossDrop)));
                }
                else {
                    bossDropList[bossDropId].qty += bossDrop.qty;
                }
            }
            for (let bossDrop of talents.items
                .filter((e) => e.type == "item-boss-drop")) {
                let bossDropId = bossDropList
                    .findIndex((l) => l.name == bossDrop.name);
                if (bossDropId == -1) {
                    bossDropList.push(JSON.parse(JSON.stringify(bossDrop)));
                }
                else {
                    bossDropList[bossDropId].qty += bossDrop.qty;
                }
            }
            this.totalsData[0]["Boss Drops"] = bossDropList;
            let bookList = this.totalsData[0]["Books"];
            for (let book of talents.items
                .filter((e) => e.type == "item-book")) {
                let bookId = bookList
                    .findIndex((l) => l.name == book.name);
                if (bookId == -1) {
                    bookList.push(JSON.parse(JSON.stringify(book)));
                }
                else {
                    bookList[bookId].qty += book.qty;
                }
            }
            this.totalsData[0]["Book"] = bookList;
            let limitedList = this.totalsData[0]["Limited"];
            for (let limited of talents.items
                .filter((e) => e.type == "item-limited")) {
                let limitedId = limitedList
                    .findIndex((l) => l.name == limited.name);
                if (limitedId == -1) {
                    limitedList.push(JSON.parse(JSON.stringify(limited)));
                }
                else {
                    limitedList[limitedId].qty += limited.qty;
                }
            }
            this.totalsData[0]["Limited"] = limitedList;
        }
        this.totalsData[0]["Exp"] = this.sortItem(this.totalsData[0]["Exp"]);
        this.totalsData[0]["Gems"] = this.sortItem(this.totalsData[0]["Gems"]);
        this.totalsData[0]["Common Drops"] = this.sortItem(this.totalsData[0]["Common Drops"]);
        this.totalsData[0]["Boss Drops"] = this.sortItem(this.totalsData[0]["Boss Drops"]);
        this.totalsData[0]["Books"] = this.sortItem(this.totalsData[0]["Books"]);
    }
    /**
     * Sorts a list of items by rarity
     * @param list
     */
    sortItem(list) {
        list.sort((a, b) => {
            if (this.qualityOrder.indexOf(a.qly) < this.qualityOrder.indexOf(b.qly))
                return -1;
            else if (this.qualityOrder.indexOf(a.qly) > this.qualityOrder.indexOf(b.qly))
                return 1;
            else
                return 0;
        });
        list.sort((a, b) => {
            if (this.tagOrder.indexOf(a.tag) < this.tagOrder.indexOf(b.tag))
                return -1;
            else if (this.tagOrder.indexOf(a.tag) > this.tagOrder.indexOf(b.tag))
                return 1;
            else
                return 0;
        });
        return list;
    }
}
MatTableComponent.ɵfac = function MatTableComponent_Factory(t) { return new (t || MatTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_directives_number_format__WEBPACK_IMPORTED_MODULE_1__["NumberFormatPipeModule"])); };
MatTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTableComponent, selectors: [["app-mat-table"]], inputs: { characters: "characters", levelUpData: "levelUpData", expData: "expData", ascensionData: "ascensionData", talentData: "talentData", charData: "charData", itemQualityData: "itemQualityData", change: "change" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 20, vars: 5, consts: [["tableOptions", "ngForm"], [1, "table-options"], [1, "table-option"], [1, "form-check", "form-switch"], ["for", "rarityDisplay", 1, "form-check-label"], ["type", "checkbox", "id", "rarityDisplay", 1, "form-check-input", 3, "checked", "click"], ["for", "totalsDisplay", 1, "form-check-label"], ["type", "checkbox", "id", "totalsDisplay", 1, "form-check-input", 3, "checked", "click"], [1, "table", "white"], ["scope", "col", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["class", "table white", 4, "ngIf"], ["scope", "col"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], [4, "ngIf"], ["class", "items-row", 4, "ngFor", "ngForOf"], [1, "items-row"], [3, "ngClass"], [1, "item-holder", 3, "ngClass"], [1, "item-single", 3, "src", "alt", "title"], [1, "item-qty"], [1, "maxed"]], template: function MatTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Rarity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTableComponent_Template_input_click_7_listener() { return ctx.toggle("rarity"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Totals ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTableComponent_Template_input_click_12_listener() { return ctx.toggle("totals"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MatTableComponent_th_16_Template, 2, 1, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MatTableComponent_tr_18_Template, 2, 1, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MatTableComponent_table_19_Template, 6, 2, "table", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.displayRarity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.displayTotals);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayTotals);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [src_app_shared_directives_number_format__WEBPACK_IMPORTED_MODULE_1__["NumberFormatPipe"]], styles: [".table-options[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: right;\n}\n\n.table-option[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.items-row[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.item-exp[_ngcontent-%COMP%], .item-gem[_ngcontent-%COMP%], .item-common-drop[_ngcontent-%COMP%], .item-boss-drop[_ngcontent-%COMP%], .item-book[_ngcontent-%COMP%], .item-limited[_ngcontent-%COMP%], .item-local-specialty[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.item-holder[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.item-single[_ngcontent-%COMP%] {\n  max-height: 50px;\n  max-width: 50px;\n  display: block;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.item-qty[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  white-space: nowrap;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #2125298c;\n}\n\n.grey[_ngcontent-%COMP%] {\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.4), #7b827b);\n}\n\n.green[_ngcontent-%COMP%] {\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.4), #5a8a7e);\n}\n\n.blue[_ngcontent-%COMP%] {\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.4), #5a789a);\n}\n\n.purple[_ngcontent-%COMP%] {\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.4), #716798);\n}\n\n.gold[_ngcontent-%COMP%] {\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.4), #986426);\n}\n\ntd[_ngcontent-%COMP%]   .maxed[_ngcontent-%COMP%] {\n  background-color: grey;\n}\n\n.form-check[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.form-switch[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\nlabel.form-check-label[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 0.5rem;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  float: none;\n  margin-left: 0;\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #ffffff8c;\n  border-color: #ffffff8c;\n}\n\n.form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: #ffffff8c;\n  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYXQtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7Ozs7Ozs7RUFPSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0RUFBQTtBQUNKOztBQUVBO0VBQ0ksNEVBQUE7QUFDSjs7QUFFQTtFQUNJLDRFQUFBO0FBQ0o7O0FBRUE7RUFDSSw0RUFBQTtBQUNKOztBQUVBO0VBQ0ksNEVBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLG1EQUFBO0FBQ0oiLCJmaWxlIjoibWF0LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLW9wdGlvbnMge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50YWJsZS1vcHRpb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5pdGVtcy1yb3cge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaXRlbS1leHAsXHJcbi5pdGVtLWdlbSxcclxuLml0ZW0tY29tbW9uLWRyb3AsXHJcbi5pdGVtLWJvc3MtZHJvcCxcclxuLml0ZW0tYm9vayxcclxuLml0ZW0tbGltaXRlZCxcclxuLml0ZW0tbG9jYWwtc3BlY2lhbHR5IHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uaXRlbS1ob2xkZXIge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLml0ZW0tc2luZ2xlIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLml0ZW0tcXR5IHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMTI1Mjk4YztcclxufVxyXG5cclxuLmdyZXkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjQpLCAjN2I4MjdiKTtcclxufVxyXG5cclxuLmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU2LCAyNTYsIDI1NiwgMC40KSwgIzVhOGE3ZSk7XHJcbn1cclxuXHJcbi5ibHVlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU2LCAyNTYsIDI1NiwgMC40KSwgIzVhNzg5YSk7XHJcbn1cclxuXHJcbi5wdXJwbGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjQpLCAjNzE2Nzk4KTtcclxufVxyXG5cclxuLmdvbGQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjQpLCAjOTg2NDI2KTtcclxufVxyXG5cclxudGQgLm1heGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxubGFiZWwuZm9ybS1jaGVjay1sYWJlbCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjayAuZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgICBmbG9hdDogbm9uZTsgXHJcbiAgICBtYXJnaW4tbGVmdDogMDsgXHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjhjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmOGM7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjhjO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4yNXJlbSByZ2IoMjU1IDI1NSAyNTUgLyAwLjI1KTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mat-table',
                templateUrl: './mat-table.component.html',
                styleUrls: ['./mat-table.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_directives_number_format__WEBPACK_IMPORTED_MODULE_1__["NumberFormatPipeModule"] }]; }, { characters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], levelUpData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], expData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ascensionData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], talentData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], charData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemQualityData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class expField {
}


/***/ }),

/***/ "InRu":
/*!***********************************************************!*\
  !*** ./src/app/_layouts/user-data/user-data.component.ts ***!
  \***********************************************************/
/*! exports provided: UserDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataComponent", function() { return UserDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UserDataComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The website may use cookies to personalise content. Those cookies are saved on your device and will not be used for any other purpose than to retain saved information on this website. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDataComponent_div_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.disclaimerSeen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserDataComponent {
    constructor(cookieService) {
        this.cookieService = cookieService;
        this.charactersChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.alertSeen = "false";
        this.characterString = "";
        this.deleteTitle = "";
        this.canDelete = true;
        let alertSeen = this.cookieService.get("disclaimer-seen");
        if (alertSeen == null || alertSeen == "")
            this.alertSeen = "false";
        else
            this.alertSeen = "true";
        let userData = this.cookieService.get("genshin-characters");
        if (userData == null || userData == "") {
            this.canDelete = false;
            this.deleteTitle = "No data saved to browser";
        }
        else {
            this.canDelete = true;
            this.deleteTitle = "Deleted saved data from browser";
        }
    }
    ngOnChanges() {
        if (this.characters == null)
            return;
        this.characterString = JSON.stringify(this.characters.map((c) => ({
            name: c.name,
            file: c.name.replace(/ \([^)]*\)/, ""),
            level: c.level,
            balevel: c.balevel,
            eslevel: c.eslevel,
            eblevel: c.eblevel,
            ascension: c.ascension,
            tlevel: c.tlevel,
            tbalevel: c.tbalevel,
            teslevel: c.teslevel,
            teblevel: c.teblevel,
            tascension: c.tascension,
            display: c.display
        })));
    }
    disclaimerSeen() {
        this.cookieService.set("disclaimer-seen", "true");
    }
    save() {
        this.cookieService.set("genshin-characters", this.characterString);
    }
    load() {
        this.characters = JSON.parse(this.characterString);
    }
    delete() {
        this.cookieService.delete("genshin-characters");
    }
}
UserDataComponent.ɵfac = function UserDataComponent_Factory(t) { return new (t || UserDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"])); };
UserDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDataComponent, selectors: [["app-user-data"]], inputs: { characters: "characters", change: "change" }, outputs: { charactersChange: "charactersChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 19, vars: 4, consts: [[1, "col-lg-10"], ["userData", "ngForm"], ["class", "alert alert-warning alert-dismissible fade show text-left", "role", "alert", 4, "ngIf"], [1, "row", "text-left"], ["for", "characters", 1, "form-label", "px-0"], [1, "row"], ["id", "characters", "name", "characters", "rows", "8", 1, "form-control", 3, "ngModel", "ngModelChange"], ["characters", "ngModel"], [1, "text-left", "display-inherit"], ["title", "Save text to browser", 1, "btn", "ms-0", "default", 3, "click"], ["title", "Load text to characters", 1, "btn", "default", 3, "click"], [1, "btn", "danger", 3, "disabled", "title", "click"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show", "text-left"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close", 3, "click"]], template: function UserDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserDataComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_textarea_ngModelChange_8_listener($event) { return ctx.characterString = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDataComponent_Template_button_click_13_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDataComponent_Template_button_click_15_listener() { return ctx.load(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Load ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDataComponent_Template_button_click_17_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Delete saved data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertSeen == "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.characterString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.canDelete)("title", ctx.deleteTitle);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".row[_ngcontent-%COMP%] {\n  --bs-gutter-x: 0;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 10px;\n  color: #fff;\n}\n\n.display-contents[_ngcontent-%COMP%] {\n  display: inherit;\n}\n\n.default[_ngcontent-%COMP%] {\n  background-color: #ffffff8c;\n}\n\n.danger[_ngcontent-%COMP%] {\n  background-color: #ff3434;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJ1c2VyLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIC0tYnMtZ3V0dGVyLXg6IDA7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5kaXNwbGF5LWNvbnRlbnRzIHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5kZWZhdWx0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4YztcclxufVxyXG5cclxuLmRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNDM0O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-data',
                templateUrl: './user-data.component.html',
                styleUrls: ['./user-data.component.scss']
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }]; }, { characters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], charactersChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "JClc":
/*!****************************************************!*\
  !*** ./src/app/_shared/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 0, consts: [[1, "url-container", "text-center"], ["href", "https://github.com/Unknown008/genshin-mats", 1, "url"], ["href", "https://github.com/Unknown008/genshin-mats/blob/main/README.md", 1, "url"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View on GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "N0Hh":
/*!*************************************************!*\
  !*** ./src/app/_shared/footer/footer.module.ts ***!
  \*************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ "JClc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class FooterModule {
}
FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterModule_Factory(t) { return new (t || FooterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                declarations: [
                    _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
                ],
                exports: [
                    _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "N73b":
/*!***********************************************************!*\
  !*** ./src/app/_layouts/character/character.component.ts ***!
  \***********************************************************/
/*! exports provided: CharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return CharacterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class CharacterComponent {
    constructor() {
        this.deleteCharacter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.path = "./../../assets/resources/characters/";
    }
    ngOnInit() {
        this.character.file = this.path + this.character.file + ".png";
    }
    removeCharacter() {
        this.deleteCharacter.emit(this.character.name);
    }
    toggleCharacterDisplay() {
        this.character.display = !this.character.display;
    }
}
CharacterComponent.ɵfac = function CharacterComponent_Factory(t) { return new (t || CharacterComponent)(); };
CharacterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharacterComponent, selectors: [["app-character"]], inputs: { character: "character" }, outputs: { deleteCharacter: "deleteCharacter" }, decls: 87, vars: 13, consts: [[1, "character", "col-lg-5"], ["characterForm", "ngForm"], [1, "row", "text-left", "character-card"], [1, "controls"], [1, "button-container"], ["type", "button", "title", "Remove character", 3, "click"], [1, "fas", "fa-trash-alt"], ["type", "button", "title", "Hide character from mats table", 3, "click"], [1, "fas", 3, "ngClass"], [1, "col-md-4", "flex", "center-x", "center-y"], [1, "portrait", 3, "src"], [1, "col-md-4"], [1, "row"], ["for", "name", 1, "form-label", "px-0"], ["type", "text", "id", "name", "disabled", "", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["for", "level", 1, "form-label", "px-0"], [1, "col-md-4", "pl-0"], ["type", "number", "id", "level", "title", "Current level", "name", "level", "max", "90", "min", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["level", "ngModel"], [1, "col-md-4", "pl-0", "flex", "center-y"], [1, "fas", "fa-arrow-right"], ["type", "number", "id", "tlevel", "title", "Target level", "name", "tlevel", "max", "90", "min", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["tlevel", "ngModel"], ["for", "ascension", 1, "form-label", "px-0"], ["type", "number", "id", "ascension", "name", "ascension", "title", "Current ascension", "max", "6", "min", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ascension", "ngModel"], ["type", "number", "id", "tascension", "name", "tascension", "title", "Target ascension", "max", "6", "min", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["tascension", "ngModel"], [1, "col-md-12"], ["for", "balevel", 1, "form-label", "px-0"], ["type", "number", "id", "balevel", "name", "balevel", "title", "Current basic attack level", "max", "10", "min", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["balevel", "ngModel"], ["type", "number", "id", "tbalevel", "name", "tbalevel", "title", "Target basic attack level", "max", "10", "min", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["tbalevel", "ngModel"], ["for", "eslevel", 1, "form-label", "px-0"], ["type", "number", "id", "eslevel", "name", "eslevel", "title", "Current elemental level", "max", "10", "min", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["eslevel", "ngModel"], ["type", "number", "id", "teslevel", "name", "teslevel", "title", "Target elemental skill level", "max", "10", "min", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["teslevel", "ngModel"], ["for", "eblevel", 1, "form-label", "px-0"], ["type", "number", "id", "eblevel", "name", "eblevel", "title", "Current burst level", "max", "10", "min", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["eblevel", "ngModel"], ["type", "number", "id", "teblevel", "name", "teblevel", "title", "Target burst attack level", "max", "10", "min", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["teblevel", "ngModel"]], template: function CharacterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterComponent_Template_button_click_6_listener() { return ctx.removeCharacter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterComponent_Template_button_click_9_listener() { return ctx.toggleCharacterDisplay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CharacterComponent_Template_input_ngModelChange_18_listener($event) { return ctx.character.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CharacterComponent_Template_input_ngModelChange_25_listener($event) { return ctx.character.level = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CharacterComponent_Template_input_ngModelChange_30_listener($event) { return ctx.character.tlevel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Ascension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CharacterComponent_Template_input_ngModelChange_37_listener($event) { return ctx.character.ascension = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CharacterComponent_Template_input_ngModelChange_42_listener($event) { return ctx.character.tascension = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Basic Attack Level ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CharacterComponent_Template_input_ngModelChange_52_listener($event) { return ctx.character.balevel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CharacterComponent_Template_input_ngModelChange_57_listener($event) { return ctx.character.tbalevel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Elemental Skill Level ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CharacterComponent_Template_input_ngModelChange_66_listener($event) { return ctx.character.eslevel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CharacterComponent_Template_input_ngModelChange_71_listener($event) { return ctx.character.teslevel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Elemental Burst Level ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CharacterComponent_Template_input_ngModelChange_80_listener($event) { return ctx.character.eblevel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CharacterComponent_Template_input_ngModelChange_85_listener($event) { return ctx.character.teblevel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.character.display ? "fa-eye" : "fa-eye-slash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.character.file, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.character.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.character.level);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.character.tlevel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.character.ascension);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.character.tascension);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.character.balevel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.character.tbalevel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.character.eslevel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.character.teslevel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.character.eblevel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.character.teblevel);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [".character[_ngcontent-%COMP%] {\n  background-color: #212529;\n  display: inline-block;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 1rem;\n}\n\n.character-card[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  padding: 0;\n  left: 1rem;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  text-align: center;\n}\n\n.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #ffffff8c;\n  padding: 2px;\n  border: none;\n  background: none;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  color: #ffffff8c;\n  font-size: 0.8rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #fff;\n  background: none;\n  border: none;\n  transition: none;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n.portrait[_ngcontent-%COMP%] {\n  max-width: 110px;\n  max-height: 110px;\n}\n\n.stat-row[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.row-label[_ngcontent-%COMP%] {\n  height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGFyYWN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJjaGFyYWN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcmFjdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbnRyb2xzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXIgYnV0dG9ue1xyXG4gICAgY29sb3I6ICNmZmZmZmY4YztcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmOGM7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnBvcnRyYWl0IHtcclxuICAgIG1heC13aWR0aDogMTEwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMTBweDtcclxufVxyXG5cclxuLnN0YXQtcm93IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnJvdy1sYWJlbCB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-character',
                templateUrl: './character.component.html',
                styleUrls: ['./character.component.scss']
            }]
    }], function () { return []; }, { character: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteCharacter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Osnj":
/*!*******************************************!*\
  !*** ./src/app/_services/json.service.ts ***!
  \*******************************************/
/*! exports provided: JsonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonService", function() { return JsonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class JsonService {
    constructor(http) {
        this.http = http;
    }
    getJSON(file) {
        return this.http.get("../../" + file);
    }
}
JsonService.ɵfac = function JsonService_Factory(t) { return new (t || JsonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
JsonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JsonService, factory: JsonService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "RR3w":
/*!*******************************************************!*\
  !*** ./src/app/_services/environment-path.service.ts ***!
  \*******************************************************/
/*! exports provided: EnvironmentPathService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentPathService", function() { return EnvironmentPathService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EnvironmentPathService {
    constructor() {
        const parsedUrl = new URL(window.location.href);
        this.url = parsedUrl.origin;
    }
    getUrl(path, src = false) {
        if (this.url.includes("localhost"))
            return path;
        else if (src)
            return path.replace(/^[./]*/, "");
        else
            return "angular-page-test/" + path.replace(/^[./]*/, "");
    }
}
EnvironmentPathService.ɵfac = function EnvironmentPathService_Factory(t) { return new (t || EnvironmentPathService)(); };
EnvironmentPathService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EnvironmentPathService, factory: EnvironmentPathService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnvironmentPathService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"]
            }]
    }], null, null); })();


/***/ }),

/***/ "TdoK":
/*!**************************************!*\
  !*** ./src/app/home/home.routing.ts ***!
  \**************************************/
/*! exports provided: HomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_layouts/default/default.component */ "4qkZ");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "9vUh");


const HomeRoutes = [
    {
        path: '',
        component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_0__["DefaultComponent"],
        children: [{
                path: '',
                component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
            }]
    }
];


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var overlayscrollbars_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! overlayscrollbars-ngx */ "WgGl");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_shared/navbar/navbar.module */ "/oW2");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_shared/footer/footer.module */ "N0Hh");
/* harmony import */ var _customize_customize_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customize/customize.module */ "3Txa");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.module */ "ct+p");
/* harmony import */ var _page_not_found_page_not_found_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.module */ "w7TL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_layouts/default/default.component */ "4qkZ");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
// Angular modules




// Custom modules






// Components


// Routing


// Providers



class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__["CookieService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            overlayscrollbars_ngx__WEBPACK_IMPORTED_MODULE_4__["OverlayscrollbarsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"]),
            _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
            _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"],
            _customize_customize_module__WEBPACK_IMPORTED_MODULE_7__["CustomizeModule"],
            _page_not_found_page_not_found_module__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_11__["DefaultComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        overlayscrollbars_ngx__WEBPACK_IMPORTED_MODULE_4__["OverlayscrollbarsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
        _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"],
        _customize_customize_module__WEBPACK_IMPORTED_MODULE_7__["CustomizeModule"],
        _page_not_found_page_not_found_module__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_11__["DefaultComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    overlayscrollbars_ngx__WEBPACK_IMPORTED_MODULE_4__["OverlayscrollbarsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"]),
                    _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                    _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"],
                    _customize_customize_module__WEBPACK_IMPORTED_MODULE_7__["CustomizeModule"],
                    _page_not_found_page_not_found_module__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundModule"]
                ],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__["CookieService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZGsb":
/*!*****************************************************!*\
  !*** ./src/app/_shared/directives/number-format.ts ***!
  \*****************************************************/
/*! exports provided: NumberFormatPipe, NumberFormatPipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFormatPipe", function() { return NumberFormatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFormatPipeModule", function() { return NumberFormatPipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NumberFormatPipe {
    transform(input) {
        return input.toString().replace(/\d(?=(?:\d{3})+$)/g, (m) => {
            return m + ",";
        });
    }
}
NumberFormatPipe.ɵfac = function NumberFormatPipe_Factory(t) { return new (t || NumberFormatPipe)(); };
NumberFormatPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "numberFormat", type: NumberFormatPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberFormatPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'numberFormat'
            }]
    }], null, null); })();
class NumberFormatPipeModule {
}
NumberFormatPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NumberFormatPipeModule });
NumberFormatPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NumberFormatPipeModule_Factory(t) { return new (t || NumberFormatPipeModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NumberFormatPipeModule, { declarations: [NumberFormatPipe], exports: [NumberFormatPipe] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberFormatPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [],
                declarations: [NumberFormatPipe],
                exports: [NumberFormatPipe]
            }]
    }], null, null); })();


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_layouts/default/default.component */ "4qkZ");

const AppRoutes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    {
        path: "",
        component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_0__["DefaultComponent"],
        children: [
            {
                path: "home",
                loadChildren: "./home/home.module#HomeModule"
            },
            {
                path: "customize",
                loadChildren: "./customize/customize.module#CustomizeModule"
            },
            {
                path: "404",
                loadChildren: "./page-not-found/page-not-found.module#PageNotFoundModule"
            }
        ]
    },
    { path: "**", redirectTo: "404", pathMatch: "full" }
];


/***/ }),

/***/ "c4UD":
/*!********************************************************!*\
  !*** ./src/app/_layouts/mat-table/mat-table.module.ts ***!
  \********************************************************/
/*! exports provided: MatTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableModule", function() { return MatTableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _mat_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mat-table.component */ "G5un");
/* harmony import */ var src_app_shared_directives_number_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_shared/directives/number-format */ "ZGsb");







class MatTableModule {
}
MatTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatTableModule });
MatTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatTableModule_Factory(t) { return new (t || MatTableModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_directives_number_format__WEBPACK_IMPORTED_MODULE_5__["NumberFormatPipeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatTableModule, { declarations: [_mat_table_component__WEBPACK_IMPORTED_MODULE_4__["MatTableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        src_app_shared_directives_number_format__WEBPACK_IMPORTED_MODULE_5__["NumberFormatPipeModule"]], exports: [_mat_table_component__WEBPACK_IMPORTED_MODULE_4__["MatTableComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    src_app_shared_directives_number_format__WEBPACK_IMPORTED_MODULE_5__["NumberFormatPipeModule"]
                ],
                declarations: [
                    _mat_table_component__WEBPACK_IMPORTED_MODULE_4__["MatTableComponent"]
                ],
                exports: [
                    _mat_table_component__WEBPACK_IMPORTED_MODULE_4__["MatTableComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.routing */ "TdoK");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/footer/footer.module */ "N0Hh");








class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_home_routing__WEBPACK_IMPORTED_MODULE_4__["HomeRoutes"]),
            _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"]], exports: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_home_routing__WEBPACK_IMPORTED_MODULE_4__["HomeRoutes"]),
                    _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"]
                ],
                declarations: [
                    _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
                ],
                exports: [
                    _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "j375":
/*!********************************************************!*\
  !*** ./src/app/_layouts/character/character.module.ts ***!
  \********************************************************/
/*! exports provided: CharacterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterModule", function() { return CharacterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _character_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character.component */ "N73b");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class CharacterModule {
}
CharacterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CharacterModule });
CharacterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CharacterModule_Factory(t) { return new (t || CharacterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CharacterModule, { declarations: [_character_component__WEBPACK_IMPORTED_MODULE_2__["CharacterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]], exports: [_character_component__WEBPACK_IMPORTED_MODULE_2__["CharacterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                declarations: [
                    _character_component__WEBPACK_IMPORTED_MODULE_2__["CharacterComponent"]
                ],
                exports: [
                    _character_component__WEBPACK_IMPORTED_MODULE_2__["CharacterComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 6, vars: 0, consts: [[1, "dark"], [1, "page", "col-md-12", "full-height"], [1, "dead-center"], ["src", "./../../../assets/resources/404.png"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Oops, it looks like there's nothing here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".dead-center[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: calc(50% - 108px);\r\n    right: calc(50% - 384.4px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlYWQtY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogY2FsYyg1MCUgLSAxMDhweCk7XHJcbiAgICByaWdodDogY2FsYyg1MCUgLSAzODQuNHB4KTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-page-not-found",
                templateUrl: "./page-not-found.component.html",
                styleUrls: ["./page-not-found.component.css"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "s8R2":
/*!**************************************************!*\
  !*** ./src/app/customize/customize.component.ts ***!
  \**************************************************/
/*! exports provided: CustomizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizeComponent", function() { return CustomizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/json.service */ "Osnj");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layouts_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_layouts/mat-table/mat-table.component */ "G5un");
/* harmony import */ var _layouts_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_layouts/user-data/user-data.component */ "InRu");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/footer/footer.component */ "JClc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _layouts_character_character_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_layouts/character/character.component */ "N73b");










function CustomizeComponent_app_character_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-character", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteCharacter", function CustomizeComponent_app_character_16_Template_app_character_deleteCharacter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteCharacter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const char_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("character", char_r3);
} }
function CustomizeComponent_label_38_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeComponent_label_38_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const character_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.addCharacter(character_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", character_r6.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", character_r6.vision, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", character_r6.name, " ");
} }
const _c0 = function () { return { standalone: true }; };
class CustomizeComponent {
    constructor(json, cookieService) {
        this.json = json;
        this.cookieService = cookieService;
        this.change = false;
        this.allCharacters = [];
        this.filteredCharacters = [];
        this.charFilter = "";
        this.path = "./../../assets/resources/";
    }
    ngOnInit() {
        this.json.getJSON("assets/resources/characters/_levelup.json")
            .subscribe((data) => {
            this.levelUpData = data;
        });
        this.json.getJSON("assets/resources/items/_exp.json")
            .subscribe((data) => {
            this.expData = data;
        });
        this.json.getJSON("assets/resources/items/_item_quality.json")
            .subscribe((data) => {
            this.itemQualityData = data;
        });
        this.json.getJSON("assets/resources/characters/_ascension.json")
            .subscribe((data) => {
            this.ascensionData = data;
        });
        this.json.getJSON("assets/resources/characters/_talent.json")
            .subscribe((data) => {
            this.talentData = data;
        });
        this.loadCharacters();
    }
    incrChange() {
        this.change = !this.change;
    }
    /**
     *
     */
    loadCharacters() {
        let userData = this.cookieService.get('genshin-characters');
        if (userData == null || userData == "") {
            this.json.getJSON("assets/resources/characters/_template.json")
                .subscribe((data) => {
                this.characters = data;
            });
        }
        else {
            this.characters = JSON.parse(userData);
        }
        this.json.getJSON("assets/resources/characters/_data.json")
            .subscribe((data) => {
            this.charData = data;
            for (let char in data) {
                this.allCharacters.push({
                    name: char,
                    vision: this.path + "elements/" + data[char].element + ".png",
                    element: data[char].element,
                    selected: (this.characters.findIndex(c => c.name == char) > -1)
                });
            }
            this.allCharacters.sort((a, b) => {
                if (a.name > b.name)
                    return 1;
                else if (a.name < b.name)
                    return -1;
                return 0;
            });
            this.filteredCharacters = JSON.parse(JSON.stringify(this.allCharacters));
        });
    }
    /**
     *
     */
    addCharacter(character) {
        let selectedChar = this.allCharacters.filter((c) => c.name == character.name)[0];
        if (selectedChar != null) {
            selectedChar.selected = !selectedChar.selected;
            if (selectedChar.selected) {
                this.characters.push({
                    name: character.name,
                    file: character.name.replace(/ \([^)]*\)/, ""),
                    level: 1,
                    balevel: 1,
                    eslevel: 1,
                    eblevel: 1,
                    ascension: 0,
                    tlevel: 90,
                    tbalevel: 10,
                    teslevel: 10,
                    teblevel: 10,
                    tascension: 6,
                    display: true
                });
            }
            else {
                let charId = this.characters.findIndex((c) => c.name == character.name);
                if (charId > -1) {
                    this.characters.splice(charId, 1);
                }
            }
        }
    }
    /**
     *
     */
    deleteCharacter(name) {
        let charId = this.characters.findIndex(c => c.name == name);
        this.characters.splice(charId, 1);
    }
    /**
     *
     * @event
     */
    filterCharacters() {
        console.log(this.charFilter);
        let elements = ["pyro", "hydro", "electro", "anemo", "cryo", "geo"];
        if (elements.includes(this.charFilter.toLowerCase())) {
            this.filteredCharacters = JSON.parse(JSON.stringify(this.allCharacters.filter((c) => c.element == this.charFilter.toLowerCase())));
        }
        else if (this.charFilter != "") {
            let filtered = this.allCharacters.filter((c) => c.name.toLowerCase().includes(this.charFilter.toLowerCase()));
            if (filtered.length != 0) {
                this.filteredCharacters = JSON.parse(JSON.stringify(filtered));
            }
        }
        else {
            this.filteredCharacters = JSON.parse(JSON.stringify(this.allCharacters));
        }
    }
}
CustomizeComponent.ɵfac = function CustomizeComponent_Factory(t) { return new (t || CustomizeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_json_service__WEBPACK_IMPORTED_MODULE_1__["JsonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"])); };
CustomizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomizeComponent, selectors: [["app-customize"]], decls: 39, vars: 15, consts: [[1, "page", "col-md-12"], ["role", "tablist", 1, "nav", "nav-tabs", "nav-fill"], ["role", "presentation", 1, "nav-item"], ["id", "char-tab", "data-bs-toggle", "tab", "href", "#characters", "role", "tab", "aria-controls", "char", "aria-selected", "true", 1, "nav-link", "active"], ["id", "mat-tab", "data-bs-toggle", "tab", "href", "#materials", "role", "tab", "aria-controls", "mat", "aria-selected", "false", 1, "nav-link", 3, "click"], ["id", "data-tab", "data-bs-toggle", "tab", "href", "#data", "role", "tab", "aria-controls", "data", "aria-selected", "false", 1, "nav-link", 3, "click"], [1, "tab-content"], ["id", "characters", "role", "tabpanel", "aria-labelledby", "char-tab", 1, "tab-pane", "fade", "show", "active"], [1, "button-container"], ["type", "button", "title", "Add character", "data-bs-toggle", "modal", "data-bs-target", "#addCharacter"], [1, "fas", "fa-plus"], [3, "character", "deleteCharacter", 4, "ngFor", "ngForOf"], ["id", "materials", "role", "tabpanel", "aria-labelledby", "mat-tab", 1, "tab-pane", "fade"], [3, "characters", "levelUpData", "expData", "ascensionData", "talentData", "charData", "itemQualityData", "change"], ["id", "data", "role", "tabpanel", "aria-labelledby", "data-tab", 1, "tab-pane", "fade"], [3, "characters", "change", "charactersChange"], ["id", "addCharacter", "tabindex", "-1", "aria-labelledby", "modalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], ["id", "modalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close"], [1, "fas", "fa-times"], [1, "full-width"], ["charSelect", "ngForm"], ["type", "text", "placeholder", "Filter characters...", 1, "character-filter", 3, "ngModel", "ngModelOptions", "keyup", "ngModelChange"], [1, "modal-body"], [1, "modal-body-content"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [3, "character", "deleteCharacter"], [1, "list-group-item"], ["type", "checkbox", 1, "form-check-input", "me-1", 3, "checked", "click"], [1, "character-container"], [1, "character-element"], [3, "src"], [1, "character-name"]], template: function CustomizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Characters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeComponent_Template_a_click_6_listener() { return ctx.incrChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Materials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeComponent_Template_a_click_9_listener() { return ctx.incrChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CustomizeComponent_app_character_16_Template, 1, 1, "app-character", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-mat-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-user-data", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("charactersChange", function CustomizeComponent_Template_app_user_data_charactersChange_20_listener($event) { return ctx.characters = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Add/Remove Characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CustomizeComponent_Template_input_keyup_33_listener() { return ctx.filterCharacters(); })("ngModelChange", function CustomizeComponent_Template_input_ngModelChange_33_listener($event) { return ctx.charFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CustomizeComponent_label_38_Template, 7, 3, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.characters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("characters", ctx.characters)("levelUpData", ctx.levelUpData)("expData", ctx.expData)("ascensionData", ctx.ascensionData)("talentData", ctx.talentData)("charData", ctx.charData)("itemQualityData", ctx.itemQualityData)("change", ctx.change);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("characters", ctx.characters)("change", ctx.change);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.charFilter)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredCharacters);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _layouts_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_4__["MatTableComponent"], _layouts_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_5__["UserDataComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _layouts_character_character_component__WEBPACK_IMPORTED_MODULE_8__["CharacterComponent"]], styles: [".tab-content[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  float: left;\n  position: absolute;\n  font-size: 40px;\n  margin-top: 10px;\n}\n\n.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 63px;\n  height: 63px;\n  background: #363a3d;\n  color: #fff;\n  border: none;\n}\n\n.character-filter[_ngcontent-%COMP%] {\n  width: calc(100% - 30px);\n  margin: 0 15px;\n}\n\n.character-element[_ngcontent-%COMP%], .character-name[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.character-element[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  position: relative;\n  top: -2px;\n}\n\n.character-element[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  background: none;\n  color: #ffffff8c;\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #ffffff8c;\n  border-color: #ffffff8c;\n}\n\n.form-check-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGN1c3RvbWl6ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTs7RUFFSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1EQUFBO0FBQ0oiLCJmaWxlIjoiY3VzdG9taXplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1jb250ZW50IC50YWItcGFuZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDYzcHg7XHJcbiAgICBoZWlnaHQ6IDYzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzYzYTNkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItZmlsdGVyIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG59XHJcblxyXG4uY2hhcmFjdGVyLWVsZW1lbnQsIFxyXG4uY2hhcmFjdGVyLW5hbWUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY2hhcmFjdGVyLWVsZW1lbnQge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTJweDtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1lbGVtZW50IGltZyB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmZmZmY4YztcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOGM7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY4YztcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4yNXJlbSByZ2JhKDI1NSwyNTUsMjU1LC4yNSk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customize',
                templateUrl: './customize.component.html',
                styleUrls: ['./customize.component.scss']
            }]
    }], function () { return [{ type: _services_json_service__WEBPACK_IMPORTED_MODULE_1__["JsonService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "w7TL":
/*!*********************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.module.ts ***!
  \*********************************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found.component */ "rQPh");
/* harmony import */ var _page_not_found_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found.routing */ "Fnai");







class PageNotFoundModule {
}
PageNotFoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageNotFoundModule });
PageNotFoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageNotFoundModule_Factory(t) { return new (t || PageNotFoundModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_page_not_found_routing__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundRoutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageNotFoundModule, { declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_page_not_found_routing__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundRoutes"])
                ],
                declarations: [
                    _page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
                ],
                exports: [
                    _page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));
// OverlayScrollbars(document.body, {
//     scrollbars: {
//         autoHide: "move"
//     }
// });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./customize/customize.module": "3Txa",
	"./home/home.module": "ct+p",
	"./page-not-found/page-not-found.module": "w7TL"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "zn8P";
module.exports = webpackAsyncContext;

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map