(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n<div class=\"fixed-bottom\">\n\n  <div class=\"row footerTag\">\n    <footer>©Copyright 2021 Patrick Luu</footer>\n  </div>  \n</div>\n\n<!-- <div class=\"container\">\n  <div class=\"header\">\n  <nav>\n    <app-header></app-header>\n  </nav>\n  </div>\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n  <div class=\"footer\">\n    <h2>footer</h2>\n  </div>\n</div> -->\n\n\n\n<!-- \n<app-post-create></app-post-create>\n<app-post-list></app-post-list> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n    <thead>\n      <tr>\n        <th>Item</th>\n        <th>Quantity</th>\n        <th>Price</th>\n        <th>Delete</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of postsService.getCart(); index as i\">\n        <td>{{item.name}}</td>\n        <td>{{item.quantity}}</td>\n        <td>{{item.price | currency}}</td>\n        <td>\n            <button (click)=\"removeItemCart(i)\" class=\"btn btn-warning mb-1 btn-sm\">\n              Delete\n            </button><br>\n        </td>\n      </tr>   \n      <tr>\n        <td><b>Total</b></td>\n        <td></td>\n        <td><b>{{ postsService.getTotal() | currency }}</b></td>\n      </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form action=\"action_page.php\">\n  \n      <label for=\"fname\">First Name</label>\n      <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"Your name..\">\n  \n      <label for=\"lname\">Last Name</label>\n      <input type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"Your last name..\">\n  \n      <label for=\"lname\">Email</label>\n      <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"Your email address..\">\n  \n      <label for=\"subject\">Subject</label>\n      <textarea id=\"subject\" name=\"subject\" placeholder=\"Write something..\" style=\"height:200px\"></textarea>\n  \n      <input type=\"submit\" value=\"Submit\">\n  \n    </form>\n  </div>\n\n\n\n\n\n\n<!-- <div class=\"row bodyItem\">\n    <div class=\"col aboutMe\">\n        <h3 id=\"aboutMeText\">Contact</h3>\n        <hr>\n        \n        <form action=\"mailto:someone@example.com\" method=\"post\" enctype=\"text/plain\">\n          Name:<br>\n          <input type=\"text\" name=\"name\"><br>\n          E-mail:<br>\n          <input type=\"text\" name=\"mail\"><br>\n          Comment:<br>\n          <input type=\"text\" name=\"comment\" size=\"50\"><br><br>\n          <input type=\"submit\" value=\"Send\">\n          <input type=\"reset\" value=\"Reset\">\n        </form>\n    </div>\n<div> -->\n   \n\n\n\n<!-- <p>contact-us works!</p>\n\n\n<div class=\"row bodyItem\">\n    <div class=\"col aboutMe\">\n      <h3 id=\"aboutMeText\">Contact</h3>\n      <hr>\n      \n      <form action=\"mailto:someone@example.com\" method=\"post\" enctype=\"text/plain\">\n        Name:<br>\n        <input type=\"text\" name=\"name\"><br>\n        E-mail:<br>\n        <input type=\"text\" name=\"mail\"><br>\n        Comment:<br>\n        <input type=\"text\" name=\"comment\" size=\"50\"><br><br>\n        <input type=\"submit\" value=\"Send\">\n        <input type=\"reset\" value=\"Reset\">\n      </form>\n    </div>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{errorMessage}}</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>footer works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/googel-payment/googel-payment.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/googel-payment/googel-payment.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>googel-payment works!</p>\n\n\n\n<div id=\"checkout\">\n    <button id=\"buyButton\">Checkout</button>\n</div>\n  \n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- testing nav  Amazon look -->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\">Luu's Shop</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <div class=\"header_search\">\n      <input class=\"header_searchInput\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <svg width=\"2em\" height=\"2em\" viewBox=\"0 0 16 16\" class=\"bi bi-search header_searchIcon\" fill=\"currentColor\"\n        xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\"\n          d=\"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z\" />\n        <path fill-rule=\"evenodd\"\n          d=\"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z\" />\n      </svg>\n    </div>\n    <div class=\"header_nav\">\n      <!-- account and listing -->\n      <div class=\"dropdown\">\n         <a class=\"header_link dropbtn\">\n          <div class=\"header_option\">\n            <span *ngIf=\"!this.hardcodedAuthenticationService.isUserLoggedIn()\" class=\"header_optionLineOne\">Hello Sign in</span>\n            <span *ngIf=\"this.hardcodedAuthenticationService.isUserLoggedIn()\" class=\"header_optionLineOne\">Hello {{postsService.getLoginUserInfo().name? postsService.getLoginUserInfo().name : name2}}</span>\n            <span *ngIf=\"!this.hardcodedAuthenticationService.isUserLoggedIn()\" class=\"header_optionLineTwo\">Sign In</span>\n            <span *ngIf=\"this.hardcodedAuthenticationService.isUserLoggedIn()\" class=\"header_optionLineTwo\">Account & Lists</span>\n          </div>\n        </a>\n        <div class=\"dropdown-content\">\n          <a routerLink=\"/shop\" class=\"nav-link\">Shop</a>\n          <a *ngIf=\"!this.hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/login\" class=\"nav-link\">Sign In</a>\n          <a *ngIf=\"this.hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/logout\" class=\"nav-link\">Sign Out</a>\n        </div>\n      </div>\n     \n     <!-- seller account  -->\n      <div class=\"dropdown\">\n        <a class=\"header_link\">\n          <div class=\"header_option\">\n            <span class=\"header_optionLineOne\">Seller</span>\n            <span class=\"header_optionLineTwo\">Account</span>\n          </div>\n        </a>\n        <div class=\"dropdown-content\">\n          <a routerLink=\"/listItem\" class=\"nav-link\">Add Item</a>\n          <a routerLink=\"/remove\" class=\"nav-link\">Remove Item</a>\n          <a routerLink=\"/success\" class=\"nav-link\">Payment Success</a>\n        </div>\n      </div>\n\n\n      <a routerLink=\"/contactUs\" class=\"header_link\">\n        <div class=\"header_option\">\n            <span class=\"header_optionLineOne\">Contact</span>\n            <span class=\"header_optionLineTwo\">Us</span>\n        </div>\n      </a>\n      <a routerLink=\"/cart\">\n        <div class=\"header_optionBasket\">\n          <svg width=\"2em\" height=\"2em\" viewBox=\"0 0 16 16\" class=\"bi bi-cart cart\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\" d=\"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\"/>\n          </svg>\n          <span class=\"cart mr-3 header_optionLineTwo\">{{postsService.getCart().length > 0 ? postsService.getCart().length : null}}</span>\n        </div>\n      </a>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/list-item/list-item.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list-item/list-item.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isDisable\" class=\"d-flex justify-content-center spinnerDiv\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n\n\n<h2 class=\"m-3\">Item list for sale</h2>\n\n<form class=\"addItem m-3\">\n    <div class=\"form-group\">\n        <label>Item Name</label>\n        <input type=\"text\" [(ngModel)]='item.name' name='name' class=\"form-control\" placeholder=\"Item Name\">\n    </div>\n    <div class=\"form-group\">\n        <label>Description</label>\n        <input type=\"text\" [(ngModel)]='item.description' name='description' class=\"form-control\"\n            placeholder=\"Description\">\n    </div>\n    <div class=\"form-group\">\n        <label>Price</label>\n        <input type=\"number\" [(ngModel)]='item.price' name='price' class=\"form-control\" placeholder=\"Price\">\n    </div>\n    <div class=\"form-group\">\n        <label>Quantity</label>\n        <input type=\"number\" [(ngModel)]='item.quantity' name='quantity' class=\"form-control\" placeholder=\"Quantity\">\n    </div>\n    <div class=\"form-group\">\n        <label>Seller Name</label>\n        <input type=\"text\" [(ngModel)]='item.seller' name='seller' class=\"form-control\" placeholder=\"Seller Name\">\n    </div>\n    <div class=\"form-group\">\n        <label>Phone No.</label>\n        <input type=\"text\" [(ngModel)]='item.phone' name='phone' class=\"form-control\" placeholder=\"Phone No.\">\n    </div>\n    <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" [(ngModel)]='item.email' name='email' class=\"form-control\" placeholder=\"Email\">\n    </div>\n    <div class=\"form-group\">\n        <label>Img Url</label>\n        <input type=\"text\" [(ngModel)]='item.imageUrl' disabled=\"disabled\" name='url' class=\"form-control\" placeholder=\"Url\">\n    </div>\n</form>\n\n<!-- testing upload pic -->\n<div class=\"container row\">\n    <div class=\"col-md-12\">\n        <h1>Upload Image</h1>\n    </div>\n</div>\n<div class=\"container row\">\n    <div class=\"col-md-6\">\n        <input type=\"file\" [disabled] =\"isDisable\" (change)=\"onFileChanged($event)\">\n    </div>\n    <div class=\"col-md-6\">\n        <input type=\"button\" [disabled] =\"isDisable\" (click)=\"onUploadService()\" value=\"Upload File\">\n    </div>\n</div>\n\n\n<button (click)=\"addItem()\" [disabled] =\"isDisable\" class=\"btn btn-success m-3\">\n    Submit\n</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"logIn.isDisable\" class=\"d-flex justify-content-center\">\n  <div class=\"spinner-border\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n\n\n\n<div *ngIf=\"logIn.isInvalidLogin\" class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n  Invalid email and password. Please enter the valid info.\n</div>\n\n<div *ngIf=\"logIn.userCreated\" class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n  Profile create, please login.\n</div>\n\n<div *ngIf=\"!logIn.isCreateNewAccount\" class=\"body\">\n      <div class=\"jumbotron\">\n        <h2 style=\"text-align: center;\">Sign In</h2>\n        <hr>\n        <form > \n            <div class=\"form-group\">\n              <input class=\"form-control\" [(ngModel)]=\"user.name\" placeholder=\"Email\" name=\"email\" id=\"email\">\n            </div>\n            <div class=\"form-group\">\n              <input type=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\" name=\"password\" class=\"form-control\" id=\"exampleInputPassword1\">\n            </div>\n            <div class=\"form-group form-check\">\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n              <label class=\"form-check-label\" for=\"exampleCheck1\">Remember me</label>\n            </div>\n            <button (click) = \"checkLoginBash()\" type=\"submit\" class=\"btn btn-primary\">Sign In</button>\n            <p>Not a member?<button (click)=\"setCreateAccount()\" mat-button color=\"primary\">Create an Account</button></p> \n          </form>\n      </div>\n</div>\n\n<div *ngIf=\"logIn.isCreateNewAccount\">\n  <div class=\"jumbotron\" style=\"width: 400px; margin: 0 auto 0 auto;\">\n    <h2 style=\"text-align: center;\">Create Account</h2>\n    \n    <hr>\n\n    <form > \n        <div class=\"form-group\">\n          <input class=\"form-control\" [(ngModel)]=\"user.name\" placeholder=\"Name\" name=\"name\" id=\"name\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\" name=\"password\" class=\"form-control\" id=\"exampleInputPassword1\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"user.email\" placeholder=\"Email\" name=\"email\" class=\"form-control\" id=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"user.phone\" placeholder=\"Phone\" name=\"phone\" class=\"form-control\" id=\"phone\">\n        </div>\n        <button (click)=\"createNewUser()\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logout/logout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logout/logout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<H1>You are logged out</H1>\n<div class=\"container\">\n    Thank You For Using Our Application.\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manual-paypal/manual-paypal.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manual-paypal/manual-paypal.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>Please Paypal me @ PatLuu66@gmail.com. Thank You!</p> -->\n<p>Please send payment to my paypal account patluu66@gmail.com. Thanks</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/paypal-page/paypal-page.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/paypal-page/paypal-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Please send payment to my paypal account patluu66@gmail.com. Thanks</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/post-create/post-create.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/post-create/post-create.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n  <form (submit)=\"onAddPostSpring(postForm)\" #postForm=\"ngForm\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"text\"\n        name=\"name\"\n        ngModel\n        required\n        minlength=\"3\"\n        placeholder=\"Name\"\n        #title=\"ngModel\">\n      <mat-error *ngIf=\"title.invalid\">Please enter a post title.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <textarea\n        matInput\n        rows=\"4\"\n        name=\"description\"\n        ngModel\n        required\n        placeholder=\"Post Content\"\n        #content=\"ngModel\"></textarea>\n      <mat-error *ngIf=\"content.invalid\">Please enter a post title.</mat-error>\n    </mat-form-field>\n\n    <button\n      mat-raised-button\n      color=\"accent\"\n      type=\"submit\" style=\"margin: 0 10px 0 10px\">Save Post</button>\n  </form>\n</mat-card>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/post-list/post-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/post-list/post-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"welcomeSign\">Hello {{user2}}!</p>\n\n\n<div *ngIf=\"show\">\n  <!-- testing on zillow data from service call -->\n  <div class=\"houseSearchResult mb-5\">\n    <h2>{{postsService.getZillowData().price | currency}}</h2> \n    <span>{{postsService.getZillowData().street + \", \" + postsService.getZillowData().city + \", \" + postsService.getZillowData().state}}</span><br>\n    <span> High: {{postsService.getZillowData().highPrice | currency}} |</span>\n    <span> Low: {{postsService.getZillowData().lowPrice | currency}}</span><br>\n    <span>ID: {{postsService.getZillowData()._id}} |</span>\n    <span> Last Updated: {{postsService.getZillowData().lastUpdate}}</span><br>\n    <a mat-stroked-button href={{postsService.getZillowData().homeDetail}} target=\"_blank\">Home Detail</a>\n  </div>\n\n\n  <!-- testing mobile responsive table  -->\n  <div class=\"table\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Comment</th>\n          <th>Name</th>\n          <th>Date</th>\n          <th>Edit/Delete</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let post of postSpring\">\n          <td>{{post.description}}</td>\n          <td>{{post.name}}</td>\n          <td>{{post.date | date}}</td>\n          \n          <!-- testing for button hide -->\n          <td *ngIf=\"user2 === post.name\">\n            <button (click)=\"onUpdateSpringPost(post.id)\" class=\"btn btn-primary mb-1 btn-sm\">\n              Edit\n            </button><br>\n            <button (click)=\"onDeleteSpringPost(post.id)\" class=\"btn btn-danger btn-sm\">\n              Delete\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <mat-card>\n    <form (submit)=\"onAddPostSpring(postForm)\" #postForm=\"ngForm\">\n      <span class=\"text-muted\">{{user2}}</span>\n\n      <mat-form-field>\n        <textarea matInput rows=\"4\" name=\"description\" ngModel required placeholder=\"Post Comment\"\n          #content=\"ngModel\"></textarea>\n        <mat-error *ngIf=\"content.invalid\">Please enter a post title.</mat-error>\n      </mat-form-field><br>\n\n      <button mat-raised-button color=\"primary\" type=\"submit\" style=\"margin: 0 10px 0 10px\">Submit</button>\n      <button mat-raised-button color=\"primary\" (click)=\"newSearch()\" style=\"margin: 0 10px 0 10px\">New Search</button>\n\n\n    </form>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/real-estate/real-estate.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/real-estate/real-estate.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- testing for import object from service   -->\n<div class=\"houseSearch\" *ngIf=\"postsService.getShowSearchResult().isSearching\">\n  <div *ngIf=\"searchResult.isInvalidSearch\" class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n    The address is invalid on home for sale. Please enter the valid address.\n  </div>\n  <div *ngIf=\"searchResult.isInputAddressInvalid\" class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n    Invalid address format: street, city, state\n  </div>\n\n  <h1>BASH</h1>\n  <p>Please enter the address to search for a home for sale.</p>\n\n  <div class=\"example-container\">\n    <input type=\"text\" [(ngModel)]=\"search\" class=\"form-control\" placeholder=\"Example: 888 King Ln, Irving, Texas\">\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"onGetZillowAddress()\">Search</button>\n  </div>\n</div>\n\n<div *ngIf=\"postsService.getShowSearchResult().showResult\">\n  <app-post-list [zillowObj]=\"homeInfo3\" homeInfoZillow=\"{{homeInfo3.street}}\" bankName=\"RBC\"></app-post-list>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/remove-item/remove-item.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/remove-item/remove-item.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>remove-item works!</p> -->\n\n<div *ngIf=\"isDisable\" class=\"d-flex justify-content-center spinnerDiv\">\n  <div class=\"spinner-border\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n\n<!-- testing from service call -->\n<div class=\"table\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\">No.</th>\n          <th scope=\"col\">Item</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">Seller</th>\n          <th scope=\"col\">Quantity</th>\n          <th scope=\"col\">Price</th>\n          <th>Cart</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of getProductListing(); index as i\">\n          <td>{{i + 1}}</td>\n          <td>{{item.name}}</td>\n          <td>{{item.description}}</td>\n          <td>{{item.seller}}</td>\n          <td>{{item.quantity}}</td>\n          <td>{{item.price | currency}}</td>\n          <td>\n            <button (click)=\"removeItem(item, index)\" class=\"btn btn-warning mb-1 btn-sm\">\n              Remove\n            </button><br>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shop/shop.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shop/shop.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Checkout Items</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <!-- checkout cart   -->\n        <app-cart></app-cart>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <!-- <button (click)=\"submitPayment()\" class=\"btn btn-primary mb-1\">   \n          Pay with Paypal\n        </button><br> -->\n\n        <!-- <a routerLink=\"/listItem\"><button class=\"btn btn-primary mb-1\">   \n          Pay with Paypal\n        </button></a><br> -->\n\n        <button data-dismiss=\"modal\" (click)=\"manualPaypal()\" class=\"btn btn-primary mb-1\">   \n          Pay with Paypal\n        </button><br>\n      </div>\n    </div>\n  </div>\n</div><br>\n\n\n\n<!-- new css items   -->\n<div class=\"container2\">\n  <div class=\"responsive\" *ngFor=\"let item of getProductListing(); index as i\">\n    <div class=\"gallery\">\n      <a target=\"_blank\">\n        <!-- <img src={{item.imageUrl === \"\" ? \"https://imgur.com/zuk6E5V\" : item.imageUrl}} alt=\"Cinque Terre\" width=\"600\" height=\"400\"> -->\n        <!-- <img src={{item.imageUrl}} alt=\"Cinque Terre\" width=\"600\" height=\"400\"> -->\n        <img [src]=\"item.imageUrl === '' ? item.imageUrl : 'https://i.imgur.com/TAoOYGW.jpg'\">\n      </a>\n      <div class=\"desc\">\n        <span>{{i + 1}}. </span>\n        <span>{{item.name}}</span><br>\n        \n        <div class=\"rating\">\n          <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>\n        </div>\n        \n        <span>{{item.description}}</span><br>\n        <span>{{item.seller}}</span><br>\n        <span>{{item.quantity}} Qnty</span><br>\n        <span>{{item.price | currency}}</span><br>\n        <button (click)=\"addToCart2(item)\" class=\"btn btn-warning mb-1 btn-sm\" data-toggle=\"modal\"\n          data-target=\"#exampleModal\">\n          Add to Cart\n        </button><br>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/success-payment/success-payment.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/success-payment/success-payment.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Payment submitted successful!</p>\n\n\n<!-- <button (click)=\"sendEmail()\" class=\"btn btn-primary mb-1\">\n    Send Email\n</button><br> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo-edit/todo-edit.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo-edit/todo-edit.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Comment Edit</h1>\n\n<div class=\"container\">\n    <fieldset class=\"form-group\">\n        <label>Comment</label>\n        <input type=\"text\" [(ngModel)]=\"post.description\" class=\"form-control\" name=\"description\" required=\"required\">\n    </fieldset>\n    <fieldset class=\"form-group\">\n        <label>Today Date</label>\n        <input type=\"date\" \n            [ngModel]=\"post.date | date: 'yyyy-MM-dd'\"\n            (ngModelChange)=\"post.date = $event\" \n            class=\"form-control\" \n            name=\"targetDate\" \n            required=\"required\">\n    </fieldset>\n    <button class=\"btn btn-success\" (click)=\"savePost()\">Save</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todos/todos.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todos/todos.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>My Todo's</h1>\n\n<div class=\"container\">\n<table class=\"table\">\n    <thead>\n        <tr>\n            <th>Description</th>\n            <th>Target Date</th>\n            <th>Is Completed</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let todo of todos\">\n            <td>{{todo.description}}</td>\n            <td>{{todo.targetDate | date}}</td>\n            <td>{{todo.done}}</td>\n        </tr>\n    </tbody>\n</table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/update-bash/update-bash.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/update-bash/update-bash.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>update-bash works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wellcome/wellcome.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wellcome/wellcome.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-secondary\">Hello {{this.user2}}, welcome to BASH</h2>\n<p>Bash is an application that help home buying easy and affordable. Why rent when you could buy a share home?</p>\n<p>The platform help you connection with other potential housemate that willing to split the morgage and down payment of the house.</p>\n<button (click)=\"clickNext()\" class=\"btn btn-success\">Next</button>"

/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerTag {\n  background-color: black;\n  border-top: 10px solid #37475A;\n  margin-top: 20px;\n}\n\nfooter {\n  width: 100%;\n  text-align: center;\n  color: white;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n/* \n.container{\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.header{\n  flex-shrink: 0;\n  flex-grow: 0;\n  background: #039be5;\n  padding: 3px 5px;\n}\n.content{\n  flex-shrink: 1;\n  flex-grow: 1;\n  padding: 3px 5px;\n  position: relative;\n  overflow-y: auto;\n}\n\n.footer{\n  flex-shrink: 0;\n  flex-grow: 0;\n  background: #eee;\n  padding: 3px 15px;\n}\np {\n  font-family: Lato;\n}\n\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\n\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n} */\n\n/* main {\n  width: 80%;\n  margin: 1rem auto;\n} */\n\n/* For mobile phones: */\n\n/* [class*=\"col-\"] {\n  width: 100%;\n} */\n\n/* @media only screen and (min-width: 768px) {\n  .col-1 {width: 8.33%;}\n  .col-2 {width: 16.66%;}\n  .col-3 {width: 25%;}\n  .col-4 {width: 33.33%;}\n  .col-5 {width: 41.66%;}\n  .col-6 {width: 50%;}\n  .col-7 {width: 58.33%;}\n  .col-8 {width: 66.66%;}\n  .col-9 {width: 75%;}\n  .col-10 {width: 83.33%;}\n  .col-11 {width: 91.66%;}\n  .col-12 {width: 100%;}\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpREc7O0FBSUg7OztHQUdHOztBQUVILHVCQUF1Qjs7QUFDdkI7O0dBRUc7O0FBRUg7Ozs7Ozs7Ozs7Ozs7R0FhRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlclRhZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMzNzQ3NUE7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4vKiBcbi5jb250YWluZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaGVhZGVye1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1ncm93OiAwO1xuICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICBwYWRkaW5nOiAzcHggNXB4O1xufVxuLmNvbnRlbnR7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmZvb3RlcntcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtZ3JvdzogMDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgcGFkZGluZzogM3B4IDE1cHg7XG59XG5wIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG59XG5cbm5hdiBhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbm5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XG4gIGNvbG9yOiAjNjA3RDhCO1xufVxubmF2IGE6aG92ZXIge1xuICBjb2xvcjogIzAzOWJlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbn1cbm5hdiBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufSAqL1xuXG5cblxuLyogbWFpbiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xufSAqL1xuXG4vKiBGb3IgbW9iaWxlIHBob25lczogKi9cbi8qIFtjbGFzcyo9XCJjb2wtXCJdIHtcbiAgd2lkdGg6IDEwMCU7XG59ICovXG5cbi8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbC0xIHt3aWR0aDogOC4zMyU7fVxuICAuY29sLTIge3dpZHRoOiAxNi42NiU7fVxuICAuY29sLTMge3dpZHRoOiAyNSU7fVxuICAuY29sLTQge3dpZHRoOiAzMy4zMyU7fVxuICAuY29sLTUge3dpZHRoOiA0MS42NiU7fVxuICAuY29sLTYge3dpZHRoOiA1MCU7fVxuICAuY29sLTcge3dpZHRoOiA1OC4zMyU7fVxuICAuY29sLTgge3dpZHRoOiA2Ni42NiU7fVxuICAuY29sLTkge3dpZHRoOiA3NSU7fVxuICAuY29sLTEwIHt3aWR0aDogODMuMzMlO31cbiAgLmNvbC0xMSB7d2lkdGg6IDkxLjY2JTt9XG4gIC5jb2wtMTIge3dpZHRoOiAxMDAlO31cbn0gKi8iXX0= */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _real_estate_real_estate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./real-estate/real-estate.component */ "./src/app/real-estate/real-estate.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _service_route_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/route-guard.service */ "./src/app/service/route-guard.service.ts");
/* harmony import */ var _wellcome_wellcome_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./wellcome/wellcome.component */ "./src/app/wellcome/wellcome.component.ts");
/* harmony import */ var _update_bash_update_bash_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./update-bash/update-bash.component */ "./src/app/update-bash/update-bash.component.ts");
/* harmony import */ var _todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./todo-edit/todo-edit.component */ "./src/app/todo-edit/todo-edit.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _googel_payment_googel_payment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./googel-payment/googel-payment.component */ "./src/app/googel-payment/googel-payment.component.ts");
/* harmony import */ var _success_payment_success_payment_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./success-payment/success-payment.component */ "./src/app/success-payment/success-payment.component.ts");
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./list-item/list-item.component */ "./src/app/list-item/list-item.component.ts");
/* harmony import */ var _remove_item_remove_item_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./remove-item/remove-item.component */ "./src/app/remove-item/remove-item.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _manual_paypal_manual_paypal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./manual-paypal/manual-paypal.component */ "./src/app/manual-paypal/manual-paypal.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _paypal_page_paypal_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./paypal-page/paypal-page.component */ "./src/app/paypal-page/paypal-page.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var appRoutes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'create', component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_7__["PostCreateComponent"] },
    { path: 'shop', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_21__["ShopComponent"] },
    // { path: 'dialog', component: DialogComponent },
    { path: 'manualPaypal', component: _manual_paypal_manual_paypal_component__WEBPACK_IMPORTED_MODULE_27__["ManualPaypalComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_17__["RouteGuardService"]] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_17__["RouteGuardService"]] },
    { path: 'remove', component: _remove_item_remove_item_component__WEBPACK_IMPORTED_MODULE_25__["RemoveItemComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_17__["RouteGuardService"]] },
    { path: 'listItem', component: _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_24__["ListItemComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_17__["RouteGuardService"]] },
    { path: 'success', component: _success_payment_success_payment_component__WEBPACK_IMPORTED_MODULE_23__["SuccessPaymentComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_17__["RouteGuardService"]] },
    { path: 'realEstate', component: _real_estate_real_estate_component__WEBPACK_IMPORTED_MODULE_12__["RealEstateComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_17__["RouteGuardService"]] },
    { path: 'list', component: _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_9__["PostListComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_17__["RouteGuardService"]] },
    { path: 'todos', component: _todos_todos_component__WEBPACK_IMPORTED_MODULE_14__["TodosComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_17__["RouteGuardService"]] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_16__["LogoutComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_17__["RouteGuardService"]] },
    { path: 'welcome', component: _wellcome_wellcome_component__WEBPACK_IMPORTED_MODULE_18__["WellcomeComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_17__["RouteGuardService"]] },
    { path: 'todoEdit/:id', component: _todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_20__["TodoEditComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_17__["RouteGuardService"]] },
    { path: 'manualPaypal', component: _manual_paypal_manual_paypal_component__WEBPACK_IMPORTED_MODULE_27__["ManualPaypalComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_17__["RouteGuardService"]] },
    { path: 'contactUs', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_30__["ContactUsComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_7__["PostCreateComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_9__["PostListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _real_estate_real_estate_component__WEBPACK_IMPORTED_MODULE_12__["RealEstateComponent"],
                _todos_todos_component__WEBPACK_IMPORTED_MODULE_14__["TodosComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_16__["LogoutComponent"],
                _wellcome_wellcome_component__WEBPACK_IMPORTED_MODULE_18__["WellcomeComponent"],
                _update_bash_update_bash_component__WEBPACK_IMPORTED_MODULE_19__["UpdateBashComponent"],
                _todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_20__["TodoEditComponent"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_21__["ShopComponent"],
                _googel_payment_googel_payment_component__WEBPACK_IMPORTED_MODULE_22__["GoogelPaymentComponent"],
                _success_payment_success_payment_component__WEBPACK_IMPORTED_MODULE_23__["SuccessPaymentComponent"],
                _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_24__["ListItemComponent"],
                // DialogComponent,
                _remove_item_remove_item_component__WEBPACK_IMPORTED_MODULE_25__["RemoveItemComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"],
                _manual_paypal_manual_paypal_component__WEBPACK_IMPORTED_MODULE_27__["ManualPaypalComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_28__["FooterComponent"],
                _paypal_page_paypal_page_component__WEBPACK_IMPORTED_MODULE_29__["PaypalPageComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_30__["ContactUsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/posts/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = /** @class */ (function () {
    function CartComponent(postsService) {
        this.postsService = postsService;
    }
    CartComponent.prototype.ngOnInit = function () {
        // console.log(this.postsService.getCart());
    };
    CartComponent.prototype.removeItemCart = function (i) {
        this.postsService.removeItemCart(i);
        this.postsService.getCart();
    };
    CartComponent.ctorParameters = function () { return [
        { type: _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] }
    ]; };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text], select, textarea {\n    width: 100%; /* Full width */\n    padding: 12px; /* Some padding */ \n    border: 1px solid #ccc; /* Gray border */\n    border-radius: 4px; /* Rounded borders */\n    box-sizing: border-box; /* Make sure that padding and width stays in place */\n    margin-top: 6px; /* Add a top margin */\n    margin-bottom: 16px; /* Bottom margin */\n    resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */\n  }\n  \n  /* Style the submit button with a specific background color etc */\n  \n  input[type=submit] {\n    background-color: #04AA6D;\n    color: white;\n    padding: 12px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n  \n  /* When moving the mouse over the submit button, add a darker green color */\n  \n  input[type=submit]:hover {\n    background-color: #45a049;\n  }\n  \n  /* Add a background color and some padding around the form */\n  \n  .container {\n    border-radius: 5px;\n    background-color: #f2f2f2;\n    padding: 20px;\n  }\n  \n  /* #bodyItem {\n    margin: 10px 10px 10px 10px;\n}\n\n.aboutMe {\n    background-color: white;\n    height: 100%;\n    width: 100%;\n    margin: 30px 20px 30px 20px;\n    padding-bottom: 20px; \n}\n\n#aboutMeText {\n    color: #4aaaa5;\n    margin: 10px 10px 20px 10px;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXLEVBQUUsZUFBZTtJQUM1QixhQUFhLEVBQUUsaUJBQWlCO0lBQ2hDLHNCQUFzQixFQUFFLGdCQUFnQjtJQUN4QyxrQkFBa0IsRUFBRSxvQkFBb0I7SUFDeEMsc0JBQXNCLEVBQUUsb0RBQW9EO0lBQzVFLGVBQWUsRUFBRSxxQkFBcUI7SUFDdEMsbUJBQW1CLEVBQUUsa0JBQWtCO0lBQ3ZDLGVBQWUsRUFBRSx3RUFBd0U7RUFDM0Y7O0VBRUEsaUVBQWlFOztFQUNqRTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQSwyRUFBMkU7O0VBQzNFO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBLDREQUE0RDs7RUFDNUQ7SUFDRSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7RUFDZjs7RUFJRjs7Ozs7Ozs7Ozs7Ozs7O0dBZUciLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCwgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgcGFkZGluZzogMTJweDsgLyogU29tZSBwYWRkaW5nICovIFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8qIEdyYXkgYm9yZGVyICovXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAvKiBSb3VuZGVkIGJvcmRlcnMgKi9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBNYWtlIHN1cmUgdGhhdCBwYWRkaW5nIGFuZCB3aWR0aCBzdGF5cyBpbiBwbGFjZSAqL1xuICAgIG1hcmdpbi10b3A6IDZweDsgLyogQWRkIGEgdG9wIG1hcmdpbiAqL1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7IC8qIEJvdHRvbSBtYXJnaW4gKi9cbiAgICByZXNpemU6IHZlcnRpY2FsIC8qIEFsbG93IHRoZSB1c2VyIHRvIHZlcnRpY2FsbHkgcmVzaXplIHRoZSB0ZXh0YXJlYSAobm90IGhvcml6b250YWxseSkgKi9cbiAgfVxuICBcbiAgLyogU3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gd2l0aCBhIHNwZWNpZmljIGJhY2tncm91bmQgY29sb3IgZXRjICovXG4gIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAvKiBXaGVuIG1vdmluZyB0aGUgbW91c2Ugb3ZlciB0aGUgc3VibWl0IGJ1dHRvbiwgYWRkIGEgZGFya2VyIGdyZWVuIGNvbG9yICovXG4gIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbiAgfVxuICBcbiAgLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciBhbmQgc29tZSBwYWRkaW5nIGFyb3VuZCB0aGUgZm9ybSAqL1xuICAuY29udGFpbmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cblxuXG4vKiAjYm9keUl0ZW0ge1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbn1cblxuLmFib3V0TWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDMwcHggMjBweCAzMHB4IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7IFxufVxuXG4jYWJvdXRNZVRleHQge1xuICAgIGNvbG9yOiAjNGFhYWE1O1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDIwcHggMTBweDtcbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        this.errorMessage = 'An error occured! Contact support at 1-800-BASH';
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/googel-payment/googel-payment.component.css":
/*!*************************************************************!*\
  !*** ./src/app/googel-payment/googel-payment.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dlbC1wYXltZW50L2dvb2dlbC1wYXltZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/googel-payment/googel-payment.component.ts":
/*!************************************************************!*\
  !*** ./src/app/googel-payment/googel-payment.component.ts ***!
  \************************************************************/
/*! exports provided: GoogelPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogelPaymentComponent", function() { return GoogelPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import '@google-pay/button-element';
// import { ReadyToPayChangeResponse } from '@google-pay/button-element';
// import { Component } from '@angular/core';
var GoogelPaymentComponent = /** @class */ (function () {
    function GoogelPaymentComponent() {
    }
    GoogelPaymentComponent.prototype.ngOnInit = function () {
    };
    GoogelPaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-googel-payment',
            template: __webpack_require__(/*! raw-loader!./googel-payment.component.html */ "./node_modules/raw-loader/index.js!./src/app/googel-payment/googel-payment.component.html"),
            styles: [__webpack_require__(/*! ./googel-payment.component.css */ "./src/app/googel-payment/googel-payment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GoogelPaymentComponent);
    return GoogelPaymentComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart {\n    margin-left: 5px;\n    color: white;\n}\n\n.header_search {\n    display: flex;\n    flex: 1;\n}\n\n.header_searchIcon {\n    background-color: #cd9042;\n    padding: 5px;\n    height: 35px !important;\n}\n\n.header_searchInput {\n    padding: 10px;\n    height: 35px;\n    border: none;\n    width: 100%;\n}\n\n.header_link {\n    color: white;\n    text-decoration: none;\n}\n\n.header_nav {\n    display: flex;\n    justify-content: space-evenly;\n\n}\n\n.header_option {\n    display: flex;\n    flex-direction: column;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n.header_optionLineOne {\n    font-size: 10px;\n}\n\n.header_optionLineTwo {\n    font-size: 13px;\n    font-weight: 800;\n    /* display: flex */\n}\n\n.header_optionBasket {\n    display: flex;\n}\n\na:hover {\n  color: #cd9042;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content a:hover {background-color: #f1f1f1}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.dropdown:hover .dropbtn {\n  background-color: #3e8e41;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztBQUNYOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQSwyQkFBMkIseUJBQXlCOztBQUVwRDtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydCB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkZXJfc2VhcmNoIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG59XG5cbi5oZWFkZXJfc2VhcmNoSWNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NkOTA0MjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXJfc2VhcmNoSW5wdXQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlcl9saW5rIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaGVhZGVyX25hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblxufVxuXG4uaGVhZGVyX29wdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmhlYWRlcl9vcHRpb25MaW5lT25lIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5oZWFkZXJfb3B0aW9uTGluZVR3byB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgLyogZGlzcGxheTogZmxleCAqL1xufVxuXG4uaGVhZGVyX29wdGlvbkJhc2tldCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjY2Q5MDQyO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMX1cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _service_hardcoded_authencation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/hardcoded-authencation.service */ "./src/app/service/hardcoded-authencation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(postsService, hardcodedAuthenticationService) {
        this.postsService = postsService;
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
        this.user = {};
        this.isUserLoggedIn = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
        this.name2 = sessionStorage.getItem('authenticaterUser');
    };
    HeaderComponent.prototype.getUserLoginInfo = function () {
        this.name2 = this.postsService.getLoginUserInfo().name;
        if (this.name2 === undefined || this.name2 === null || this.name2 === '') {
            this.name2 = sessionStorage.getItem('authenticaterUser');
        }
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] },
        { type: _service_hardcoded_authencation_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthencationService"] }
    ]; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"],
            _service_hardcoded_authencation_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthencationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/list-item/list-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/list-item/list-item.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinnerDiv {\n  position: absolute;\n  margin-left: 50%;\n  margin-top: 25%;\n}\n\n.overlay{\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color:#000;\n  opacity: .75;\n  z-index: 9999999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1pdGVtL2xpc3QtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyRGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogNTAlO1xuICBtYXJnaW4tdG9wOiAyNSU7XG59XG5cbi5vdmVybGF5e1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjojMDAwO1xuICBvcGFjaXR5OiAuNzU7XG4gIHotaW5kZXg6IDk5OTk5OTk7XG59Il19 */"

/***/ }),

/***/ "./src/app/list-item/list-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/list-item/list-item.component.ts ***!
  \**************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListItemComponent = /** @class */ (function () {
    function ListItemComponent(postsService, httpClient, router) {
        this.postsService = postsService;
        this.httpClient = httpClient;
        this.router = router;
        this.item = {
            name: '',
            description: 'new',
            img: Blob,
            picByte: File,
            price: '20',
            currency: 'USD',
            quantity: 1,
            total: '20',
            seller: 'Patrick Luu',
            phone: '510-115-4515',
            email: 'user@gmail.com',
            imageName: '',
            imageUrl: '',
            imageId: '',
            imageDeletehash: ''
        };
        this.isDisable = false;
    }
    ListItemComponent.prototype.ngOnInit = function () {
    };
    //add item on submit button
    ListItemComponent.prototype.addItem = function () {
        var _this = this;
        this.isDisable = true;
        this.item.total = this.item.price;
        this.item.imageName = this.postsService.getImageName();
        this.postsService.addNewItem(this.item).subscribe(function (data) {
            setTimeout(function () {
                _this.isDisable = false;
                _this.router.navigate(['shop']);
            }, 500);
        });
    };
    ListItemComponent.prototype.addPic = function () {
        this.item.total = this.item.price;
        this.postsService.addNewItem2(this.item).subscribe(function (data) { return console.log(data); });
    };
    //testing upload pic
    //Gets called when the user selects an image
    ListItemComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files[0];
    };
    //Gets called when the user clicks on submit to upload the image --old
    ListItemComponent.prototype.onUpload2 = function () {
        var _this = this;
        var uploadImageData = new FormData();
        uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
        this.item.imageName = this.selectedFile.name;
        this.httpClient.post('http://localhost:9090/jpa/shop/items2', uploadImageData, { observe: 'response' })
            .subscribe(function (response) {
            if (response.status === 200) {
                _this.message = 'Image uploaded successfully';
            }
            else {
                _this.message = 'Image not uploaded successfully';
            }
        });
    };
    //Gets called when the user clicks on submit to upload the image --old
    ListItemComponent.prototype.onUpload = function () {
        var _this = this;
        var counter = 0;
        ++counter;
        this.imageName = this.selectedFile.name + counter;
        var uploadImageData = new FormData();
        uploadImageData.append('imageFile', this.selectedFile, this.imageName);
        this.item.imageName = this.selectedFile.name;
        this.httpClient.post('http://localhost:9090/jpa/shop/items2', uploadImageData, { observe: 'response' })
            .subscribe(function (response) {
            if (response.status === 200) {
                _this.message = 'Image uploaded successfully';
            }
            else {
                _this.message = 'Image not uploaded successfully';
            }
        });
    };
    //upload image to Imgur
    ListItemComponent.prototype.onUploadService = function () {
        var _this = this;
        this.isDisable = true;
        this.postsService.postImages(this.selectedFile)
            .subscribe(function (response) {
            // console.log('imgur upload data');
            // console.log(response);
            _this.imgurArray = response;
            // console.log(this.imgurArray.data.link);
            _this.item.imageUrl = _this.imgurArray.data.link;
            _this.item.imageDeletehash = _this.imgurArray.data.deletehash;
            _this.item.imageId = _this.imgurArray.data.id;
            // console.log(this.item);
            setTimeout(function () {
                _this.isDisable = false;
            }, 10);
        });
    };
    //get image database
    ListItemComponent.prototype.getImage = function () {
        var _this = this;
        this.httpClient.get('http://localhost:9090/jpa/shop/get/' + this.imageName)
            .subscribe(function (res) {
            // console.log(res);
            _this.retrieveResonse = res;
            _this.base64Data = _this.retrieveResonse.picByte;
            _this.retrievedImage = 'data:image/jpeg;base64,' + _this.base64Data;
        });
    };
    ListItemComponent.prototype.getImage2 = function () {
        var _this = this;
        this.postsService.getImageService()
            .subscribe(function (res) {
            _this.retrieveResonse = res;
            // console.log(this.retrieveResonse);
            _this.base64Data = _this.retrieveResonse.picByte;
            _this.retrievedImage = 'data:image/jpeg;base64,' + _this.base64Data;
        });
    };
    ListItemComponent.prototype.disableButton = function () {
        var _this = this;
        console.log("disable clicked");
        this.isDisable = true;
        setTimeout(function () {
            _this.isDisable = false;
        }, 3000);
    };
    ListItemComponent.prototype.setDisabled = function () {
        return this.isDisable = false;
    };
    ListItemComponent.ctorParameters = function () { return [
        { type: _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ListItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-item',
            template: __webpack_require__(/*! raw-loader!./list-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/list-item/list-item.component.html"),
            styles: [__webpack_require__(/*! ./list-item.component.css */ "./src/app/list-item/list-item.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListItemComponent);
    return ListItemComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.loginBox {\n    width: 100%;\n    height: 100%;\n    padding: 50px 50px 50px 50px;\n    border: 1px solid black;\n    border-radius: 10px;\n    background:#e6e6e6;\n}\n\n.jumbotron {\n    padding: 2rem 3rem;\n    width: 366px;\n    margin: 38px auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxvZ2luQm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogNTBweCA1MHB4IDUwcHggNTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6I2U2ZTZlNjtcbn1cblxuLmp1bWJvdHJvbiB7XG4gICAgcGFkZGluZzogMnJlbSAzcmVtO1xuICAgIHdpZHRoOiAzNjZweDtcbiAgICBtYXJnaW46IDM4cHggYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_hardcoded_authencation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/hardcoded-authencation.service */ "./src/app/service/hardcoded-authencation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(postsService, router, hardcodedAuthticationService) {
        this.postsService = postsService;
        this.router = router;
        this.hardcodedAuthticationService = hardcodedAuthticationService;
        this.username = 'Patrick';
        this.password = '';
        this.invalidLogin = false;
        this.userIsLogin = false;
        this.user = {
            name: '',
            password: '',
            email: '',
            phone: ''
        };
        this.logIn = {
            isInvalidLogin: false,
            isCreateNewAccount: false,
            userCreated: false,
            isDisable: false
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.checkLogin = function () {
        var _this = this;
        this.postsService.getUser().subscribe(function (data) { return _this.isValidUser(data); });
    };
    LoginComponent.prototype.handleLogin = function () {
        if (this.hardcodedAuthticationService.authenticate(this.username, this.password)) {
            this.router.navigate(['todos']);
            this.invalidLogin = false;
        }
        else {
            this.invalidLogin = true;
        }
    };
    LoginComponent.prototype.isValidUser = function (arrObject) {
        for (var i = 0; i < arrObject.length; i++) {
            var element = arrObject[i];
            if (element.name === this.user.name && element.password === this.user.password) {
                this.router.navigate(['welcome']);
                this.logIn.isInvalidLogin = false;
                this.postsService.setUser(element.name, element.password);
            }
            else {
                this.logIn.isInvalidLogin = true;
            }
        }
    };
    // this is for bash login
    LoginComponent.prototype.checkLoginBash = function () {
        var _this = this;
        this.logIn.isDisable = true;
        this.postsService.getUser().subscribe(function (data) { return _this.isValidUserBash(data); });
    };
    LoginComponent.prototype.isValidUserBash = function (arrObject) {
        var _this = this;
        this.logIn.isInvalidLogin = false;
        var _loop_1 = function (i) {
            var element = arrObject[i];
            if (this_1.hardcodedAuthticationService.BashAuthenticate(this_1.user.name, this_1.user.password, element.name, element.password)) {
                this_1.userIsLogin = true;
                setTimeout(function () {
                    _this.postsService.setLoginUserInfo(element);
                    _this.logIn.isDisable = false;
                    _this.router.navigate(['shop']);
                }, 50);
                return { value: element };
            }
            else {
                this_1.logIn.isInvalidLogin = true;
                this_1.logIn.isDisable = false;
            }
            ;
        };
        var this_1 = this;
        for (var i = 0; i < arrObject.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    LoginComponent.prototype.setCreateAccount = function () {
        this.logIn.isCreateNewAccount = true;
    };
    LoginComponent.prototype.createNewUser = function () {
        var _this = this;
        this.logIn.isDisable = true;
        this.postsService.createNewUser(this.user).subscribe(function (data) {
            setTimeout(function () {
                _this.logIn.isDisable = false;
            }, 50);
        });
        this.logIn.isCreateNewAccount = false;
        this.logIn.userCreated = true;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_hardcoded_authencation_service__WEBPACK_IMPORTED_MODULE_3__["HardcodedAuthencationService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_hardcoded_authencation_service__WEBPACK_IMPORTED_MODULE_3__["HardcodedAuthencationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_hardcoded_authencation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/hardcoded-authencation.service */ "./src/app/service/hardcoded-authencation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(hardcodedAuthencationService) {
        this.hardcodedAuthencationService = hardcodedAuthencationService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.hardcodedAuthencationService.logout();
    };
    LogoutComponent.ctorParameters = function () { return [
        { type: _service_hardcoded_authencation_service__WEBPACK_IMPORTED_MODULE_1__["HardcodedAuthencationService"] }
    ]; };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_service_hardcoded_authencation_service__WEBPACK_IMPORTED_MODULE_1__["HardcodedAuthencationService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/manual-paypal/manual-paypal.component.css":
/*!***********************************************************!*\
  !*** ./src/app/manual-paypal/manual-paypal.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbnVhbC1wYXlwYWwvbWFudWFsLXBheXBhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/manual-paypal/manual-paypal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/manual-paypal/manual-paypal.component.ts ***!
  \**********************************************************/
/*! exports provided: ManualPaypalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualPaypalComponent", function() { return ManualPaypalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManualPaypalComponent = /** @class */ (function () {
    function ManualPaypalComponent() {
    }
    ManualPaypalComponent.prototype.ngOnInit = function () {
    };
    ManualPaypalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manual-paypal',
            template: __webpack_require__(/*! raw-loader!./manual-paypal.component.html */ "./node_modules/raw-loader/index.js!./src/app/manual-paypal/manual-paypal.component.html"),
            styles: [__webpack_require__(/*! ./manual-paypal.component.css */ "./src/app/manual-paypal/manual-paypal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManualPaypalComponent);
    return ManualPaypalComponent;
}());



/***/ }),

/***/ "./src/app/paypal-page/paypal-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/paypal-page/paypal-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheXBhbC1wYWdlL3BheXBhbC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/paypal-page/paypal-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/paypal-page/paypal-page.component.ts ***!
  \******************************************************/
/*! exports provided: PaypalPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPageComponent", function() { return PaypalPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaypalPageComponent = /** @class */ (function () {
    function PaypalPageComponent() {
    }
    PaypalPageComponent.prototype.ngOnInit = function () {
    };
    PaypalPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paypal-page',
            template: __webpack_require__(/*! raw-loader!./paypal-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/paypal-page/paypal-page.component.html"),
            styles: [__webpack_require__(/*! ./paypal-page.component.css */ "./src/app/paypal-page/paypal-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaypalPageComponent);
    return PaypalPageComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field,\ntextarea {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQsXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.ts ***!
  \************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent(postsService) {
        this.postsService = postsService;
        this.enteredTitle = "";
        this.enteredContent = "";
    }
    PostCreateComponent.prototype.onAddPostSpring = function (form) {
        var currentDate = new Date();
        if (form.invalid) {
            return;
        }
        var postsObj = {
            user_id: 1000003,
            name: form.value.name,
            description: form.value.description,
            date: currentDate
        };
        this.postsService.addPostSpring(postsObj).subscribe(function (data) { return console.log(data); });
        form.resetForm();
        this.postsService.getPostSpring().subscribe();
    };
    PostCreateComponent.ctorParameters = function () { return [
        { type: _posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] }
    ]; };
    PostCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-post-create",
            template: __webpack_require__(/*! raw-loader!./post-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/post-create/post-create.component.html"),
            styles: [__webpack_require__(/*! ./post-create.component.css */ "./src/app/posts/post-create/post-create.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]])
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 1rem;\n}\n\n.info-text {\n  text-align: center;\n}\n\n.comment {\n  margin: 0 0 0 20px;  \n}\n\n.name {\n  color: blue;\n}\n\n.list {\n  margin: 15px 0 0 0;\n}\n\n.houseSearch {\n  margin: 128px auto 0 auto; \n  width: 600px;\n  text-align: center;\n}\n\n.houseSearchResult {\n  margin: 50px auto 0 auto; \n  width: 388px;\n  text-align: center;\n}\n\nmat-form-field,\ntextarea {\n  width: 100%;\n}\n\n.welcomeSign {\n  text-align: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUdBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmluZm8tdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbW1lbnQge1xuICBtYXJnaW46IDAgMCAwIDIwcHg7ICBcbn1cblxuLm5hbWUge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW46IDE1cHggMCAwIDA7XG59XG5cbi5ob3VzZVNlYXJjaCB7XG4gIG1hcmdpbjogMTI4cHggYXV0byAwIGF1dG87IFxuICB3aWR0aDogNjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhvdXNlU2VhcmNoUmVzdWx0IHtcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMCBhdXRvOyBcbiAgd2lkdGg6IDM4OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkLFxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG4ud2VsY29tZVNpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.ts ***!
  \********************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostListComponent = /** @class */ (function () {
    function PostListComponent(postsService, router) {
        this.postsService = postsService;
        this.router = router;
        this.posts = [];
        this.postSpring = [];
        this.show = true;
        this.isSearchHome = false;
        this.arrHome = [];
        this.search = "";
        this.user = {};
    }
    PostListComponent.prototype.ngOnInit = function () {
        this.user = this.postsService.getUserSpring();
        this.postsService.getUser().subscribe(function (data) { return null; });
        this.user2 = sessionStorage.getItem('authenticaterUser');
        this.getNewPostZpid();
    };
    PostListComponent.prototype.ngOnDestroy = function () {
    };
    //refresh all posts
    PostListComponent.prototype.getNewPost = function () {
        var _this = this;
        return this.postsService.getPostSpring().subscribe(function (data) { return _this.getSpringPost(data); });
    };
    PostListComponent.prototype.getNewPostZpid = function () {
        var _this = this;
        return this.postsService.getPostSpringByZpid(this.postsService.getZillowData()._id).subscribe(function (data) { return _this.getSpringPost(data); });
    };
    //new search buttom
    PostListComponent.prototype.newSearch = function () {
        this.postsService.setShowSearchResult(true, false);
    };
    //submit buttom get new posts
    PostListComponent.prototype.getSpringPost = function (data) {
        this.postSpring = data;
    };
    //submit button 
    PostListComponent.prototype.onAddPostSpring = function (form) {
        var _this = this;
        var currentDate = new Date();
        if (form.invalid) {
            return;
        }
        //fixing edit return to submit error
        var postsObj = {
            user_id: 1000003,
            name: sessionStorage.getItem('authenticaterUser'),
            description: form.value.description,
            date: currentDate,
            street: this.zillowObj.street,
            city: this.zillowObj.city,
            state: this.zillowObj.state,
            zip_code: this.zillowObj.zipcode,
            amount: this.zillowObj.price,
            low: this.zillowObj.lowPrice,
            high: this.zillowObj.highPrice,
            zpid: this.postsService.getZillowData()._id,
            home_details: this.zillowObj.homeDetail,
            last_updated: this.zillowObj.lastUpdate
        };
        this.postsService.addPostSpring(postsObj).subscribe(function (data) {
            //refresh by zpid posts only
            _this.getNewPostZpid();
        });
        form.resetForm();
    };
    PostListComponent.prototype.onDeleteSpringPost = function (id) {
        var _this = this;
        this.postsService.deletePostSpring(id).subscribe(function (data) { return _this.getNewPostZpid(); });
    };
    //Edit click button
    PostListComponent.prototype.onUpdateSpringPost = function (id) {
        this.router.navigate(['todoEdit', id]);
    };
    PostListComponent.prototype.onDelete = function (postId) {
        this.postsService.deletePost(postId);
    };
    PostListComponent.prototype.getZillow = function () {
        this.postsService.getZillow().subscribe(function (data) { return console.log(data.error.text); });
    };
    PostListComponent.prototype.onGetZillow3 = function (form) {
        this.postsService.getZillow3(form.value.address);
        this.arrHome = this.postsService.getZillowSearchArr();
    };
    PostListComponent.prototype.onGetGiphy = function () {
        return this.postsService.getGiphy();
    };
    PostListComponent.ctorParameters = function () { return [
        { type: _posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PostListComponent.prototype, "homeInfoZillow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PostListComponent.prototype, "bankName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostListComponent.prototype, "zillowObj", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PostListComponent.prototype, "street", void 0);
    PostListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-post-list",
            template: __webpack_require__(/*! raw-loader!./post-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/posts/post-list/post-list.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PostListComponent);
    return PostListComponent;
}());

// getHomeInfo() {
//   console.log(this.homeInfoZillow)
//   console.log(this.zillowObj.street)
//   console.log(this.zillowObj.city)
//   console.log(this.zillowObj.state)
//   console.log('-------------------------');
// }
// console.log("_________________")
// console.log(this.homeInfoZillow)
//testing @input
// this.welcome
// this.postsService.getPosts();
//retriving one post to edit
// this.id = this.route.snapshot.params['id'];
// this.postsService.retrievePostSpring(this.id).subscribe(data => this.post = data)
// this.zillowObj = data[0]
//   this.zillowObj = {
//     street: data[0].street,
//     city: data[0].city,
//     state: data[0].state,
//     highPrice: data[0].high,
//     homeDetail: data[0].home_details,
//     lastUpdate: data[0].last_updated,
//     lowPrice: data[0].low,
//     price: data[0].amount,
//     _id: data[0].zpid,
//     zipcode: data[0].zip_code
// }
//   console.log(data)
//   this.zillowObj = {
//     street: '',
//     city: '',
//     state: '',
//     _id: '',
//     high: '',
//     home_details: '',
//     last_updated: '',
//     low: '',
//     amount: ''
// }
// this.zillowObj = {
//     street: '',
//     city: '',
//     state: '',
//     _id: '',
//     highPrice: '',
//     homeDetail: '',
//     lastUpdate: '',
//     lowPrice: '',
//     price: ''
// }
// console.log("patrick " + this.postsService.getPosts())
// this.postsSub = this.postsService.getPostUpdateListener()
//   .subscribe((posts: Post[]) => {
//     this.posts = posts;
//   });
// console.log(this.posts);
// this.homeInfoSub = this.postsService.getHomeInfoUpdateListener().subscribe(data => 
//   { 
//     this.homeInfo = data;
//   });  
// address: null
// amount: "265675"
// city: "Carrollton"
// date: "2020-07-19T00:00:00.000+0000"
// description: "test 3"
// high: "284272"
// home_details: "https://www.zillow.com/homedetails/2719-Colonial-Dr-Carrollton-TX-75007/27327320_zpid/"
// id: 1
// last_updated: "07/16/2020"
// low: "247078"
// name: "Ming"
// pic: null
// state: "TX"
// street: "2719 Colonial Dr"
// zip_code: "75007"
// zpid: "27327320"
//   this.zillowObj = {
//     street: '',
//     city: '',
//     state: '',
//     _id: '',
//     highPrice: '',
//     homeDetail: '',
//     lastUpdate: '',
//     lowPrice: '',
//     price: ''
// }
//   city: "Carrollton"
// highPrice: "284155"
// homeDetail: "https://www.zillow.com/homedetails/2719-Colonial-Dr-Carrollton-TX-75007/27327320_zpid/"
// lastUpdate: "07/12/2020"
// lowPrice: "246975"
// price: "265565"
// state: "TX"
// street: "2719 Colonial Dr"
// zipcode: "75007"
// _id: "27327320"
// onAddPost(form: NgForm) {
//   if (form.invalid) {
//     return;
//   }
//   console.log(form.value);
//   this.postsService.addPost(form.value.title, form.value.content);
//   form.resetForm();
// }
// id: number
// post: Post
//testing @input
// @Input('welcome') welcome: string;
//   city: "Carrollton"
// highPrice: "284155"
// homeDetail: "https://www.zillow.com/homedetails/2719-Colonial-Dr-Carrollton-TX-75007/27327320_zpid/"
// lastUpdate: "07/12/2020"
// lowPrice: "246975"
// price: "265565"
// state: "TX"
// street: "2719 Colonial Dr"
// zipcode: "75007"
// _id: "27327320"
// backToSearch() {
//   this.isSearchHome = !this.isSearchHome;
//   this.show = !this.show;
// }
// getInfo() {
//   // console.log(this.postsService.getZillowSearch())
//   this.arrHome = this.postsService.getZillowSearchArr();
// }
// getHomeInfo() {
//   return this.homeInfo;
// }
// onGetZillow() {
//   this.postsService.getZillow();
//   this.getInfo();
//   this.isSearchHome = !this.isSearchHome;
//   this.show = !this.show;
// }
// onGetZillow2() {
//   this.postsService.getZillow2();
//   this.getInfo();
// }
// callback2() {
//   // console.log("")
//   this.arrHome = this.postsService.getZillowSearch();
//   return null;
// }


/***/ }),

/***/ "./src/app/posts/posts.service.ts":
/*!****************************************!*\
  !*** ./src/app/posts/posts.service.ts ***!
  \****************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_xml2json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-xml2json */ "./node_modules/ngx-xml2json/fesm5/ngx-xml2json.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostsService = /** @class */ (function () {
    function PostsService(http, ngxXml2jsonService) {
        this.http = http;
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.posts = [];
        this.posts2 = [];
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.homeInfo = ["test", "1", "3"];
        this.homeInfoUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.user = {
            name: '',
            password: ''
        };
        //user name, email info
        this.userInfo = {
            name: '',
            password: '',
            email: '',
            phone: ''
        };
        this.isShowing = {
            isSearching: true,
            showResult: false
        };
        this.zillowData = {
            street: '',
            city: '',
            state: '',
            zipcode: '',
            price: '',
            homeDetail: '',
            lowPrice: '',
            highPrice: '',
            _id: '',
            lastUpdate: ''
        };
        this.product = [{
                id: 1,
                name: 'Pixel 4xl',
                description: 'Used',
                img: 'Pixel.img',
                price: 400,
                currency: 'USD',
                quantity: 1,
                total: 400,
                seller: 'Patrick Luu'
            },
            {
                id: 2,
                name: "Polo Shirt",
                description: "New",
                img: 'Shirt.img',
                price: 20,
                currency: "USD",
                quantity: 1,
                total: 20,
                seller: "Patrick Luu"
            }];
        this.cart = [];
        this.totalCheckout = 0;
        this.counter = 0;
        this.isPaid = false;
    }
    //User that is already login
    PostsService.prototype.setLoginUserInfo = function (contact) {
        this.userInfo = contact;
    };
    PostsService.prototype.getLoginUserInfo = function () {
        return this.userInfo;
    };
    PostsService.prototype.getTotal = function () {
        var total = 0;
        this.cart.forEach(function (item, index) {
            total += (item.price * item.quantity);
        });
        this.totalCheckout = total;
        return this.totalCheckout;
    };
    PostsService.prototype.setIsPaid = function (status) {
        this.isPaid = status;
    };
    PostsService.prototype.getIsPaid2 = function () {
        return this.isPaid;
    };
    PostsService.prototype.getIsPaid = function () {
        for (var i = 0; i < this.cart.length; i++) {
            this.cart[i].push({ ispaid: true });
        }
        return this.cart;
    };
    //get item in cart
    PostsService.prototype.getCart = function () {
        return this.cart;
    };
    PostsService.prototype.addToCart = function (item) {
        this.cart.push(item);
    };
    PostsService.prototype.removeItemCart = function (index) {
        if (index > -1) {
            this.cart.splice(index, 1);
        }
    };
    //get item listing for sale
    PostsService.prototype.getProduct = function () {
        return this.product;
    };
    PostsService.prototype.addProduct = function (item) {
        this.product.push(item);
    };
    //testing paypal
    PostsService.prototype.postPayment = function () {
        var paymentInfo = {
            name: "Milk Tea",
            sku: "99",
            price: "10.00",
            currency: "USD",
            quantity: 1
        };
        return this.http.post("https://localhost:3000/pay", paymentInfo);
    };
    PostsService.prototype.getZillowData = function () {
        return this.zillowData;
    };
    PostsService.prototype.setZillowData = function (data) {
        this.zillowData = data;
    };
    PostsService.prototype.getShowSearchResult = function () {
        return this.isShowing;
    };
    PostsService.prototype.setShowSearchResult = function (_search, _result) {
        this.isShowing.isSearching = _search;
        this.isShowing.showResult = _result;
    };
    PostsService.prototype.setUser = function (name, password) {
        this.user.name = name;
        this.user.password = password;
    };
    PostsService.prototype.getUserSpring = function () {
        return this.user;
    };
    PostsService.prototype.getPosts = function () {
        var _this = this;
        this.http
            .get("https://localhost:3000/api/posts")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (postData) {
            return postData.posts.map(function (post) {
                return {
                    title: post.title,
                    content: post.content,
                    id: post._id
                };
            });
        }))
            .subscribe(function (transformedPosts) {
            _this.posts = transformedPosts;
            _this.postsUpdated.next(_this.posts.slice());
        });
    };
    //testing paypal get
    PostsService.prototype.getPaypal = function () {
        return this.http.get("https://localhost:3000/api/zillow2");
    };
    PostsService.prototype.getHomeInfoUpdateListener = function () {
        return this.homeInfoUpdate.asObservable();
    };
    PostsService.prototype.getPostUpdateListener = function () {
        return this.postsUpdated.asObservable();
    };
    PostsService.prototype.deletePost = function (postId) {
        var _this = this;
        this.http.delete("https://bash-env-1.p2nmnpz4hp.us-east-2.elasticbeanstalk.com/api/posts/" + postId)
            .subscribe(function () {
            var updatedPosts = _this.posts.filter(function (post) { return post.id !== postId; });
            _this.posts = updatedPosts;
            _this.postsUpdated.next(_this.posts.slice());
        });
    };
    PostsService.prototype.getZillow3 = function (address) {
        var _this = this;
        this.http.get('https://patrickluubash.com/zillow-bean' + address)
            .subscribe(function (response) {
            var parser = new DOMParser();
            var xml = parser.parseFromString(response.Posts, 'text/xml');
            var street = xml.getElementsByTagName("street")[0].childNodes[0];
            var zip = xml.getElementsByTagName("zipcode")[0].childNodes[0];
            var city = xml.getElementsByTagName("city")[0].childNodes[0];
            var state = xml.getElementsByTagName("state")[0].childNodes[0];
            var amount = xml.getElementsByTagName("amount")[0].childNodes[0];
            var homeDetails = xml.getElementsByTagName("homedetails")[0].childNodes[0];
            var lowPrice = xml.getElementsByTagName("low")[0].childNodes[0];
            var highPrice = xml.getElementsByTagName("high")[0].childNodes[0];
            var id = xml.getElementsByTagName("zpid")[0].childNodes[0];
            var lastUpdate = xml.getElementsByTagName("last-updated")[0].childNodes[0];
            var homeInfo3 = {
                street: new XMLSerializer().serializeToString(street),
                city: new XMLSerializer().serializeToString(city),
                state: new XMLSerializer().serializeToString(state),
                zipcode: new XMLSerializer().serializeToString(zip),
                price: new XMLSerializer().serializeToString(amount),
                homeDetail: new XMLSerializer().serializeToString(homeDetails),
                lowPrice: new XMLSerializer().serializeToString(lowPrice),
                highPrice: new XMLSerializer().serializeToString(highPrice),
                _id: new XMLSerializer().serializeToString(id),
                lastUpdate: new XMLSerializer().serializeToString(lastUpdate)
            };
            _this.homeInfo = [];
            _this.homeInfo.push(homeInfo3);
            _this.homeInfoUpdate.next(_this.homeInfo.slice());
            return response;
        });
    };
    PostsService.prototype.getZillowSearchArr = function () {
        return this.homeInfo;
    };
    PostsService.prototype.getGiphy = function () {
        this.http.get('http://143.198.233.244:8085/api/giphy').subscribe(function (response) {
            return response;
        });
    };
    //get user localhost
    PostsService.prototype.getUser = function () {
        return this.http.get('http://143.198.233.244:8085/jpa/users');
        // return this.http.get<any>('http://localhost:9090/jpa/users');
    };
    //refresh post get request
    PostsService.prototype.getPostSpring = function () {
        return this.http.get('hhttp://143.198.233.244:8085/jpa/posts');
    };
    //refresh post by zpid
    PostsService.prototype.getPostSpringByZpid = function (zpid) {
        return this.http.get("http://143.198.233.244:8085/jpa/posts/zillowId/" + zpid);
    };
    //create user localhost
    PostsService.prototype.createNewUser = function (user) {
        return this.http.post('http://143.198.233.244:8085/jpa/users', user);
    };
    PostsService.prototype.addPostSpring = function (post) {
        return this.http.post('http://143.198.233.244:8085/jpa/users/1000001/posts', post);
    };
    //delete button on comment
    PostsService.prototype.deletePostSpring = function (id) {
        return this.http.delete("http://143.198.233.244:8085/jpa/posts/" + id);
    };
    //retrieve one post from user
    PostsService.prototype.retrievePostSpring = function (id) {
        return this.http.get("https://patrickluubash.com/jpa/posts/" + id);
    };
    //test bitbucket
    //Put request to spring
    PostsService.prototype.updatePostSpring = function (id, post) {
        return this.http.put("https://patrickluubash.com/jpa/user/posts/" + id, post);
    };
    PostsService.prototype.getZillow = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'text/xml'
            })
        };
        return this.http.get('https://patrickluubash.com/zillow-bean', httpOptions);
    };
    //testing zillow passing full address object
    PostsService.prototype.getZillowFullAddress = function (fullAddress) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'text/xml'
            })
        };
        return this.http.get("https://patrickluubash.com/zillow/" + fullAddress, httpOptions);
    };
    PostsService.prototype.getItemShop = function () {
        var _this = this;
        return this.http.get('http://143.198.233.244:8085/jpa/shop/items').subscribe(function (data) {
            _this.product = data;
        });
        // return this.http.get<any>('http://localhost:9090/jpa/shop/items').subscribe(data => {
        //   this.product = data;
        // });
    };
    PostsService.prototype.addNewItem = function (item) {
        return this.http.post('http://143.198.233.244:8085/jpa/shop/items', item);
    };
    //add new item for shop
    PostsService.prototype.addNewItem2 = function (item) {
        return this.http.post('http://143.198.233.244:8085/jpa/shop/items2', item);
    };
    //delete item from shop list
    PostsService.prototype.deleteItem = function (id) {
        return this.http.delete("http://143.198.233.244:8085/jpa/shop/items/" + id);
    };
    //Gets called when the user clicks on submit to upload the image
    PostsService.prototype.onUpload = function (selectedFile) {
        this.counter += 1;
        this.imageName = this.counter + selectedFile.name;
        // console.log(this.imageName);
        var uploadImageData = new FormData();
        uploadImageData.append('imageFile', selectedFile, this.imageName);
        return this.http.post('http://143.198.233.244:8085/jpa/shop/items2', uploadImageData, { observe: 'response' });
    };
    PostsService.prototype.getImageService = function () {
        return this.http.get('http://143.198.233.244:8085/jpa/shop/get/' + this.imageName);
    };
    PostsService.prototype.getImageService2 = function (imageName) {
        return this.http.get('http://143.198.233.244:8085/jpa/shop/get/' + imageName);
    };
    PostsService.prototype.getImageServiceArray = function () {
        return this.http.get('http://143.198.233.244:8085/jpa/shop/get/allImages');
    };
    PostsService.prototype.getImageName = function () {
        return this.imageName;
    };
    PostsService.prototype.getPaypalSuccess = function () {
        return this.http.get('https://localhost:3000/success');
    };
    PostsService.prototype.sendEmail = function () {
        return this.http.get('http://localhost:9090/sendemail');
    };
    PostsService.prototype.getImages = function () {
        var auth_token = '3091777c462a8a6600917d02f04873c713b07008';
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + auth_token
            })
        };
        return this.http.get('https://api.imgur.com/3/account/me/images', httpOptions);
    };
    PostsService.prototype.postImages = function (selectedFile) {
        var auth_token = '92d473d686ecdb530329018bf8c4982a0b72a603';
        var clientId = 'fc137f7fc332ec0';
        var uploadImageData = new FormData();
        uploadImageData.append('imageFile', selectedFile, this.imageName);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Client-ID " + clientId
            })
        };
        return this.http.post('https://api.imgur.com/3/image', selectedFile, httpOptions);
    };
    PostsService.prototype.deleteImgur = function (deleteHashId) {
        var auth_token = 'ae63ca2473bbb72307582ca132a63baa3ef650a7';
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + auth_token
            })
        };
        return this.http.delete("https://api.imgur.com/3/image/" + deleteHashId, httpOptions);
    };
    PostsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: ngx_xml2json__WEBPACK_IMPORTED_MODULE_4__["NgxXml2jsonService"] }
    ]; };
    PostsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_xml2json__WEBPACK_IMPORTED_MODULE_4__["NgxXml2jsonService"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/real-estate/real-estate.component.css":
/*!*******************************************************!*\
  !*** ./src/app/real-estate/real-estate.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".houseSearch {\n    margin: 128px auto 0 auto; \n    width: 348px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhbC1lc3RhdGUvcmVhbC1lc3RhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcmVhbC1lc3RhdGUvcmVhbC1lc3RhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3VzZVNlYXJjaCB7XG4gICAgbWFyZ2luOiAxMjhweCBhdXRvIDAgYXV0bzsgXG4gICAgd2lkdGg6IDM0OHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/real-estate/real-estate.component.ts":
/*!******************************************************!*\
  !*** ./src/app/real-estate/real-estate.component.ts ***!
  \******************************************************/
/*! exports provided: RealEstateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateComponent", function() { return RealEstateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RealEstateComponent = /** @class */ (function () {
    function RealEstateComponent(postsService, http) {
        this.postsService = postsService;
        this.http = http;
        this.search = "2719 Colonial Dr, Carrollton, TX";
        this.searchResult = {
            isInvalidSearch: false,
            isInputAddressInvalid: false
        };
        this.homeInfo3 = {};
        this.isSearching = true;
        this.showResult = false;
    }
    RealEstateComponent.prototype.ngOnInit = function () { };
    RealEstateComponent.prototype.printHomeInfo = function () {
        console.log(this.bankName);
    };
    RealEstateComponent.prototype.getZillow3 = function (address) {
        var _this = this;
        this.http.get('http://localhost:3000/api/zillow/' + address).subscribe(function (response) {
            var parser = new DOMParser();
            var xml = parser.parseFromString(response.Posts, 'text/xml');
            var street = xml.getElementsByTagName("street")[0].childNodes[0];
            var zip = xml.getElementsByTagName("zipcode")[0].childNodes[0];
            var city = xml.getElementsByTagName("city")[0].childNodes[0];
            var state = xml.getElementsByTagName("state")[0].childNodes[0];
            var amount = xml.getElementsByTagName("amount")[0].childNodes[0];
            var homeDetails = xml.getElementsByTagName("homedetails")[0].childNodes[0];
            _this.homeInfo = [];
            _this.homeInfo.push(new XMLSerializer().serializeToString(street));
            _this.homeInfo.push(new XMLSerializer().serializeToString(zip));
            _this.homeInfo.push(new XMLSerializer().serializeToString(city));
            _this.homeInfo.push(new XMLSerializer().serializeToString(state));
            _this.homeInfo.push(new XMLSerializer().serializeToString(amount));
            _this.homeInfo.push(new XMLSerializer().serializeToString(homeDetails));
            return _this.homeInfo;
        });
    };
    RealEstateComponent.prototype.getHomeInfo = function () {
        return this.homeInfo;
    };
    //example post to database
    RealEstateComponent.prototype.onAddPostSpring = function (zillowData) {
        var currentDate = new Date();
        var postsObj = {
            street: zillowData.street,
            city: zillowData.city,
            date: currentDate,
            zpid: zillowData._id,
            state: zillowData.state
        };
        this.postsService.addPostSpring(postsObj).subscribe(function (data) {
            // console.log(data)
        });
    };
    RealEstateComponent.prototype.onGetZillow = function () {
        var _this = this;
        this.postsService.getZillow().subscribe(function (data) {
            _this.processXml(data);
        }, function (err) { return console.error(err); });
    };
    //testing processXml for error
    RealEstateComponent.prototype.processXml2 = function (data) {
        var parser = new DOMParser();
        var xml = parser.parseFromString(data.message, 'text/xml');
        var errorTag = xml.getElementsByTagName("code")[0].childNodes[0];
        this.error = new XMLSerializer().serializeToString(errorTag);
        if (this.error === '0') {
            var street = xml.getElementsByTagName("street")[0].childNodes[0];
            var zip = xml.getElementsByTagName("zipcode")[0].childNodes[0];
            var city = xml.getElementsByTagName("city")[0].childNodes[0];
            var state = xml.getElementsByTagName("state")[0].childNodes[0];
            var amount = xml.getElementsByTagName("amount")[0].childNodes[0];
            var homeDetails = xml.getElementsByTagName("homedetails")[0].childNodes[0];
            var lowPrice = xml.getElementsByTagName("low")[0].childNodes[0];
            var highPrice = xml.getElementsByTagName("high")[0].childNodes[0];
            var id = xml.getElementsByTagName("zpid")[0].childNodes[0];
            var lastUpdate = xml.getElementsByTagName("last-updated")[0].childNodes[0];
            this.homeInfo3 = {
                street: new XMLSerializer().serializeToString(street),
                city: new XMLSerializer().serializeToString(city),
                state: new XMLSerializer().serializeToString(state),
                zipcode: new XMLSerializer().serializeToString(zip),
                price: new XMLSerializer().serializeToString(amount),
                homeDetail: new XMLSerializer().serializeToString(homeDetails),
                lowPrice: new XMLSerializer().serializeToString(lowPrice),
                highPrice: new XMLSerializer().serializeToString(highPrice),
                _id: new XMLSerializer().serializeToString(id),
                lastUpdate: new XMLSerializer().serializeToString(lastUpdate)
            };
            this.postsService.setZillowData(this.homeInfo3);
            this.postsService.setShowSearchResult(false, true);
        }
        else {
            this.searchResult.isInvalidSearch = true;
        }
    };
    RealEstateComponent.prototype.processXml = function (data) {
        var parser = new DOMParser();
        var xml = parser.parseFromString(data.message, 'text/xml');
        var errorTag = xml.getElementsByTagName("code")[0].childNodes[0];
        this.error = new XMLSerializer().serializeToString(errorTag);
        var street = xml.getElementsByTagName("street")[0].childNodes[0];
        var zip = xml.getElementsByTagName("zipcode")[0].childNodes[0];
        var city = xml.getElementsByTagName("city")[0].childNodes[0];
        var state = xml.getElementsByTagName("state")[0].childNodes[0];
        var amount = xml.getElementsByTagName("amount")[0].childNodes[0];
        var homeDetails = xml.getElementsByTagName("homedetails")[0].childNodes[0];
        var lowPrice = xml.getElementsByTagName("low")[0].childNodes[0];
        var highPrice = xml.getElementsByTagName("high")[0].childNodes[0];
        var id = xml.getElementsByTagName("zpid")[0].childNodes[0];
        var lastUpdate = xml.getElementsByTagName("last-updated")[0].childNodes[0];
        this.homeInfo3 = {
            street: new XMLSerializer().serializeToString(street),
            city: new XMLSerializer().serializeToString(city),
            state: new XMLSerializer().serializeToString(state),
            zipcode: new XMLSerializer().serializeToString(zip),
            price: new XMLSerializer().serializeToString(amount),
            homeDetail: new XMLSerializer().serializeToString(homeDetails),
            lowPrice: new XMLSerializer().serializeToString(lowPrice),
            highPrice: new XMLSerializer().serializeToString(highPrice),
            _id: new XMLSerializer().serializeToString(id),
            lastUpdate: new XMLSerializer().serializeToString(lastUpdate)
        };
        this.postsService.setZillowData(this.homeInfo3);
    };
    //testing zillow full address
    RealEstateComponent.prototype.onGetZillowAddress = function () {
        var _this = this;
        var address = ["833+Canyon+Crest+Dr", "Irving", "TX"];
        var addressSplit = this.search.split(",");
        //check for valid address search
        if (addressSplit[0] === undefined || addressSplit[1] === undefined || addressSplit[2] === undefined) {
            this.searchResult.isInputAddressInvalid = true;
        }
        else {
            address = [addressSplit[0].trim(), addressSplit[1].trim(), addressSplit[2].trim()];
            this.postsService.getZillowFullAddress(address).subscribe(function (data) {
                _this.processXml2(data);
            });
        }
    };
    RealEstateComponent.ctorParameters = function () { return [
        { type: _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RealEstateComponent.prototype, "bankName", void 0);
    RealEstateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-real-estate',
            template: __webpack_require__(/*! raw-loader!./real-estate.component.html */ "./node_modules/raw-loader/index.js!./src/app/real-estate/real-estate.component.html"),
            styles: [__webpack_require__(/*! ./real-estate.component.css */ "./src/app/real-estate/real-estate.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RealEstateComponent);
    return RealEstateComponent;
}());



/***/ }),

/***/ "./src/app/remove-item/remove-item.component.css":
/*!*******************************************************!*\
  !*** ./src/app/remove-item/remove-item.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\n    border: 16px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 16px solid blue;\n    border-bottom: 16px solid blue;\n    width: 120px;\n    height: 120px;\n    -webkit-animation: spin 2s linear infinite;\n    animation: spin 2s linear infinite;\n  }\n  \n  @-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n  }\n  \n  @keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n  \n  .spinnerDiv {\n    position: absolute;\n    margin-left: 50%;\n    margin-top: 25%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVtb3ZlLWl0ZW0vcmVtb3ZlLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxLQUFLLCtCQUErQixFQUFFO0lBQ3RDLE9BQU8saUNBQWlDLEVBQUU7RUFDNUM7O0VBRUE7SUFDRSxLQUFLLCtCQUF1QixFQUF2Qix1QkFBdUIsRUFBRTtJQUM5QixPQUFPLGlDQUF5QixFQUF6Qix5QkFBeUIsRUFBRTtFQUNwQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3JlbW92ZS1pdGVtL3JlbW92ZS1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcbiAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCBibHVlO1xuICAgIGJvcmRlci1ib3R0b206IDE2cHggc29saWQgYmx1ZTtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxuXG4gIC5zcGlubmVyRGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAyNSU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/remove-item/remove-item.component.ts":
/*!******************************************************!*\
  !*** ./src/app/remove-item/remove-item.component.ts ***!
  \******************************************************/
/*! exports provided: RemoveItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveItemComponent", function() { return RemoveItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RemoveItemComponent = /** @class */ (function () {
    function RemoveItemComponent(postsService, http) {
        this.postsService = postsService;
        this.http = http;
        this.items = [{
                id: 1,
                name: 'Jasmine Milk Tea',
                description: 'Fresh made on order',
                price: '5.45',
                quantity: 2,
                sellerName: 'I-Tea',
                email: 'ITeas@gmail.com',
                phone: '510-451-3391'
            }];
        this.product = {
            id: 1,
            name: 'Custom Gaming/Productivity PC',
            description: 'Brand new',
            img: 'pc.img',
            price: 1000,
            currency: 'USD',
            quantity: 1,
            total: 1000,
            seller: 'Patrick Luu'
        };
        this.paidFor = false;
        this.isDisable = false;
    }
    RemoveItemComponent.prototype.ngOnInit = function () {
        //refresh all item from springboot
        this.getItemList2();
    };
    RemoveItemComponent.prototype.getItemList2 = function () {
        this.postsService.getItemShop();
    };
    RemoveItemComponent.prototype.removeItem = function (item, index) {
        var _this = this;
        var id = item.id;
        this.isDisable = true;
        this.postsService.deleteItem(id).subscribe(function (data) {
            _this.getItemList2();
            setTimeout(function () {
                _this.isDisable = false;
            }, 50);
        });
    };
    RemoveItemComponent.prototype.deleteImgur = function (res, index) {
        var deleteHashId = res.imageDeletehash;
        return this.postsService.deleteImgur(deleteHashId).subscribe(function (data) { return console.log(data); });
    };
    //testing callback to delay function
    RemoveItemComponent.prototype.removeItem2 = function (item, index) {
        var id = item.id;
        this.postsService.deleteItem(id).subscribe(function (data) { return console.log(data); });
    };
    RemoveItemComponent.prototype.deleteImgur2 = function (res, index, removeItem2) {
        var deleteHashId = res.imageDeletehash;
        // console.log(deleteHashId);
        this.postsService.deleteImgur(deleteHashId).subscribe(function (data) { return console.log(data); });
        return this.removeItem2(res, index);
    };
    RemoveItemComponent.prototype.getProductListing = function () {
        return this.postsService.getProduct();
    };
    RemoveItemComponent.ctorParameters = function () { return [
        { type: _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RemoveItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remove-item',
            template: __webpack_require__(/*! raw-loader!./remove-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/remove-item/remove-item.component.html"),
            styles: [__webpack_require__(/*! ./remove-item.component.css */ "./src/app/remove-item/remove-item.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RemoveItemComponent);
    return RemoveItemComponent;
}());



/***/ }),

/***/ "./src/app/service/data/todo-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/data/todo-data.service.ts ***!
  \***************************************************/
/*! exports provided: TodoDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDataService", function() { return TodoDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoDataService = /** @class */ (function () {
    function TodoDataService(http) {
        this.http = http;
    }
    TodoDataService.prototype.retrieveAllTodos = function (username) {
        return this.http.get("http://localhost:9090/users/" + username + "/todos");
    };
    TodoDataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    TodoDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TodoDataService);
    return TodoDataService;
}());



/***/ }),

/***/ "./src/app/service/data/welcome-data.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/data/welcome-data.service.ts ***!
  \******************************************************/
/*! exports provided: HelloWorldBean, WelcomeDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldBean", function() { return HelloWorldBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeDataService", function() { return WelcomeDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelloWorldBean = /** @class */ (function () {
    function HelloWorldBean(message, id, name) {
        this.message = message;
        this.id = id;
        this.name = name;
    }
    HelloWorldBean.ctorParameters = function () { return [
        { type: String },
        { type: Number },
        { type: String }
    ]; };
    return HelloWorldBean;
}());

var WelcomeDataService = /** @class */ (function () {
    function WelcomeDataService(http) {
        this.http = http;
    }
    WelcomeDataService.prototype.executeHelloWorldBeanService = function () {
        return this.http.get('http://localhost:9090/jpa/users');
    };
    WelcomeDataService.prototype.executeHelloWorldBeanServiceVariable = function (name) {
        return this.http.get("http://localhost:9090/hello-world/path-variable/" + name);
    };
    WelcomeDataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    WelcomeDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WelcomeDataService);
    return WelcomeDataService;
}());



/***/ }),

/***/ "./src/app/service/hardcoded-authencation.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/service/hardcoded-authencation.service.ts ***!
  \***********************************************************/
/*! exports provided: HardcodedAuthencationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardcodedAuthencationService", function() { return HardcodedAuthencationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HardcodedAuthencationService = /** @class */ (function () {
    function HardcodedAuthencationService() {
    }
    HardcodedAuthencationService.prototype.authenticate = function (username, password) {
        if (username === 'Patrick' && password === '') {
            sessionStorage.setItem('authenticaterUser', username);
            return true;
        }
        return false;
    };
    HardcodedAuthencationService.prototype.BashAuthenticate = function (username, password, registeredUsername, registeredPassword) {
        if (username === registeredUsername && password === registeredPassword) {
            sessionStorage.setItem('authenticaterUser', username);
            return true;
        }
        return false;
    };
    HardcodedAuthencationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('authenticaterUser');
        return !(user === null);
    };
    HardcodedAuthencationService.prototype.logout = function () {
        sessionStorage.removeItem('authenticaterUser');
    };
    HardcodedAuthencationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HardcodedAuthencationService);
    return HardcodedAuthencationService;
}());



/***/ }),

/***/ "./src/app/service/route-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/route-guard.service.ts ***!
  \************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hardcoded_authencation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hardcoded-authencation.service */ "./src/app/service/hardcoded-authencation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteGuardService = /** @class */ (function () {
    function RouteGuardService(hardcodedAuthencationService, router) {
        this.hardcodedAuthencationService = hardcodedAuthencationService;
        this.router = router;
    }
    RouteGuardService.prototype.canActivate = function (route, state) {
        if (this.hardcodedAuthencationService.isUserLoggedIn())
            return true;
        this.router.navigate(['login']);
        return false;
    };
    RouteGuardService.ctorParameters = function () { return [
        { type: _hardcoded_authencation_service__WEBPACK_IMPORTED_MODULE_1__["HardcodedAuthencationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    RouteGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_hardcoded_authencation_service__WEBPACK_IMPORTED_MODULE_1__["HardcodedAuthencationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RouteGuardService);
    return RouteGuardService;
}());



/***/ }),

/***/ "./src/app/shop/shop.component.css":
/*!*****************************************!*\
  !*** ./src/app/shop/shop.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.gallery {\n    border: 1px solid #ccc;\n}\n\n.container2 {\n    margin-left: 15px;\n    margin-right: 15px;\n    padding-bottom: 60px;\n}\n\ndiv.gallery:hover {\nborder: 1px solid black;\n}\n\ndiv.gallery img {\n    width: 100%;\n    height: auto;\n}\n\ndiv.desc {\npadding: 15px;\ntext-align: center;\n}\n\n* {\nbox-sizing: border-box;\n}\n\n.responsive {\nfloat: down;\nwidth: 40%;\nmargin-left: 30%;\nmargin-bottom: 30px;\n}\n\n.rating {\n    unicode-bidi: bidi-override;\n    direction: rtl;\n}\n\n.rating > span {\n    display: inline-block;\n    position: relative;\n    width: 1.2em;\n}\n\n.rating > span:hover:before,\n.rating > span:hover ~ span:before {\n     content: \"\\2605\";\n     position: absolute;\n}\n\n@media only screen and (max-width: 700px) {\n.responsive {\n    width: 49.99999%;\n    margin: 6px 0;\n}\n}\n\n@media only screen and (max-width: 500px) {\n    * {\n        margin: 0;\n        padding: 0;\n      }\n      \n    .responsive {\n        width: 100%;\n    }\n}\n\n.clearfix:after {\ncontent: \"\";\ndisplay: table;\nclear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0FBQ0EsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1YsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUNBOztLQUVLLGdCQUFnQjtLQUNoQixrQkFBa0I7QUFDdkI7O0FBRUE7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7O0FBRUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxVQUFVO01BQ1o7O0lBRUY7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxjQUFjO0FBQ2QsV0FBVztBQUNYIiwiZmlsZSI6InNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuZ2FsbGVyeSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLmNvbnRhaW5lcjIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cbiAgXG5kaXYuZ2FsbGVyeTpob3ZlciB7XG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuZGl2LmdhbGxlcnkgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbmRpdi5kZXNjIHtcbnBhZGRpbmc6IDE1cHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbioge1xuYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnJlc3BvbnNpdmUge1xuZmxvYXQ6IGRvd247XG53aWR0aDogNDAlO1xubWFyZ2luLWxlZnQ6IDMwJTtcbm1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5yYXRpbmcge1xuICAgIHVuaWNvZGUtYmlkaTogYmlkaS1vdmVycmlkZTtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbn1cbi5yYXRpbmcgPiBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxLjJlbTtcbn1cbi5yYXRpbmcgPiBzcGFuOmhvdmVyOmJlZm9yZSxcbi5yYXRpbmcgPiBzcGFuOmhvdmVyIH4gc3BhbjpiZWZvcmUge1xuICAgICBjb250ZW50OiBcIlxcMjYwNVwiO1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbi5yZXNwb25zaXZlIHtcbiAgICB3aWR0aDogNDkuOTk5OTklO1xuICAgIG1hcmdpbjogNnB4IDA7XG59XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAqIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgXG4gICAgLnJlc3BvbnNpdmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5jbGVhcmZpeDphZnRlciB7XG5jb250ZW50OiBcIlwiO1xuZGlzcGxheTogdGFibGU7XG5jbGVhcjogYm90aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _service_hardcoded_authencation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/hardcoded-authencation.service */ "./src/app/service/hardcoded-authencation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShopComponent = /** @class */ (function () {
    function ShopComponent(postsService, http, sanitizer, hardcodedAuthencationService, router) {
        this.postsService = postsService;
        this.http = http;
        this.sanitizer = sanitizer;
        this.hardcodedAuthencationService = hardcodedAuthencationService;
        this.router = router;
        this.items = [{
                id: 1,
                name: 'Jasmine Milk Tea',
                description: 'Fresh made on order',
                price: '5.45',
                quantity: 2,
                sellerName: 'I-Tea',
                email: 'ITeas@gmail.com',
                phone: '510-451-3391'
            }];
        this.product = {
            id: 1,
            name: 'Custom Gaming/Productivity PC',
            description: 'Brand new',
            img: 'pc.img',
            price: 1000,
            currency: 'USD',
            quantity: 1,
            total: 1000,
            seller: 'Patrick Luu',
            email: '',
            phone: ''
        };
        this.paidFor = false;
        this.imgurArray = [];
        this.testStyle = true;
        //manual paypal payment
        this.manualPaypal = function () {
            this.router.navigate(['/manualPaypal']);
        };
    }
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        //refresh all item from springboot
        this.getItemList2();
        this.postsService.getImages().subscribe(function (res) {
            _this.imgurPictures = res;
            for (var i = 0; i < _this.imgurPictures.data.length; i++) {
                _this.imgurArray.push({ 'link': _this.imgurPictures.data[i].link, 'id': _this.imgurPictures.data[i].id });
            }
        }, function (error) {
            console.log(error);
        });
        this.user2 = sessionStorage.getItem('authenticaterUser');
    };
    ShopComponent.prototype.getItemList2 = function () {
        this.postsService.getItemShop();
    };
    //get user already login info
    ShopComponent.prototype.getUserLoginInfo = function () {
        return this.postsService.getLoginUserInfo();
    };
    ShopComponent.prototype.addToCart2 = function (item) {
        if (this.hardcodedAuthencationService.isUserLoggedIn() === false) {
            this.router.navigate(['login']);
        }
        this.postsService.addToCart(item);
    };
    ShopComponent.prototype.getProductListing = function () {
        // console.log(this.postsService.getProduct());
        return this.postsService.getProduct();
    };
    // tslint:disable-next-line: comment-format
    //Paypal submit button
    ShopComponent.prototype.submitPayment = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
            })
        };
        var cartItem = this.postsService.getCart();
        var result = {
            name: '',
            description: '',
            currency: '',
            quantity: 0,
            seller: '',
            img: '',
            total: 0,
            price: 0,
            id: 1,
            email: '',
            phone: ''
        };
        cartItem.forEach(function (item, idx) {
            result.name += item.name;
            result.description = item.description;
            result.currency = item.currency;
            result.quantity = item.quantity;
            result.seller = item.seller;
            result.img = item.img;
            result.id = item.id;
        });
        result.email = this.postsService.getLoginUserInfo().email;
        result.phone = this.postsService.getLoginUserInfo().phone;
        result.total = this.postsService.getTotal();
        result.price = this.postsService.getTotal();
        this.product = result;
        return this.http.post('http://localhost:3000/pay', this.product, httpOptions).subscribe(function (data) { return _this.processPayment(data); });
    };
    ShopComponent.prototype.processPayment = function (data) {
        // console.log(data.url)
        var url = data.url;
        window.location.href = url;
    };
    ShopComponent.prototype.submitPayment2 = function () {
        return this.http.get('http://localhost:3000/api/giphy').subscribe(function (data) {
            // this.result = data
            // console.log(data);
        });
    };
    ShopComponent.prototype.getImage = function () {
        var _this = this;
        this.postsService.getImageService()
            .subscribe(function (res) {
            _this.retrieveResonse = res;
            _this.base64Data = _this.retrieveResonse.picByte;
            _this.retrievedImage = 'data:image/jpeg;base64,' + _this.base64Data;
        });
    };
    ShopComponent.prototype.getImage2 = function (imageName) {
        var _this = this;
        this.postsService.getImageService2(imageName)
            .subscribe(function (res) {
            _this.retrieveResonse = res;
            _this.base64Data = _this.retrieveResonse.picByte;
            _this.retrievedImage = 'data:image/jpeg;base64,' + _this.base64Data;
        });
    };
    ShopComponent.prototype.getImageArray = function () {
        var _this = this;
        this.postsService.getImageServiceArray()
            .subscribe(function (res) {
            _this.retrieveResonse = res;
            _this.base64Data = _this.retrieveResonse[0].picByte;
            _this.retrievedImage = 'data:image/jpeg;base64,' + _this.base64Data;
            var objectURL = 'data:image/jpeg;base64,' + _this.base64Data;
            _this.thumbnail = _this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
    };
    ShopComponent.ctorParameters = function () { return [
        { type: _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _service_hardcoded_authencation_service__WEBPACK_IMPORTED_MODULE_4__["HardcodedAuthencationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paypal', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ShopComponent.prototype, "paypalElement", void 0);
    ShopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/index.js!./src/app/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/shop/shop.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _service_hardcoded_authencation_service__WEBPACK_IMPORTED_MODULE_4__["HardcodedAuthencationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/success-payment/success-payment.component.css":
/*!***************************************************************!*\
  !*** ./src/app/success-payment/success-payment.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Y2Nlc3MtcGF5bWVudC9zdWNjZXNzLXBheW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/success-payment/success-payment.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/success-payment/success-payment.component.ts ***!
  \**************************************************************/
/*! exports provided: SuccessPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPaymentComponent", function() { return SuccessPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/posts/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuccessPaymentComponent = /** @class */ (function () {
    function SuccessPaymentComponent(postsService) {
        this.postsService = postsService;
    }
    SuccessPaymentComponent.prototype.ngOnInit = function () {
        this.postsService.setIsPaid(true);
        // console.log(this.postsService.getIsPaid2());
    };
    SuccessPaymentComponent.prototype.sendEmail = function () {
        this.postsService.sendEmail().subscribe(function (data) { return console.log(data); });
    };
    SuccessPaymentComponent.ctorParameters = function () { return [
        { type: _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] }
    ]; };
    SuccessPaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-success-payment',
            template: __webpack_require__(/*! raw-loader!./success-payment.component.html */ "./node_modules/raw-loader/index.js!./src/app/success-payment/success-payment.component.html"),
            styles: [__webpack_require__(/*! ./success-payment.component.css */ "./src/app/success-payment/success-payment.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]])
    ], SuccessPaymentComponent);
    return SuccessPaymentComponent;
}());



/***/ }),

/***/ "./src/app/todo-edit/todo-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/todo-edit/todo-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8tZWRpdC90b2RvLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/todo-edit/todo-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-edit/todo-edit.component.ts ***!
  \**************************************************/
/*! exports provided: TodoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEditComponent", function() { return TodoEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/posts/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoEditComponent = /** @class */ (function () {
    function TodoEditComponent(postsService, router, route) {
        this.postsService = postsService;
        this.router = router;
        this.route = route;
        this.post =
            {
                id: "",
                title: "",
                content: "",
                description: "",
                name: "",
                date: "02/23/20"
            };
    }
    TodoEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //retriving one post to edit
        this.id = this.route.snapshot.params['id'];
        this.postsService.retrievePostSpring(this.id).subscribe(function (data) { return _this.setPostInstance(data); });
    };
    //set api data to local Post instance
    TodoEditComponent.prototype.setPostInstance = function (data) {
        this.post = data;
    };
    TodoEditComponent.prototype.savePost = function () {
        var _this = this;
        this.postsService.updatePostSpring('1', this.post).subscribe(function (data) {
            _this.router.navigate(['realEstate']);
        });
    };
    TodoEditComponent.ctorParameters = function () { return [
        { type: _posts_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    TodoEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-edit',
            template: __webpack_require__(/*! raw-loader!./todo-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo-edit/todo-edit.component.html"),
            styles: [__webpack_require__(/*! ./todo-edit.component.css */ "./src/app/todo-edit/todo-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TodoEditComponent);
    return TodoEditComponent;
}());



/***/ }),

/***/ "./src/app/todos/todos.component.css":
/*!*******************************************!*\
  !*** ./src/app/todos/todos.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/todos/todos.component.ts":
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/*! exports provided: Todo, TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data/todo-data.service */ "./src/app/service/data/todo-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Todo = /** @class */ (function () {
    function Todo(id, description, done, targetDate) {
        this.id = id;
        this.description = description;
        this.done = done;
        this.targetDate = targetDate;
    }
    Todo.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: Boolean },
        { type: Date }
    ]; };
    return Todo;
}());

var TodosComponent = /** @class */ (function () {
    function TodosComponent(todoService, router, route) {
        this.todoService = todoService;
        this.router = router;
        this.route = route;
    }
    TodosComponent.prototype.ngOnInit = function () {
    };
    TodosComponent.ctorParameters = function () { return [
        { type: _service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_2__["TodoDataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    TodosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! raw-loader!./todos.component.html */ "./node_modules/raw-loader/index.js!./src/app/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/todos/todos.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_2__["TodoDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "./src/app/update-bash/update-bash.component.css":
/*!*******************************************************!*\
  !*** ./src/app/update-bash/update-bash.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1iYXNoL3VwZGF0ZS1iYXNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/update-bash/update-bash.component.ts":
/*!******************************************************!*\
  !*** ./src/app/update-bash/update-bash.component.ts ***!
  \******************************************************/
/*! exports provided: UpdateBashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBashComponent", function() { return UpdateBashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdateBashComponent = /** @class */ (function () {
    function UpdateBashComponent() {
    }
    UpdateBashComponent.prototype.ngOnInit = function () {
    };
    UpdateBashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-bash',
            template: __webpack_require__(/*! raw-loader!./update-bash.component.html */ "./node_modules/raw-loader/index.js!./src/app/update-bash/update-bash.component.html"),
            styles: [__webpack_require__(/*! ./update-bash.component.css */ "./src/app/update-bash/update-bash.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateBashComponent);
    return UpdateBashComponent;
}());



/***/ }),

/***/ "./src/app/wellcome/wellcome.component.css":
/*!*************************************************!*\
  !*** ./src/app/wellcome/wellcome.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGxjb21lL3dlbGxjb21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/wellcome/wellcome.component.ts":
/*!************************************************!*\
  !*** ./src/app/wellcome/wellcome.component.ts ***!
  \************************************************/
/*! exports provided: WellcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellcomeComponent", function() { return WellcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_welcome_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data/welcome-data.service */ "./src/app/service/data/welcome-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WellcomeComponent = /** @class */ (function () {
    function WellcomeComponent(service, router) {
        this.service = service;
        this.router = router;
        this.name = "Patrick";
    }
    WellcomeComponent.prototype.ngOnInit = function () {
        this.user2 = sessionStorage.getItem('authenticaterUser');
    };
    WellcomeComponent.prototype.clickNext = function () {
        this.router.navigate(['realEstate']);
    };
    WellcomeComponent.prototype.getWelcomeMessage = function () {
        var _this = this;
        this.service.executeHelloWorldBeanService().subscribe(function (data) { return _this.handleSuccessfulResponseBean(data); }, function (error) { return _this.handleErrorResponse(error); });
    };
    WellcomeComponent.prototype.getWelcomeMessageWithParameter = function () {
        var _this = this;
        this.service.executeHelloWorldBeanServiceVariable(this.name).subscribe(function (data) { return _this.handleSuccessfulResponse(data); }, function (error) { return _this.handleErrorResponse(error); });
    };
    WellcomeComponent.prototype.handleErrorResponse = function (error) {
        console.log(error);
    };
    WellcomeComponent.prototype.handleSuccessfulResponse = function (response) {
        this.welcomeMessageFromService = response.message;
    };
    WellcomeComponent.prototype.handleSuccessfulResponseBean = function (response) {
        this.welcomeMessageFromService = response[0].name;
    };
    WellcomeComponent.ctorParameters = function () { return [
        { type: _service_data_welcome_data_service__WEBPACK_IMPORTED_MODULE_1__["WelcomeDataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('welcome'),
        __metadata("design:type", String)
    ], WellcomeComponent.prototype, "welcome", void 0);
    WellcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wellcome',
            template: __webpack_require__(/*! raw-loader!./wellcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/wellcome/wellcome.component.html"),
            styles: [__webpack_require__(/*! ./wellcome.component.css */ "./src/app/wellcome/wellcome.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data_welcome_data_service__WEBPACK_IMPORTED_MODULE_1__["WelcomeDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WellcomeComponent);
    return WellcomeComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pluu/git/monkey/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map