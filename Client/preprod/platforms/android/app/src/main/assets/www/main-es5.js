function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/all-services-action/all-services-action.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-services-action/all-services-action.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAllServicesActionAllServicesActionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>All services action</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"allServices\">\n    <div class=\"facebookService\">\n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"logo-facebook\" color=\"primary\" slot=\"start\"></ion-icon>\n      <ion-label>Use our Facebook's services.</ion-label>\n      <ion-button (click)=\"goToFacebookWidgets()\" fill=\"clear\"  slot=\"end\">More details</ion-button>\n    </ion-item>\n    <ion-card-content>\n      This section is reserved and constraints by an actions services.\n    </ion-card-content>\n  </ion-card>\n</div>\n<div class=\"twitterService\">\n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"logo-twitter\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label>Use our Twitter's services.</ion-label>\n      <ion-button (click)=\"goToTwitterWidgets()\" fill=\"clear\" slot=\"end\">More details</ion-button>\n    </ion-item>\n    <ion-card-content>\n      This section is reserved and constraints by an actions services.\n    </ion-card-content>\n  </ion-card>\n</div>\n<div class=\"mailService\">\n  <ion-card>\n    <ion-item>\n      <ion-icon ios=\"ios-mail\" md=\"md-mail\" slot=\"start\"></ion-icon>\n      <ion-label>Use our Mail's services.</ion-label>\n      <ion-button (click)=\"goToMailwidgets()\" fill=\"clear\" slot=\"end\">More details</ion-button>\n    </ion-item>\n    <ion-card-content>\n      This section is reserved and constraints by an actions services.\n    </ion-card-content>\n  </ion-card>\n</div>\n<div class=\"backHome\">\n<ion-button color=\"danger\" (click)=\"backToHome()\">Back</ion-button>\n</div>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/all-services-reaction/all-services-reaction.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-services-reaction/all-services-reaction.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAllServicesReactionAllServicesReactionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>All services reaction</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"allServices\">\n<div class=\"githubService\">\n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"logo-github\" slot=\"start\" color=\"dark\"></ion-icon>\n      <ion-label>Use our Github's services.</ion-label>\n      <ion-button (click)=\"goToGithubWidgets()\" fill=\"clear\" slot=\"end\">More details</ion-button>\n    </ion-item>\n    <ion-card-content>\n      This section is reserved and constraints by an reactions services.\n    </ion-card-content>\n  </ion-card>\n</div>\n<div class=\"weatherService\">\n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"partly-sunny\" slot=\"start\" color=\"warning\"></ion-icon>\n      <ion-label>Use our Weather's services.</ion-label>\n      <ion-button (click)=\"goToWeatherWidgets()\" fill=\"clear\" slot=\"end\">More details</ion-button>\n    </ion-item>\n    <ion-card-content>\n      This section is reserved and constraints by an reactions services.\n    </ion-card-content>\n  </ion-card>\n</div>\n<div class=\"currencyService\">\n  <ion-card>\n    <ion-item>\n      <ion-icon ios=\"ios-cash\" md=\"md-cash\" slot=\"start\"></ion-icon>\n      <ion-label>Use our Currencie's services.</ion-label>\n      <ion-button (click)=\"goToCurrencieswidgets()\" fill=\"clear\" slot=\"end\">More details</ion-button>\n    </ion-item>\n    <ion-card-content>\n      This section is reserved and constraints by an reactions services.\n    </ion-card-content>\n  </ion-card>\n</div>\n<div class=\"TimerService\">\n  <ion-card>\n    <ion-item>\n      <ion-icon ios=\"ios-cash\" md=\"md-cash\" slot=\"start\"></ion-icon>\n      <ion-label>Use our Currencie's services.</ion-label>\n      <ion-button (click)=\"goToTimerWidgets()\" fill=\"clear\" slot=\"end\">More details</ion-button>\n    </ion-item>\n    <ion-card-content>\n      This section is reserved and constraints by an reactions services.\n    </ion-card-content>\n  </ion-card>\n</div>\n<div class=\"backHome\">\n  <ion-button color=\"danger\" (click)=\"backToHome()\">Back</ion-button>\n  </div>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/currencie-reactions/currencie-reactions.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/currencie-reactions/currencie-reactions.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCurrencieReactionsCurrencieReactionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>All reactions of Currency</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"weatherServices\">\n  <ion-card>\n    <ion-card-header>\n      <ion-item>\n        <ion-icon ios=\"ios-cash\" md=\"md-cash\" slot=\"start\"></ion-icon>\n        <ion-button (click)=\"connectToWeather()\" fill=\"clear\" slot=\"end\">Use all reactions</ion-button>\n      </ion-item>      \n      <ion-card-subtitle>Reaction of Currency's Service</ion-card-subtitle>\n      <ion-card-title>CURRENCY</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n</div>\n  \n  <ion-card>\n    <div class=\"publishWeather\">\n    <ion-item>\n    <button item-right clear (click)=\"seeFluctuation()\">\n      <ion-icon name=\"create\" slot=\"start\"></ion-icon>\n    </button>\n      <ion-label>See fluctuation of Dollar</ion-label>\n    </ion-item>\n  </div>\n  </ion-card>\n  <div class=\"backInstagram\">\n    <ion-button (click)=\"goToAllServices()\" color=\"danger\">Back</ion-button>\n  </div>\n\n  \n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar.page.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar.page.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCurrencieReactionsFluctuationDollarFluctuationDollarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Follow the fluctuation of Dollar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"messageToPostFacebook\">\n  <form>\n    <br>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Fluctuation Dollar</ion-card-subtitle>\n        <ion-card-title>Enter a value</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n        <ion-input placeholder=\"20\">$</ion-input>\n      </ion-card-content>\n      <ion-button color=\"primary\">Publish</ion-button>\n      <ion-button color=\"danger\" (click)=\"backToFacebook()\">Back</ion-button>\n      <br>\n      <br>\n    </ion-card>\n  </form>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/github-reactions/do-commit-github/do-commit-github.page.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/github-reactions/do-commit-github/do-commit-github.page.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGithubReactionsDoCommitGithubDoCommitGithubPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Make a commit on repository</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"messageToPostFacebook\">\n  <form>\n    <br>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Github</ion-card-subtitle>\n        <ion-card-title>Name of repository</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n        <ion-button color=\"primary\" (click)=\"allRepository()\">Refresh repositories</ion-button>\n        <br>\n        <div class=\"allRepositories\">\n          <ion-item>\n            <ion-label>Repositories</ion-label>\n            <ion-select multiple=\"false\" [(ngModel)]=\"qty\" cancelText=\"Cancel\" okText=\"Lourd!\">\n              <ion-select-option  *ngFor=\"let data of repositories\" value=\"{{ data }}\">{{ data }}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          </div>\n      </ion-card-content>\n      <ion-button color=\"primary\" (click)=\"chooseReactions()\">Choose reaction</ion-button>\n      <ion-button color=\"danger\" (click)=\"backToFacebook()\">Back</ion-button>\n      <br>\n      <br>\n    </ion-card>\n  </form>\n</div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/github-reactions/github-reactions.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/github-reactions/github-reactions.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGithubReactionsGithubReactionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>All reactions of Github</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"githubServices\">\n  <ion-card>\n    <ion-card-header>\n      <ion-item>\n        <ion-icon name=\"logo-github\" color=\"dark\" slot=\"start\"></ion-icon>\n        <ion-button (click)=\"loginGithub()\" fill=\"clear\" slot=\"end\">Use all reactions</ion-button> \n      </ion-item>      \n      <ion-card-subtitle>Reaction of Github's Service</ion-card-subtitle>\n      <ion-card-title>GITHUB</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n</div>\n  \n  <ion-card>\n    <div class=\"publishPost\">\n    <ion-item>\n    <button item-right clear (click)=\"doCommitGithub()\">\n      <ion-icon name=\"create\" slot=\"start\"></ion-icon>\n    </button>\n      <ion-label>Make a commit</ion-label>\n    </ion-item>\n  </div>\n  </ion-card>\n  <div class=\"backFacebook\">\n    <ion-button (click)=\"goToAllServices()\" color=\"danger\">Back</ion-button>\n  </div>\n\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"logo\">\n    <ion-icon name=\"git-network\" color=\"primary\">Singin</ion-icon>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label color=\"primary\">Email</ion-label>\n      <ion-input color=\"grey\" placeholder=\"Adresse mail\" [(ngModel)]=\"mail\" type=\"email\" value=\"\" (keyup.enter)=\"mailLogin()\"></ion-input>\n    </ion-item>\n    <br>\n    <ion-item>\n      <ion-label color=\"primary\">Password</ion-label>\n      <ion-input color=\"grey\" placeholder=\"Mot de passe\" [(ngModel)]=\"password\" type=\"password\" value=\"\" (keyup.enter)=\"mailLogin()\"></ion-input>\n    </ion-item>\n    <br>\n    <ion-item lines=\"none\">\n      <ion-button color=\"grey\" slot=\"end\" fill=\"clear\">Forgot password?</ion-button>\n    </ion-item>\n    <br>\n    <div class=\"btHome\">\n      <br>\n      <ion-button type=\"submit\" (click)=\"mailLogin()\">Sign in</ion-button>\n      <ion-button round block outline color=\"medium\" (click)=\"goToRegister()\">Sign up</ion-button>\n      <br>\n    </div>\n    <div class=\"flex_box\">\n      <ion-item line=\"none\">\n        <ion-label color=\"medium\" text-center>Or connect you with</ion-label>\n      </ion-item>\n    </div>\n    <br>\n    <div class=\"flex\">\n      <ion-button color=\"primary\" shape=\"round\" (click)=\"facebookLogin()\">\n        <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\n        Facebook\n      </ion-button>\n      <ion-button color=\"danger\" shape=\"round\" (click)=\"googleLogin()\">\n        <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>\n        Google\n      </ion-button>\n    </div>\n    <br>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mail-reactions/mail-reactions.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mail-reactions/mail-reactions.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMailReactionsMailReactionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>All reactions of Twitter</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mailServices\">\n  <ion-card>\n    <ion-card-header>\n      <ion-item>\n        <ion-icon ios=\"ios-mail\" md=\"md-mail\" slot=\"start\"></ion-icon>\n        <ion-button (click)=\"connectToMailAdress()\" fill=\"clear\" slot=\"end\">Use all reactions</ion-button>\n      </ion-item>      \n      <ion-card-subtitle>Reaction of Mail's Service</ion-card-subtitle>\n      <ion-card-title>MAIL</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n</div>\n  \n  <ion-card>\n  <div class=\"publishPicture\">\n    <ion-item>\n      <button item-right clear (click)=\"sendEmail()\">\n        <ion-icon name=\"mail-open\"></ion-icon>\n      </button>\n      <ion-label>Connect you on your personnal email adress.</ion-label>\n    </ion-item>\n  </div>\n  </ion-card>\n  <div class=\"backTwitter\">\n    <ion-button (click)=\"goToAllServices()\" color=\"danger\">Back</ion-button>\n  </div>\n\n  \n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mail-reactions/send-email/send-email.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mail-reactions/send-email/send-email.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMailReactionsSendEmailSendEmailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Send an email</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"messageToPostFacebook\">\n  <form>\n    <br>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Email</ion-card-subtitle>\n        <ion-card-title>Send an email</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n        <ion-input placeholder=\"ex: julien.ferrier@epitech.eu\">From:</ion-input>\n        <ion-input placeholder=\"ex: guillaume.lenoir@epitech.eu\">To:</ion-input>\n        <ion-input placeholder=\"ex: Area issues\">Object:</ion-input>\n        <br>\n        <ion-input placeholder=\"Write something...\">Message:</ion-input>\n      </ion-card-content>\n      <ion-button color=\"primary\">Send</ion-button>\n      <ion-button color=\"danger\" (click)=\"backToFacebook()\">Cancel</ion-button>\n      <br>\n      <br>\n    </ion-card>\n  </form>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Signup\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label color=\"primary\">Email</ion-label>\n      <ion-input color=\"grey\" placeholder=\"Adresse mail\" [(ngModel)]=\"mail\" type=\"email\" value=\"\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"primary\">Password</ion-label>\n      <ion-input color=\"grey\" placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" value=\"\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"primary\">Confirm your password</ion-label>\n      <ion-input color=\"grey\" placeholder=\"Confirm your password\" [(ngModel)]=\"password\" type=\"password\" value=\"\"></ion-input>\n    </ion-item>\n    <br>\n    <div class=\"connect\">\n    <div class=\"btRegister\">\n      <ion-button round block outline color=\"success\" (click)=\"register()\">M'inscrire</ion-button>\n      <br>\n      <ion-button round block outline color=\"medium\" (click)=\"backToLogin()\">Back</ion-button>\n    </div>\n  </div>\n    <div class=\"flex_box\">\n      <ion-item line=\"none\">\n        <ion-label color=\"primary\" text-center>Or continue you with</ion-label>\n      </ion-item>\n    </div>\n    <div class=\"flex\">\n      <ion-button color=\"primary\" shape=\"round\">\n        <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\n        Facebook\n      </ion-button>\n      <ion-button color=\"danger\" shape=\"round\">\n        <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>\n        Google\n      </ion-button>\n    </div>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/starter/starter.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/starter/starter.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStarterStarterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\n  Generated template for the StarterPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n<div class=\"starterPage\"> \n  <div class=\"topLeft\">\n    <h3>IF</h3>\n  </div>\n  <div class=\"topRight\">\n    <ion-button (click)=\"allServicesReaction()\">\n      <ion-icon slot=\"end\" round name=\"add-circle\"></ion-icon>\n      This\n    </ion-button>\n  </div>\n</div>\n<div class=\"starterPage2\">\n  <div class=\"bottomLeft\">\n    <h3>THEN</h3>\n  </div>\n  <div class=\"bottomRight\">\n    <ion-button (click)=\"allServicesAction()\">\n      <ion-icon slot=\"end\" round name=\"add-circle\"></ion-icon>\n      That\n    </ion-button>\n  </div>\n</div>\n\n<div class=\"pushIntoFirebase\">\n  <ion-button (click)=\"getInfo()\">\n    Validate\n  </ion-button>\n</div>\n\n\n\n\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-reactions/start-timer/start-timer.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timer-reactions/start-timer/start-timer.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTimerReactionsStartTimerStartTimerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Publish a statut on Facebook</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"beginTheTimer\">\n  <form>\n    <br>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Timer</ion-card-subtitle>\n        <ion-card-title>Duration</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n        <ion-input placeholder=\"Express yourself...\"></ion-input>\n        <br>\n      </ion-card-content>\n      <ion-button color=\"primary\">Start</ion-button>\n      <ion-button color=\"danger\" (click)=\"backToServices()\">Back</ion-button>\n      <br>\n      <br>\n    </ion-card>\n  </form>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-reactions/timer-reactions.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timer-reactions/timer-reactions.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTimerReactionsTimerReactionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Timer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"timerServices\">\n  <ion-card>\n    <ion-card-header>\n      <ion-item>\n        <ion-icon name=\"ios-timer\" color=\"primary\" slot=\"start\"></ion-icon>\n        <ion-button (click)=\"connectToFacebook()\" fill=\"clear\" slot=\"end\">Use all reactions</ion-button>\n      </ion-item>      \n      <ion-card-subtitle>Action of Timer's Service</ion-card-subtitle>\n      <ion-card-title>TIMER</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n</div>\n  \n  <ion-card>\n    <div class=\"timerStart\">\n    <ion-item>\n    <button (click)=\"beginTheStarter()\" item-right clear>\n      <ion-icon name=\"create\" slot=\"start\"></ion-icon>\n    </button>\n      <ion-label>Publish an statut on your account.</ion-label>\n    </ion-item>\n    </div>\n  </ion-card>\n  \n  <div class=\"back\">\n  <ion-button (click)=\"goToAllServices()\" color=\"danger\">Back</ion-button>\n</div>\n\n\n  \n</ion-content>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter.page.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter.page.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTwitterReactionsPublishPictureTwitterPublishPictureTwitterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>publish-picture-twitter</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"pictureToPostTwitter\">\n    <form>\n      <br>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Twitter</ion-card-subtitle>\n          <ion-card-title>Post a picture</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content>\n          <div class=\"joinFolder\">\n            <ion-label id=\"profile_image\" color=\"primary\" stacked>Join here</ion-label>\n            <ion-input type=\"file\" accept=\"image/*\" id=\"upload\" (ionChange)=\"imageFilePath_change($event)\"></ion-input>\n          </div>\n        </ion-card-content>\n        <ion-button color=\"primary\">Publish</ion-button>\n        <ion-button color=\"danger\" (click)=\"backToTwitter2()\">Back</ion-button>\n        <br>\n        <br>\n      </ion-card>\n    </form>\n  \n  </div>\n  </ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter.page.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter.page.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTwitterReactionsPublishPostTwitterPublishPostTwitterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Publish Picture on Twitter</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"messageToPostFacebook\">\n      <br>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Twitter</ion-card-subtitle>\n          <ion-card-title>Create a post</ion-card-title>\n        </ion-card-header>\n          <ion-input type=\"text\" [(ngModel)]=\"tweet\" placeholder=\"Express yourself...\" id=\"tweet\"></ion-input>\n          <br>\n        <ion-button color=\"primary\" (click)=\"chooseReaction()\">Publish</ion-button>\n        <ion-button color=\"danger\" (click)=\"backToTwitter()\">Back</ion-button>\n        <br>\n        <br>\n      </ion-card>\n  </div>\n  </ion-content>\n  \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/twitter-reactions/twitter-reactions.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/twitter-reactions/twitter-reactions.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTwitterReactionsTwitterReactionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>All reactions of Twitter</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"twitterServices\">\n  <ion-card>\n    <ion-card-header>\n      <ion-item>\n        <ion-icon name=\"logo-twitter\" color=\"primary\" slot=\"start\"></ion-icon>\n        <ion-button (click)=\"connectToTwitter()\" fill=\"clear\" slot=\"end\">Use all reactions</ion-button>\n      </ion-item>      \n      <ion-card-subtitle>Reaction of Twitter's Service</ion-card-subtitle>\n      <ion-card-title>TWITTER</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n</div>\n  \n  <ion-card>\n    <div class=\"publishPost\">\n    <ion-item>\n    <button (click)=\"publishPostTwitter()\" item-right clear (click)=\"got\">\n      <ion-icon name=\"create\" slot=\"start\"></ion-icon>\n    </button>\n      <ion-label>Publish an statut on your account.</ion-label>\n    </ion-item>\n  </div>\n\n  \n  <div class=\"publishPicture\">\n    <ion-item>\n      <button item-right clear (click)=\"publishPictureTwitter()\">\n      <ion-icon name=\"images\" slot=\"start\"></ion-icon>\n    </button>\n      <ion-label>Publish a picture on your account.</ion-label>\n    </ion-item>\n  </div>\n  </ion-card>\n  <div class=\"backTwitter\">\n    <ion-button (click)=\"goToAllServices()\" color=\"danger\">Back</ion-button>\n  </div>\n\n  \n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/weather-reactions/weather-city/weather-city.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/weather-reactions/weather-city/weather-city.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWeatherReactionsWeatherCityWeatherCityPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Weather in the city</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"seeWhatIsTheweather\">\n    <form>\n      <br>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Weather</ion-card-subtitle>\n          <ion-card-title>What is the weather in this city ?</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content>\n          <ion-input placeholder=\"Ex: Los Angeles\"></ion-input>\n          <br>\n        </ion-card-content>\n        <ion-button color=\"primary\">Submit</ion-button>\n        <ion-button color=\"danger\" (click)=\"backToServices()\">Back</ion-button>\n        <br>\n        <br>\n      </ion-card>\n    </form>\n  \n  </div>\n  </ion-content>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/weather-reactions/weather-reactions.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/weather-reactions/weather-reactions.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWeatherReactionsWeatherReactionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>All reactions of Weather</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"weatherServices\">\n  <ion-card>\n    <ion-card-header>\n      <ion-item>\n        <ion-icon name=\"partly-sunny\" slot=\"start\"></ion-icon>\n        <ion-button (click)=\"connectToWeather()\" fill=\"clear\" slot=\"end\">Use all reactions</ion-button>\n      </ion-item>      \n      <ion-card-subtitle>Reaction of Weather's Service</ion-card-subtitle>\n      <ion-card-title>WEATHER</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n</div>\n  \n  <ion-card>\n    <div class=\"publishWeather\">\n    <ion-item>\n    <button item-right clear (click)=\"whichCity()\">\n      <ion-icon name=\"create\" slot=\"start\"></ion-icon>\n    </button>\n      <ion-label>See what is the weather in a city.</ion-label>\n    </ion-item>\n  </div>\n  </ion-card>\n  <div class=\"backInstagram\">\n    <ion-button (click)=\"goToAllServices()\" color=\"danger\">Back</ion-button>\n  </div>\n\n  \n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/all-services-action/all-services-action-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/all-services-action/all-services-action-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: AllServicesActionPageRoutingModule */

  /***/
  function srcAppAllServicesActionAllServicesActionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllServicesActionPageRoutingModule", function () {
      return AllServicesActionPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _all_services_action_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./all-services-action.page */
    "./src/app/all-services-action/all-services-action.page.ts");

    var routes = [{
      path: '',
      component: _all_services_action_page__WEBPACK_IMPORTED_MODULE_3__["AllServicesActionPage"]
    }];

    var AllServicesActionPageRoutingModule = function AllServicesActionPageRoutingModule() {
      _classCallCheck(this, AllServicesActionPageRoutingModule);
    };

    AllServicesActionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AllServicesActionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/all-services-action/all-services-action.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/all-services-action/all-services-action.module.ts ***!
    \*******************************************************************/

  /*! exports provided: AllServicesActionPageModule */

  /***/
  function srcAppAllServicesActionAllServicesActionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllServicesActionPageModule", function () {
      return AllServicesActionPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _all_services_action_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./all-services-action-routing.module */
    "./src/app/all-services-action/all-services-action-routing.module.ts");
    /* harmony import */


    var _all_services_action_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./all-services-action.page */
    "./src/app/all-services-action/all-services-action.page.ts");

    var AllServicesActionPageModule = function AllServicesActionPageModule() {
      _classCallCheck(this, AllServicesActionPageModule);
    };

    AllServicesActionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _all_services_action_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllServicesActionPageRoutingModule"]],
      declarations: [_all_services_action_page__WEBPACK_IMPORTED_MODULE_6__["AllServicesActionPage"]]
    })], AllServicesActionPageModule);
    /***/
  },

  /***/
  "./src/app/all-services-action/all-services-action.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/all-services-action/all-services-action.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAllServicesActionAllServicesActionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".instagramService ion-icon {\n  border-radius: 10%;\n  color: white;\n  background: -webkit-gradient(linear, left top, left bottom, from(45DEG), color-stop(#405DE6), color-stop(#5851DB), color-stop(#833AB4), color-stop(#C13584), color-stop(#E1306C), to(#FD1D1D));\n  background: linear-gradient(45DEG, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);\n}\n\n.instagramService ion-button {\n  color: white;\n  background: -webkit-gradient(linear, left top, left bottom, from(45DEG), color-stop(#405DE6), color-stop(#5851DB), color-stop(#833AB4), color-stop(#C13584), color-stop(#E1306C), to(#FD1D1D));\n  background: linear-gradient(45DEG, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);\n  border-color: red;\n}\n\n.facebookService ion-button {\n  background: #405DE6;\n  color: white;\n}\n\n.twitterService ion-button {\n  background: #38A1F3;\n  color: white;\n}\n\n.githubService ion-button {\n  background: black;\n  color: white;\n}\n\n.weatherService ion-button {\n  background: #fdee00;\n  color: white;\n}\n\n.timerService ion-button {\n  background: darkgrey;\n  color: white;\n}\n\n.backHome ion-button {\n  margin: auto;\n  display: block;\n}\n\n.mailService ion-icon {\n  color: blueviolet;\n}\n\n.mailService ion-button {\n  background: blueviolet;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbXMvdGVzdHQvTW9iaWxlL3NyYy9hcHAvYWxsLXNlcnZpY2VzLWFjdGlvbi9hbGwtc2VydmljZXMtYWN0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWxsLXNlcnZpY2VzLWFjdGlvbi9hbGwtc2VydmljZXMtYWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDhMQUFBO0VBQUEsd0ZBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSw4TEFBQTtFQUFBLHdGQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWxsLXNlcnZpY2VzLWFjdGlvbi9hbGwtc2VydmljZXMtYWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnN0YWdyYW1TZXJ2aWNlIGlvbi1pY29uIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NURFRywgIzQwNURFNiwgIzU4NTFEQiwgIzgzM0FCNCwgI0MxMzU4NCwgI0UxMzA2QywgI0ZEMUQxRCk7XG59XG5cbi5pbnN0YWdyYW1TZXJ2aWNlIGlvbi1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVERUcsICM0MDVERTYsICM1ODUxREIsICM4MzNBQjQsICNDMTM1ODQsICNFMTMwNkMsICNGRDFEMUQpO1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4uZmFjZWJvb2tTZXJ2aWNlIGlvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICM0MDVERTY7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4udHdpdHRlclNlcnZpY2UgaW9uLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzM4QTFGMztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5naXRodWJTZXJ2aWNlIGlvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLndlYXRoZXJTZXJ2aWNlIGlvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNmZGVlMDA7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4udGltZXJTZXJ2aWNlIGlvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtncmV5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhY2tIb21lIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1haWxTZXJ2aWNlIGlvbi1pY29uIHtcbiAgICBjb2xvcjogYmx1ZXZpb2xldDtcbn1cblxuLm1haWxTZXJ2aWNlIGlvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGJsdWV2aW9sZXQ7XG4gICAgY29sb3I6IHdoaXRlO1xufSIsIi5pbnN0YWdyYW1TZXJ2aWNlIGlvbi1pY29uIHtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NURFRywgIzQwNURFNiwgIzU4NTFEQiwgIzgzM0FCNCwgI0MxMzU4NCwgI0UxMzA2QywgI0ZEMUQxRCk7XG59XG5cbi5pbnN0YWdyYW1TZXJ2aWNlIGlvbi1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NURFRywgIzQwNURFNiwgIzU4NTFEQiwgIzgzM0FCNCwgI0MxMzU4NCwgI0UxMzA2QywgI0ZEMUQxRCk7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4uZmFjZWJvb2tTZXJ2aWNlIGlvbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjNDA1REU2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50d2l0dGVyU2VydmljZSBpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzM4QTFGMztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZ2l0aHViU2VydmljZSBpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLndlYXRoZXJTZXJ2aWNlIGlvbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZmRlZTAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aW1lclNlcnZpY2UgaW9uLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IGRhcmtncmV5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWNrSG9tZSBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1haWxTZXJ2aWNlIGlvbi1pY29uIHtcbiAgY29sb3I6IGJsdWV2aW9sZXQ7XG59XG5cbi5tYWlsU2VydmljZSBpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogYmx1ZXZpb2xldDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/all-services-action/all-services-action.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/all-services-action/all-services-action.page.ts ***!
    \*****************************************************************/

  /*! exports provided: AllServicesActionPage */

  /***/
  function srcAppAllServicesActionAllServicesActionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllServicesActionPage", function () {
      return AllServicesActionPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _github_reactions_githubManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../github-reactions/githubManager */
    "./src/app/github-reactions/githubManager.ts");

    var AllServicesActionPage = /*#__PURE__*/function () {
      function AllServicesActionPage(router, route, root, navCtrl, githubManager) {
        var _this = this;

        _classCallCheck(this, AllServicesActionPage);

        this.router = router;
        this.route = route;
        this.root = root;
        this.navCtrl = navCtrl;
        this.githubManager = githubManager;
        this.route.queryParams.subscribe(function (params) {
          console.log("EXEMPLE");

          if (_this.router.getCurrentNavigation().extras.state) {
            console.log("enter in if");
            _this.state = _this.router.getCurrentNavigation().extras.state;
            console.log("accesstoken of the first service", _this.githubManager.token);
          }
        });
      }

      _createClass(AllServicesActionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.state;
        }
      }, {
        key: "goToFacebookWidgets",
        value: function goToFacebookWidgets() {
          var navigationExtras = {
            state: this.state
          };
          console.log("okkkkk");
          this.router.navigate(['facebook-reactions'], navigationExtras);
          console.log("ko");
          console.log("print", this.githubManager.token);
        }
      }, {
        key: "goToTwitterWidgets",
        value: function goToTwitterWidgets() {
          this.router.navigate(['twitter-reactions']);
        }
      }, {
        key: "goToGithubWidgets",
        value: function goToGithubWidgets() {
          this.router.navigate(['github-reactions']);
        }
      }, {
        key: "goToWeatherWidgets",
        value: function goToWeatherWidgets() {
          this.router.navigate(['weather-reactions']);
        }
      }, {
        key: "goToMailwidgets",
        value: function goToMailwidgets() {
          this.router.navigate(['mail-reactions']);
        }
      }, {
        key: "backToHome",
        value: function backToHome() {
          this.router.navigate(['starter']);
        }
      }]);

      return AllServicesActionPage;
    }();

    AllServicesActionPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _github_reactions_githubManager__WEBPACK_IMPORTED_MODULE_4__["GithubManager"]
      }];
    };

    AllServicesActionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-all-services-action',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./all-services-action.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/all-services-action/all-services-action.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./all-services-action.page.scss */
      "./src/app/all-services-action/all-services-action.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _github_reactions_githubManager__WEBPACK_IMPORTED_MODULE_4__["GithubManager"]])], AllServicesActionPage);
    /***/
  },

  /***/
  "./src/app/all-services-reaction/all-services-reaction-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/all-services-reaction/all-services-reaction-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: AllServicesReactionPageRoutingModule */

  /***/
  function srcAppAllServicesReactionAllServicesReactionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllServicesReactionPageRoutingModule", function () {
      return AllServicesReactionPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _all_services_reaction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./all-services-reaction.page */
    "./src/app/all-services-reaction/all-services-reaction.page.ts");

    var routes = [{
      path: '',
      component: _all_services_reaction_page__WEBPACK_IMPORTED_MODULE_3__["AllServicesReactionPage"]
    }];

    var AllServicesReactionPageRoutingModule = function AllServicesReactionPageRoutingModule() {
      _classCallCheck(this, AllServicesReactionPageRoutingModule);
    };

    AllServicesReactionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AllServicesReactionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/all-services-reaction/all-services-reaction.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/all-services-reaction/all-services-reaction.module.ts ***!
    \***********************************************************************/

  /*! exports provided: AllServicesReactionPageModule */

  /***/
  function srcAppAllServicesReactionAllServicesReactionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllServicesReactionPageModule", function () {
      return AllServicesReactionPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _all_services_reaction_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./all-services-reaction-routing.module */
    "./src/app/all-services-reaction/all-services-reaction-routing.module.ts");
    /* harmony import */


    var _all_services_reaction_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./all-services-reaction.page */
    "./src/app/all-services-reaction/all-services-reaction.page.ts");

    var AllServicesReactionPageModule = function AllServicesReactionPageModule() {
      _classCallCheck(this, AllServicesReactionPageModule);
    };

    AllServicesReactionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _all_services_reaction_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllServicesReactionPageRoutingModule"]],
      declarations: [_all_services_reaction_page__WEBPACK_IMPORTED_MODULE_6__["AllServicesReactionPage"]]
    })], AllServicesReactionPageModule);
    /***/
  },

  /***/
  "./src/app/all-services-reaction/all-services-reaction.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/all-services-reaction/all-services-reaction.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAllServicesReactionAllServicesReactionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".instagramService ion-icon {\n  border-radius: 10%;\n  color: white;\n  background: -webkit-gradient(linear, left top, left bottom, from(45DEG), color-stop(#405DE6), color-stop(#5851DB), color-stop(#833AB4), color-stop(#C13584), color-stop(#E1306C), to(#FD1D1D));\n  background: linear-gradient(45DEG, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);\n}\n\n.instagramService ion-button {\n  color: white;\n  background: -webkit-gradient(linear, left top, left bottom, from(45DEG), color-stop(#405DE6), color-stop(#5851DB), color-stop(#833AB4), color-stop(#C13584), color-stop(#E1306C), to(#FD1D1D));\n  background: linear-gradient(45DEG, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);\n  border-color: red;\n}\n\n.facebookService ion-button {\n  background: #405DE6;\n  color: white;\n}\n\n.twitterService ion-button {\n  background: #38A1F3;\n  color: white;\n}\n\n.githubService ion-button {\n  background: black;\n  color: white;\n}\n\n.weatherService ion-button {\n  background: #fdee00;\n  color: white;\n}\n\n.currencyService ion-button {\n  background: darkgrey;\n  color: white;\n}\n\n.currencyService ion-icon {\n  color: green;\n}\n\n.currencyService ion-button {\n  background: green;\n  color: white;\n}\n\n.backHome ion-button {\n  display: block;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbXMvdGVzdHQvTW9iaWxlL3NyYy9hcHAvYWxsLXNlcnZpY2VzLXJlYWN0aW9uL2FsbC1zZXJ2aWNlcy1yZWFjdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2FsbC1zZXJ2aWNlcy1yZWFjdGlvbi9hbGwtc2VydmljZXMtcmVhY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsOExBQUE7RUFBQSx3RkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLDhMQUFBO0VBQUEsd0ZBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FsbC1zZXJ2aWNlcy1yZWFjdGlvbi9hbGwtc2VydmljZXMtcmVhY3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluc3RhZ3JhbVNlcnZpY2UgaW9uLWljb24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1REVHLCAjNDA1REU2LCAjNTg1MURCLCAjODMzQUI0LCAjQzEzNTg0LCAjRTEzMDZDLCAjRkQxRDFEKTtcbn1cblxuLmluc3RhZ3JhbVNlcnZpY2UgaW9uLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NURFRywgIzQwNURFNiwgIzU4NTFEQiwgIzgzM0FCNCwgI0MxMzU4NCwgI0UxMzA2QywgI0ZEMUQxRCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbi5mYWNlYm9va1NlcnZpY2UgaW9uLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzQwNURFNjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi50d2l0dGVyU2VydmljZSBpb24tYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzhBMUYzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdpdGh1YlNlcnZpY2UgaW9uLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ud2VhdGhlclNlcnZpY2UgaW9uLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogI2ZkZWUwMDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXJyZW5jeVNlcnZpY2UgaW9uLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogZGFya2dyZXk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3VycmVuY3lTZXJ2aWNlIGlvbi1pY29uIHtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi5jdXJyZW5jeVNlcnZpY2UgaW9uLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFja0hvbWUgaW9uLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4iLCIuaW5zdGFncmFtU2VydmljZSBpb24taWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVERUcsICM0MDVERTYsICM1ODUxREIsICM4MzNBQjQsICNDMTM1ODQsICNFMTMwNkMsICNGRDFEMUQpO1xufVxuXG4uaW5zdGFncmFtU2VydmljZSBpb24tYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVERUcsICM0MDVERTYsICM1ODUxREIsICM4MzNBQjQsICNDMTM1ODQsICNFMTMwNkMsICNGRDFEMUQpO1xuICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuLmZhY2Vib29rU2VydmljZSBpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzQwNURFNjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHdpdHRlclNlcnZpY2UgaW9uLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMzOEExRjM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdpdGh1YlNlcnZpY2UgaW9uLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi53ZWF0aGVyU2VydmljZSBpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2ZkZWUwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3VycmVuY3lTZXJ2aWNlIGlvbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBkYXJrZ3JleTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3VycmVuY3lTZXJ2aWNlIGlvbi1pY29uIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uY3VycmVuY3lTZXJ2aWNlIGlvbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFja0hvbWUgaW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/all-services-reaction/all-services-reaction.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/all-services-reaction/all-services-reaction.page.ts ***!
    \*********************************************************************/

  /*! exports provided: AllServicesReactionPage */

  /***/
  function srcAppAllServicesReactionAllServicesReactionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllServicesReactionPage", function () {
      return AllServicesReactionPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AllServicesReactionPage = /*#__PURE__*/function () {
      function AllServicesReactionPage(root, route, router) {
        var _this2 = this;

        _classCallCheck(this, AllServicesReactionPage);

        this.root = root;
        this.route = route;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
          if (_this2.router.getCurrentNavigation().extras.state) {
            _this2.state = _this2.router.getCurrentNavigation().extras.state;
            console.log(_this2.state.accessToken);
          }
        });
      }

      _createClass(AllServicesReactionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToGithubWidgets",
        value: function goToGithubWidgets() {
          this.root.navigate(['github-reactions']);
        }
      }, {
        key: "goToWeatherWidgets",
        value: function goToWeatherWidgets() {
          this.root.navigate(['weather-reactions']);
        }
      }, {
        key: "goToCurrencieswidgets",
        value: function goToCurrencieswidgets() {
          this.root.navigate(['currencie-reactions']);
        }
      }, {
        key: "goToTimerWidgets",
        value: function goToTimerWidgets() {
          this.root.navigate(['timer-reactions']);
        }
      }, {
        key: "backToHome",
        value: function backToHome() {
          var navigationExtras = {
            state: this.state
          };
          this.root.navigate(['starter'], navigationExtras);
        }
      }]);

      return AllServicesReactionPage;
    }();

    AllServicesReactionPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AllServicesReactionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-all-services-reaction',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./all-services-reaction.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/all-services-reaction/all-services-reaction.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./all-services-reaction.page.scss */
      "./src/app/all-services-reaction/all-services-reaction.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AllServicesReactionPage);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'starter',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./starter/starter.module */
        "./src/app/starter/starter.module.ts")).then(function (m) {
          return m.StarterPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./register/register.module */
        "./src/app/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'all-services-action',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./all-services-action/all-services-action.module */
        "./src/app/all-services-action/all-services-action.module.ts")).then(function (m) {
          return m.AllServicesActionPageModule;
        });
      }
    }, {
      path: 'twitter-reactions',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./twitter-reactions/twitter-reactions.module */
        "./src/app/twitter-reactions/twitter-reactions.module.ts")).then(function (m) {
          return m.TwitterReactionsPageModule;
        });
      }
    }, {
      path: 'mail-reactions',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./mail-reactions/mail-reactions.module */
        "./src/app/mail-reactions/mail-reactions.module.ts")).then(function (m) {
          return m.MailReactionsPageModule;
        });
      }
    }, {
      path: 'github-reactions',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./github-reactions/github-reactions.module */
        "./src/app/github-reactions/github-reactions.module.ts")).then(function (m) {
          return m.GithubReactionsPageModule;
        });
      }
    }, {
      path: 'do-commit-github',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | github-reactions-do-commit-github-do-commit-github-module */
        "do-commit-github-do-commit-github-module").then(__webpack_require__.bind(null,
        /*! ./github-reactions/do-commit-github/do-commit-github.module */
        "./src/app/github-reactions/do-commit-github/do-commit-github.module.ts")).then(function (m) {
          return m.DoCommitGithubPageModule;
        });
      }
    }, {
      path: 'fluctuation-dollar',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./currencie-reactions/fluctuation-dollar/fluctuation-dollar.module */
        "./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar.module.ts")).then(function (m) {
          return m.FluctuationDollarPageModule;
        });
      }
    }, {
      path: 'send-email',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./mail-reactions/send-email/send-email.module */
        "./src/app/mail-reactions/send-email/send-email.module.ts")).then(function (m) {
          return m.SendEmailPageModule;
        });
      }
    }, {
      path: 'weather-reactions',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./weather-reactions/weather-reactions.module */
        "./src/app/weather-reactions/weather-reactions.module.ts")).then(function (m) {
          return m.WeatherReactionsPageModule;
        });
      }
    }, {
      path: 'currencie-reaction',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./currencie-reactions/currencie-reactions-routing.module */
        "./src/app/currencie-reactions/currencie-reactions-routing.module.ts")).then(function (m) {
          return m.CurrencieReactionsPageRoutingModule;
        });
      }
    }, {
      path: 'publish-post-twitter',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./twitter-reactions/publish-post-twitter/publish-post-twitter.module */
        "./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter.module.ts")).then(function (m) {
          return m.PublishPostTwitterPageModule;
        });
      }
    }, {
      path: 'publish-picture-twitter',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./twitter-reactions/publish-picture-twitter/publish-picture-twitter.module */
        "./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter.module.ts")).then(function (m) {
          return m.PublishPictureTwitterPageModule;
        });
      }
    }, {
      path: 'all-services-reaction',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./all-services-reaction/all-services-reaction.module */
        "./src/app/all-services-reaction/all-services-reaction.module.ts")).then(function (m) {
          return m.AllServicesReactionPageModule;
        });
      }
    }, {
      path: 'timer-reactions',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./timer-reactions/timer-reactions-routing.module */
        "./src/app/timer-reactions/timer-reactions-routing.module.ts")).then(function (m) {
          return m.TimerReactionsPageRoutingModule;
        });
      }
    }, {
      path: 'start-timer',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./timer-reactions/start-timer/start-timer-routing.module */
        "./src/app/timer-reactions/start-timer/start-timer-routing.module.ts")).then(function (m) {
          return m.StartTimerPageRoutingModule;
        });
      }
    }, {
      path: 'do-commit-github',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./github-reactions/do-commit-github/do-commit-github-routing.module */
        "./src/app/github-reactions/do-commit-github/do-commit-github-routing.module.ts")).then(function (m) {
          return m.DoCommitGithubPageRoutingModule;
        });
      }
    }, {
      path: 'weather-city',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./weather-reactions/weather-city/weather-city.module */
        "./src/app/weather-reactions/weather-city/weather-city.module.ts")).then(function (m) {
          return m.WeatherCityPageModule;
        });
      }
    }, {
      path: 'currencie-reactions',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./currencie-reactions/currencie-reactions.module */
        "./src/app/currencie-reactions/currencie-reactions.module.ts")).then(function (m) {
          return m.CurrencieReactionsPageModule;
        });
      }
    }, {
      path: 'mail-reactions',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./mail-reactions/mail-reactions.module */
        "./src/app/mail-reactions/mail-reactions.module.ts")).then(function (m) {
          return m.MailReactionsPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(http, platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.http = http;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this3 = this;

          this.platform.ready().then(function () {
            _this3.statusBar.styleDefault();

            _this3.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/firebase/ngx */
    "./node_modules/@ionic-native/firebase/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _starter_starter_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./starter/starter.module */
    "./src/app/starter/starter.module.ts");
    /* harmony import */


    var _register_register_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./register/register.module */
    "./src/app/register/register.module.ts");
    /* harmony import */


    var _all_services_action_all_services_action_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./all-services-action/all-services-action.module */
    "./src/app/all-services-action/all-services-action.module.ts");
    /* harmony import */


    var _all_services_reaction_all_services_reaction_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./all-services-reaction/all-services-reaction.module */
    "./src/app/all-services-reaction/all-services-reaction.module.ts");
    /* harmony import */


    var _twitter_reactions_twitter_reactions_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./twitter-reactions/twitter-reactions.module */
    "./src/app/twitter-reactions/twitter-reactions.module.ts");
    /* harmony import */


    var _github_reactions_github_reactions_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./github-reactions/github-reactions.module */
    "./src/app/github-reactions/github-reactions.module.ts");
    /* harmony import */


    var _weather_reactions_weather_reactions_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./weather-reactions/weather-reactions.module */
    "./src/app/weather-reactions/weather-reactions.module.ts");
    /* harmony import */


    var _timer_reactions_timer_reactions_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./timer-reactions/timer-reactions.module */
    "./src/app/timer-reactions/timer-reactions.module.ts");
    /* harmony import */


    var _twitter_reactions_publish_post_twitter_publish_post_twitter_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./twitter-reactions/publish-post-twitter/publish-post-twitter.module */
    "./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter.module.ts");
    /* harmony import */


    var _twitter_reactions_publish_picture_twitter_publish_picture_twitter_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./twitter-reactions/publish-picture-twitter/publish-picture-twitter.module */
    "./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter.module.ts");
    /* harmony import */


    var _github_reactions_do_commit_github_do_commit_github_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./github-reactions/do-commit-github/do-commit-github-routing.module */
    "./src/app/github-reactions/do-commit-github/do-commit-github-routing.module.ts");
    /* harmony import */


    var _weather_reactions_weather_city_weather_city_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./weather-reactions/weather-city/weather-city.module */
    "./src/app/weather-reactions/weather-city/weather-city.module.ts");
    /* harmony import */


    var _timer_reactions_start_timer_start_timer_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./timer-reactions/start-timer/start-timer.module */
    "./src/app/timer-reactions/start-timer/start-timer.module.ts");
    /* harmony import */


    var _currencie_reactions_currencie_reactions_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./currencie-reactions/currencie-reactions.module */
    "./src/app/currencie-reactions/currencie-reactions.module.ts");
    /* harmony import */


    var _mail_reactions_mail_reactions_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./mail-reactions/mail-reactions.module */
    "./src/app/mail-reactions/mail-reactions.module.ts");
    /* harmony import */


    var _currencie_reactions_fluctuation_dollar_fluctuation_dollar_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./currencie-reactions/fluctuation-dollar/fluctuation-dollar.module */
    "./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar.module.ts");
    /* harmony import */


    var _mail_reactions_send_email_send_email_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./mail-reactions/send-email/send-email.module */
    "./src/app/mail-reactions/send-email/send-email.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _github_reactions_githubManager__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./github-reactions/githubManager */
    "./src/app/github-reactions/githubManager.ts");
    /* harmony import */


    var _twitter_reactions_twitterManager__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./twitter-reactions/twitterManager */
    "./src/app/twitter-reactions/twitterManager.ts");
    /* harmony import */


    var _github_reactions_github_reactions_page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./github-reactions/github-reactions.page */
    "./src/app/github-reactions/github-reactions.page.ts");
    /* harmony import */


    var _mail_reactions_send_email_mailManager__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./mail-reactions/send-email/mailManager */
    "./src/app/mail-reactions/send-email/mailManager.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([{
        path: '',
        component: _home_home_module__WEBPACK_IMPORTED_MODULE_13__["HomePageModule"]
      }, {
        path: 'starter',
        component: _starter_starter_module__WEBPACK_IMPORTED_MODULE_14__["StarterPageModule"]
      }, {
        path: 'register',
        component: _register_register_module__WEBPACK_IMPORTED_MODULE_15__["RegisterPageModule"]
      }, {
        path: 'all-services-action',
        component: _all_services_action_all_services_action_module__WEBPACK_IMPORTED_MODULE_16__["AllServicesActionPageModule"]
      }, {
        path: 'all-services-reaction',
        component: _all_services_reaction_all_services_reaction_module__WEBPACK_IMPORTED_MODULE_17__["AllServicesReactionPageModule"]
      }, {
        path: 'twitter-reactions',
        component: _twitter_reactions_twitter_reactions_module__WEBPACK_IMPORTED_MODULE_18__["TwitterReactionsPageModule"]
      }, {
        path: 'github-reactions',
        component: _github_reactions_github_reactions_module__WEBPACK_IMPORTED_MODULE_19__["GithubReactionsPageModule"]
      }, {
        path: 'weather-reactions',
        component: _weather_reactions_weather_reactions_module__WEBPACK_IMPORTED_MODULE_20__["WeatherReactionsPageModule"]
      }, {
        path: 'timer-reactions',
        component: _timer_reactions_timer_reactions_module__WEBPACK_IMPORTED_MODULE_21__["TimerReactionsPageModule"]
      }, {
        path: 'publish-post-twitter',
        component: _twitter_reactions_publish_post_twitter_publish_post_twitter_module__WEBPACK_IMPORTED_MODULE_22__["PublishPostTwitterPageModule"]
      }, {
        path: 'publish-picture-twitter',
        component: _twitter_reactions_publish_picture_twitter_publish_picture_twitter_module__WEBPACK_IMPORTED_MODULE_23__["PublishPictureTwitterPageModule"]
      }, {
        path: 'do-commit-github',
        component: _github_reactions_do_commit_github_do_commit_github_routing_module__WEBPACK_IMPORTED_MODULE_24__["DoCommitGithubPageRoutingModule"]
      }, {
        path: 'weather-city',
        component: _weather_reactions_weather_city_weather_city_module__WEBPACK_IMPORTED_MODULE_25__["WeatherCityPageModule"]
      }, {
        path: 'start-timer',
        component: _timer_reactions_start_timer_start_timer_module__WEBPACK_IMPORTED_MODULE_26__["StartTimerPageModule"]
      }, {
        path: 'currencie-reactions',
        component: _currencie_reactions_currencie_reactions_module__WEBPACK_IMPORTED_MODULE_27__["CurrencieReactionsPageModule"]
      }, {
        path: 'mail-reactions',
        component: _mail_reactions_mail_reactions_module__WEBPACK_IMPORTED_MODULE_28__["MailReactionsPageModule"]
      }, {
        path: 'fluctuation-dollar',
        component: _currencie_reactions_fluctuation_dollar_fluctuation_dollar_module__WEBPACK_IMPORTED_MODULE_29__["FluctuationDollarPageModule"]
      }, {
        path: 'send-email',
        component: _mail_reactions_send_email_send_email_module__WEBPACK_IMPORTED_MODULE_30__["SendEmailPageModule"]
      }]) //AngularFireAnalyticsModule,
      //AngularFirestoreModule,
      //AngularFireStorageModule
      ],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_7__["Firebase"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"], _data_service__WEBPACK_IMPORTED_MODULE_32__["DataService"], _github_reactions_githubManager__WEBPACK_IMPORTED_MODULE_33__["GithubManager"], _twitter_reactions_twitterManager__WEBPACK_IMPORTED_MODULE_34__["TwitterManager"], _github_reactions_github_reactions_page__WEBPACK_IMPORTED_MODULE_35__["GithubReactionsPage"], _mail_reactions_send_email_mailManager__WEBPACK_IMPORTED_MODULE_36__["MailManager"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"],
        useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/currencie-reactions/currencie-reactions-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/currencie-reactions/currencie-reactions-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: CurrencieReactionsPageRoutingModule */

  /***/
  function srcAppCurrencieReactionsCurrencieReactionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencieReactionsPageRoutingModule", function () {
      return CurrencieReactionsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _currencie_reactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./currencie-reactions.page */
    "./src/app/currencie-reactions/currencie-reactions.page.ts");

    var routes = [{
      path: '',
      component: _currencie_reactions_page__WEBPACK_IMPORTED_MODULE_3__["CurrencieReactionsPage"]
    }, {
      path: 'fluctuation-dollar',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./fluctuation-dollar/fluctuation-dollar.module */
        "./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar.module.ts")).then(function (m) {
          return m.FluctuationDollarPageModule;
        });
      }
    }];

    var CurrencieReactionsPageRoutingModule = function CurrencieReactionsPageRoutingModule() {
      _classCallCheck(this, CurrencieReactionsPageRoutingModule);
    };

    CurrencieReactionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CurrencieReactionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/currencie-reactions/currencie-reactions.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/currencie-reactions/currencie-reactions.module.ts ***!
    \*******************************************************************/

  /*! exports provided: CurrencieReactionsPageModule */

  /***/
  function srcAppCurrencieReactionsCurrencieReactionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencieReactionsPageModule", function () {
      return CurrencieReactionsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _currencie_reactions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./currencie-reactions-routing.module */
    "./src/app/currencie-reactions/currencie-reactions-routing.module.ts");
    /* harmony import */


    var _currencie_reactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./currencie-reactions.page */
    "./src/app/currencie-reactions/currencie-reactions.page.ts");

    var CurrencieReactionsPageModule = function CurrencieReactionsPageModule() {
      _classCallCheck(this, CurrencieReactionsPageModule);
    };

    CurrencieReactionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _currencie_reactions_routing_module__WEBPACK_IMPORTED_MODULE_5__["CurrencieReactionsPageRoutingModule"]],
      declarations: [_currencie_reactions_page__WEBPACK_IMPORTED_MODULE_6__["CurrencieReactionsPage"]]
    })], CurrencieReactionsPageModule);
    /***/
  },

  /***/
  "./src/app/currencie-reactions/currencie-reactions.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/currencie-reactions/currencie-reactions.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCurrencieReactionsCurrencieReactionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".weatherServices ion-icon {\n  font-size: 64px;\n  color: green;\n}\n\n.weatherServices ion-button {\n  color: white;\n  background-color: green;\n}\n\n.publishPost ion-icon {\n  font-size: 23px;\n  color: green;\n}\n\n.publishPost ion-label {\n  margin-left: 1.1rem;\n}\n\n.publishPicture ion-icon {\n  font-size: 23px;\n  color: green;\n}\n\n.publishPicture ion-label {\n  margin-left: 1.1rem;\n}\n\n.backInstagram ion-button {\n  display: block;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbXMvdGVzdHQvTW9iaWxlL3NyYy9hcHAvY3VycmVuY2llLXJlYWN0aW9ucy9jdXJyZW5jaWUtcmVhY3Rpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY3VycmVuY2llLXJlYWN0aW9ucy9jdXJyZW5jaWUtcmVhY3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY3VycmVuY2llLXJlYWN0aW9ucy9jdXJyZW5jaWUtcmVhY3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWF0aGVyU2VydmljZXMgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi53ZWF0aGVyU2VydmljZXMgaW9uLWJ1dHRvbiAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLnB1Ymxpc2hQb3N0IGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4ucHVibGlzaFBvc3QgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogMS4xcmVtO1xufVxuXG4ucHVibGlzaFBpY3R1cmUgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi5wdWJsaXNoUGljdHVyZSBpb24tbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjFyZW07XG59XG5cbi5iYWNrSW5zdGFncmFtIGlvbi1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbiIsIi53ZWF0aGVyU2VydmljZXMgaW9uLWljb24ge1xuICBmb250LXNpemU6IDY0cHg7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLndlYXRoZXJTZXJ2aWNlcyBpb24tYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLnB1Ymxpc2hQb3N0IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5wdWJsaXNoUG9zdCBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMS4xcmVtO1xufVxuXG4ucHVibGlzaFBpY3R1cmUgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnB1Ymxpc2hQaWN0dXJlIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxLjFyZW07XG59XG5cbi5iYWNrSW5zdGFncmFtIGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/currencie-reactions/currencie-reactions.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/currencie-reactions/currencie-reactions.page.ts ***!
    \*****************************************************************/

  /*! exports provided: CurrencieReactionsPage */

  /***/
  function srcAppCurrencieReactionsCurrencieReactionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencieReactionsPage", function () {
      return CurrencieReactionsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CurrencieReactionsPage = /*#__PURE__*/function () {
      function CurrencieReactionsPage(root) {
        _classCallCheck(this, CurrencieReactionsPage);

        this.root = root;
      }

      _createClass(CurrencieReactionsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "seeFluctuation",
        value: function seeFluctuation() {
          this.root.navigate(['fluctuation-dollar']);
        }
      }, {
        key: "goToAllServices",
        value: function goToAllServices() {
          this.root.navigate(['all-services-reaction']);
        }
      }]);

      return CurrencieReactionsPage;
    }();

    CurrencieReactionsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CurrencieReactionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-currencie-reactions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./currencie-reactions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/currencie-reactions/currencie-reactions.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./currencie-reactions.page.scss */
      "./src/app/currencie-reactions/currencie-reactions.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], CurrencieReactionsPage);
    /***/
  },

  /***/
  "./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar-routing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar-routing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: FluctuationDollarPageRoutingModule */

  /***/
  function srcAppCurrencieReactionsFluctuationDollarFluctuationDollarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FluctuationDollarPageRoutingModule", function () {
      return FluctuationDollarPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _fluctuation_dollar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fluctuation-dollar.page */
    "./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar.page.ts");

    var routes = [{
      path: '',
      component: _fluctuation_dollar_page__WEBPACK_IMPORTED_MODULE_3__["FluctuationDollarPage"]
    }];

    var FluctuationDollarPageRoutingModule = function FluctuationDollarPageRoutingModule() {
      _classCallCheck(this, FluctuationDollarPageRoutingModule);
    };

    FluctuationDollarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FluctuationDollarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: FluctuationDollarPageModule */

  /***/
  function srcAppCurrencieReactionsFluctuationDollarFluctuationDollarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FluctuationDollarPageModule", function () {
      return FluctuationDollarPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _fluctuation_dollar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fluctuation-dollar-routing.module */
    "./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar-routing.module.ts");
    /* harmony import */


    var _fluctuation_dollar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fluctuation-dollar.page */
    "./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar.page.ts");

    var FluctuationDollarPageModule = function FluctuationDollarPageModule() {
      _classCallCheck(this, FluctuationDollarPageModule);
    };

    FluctuationDollarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fluctuation_dollar_routing_module__WEBPACK_IMPORTED_MODULE_5__["FluctuationDollarPageRoutingModule"]],
      declarations: [_fluctuation_dollar_page__WEBPACK_IMPORTED_MODULE_6__["FluctuationDollarPage"]]
    })], FluctuationDollarPageModule);
    /***/
  },

  /***/
  "./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar.page.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar.page.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCurrencieReactionsFluctuationDollarFluctuationDollarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnJlbmNpZS1yZWFjdGlvbnMvZmx1Y3R1YXRpb24tZG9sbGFyL2ZsdWN0dWF0aW9uLWRvbGxhci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar.page.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar.page.ts ***!
    \***********************************************************************************/

  /*! exports provided: FluctuationDollarPage */

  /***/
  function srcAppCurrencieReactionsFluctuationDollarFluctuationDollarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FluctuationDollarPage", function () {
      return FluctuationDollarPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FluctuationDollarPage = /*#__PURE__*/function () {
      function FluctuationDollarPage(root) {
        _classCallCheck(this, FluctuationDollarPage);

        this.root = root;
      }

      _createClass(FluctuationDollarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backToFacebook",
        value: function backToFacebook() {
          this.root.navigate(['currencie-reactions']);
        }
      }]);

      return FluctuationDollarPage;
    }();

    FluctuationDollarPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FluctuationDollarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fluctuation-dollar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fluctuation-dollar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fluctuation-dollar.page.scss */
      "./src/app/currencie-reactions/fluctuation-dollar/fluctuation-dollar.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], FluctuationDollarPage);
    /***/
  },

  /***/
  "./src/app/data.service.ts":
  /*!*********************************!*\
    !*** ./src/app/data.service.ts ***!
    \*********************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DataService = function DataService() {
      _classCallCheck(this, DataService);
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DataService);
    /***/
  },

  /***/
  "./src/app/github-reactions/do-commit-github/do-commit-github-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/github-reactions/do-commit-github/do-commit-github-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: DoCommitGithubPageRoutingModule */

  /***/
  function srcAppGithubReactionsDoCommitGithubDoCommitGithubRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoCommitGithubPageRoutingModule", function () {
      return DoCommitGithubPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _do_commit_github_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./do-commit-github.page */
    "./src/app/github-reactions/do-commit-github/do-commit-github.page.ts");

    var routes = [{
      path: '',
      component: _do_commit_github_page__WEBPACK_IMPORTED_MODULE_3__["DoCommitGithubPage"]
    }];

    var DoCommitGithubPageRoutingModule = function DoCommitGithubPageRoutingModule() {
      _classCallCheck(this, DoCommitGithubPageRoutingModule);
    };

    DoCommitGithubPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DoCommitGithubPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/github-reactions/do-commit-github/do-commit-github.page.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/github-reactions/do-commit-github/do-commit-github.page.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGithubReactionsDoCommitGithubDoCommitGithubPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".facebookServices ion-icon {\n  font-size: 64px;\n}\n\n.facebookServices ion-button {\n  color: white;\n  background-color: #4267b2;\n  border: none;\n}\n\n.publishPost ion-icon {\n  font-size: 23px;\n  color: #4267b2;\n}\n\n.publishPost ion-label {\n  margin-left: 1.1rem;\n}\n\n.publishPicture ion-icon {\n  font-size: 23px;\n  color: #4267b2;\n}\n\n.publishPicture ion-label {\n  margin-left: 1.1rem;\n}\n\n.backFacebook ion-button {\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbXMvdGVzdHQvTW9iaWxlL3NyYy9hcHAvZ2l0aHViLXJlYWN0aW9ucy9kby1jb21taXQtZ2l0aHViL2RvLWNvbW1pdC1naXRodWIucGFnZS5zY3NzIiwic3JjL2FwcC9naXRodWItcmVhY3Rpb25zL2RvLWNvbW1pdC1naXRodWIvZG8tY29tbWl0LWdpdGh1Yi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2dpdGh1Yi1yZWFjdGlvbnMvZG8tY29tbWl0LWdpdGh1Yi9kby1jb21taXQtZ2l0aHViLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWNlYm9va1NlcnZpY2VzIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDY0cHg7XG59XG5cbi5mYWNlYm9va1NlcnZpY2VzIGlvbi1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI2N2IyO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnB1Ymxpc2hQb3N0IGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgY29sb3I6ICM0MjY3YjI7XG59XG5cbi5wdWJsaXNoUG9zdCBpb24tbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjFyZW07XG59XG5cbi5wdWJsaXNoUGljdHVyZSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGNvbG9yOiAjNDI2N2IyO1xufVxuXG4ucHVibGlzaFBpY3R1cmUgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogMS4xcmVtO1xufVxuXG4uYmFja0ZhY2Vib29rIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iLCIuZmFjZWJvb2tTZXJ2aWNlcyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbn1cblxuLmZhY2Vib29rU2VydmljZXMgaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNjdiMjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucHVibGlzaFBvc3QgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGNvbG9yOiAjNDI2N2IyO1xufVxuXG4ucHVibGlzaFBvc3QgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEuMXJlbTtcbn1cblxuLnB1Ymxpc2hQaWN0dXJlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogIzQyNjdiMjtcbn1cblxuLnB1Ymxpc2hQaWN0dXJlIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxLjFyZW07XG59XG5cbi5iYWNrRmFjZWJvb2sgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/github-reactions/do-commit-github/do-commit-github.page.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/github-reactions/do-commit-github/do-commit-github.page.ts ***!
    \****************************************************************************/

  /*! exports provided: DoCommitGithubPage */

  /***/
  function srcAppGithubReactionsDoCommitGithubDoCommitGithubPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoCommitGithubPage", function () {
      return DoCommitGithubPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _githubManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../githubManager */
    "./src/app/github-reactions/githubManager.ts");

    var DoCommitGithubPage = /*#__PURE__*/function () {
      function DoCommitGithubPage(root, navCtrl, http, router, route, githubManager) {
        var _this4 = this;

        _classCallCheck(this, DoCommitGithubPage);

        this.root = root;
        this.navCtrl = navCtrl;
        this.http = http;
        this.router = router;
        this.route = route;
        this.githubManager = githubManager;
        this.githubInfo = {
          name: '',
          loggedin: false,
          email: ''
        };
        this.route.queryParams.subscribe(function (params) {
          if (_this4.router.getCurrentNavigation().extras.state) {
            _this4.state = _this4.router.getCurrentNavigation().extras.state;
            console.log("STATE", _this4.state.accessToken);
          }
        });
      }

      _createClass(DoCommitGithubPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backToFacebook",
        value: function backToFacebook() {
          this.root.navigate(['github-reactions']);
        }
      }, {
        key: "chooseReactions",
        value: function chooseReactions() {
          this.root.navigate(['all-services-action']);
          console.log("ok", this.githubManager.token);
        }
      }, {
        key: "allRepository",
        value: function allRepository() {
          var _this5 = this;

          console.log("enter here");
          this.githubManager.getRepoOfCurrentUser(function (repositories) {
            console.log("mazaltov", repositories);
            _this5.repositories = repositories;
          });
        }
      }]);

      return DoCommitGithubPage;
    }();

    DoCommitGithubPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _githubManager__WEBPACK_IMPORTED_MODULE_5__["GithubManager"]
      }];
    };

    DoCommitGithubPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-do-commit-github',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./do-commit-github.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/github-reactions/do-commit-github/do-commit-github.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./do-commit-github.page.scss */
      "./src/app/github-reactions/do-commit-github/do-commit-github.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _githubManager__WEBPACK_IMPORTED_MODULE_5__["GithubManager"]])], DoCommitGithubPage);
    /***/
  },

  /***/
  "./src/app/github-reactions/github-reactions-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/github-reactions/github-reactions-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: GithubReactionsPageRoutingModule */

  /***/
  function srcAppGithubReactionsGithubReactionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubReactionsPageRoutingModule", function () {
      return GithubReactionsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _github_reactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./github-reactions.page */
    "./src/app/github-reactions/github-reactions.page.ts");

    var routes = [{
      path: '',
      component: _github_reactions_page__WEBPACK_IMPORTED_MODULE_3__["GithubReactionsPage"]
    }, {
      path: 'do-commit-github',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | do-commit-github-do-commit-github-module */
        "do-commit-github-do-commit-github-module").then(__webpack_require__.bind(null,
        /*! ./do-commit-github/do-commit-github.module */
        "./src/app/github-reactions/do-commit-github/do-commit-github.module.ts")).then(function (m) {
          return m.DoCommitGithubPageModule;
        });
      }
    }];

    var GithubReactionsPageRoutingModule = function GithubReactionsPageRoutingModule() {
      _classCallCheck(this, GithubReactionsPageRoutingModule);
    };

    GithubReactionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GithubReactionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/github-reactions/github-reactions.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/github-reactions/github-reactions.module.ts ***!
    \*************************************************************/

  /*! exports provided: GithubReactionsPageModule */

  /***/
  function srcAppGithubReactionsGithubReactionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubReactionsPageModule", function () {
      return GithubReactionsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _github_reactions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./github-reactions-routing.module */
    "./src/app/github-reactions/github-reactions-routing.module.ts");
    /* harmony import */


    var _github_reactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./github-reactions.page */
    "./src/app/github-reactions/github-reactions.page.ts");

    var GithubReactionsPageModule = function GithubReactionsPageModule() {
      _classCallCheck(this, GithubReactionsPageModule);
    };

    GithubReactionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _github_reactions_routing_module__WEBPACK_IMPORTED_MODULE_5__["GithubReactionsPageRoutingModule"]],
      declarations: [_github_reactions_page__WEBPACK_IMPORTED_MODULE_6__["GithubReactionsPage"]]
    })], GithubReactionsPageModule);
    /***/
  },

  /***/
  "./src/app/github-reactions/github-reactions.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/github-reactions/github-reactions.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGithubReactionsGithubReactionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".githubServices ion-icon {\n  font-size: 64px;\n}\n\n.githubServices ion-button {\n  color: white;\n  background-color: black;\n  border-color: black;\n}\n\n.publishPost ion-icon {\n  font-size: 23px;\n  color: black;\n}\n\n.publishPost ion-label {\n  margin-left: 1.1rem;\n}\n\n.publishPicture ion-icon {\n  font-size: 23px;\n  color: black;\n}\n\n.publishPicture ion-label {\n  margin-left: 1.1rem;\n}\n\n.backFacebook ion-button {\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbXMvdGVzdHQvTW9iaWxlL3NyYy9hcHAvZ2l0aHViLXJlYWN0aW9ucy9naXRodWItcmVhY3Rpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZ2l0aHViLXJlYWN0aW9ucy9naXRodWItcmVhY3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2dpdGh1Yi1yZWFjdGlvbnMvZ2l0aHViLXJlYWN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2l0aHViU2VydmljZXMgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbn1cblxuLmdpdGh1YlNlcnZpY2VzIGlvbi1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG4ucHVibGlzaFBvc3QgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5wdWJsaXNoUG9zdCBpb24tbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjFyZW07XG59XG5cbi5wdWJsaXNoUGljdHVyZSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnB1Ymxpc2hQaWN0dXJlIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMXJlbTtcbn1cblxuLmJhY2tGYWNlYm9vayBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59IiwiLmdpdGh1YlNlcnZpY2VzIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA2NHB4O1xufVxuXG4uZ2l0aHViU2VydmljZXMgaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbi5wdWJsaXNoUG9zdCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucHVibGlzaFBvc3QgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEuMXJlbTtcbn1cblxuLnB1Ymxpc2hQaWN0dXJlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wdWJsaXNoUGljdHVyZSBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMS4xcmVtO1xufVxuXG4uYmFja0ZhY2Vib29rIGlvbi1idXR0b24ge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/github-reactions/github-reactions.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/github-reactions/github-reactions.page.ts ***!
    \***********************************************************/

  /*! exports provided: GithubReactionsPage */

  /***/
  function srcAppGithubReactionsGithubReactionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubReactionsPage", function () {
      return GithubReactionsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _githubManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./githubManager */
    "./src/app/github-reactions/githubManager.ts");

    var GithubReactionsPage = /*#__PURE__*/function () {
      function GithubReactionsPage(root, auth, githubManager) {
        _classCallCheck(this, GithubReactionsPage);

        this.root = root;
        this.auth = auth;
        this.githubManager = githubManager;
        this.isDefinied = false;
      }

      _createClass(GithubReactionsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "doCommitGithub",
        value: function doCommitGithub() {
          this.root.navigate(['do-commit-github']);
        }
      }, {
        key: "goToAllServices",
        value: function goToAllServices() {
          var navigationExtras = {
            state: {
              accessToken: this.at,
              serviceName: this.nameOfService
            }
          };
          this.root.navigate(['all-services-reaction'], navigationExtras);
        }
      }, {
        key: "loginGithub",
        value: function loginGithub() {
          this.githubManager.logWithGithub(function (githubUser) {
            console.log(githubUser);
          });
        }
      }, {
        key: "getAccessToken",
        value: function getAccessToken() {
          return this.at;
        }
      }]);

      return GithubReactionsPage;
    }();

    GithubReactionsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _githubManager__WEBPACK_IMPORTED_MODULE_4__["GithubManager"]
      }];
    };

    GithubReactionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-github-reactions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./github-reactions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/github-reactions/github-reactions.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./github-reactions.page.scss */
      "./src/app/github-reactions/github-reactions.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _githubManager__WEBPACK_IMPORTED_MODULE_4__["GithubManager"]])], GithubReactionsPage);
    /***/
  },

  /***/
  "./src/app/github-reactions/githubManager.ts":
  /*!***************************************************!*\
    !*** ./src/app/github-reactions/githubManager.ts ***!
    \***************************************************/

  /*! exports provided: GithubManager */

  /***/
  function srcAppGithubReactionsGithubManagerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubManager", function () {
      return GithubManager;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var GithubManager = /*#__PURE__*/function () {
      function GithubManager(http) {
        _classCallCheck(this, GithubManager);

        this.http = http;
        this.githubUser = {
          name: '',
          loggedin: false,
          email: ''
        };
        console.log("github");
      }

      _createClass(GithubManager, [{
        key: "logWithGithub",
        value: function logWithGithub(callback) {
          var _this6 = this;

          firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GithubAuthProvider()).then(function (res) {
            _this6.githubUser.loggedin = true;
            _this6.githubUser.name = res.user.displayName;
            _this6.githubUser.email = res.user.email;
            _this6.token = res.credential.accessToken;
            _this6.userName = _this6.githubUser.name;
            _this6.serviceNameGithub = "Github";
            console.log("ACCESS USERNAME GITHUB:", _this6.userName);
            console.log("ACCESS TOKEN GITHUB:", _this6.token);
            callback(_this6.githubUser);
          });
        }
      }, {
        key: "getRepoOfCurrentUser",
        value: function getRepoOfCurrentUser(callback) {
          var _this7 = this;

          console.log("enter here");
          this.token;
          console.log("LETSGO", this.token);
          console.log('TEST');
          var test = this.token;
          this.repositories = this.http.get('https://devhugo.com:8080/get/GithubRepos?owner=madeinusa34&token=' + test);
          this.repositories.subscribe(function (data) {
            _this7.repositories = data;
            console.log('my data: ', data);
            console.log('repositoriy content:', _this7.repositories);
            callback(_this7.repositories);
          });
        }
      }, {
        key: "setAccessToken",
        value: function setAccessToken(accessT) {
          this.token = accessT;
        }
      }, {
        key: "githubContentAccessToken",
        value: function githubContentAccessToken() {}
      }, {
        key: "getAccess",
        value: function getAccess() {}
      }]);

      return GithubManager;
    }();

    GithubManager.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    GithubManager = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], GithubManager);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  /*--background: url('https://www.few.vu.nl/~dge500/assets/assets/img/examples/bluegradient.jpg');*/\n  --background: linear-gradient(to top, #66ffcf, #7bffe2, #95fff0, #b0fffa, #ccffff);\n}\n\n.register {\n  max-width: 100%;\n  margin-left: 80%;\n}\n\n.login {\n  margin-top: 15%;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.logo {\n  position: relative;\n  height: 250px;\n}\n\n.logo ion-icon {\n  font-size: 6em;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.connect {\n  position: relative;\n}\n\n.btHome {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbXMvdGVzdHQvTW9iaWxlL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtHQUFBO0VBQ0Esa0ZBQUE7QUNDSjs7QURFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NSOztBREVJO0VBQ0ksZUFBQTtBQ0NSOztBREVJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NSOztBREVJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDQ1I7O0FERUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNDUjs7QURJSTtFQUNJLGtCQUFBO0FDRFI7O0FESUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC8qLS1iYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vd3d3LmZldy52dS5ubC9+ZGdlNTAwL2Fzc2V0cy9hc3NldHMvaW1nL2V4YW1wbGVzL2JsdWVncmFkaWVudC5qcGcnKTsqL1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzY2ZmZjZiwgIzdiZmZlMiwgIzk1ZmZmMCwgI2IwZmZmYSwgI2NjZmZmZik7XG59XG5cbiAgICAucmVnaXN0ZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gICAgfVxuXG4gICAgLmxvZ2luIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIH0gXG5cbiAgICAuZmxleCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIH1cblxuICAgIC5sb2dvIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA2ZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuXG5cblxuICAgIC5jb25uZWN0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5idEhvbWUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9IiwiaW9uLWNvbnRlbnQge1xuICAvKi0tYmFja2dyb3VuZDogdXJsKCdodHRwczovL3d3dy5mZXcudnUubmwvfmRnZTUwMC9hc3NldHMvYXNzZXRzL2ltZy9leGFtcGxlcy9ibHVlZ3JhZGllbnQuanBnJyk7Ki9cbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjNjZmZmNmLCAjN2JmZmUyLCAjOTVmZmYwLCAjYjBmZmZhLCAjY2NmZmZmKTtcbn1cblxuLnJlZ2lzdGVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogODAlO1xufVxuXG4ubG9naW4ge1xuICBtYXJnaW4tdG9wOiAxNSU7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4ubG9nbyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uY29ubmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJ0SG9tZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(afAuth, toastController, router) {
        var _this8 = this;

        _classCallCheck(this, HomePage);

        this.afAuth = afAuth;
        this.toastController = toastController;
        this.router = router;
        this.mail = "";
        this.password = "";

        this.mailLogin = function () {
          _this8.afAuth.auth.signInWithEmailAndPassword(_this8.mail, _this8.password).then(function (result) {
            console.log(result); //TOREMOVE

            _this8.goToStarter();
          }).catch(function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: error.message,
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        };

        this.googleLogin = function () {
          _this8.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider()) //Add scope to the provider
          .then(function (result) {
            console.log(result); //TOREMOVE

            _this8.goToStarter();
          }).catch(function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: error.message,
                        duration: 2000
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        };

        this.facebookLogin = function () {
          _this8.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider()) //Add scope to the provider
          .then(function (result) {
            console.log(result); //TOREMOVE

            _this8.goToStarter(); //Move to next page

          }).catch(function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log(error.message); //TOREMOVE

                      _context3.next = 3;
                      return this.toastController.create({
                        message: error.message,
                        duration: 2000
                      });

                    case 3:
                      toast = _context3.sent;
                      toast.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });
        };
      }

      _createClass(HomePage, [{
        key: "goToStarter",
        value: function goToStarter() {
          this.router.navigate(['starter']);
        }
      }, {
        key: "goToRegister",
        value: function goToRegister() {
          this.router.navigate(['register']);
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], HomePage);
    /***/
  },

  /***/
  "./src/app/mail-reactions/mail-reactions-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/mail-reactions/mail-reactions-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: MailReactionsPageRoutingModule */

  /***/
  function srcAppMailReactionsMailReactionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MailReactionsPageRoutingModule", function () {
      return MailReactionsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _mail_reactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mail-reactions.page */
    "./src/app/mail-reactions/mail-reactions.page.ts");

    var routes = [{
      path: '',
      component: _mail_reactions_page__WEBPACK_IMPORTED_MODULE_3__["MailReactionsPage"]
    }, {
      path: 'send-email',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./send-email/send-email.module */
        "./src/app/mail-reactions/send-email/send-email.module.ts")).then(function (m) {
          return m.SendEmailPageModule;
        });
      }
    }];

    var MailReactionsPageRoutingModule = function MailReactionsPageRoutingModule() {
      _classCallCheck(this, MailReactionsPageRoutingModule);
    };

    MailReactionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MailReactionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/mail-reactions/mail-reactions.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/mail-reactions/mail-reactions.module.ts ***!
    \*********************************************************/

  /*! exports provided: MailReactionsPageModule */

  /***/
  function srcAppMailReactionsMailReactionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MailReactionsPageModule", function () {
      return MailReactionsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _mail_reactions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mail-reactions-routing.module */
    "./src/app/mail-reactions/mail-reactions-routing.module.ts");
    /* harmony import */


    var _mail_reactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mail-reactions.page */
    "./src/app/mail-reactions/mail-reactions.page.ts");

    var MailReactionsPageModule = function MailReactionsPageModule() {
      _classCallCheck(this, MailReactionsPageModule);
    };

    MailReactionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mail_reactions_routing_module__WEBPACK_IMPORTED_MODULE_5__["MailReactionsPageRoutingModule"]],
      declarations: [_mail_reactions_page__WEBPACK_IMPORTED_MODULE_6__["MailReactionsPage"]]
    })], MailReactionsPageModule);
    /***/
  },

  /***/
  "./src/app/mail-reactions/mail-reactions.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/mail-reactions/mail-reactions.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMailReactionsMailReactionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mailServices ion-icon {\n  font-size: 64px;\n  color: purple;\n}\n\n.mailServices ion-button {\n  color: white;\n  background-color: purple;\n  border-color: purple;\n}\n\n.publishPost ion-icon {\n  font-size: 23px;\n  color: purple;\n}\n\n.publishPost ion-label {\n  margin-left: 1.1rem;\n}\n\n.publishPicture ion-icon {\n  font-size: 23px;\n  color: purple;\n}\n\n.publishPicture ion-label {\n  margin-left: 1.1rem;\n}\n\n.backTwitter ion-button {\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbXMvdGVzdHQvTW9iaWxlL3NyYy9hcHAvbWFpbC1yZWFjdGlvbnMvbWFpbC1yZWFjdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9tYWlsLXJlYWN0aW9ucy9tYWlsLXJlYWN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbWFpbC1yZWFjdGlvbnMvbWFpbC1yZWFjdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haWxTZXJ2aWNlcyBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIGNvbG9yOiBwdXJwbGU7XG59XG5cbi5tYWlsU2VydmljZXMgaW9uLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgICBib3JkZXItY29sb3I6IHB1cnBsZTtcbn1cblxuLnB1Ymxpc2hQb3N0IGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgY29sb3I6IHB1cnBsZTtcbn1cblxuLnB1Ymxpc2hQb3N0IGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMXJlbTtcbn1cblxuLnB1Ymxpc2hQaWN0dXJlIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgY29sb3I6IHB1cnBsZTtcbn1cblxuLnB1Ymxpc2hQaWN0dXJlIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMXJlbTtcbn1cblxuLmJhY2tUd2l0dGVyIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iLCIubWFpbFNlcnZpY2VzIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogcHVycGxlO1xufVxuXG4ubWFpbFNlcnZpY2VzIGlvbi1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgYm9yZGVyLWNvbG9yOiBwdXJwbGU7XG59XG5cbi5wdWJsaXNoUG9zdCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6IHB1cnBsZTtcbn1cblxuLnB1Ymxpc2hQb3N0IGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxLjFyZW07XG59XG5cbi5wdWJsaXNoUGljdHVyZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6IHB1cnBsZTtcbn1cblxuLnB1Ymxpc2hQaWN0dXJlIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxLjFyZW07XG59XG5cbi5iYWNrVHdpdHRlciBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/mail-reactions/mail-reactions.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/mail-reactions/mail-reactions.page.ts ***!
    \*******************************************************/

  /*! exports provided: MailReactionsPage */

  /***/
  function srcAppMailReactionsMailReactionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MailReactionsPage", function () {
      return MailReactionsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MailReactionsPage = /*#__PURE__*/function () {
      function MailReactionsPage(root) {
        _classCallCheck(this, MailReactionsPage);

        this.root = root;
      }

      _createClass(MailReactionsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendEmail",
        value: function sendEmail() {
          this.root.navigate(['send-email']);
        }
      }, {
        key: "goToAllServices",
        value: function goToAllServices() {
          this.root.navigate(['all-services-action']);
        }
      }]);

      return MailReactionsPage;
    }();

    MailReactionsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MailReactionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mail-reactions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mail-reactions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mail-reactions/mail-reactions.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mail-reactions.page.scss */
      "./src/app/mail-reactions/mail-reactions.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], MailReactionsPage);
    /***/
  },

  /***/
  "./src/app/mail-reactions/send-email/mailManager.ts":
  /*!**********************************************************!*\
    !*** ./src/app/mail-reactions/send-email/mailManager.ts ***!
    \**********************************************************/

  /*! exports provided: MailManager */

  /***/
  function srcAppMailReactionsSendEmailMailManagerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MailManager", function () {
      return MailManager;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MailManager = function MailManager() {
      _classCallCheck(this, MailManager);
    };

    MailManager = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MailManager);
    /***/
  },

  /***/
  "./src/app/mail-reactions/send-email/send-email-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/mail-reactions/send-email/send-email-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: SendEmailPageRoutingModule */

  /***/
  function srcAppMailReactionsSendEmailSendEmailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendEmailPageRoutingModule", function () {
      return SendEmailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _send_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./send-email.page */
    "./src/app/mail-reactions/send-email/send-email.page.ts");

    var routes = [{
      path: '',
      component: _send_email_page__WEBPACK_IMPORTED_MODULE_3__["SendEmailPage"]
    }];

    var SendEmailPageRoutingModule = function SendEmailPageRoutingModule() {
      _classCallCheck(this, SendEmailPageRoutingModule);
    };

    SendEmailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SendEmailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/mail-reactions/send-email/send-email.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/mail-reactions/send-email/send-email.module.ts ***!
    \****************************************************************/

  /*! exports provided: SendEmailPageModule */

  /***/
  function srcAppMailReactionsSendEmailSendEmailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendEmailPageModule", function () {
      return SendEmailPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _send_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./send-email-routing.module */
    "./src/app/mail-reactions/send-email/send-email-routing.module.ts");
    /* harmony import */


    var _send_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./send-email.page */
    "./src/app/mail-reactions/send-email/send-email.page.ts");

    var SendEmailPageModule = function SendEmailPageModule() {
      _classCallCheck(this, SendEmailPageModule);
    };

    SendEmailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _send_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendEmailPageRoutingModule"]],
      declarations: [_send_email_page__WEBPACK_IMPORTED_MODULE_6__["SendEmailPage"]]
    })], SendEmailPageModule);
    /***/
  },

  /***/
  "./src/app/mail-reactions/send-email/send-email.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/mail-reactions/send-email/send-email.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMailReactionsSendEmailSendEmailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWwtcmVhY3Rpb25zL3NlbmQtZW1haWwvc2VuZC1lbWFpbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/mail-reactions/send-email/send-email.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/mail-reactions/send-email/send-email.page.ts ***!
    \**************************************************************/

  /*! exports provided: SendEmailPage */

  /***/
  function srcAppMailReactionsSendEmailSendEmailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendEmailPage", function () {
      return SendEmailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SendEmailPage = /*#__PURE__*/function () {
      function SendEmailPage(root) {
        _classCallCheck(this, SendEmailPage);

        this.root = root;
      }

      _createClass(SendEmailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backToFacebook",
        value: function backToFacebook() {
          this.root.navigate(['mail-reactions']);
        }
      }]);

      return SendEmailPage;
    }();

    SendEmailPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SendEmailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-send-email',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./send-email.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mail-reactions/send-email/send-email.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./send-email.page.scss */
      "./src/app/mail-reactions/send-email/send-email.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], SendEmailPage);
    /***/
  },

  /***/
  "./src/app/register/register-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/register/register-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/register/register.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/register/register.module.ts ***!
    \*********************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/register/register.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/register/register.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btRegister {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbXMvdGVzdHQvTW9iaWxlL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRSZWdpc3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59IiwiLmJ0UmVnaXN0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/register/register.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/register/register.page.ts ***!
    \*******************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(afAuth, toastController, router) {
        _classCallCheck(this, RegisterPage);

        this.afAuth = afAuth;
        this.toastController = toastController;
        this.router = router;
        this.mail = "";
        this.password = "";
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backToLogin",
        value: function backToLogin() {
          this.router.navigate(['home']);
        }
      }, {
        key: "register",
        value: function register(value) {
          var _this9 = this;

          return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().createUserWithEmailAndPassword(_this9.mail, _this9.password).then(function (res) {
              resolve(res);
            }, function (err) {
              return reject(err);
            });

            _this9.backToLogin();
          });
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/register/register.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], RegisterPage);
    /***/
  },

  /***/
  "./src/app/starter/starter-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/starter/starter-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: StarterPageRoutingModule */

  /***/
  function srcAppStarterStarterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarterPageRoutingModule", function () {
      return StarterPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _starter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./starter.page */
    "./src/app/starter/starter.page.ts");

    var routes = [{
      path: '',
      component: _starter_page__WEBPACK_IMPORTED_MODULE_3__["StarterPage"]
    }];

    var StarterPageRoutingModule = function StarterPageRoutingModule() {
      _classCallCheck(this, StarterPageRoutingModule);
    };

    StarterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StarterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/starter/starter.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/starter/starter.module.ts ***!
    \*******************************************/

  /*! exports provided: StarterPageModule */

  /***/
  function srcAppStarterStarterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarterPageModule", function () {
      return StarterPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _starter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./starter-routing.module */
    "./src/app/starter/starter-routing.module.ts");
    /* harmony import */


    var _starter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./starter.page */
    "./src/app/starter/starter.page.ts");

    var StarterPageModule = function StarterPageModule() {
      _classCallCheck(this, StarterPageModule);
    };

    StarterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _starter_routing_module__WEBPACK_IMPORTED_MODULE_5__["StarterPageRoutingModule"]],
      declarations: [_starter_page__WEBPACK_IMPORTED_MODULE_6__["StarterPage"]]
    })], StarterPageModule);
    /***/
  },

  /***/
  "./src/app/starter/starter.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/starter/starter.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppStarterStarterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".starterPage {\n  display: -webkit-box;\n  display: flex;\n}\n\n.starterPage2 {\n  display: -webkit-box;\n  display: flex;\n}\n\n.topLeft {\n  width: 45vw;\n  height: 45vw;\n  border: solid 2px silver;\n  margin: 10px auto;\n  display: block;\n  background-image: -webkit-gradient(linear, right bottom, left top, from(#45ffc4), to(#4577ff));\n  background-image: linear-gradient(to top left, #45ffc4, #4577ff);\n  text-align: center;\n  border-radius: 7%;\n  border-style: none;\n  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);\n}\n\n.topRight {\n  width: 45vw;\n  height: 45vw;\n  border: solid 2px silver;\n  margin: 10px auto;\n  display: block;\n  text-align: center;\n  border-radius: 10%;\n  background-image: -webkit-gradient(linear, right top, left bottom, from(#fd746c), to(#ff9068));\n  background-image: linear-gradient(to bottom left, #fd746c, #ff9068);\n  border-style: none;\n  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);\n}\n\n.topRight h3 {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 43%;\n  color: grey;\n}\n\n.topLeft h3 {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 43%;\n  color: white;\n}\n\n.topRight ion-button {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 43%;\n}\n\n.bottomRight ion-button {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 43%;\n}\n\n.bottomLeft {\n  width: 45vw;\n  height: 45vw;\n  border: solid 2px silver;\n  margin: 10px auto;\n  display: inline-block;\n  text-align: center;\n  background-image: -webkit-gradient(linear, right top, left bottom, from(#45ffc4), to(#4577ff));\n  background-image: linear-gradient(to bottom left, #45ffc4, #4577ff);\n  border-radius: 10%;\n  border-style: none;\n  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);\n}\n\n.bottomLeft h3 {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 43%;\n  color: white;\n}\n\n.bottomRight {\n  width: 45vw;\n  height: 45vw;\n  border: solid 2px silver;\n  margin: 10px auto;\n  display: inline-block;\n  text-align: center;\n  border-radius: 10%;\n  background-image: -webkit-gradient(linear, right bottom, left top, from(#fd746c), to(#ff9068));\n  background-image: linear-gradient(to top left, #fd746c, #ff9068);\n  border-style: none;\n  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbXMvdGVzdHQvTW9iaWxlL3NyYy9hcHAvc3RhcnRlci9zdGFydGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3RhcnRlci9zdGFydGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ0NSOztBREVJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDQ1I7O0FER0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEZBQUE7RUFBQSxnRUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0FDQVI7O0FER0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhGQUFBO0VBQUEsbUVBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0FDQVI7O0FER0k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQVI7O0FER0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBUjs7QURHSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQVI7O0FER0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FSOztBREtJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhGQUFBO0VBQUEsbUVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNGUjs7QURLSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNGUjs7QURNSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhGQUFBO0VBQUEsZ0VBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9zdGFydGVyL3N0YXJ0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5zdGFydGVyUGFnZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLnN0YXJ0ZXJQYWdlMiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG5cbiAgICAudG9wTGVmdCB7XG4gICAgICAgIHdpZHRoOiA0NXZ3O1xuICAgICAgICBoZWlnaHQ6IDQ1dnc7XG4gICAgICAgIGJvcmRlcjpzb2xpZCAycHggc2lsdmVyO1xuICAgICAgICBtYXJnaW46MTBweCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LCAjNDVmZmM0LCAjNDU3N2ZmKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3JTtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiAwIDM1cHggNjBweCAtMTVweCByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgICB9XG5cbiAgICAudG9wUmlnaHQge1xuICAgICAgICB3aWR0aDogNDV2dztcbiAgICAgICAgaGVpZ2h0OiA0NXZ3O1xuICAgICAgICBib3JkZXI6c29saWQgMnB4IHNpbHZlcjtcbiAgICAgICAgbWFyZ2luOjEwcHggYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICNmZDc0NmMsICNmZjkwNjgpO1xuICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMzVweCA2MHB4IC0xNXB4IHJnYmEoMCwgMCwgMCwgLjMpO1xuICAgIH1cblxuICAgIC50b3BSaWdodCBoMyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiA0MyU7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgIH1cblxuICAgIC50b3BMZWZ0IGgzIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogNDMlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLnRvcFJpZ2h0IGlvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiA0MyU7XG4gICAgfVxuXG4gICAgLmJvdHRvbVJpZ2h0IGlvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiA0MyU7XG4gICAgfVxuXG5cblxuICAgIC5ib3R0b21MZWZ0IHtcbiAgICAgICAgd2lkdGg6IDQ1dnc7XG4gICAgICAgIGhlaWdodDogNDV2dztcbiAgICAgICAgYm9yZGVyOnNvbGlkIDJweCBzaWx2ZXI7XG4gICAgICAgIG1hcmdpbjoxMHB4IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICM0NWZmYzQsICM0NTc3ZmYpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAzNXB4IDYwcHggLTE1cHggcmdiYSgwLCAwLCAwLCAuMyk7XG4gICAgfVxuXG4gICAgLmJvdHRvbUxlZnQgaDMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogNDMlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxuXG4gICAgLmJvdHRvbVJpZ2h0IHtcbiAgICAgICAgd2lkdGg6IDQ1dnc7XG4gICAgICAgIGhlaWdodDogNDV2dztcbiAgICAgICAgYm9yZGVyOnNvbGlkIDJweCBzaWx2ZXI7XG4gICAgICAgIG1hcmdpbjoxMHB4IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgI2ZkNzQ2YywgI2ZmOTA2OCk7XG4gICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAzNXB4IDYwcHggLTE1cHggcmdiYSgwLCAwLCAwLCAuMyk7XG5cbiAgICB9XG4iLCIuc3RhcnRlclBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3RhcnRlclBhZ2UyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRvcExlZnQge1xuICB3aWR0aDogNDV2dztcbiAgaGVpZ2h0OiA0NXZ3O1xuICBib3JkZXI6IHNvbGlkIDJweCBzaWx2ZXI7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LCAjNDVmZmM0LCAjNDU3N2ZmKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA3JTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBib3gtc2hhZG93OiAwIDM1cHggNjBweCAtMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi50b3BSaWdodCB7XG4gIHdpZHRoOiA0NXZ3O1xuICBoZWlnaHQ6IDQ1dnc7XG4gIGJvcmRlcjogc29saWQgMnB4IHNpbHZlcjtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjZmQ3NDZjLCAjZmY5MDY4KTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBib3gtc2hhZG93OiAwIDM1cHggNjBweCAtMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi50b3BSaWdodCBoMyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MyU7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4udG9wTGVmdCBoMyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDQzJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udG9wUmlnaHQgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDQzJTtcbn1cblxuLmJvdHRvbVJpZ2h0IGlvbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MyU7XG59XG5cbi5ib3R0b21MZWZ0IHtcbiAgd2lkdGg6IDQ1dnc7XG4gIGhlaWdodDogNDV2dztcbiAgYm9yZGVyOiBzb2xpZCAycHggc2lsdmVyO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzQ1ZmZjNCwgIzQ1NzdmZik7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBib3gtc2hhZG93OiAwIDM1cHggNjBweCAtMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5ib3R0b21MZWZ0IGgzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDQzJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYm90dG9tUmlnaHQge1xuICB3aWR0aDogNDV2dztcbiAgaGVpZ2h0OiA0NXZ3O1xuICBib3JkZXI6IHNvbGlkIDJweCBzaWx2ZXI7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsICNmZDc0NmMsICNmZjkwNjgpO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMzVweCA2MHB4IC0xNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/starter/starter.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/starter/starter.page.ts ***!
    \*****************************************/

  /*! exports provided: StarterPage */

  /***/
  function srcAppStarterStarterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarterPage", function () {
      return StarterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _github_reactions_githubManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../github-reactions/githubManager */
    "./src/app/github-reactions/githubManager.ts");
    /* harmony import */


    var _twitter_reactions_twitterManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../twitter-reactions/twitterManager */
    "./src/app/twitter-reactions/twitterManager.ts");

    var StarterPage = /*#__PURE__*/function () {
      function StarterPage(githubManager, twitterManager, root, route, router) {
        var _this10 = this;

        _classCallCheck(this, StarterPage);

        this.githubManager = githubManager;
        this.twitterManager = twitterManager;
        this.root = root;
        this.route = route;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
          if (_this10.router.getCurrentNavigation().extras.state) {
            _this10.state = _this10.router.getCurrentNavigation().extras.state;
            console.log(_this10.state.accessToken);
          }
        });
      }

      _createClass(StarterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "allServicesAction",
        value: function allServicesAction() {
          this.router.navigate(['all-services-action']);
        }
      }, {
        key: "allServicesReaction",
        value: function allServicesReaction() {
          this.router.navigate(['all-services-reaction']);
        }
      }, {
        key: "getInfo",
        value: function getInfo() {
          var githubAT;
          var githubUN;
          var twitterAT;
          var twitterUS;
          var serviceNameGithub;
          var serviceNameTweeter;
          githubAT = this.githubManager.token;
          console.log("READY TO PUSH ACCESS TOKEN GITHUB", githubAT);
          githubUN = this.githubManager.userName;
          console.log("READY TO PUSH USER NAME GITHUB", githubUN);
          twitterAT = this.twitterManager.token;
          console.log("READY TO PUSH ACCESS TOKEN TWITTER", twitterAT);
          twitterUS = this.twitterManager.userNameTwitter;
          console.log("READY TO PUSH USERNAME TWITTER", twitterUS);
          serviceNameGithub = this.githubManager.serviceNameGithub;
          console.log("READY TO PUSH USERNAME GITHUB", serviceNameGithub);
          serviceNameTweeter = this.twitterManager.serviceNameTweeter;
          console.log("READY TO PUSH USERNAME TWEETER", serviceNameTweeter);
        }
      }]);

      return StarterPage;
    }();

    StarterPage.ctorParameters = function () {
      return [{
        type: _github_reactions_githubManager__WEBPACK_IMPORTED_MODULE_3__["GithubManager"]
      }, {
        type: _twitter_reactions_twitterManager__WEBPACK_IMPORTED_MODULE_4__["TwitterManager"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    StarterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-starter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./starter.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/starter/starter.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./starter.page.scss */
      "./src/app/starter/starter.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_github_reactions_githubManager__WEBPACK_IMPORTED_MODULE_3__["GithubManager"], _twitter_reactions_twitterManager__WEBPACK_IMPORTED_MODULE_4__["TwitterManager"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], StarterPage);
    /***/
  },

  /***/
  "./src/app/timer-reactions/start-timer/start-timer-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/timer-reactions/start-timer/start-timer-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: StartTimerPageRoutingModule */

  /***/
  function srcAppTimerReactionsStartTimerStartTimerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartTimerPageRoutingModule", function () {
      return StartTimerPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _start_timer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./start-timer.page */
    "./src/app/timer-reactions/start-timer/start-timer.page.ts");

    var routes = [{
      path: '',
      component: _start_timer_page__WEBPACK_IMPORTED_MODULE_3__["StartTimerPage"]
    }];

    var StartTimerPageRoutingModule = function StartTimerPageRoutingModule() {
      _classCallCheck(this, StartTimerPageRoutingModule);
    };

    StartTimerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StartTimerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/timer-reactions/start-timer/start-timer.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/timer-reactions/start-timer/start-timer.module.ts ***!
    \*******************************************************************/

  /*! exports provided: StartTimerPageModule */

  /***/
  function srcAppTimerReactionsStartTimerStartTimerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartTimerPageModule", function () {
      return StartTimerPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _start_timer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./start-timer-routing.module */
    "./src/app/timer-reactions/start-timer/start-timer-routing.module.ts");
    /* harmony import */


    var _start_timer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./start-timer.page */
    "./src/app/timer-reactions/start-timer/start-timer.page.ts");

    var StartTimerPageModule = function StartTimerPageModule() {
      _classCallCheck(this, StartTimerPageModule);
    };

    StartTimerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _start_timer_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartTimerPageRoutingModule"]],
      declarations: [_start_timer_page__WEBPACK_IMPORTED_MODULE_6__["StartTimerPage"]]
    })], StartTimerPageModule);
    /***/
  },

  /***/
  "./src/app/timer-reactions/start-timer/start-timer.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/timer-reactions/start-timer/start-timer.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTimerReactionsStartTimerStartTimerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVyLXJlYWN0aW9ucy9zdGFydC10aW1lci9zdGFydC10aW1lci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/timer-reactions/start-timer/start-timer.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/timer-reactions/start-timer/start-timer.page.ts ***!
    \*****************************************************************/

  /*! exports provided: StartTimerPage */

  /***/
  function srcAppTimerReactionsStartTimerStartTimerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartTimerPage", function () {
      return StartTimerPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var StartTimerPage = /*#__PURE__*/function () {
      function StartTimerPage(root) {
        _classCallCheck(this, StartTimerPage);

        this.root = root;
      }

      _createClass(StartTimerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backToServices",
        value: function backToServices() {
          this.root.navigate(['timer-reactions']);
        }
      }]);

      return StartTimerPage;
    }();

    StartTimerPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    StartTimerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-start-timer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./start-timer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-reactions/start-timer/start-timer.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./start-timer.page.scss */
      "./src/app/timer-reactions/start-timer/start-timer.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], StartTimerPage);
    /***/
  },

  /***/
  "./src/app/timer-reactions/timer-reactions-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/timer-reactions/timer-reactions-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: TimerReactionsPageRoutingModule */

  /***/
  function srcAppTimerReactionsTimerReactionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerReactionsPageRoutingModule", function () {
      return TimerReactionsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _timer_reactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./timer-reactions.page */
    "./src/app/timer-reactions/timer-reactions.page.ts");

    var routes = [{
      path: '',
      component: _timer_reactions_page__WEBPACK_IMPORTED_MODULE_3__["TimerReactionsPage"]
    }, {
      path: 'start-timer',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./start-timer/start-timer.module */
        "./src/app/timer-reactions/start-timer/start-timer.module.ts")).then(function (m) {
          return m.StartTimerPageModule;
        });
      }
    }];

    var TimerReactionsPageRoutingModule = function TimerReactionsPageRoutingModule() {
      _classCallCheck(this, TimerReactionsPageRoutingModule);
    };

    TimerReactionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TimerReactionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/timer-reactions/timer-reactions.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/timer-reactions/timer-reactions.module.ts ***!
    \***********************************************************/

  /*! exports provided: TimerReactionsPageModule */

  /***/
  function srcAppTimerReactionsTimerReactionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerReactionsPageModule", function () {
      return TimerReactionsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _timer_reactions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./timer-reactions-routing.module */
    "./src/app/timer-reactions/timer-reactions-routing.module.ts");
    /* harmony import */


    var _timer_reactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./timer-reactions.page */
    "./src/app/timer-reactions/timer-reactions.page.ts");

    var TimerReactionsPageModule = function TimerReactionsPageModule() {
      _classCallCheck(this, TimerReactionsPageModule);
    };

    TimerReactionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _timer_reactions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TimerReactionsPageRoutingModule"]],
      declarations: [_timer_reactions_page__WEBPACK_IMPORTED_MODULE_6__["TimerReactionsPage"]]
    })], TimerReactionsPageModule);
    /***/
  },

  /***/
  "./src/app/timer-reactions/timer-reactions.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/timer-reactions/timer-reactions.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTimerReactionsTimerReactionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".back ion-button {\n  display: block;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbXMvdGVzdHQvTW9iaWxlL3NyYy9hcHAvdGltZXItcmVhY3Rpb25zL3RpbWVyLXJlYWN0aW9ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RpbWVyLXJlYWN0aW9ucy90aW1lci1yZWFjdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RpbWVyLXJlYWN0aW9ucy90aW1lci1yZWFjdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sgaW9uLWJ1dHRvbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG59IiwiLmJhY2sgaW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/timer-reactions/timer-reactions.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/timer-reactions/timer-reactions.page.ts ***!
    \*********************************************************/

  /*! exports provided: TimerReactionsPage */

  /***/
  function srcAppTimerReactionsTimerReactionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerReactionsPage", function () {
      return TimerReactionsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TimerReactionsPage = /*#__PURE__*/function () {
      function TimerReactionsPage(root) {
        _classCallCheck(this, TimerReactionsPage);

        this.root = root;
      }

      _createClass(TimerReactionsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "beginTheStarter",
        value: function beginTheStarter() {
          this.root.navigate(['start-timer']);
        }
      }, {
        key: "goToAllServices",
        value: function goToAllServices() {
          this.root.navigate(['all-reactions-service']);
        }
      }]);

      return TimerReactionsPage;
    }();

    TimerReactionsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    TimerReactionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timer-reactions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timer-reactions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/timer-reactions/timer-reactions.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timer-reactions.page.scss */
      "./src/app/timer-reactions/timer-reactions.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], TimerReactionsPage);
    /***/
  },

  /***/
  "./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter-routing.module.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter-routing.module.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: PublishPictureTwitterPageRoutingModule */

  /***/
  function srcAppTwitterReactionsPublishPictureTwitterPublishPictureTwitterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublishPictureTwitterPageRoutingModule", function () {
      return PublishPictureTwitterPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _publish_picture_twitter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./publish-picture-twitter.page */
    "./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter.page.ts");

    var routes = [{
      path: '',
      component: _publish_picture_twitter_page__WEBPACK_IMPORTED_MODULE_3__["PublishPictureTwitterPage"]
    }];

    var PublishPictureTwitterPageRoutingModule = function PublishPictureTwitterPageRoutingModule() {
      _classCallCheck(this, PublishPictureTwitterPageRoutingModule);
    };

    PublishPictureTwitterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PublishPictureTwitterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: PublishPictureTwitterPageModule */

  /***/
  function srcAppTwitterReactionsPublishPictureTwitterPublishPictureTwitterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublishPictureTwitterPageModule", function () {
      return PublishPictureTwitterPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _publish_picture_twitter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./publish-picture-twitter-routing.module */
    "./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter-routing.module.ts");
    /* harmony import */


    var _publish_picture_twitter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./publish-picture-twitter.page */
    "./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter.page.ts");

    var PublishPictureTwitterPageModule = function PublishPictureTwitterPageModule() {
      _classCallCheck(this, PublishPictureTwitterPageModule);
    };

    PublishPictureTwitterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _publish_picture_twitter_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublishPictureTwitterPageRoutingModule"]],
      declarations: [_publish_picture_twitter_page__WEBPACK_IMPORTED_MODULE_6__["PublishPictureTwitterPage"]]
    })], PublishPictureTwitterPageModule);
    /***/
  },

  /***/
  "./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter.page.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter.page.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTwitterReactionsPublishPictureTwitterPublishPictureTwitterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3aXR0ZXItcmVhY3Rpb25zL3B1Ymxpc2gtcGljdHVyZS10d2l0dGVyL3B1Ymxpc2gtcGljdHVyZS10d2l0dGVyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter.page.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter.page.ts ***!
    \*******************************************************************************************/

  /*! exports provided: PublishPictureTwitterPage */

  /***/
  function srcAppTwitterReactionsPublishPictureTwitterPublishPictureTwitterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublishPictureTwitterPage", function () {
      return PublishPictureTwitterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PublishPictureTwitterPage = /*#__PURE__*/function () {
      function PublishPictureTwitterPage(root) {
        _classCallCheck(this, PublishPictureTwitterPage);

        this.root = root;
      }

      _createClass(PublishPictureTwitterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backToTwitter2",
        value: function backToTwitter2() {
          this.root.navigate(['twitter-reactions']);
        }
      }]);

      return PublishPictureTwitterPage;
    }();

    PublishPictureTwitterPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PublishPictureTwitterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-publish-picture-twitter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./publish-picture-twitter.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./publish-picture-twitter.page.scss */
      "./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], PublishPictureTwitterPage);
    /***/
  },

  /***/
  "./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter-routing.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter-routing.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: PublishPostTwitterPageRoutingModule */

  /***/
  function srcAppTwitterReactionsPublishPostTwitterPublishPostTwitterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublishPostTwitterPageRoutingModule", function () {
      return PublishPostTwitterPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _publish_post_twitter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./publish-post-twitter.page */
    "./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter.page.ts");

    var routes = [{
      path: '',
      component: _publish_post_twitter_page__WEBPACK_IMPORTED_MODULE_3__["PublishPostTwitterPage"]
    }];

    var PublishPostTwitterPageRoutingModule = function PublishPostTwitterPageRoutingModule() {
      _classCallCheck(this, PublishPostTwitterPageRoutingModule);
    };

    PublishPostTwitterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PublishPostTwitterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: PublishPostTwitterPageModule */

  /***/
  function srcAppTwitterReactionsPublishPostTwitterPublishPostTwitterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublishPostTwitterPageModule", function () {
      return PublishPostTwitterPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _publish_post_twitter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./publish-post-twitter-routing.module */
    "./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter-routing.module.ts");
    /* harmony import */


    var _publish_post_twitter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./publish-post-twitter.page */
    "./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter.page.ts");

    var PublishPostTwitterPageModule = function PublishPostTwitterPageModule() {
      _classCallCheck(this, PublishPostTwitterPageModule);
    };

    PublishPostTwitterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _publish_post_twitter_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublishPostTwitterPageRoutingModule"]],
      declarations: [_publish_post_twitter_page__WEBPACK_IMPORTED_MODULE_6__["PublishPostTwitterPage"]]
    })], PublishPostTwitterPageModule);
    /***/
  },

  /***/
  "./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter.page.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter.page.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTwitterReactionsPublishPostTwitterPublishPostTwitterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3aXR0ZXItcmVhY3Rpb25zL3B1Ymxpc2gtcG9zdC10d2l0dGVyL3B1Ymxpc2gtcG9zdC10d2l0dGVyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter.page.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter.page.ts ***!
    \*************************************************************************************/

  /*! exports provided: PublishPostTwitterPage */

  /***/
  function srcAppTwitterReactionsPublishPostTwitterPublishPostTwitterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublishPostTwitterPage", function () {
      return PublishPostTwitterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _twitterManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../twitterManager */
    "./src/app/twitter-reactions/twitterManager.ts");

    var PublishPostTwitterPage = /*#__PURE__*/function () {
      function PublishPostTwitterPage(root, twitterManager) {
        _classCallCheck(this, PublishPostTwitterPage);

        this.root = root;
        this.twitterManager = twitterManager;
        this.tweet = "";
      }

      _createClass(PublishPostTwitterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "chooseReaction",
        value: function chooseReaction() {
          this.root.navigate(['starter']);
          console.log("twitterReactionBeforeInsert", this.twitterManager.token);
          console.log("tweetMessage:", this.tweet);
        }
      }, {
        key: "backToTwitter",
        value: function backToTwitter() {
          this.root.navigate(['twitter-reactions']);
        }
      }]);

      return PublishPostTwitterPage;
    }();

    PublishPostTwitterPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _twitterManager__WEBPACK_IMPORTED_MODULE_3__["TwitterManager"]
      }];
    };

    PublishPostTwitterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-publish-post-twitter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./publish-post-twitter.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./publish-post-twitter.page.scss */
      "./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _twitterManager__WEBPACK_IMPORTED_MODULE_3__["TwitterManager"]])], PublishPostTwitterPage);
    /***/
  },

  /***/
  "./src/app/twitter-reactions/twitter-reactions-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/twitter-reactions/twitter-reactions-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: TwitterReactionsPageRoutingModule */

  /***/
  function srcAppTwitterReactionsTwitterReactionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TwitterReactionsPageRoutingModule", function () {
      return TwitterReactionsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _twitter_reactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./twitter-reactions.page */
    "./src/app/twitter-reactions/twitter-reactions.page.ts");

    var routes = [{
      path: '',
      component: _twitter_reactions_page__WEBPACK_IMPORTED_MODULE_3__["TwitterReactionsPage"]
    }, {
      path: 'publish-post-twitter',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./publish-post-twitter/publish-post-twitter.module */
        "./src/app/twitter-reactions/publish-post-twitter/publish-post-twitter.module.ts")).then(function (m) {
          return m.PublishPostTwitterPageModule;
        });
      }
    }, {
      path: 'publish-picture-twitter',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./publish-picture-twitter/publish-picture-twitter.module */
        "./src/app/twitter-reactions/publish-picture-twitter/publish-picture-twitter.module.ts")).then(function (m) {
          return m.PublishPictureTwitterPageModule;
        });
      }
    }];

    var TwitterReactionsPageRoutingModule = function TwitterReactionsPageRoutingModule() {
      _classCallCheck(this, TwitterReactionsPageRoutingModule);
    };

    TwitterReactionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TwitterReactionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/twitter-reactions/twitter-reactions.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/twitter-reactions/twitter-reactions.module.ts ***!
    \***************************************************************/

  /*! exports provided: TwitterReactionsPageModule */

  /***/
  function srcAppTwitterReactionsTwitterReactionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TwitterReactionsPageModule", function () {
      return TwitterReactionsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _twitter_reactions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./twitter-reactions-routing.module */
    "./src/app/twitter-reactions/twitter-reactions-routing.module.ts");
    /* harmony import */


    var _twitter_reactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./twitter-reactions.page */
    "./src/app/twitter-reactions/twitter-reactions.page.ts");

    var TwitterReactionsPageModule = function TwitterReactionsPageModule() {
      _classCallCheck(this, TwitterReactionsPageModule);
    };

    TwitterReactionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _twitter_reactions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TwitterReactionsPageRoutingModule"]],
      declarations: [_twitter_reactions_page__WEBPACK_IMPORTED_MODULE_6__["TwitterReactionsPage"]]
    })], TwitterReactionsPageModule);
    /***/
  },

  /***/
  "./src/app/twitter-reactions/twitter-reactions.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/twitter-reactions/twitter-reactions.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTwitterReactionsTwitterReactionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".twitterServices ion-icon {\n  font-size: 64px;\n}\n\n.twitterServices ion-button {\n  color: white;\n  background-color: #38A1F3;\n  border-color: #38A1F3;\n}\n\n.publishPost ion-icon {\n  font-size: 23px;\n  color: #38A1F3;\n}\n\n.publishPost ion-label {\n  margin-left: 1.1rem;\n}\n\n.publishPicture ion-icon {\n  font-size: 23px;\n  color: #38A1F3;\n}\n\n.publishPicture ion-label {\n  margin-left: 1.1rem;\n}\n\n.backTwitter ion-button {\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbXMvdGVzdHQvTW9iaWxlL3NyYy9hcHAvdHdpdHRlci1yZWFjdGlvbnMvdHdpdHRlci1yZWFjdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC90d2l0dGVyLXJlYWN0aW9ucy90d2l0dGVyLXJlYWN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90d2l0dGVyLXJlYWN0aW9ucy90d2l0dGVyLXJlYWN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHdpdHRlclNlcnZpY2VzIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDY0cHg7XG59XG5cbi50d2l0dGVyU2VydmljZXMgaW9uLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOEExRjM7XG4gICAgYm9yZGVyLWNvbG9yOiAjMzhBMUYzO1xufVxuXG4ucHVibGlzaFBvc3QgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBjb2xvcjogIzM4QTFGMztcbn1cblxuLnB1Ymxpc2hQb3N0IGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMXJlbTtcbn1cblxuLnB1Ymxpc2hQaWN0dXJlIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgY29sb3I6ICMzOEExRjM7XG59XG5cbi5wdWJsaXNoUGljdHVyZSBpb24tbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjFyZW07XG59XG5cbi5iYWNrVHdpdHRlciBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59IiwiLnR3aXR0ZXJTZXJ2aWNlcyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbn1cblxuLnR3aXR0ZXJTZXJ2aWNlcyBpb24tYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhBMUYzO1xuICBib3JkZXItY29sb3I6ICMzOEExRjM7XG59XG5cbi5wdWJsaXNoUG9zdCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICMzOEExRjM7XG59XG5cbi5wdWJsaXNoUG9zdCBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMS4xcmVtO1xufVxuXG4ucHVibGlzaFBpY3R1cmUgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGNvbG9yOiAjMzhBMUYzO1xufVxuXG4ucHVibGlzaFBpY3R1cmUgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEuMXJlbTtcbn1cblxuLmJhY2tUd2l0dGVyIGlvbi1idXR0b24ge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/twitter-reactions/twitter-reactions.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/twitter-reactions/twitter-reactions.page.ts ***!
    \*************************************************************/

  /*! exports provided: TwitterReactionsPage */

  /***/
  function srcAppTwitterReactionsTwitterReactionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TwitterReactionsPage", function () {
      return TwitterReactionsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _twitter_reactions_twitterManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../twitter-reactions/twitterManager */
    "./src/app/twitter-reactions/twitterManager.ts");

    var TwitterReactionsPage = /*#__PURE__*/function () {
      function TwitterReactionsPage(root, TwitterManager) {
        _classCallCheck(this, TwitterReactionsPage);

        this.root = root;
        this.TwitterManager = TwitterManager;
      }

      _createClass(TwitterReactionsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "publishPostTwitter",
        value: function publishPostTwitter() {
          this.root.navigate(['publish-post-twitter']);
          console.log("twitterAccesstoken", this.TwitterManager.token);
        }
      }, {
        key: "publishPictureTwitter",
        value: function publishPictureTwitter() {
          this.root.navigate(['publish-picture-twitter']);
        }
      }, {
        key: "goToAllServices",
        value: function goToAllServices() {
          this.root.navigate(['all-services-action']);
        }
      }, {
        key: "connectToTwitter",
        value: function connectToTwitter() {
          console.log("connect you to twitter");
          this.TwitterManager.logWithTwitter2(function (twitterUser) {
            console.log(twitterUser);
          });
        }
      }]);

      return TwitterReactionsPage;
    }();

    TwitterReactionsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _twitter_reactions_twitterManager__WEBPACK_IMPORTED_MODULE_3__["TwitterManager"]
      }];
    };

    TwitterReactionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-twitter-reactions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./twitter-reactions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/twitter-reactions/twitter-reactions.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./twitter-reactions.page.scss */
      "./src/app/twitter-reactions/twitter-reactions.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _twitter_reactions_twitterManager__WEBPACK_IMPORTED_MODULE_3__["TwitterManager"]])], TwitterReactionsPage);
    /***/
  },

  /***/
  "./src/app/twitter-reactions/twitterManager.ts":
  /*!*****************************************************!*\
    !*** ./src/app/twitter-reactions/twitterManager.ts ***!
    \*****************************************************/

  /*! exports provided: TwitterManager */

  /***/
  function srcAppTwitterReactionsTwitterManagerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TwitterManager", function () {
      return TwitterManager;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var TwitterManager = /*#__PURE__*/function () {
      function TwitterManager(http) {
        _classCallCheck(this, TwitterManager);

        this.http = http;
        this.twitterUser = {
          name: '',
          loggedin: false,
          email: ''
        };
        console.log("twitter");
      }

      _createClass(TwitterManager, [{
        key: "logWithTwitter2",
        value: function logWithTwitter2(callback) {
          var _this11 = this;

          firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].TwitterAuthProvider()).then(function (res) {
            console.log('From --Twitter--');
            console.log(res);
            _this11.twitterUser.loggedin = true;
            _this11.twitterUser.name = res.user.displayName;
            _this11.twitterUser.email = res.user.email;
            _this11.userNameTwitter = _this11.twitterUser.name;
            _this11.serviceNameTweeter = "Twitter";
            _this11.token = res.credential.accessToken;
            console.log("ACCESS TOKEN TWITTER:", _this11.token);
            callback(_this11.twitterUser);
          });
        }
      }]);

      return TwitterManager;
    }();

    TwitterManager.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    TwitterManager = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], TwitterManager);
    /***/
  },

  /***/
  "./src/app/weather-reactions/weather-city/weather-city-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/weather-reactions/weather-city/weather-city-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: WeatherCityPageRoutingModule */

  /***/
  function srcAppWeatherReactionsWeatherCityWeatherCityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherCityPageRoutingModule", function () {
      return WeatherCityPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _weather_city_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./weather-city.page */
    "./src/app/weather-reactions/weather-city/weather-city.page.ts");

    var routes = [{
      path: '',
      component: _weather_city_page__WEBPACK_IMPORTED_MODULE_3__["WeatherCityPage"]
    }];

    var WeatherCityPageRoutingModule = function WeatherCityPageRoutingModule() {
      _classCallCheck(this, WeatherCityPageRoutingModule);
    };

    WeatherCityPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WeatherCityPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/weather-reactions/weather-city/weather-city.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/weather-reactions/weather-city/weather-city.module.ts ***!
    \***********************************************************************/

  /*! exports provided: WeatherCityPageModule */

  /***/
  function srcAppWeatherReactionsWeatherCityWeatherCityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherCityPageModule", function () {
      return WeatherCityPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _weather_city_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./weather-city-routing.module */
    "./src/app/weather-reactions/weather-city/weather-city-routing.module.ts");
    /* harmony import */


    var _weather_city_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./weather-city.page */
    "./src/app/weather-reactions/weather-city/weather-city.page.ts");

    var WeatherCityPageModule = function WeatherCityPageModule() {
      _classCallCheck(this, WeatherCityPageModule);
    };

    WeatherCityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _weather_city_routing_module__WEBPACK_IMPORTED_MODULE_5__["WeatherCityPageRoutingModule"]],
      declarations: [_weather_city_page__WEBPACK_IMPORTED_MODULE_6__["WeatherCityPage"]]
    })], WeatherCityPageModule);
    /***/
  },

  /***/
  "./src/app/weather-reactions/weather-city/weather-city.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/weather-reactions/weather-city/weather-city.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWeatherReactionsWeatherCityWeatherCityPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXItcmVhY3Rpb25zL3dlYXRoZXItY2l0eS93ZWF0aGVyLWNpdHkucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/weather-reactions/weather-city/weather-city.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/weather-reactions/weather-city/weather-city.page.ts ***!
    \*********************************************************************/

  /*! exports provided: WeatherCityPage */

  /***/
  function srcAppWeatherReactionsWeatherCityWeatherCityPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherCityPage", function () {
      return WeatherCityPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var WeatherCityPage = /*#__PURE__*/function () {
      function WeatherCityPage(root) {
        _classCallCheck(this, WeatherCityPage);

        this.root = root;
      }

      _createClass(WeatherCityPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backToServices",
        value: function backToServices() {
          this.root.navigate(['all-services-reaction']);
        }
      }]);

      return WeatherCityPage;
    }();

    WeatherCityPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    WeatherCityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-weather-city',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./weather-city.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/weather-reactions/weather-city/weather-city.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./weather-city.page.scss */
      "./src/app/weather-reactions/weather-city/weather-city.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], WeatherCityPage);
    /***/
  },

  /***/
  "./src/app/weather-reactions/weather-reactions-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/weather-reactions/weather-reactions-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: WeatherReactionsPageRoutingModule */

  /***/
  function srcAppWeatherReactionsWeatherReactionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherReactionsPageRoutingModule", function () {
      return WeatherReactionsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _weather_reactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./weather-reactions.page */
    "./src/app/weather-reactions/weather-reactions.page.ts");

    var routes = [{
      path: '',
      component: _weather_reactions_page__WEBPACK_IMPORTED_MODULE_3__["WeatherReactionsPage"]
    }, {
      path: 'weather-city',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./weather-city/weather-city.module */
        "./src/app/weather-reactions/weather-city/weather-city.module.ts")).then(function (m) {
          return m.WeatherCityPageModule;
        });
      }
    }, {
      path: 'weather-city',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./weather-city/weather-city.module */
        "./src/app/weather-reactions/weather-city/weather-city.module.ts")).then(function (m) {
          return m.WeatherCityPageModule;
        });
      }
    }];

    var WeatherReactionsPageRoutingModule = function WeatherReactionsPageRoutingModule() {
      _classCallCheck(this, WeatherReactionsPageRoutingModule);
    };

    WeatherReactionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WeatherReactionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/weather-reactions/weather-reactions.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/weather-reactions/weather-reactions.module.ts ***!
    \***************************************************************/

  /*! exports provided: WeatherReactionsPageModule */

  /***/
  function srcAppWeatherReactionsWeatherReactionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherReactionsPageModule", function () {
      return WeatherReactionsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _weather_reactions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./weather-reactions-routing.module */
    "./src/app/weather-reactions/weather-reactions-routing.module.ts");
    /* harmony import */


    var _weather_reactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./weather-reactions.page */
    "./src/app/weather-reactions/weather-reactions.page.ts");

    var WeatherReactionsPageModule = function WeatherReactionsPageModule() {
      _classCallCheck(this, WeatherReactionsPageModule);
    };

    WeatherReactionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _weather_reactions_routing_module__WEBPACK_IMPORTED_MODULE_5__["WeatherReactionsPageRoutingModule"]],
      declarations: [_weather_reactions_page__WEBPACK_IMPORTED_MODULE_6__["WeatherReactionsPage"]]
    })], WeatherReactionsPageModule);
    /***/
  },

  /***/
  "./src/app/weather-reactions/weather-reactions.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/weather-reactions/weather-reactions.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWeatherReactionsWeatherReactionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".weatherServices ion-icon {\n  font-size: 64px;\n  color: #fdee00;\n}\n\n.weatherServices ion-button {\n  color: white;\n  background-color: #fdee00;\n}\n\n.publishPost ion-icon {\n  font-size: 23px;\n  color: #fdee00;\n}\n\n.publishPost ion-label {\n  margin-left: 1.1rem;\n}\n\n.publishPicture ion-icon {\n  font-size: 23px;\n  color: #fdee00;\n}\n\n.publishPicture ion-label {\n  margin-left: 1.1rem;\n}\n\n.backInstagram ion-button {\n  display: block;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbXMvdGVzdHQvTW9iaWxlL3NyYy9hcHAvd2VhdGhlci1yZWFjdGlvbnMvd2VhdGhlci1yZWFjdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC93ZWF0aGVyLXJlYWN0aW9ucy93ZWF0aGVyLXJlYWN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXItcmVhY3Rpb25zL3dlYXRoZXItcmVhY3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWF0aGVyU2VydmljZXMgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICBjb2xvcjogI2ZkZWUwMDtcbn1cblxuLndlYXRoZXJTZXJ2aWNlcyBpb24tYnV0dG9uICB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGVlMDA7XG59XG5cbi5wdWJsaXNoUG9zdCBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGNvbG9yOiAjZmRlZTAwO1xufVxuXG4ucHVibGlzaFBvc3QgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogMS4xcmVtO1xufVxuXG4ucHVibGlzaFBpY3R1cmUgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBjb2xvcjogI2ZkZWUwMDtcbn1cblxuLnB1Ymxpc2hQaWN0dXJlIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMXJlbTtcbn1cblxuLmJhY2tJbnN0YWdyYW0gaW9uLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuIiwiLndlYXRoZXJTZXJ2aWNlcyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgY29sb3I6ICNmZGVlMDA7XG59XG5cbi53ZWF0aGVyU2VydmljZXMgaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZWUwMDtcbn1cblxuLnB1Ymxpc2hQb3N0IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogI2ZkZWUwMDtcbn1cblxuLnB1Ymxpc2hQb3N0IGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxLjFyZW07XG59XG5cbi5wdWJsaXNoUGljdHVyZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICNmZGVlMDA7XG59XG5cbi5wdWJsaXNoUGljdHVyZSBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMS4xcmVtO1xufVxuXG4uYmFja0luc3RhZ3JhbSBpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/weather-reactions/weather-reactions.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/weather-reactions/weather-reactions.page.ts ***!
    \*************************************************************/

  /*! exports provided: WeatherReactionsPage */

  /***/
  function srcAppWeatherReactionsWeatherReactionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherReactionsPage", function () {
      return WeatherReactionsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var WeatherReactionsPage = /*#__PURE__*/function () {
      function WeatherReactionsPage(root) {
        _classCallCheck(this, WeatherReactionsPage);

        this.root = root;
      }

      _createClass(WeatherReactionsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "whichCity",
        value: function whichCity() {
          this.root.navigate(['weather-city']);
        }
      }, {
        key: "goToAllServices",
        value: function goToAllServices() {
          this.root.navigate(['all-services-reaction']);
        }
      }]);

      return WeatherReactionsPage;
    }();

    WeatherReactionsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    WeatherReactionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-weather-reactions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./weather-reactions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/weather-reactions/weather-reactions.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./weather-reactions.page.scss */
      "./src/app/weather-reactions/weather-reactions.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], WeatherReactionsPage);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true,
      firebase: {
        apiKey: "AIzaSyDGxzFeg0phRdY1Dmn2_xiK_xocCc5As68",
        authDomain: "area-epitech-6886e.firebaseapp.com",
        databaseURL: "https://area-epitech-6886e.firebaseio.com",
        projectId: "area-epitech-6886e",
        storageBucket: "area-epitech-6886e.appspot.com",
        messagingSenderId: "124389166043"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/nams/testt/Mobile/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map