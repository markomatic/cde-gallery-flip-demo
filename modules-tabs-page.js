(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-tabs-page"],{

/***/ "./src/app/modules/cde-gallery-flip/cde-gallery-flip.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/cde-gallery-flip/cde-gallery-flip.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  background-color: black;\n  overflow: hidden; }\n  :host > div {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    -webkit-perspective: 1000px;\n            perspective: 1000px; }\n  :host > div > div {\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden;\n      position: absolute;\n      transition: 0.9s;\n      -webkit-transform-style: preserve-3d;\n              transform-style: preserve-3d; }\n  :host > div > div.flipped {\n        -webkit-transform: rotateY(180deg);\n                transform: rotateY(180deg); }\n  :host > div > div > div {\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n        position: absolute;\n        top: -1px;\n        left: -1px;\n        right: -1px;\n        bottom: -1px; }\n  :host > div > div > div.front {\n          -webkit-transform: rotateY(0deg);\n                  transform: rotateY(0deg); }\n  :host > div > div > div.back {\n          -webkit-transform: rotateY(180deg);\n                  transform: rotateY(180deg); }\n"

/***/ }),

/***/ "./src/app/modules/cde-gallery-flip/cde-gallery-flip.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/cde-gallery-flip/cde-gallery-flip.component.ts ***!
  \************************************************************************/
/*! exports provided: CdeGalleryFlipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdeGalleryFlipComponent", function() { return CdeGalleryFlipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cde_gallery_flip_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cde-gallery-flip.models */ "./src/app/modules/cde-gallery-flip/cde-gallery-flip.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_cde_gallery_flip_models__WEBPACK_IMPORTED_MODULE_1__["addComponent"])(this);
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
        Object(_cde_gallery_flip_models__WEBPACK_IMPORTED_MODULE_1__["removeComponent"])(this);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentElement'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CdeGalleryFlipComponent.prototype, "contentElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CdeGalleryFlipComponent.prototype, "images", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CdeGalleryFlipComponent.prototype, "blockMaxWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CdeGalleryFlipComponent.prototype, "blockMaxHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CdeGalleryFlipComponent.prototype, "flipSpeed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CdeGalleryFlipComponent.prototype, "waitTime", void 0);
    CdeGalleryFlipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cde-gallery-flip',
            template: "\n    <div #contentElement></div>\n  ",
            styles: [__webpack_require__(/*! ./cde-gallery-flip.component.scss */ "./src/app/modules/cde-gallery-flip/cde-gallery-flip.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
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


/***/ }),

/***/ "./src/app/modules/cde-gallery-flip/cde-gallery-flip.models.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/cde-gallery-flip/cde-gallery-flip.models.ts ***!
  \*********************************************************************/
/*! exports provided: addComponent, removeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComponent", function() { return addComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeComponent", function() { return removeComponent; });
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


/***/ }),

/***/ "./src/app/modules/cde-gallery-flip/cde-gallery-flip.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/cde-gallery-flip/cde-gallery-flip.module.ts ***!
  \*********************************************************************/
/*! exports provided: CdeGalleryFlipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdeGalleryFlipModule", function() { return CdeGalleryFlipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cde_gallery_flip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cde-gallery-flip.component */ "./src/app/modules/cde-gallery-flip/cde-gallery-flip.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CdeGalleryFlipModule = /** @class */ (function () {
    function CdeGalleryFlipModule() {
    }
    CdeGalleryFlipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _cde_gallery_flip_component__WEBPACK_IMPORTED_MODULE_1__["CdeGalleryFlipComponent"]
            ],
            exports: [
                _cde_gallery_flip_component__WEBPACK_IMPORTED_MODULE_1__["CdeGalleryFlipComponent"]
            ]
        })
    ], CdeGalleryFlipModule);
    return CdeGalleryFlipModule;
}());



/***/ }),

