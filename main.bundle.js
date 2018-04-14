webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_post_url__ = __webpack_require__("./src/app/shared/post.url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_new_post_new_component__ = __webpack_require__("./src/app/post-new/post-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_list_post_list_component__ = __webpack_require__("./src/app/post-list/post-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    // Home
    { path: '', redirectTo: __WEBPACK_IMPORTED_MODULE_2__shared_post_url__["a" /* postsListUrl */], pathMatch: 'full' },
    // Post - List
    { path: __WEBPACK_IMPORTED_MODULE_2__shared_post_url__["a" /* postsListUrl */], component: __WEBPACK_IMPORTED_MODULE_4__post_list_post_list_component__["a" /* PostListComponent */] },
    // Post - New
    { path: __WEBPACK_IMPORTED_MODULE_2__shared_post_url__["b" /* postsNewUrl */], component: __WEBPACK_IMPORTED_MODULE_3__post_new_post_new_component__["a" /* PostNewComponent */] },
    // Page Not Found to 'Post - List'
    { path: '**', redirectTo: __WEBPACK_IMPORTED_MODULE_2__shared_post_url__["a" /* postsListUrl */], pathMatch: 'full' }
];
var AppRouteModule = /** @class */ (function () {
    function AppRouteModule() {
    }
    AppRouteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRouteModule);
    return AppRouteModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n\n    <ul class=\"nav navbar-nav\">\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/posts\">Posts</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/new\">Nouveau Post</a>\n      </li>\n    </ul>\n    \n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n      <router-outlet></router-outlet>\n  </div> \n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var config = {
            apiKey: "AIzaSyC2uz0gkNWajVS_zmQH5fEgG5JRe5o1bSI",
            authDomain: "httpclientdemo-22a68.firebaseapp.com",
            databaseURL: "https://httpclientdemo-22a68.firebaseio.com",
            projectId: "httpclientdemo-22a68",
            storageBucket: "httpclientdemo-22a68.appspot.com",
            messagingSenderId: "427216420458"
        };
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"](config);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_new_post_new_component__ = __webpack_require__("./src/app/post-new/post-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_post_services__ = __webpack_require__("./src/app/shared/post.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_list_post_list_component__ = __webpack_require__("./src/app/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_list_post_list_item_post_list_item_component__ = __webpack_require__("./src/app/post-list/post-list-item/post-list-item.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__post_list_post_list_component__["a" /* PostListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__post_new_post_new_component__["a" /* PostNewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__post_list_post_list_item_post_list_item_component__["a" /* PostListItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRouteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__shared_post_services__["a" /* PostService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/post-list/post-list-item/post-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<li class=\"row\" [ngClass]=\"{'list-group-item': true, 'list-group-item-success': post.loveIts > 0, 'list-group-item-danger': post.loveIts < 0}\">\n  \n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"pull-left\"><b>{{ post.title }}</b></h2>\n    <span class=\"pull-right\"><i>{{ post.created_at | date: 'MM/dd/yyyy, hh:mm a' }}</i></span>\n  </div>\n  <p class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">{{ post.content }}</p>\n  \n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <div class=\"pull-left\">\n      <button type=\"button\" class=\"btn btn-success\" (click)='onIncLikeIts()'>Like It</button>\n      <button type=\"button\" class=\"btn btn-danger\" (click)='onDecLikeIts()'>Don't Like It</button>\n    </div>\n    <div class=\"pull-right\">\n      <button type=\"button\" class=\"btn btn-danger\" (click)='onDelete()'>Supprimer post</button>\n    </div>\n  </div>\n</li>\n\n<br/>"

/***/ }),

/***/ "./src/app/post-list/post-list-item/post-list-item.component.scss":
/***/ (function(module, exports) {

module.exports = "li {\n  margin-bottom: 5px; }\n"

/***/ }),

/***/ "./src/app/post-list/post-list-item/post-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_post_models__ = __webpack_require__("./src/app/shared/post.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_post_services__ = __webpack_require__("./src/app/shared/post.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostListItemComponent = /** @class */ (function () {
    function PostListItemComponent(postService) {
        this.postService = postService;
    }
    PostListItemComponent.prototype.ngOnInit = function () {
    };
    PostListItemComponent.prototype.onIncLikeIts = function () { this.postService.updateLoveIts(this.indexPost, __WEBPACK_IMPORTED_MODULE_2__shared_post_services__["c" /* incrementLoveIts */]); };
    PostListItemComponent.prototype.onDecLikeIts = function () { this.postService.updateLoveIts(this.indexPost, __WEBPACK_IMPORTED_MODULE_2__shared_post_services__["b" /* decrementLoveIts */]); };
    PostListItemComponent.prototype.onDelete = function () { this.postService.removePost(this.indexPost); };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_post_models__["a" /* Post */])
    ], PostListItemComponent.prototype, "post", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], PostListItemComponent.prototype, "indexPost", void 0);
    PostListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'post-list-item',
            template: __webpack_require__("./src/app/post-list/post-list-item/post-list-item.component.html"),
            styles: [__webpack_require__("./src/app/post-list/post-list-item/post-list-item.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_post_services__["a" /* PostService */]])
    ], PostListItemComponent);
    return PostListItemComponent;
}());



