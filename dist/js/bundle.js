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

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\r\n    const basicButtons = document.querySelectorAll(\".basic-btn\");\r\n    const topRowButtons = document.querySelectorAll(\".top-row-btn\");\r\n    const advanceButtons = document.querySelectorAll(\".advance-btn\");\r\n    const mainOutputField = document.querySelector(\".output\");\r\n    const mainInputField = document.querySelector(\".input\");\r\n    const triHypFunctions = document.querySelectorAll(\".tri-hyp-function\");\r\n\r\n    // tokens for basic operations + factorial symbol\r\n    const basicOperations = [\"+\",\"-\",\"*\",\"/\",\"!\",\"mod\"];\r\n    // tokens not required to be pre multiplied i.e. if entered after a number or )\r\n    const tokensNotPreMultiplied = [\"+\",\"-\",\"*\",\"/\",\")\",\"^\",\"!\",\"x-root\",\"mod\"];\r\n    // special tokens which:\r\n    // 1. are required to be at the end of the stack when basicOperations token is entered\r\n    // 2. are required to be at the end of the stack when \")\" is entered\r\n    // 4. are required to be at the end of the stack when \"^\" or \"x√\" is entered\r\n    // 3. are post multiplied\r\n    const requiredSpecialToken = [\")\",\"&pi;\",\"e\",\"!\"];\r\n    // tokens for functions trigonometric, hyperbolic, logarithms\r\n    const functionTokens = [\"√\",\"tan\",\"tanh\",\"atan\",\"atanh\",\"cos\",\"acos\",\"cosh\",\"acosh\",\"sin\",\"asin\",\"sinh\",\"asinh\",\"log\",\"ln\"];\r\n\r\n    // input stack containing operations and operands showed in the input field\r\n    let inputStack=[];\r\n    inputStack.push(\"0\");\r\n\r\n    // initiating, which HTML tag is an input tag for user input\r\n    let inputTag=mainInputField;\r\n\r\n    console.log(inputStack);\r\n\r\n    function calculate(stack) {\r\n\r\n    }\r\n\r\n    function advanceButtonsEvent(index) {\r\n        switch (advanceButtons[index].id) {\r\n            case \"x-to-y\":\r\n                addOperation(\"^\");\r\n                break;\r\n            case \"x-square\":\r\n                addOperation(\"^\",\"2\");\r\n                break;\r\n            case \"10-to-x\":\r\n                initialClear();\r\n                addNumber(\"10\");\r\n                addOperation(\"^\");\r\n                break;\r\n            case \"tan\":\r\n                initialClear();\r\n                addToInputStack(triHypFunctions[0].innerHTML);\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"log\":\r\n                initialClear();\r\n                addToInputStack(\"log\");\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"cos\":\r\n                initialClear();\r\n                addToInputStack(triHypFunctions[1].innerHTML);\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"mod\":\r\n                addOperation(\"mod\");\r\n                break;\r\n            case \"sin\":\r\n                initialClear();\r\n                addToInputStack(triHypFunctions[2].innerHTML);\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"x-root\":\r\n                addOperation(\"x-root\");\r\n                break;\r\n            case \"x-cube\":\r\n                addOperation(\"^\",\"3\");\r\n                break;\r\n            case \"e\":\r\n                initialClear();\r\n                addToInputStack(\"e\");\r\n                break;\r\n            case \"atan\":\r\n                initialClear();\r\n                addToInputStack(triHypFunctions[3].innerHTML);\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"ln\":\r\n                initialClear();\r\n                addToInputStack(\"ln\");\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"acos\":\r\n                initialClear();\r\n                addToInputStack(triHypFunctions[4].innerHTML);\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"n!\":\r\n                addOperation(basicOperations[4]);\r\n                break;\r\n            case \"asin\":\r\n                initialClear();\r\n                addToInputStack(triHypFunctions[5].innerHTML);\r\n                addToInputStack(\"(\");\r\n                break;\r\n            default:\r\n        }\r\n    }\r\n\r\n    function topRowButtonsEvent(index) {\r\n        switch (topRowButtons[index].id) {\r\n            case \"backspace\":\r\n                removeFromInputStack(\"backspace\");\r\n                break;\r\n            case \"bracket-right\":\r\n                addRightBracket();\r\n                break;\r\n            case \"bracket-left\":\r\n                initialClear();\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"plus-minus\":\r\n                plusMinus();\r\n                break;\r\n            case \"sqrt\":\r\n                initialClear();\r\n                addToInputStack(\"√\");\r\n                addToInputStack(\"(\");\r\n                break;\r\n            case \"one-over-x\":\r\n                addNumber(\"1\");\r\n                addOperation(basicOperations[3]);\r\n                break;\r\n            case \"pi\":\r\n                initialClear();\r\n                addToInputStack(\"&pi;\");\r\n                break;\r\n            default:\r\n        }\r\n    }\r\n\r\n    function basicButtonsEvent(index) {\r\n        switch (basicButtons[index].id) {\r\n            case \"clear-entry\":\r\n                removeFromInputStack(\"clear-entry\");\r\n                break;\r\n            case \"clear\":\r\n                removeFromInputStack(\"clear\");\r\n                break;\r\n            case \"equals\":\r\n                calculate(inputStack);\r\n                break;\r\n            case \"divide\":\r\n                addOperation(basicOperations[3]);\r\n                break;\r\n            case \"times\":\r\n                addOperation(basicOperations[2]);\r\n                break;\r\n            case \"minus\":\r\n                addOperation(basicOperations[1]);\r\n                break;\r\n            case \"plus\":\r\n                addOperation(basicOperations[0]);\r\n                break;\r\n            case \"dot\":\r\n                addDecimalPoint();\r\n                break;\r\n            default:\r\n                addToInputStack(basicButtons[index].innerHTML);\r\n        }\r\n    }\r\n\r\n    function addToInputStack(token) {\r\n        if(isNaN(token) && !(tokensNotPreMultiplied.includes(token)) && !isNaN(inputStack[inputStack.length - 1])){\r\n            if(inputStack[inputStack.length - 1]===\"0\") {\r\n                displayInput(token);\r\n                inputStack[inputStack.length - 1] = token;\r\n            }\r\n            else {\r\n                displayInput(`*${token}`);\r\n                inputStack.push(\"*\", token);\r\n            }\r\n        }\r\n        else if(!(tokensNotPreMultiplied.includes(token)) && requiredSpecialToken.includes(inputStack[inputStack.length - 1])) {\r\n            displayInput(`*${token}`);\r\n            inputStack.push(\"*\", token);\r\n        }\r\n        else if(!isNaN(token) && (!isNaN(inputStack[inputStack.length - 1]))) {\r\n            if ((token!==0)&&(inputStack[inputStack.length - 1] === \"0\")){\r\n                displayInput(token);\r\n                inputStack[inputStack.length - 1] = token;\r\n            }\r\n            else if((inputStack[inputStack.length - 1] !== \"0\")){\r\n                displayInput(token);\r\n                inputStack[inputStack.length - 1] += token;\r\n            }\r\n        }\r\n        else {\r\n            displayInput(token);\r\n            inputStack.push(token);\r\n        }\r\n        console.log(inputStack);\r\n    }\r\n\r\n    function initialClear(){\r\n        if(inputStack[0]===\"0\" && mainInputField.length===1)\r\n        {\r\n            inputStack.pop();\r\n            mainInputField.innerHTML=\"\"\r\n        }\r\n    }\r\n\r\n    function displayInput(token) {\r\n\r\n        let unbalancedLeftBrackets;\r\n\r\n        if(token===\"^\")\r\n        {\r\n            let placeholder = document.createTextNode(\"□\");\r\n            let superscript = document.createElement(\"SUP\");\r\n            superscript.appendChild(placeholder);\r\n            inputTag.appendChild(superscript);\r\n            inputTag=inputTag.lastChild;\r\n        }\r\n        else if(token===\"x-root\")\r\n        {\r\n            if(!isNaN(inputStack[inputStack.length-1]) || inputStack[inputStack.length-1]===\"&pi;\" || inputStack[inputStack.length-1]===\"e\"){\r\n                let degree = document.createTextNode(inputStack[inputStack.length-1]);\r\n                let superscript = document.createElement(\"SUP\");\r\n                inputTag.innerHTML=inputTag.innerHTML.slice(0,inputTag.innerHTML.lastIndexOf(inputStack[inputStack.length - 1]));\r\n                superscript.appendChild(degree);\r\n                inputTag.appendChild(superscript);\r\n            }\r\n            else if(inputStack[inputStack.length-1]===\"!\")\r\n            {\r\n                let numberIndex=1;\r\n                do {\r\n                    numberIndex++;\r\n                }\r\n                while(!isNaN(inputStack[inputStack.length-numberIndex]) || inputStack[inputStack.length-numberIndex]===\"&pi;\" || inputStack[inputStack.length-numberIndex]===\"e\");\r\n                //error\r\n                console.log(numberIndex);\r\n                let degree = document.createTextNode(inputTag.innerHTML.slice(-inputTag.innerHTML.lastIndexOf(inputStack[inputStack.length - numberIndex],-1)));\r\n                // let superscript = document.createElement(\"SUP\");\r\n                // superscript.appendChild()\r\n                console.log(degree);\r\n\r\n\r\n            }\r\n            inputTag.innerHTML+=\"&radic;\";\r\n        }\r\n        else\r\n        {\r\n            if(inputTag.innerHTML.charAt(inputTag.innerHTML.length-1)===\"0\" && !basicOperations.includes(token)){\r\n                inputTag.innerHTML=inputTag.innerHTML.slice(0,-1)+token;\r\n            }\r\n            else {\r\n                if(inputTag.tagName===\"SUP\"){\r\n                    if(inputTag.innerHTML.charAt(0)===\"□\"){\r\n                        inputTag.innerHTML=\"\";\r\n                    }\r\n                    if(basicOperations.includes(token) || token.charAt(0)===\"*\") {\r\n                        while (inputTag.tagName===\"SUP\" && !inputTag.innerHTML.includes(\"(\"))\r\n                        {\r\n                            inputTag=inputTag.parentNode;\r\n                            inputStack.push(\"]\");\r\n                        }\r\n                    }\r\n                    unbalancedLeftBrackets=balancingLeftBrackets(inputTag.innerHTML);\r\n                    if(inputStack[inputStack.length-1]===\")\" && unbalancedLeftBrackets===0){\r\n                        inputTag=inputTag.parentNode;\r\n                        inputStack.push(\"]\");\r\n                    }\r\n                }\r\n                inputTag.innerHTML+=token;\r\n            }\r\n        }\r\n    }\r\n\r\n    function removeFromInputStack(option) {\r\n        switch (option) {\r\n            case \"backspace\":\r\n                if((!isNaN(inputStack[inputStack.length - 1])))\r\n                {\r\n                    inputTag.innerHTML=inputTag.innerHTML.slice(0,-1);\r\n                    inputStack[inputStack.length - 1]=inputStack[inputStack.length - 1].slice(0,-1);\r\n                    if(inputStack[inputStack.length -1].length === 0) {\r\n                        inputStack.pop();\r\n                    }\r\n                }\r\n                else if(inputStack[inputStack.length-1]===\"[\" && inputStack[inputStack.length-2]===\"^\"){\r\n                    inputTag.innerHTML=inputTag.innerHTML.slice(0,-1);\r\n                    inputStack.splice(-2);\r\n                    inputTag=inputTag.parentNode;\r\n                    let inputTagChild = inputTag.lastChild;\r\n                    if(inputTagChild.innerHTML===\"\")\r\n                    {\r\n                        inputTagChild.remove();\r\n                    }\r\n                }\r\n                else if(inputStack[inputStack.length-1]===\"(\" && functionTokens.includes(inputStack[inputStack.length-2])){\r\n                    inputTag.innerHTML=inputTag.innerHTML.slice(0,inputTag.innerHTML.lastIndexOf(inputStack[inputStack.length - 2]));\r\n                    inputStack.splice(-2);\r\n                }\r\n                else{\r\n                    inputTag.innerHTML=inputTag.innerHTML.slice(0,inputTag.innerHTML.lastIndexOf(inputStack[inputStack.length - 1]));\r\n                    inputStack.pop();\r\n                }\r\n                while (inputStack[inputStack.length-1]===\"]\"){\r\n                    inputTag.innerHTML=inputTag.innerHTML.slice(0,-1);\r\n                    inputStack.pop();\r\n                    inputTag=inputTag.lastChild;\r\n                }\r\n                if(inputStack[inputStack.length-1]===\"[\"){\r\n                    inputTag.innerHTML+=\"□\"\r\n                }\r\n                if(inputStack.length===0)\r\n                {\r\n                    inputTag.innerHTML=\"0\";\r\n                    inputStack.push(\"0\");\r\n                }\r\n                console.log(inputStack);\r\n                break;\r\n            case \"clear-entry\":\r\n                inputStack=[\"0\"];\r\n                mainInputField.innerHTML=\"0\";\r\n                inputTag=mainInputField;\r\n                console.log(inputStack);\r\n                break;\r\n            case \"clear\":\r\n                inputStack=[\"0\"];\r\n                mainInputField.innerHTML=\"0\";\r\n                mainOutputField.innerHTML=\"\";\r\n                inputTag=mainInputField;\r\n                console.log(inputStack);\r\n                break;\r\n            default:\r\n        }\r\n    }\r\n\r\n    function addDecimalPoint() {\r\n       if(isNaN(inputStack[inputStack.length - 1])) {\r\n           addToInputStack(\"0.\");\r\n       }\r\n       else if(inputStack[inputStack.length - 1].indexOf(\".\") === -1) {\r\n           displayInput(\".\");\r\n           inputStack[inputStack.length - 1] += \".\";\r\n       }\r\n    }\r\n\r\n    function addOperation(token, exp=\"0\") {\r\n        if(!isNaN(inputStack[inputStack.length-1]) || requiredSpecialToken.includes(inputStack[inputStack.length-1])) {\r\n            addToInputStack(token);\r\n            if(token===\"^\"){\r\n                inputStack.push(\"[\");\r\n                if(exp!==\"0\"){\r\n                    addNumber(exp);\r\n                }\r\n            }\r\n            else if(token===\"x-root\")\r\n            {\r\n                addToInputStack(\"(\");\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n    function addRightBracket(){\r\n        let unbalancedLeftBrackets = balancingLeftBrackets(inputTag.innerHTML);\r\n        console.log(unbalancedLeftBrackets);\r\n        if ((!isNaN(inputStack[inputStack.length-1]) || requiredSpecialToken.includes(inputStack[inputStack.length-1])) && unbalancedLeftBrackets>0)\r\n        {\r\n            addToInputStack(\")\")\r\n        }\r\n    }\r\n\r\n    function balancingLeftBrackets(textString){\r\n        let count=0;\r\n        for(let token of textString){\r\n            if(token===\"(\"){\r\n                count++;\r\n            }\r\n            if(token===\")\"){\r\n                count--;\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n\r\n    function addNumber(number) {\r\n        if(!isNaN(inputStack[inputStack.length-1]) && inputStack[0]!==\"0\"){\r\n            addOperation(basicOperations[2]);\r\n        }\r\n        addToInputStack(number);\r\n    }\r\n\r\n    function plusMinus() {\r\n        if(!isNaN(inputStack[inputStack.length-1]) || inputStack[inputStack.length-1]===\"&pi;\"){\r\n            let index;\r\n            if(inputStack[inputStack.length-2]===\"+\"){\r\n                index=inputTag.innerHTML.lastIndexOf(\"+\");\r\n                inputTag.innerHTML=inputTag.innerHTML.slice(0,index)+\"-\"+inputTag.innerHTML.slice(index+1,inputTag.innerHTML.length);\r\n                inputStack[inputStack.length-2]=\"-\";\r\n            }\r\n            else if(inputStack[inputStack.length-2]===\"-\"){\r\n                index=inputTag.innerHTML.lastIndexOf(\"-\");\r\n                inputTag.innerHTML=inputTag.innerHTML.slice(0,index)+\"+\"+inputTag.innerHTML.slice(index+1,inputTag.innerHTML.length);\r\n                inputStack[inputStack.length-2]=\"+\";\r\n            }\r\n            else if (inputStack[inputStack.length-1]!==\"0\"){\r\n                let lastNumberInStack=inputStack[inputStack.length-1];\r\n                if(inputStack[inputStack.length-2]===\"+/-\"){\r\n                    index=inputTag.innerHTML.lastIndexOf(\"-\");\r\n                    inputTag.innerHTML=inputTag.innerHTML.slice(0,index)+inputTag.innerHTML.slice(index+1,inputTag.innerHTML.length);\r\n                    inputStack.splice(-2);\r\n                    inputStack.push(lastNumberInStack);\r\n                }\r\n                else{\r\n                    index=inputTag.innerHTML.lastIndexOf(lastNumberInStack);\r\n                    inputTag.innerHTML=inputTag.innerHTML.slice(0,index)+\"-\"+inputTag.innerHTML.slice(index,inputTag.innerHTML.length);\r\n                    inputStack.pop();\r\n                    inputStack.push(\"+/-\",lastNumberInStack);\r\n                }\r\n            }\r\n        }\r\n        else if(inputStack[inputStack.length-1]===\"+\") {\r\n            inputStack[inputStack.length-1]=\"-\";\r\n            inputTag.innerHTML=inputTag.innerHTML.slice(0,-1)+\"-\";\r\n        }\r\n        else if(inputStack[inputStack.length-1]===\"-\"){\r\n            inputStack[inputStack.length-1]=\"+\";\r\n            inputTag.innerHTML=inputTag.innerHTML.slice(0,-1)+\"+\";\r\n        }\r\n        console.log(inputStack);\r\n    }\r\n\r\n    function eventHandler() {\r\n        for(let i=0;i<basicButtons.length;i++){\r\n            basicButtons[i].addEventListener('click', function () {\r\n                basicButtonsEvent(i);\r\n            });\r\n        }\r\n        for(let i=0;i<topRowButtons.length;i++){\r\n            topRowButtons[i].addEventListener('click', function () {\r\n                topRowButtonsEvent(i);\r\n            });\r\n        }\r\n        for(let i=0;i<advanceButtons.length;i++){\r\n            advanceButtons[i].addEventListener('click', function () {\r\n                advanceButtonsEvent(i);\r\n            });\r\n        }\r\n    }\r\n\r\n    function init() {\r\n        eventHandler();\r\n    }\r\n\r\n    window.addEventListener(\"load\", init);\r\n})();\n\n//# sourceURL=webpack:///./src/js/modules/calculator.js?");

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