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

eval("(function () {\r\n    const toggleBtn = document.getElementById(\"advance-options-toggle\");\r\n    const advanceOptions = document.getElementsByClassName(\"advance-options\")[0];\r\n    const triHypFunctionBtn = document.getElementById(\"tri-hyp\");\r\n    const triHypFunctions = document.getElementsByClassName(\"tri-hyp-function\");\r\n    const angleOptionBtn = document.getElementById(\"deg-rad-gra\");\r\n\r\n    //true is second tab of advance options is shown\r\n    let secondTab   = false;\r\n\r\n    /**\r\n     * @name    advanceOptions\r\n     * @desc    toggles between degrees, radians and grads\r\n     */\r\n    function angleOptions() {\r\n        switch (angleOptionBtn.innerHTML) {\r\n            case \"deg\":\r\n                angleOptionBtn.innerHTML=\"rad\";\r\n                break;\r\n            case \"rad\":\r\n                angleOptionBtn.innerHTML=\"gra\";\r\n                break;\r\n            default:\r\n                angleOptionBtn.innerHTML=\"deg\";\r\n        }\r\n    }\r\n    \r\n    /**\r\n     * @name    triHypFunctions\r\n     * @desc    toggles between trigonometric and hyperbolic options for advance functions, modifies inner HTML for these functions\r\n     */\r\n    function triHypOptions() {\r\n        if(triHypFunctionBtn.innerHTML===\"tri\"){\r\n            triHypFunctionBtn.innerHTML=\"hyp\";\r\n            for(let btn of triHypFunctions){\r\n                btn.innerHTML+=\"h\"\r\n            }\r\n        }\r\n        else if(triHypFunctionBtn.innerHTML===\"hyp\"){\r\n            triHypFunctionBtn.innerHTML=\"tri\";\r\n            for(let btn of triHypFunctions){\r\n                btn.innerHTML=btn.innerHTML.slice(0,-1);\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @name    showOptions\r\n     * @desc    toggles between first and second tab for advance options\r\n     * @returns secondTab\r\n     */\r\n    function showOptions() {\r\n        if(secondTab){\r\n            advanceOptions.style.left = `${0}`;\r\n            secondTab = false;\r\n        }\r\n        else{\r\n            advanceOptions.style.left = `-${100}%`;\r\n            secondTab = true;\r\n        }\r\n        return secondTab;\r\n    }\r\n\r\n    function eventHandler() {\r\n        toggleBtn.addEventListener(\"click\",showOptions);\r\n        triHypFunctionBtn.addEventListener(\"click\",triHypOptions);\r\n        angleOptionBtn.addEventListener(\"click\",angleOptions);\r\n    }\r\n\r\n    function init() {\r\n        eventHandler();\r\n    }\r\n\r\n    window.addEventListener(\"load\", init);\r\n})();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/input-stack.js":
/*!***************************************!*\
  !*** ./src/js/modules/input-stack.js ***!
  \***************************************/
/*! exports provided: inputStack, requiredSpecialTokens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputStack\", function() { return inputStack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requiredSpecialTokens\", function() { return requiredSpecialTokens; });\n// input stack containing operations and operands showed in the input field\r\nlet inputStack=[];\r\n// special non numerical tokens which:\r\n// 1. are required to be at the end of the stack when basicOperations token is entered\r\n// 2. are required to be at the end of the stack when \")\" is entered\r\n// 4. are required to be at the end of the stack when \"^\" or \"x√\" is entered\r\n// 3. are post multiplied\r\n// 4. need to at the end of equation when calculate function is invoked\r\nconst requiredSpecialTokens = [\")\",\"&pi;\",\"e\",\"!\"];\r\n\r\n(function () {\r\n    const buttons = document.querySelectorAll(\".btn\");\r\n    const mainOutputField = document.querySelector(\".output\");\r\n    const mainInputField = document.querySelector(\".input\");\r\n    const triHypFunctions = document.querySelectorAll(\".tri-hyp-function\");\r\n\r\n    // tokens for basic operations + factorial symbol\r\n    const basicOperations = [\"+\",\"-\",\"*\",\"/\",\"!\",\"mod\"];\r\n    // tokens not required to be pre multiplied i.e. if entered after a number or )\r\n    const tokensNotPreMultiplied = [\"+\",\"-\",\"*\",\"/\",\")\",\"^\",\"!\",\"x-root\",\"mod\"];\r\n    // tokens for functions trigonometric, hyperbolic, logarithms\r\n    const functionTokens = [\"√\",\"tan\",\"tanh\",\"atan\",\"atanh\",\"cos\",\"acos\",\"cosh\",\"acosh\",\"sin\",\"asin\",\"sinh\",\"asinh\",\"log\",\"ln\"];\r\n\r\n    inputStack.push(\"0\");\r\n\r\n    // initiating, which HTML tag is an input tag for user input\r\n    let inputTag=mainInputField;\r\n\r\n    console.log(inputStack);\r\n\r\n    /**\r\n     * @name    buttonsEvents\r\n     * @desc    switch function used to control calculator buttons, default behavior used for numbers 0-9\r\n     * @param   index {int} button index assigned in eventHandler\r\n     */\r\n    function buttonsEvents(index) {\r\n        switch (buttons[index].id) {\r\n            // Advance Buttons\r\n            case \"x-to-y\":\r\n                addOperation(\"^\");\r\n                break;\r\n            case \"x-square\":\r\n                addOperation(\"^\",\"2\");\r\n                break;\r\n            case \"10-to-x\":\r\n                initialClear();\r\n                addNumber(\"10\");\r\n                addOperation(\"^\");\r\n                break;\r\n            case \"tan\":\r\n                initialClear();\r\n                addToInputStack(triHypFunctions[0].innerHTML);\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"log\":\r\n                initialClear();\r\n                addToInputStack(\"log\");\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"cos\":\r\n                initialClear();\r\n                addToInputStack(triHypFunctions[1].innerHTML);\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"mod\":\r\n                addOperation(\"mod\");\r\n                break;\r\n            case \"sin\":\r\n                initialClear();\r\n                addToInputStack(triHypFunctions[2].innerHTML);\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"x-root\":\r\n                addOperation(\"x-root\");\r\n                break;\r\n            case \"x-cube\":\r\n                addOperation(\"^\",\"3\");\r\n                break;\r\n            case \"e\":\r\n                initialClear();\r\n                addToInputStack(\"e\");\r\n                break;\r\n            case \"atan\":\r\n                initialClear();\r\n                addToInputStack(triHypFunctions[3].innerHTML);\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"ln\":\r\n                initialClear();\r\n                addToInputStack(\"ln\");\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"acos\":\r\n                initialClear();\r\n                addToInputStack(triHypFunctions[4].innerHTML);\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"n!\":\r\n                addOperation(basicOperations[4]);\r\n                break;\r\n            case \"asin\":\r\n                initialClear();\r\n                addToInputStack(triHypFunctions[5].innerHTML);\r\n                addToInputStack(\"(\");\r\n                break;\r\n            // Top Row Buttons\r\n            case \"backspace\":\r\n                removeFromInputStack(\"backspace\");\r\n                break;\r\n            case \"bracket-right\":\r\n                addRightBracket();\r\n                break;\r\n            case \"bracket-left\":\r\n                initialClear();\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"plus-minus\":\r\n                plusMinus();\r\n                break;\r\n            case \"sqrt\":\r\n                initialClear();\r\n                addToInputStack(\"√\");\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"one-over-x\":\r\n                addNumber(\"1\");\r\n                addOperation(basicOperations[3]);\r\n                break;\r\n            case \"pi\":\r\n                initialClear();\r\n                addToInputStack(\"&pi;\");\r\n                break;\r\n            // Basic Buttons\r\n            case \"clear-entry\":\r\n                removeFromInputStack(\"clear-entry\");\r\n                break;\r\n            case \"clear\":\r\n                removeFromInputStack(\"clear\");\r\n                break;\r\n            case \"divide\":\r\n                addOperation(basicOperations[3]);\r\n                break;\r\n            case \"times\":\r\n                addOperation(basicOperations[2]);\r\n                break;\r\n            case \"minus\":\r\n                addOperation(basicOperations[1]);\r\n                break;\r\n            case \"plus\":\r\n                addOperation(basicOperations[0]);\r\n                break;\r\n            case \"dot\":\r\n                addDecimalPoint();\r\n                break;\r\n            default:\r\n                addToInputStack(buttons[index].innerHTML);\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @name    addToInputStack\r\n     * @desc    adds a token to input stack and invokes displayInput function, it also adds pre multiplication\r\n     *          in first two if statements\r\n     * @param   token to be displayed in inputField\r\n     */\r\n    function addToInputStack(token) {\r\n        if(isNaN(token) && !(tokensNotPreMultiplied.includes(token)) && !isNaN(inputStack[inputStack.length - 1])){\r\n            if(inputStack[inputStack.length - 1]===\"0\") {\r\n                displayInput(token);\r\n                inputStack[inputStack.length - 1] = token;\r\n            }\r\n            else {\r\n                displayInput(`*${token}`);\r\n                inputStack.push(\"*\", token);\r\n            }\r\n        }\r\n        else if(!(tokensNotPreMultiplied.includes(token)) && requiredSpecialTokens.includes(inputStack[inputStack.length - 1])) {\r\n            displayInput(`*${token}`);\r\n            inputStack.push(\"*\", token);\r\n        }\r\n        else if(!isNaN(token) && (!isNaN(inputStack[inputStack.length - 1]))) {\r\n            if ((token!==\"0\")&&(inputStack[inputStack.length - 1] === \"0\")){\r\n                displayInput(token);\r\n                inputStack[inputStack.length - 1] = token;\r\n            }\r\n            else if((inputStack[inputStack.length - 1] !== \"0\")){\r\n                displayInput(token);\r\n                inputStack[inputStack.length - 1] += token;\r\n            }\r\n        }\r\n        else {\r\n            displayInput(token);\r\n            inputStack.push(token);\r\n        }\r\n        console.log(inputStack);\r\n    }\r\n\r\n    /**\r\n     * @name    displayInput\r\n     * @desc    adds a token to the inputField, if a token is exponential or root additional <sup> tag is added\r\n     * @param   token {string} token to be displayed in inputField\r\n     */\r\n    function displayInput(token) {\r\n\r\n        let unbalancedLeftBrackets;\r\n\r\n        if(token===\"^\")\r\n        {\r\n            let placeholder = document.createTextNode(\"□\");\r\n            let superscript = document.createElement(\"SUP\");\r\n            superscript.appendChild(placeholder);\r\n            inputTag.appendChild(superscript);\r\n            inputTag=inputTag.lastChild;\r\n        }\r\n        else if(token===\"x-root\")\r\n        {\r\n            let degree;\r\n            let superscript = document.createElement(\"SUP\");\r\n            let indexNumber=inputStack.length-1;\r\n            let numberOfRightBrackets=0;\r\n            while(indexNumber>=0 && isNaN(inputStack[indexNumber]) && inputStack[indexNumber]!==\"&pi;\" && inputStack[indexNumber]!==\"e\"){\r\n                if(inputStack[indexNumber]===\")\")\r\n                {\r\n                    numberOfRightBrackets++;\r\n                }\r\n                indexNumber--;\r\n            }\r\n            if(numberOfRightBrackets===0){\r\n                degree = document.createTextNode(inputTag.innerHTML.slice(inputTag.innerHTML.lastIndexOf(inputStack[indexNumber],inputTag.innerHTML.length)));\r\n                inputTag.innerHTML=inputTag.innerHTML.slice(0,inputTag.innerHTML.lastIndexOf(inputStack[indexNumber]));\r\n                superscript.appendChild(degree);\r\n                inputTag.appendChild(superscript);\r\n            }\r\n            else{\r\n                let numberOfLeftBrackets=0;\r\n                let indexLastLeftBracket=inputTag.innerHTML.length-1;\r\n                for(let i=1;indexLastLeftBracket>=0 && numberOfLeftBrackets<numberOfRightBrackets;i++){\r\n                    if(inputTag.innerHTML.charAt(indexLastLeftBracket-i)===\"(\"){\r\n                        numberOfLeftBrackets++;\r\n                        indexLastLeftBracket-=i;\r\n                    }\r\n                }\r\n                degree = inputTag.innerHTML.slice(indexLastLeftBracket,inputTag.innerHTML.length);\r\n                inputTag.innerHTML=inputTag.innerHTML.slice(0,indexLastLeftBracket);\r\n                inputTag.appendChild(superscript);\r\n                inputTag=inputTag.lastChild;\r\n                inputTag.innerHTML+=degree;\r\n                inputTag=inputTag.parentNode;\r\n            }\r\n            inputTag.innerHTML+=\"&radic;\";\r\n        }\r\n        else\r\n        {\r\n            if(inputTag.innerHTML.charAt(inputTag.innerHTML.length-1)===\"0\" && !basicOperations.includes(token) && !inputStack[inputStack.length-1].includes(\".\") && token!==\".\" && token!==\")\"){\r\n                inputTag.innerHTML=inputTag.innerHTML.slice(0,-1)+token;\r\n            }\r\n            else {\r\n                if(inputTag.tagName===\"SUP\"){\r\n                    if(inputTag.innerHTML.charAt(0)===\"□\"){\r\n                        inputTag.innerHTML=\"\";\r\n                    }\r\n                    unbalancedLeftBrackets=balancingLeftBrackets(inputTag.innerHTML);\r\n                    if(basicOperations.includes(token) || token.charAt(0)===\"*\") {\r\n                        while (inputTag.tagName===\"SUP\" && unbalancedLeftBrackets===0)\r\n                        {\r\n                            inputTag=inputTag.parentNode;\r\n                            inputStack.push(\"]\");\r\n                            unbalancedLeftBrackets=balancingLeftBrackets(inputTag.innerHTML);\r\n                        }\r\n                    }\r\n                }\r\n                inputTag.innerHTML+=token;\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @name    removeFromInputStack\r\n     * @desc    function used to remove tokens from inputStack and update input field\r\n     * @param   option {string} 'backspace' removes last token, 'clear entry' clears input, 'clear' clears input and output\r\n     */\r\n    function removeFromInputStack(option) {\r\n        switch (option) {\r\n            case \"backspace\":\r\n                if((!isNaN(inputStack[inputStack.length - 1])))\r\n                {\r\n                    inputTag.innerHTML=inputTag.innerHTML.slice(0,-1);\r\n                    inputStack[inputStack.length - 1]=inputStack[inputStack.length - 1].slice(0,-1);\r\n                    if(inputStack[inputStack.length -1].length === 0) {\r\n                        inputStack.pop();\r\n                    }\r\n                }\r\n                else if(inputStack[inputStack.length-1]===\"[\" && inputStack[inputStack.length-2]===\"^\"){\r\n                    inputTag.innerHTML=inputTag.innerHTML.slice(0,-1);\r\n                    inputStack.splice(-2);\r\n                    inputTag=inputTag.parentNode;\r\n                    let inputTagChild = inputTag.lastChild;\r\n                    inputTagChild.remove();\r\n                }\r\n                else if(inputStack[inputStack.length-1]===\"x-root\"){\r\n                    inputTag.innerHTML=inputTag.innerHTML.slice(0,-1);\r\n                    let inputTagChild = inputTag.lastChild;\r\n                    inputTagChild.remove();\r\n                    inputTag.innerHTML+=inputTagChild.innerHTML;\r\n                    inputStack.pop();\r\n                }\r\n                else if(inputStack[inputStack.length-1]===\"(\" && functionTokens.includes(inputStack[inputStack.length-2])){\r\n                    inputTag.innerHTML=inputTag.innerHTML.slice(0,inputTag.innerHTML.lastIndexOf(inputStack[inputStack.length - 2]));\r\n                    inputStack.splice(-2);\r\n                }\r\n                else{\r\n                    inputTag.innerHTML=inputTag.innerHTML.slice(0,inputTag.innerHTML.lastIndexOf(inputStack[inputStack.length - 1]));\r\n                    inputStack.pop();\r\n                }\r\n                while (inputStack[inputStack.length-1]===\"]\"){\r\n                    inputTag.innerHTML=inputTag.innerHTML.slice(0,-1);\r\n                    inputStack.pop();\r\n                    inputTag=inputTag.lastChild;\r\n                }\r\n                if(inputStack[inputStack.length-1]===\"[\"){\r\n                    inputTag.innerHTML+=\"□\"\r\n                }\r\n                if(inputStack.length===0)\r\n                {\r\n                    inputTag.innerHTML=\"0\";\r\n                    inputStack.push(\"0\");\r\n                }\r\n                console.log(inputStack);\r\n                break;\r\n            case \"clear-entry\":\r\n                inputStack=[\"0\"];\r\n                mainInputField.innerHTML=\"0\";\r\n                inputTag=mainInputField;\r\n                console.log(inputStack);\r\n                break;\r\n            case \"clear\":\r\n                inputStack=[\"0\"];\r\n                mainInputField.innerHTML=\"0\";\r\n                mainOutputField.innerHTML=\"\";\r\n                inputTag=mainInputField;\r\n                console.log(inputStack);\r\n                break;\r\n            default:\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @name    addDecimalPoint\r\n     * @desc    adds decimal point to a number or adds '0.' to input stack\r\n     */\r\n    function addDecimalPoint() {\r\n       if(isNaN(inputStack[inputStack.length - 1])) {\r\n           addToInputStack(\"0.\");\r\n       }\r\n       else if(inputStack[inputStack.length - 1].indexOf(\".\") === -1) {\r\n           displayInput(\".\");\r\n           inputStack[inputStack.length - 1] += \".\";\r\n       }\r\n    }\r\n\r\n    /**\r\n     * @name    addOperation\r\n     * @desc    adds operation if last token in stack is a number or [']',')','&pi;','e','!']\r\n     * @param   token {string}  operation token\r\n     * @param   exp {string} exponent of the power function, by default equal to 0\r\n     */\r\n    function addOperation(token, exp=\"0\") {\r\n        if(!isNaN(inputStack[inputStack.length-1]) || requiredSpecialTokens.includes(inputStack[inputStack.length-1])) {\r\n            addToInputStack(token);\r\n            if(token===\"^\"){\r\n                inputStack.push(\"[\");\r\n                if(exp!==\"0\"){\r\n                    addNumber(exp);\r\n                }\r\n            }\r\n            else if(token===\"x-root\")\r\n            {\r\n                addToInputStack(\"(\");\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @name    addRightBracket\r\n     * @desc    adds ')' to inputStack if last token in stack is a number or one of [']',')','&pi;','e','!']\r\n     */\r\n    function addRightBracket(){\r\n        let unbalancedLeftBrackets = balancingLeftBrackets(inputTag.innerHTML);\r\n        if ((!isNaN(inputStack[inputStack.length-1]) || requiredSpecialTokens.includes(inputStack[inputStack.length-1])))\r\n        {\r\n            if(unbalancedLeftBrackets>0){\r\n                addToInputStack(\")\");\r\n            }\r\n            else if(unbalancedLeftBrackets===0){\r\n                let numberOfSquareBrackets=0;\r\n                let originalInputTag = inputTag;\r\n                while(inputTag.tagName===\"SUP\"){\r\n                    inputTag=inputTag.parentNode;\r\n                    numberOfSquareBrackets++;\r\n                    let unbalancedLeftBrackets = balancingLeftBrackets(inputTag.innerHTML);\r\n                    if(unbalancedLeftBrackets>0){\r\n                        let squareBracketsArray = Array.from({length:numberOfSquareBrackets},() => ']');\r\n                        inputStack.push(...squareBracketsArray);\r\n                        addToInputStack(\")\");\r\n                        break\r\n                    }\r\n                }\r\n                if(inputStack[inputStack.length-1]!==\")\"){\r\n                    inputTag=originalInputTag;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @name    balancingLeftBrackets\r\n     * @desc    loops through a string and counts how many unbalanced '(' are in a string\r\n     * @param   textString {string}\r\n     * @returns number {int}\r\n     */\r\n    function balancingLeftBrackets(textString){\r\n        let count=0;\r\n        for(let token of textString){\r\n            if(token===\"(\"){\r\n                count++;\r\n            }\r\n            if(token===\")\"){\r\n                count--;\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n\r\n    /**\r\n     * @name    addNumber\r\n     * @desc    function adds a number, used for operations that include numbers i.e. 10^x or 1/x\r\n     * @param   number {string}\r\n     */\r\n    function addNumber(number) {\r\n        if(!isNaN(inputStack[inputStack.length-1]) && inputStack[0]!==\"0\"){\r\n            addOperation(basicOperations[2]);\r\n        }\r\n        addToInputStack(number);\r\n    }\r\n\r\n    /**\r\n     * @name    plusMinus\r\n     * @desc    alternates between + and -, if +/- operation stands before the number (last item in the stack),\r\n     *          if there is a different operation before the number, an additional token (-1*) is introduced/removed before then number\r\n     *          if last token is operation + or -, the function alternates between the two\r\n     */\r\n    function plusMinus() {\r\n        if(!isNaN(inputStack[inputStack.length-1]) || inputStack[inputStack.length-1]===\"&pi;\"){\r\n            let index;\r\n            if(inputStack[inputStack.length-2]===\"+\"){\r\n                index=inputTag.innerHTML.lastIndexOf(\"+\");\r\n                inputTag.innerHTML=inputTag.innerHTML.slice(0,index)+\"-\"+inputTag.innerHTML.slice(index+1,inputTag.innerHTML.length);\r\n                inputStack[inputStack.length-2]=\"-\";\r\n            }\r\n            else if(inputStack[inputStack.length-2]===\"-\"){\r\n                index=inputTag.innerHTML.lastIndexOf(\"-\");\r\n                inputTag.innerHTML=inputTag.innerHTML.slice(0,index)+\"+\"+inputTag.innerHTML.slice(index+1,inputTag.innerHTML.length);\r\n                inputStack[inputStack.length-2]=\"+\";\r\n            }\r\n            else if (inputStack[inputStack.length-1]!==\"0\"){\r\n                let lastNumberInStack=inputStack[inputStack.length-1];\r\n                if(inputStack[inputStack.length-2]===\"-1*\"){\r\n                    index=inputTag.innerHTML.lastIndexOf(\"-\");\r\n                    inputTag.innerHTML=inputTag.innerHTML.slice(0,index)+inputTag.innerHTML.slice(index+1,inputTag.innerHTML.length);\r\n                    inputStack.splice(-2);\r\n                    inputStack.push(lastNumberInStack);\r\n                }\r\n                else{\r\n                    index=inputTag.innerHTML.lastIndexOf(lastNumberInStack);\r\n                    inputTag.innerHTML=inputTag.innerHTML.slice(0,index)+\"-\"+inputTag.innerHTML.slice(index,inputTag.innerHTML.length);\r\n                    inputStack.pop();\r\n                    inputStack.push(\"-1*\",lastNumberInStack);\r\n                }\r\n            }\r\n        }\r\n        else if(inputStack[inputStack.length-1]===\"+\") {\r\n            inputStack[inputStack.length-1]=\"-\";\r\n            inputTag.innerHTML=inputTag.innerHTML.slice(0,-1)+\"-\";\r\n        }\r\n        else if(inputStack[inputStack.length-1]===\"-\"){\r\n            inputStack[inputStack.length-1]=\"+\";\r\n            inputTag.innerHTML=inputTag.innerHTML.slice(0,-1)+\"+\";\r\n        }\r\n        console.log(inputStack);\r\n    }\r\n\r\n    /**\r\n     * @name    initialClear\r\n     * @desc    removes '0' from inputStack and input field, before first token is introduced\r\n     */\r\n    function initialClear(){\r\n        if(inputStack[0]===\"0\" && mainInputField.length===1)\r\n        {\r\n            inputStack.pop();\r\n            mainInputField.innerHTML=\"\"\r\n        }\r\n    }\r\n\r\n\r\n    function eventHandler() {\r\n        for(let i=0;i<buttons.length;i++){\r\n            buttons[i].addEventListener('click', function () {\r\n                buttonsEvents(i);\r\n            });\r\n        }\r\n    }\r\n\r\n    function init() {\r\n        eventHandler();\r\n    }\r\n\r\n    window.addEventListener(\"load\", init);\r\n})();\n\n//# sourceURL=webpack:///./src/js/modules/input-stack.js?");

/***/ }),

/***/ "./src/js/modules/shunting-yard.js":
/*!*****************************************!*\
  !*** ./src/js/modules/shunting-yard.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-stack */ \"./src/js/modules/input-stack.js\");\n\r\n\r\n(function () {\r\n    const calculateButton=document.querySelector(\"#equals\");\r\n\r\n\r\n    function calculate() {\r\n        if(!isNaN(_input_stack__WEBPACK_IMPORTED_MODULE_0__[\"inputStack\"][_input_stack__WEBPACK_IMPORTED_MODULE_0__[\"inputStack\"].length-1]) || _input_stack__WEBPACK_IMPORTED_MODULE_0__[\"requiredSpecialTokens\"].includes(_input_stack__WEBPACK_IMPORTED_MODULE_0__[\"inputStack\"][_input_stack__WEBPACK_IMPORTED_MODULE_0__[\"inputStack\"].length-1])){\r\n\r\n        }\r\n    }\r\n\r\n    function eventHandler() {\r\n        calculateButton.addEventListener(\"click\", () => calculate())\r\n    }\r\n    \r\n    \r\n    function init() {\r\n        eventHandler();\r\n    }\r\n\r\n    window.addEventListener(\"load\", init);\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/modules/shunting-yard.js?");

/***/ }),

/***/ 0:
/*!*************************************************************************************************!*\
  !*** multi ./src/js/index.js ./src/js/modules/input-stack.js ./src/js/modules/shunting-yard.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\Dokumenty\\Training Dragon\\JavaScript\\_git\\scientific-calculator\\src\\js\\index.js */\"./src/js/index.js\");\n__webpack_require__(/*! D:\\Dokumenty\\Training Dragon\\JavaScript\\_git\\scientific-calculator\\src\\js\\modules\\input-stack.js */\"./src/js/modules/input-stack.js\");\nmodule.exports = __webpack_require__(/*! D:\\Dokumenty\\Training Dragon\\JavaScript\\_git\\scientific-calculator\\src\\js\\modules\\shunting-yard.js */\"./src/js/modules/shunting-yard.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/js/modules/input-stack.js_./src/js/modules/shunting-yard.js?");

/***/ })

/******/ });