/***/ "./src/app/modules/cde-gallery-flip/index.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/cde-gallery-flip/index.ts ***!
  \***************************************************/
/*! exports provided: CdeGalleryFlipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cde_gallery_flip_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cde-gallery-flip.module */ "./src/app/modules/cde-gallery-flip/cde-gallery-flip.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdeGalleryFlipModule", function() { return _cde_gallery_flip_module__WEBPACK_IMPORTED_MODULE_0__["CdeGalleryFlipModule"]; });





/***/ }),

/***/ "./src/app/modules/demo1.page/demo1.page.html":
/*!****************************************************!*\
  !*** ./src/app/modules/demo1.page/demo1.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Header\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<cde-gallery-flip [images]=\"images\"></cde-gallery-flip>\n<ion-content>\n  <p>Lorem ipsum dolor sit amet, ea partem aperiam eos, congue ornatus conceptam mei in. Ut tibique probatus quo, an tempor perfecto has, qui inani vivendo scribentur at. Vix no mucius pericula. Alterum argumentum cum id, vel ex alii graeci. Blandit consetetur conclusionemque ei vix, laoreet gubergren prodesset at nam.</p>\n  <p>Pri no invidunt referrentur vituperatoribus, modus antiopam nec et. Mei integre vivendum consequuntur ut, sumo dicant graecis est no, ad mea modo brute numquam. Mea an justo liber delenit, apeirian liberavisse signiferumque ad nam. Ei diam ridens vis, vim eu quodsi ullamcorper. Populo accusam senserit cu pro.</p>\n  <p>Labore bonorum vituperatoribus vis ea, labore delenit ad mei. Vel at bonorum evertitur. Illud facilisi quo an. Te copiosae invidunt omittantur pri, numquam consulatu vis et. Mei harum nemore feugiat cu, audiam delicata voluptaria nec in.</p>\n  <p>Ex pro summo sanctus rationibus. Ut vis nibh quodsi ceteros. Numquam eruditi commune ne vel, erat delicatissimi ex eos. Cum fuisset detraxit percipitur ad. Error aperiam sea in, no invenire efficiendi nec.</p>\n  <p>Etiam ludus quaerendum ius an, nec persius officiis referrentur no, te quis tantas nullam nec. Nec ad putant deleniti. At sea salutandi vulputate eloquentiam, has clita expetendis necessitatibus ex. Everti accusamus at usu, per et quidam electram. Ne vix dicta scaevola, has dicat verterem at, ad mel verear facilis interpretaris. An explicari iracundia neglegentur sea, sed cu quot neglegentur.</p>\n  <p>Labore bonorum vituperatoribus vis ea, labore delenit ad mei. Vel at bonorum evertitur. Illud facilisi quo an. Te copiosae invidunt omittantur pri, numquam consulatu vis et. Mei harum nemore feugiat cu, audiam delicata voluptaria nec in.</p>\n  <p>Ex pro summo sanctus rationibus. Ut vis nibh quodsi ceteros. Numquam eruditi commune ne vel, erat delicatissimi ex eos. Cum fuisset detraxit percipitur ad. Error aperiam sea in, no invenire efficiendi nec.</p>\n  <p>Etiam ludus quaerendum ius an, nec persius officiis referrentur no, te quis tantas nullam nec. Nec ad putant deleniti. At sea salutandi vulputate eloquentiam, has clita expetendis necessitatibus ex. Everti accusamus at usu, per et quidam electram. Ne vix dicta scaevola, has dicat verterem at, ad mel verear facilis interpretaris. An explicari iracundia neglegentur sea, sed cu quot neglegentur.</p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/modules/demo1.page/demo1.page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/demo1.page/demo1.page.module.ts ***!
  \*********************************************************/
