webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo1_demo1__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo2_demo2__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__demo1_demo1__["a" /* Demo1Page */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__demo2_demo2__["a" /* Demo2Page */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/marko/Projects/cde-gallery-flip/demo-v3/src/app/modules/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Header" tabIcon="ios-albums"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="List" tabIcon="md-apps"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/marko/Projects/cde-gallery-flip/demo-v3/src/app/modules/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Demo1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Demo1Page = /** @class */ (function () {
    function Demo1Page() {
        this.images = __WEBPACK_IMPORTED_MODULE_1__images__["a" /* images */];
    }
    Demo1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-demo1',template:/*ion-inline-start:"/Users/marko/Projects/cde-gallery-flip/demo-v3/src/app/modules/demo1/demo1.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Header</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <cde-gallery-flip [images]="images"></cde-gallery-flip>\n  <p>Lorem ipsum dolor sit amet, ea partem aperiam eos, congue ornatus conceptam mei in. Ut tibique probatus quo, an tempor perfecto has, qui inani vivendo scribentur at. Vix no mucius pericula. Alterum argumentum cum id, vel ex alii graeci. Blandit consetetur conclusionemque ei vix, laoreet gubergren prodesset at nam.</p>\n  <p>Pri no invidunt referrentur vituperatoribus, modus antiopam nec et. Mei integre vivendum consequuntur ut, sumo dicant graecis est no, ad mea modo brute numquam. Mea an justo liber delenit, apeirian liberavisse signiferumque ad nam. Ei diam ridens vis, vim eu quodsi ullamcorper. Populo accusam senserit cu pro.</p>\n  <p>Labore bonorum vituperatoribus vis ea, labore delenit ad mei. Vel at bonorum evertitur. Illud facilisi quo an. Te copiosae invidunt omittantur pri, numquam consulatu vis et. Mei harum nemore feugiat cu, audiam delicata voluptaria nec in.</p>\n  <p>Ex pro summo sanctus rationibus. Ut vis nibh quodsi ceteros. Numquam eruditi commune ne vel, erat delicatissimi ex eos. Cum fuisset detraxit percipitur ad. Error aperiam sea in, no invenire efficiendi nec.</p>\n  <p>Etiam ludus quaerendum ius an, nec persius officiis referrentur no, te quis tantas nullam nec. Nec ad putant deleniti. At sea salutandi vulputate eloquentiam, has clita expetendis necessitatibus ex. Everti accusamus at usu, per et quidam electram. Ne vix dicta scaevola, has dicat verterem at, ad mel verear facilis interpretaris. An explicari iracundia neglegentur sea, sed cu quot neglegentur.</p>\n  <p>Labore bonorum vituperatoribus vis ea, labore delenit ad mei. Vel at bonorum evertitur. Illud facilisi quo an. Te copiosae invidunt omittantur pri, numquam consulatu vis et. Mei harum nemore feugiat cu, audiam delicata voluptaria nec in.</p>\n  <p>Ex pro summo sanctus rationibus. Ut vis nibh quodsi ceteros. Numquam eruditi commune ne vel, erat delicatissimi ex eos. Cum fuisset detraxit percipitur ad. Error aperiam sea in, no invenire efficiendi nec.</p>\n  <p>Etiam ludus quaerendum ius an, nec persius officiis referrentur no, te quis tantas nullam nec. Nec ad putant deleniti. At sea salutandi vulputate eloquentiam, has clita expetendis necessitatibus ex. Everti accusamus at usu, per et quidam electram. Ne vix dicta scaevola, has dicat verterem at, ad mel verear facilis interpretaris. An explicari iracundia neglegentur sea, sed cu quot neglegentur.</p>\n</ion-content>\n'/*ion-inline-end:"/Users/marko/Projects/cde-gallery-flip/demo-v3/src/app/modules/demo1/demo1.html"*/
        })
    ], Demo1Page);
    return Demo1Page;
}());

//# sourceMappingURL=demo1.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return images; });
var images = [
    {
        url: './assets/images/1.jpg',
        width: 1920,
        height: 957
    },
    {
        url: './assets/images/2.jpg',
        width: 1920,
        height: 1080
    },
    {
        url: './assets/images/3.jpg',
        width: 1920,
        height: 1200
    },
    {
        url: './assets/images/4.jpg',
        width: 1920,
        height: 1080
    },
    {
        url: './assets/images/5.jpg',
        width: 1920,
        height: 1080
    },
    {
        url: './assets/images/6.jpg',
        width: 1920,
        height: 1080
    },
    {
        url: './assets/images/7.jpg',
        width: 1920,
        height: 1280
    },
    {
        url: './assets/images/8.jpg',
        width: 1920,
        height: 1280
    },
    {
        url: './assets/images/9.jpg',
        width: 1920,
        height: 1080
    },
    {
        url: './assets/images/10.jpg',
        width: 1920,
        height: 1280
    }
];
//# sourceMappingURL=images.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Demo2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Demo2Page = /** @class */ (function () {
    function Demo2Page() {
        this.list = [];
        var getRandomImage = function () { return __WEBPACK_IMPORTED_MODULE_1__images__["a" /* images */][Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_1__images__["a" /* images */].length)]; };
        for (var i = 1; i < 5; i++) {
            this.list.push({
                images: [
                    getRandomImage(),
                    getRandomImage(),
                    getRandomImage(),
                    getRandomImage()
                ]
            });
        }
    }
    Demo2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-demo2',template:/*ion-inline-start:"/Users/marko/Projects/cde-gallery-flip/demo-v3/src/app/modules/demo2/demo2.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="list">\n    <div *ngFor="let item of list">\n      <cde-gallery-flip [images]="item.images"\n                        [blockMaxWidth]="100"\n                        [blockMaxHeight]="100"\n                        [flipSpeed]="200"\n                        [waitTime]="2000">\n      </cde-gallery-flip>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/marko/Projects/cde-gallery-flip/demo-v3/src/app/modules/demo2/demo2.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], Demo2Page);
    return Demo2Page;
}());