/***/ }),

/***/ "./src/app/post-list/post-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2><strong>Posts</strong></h2>\n<hr/>\n\n<div class=\"alert alert-info\" role=\"alert\" *ngIf=\"posts.length == 0\">\n  <strong>Information !</strong> Aucun post n'a été trouvé.\n</div>\n\n<ul class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 list-group\">\n  \n  <post-list-item \n  *ngFor=\"let post of posts; let i = index\" \n  [post]='post' [indexPost]=\"i\"></post-list-item >\n\n</ul>\n"

/***/ }),

/***/ "./src/app/post-list/post-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post-list/post-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_post_services__ = __webpack_require__("./src/app/shared/post.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostListComponent = /** @class */ (function () {
    function PostListComponent(postService) {
        this.postService = postService;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postSubscription = this.postService.postSubject.subscribe(function (posts) { _this.posts = posts; });
        this.postService.getPosts();
        // Doublon ?
        this.postService.emitPosts();
    };
    PostListComponent.prototype.onRemovePost = function (index) { this.postService.removePost(index); };
    PostListComponent.prototype.ngOnDestroy = function () { this.postSubscription.unsubscribe(); };
    PostListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'post-list',
            template: __webpack_require__("./src/app/post-list/post-list.component.html"),
            styles: [__webpack_require__("./src/app/post-list/post-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_post_services__["a" /* PostService */]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/post-new/post-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n\n    <form role=\"form\" [formGroup]=\"postForm\" (ngSubmit)=\"onSavePost()\">\n      <legend><strong>Nouveau Post</strong></legend>\n    \n      <div class=\"form-group\">\n        <label for=\"title\">Titre</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" formControlName=\"title\" \n          placeholder=\"Ecrire un titre ici.\">\n      </div>      \n    \n      <div class=\"form-group\">\n        <label for=\"content\">Texte</label>\n        <textarea type=\"text\" class=\"form-control\" id=\"content\" formControlName=\"content\" \n        rows=\"3\" placeholder=\"Ecrire votre text ici...\"></textarea>\n      </div>  \n    \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"postForm.invalid\">Soumettre</button>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/post-new/post-new.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post-new/post-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_post_services__ = __webpack_require__("./src/app/shared/post.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_post_models__ = __webpack_require__("./src/app/shared/post.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_post_url__ = __webpack_require__("./src/app/shared/post.url.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostNewComponent = /** @class */ (function () {
    function PostNewComponent(formBuilder, postService, router) {
        this.formBuilder = formBuilder;
        this.postService = postService;
        this.router = router;
    }
    PostNewComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    PostNewComponent.prototype.initForm = function () {
        this.postForm = this.formBuilder.group({
            title: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            content: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]]
        });
    };
    PostNewComponent.prototype.onSavePost = function () {
        var newPost = new __WEBPACK_IMPORTED_MODULE_4__shared_post_models__["a" /* Post */](this.postForm.get('title').value, this.postForm.get('content').value, 0, new Date().getTime());
        this.postService.createPost(newPost);
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__shared_post_url__["a" /* postsListUrl */]]);
    };
    PostNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'post-new',
            template: __webpack_require__("./src/app/post-new/post-new.component.html"),
            styles: [__webpack_require__("./src/app/post-new/post-new.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__shared_post_services__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], PostNewComponent);
    return PostNewComponent;
}());



/***/ }),

/***/ "./src/app/shared/post.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(title, content, loveIts, 
        // number for store date on firebase
        created_at) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.created_at = created_at;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/shared/post.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return incrementLoveIts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return decrementLoveIts; });
/* unused harmony export firebasePostsTable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var incrementLoveIts = true;
var decrementLoveIts = false;
var firebasePostsTable = 'posts';
var PostService = /** @class */ (function () {
    function PostService() {
        this.posts = [];
        this.postSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.firebaseStorageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(firebasePostsTable);
    }
    PostService.prototype.emitPosts = function () { this.postSubject.next(this.posts.slice()); };
    PostService.prototype.savePostsToFirebase = function () { this.firebaseStorageRef.set(this.posts); };
    PostService.prototype.getPosts = function () {
        var _this = this;
        this.firebaseStorageRef.on('value', function (data) {
            _this.posts = data.val() ? data.val() : [];
            _this.emitPosts();
        });
    };
    PostService.prototype.updatePosts = function () {
        this.savePostsToFirebase();
        this.emitPosts();
    };
    PostService.prototype.createPost = function (post) {
        this.posts.push(post);
        this.updatePosts();
    };
    PostService.prototype.removePost = function (index) {
        this.posts.splice(index, 1);
        this.updatePosts();
    };
    PostService.prototype.updateLoveIts = function (index, mode) {
        if (mode === incrementLoveIts) {
            this.posts[index].loveIts++;
        }
        else if (mode === decrementLoveIts) {
            this.posts[index].loveIts--;
        }
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/shared/post.url.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return postsListUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return postsNewUrl; });
var postsListUrl = 'posts';
var postsNewUrl = 'new';


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map