/*! exports provided: Demo1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo1PageModule", function() { return Demo1PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _demo1_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo1.page */ "./src/app/modules/demo1.page/demo1.page.ts");
/* harmony import */ var _cde_gallery_flip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cde-gallery-flip */ "./src/app/modules/cde-gallery-flip/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Demo1PageModule = /** @class */ (function () {
    function Demo1PageModule() {
    }
    Demo1PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _cde_gallery_flip__WEBPACK_IMPORTED_MODULE_3__["CdeGalleryFlipModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]
            ],
            declarations: [
                _demo1_page__WEBPACK_IMPORTED_MODULE_2__["Demo1Page"]
            ]
        })
    ], Demo1PageModule);
    return Demo1PageModule;
}());



/***/ }),

/***/ "./src/app/modules/demo1.page/demo1.page.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/demo1.page/demo1.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host cde-gallery-flip {\n  height: 35%; }\n"

/***/ }),

/***/ "./src/app/modules/demo1.page/demo1.page.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/demo1.page/demo1.page.ts ***!
  \**************************************************/
/*! exports provided: Demo1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo1Page", function() { return Demo1Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../images */ "./src/images.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Demo1Page = /** @class */ (function () {
    function Demo1Page() {
        this.images = _images__WEBPACK_IMPORTED_MODULE_1__["images"];
    }
    Demo1Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-demo1',
            template: __webpack_require__(/*! ./demo1.page.html */ "./src/app/modules/demo1.page/demo1.page.html"),
            styles: [__webpack_require__(/*! ./demo1.page.scss */ "./src/app/modules/demo1.page/demo1.page.scss")],
        })
    ], Demo1Page);
    return Demo1Page;
}());



/***/ }),

/***/ "./src/app/modules/demo1.page/index.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/demo1.page/index.ts ***!
  \*********************************************/
/*! exports provided: Demo1PageModule, Demo1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _demo1_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo1.page.module */ "./src/app/modules/demo1.page/demo1.page.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Demo1PageModule", function() { return _demo1_page_module__WEBPACK_IMPORTED_MODULE_0__["Demo1PageModule"]; });

/* harmony import */ var _demo1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo1.page */ "./src/app/modules/demo1.page/demo1.page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Demo1Page", function() { return _demo1_page__WEBPACK_IMPORTED_MODULE_1__["Demo1Page"]; });






/***/ }),

/***/ "./src/app/modules/demo2.page/demo2.page.html":
/*!****************************************************!*\
  !*** ./src/app/modules/demo2.page/demo2.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"list\">\n    <div *ngFor=\"let item of list\">\n      <cde-gallery-flip [images]=\"item.images\"\n                        [blockMaxWidth]=\"100\"\n                        [blockMaxHeight]=\"100\"\n                        [flipSpeed]=\"200\"\n                        [waitTime]=\"2000\">\n      </cde-gallery-flip>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/modules/demo2.page/demo2.page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/demo2.page/demo2.page.module.ts ***!
  \*********************************************************/
/*! exports provided: Demo2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo2PageModule", function() { return Demo2PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _demo2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo2.page */ "./src/app/modules/demo2.page/demo2.page.ts");
/* harmony import */ var _cde_gallery_flip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cde-gallery-flip */ "./src/app/modules/cde-gallery-flip/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Demo2PageModule = /** @class */ (function () {
    function Demo2PageModule() {
    }
    Demo2PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _cde_gallery_flip__WEBPACK_IMPORTED_MODULE_4__["CdeGalleryFlipModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _demo2_page__WEBPACK_IMPORTED_MODULE_3__["Demo2Page"]
            ]
        })
    ], Demo2PageModule);
    return Demo2PageModule;
}());



/***/ }),

/***/ "./src/app/modules/demo2.page/demo2.page.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/demo2.page/demo2.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .list {\n  display: flex;\n  flex-wrap: wrap; }\n  :host .list > div {\n    background: red;\n    width: 100%;\n    height: 300px; }\n  :host .list > div cde-gallery-flip {\n      height: 300px; }\n"

/***/ }),

