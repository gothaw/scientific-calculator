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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/js";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\r\n    const toggleBtn = document.getElementById(\"advance-options-toggle\");\r\n    const advanceOptions = document.getElementsByClassName(\"advance-options\")[0];\r\n\r\n    //true is second tab of advance options is shown\r\n    let secondTab   = false;\r\n\r\n    /**\r\n     * @name    showOptions\r\n     * @desc    toggles between first and second tab for advance options\r\n     * @returns secondTab\r\n     */\r\n    function showOptions() {\r\n        if(secondTab){\r\n            advanceOptions.style.left = `${0}`;\r\n            secondTab = false;\r\n        }\r\n        else{\r\n            advanceOptions.style.left = `-${100}%`;\r\n            secondTab = true;\r\n        }\r\n        return secondTab;\r\n    }\r\n\r\n    function eventHandler() {\r\n        toggleBtn.addEventListener(\"click\",showOptions);\r\n    }\r\n\r\n    function init() {\r\n        eventHandler();\r\n    }\r\n\r\n    window.addEventListener(\"load\", init);\r\n})();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\r\n    const numberButtons = document.querySelectorAll(\".number\");\r\n    const outputField = document.querySelector(\".output\");\r\n    const inputField = document.querySelector(\".input\");\r\n\r\n    let number=\"0\";\r\n    let decimal=false;\r\n\r\n    function inputNumber(index){\r\n        if(inputField.innerHTML==='0')\r\n        {\r\n            inputField.innerHTML = '';\r\n        }\r\n        inputField.innerHTML+=numberButtons[index].textContent;\r\n        if(number===\"0\")\r\n        {\r\n            number=numberButtons[index].textContent;\r\n        }\r\n        else{\r\n            number+=numberButtons[index].textContent;\r\n        }\r\n        console.log(number);\r\n        return number;\r\n    }\r\n\r\n    function eventHandler() {\r\n        for(let i=0;i<numberButtons.length;i++){\r\n            numberButtons[i].addEventListener('click', function () {\r\n                inputNumber(i)\r\n            });\r\n        }\r\n    }\r\n    function init() {\r\n        eventHandler();\r\n    }\r\n\r\n    window.addEventListener(\"load\", init);\r\n})();\n\n//# sourceURL=webpack:///./src/js/modules/calculator.js?");

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./src/js/index.js ./src/js/modules/calculator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\Dokumenty\\Training Dragon\\JavaScript\\_git\\scientific-calculator\\src\\js\\index.js */\"./src/js/index.js\");\nmodule.exports = __webpack_require__(/*! D:\\Dokumenty\\Training Dragon\\JavaScript\\_git\\scientific-calculator\\src\\js\\modules\\calculator.js */\"./src/js/modules/calculator.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/js/modules/calculator.js?");

/***/ })

/******/ });