//# sourceMappingURL=demo2.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_demo1_demo1__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_demo2_demo2__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_cde_gallery_flip__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__modules_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__modules_demo1_demo1__["a" /* Demo1Page */],
                __WEBPACK_IMPORTED_MODULE_6__modules_demo2_demo2__["a" /* Demo2Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__modules_cde_gallery_flip__["a" /* CdeGalleryFlipModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__modules_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__modules_demo1_demo1__["a" /* Demo1Page */],
                __WEBPACK_IMPORTED_MODULE_6__modules_demo2_demo2__["a" /* Demo2Page */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__modules_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/marko/Projects/cde-gallery-flip/demo-v3/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/marko/Projects/cde-gallery-flip/demo-v3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cde_gallery_flip_module__ = __webpack_require__(273);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cde_gallery_flip_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdeGalleryFlipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cde_gallery_flip_component__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CdeGalleryFlipModule = /** @class */ (function () {
    function CdeGalleryFlipModule() {
    }
    CdeGalleryFlipModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__cde_gallery_flip_component__["a" /* CdeGalleryFlipComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__cde_gallery_flip_component__["a" /* CdeGalleryFlipComponent */]
            ]
        })
    ], CdeGalleryFlipModule);
    return CdeGalleryFlipModule;
}());

//# sourceMappingURL=cde-gallery-flip.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdeGalleryFlipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cde_gallery_flip_models__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CdeGalleryFlipComponent = /** @class */ (function () {
    function CdeGalleryFlipComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.previousElementWidth = 0;
        this.previousElementHeight = 0;
        this.images = [];
        this.blockMaxWidth = 50;
        this.blockMaxHeight = 50;
        this.flipSpeed = 30;
        this.waitTime = 2000;
    }
    Object.defineProperty(CdeGalleryFlipComponent.prototype, "element", {
        get: function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdeGalleryFlipComponent.prototype, "contentElement", {
        get: function () {
            return this.contentElementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdeGalleryFlipComponent.prototype, "elementWidth", {
        get: function () {
            return this.element.offsetWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdeGalleryFlipComponent.prototype, "elementHeight", {
        get: function () {
            return this.element.offsetHeight;
        },
        enumerable: true,
        configurable: true
    });
    CdeGalleryFlipComponent.prototype.ngAfterViewInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__cde_gallery_flip_models__["a" /* addComponent */])(this);
    };
    CdeGalleryFlipComponent.prototype.ngOnChanges = function (changes) {
        if (!this.blocks) {
            return;
        }
        var propNames = [
            'images',
            'blockMaxWidth',
            'blockMaxHeight',
            'flipSpeed'
        ];
        for (var propName in changes) {
            if (propNames.indexOf(propName) !== -1) {
                this.initialize();
                this.play();
                return;
            }
        }
    };
    CdeGalleryFlipComponent.prototype.ngOnDestroy = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__cde_gallery_flip_models__["b" /* removeComponent */])(this);
    };
    CdeGalleryFlipComponent.prototype.checkResize = function () {
        if (this.previousElementWidth === this.elementWidth &&
            this.previousElementHeight === this.elementHeight) {
            return;
        }
        this.previousElementWidth = this.elementWidth;
        this.previousElementHeight = this.elementHeight;
        this.initialize();
        this.play();
    };
    CdeGalleryFlipComponent.prototype.play = function () {
        var _this = this;
        this.nextFlipSubscription = setTimeout(function () {
            _this.nextFlipSubscription = null;
            _this.flipToNext();
        }, this.waitTime);
    };
    CdeGalleryFlipComponent.prototype.flipToNext = function () {
        if (this.isFlipping) {
            return;
        }
        this.isFlipping = true;
        if (this.flipped) {
            this.setupFront();
            this.backIndex = (this.backIndex + 2) % this.images.length;
        }
        else {
            this.setupBack();
            this.frontIndex = (this.frontIndex + 2) % this.images.length;
        }
        this.flipped = !this.flipped;
        this.flip(0);
    };
    CdeGalleryFlipComponent.prototype.flip = function (index) {
        var _this = this;
        var blocksLength = this.blocks.length;
        if (index === blocksLength) {
            this.isFlipping = false;
            this.nextFlipSubscription = blocksLength && setTimeout(function () {
                _this.nextFlipSubscription = null;
                _this.flipToNext();
            }, this.waitTime);
            return;
        }
        setTimeout(function () {
            if (!_this.isFlipping) {
                return;
            }
            if (_this.flipped) {
                _this.renderer.addClass(_this.blocks[index].element, 'flipped');
            }
            else {
                _this.renderer.removeClass(_this.blocks[index].element, 'flipped');
            }
            _this.flip(++index);
        }, this.flipSpeed);
    };
    CdeGalleryFlipComponent.prototype.initialize = function () {
        var _this = this;
        this.frontIndex = 0;
        this.backIndex = 1;
        this.isFlipping = false;
        this.flipped = false;
        this.nextFlipSubscription && clearTimeout(this.nextFlipSubscription);
        this.nextFlipSubscription = null;
        var blockWidth = getBlockSize(this.elementWidth, this.blockMaxWidth);
        var blockHeight = getBlockSize(this.elementHeight, this.blockMaxHeight);
        this.blocks && this.blocks.forEach(function (block) { return _this.renderer.removeChild(_this.contentElement, block.element); });
        this.blocks = [];
        for (var i = 0; i < this.elementHeight; i += blockHeight) {
            for (var j = 0; j < this.elementWidth; j += blockWidth) {
                var block = this.renderer.createElement('div');
                this.renderer.appendChild(this.contentElement, block);
                this.blocks.push({
                    element: block,
                    leftOffset: j,
                    topOffset: i
                });
                this.renderer.setStyle(block, 'width', blockWidth + "px");
                this.renderer.setStyle(block, 'height', blockHeight + "px");
                this.renderer.setStyle(block, 'top', i + "px");
                this.renderer.setStyle(block, 'left', j + "px");
                var front = this.renderer.createElement('div');
                this.renderer.appendChild(block, front);
                this.renderer.addClass(front, 'front');
                var back = this.renderer.createElement('div');
                this.renderer.appendChild(block, back);
                this.renderer.addClass(back, 'back');
            }
        }
        this.setupFront();
    };
    CdeGalleryFlipComponent.prototype.setupFront = function () {
        var image = this.images[this.frontIndex];
        this.setupFaceImage(0, image);
    };
    CdeGalleryFlipComponent.prototype.setupBack = function () {
        var image = this.images[this.backIndex];
        this.setupFaceImage(1, image);
    };
    CdeGalleryFlipComponent.prototype.setupFaceImage = function (faceIndex, image) {
        var _this = this;
        var imageWidth = image.width;
        var imageHeight = image.height;
        var scale = Math.max(this.elementWidth / imageWidth, this.elementHeight / imageHeight);
        imageWidth = Math.floor(imageWidth * scale);
        imageHeight = Math.floor(imageHeight * scale);
        var backgroundPositionX = Math.floor(this.elementWidth / 2 - imageWidth / 2);
        var backgroundPositionY = Math.floor(this.elementHeight / 2 - imageHeight / 2);
        this.blocks.forEach(function (block) {
            var face = block.element.children[faceIndex];
            _this.renderer.setStyle(face, 'backgroundImage', "url(" + image.url + ")");
            _this.renderer.setStyle(face, 'backgroundSize', imageWidth + 1 + "px " + (imageHeight + 1) + "px");
            _this.renderer.setStyle(face, 'backgroundPosition', backgroundPositionX - block.leftOffset + "px " + (backgroundPositionY - block.topOffset) + "px");
            _this.renderer.setStyle(face, 'background-repeat', "no-repeat");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('contentElement'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CdeGalleryFlipComponent.prototype, "contentElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], CdeGalleryFlipComponent.prototype, "images", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], CdeGalleryFlipComponent.prototype, "blockMaxWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], CdeGalleryFlipComponent.prototype, "blockMaxHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], CdeGalleryFlipComponent.prototype, "flipSpeed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], CdeGalleryFlipComponent.prototype, "waitTime", void 0);
    CdeGalleryFlipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cde-gallery-flip',
            template: "\n    <div #contentElement></div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], CdeGalleryFlipComponent);
    return CdeGalleryFlipComponent;
}());

var getBlockSize = function (containerSize, maxBlockSize) {
    if (containerSize % maxBlockSize === 0) {
        return maxBlockSize;
    }
    var blockCount = containerSize / maxBlockSize;
    return Math.ceil(containerSize / blockCount);
};
//# sourceMappingURL=cde-gallery-flip.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeComponent; });
var componentInstances = [];
var addComponent = function (component) {
    componentInstances.push(component);
    !componentInstances[1] && requestAnimationFrame(runChecks);
};
var removeComponent = function (component) {
    var index = componentInstances.indexOf(component);
    index > -1 && componentInstances.splice(index, 1);
};
var runChecks = function () {
    if (componentInstances[0]) {
        componentInstances.forEach(function (c) { return c.checkResize(); });
        requestAnimationFrame(runChecks);
    }
};
//# sourceMappingURL=cde-gallery-flip.models.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map