/***/ "./src/app/modules/demo2.page/demo2.page.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/demo2.page/demo2.page.ts ***!
  \**************************************************/
/*! exports provided: Demo2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo2Page", function() { return Demo2Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../images */ "./src/images.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Demo2Page = /** @class */ (function () {
    function Demo2Page() {
        this.list = [];
        var getRandomImage = function () { return _images__WEBPACK_IMPORTED_MODULE_1__["images"][Math.floor(Math.random() * _images__WEBPACK_IMPORTED_MODULE_1__["images"].length)]; };
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-demo2',
            template: __webpack_require__(/*! ./demo2.page.html */ "./src/app/modules/demo2.page/demo2.page.html"),
            styles: [__webpack_require__(/*! ./demo2.page.scss */ "./src/app/modules/demo2.page/demo2.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], Demo2Page);
    return Demo2Page;
}());



/***/ }),

/***/ "./src/app/modules/demo2.page/index.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/demo2.page/index.ts ***!
  \*********************************************/
/*! exports provided: Demo2PageModule, Demo2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _demo2_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo2.page.module */ "./src/app/modules/demo2.page/demo2.page.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Demo2PageModule", function() { return _demo2_page_module__WEBPACK_IMPORTED_MODULE_0__["Demo2PageModule"]; });

/* harmony import */ var _demo2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo2.page */ "./src/app/modules/demo2.page/demo2.page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Demo2Page", function() { return _demo2_page__WEBPACK_IMPORTED_MODULE_1__["Demo2Page"]; });






/***/ }),

/***/ "./src/app/modules/tabs.page/tabs.page.html":
/*!**************************************************!*\
  !*** ./src/app/modules/tabs.page/tabs.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab label=\"Header\"\n           icon=\"ios-albums\"\n           href=\"/tabs/(demo1:demo1)\">\n    <ion-router-outlet name=\"demo1\">\n    </ion-router-outlet>\n  </ion-tab>\n  <ion-tab label=\"List\"\n           icon=\"md-apps\"\n           href=\"/tabs/(demo2:demo2)\">\n    <ion-router-outlet name=\"demo2\">\n    </ion-router-outlet>\n  </ion-tab>\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/modules/tabs.page/tabs.page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/tabs.page/tabs.page.module.ts ***!
  \*******************************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page */ "./src/app/modules/tabs.page/tabs.page.ts");
/* harmony import */ var _demo1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demo1.page */ "./src/app/modules/demo1.page/index.ts");
/* harmony import */ var _demo2_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demo2.page */ "./src/app/modules/demo2.page/index.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: '/tabs/(demo1:demo1)',
        pathMatch: 'full'
    },
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__["TabsPage"],
        children: [
            {
                path: 'demo1',
                outlet: 'demo1',
                component: _demo1_page__WEBPACK_IMPORTED_MODULE_3__["Demo1Page"]
            },
            {
                path: 'demo2',
                outlet: 'demo2',
                component: _demo2_page__WEBPACK_IMPORTED_MODULE_4__["Demo2Page"]
            }
        ]
    }
];
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _demo1_page__WEBPACK_IMPORTED_MODULE_3__["Demo1PageModule"],
                _demo2_page__WEBPACK_IMPORTED_MODULE_4__["Demo2PageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: [
                _tabs_page__WEBPACK_IMPORTED_MODULE_2__["TabsPage"]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/modules/tabs.page/tabs.page.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/tabs.page/tabs.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/tabs.page/tabs.page.ts":
/*!************************************************!*\
  !*** ./src/app/modules/tabs.page/tabs.page.ts ***!
  \************************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/modules/tabs.page/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/modules/tabs.page/tabs.page.scss")],
        })
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/images.ts":
/*!***********************!*\
  !*** ./src/images.ts ***!
  \***********************/
/*! exports provided: images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "images", function() { return images; });
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


/***/ })

}]);
//# sourceMappingURL=modules-tabs-page.js.map