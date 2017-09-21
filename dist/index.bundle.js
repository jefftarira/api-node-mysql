module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_middlewares__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules__ = __webpack_require__(7);
/* eslint-disable no-console */





const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

const PORT = 3000;

Object(__WEBPACK_IMPORTED_MODULE_1__config_middlewares__["a" /* default */])(app);

Object(__WEBPACK_IMPORTED_MODULE_2__modules__["a" /* default */])(app);

app.listen(PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log('====================================');
    console.log(`Server running on port : ${PORT}`);
    console.log('====================================');
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_morgan__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_compression__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_helmet__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_helmet__);





const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

/* harmony default export */ __webpack_exports__["a"] = (app => {
  if (isProd) {
    app.use(__WEBPACK_IMPORTED_MODULE_2_compression___default()());
    app.use(__WEBPACK_IMPORTED_MODULE_3_helmet___default()());
  }

  app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());
  app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.urlencoded({ extended: true }));

  if (isDev) {
    app.use(__WEBPACK_IMPORTED_MODULE_0_morgan___default()('dev'));
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__movies_movie_routes__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["a"] = (app => {
  app.use('/api/movies', __WEBPACK_IMPORTED_MODULE_0__movies_movie_routes__["a" /* default */]);
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);


const routes = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();

routes.get('/', (req, res) => {
  res.send('Ruta de movie');
});

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ })
/******/ ]);