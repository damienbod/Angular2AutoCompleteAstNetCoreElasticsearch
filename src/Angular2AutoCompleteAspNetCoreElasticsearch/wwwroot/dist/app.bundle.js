webpackJsonp([0],{

/***/ 0:
/*!*****************************!*\
  !*** ./angular2App/boot.ts ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1);
	var app_module_1 = __webpack_require__(/*! ./app/app.module */ 23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/*!***************************************!*\
  !*** ./angular2App/app/app.module.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var common_1 = __webpack_require__(/*! @angular/common */ 22);
	var forms_1 = __webpack_require__(/*! @angular/forms */ 24);
	var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 21);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 28);
	var app_constants_1 = __webpack_require__(/*! ./app.constants */ 60);
	var app_routes_1 = __webpack_require__(/*! ./app.routes */ 61);
	var http_1 = __webpack_require__(/*! @angular/http */ 64);
	var home_component_1 = __webpack_require__(/*! ./home/home.component */ 62);
	var ng2_completer_1 = __webpack_require__(/*! ng2-completer */ 67);
	var search_component_1 = __webpack_require__(/*! ./autocomplete/search.component */ 69);
	var searchDataService_1 = __webpack_require__(/*! ./autocomplete/searchDataService */ 63);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                common_1.CommonModule,
	                ng2_completer_1.Ng2CompleterModule,
	                forms_1.FormsModule,
	                app_routes_1.routing,
	                http_1.HttpModule,
	                http_1.JsonpModule
	            ],
	            declarations: [
	                app_component_1.AppComponent,
	                home_component_1.HomeComponent,
	                search_component_1.AutocompleteSearchComponent
	            ],
	            providers: [
	                searchDataService_1.SearchDataService,
	                app_constants_1.Configuration
	            ],
	            bootstrap: [app_component_1.AppComponent],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 28:
/*!******************************************!*\
  !*** ./angular2App/app/app.component.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var router_1 = __webpack_require__(/*! @angular/router */ 29);
	var AppComponent = (function () {
	    function AppComponent(router) {
	        this.router = router;
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: __webpack_require__(/*! ./app.component.html */ 57),
	            styles: [__webpack_require__(/*! ./app.component.scss */ 58), __webpack_require__(/*! ../style/app.scss */ 59)]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 57:
/*!********************************************!*\
  !*** ./angular2App/app/app.component.html ***!
  \********************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"container\" style=\"margin-top: 15px;\">\r\n\r\n    <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Angular2 Auto Complete, ASP.NET Core Elasticsearch</a>\r\n            </div>\r\n            <ul class=\"nav navbar-nav\">\r\n                <!--<li><a [routerLink]=\"['/home']\">Home</a></li>-->\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a href=\"https://twitter.com/damien_bod\"><img src=\"assets/damienbod.jpg\" height=\"40\" style=\"margin-top: -10px;\" /></a></li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n    <footer>\r\n        <p>\r\n            <a href=\"https://twitter.com/damien_bod\">DamienBod</a>&nbsp;Blog: <a href=\"https://damienbod.com/\">Software Engineering</a>\r\n            &copy; 2016\r\n        </p>\r\n    </footer>\r\n</div>"

/***/ },

/***/ 58:
/*!********************************************!*\
  !*** ./angular2App/app/app.component.scss ***!
  \********************************************/
/***/ function(module, exports) {

	module.exports = "// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = require(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss\");\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = require(\"!./../../node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(module.hot) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}"

/***/ },

/***/ 59:
/*!************************************!*\
  !*** ./angular2App/style/app.scss ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = "// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = require(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss\");\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = require(\"!./../../node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(module.hot) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}"

/***/ },

/***/ 60:
/*!******************************************!*\
  !*** ./angular2App/app/app.constants.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var Configuration = (function () {
	    function Configuration() {
	        this.Server = "http://localhost:5000/";
	    }
	    Configuration = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Configuration);
	    return Configuration;
	}());
	exports.Configuration = Configuration;


/***/ },

/***/ 61:
/*!***************************************!*\
  !*** ./angular2App/app/app.routes.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(/*! @angular/router */ 29);
	var home_component_1 = __webpack_require__(/*! ./home/home.component */ 62);
	var appRoutes = [
	    { path: '', component: home_component_1.HomeComponent },
	    { path: 'home', component: home_component_1.HomeComponent }
	];
	exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ },

/***/ 62:
/*!************************************************!*\
  !*** ./angular2App/app/home/home.component.ts ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var searchDataService_1 = __webpack_require__(/*! ../autocomplete/searchDataService */ 63);
	var HomeComponent = (function () {
	    function HomeComponent(_dataService) {
	        this._dataService = _dataService;
	        this.message = "Hello from HomeComponent constructor";
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._dataService
	            .GetAll()
	            .subscribe(function (data) { return _this.PersonCityItems = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'homecomponent',
	            template: __webpack_require__(/*! ./home.component.html */ 66),
	            providers: [searchDataService_1.SearchDataService]
	        }), 
	        __metadata('design:paramtypes', [searchDataService_1.SearchDataService])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 63:
/*!***********************************************************!*\
  !*** ./angular2App/app/autocomplete/searchDataService.ts ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var http_1 = __webpack_require__(/*! @angular/http */ 64);
	__webpack_require__(/*! rxjs/add/operator/map */ 65);
	var app_constants_1 = __webpack_require__(/*! ../app.constants */ 60);
	var SearchDataService = (function () {
	    function SearchDataService(_http, _configuration) {
	        var _this = this;
	        this._http = _http;
	        this._configuration = _configuration;
	        this.GetAll = function () {
	            return _this._http.get(_this.actionUrl).map(function (response) { return response.json(); });
	        };
	        this.GetSingle = function (id) {
	            return _this._http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
	        };
	        this.Add = function (itemName) {
	            var toAdd = JSON.stringify({ ItemName: itemName });
	            return _this._http.post(_this.actionUrl, toAdd, { headers: _this.headers }).map(function (res) { return res.json(); });
	        };
	        this.Update = function (id, itemToUpdate) {
	            return _this._http
	                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: _this.headers })
	                .map(function (res) { return res.json(); });
	        };
	        this.Delete = function (id) {
	            return _this._http.delete(_this.actionUrl + id);
	        };
	        this.actionUrl = _configuration.Server + 'api/personcity/';
	        this.headers = new http_1.Headers();
	        this.headers.append('Content-Type', 'application/json');
	        this.headers.append('Accept', 'application/json');
	    }
	    SearchDataService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration])
	    ], SearchDataService);
	    return SearchDataService;
	}());
	exports.SearchDataService = SearchDataService;


/***/ },

/***/ 66:
/*!**************************************************!*\
  !*** ./angular2App/app/home/home.component.html ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\">\r\n\r\n    <p>Elasticsearch Status: TODO</p> ::TODO add auto complete search::\r\n\r\n    <autocompletesearch [data]=\"blah\" >\r\n    </autocompletesearch>\r\n\r\n    <hr />\r\n\r\n    <ul>\r\n        <li *ngFor=\"let personCity of PersonCityItems\">\r\n            <span>{{personCity.name}} {{personCity.familyName}} </span>\r\n            <br />\r\n            <span>{{personCity.info}}</span>\r\n            <hr />\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ },

/***/ 69:
/*!**********************************************************!*\
  !*** ./angular2App/app/autocomplete/search.component.ts ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var ng2_completer_1 = __webpack_require__(/*! ng2-completer */ 67);
	var AutocompleteSearchComponent = (function () {
	    function AutocompleteSearchComponent(completerService) {
	        this.completerService = completerService;
	        this.searchData = [
	            { color: 'red', value: '#f00' },
	            { color: 'green', value: '#0f0' },
	            { color: 'blue', value: '#00f' },
	            { color: 'cyan', value: '#0ff' },
	            { color: 'magenta', value: '#f0f' },
	            { color: 'yellow', value: '#ff0' },
	            { color: 'black', value: '#000' }
	        ];
	        this.dataService = completerService.local(this.searchData, 'color', 'color');
	    }
	    AutocompleteSearchComponent.prototype.ngOnInit = function () {
	        console.log("ngOnInit AutocompleteSearch");
	        console.log(this.searchData);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], AutocompleteSearchComponent.prototype, "data", void 0);
	    AutocompleteSearchComponent = __decorate([
	        core_1.Component({
	            selector: 'autocompletesearch',
	            template: "\n<ng2-completer [(ngModel)]=\"searchStr\" [dataService]=\"dataService\" [minSearchLength]=\"0\"></ng2-completer>\n\n"
	        }), 
	        __metadata('design:paramtypes', [ng2_completer_1.CompleterService])
	    ], AutocompleteSearchComponent);
	    return AutocompleteSearchComponent;
	}());
	exports.AutocompleteSearchComponent = AutocompleteSearchComponent;


/***/ }

});
//# sourceMappingURL=app.bundle.js.map