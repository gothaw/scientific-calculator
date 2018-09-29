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

eval("(function () {\r\n    const basicButtons = document.querySelectorAll(\".basic-btn\");\r\n    const outputField = document.querySelector(\".output\");\r\n    const inputField = document.querySelector(\".input\");\r\n\r\n\r\n    let inputStack=[];\r\n    \r\n\r\n    function calculate(stack) {\r\n\r\n    }\r\n\r\n\r\n\r\n\r\n    function basicButtonsEvent(index) {\r\n        switch (basicButtons[index].id) {\r\n            case \"backspace\":\r\n                removeFromInputStack(\"backspace\");\r\n                break;\r\n            case \"clear-entry\":\r\n                removeFromInputStack(\"clear-entry\");\r\n                break;\r\n            case \"clear\":\r\n                removeFromInputStack(\"clear\");\r\n                break;\r\n            case \"equals\":\r\n                calculate(inputStack);\r\n                break;\r\n            case \"divide\":\r\n                if(!isNaN(inputStack[inputStack.length-1])) {\r\n                    addToInputStack(\"/\");\r\n                }\r\n                break;\r\n            case \"times\":\r\n                if(!isNaN(inputStack[inputStack.length-1])) {\r\n                    addToInputStack(\"*\");\r\n                }\r\n                break;\r\n            case \"minus\":\r\n                if(!isNaN(inputStack[inputStack.length-1])) {\r\n                    addToInputStack(\"-\");\r\n                }\r\n                break;\r\n            case \"plus\":\r\n                if(!isNaN(inputStack[inputStack.length-1])) {\r\n                    addToInputStack(\"+\");\r\n                }\r\n                break;\r\n            case \"dot\":\r\n                addDecimalPoint();\r\n                break;\r\n            default:\r\n                addToInputStack(basicButtons[index].innerHTML);\r\n        }\r\n    }\r\n\r\n\r\n\r\n    function addToInputStack(token) {\r\n        if (isNaN(token)&& inputStack.length===0){\r\n            displayInput(token);\r\n            inputStack.push(\"0\", token);\r\n        }\r\n        else if((token === \"(\" || token === \"pi\") && !isNaN(inputStack[inputStack.length - 1])){\r\n            displayInput(`*${token}`);\r\n            inputStack.push(\"*\", token);\r\n        }\r\n        else if(!isNaN(token) && (inputStack[inputStack.length - 1] === \")\" || inputStack[inputStack.length - 1] === \"num-pi\")) {\r\n            displayInput(`*${token}`);\r\n            inputStack.push(\"*\", token);\r\n        }\r\n        else if(!isNaN(token) && (!isNaN(inputStack[inputStack.length - 1]))) {\r\n            if ((token!==0)&&(inputStack[inputStack.length - 1] === \"0\")){\r\n                displayInput(token);\r\n                inputStack[inputStack.length - 1] = token;\r\n            }\r\n            else if((inputStack[inputStack.length - 1] !== \"0\")){\r\n                displayInput(token);\r\n                inputStack[inputStack.length - 1] += token;\r\n            }\r\n        }\r\n        else {\r\n            displayInput(token);\r\n            inputStack.push(token);\r\n        }\r\n        console.log(inputStack);\r\n    }\r\n\r\n   function addDecimalPoint() {\r\n       if(isNaN(inputStack[inputStack.length - 1])) {\r\n           addToInputStack(\"0.\");\r\n       }\r\n       else if(inputStack[inputStack.length - 1].indexOf(\".\") === -1) {\r\n           displayInput(\".\");\r\n           inputStack[inputStack.length - 1] += \".\";\r\n       }\r\n   }\r\n\r\n    function displayInput(token) {\r\n        if((inputField.innerHTML.charAt(inputField.innerHTML.length-1)===\"0\")&&(!isNaN(token))){\r\n            inputField.innerHTML=inputField.innerHTML.slice(0,-1)+token;\r\n        }\r\n        else {\r\n            inputField.innerHTML+=token;\r\n        }\r\n    }\r\n\r\n    function eventHandler() {\r\n        for(let i=0;i<basicButtons.length;i++){\r\n            basicButtons[i].addEventListener('click', function () {\r\n                basicButtonsEvent(i);\r\n            });\r\n        }\r\n    }\r\n    function init() {\r\n        eventHandler();\r\n    }\r\n\r\n    window.addEventListener(\"load\", init);\r\n})();\n\n//# sourceURL=webpack:///./src/js/modules/calculator.js?");

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