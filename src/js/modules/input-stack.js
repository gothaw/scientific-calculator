//IMPORTS
import {output} from "./rpn";
import {originalStack} from "./calculate";
//EXPORTS
export const mainOutputField        = document.querySelector(".output");
export const mainInputField         = document.querySelector(".input");
// inputTag - initiating, which HTML tag is an input tag for user input.
export let inputTag                 = mainInputField;
// inputStack - input stack containing operations and operands showed in the input field.
export let inputStack=[];
// requiredSpecialTokens - special non numerical tokens which:
// 1. are required to be at the end of the stack when basicOperations token is entered
// 2. are required to be at the end of the stack when ")" is entered
// 4. are required to be at the end of the stack when "^" or "x√" is entered
// 3. are post multiplied
// 4. need to at the end of equation when calculate function is invoked
export const requiredSpecialTokens  = [")","&pi;","e","!"];
// functionTokens - tokens for functions trigonometric, hyperbolic, logarithms (excluding x-root).
export const functionTokens         = ["√","tan","tanh","atan","atanh","cos","acos","cosh","acosh","sin","asin","sinh","asinh","log","ln"];
/**
 * @name        updateInputStack
 * @desc        Sets the inputStack to an empty array. If no calculations have been carried out before, it and pushes "0" to the stack.
 *              "0" is also pushed if calculations gave result of NaN or Infinity.
 *              If user carried out calculations and result is a finite number the function pushes output as the first element.
 *              If an error is thrown in calculate.js, unmodified originalStack is assigned to inputStack.
 * @param       error {boolean} with default value of false.
 */
export function updateInputStack(error=false) {
    if(error){
        inputStack=originalStack;
    }
    else{
        inputStack=[];
        (output===undefined || output===Infinity || isNaN(output))? inputStack.push("0"):inputStack.push(output.toString())
    }
}
/**
 * @name        resetInputTag
 * @desc        Sets the inputTag to mainInputField.
 */
export function resetInputTag() {
    inputTag = mainInputField;
}
/**
 * @name        balancingLeftBrackets
 * @desc        Loops through a string or an array and counts how many unbalanced '(' are in it.
 * @param       textString {string, array}
 * @returns     number {int} of unbalanced left brackets.
 */
export function balancingLeftBrackets(textString){
    let count=0;
    for(let token of textString){
        if(token==="("){
            count++;
        }
        if(token===")"){
            count--;
        }
    }
    return count;
}
/**
 END OF EXPORTS AND IMPORTS
 **/
(function () {
    const buttons                   = document.querySelectorAll(".btn");
    const triHypFunctions           = document.querySelectorAll(".tri-hyp-function");
    // basicOperations - tokens for basic operations + factorial symbol.
    const basicOperations           = ["+","-","*","/","!","mod"];
    // tokensNotPreMultiplied - tokens not required to be pre multiplied i.e. if entered after a number or ')'.
    const tokensNotPreMultiplied    = ["+","-","*","/",")","^","!","x-root","mod"];

    //console.log(inputStack);

    /**
     * @name    buttonsEvents
     * @desc    Switch function used to control calculator buttons.
     *          Each case refers to one button and default behavior used for numbers 0-9.
     * @param   index {int} button index assigned in eventHandler.
     */
    function buttonsEvents(index) {
        switch (buttons[index].id) {
            // Advance Buttons
            case "x-to-y":
                addOperation("^");
                break;
            case "x-square":
                addOperation("^","2");
                break;
            case "10-to-x":
                initialClear();
                addNumber("10");
                addOperation("^");
                break;
            case "tan":
                initialClear();
                addToInputStack(triHypFunctions[0].innerHTML);
                addToInputStack("(");
                break;
            case "log":
                initialClear();
                addToInputStack("log");
                addToInputStack("(");
                break;
            case "cos":
                initialClear();
                addToInputStack(triHypFunctions[1].innerHTML);
                addToInputStack("(");
                break;
            case "mod":
                addOperation("mod");
                break;
            case "sin":
                initialClear();
                addToInputStack(triHypFunctions[2].innerHTML);
                addToInputStack("(");
                break;
            case "x-root":
                addOperation("x-root");
                break;
            case "x-cube":
                addOperation("^","3");
                break;
            case "e":
                initialClear();
                addToInputStack("e");
                break;
            case "atan":
                initialClear();
                addToInputStack(triHypFunctions[3].innerHTML);
                addToInputStack("(");
                break;
            case "ln":
                initialClear();
                addToInputStack("ln");
                addToInputStack("(");
                break;
            case "acos":
                initialClear();
                addToInputStack(triHypFunctions[4].innerHTML);
                addToInputStack("(");
                break;
            case "n!":
                addOperation(basicOperations[4]);
                break;
            case "asin":
                initialClear();
                addToInputStack(triHypFunctions[5].innerHTML);
                addToInputStack("(");
                break;
            // Top Row Buttons
            case "backspace":
                removeFromInputStack("backspace");
                break;
            case "bracket-right":
                addRightBracket();
                break;
            case "bracket-left":
                initialClear();
                addToInputStack("(");
                break;
            case "plus-minus":
                plusMinus();
                break;
            case "sqrt":
                initialClear();
                addToInputStack("√");
                addToInputStack("(");
                break;
            case "one-over-x":
                addNumber("1");
                addOperation(basicOperations[3]);
                break;
            case "pi":
                initialClear();
                addToInputStack("&pi;");
                break;
            // Basic Buttons
            case "clear-entry":
                removeFromInputStack("clear-entry");
                break;
            case "clear":
                removeFromInputStack("clear");
                break;
            case "divide":
                addOperation(basicOperations[3]);
                break;
            case "times":
                addOperation(basicOperations[2]);
                break;
            case "minus":
                addOperation(basicOperations[1]);
                break;
            case "plus":
                addOperation(basicOperations[0]);
                break;
            case "dot":
                addDecimalPoint();
                break;
            default:
                addToInputStack(buttons[index].innerHTML);
        }
    }

    /**
     * @name    addToInputStack
     * @desc    Adds a token to input stack and invokes displayInput function.
     *          The function also adds pre multiplication in first two if statements for certain tokens.
     * @param   token to be added to inputStack.
     */
    function addToInputStack(token) {
        if(isNaN(token) && !(tokensNotPreMultiplied.includes(token)) && !isNaN(inputStack[inputStack.length - 1])){
            if(inputStack[inputStack.length - 1]==="0") {
                displayInput(token);
                inputStack[inputStack.length - 1] = token;
            }
            else {
                displayInput(`*${token}`);
                inputStack.push("*", token);
            }
        }
        else if(!(tokensNotPreMultiplied.includes(token)) && requiredSpecialTokens.includes(inputStack[inputStack.length - 1])) {
            displayInput(`*${token}`);
            inputStack.push("*", token);
        }
        else if(!isNaN(token) && (!isNaN(inputStack[inputStack.length - 1]))) {
            if ((token!=="0")&&(inputStack[inputStack.length - 1] === "0")){
                displayInput(token);
                inputStack[inputStack.length - 1] = token;
            }
            else if((inputStack[inputStack.length - 1] !== "0")){
                displayInput(token);
                inputStack[inputStack.length - 1] += token;
            }
        }
        else {
            displayInput(token);
            inputStack.push(token);
        }
        //console.log(inputStack);
    }

    /**
     * @name    displayInput
     * @desc    Function invoked in addToInputStack function. It adds a token to the inputField.
     *          If a token is exponential or x-root an additional <sup> tag is added to HTML. These <sup> tags are children of mainInputField.
     *          The function switches between <sup> tags and mainInputField DOM element depending on tokens added to the inputStack.
     *          This is carried out by assigning different values of DOM elements to inputTag.
     *          The function also adds ']' to inputStack after exiting <sup> tag, these tokens are used to wrap exponent of '^' operator.
     * @param   token {string} token to be displayed in inputTag.
     */
    function displayInput(token) {

        let unbalancedLeftBrackets;

        if(token==="^")
        {
            let placeholder = document.createTextNode("□");
            let superscript = document.createElement("SUP");
            superscript.appendChild(placeholder);
            inputTag.appendChild(superscript);
            inputTag=inputTag.lastChild;
        }
        else if(token==="x-root")
        {
            let degree;
            let superscript = document.createElement("SUP");
            let indexNumber=inputStack.length-1;
            let numberOfRightBrackets=0;
            while(indexNumber>=0 && isNaN(inputStack[indexNumber]) && inputStack[indexNumber]!=="&pi;" && inputStack[indexNumber]!=="e"){
                if(inputStack[indexNumber]===")")
                {
                    numberOfRightBrackets++;
                }
                indexNumber--;
            }
            if(numberOfRightBrackets===0){
                degree = document.createTextNode(inputTag.innerHTML.slice(inputTag.innerHTML.lastIndexOf(inputStack[indexNumber],inputTag.innerHTML.length)));
                inputTag.innerHTML=inputTag.innerHTML.slice(0,inputTag.innerHTML.lastIndexOf(inputStack[indexNumber]));
                superscript.appendChild(degree);
                inputTag.appendChild(superscript);
            }
            else{
                let numberOfLeftBrackets=0;
                let indexLastLeftBracket=inputTag.innerHTML.length-1;
                for(let i=1;indexLastLeftBracket>=0 && numberOfLeftBrackets<numberOfRightBrackets;i++){
                    if(inputTag.innerHTML.charAt(indexLastLeftBracket-i)==="("){
                        numberOfLeftBrackets++;
                        indexLastLeftBracket-=i;
                    }
                }
                degree = inputTag.innerHTML.slice(indexLastLeftBracket,inputTag.innerHTML.length);
                inputTag.innerHTML=inputTag.innerHTML.slice(0,indexLastLeftBracket);
                inputTag.appendChild(superscript);
                inputTag=inputTag.lastChild;
                inputTag.innerHTML+=degree;
                inputTag=inputTag.parentNode;
            }
            inputTag.innerHTML+="&radic;";
        }
        else
        {
            if(inputStack[inputStack.length-1]==="0" && !basicOperations.includes(token) && token!=="." && token!==")"){
                inputTag.innerHTML=inputTag.innerHTML.slice(0,-1)+token;
            }
            else {
                if(inputTag.tagName==="SUP"){
                    if(inputTag.innerHTML.charAt(0)==="□"){
                        inputTag.innerHTML="";
                    }
                    unbalancedLeftBrackets=balancingLeftBrackets(inputTag.innerHTML);
                    if(basicOperations.includes(token) || token.charAt(0)==="*") {
                        while (inputTag.tagName==="SUP" && unbalancedLeftBrackets===0)
                        {
                            inputTag=inputTag.parentNode;
                            inputStack.push("]");
                            unbalancedLeftBrackets=balancingLeftBrackets(inputTag.innerHTML);
                        }
                    }
                }
                inputTag.innerHTML+=token;
            }
        }
    }

    /**
     * @name    removeFromInputStack
     * @desc    Function used to remove tokens from inputStack and update inner HTML of an inputTag.
     *          The function has three options - 'backspace' removes last token, 'clear entry' clears input, 'clear' clears input and output.
     *          The 'backspace' option removes <sup> tags if certain tokens in the stack are removed.
     *          It also switches between <sup> tags and mainInputField DOM element.
     * @param   option {string}
     */
    function removeFromInputStack(option) {
        switch (option) {
            case "backspace":
                if((!isNaN(inputStack[inputStack.length - 1])))
                {
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,-1);
                    inputStack[inputStack.length - 1]=inputStack[inputStack.length - 1].slice(0,-1);
                    if(inputStack[inputStack.length -1].length === 0) {
                        inputStack.pop();
                    }
                }
                else if(inputStack[inputStack.length-1]==="[" && inputStack[inputStack.length-2]==="^"){
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,-1);
                    inputStack.splice(-2);
                    inputTag=inputTag.parentNode;
                    let inputTagChild = inputTag.lastChild;
                    inputTagChild.remove();
                }
                else if(inputStack[inputStack.length-1]==="x-root"){
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,-1);
                    let inputTagChild = inputTag.lastChild;
                    inputTagChild.remove();
                    inputTag.innerHTML+=inputTagChild.innerHTML;
                    inputStack.pop();
                }
                else if(inputStack[inputStack.length-1]==="(" && functionTokens.includes(inputStack[inputStack.length-2])){
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,inputTag.innerHTML.lastIndexOf(inputStack[inputStack.length - 2]));
                    inputStack.splice(-2);
                }
                else{
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,inputTag.innerHTML.lastIndexOf(inputStack[inputStack.length - 1]));
                    inputStack.pop();
                }
                while (inputStack[inputStack.length-1]==="]"){
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,-1);
                    inputStack.pop();
                    inputTag=inputTag.lastChild;
                }
                if(inputStack[inputStack.length-1]==="["){
                    inputTag.innerHTML+="□"
                }
                if(inputStack.length===0)
                {
                    inputTag.innerHTML="0";
                    inputStack.push("0");
                }
                //console.log(inputStack);
                break;
            case "clear-entry":
                inputStack=["0"];
                mainInputField.innerHTML="0";
                inputTag=mainInputField;
                //console.log(inputStack);
                break;
            case "clear":
                inputStack=["0"];
                mainInputField.innerHTML="0";
                mainOutputField.innerHTML="";
                inputTag=mainInputField;
                //console.log(inputStack);
                break;
            default:
        }
    }

    /**
     * @name    addDecimalPoint
     * @desc    Adds decimal point to a number or adds '0.' to input stack.
     */
    function addDecimalPoint() {
       if(isNaN(inputStack[inputStack.length - 1])) {
           addToInputStack("0.");
       }
       else if(inputStack[inputStack.length - 1].indexOf(".") === -1) {
           displayInput(".");
           inputStack[inputStack.length - 1] += ".";
       }
    }

    /**
     * @name    addOperation
     * @desc    Adds operation if last token in stack is a number or [')','&pi;','e','!'].
     *          For exponential function, it adds '[', which are not displayed in the inputTag.
     *          The purpose of this token is to wrap the power function.
     * @param   token {string} operation token.
     * @param   exp {string} exponent of the '^' operator, by default equal to '0'.
     */
    function addOperation(token, exp="0") {
        if(!isNaN(inputStack[inputStack.length-1]) || requiredSpecialTokens.includes(inputStack[inputStack.length-1])) {
            addToInputStack(token);
            if(token==="^"){
                inputStack.push("[");
                if(exp!=="0"){
                    addNumber(exp);
                }
            }
            else if(token==="x-root")
            {
                addToInputStack("(");
            }
        }
    }

    /**
     * @name    addRightBracket
     * @desc    Adds ')' to inputStack if last token in stack is a number or one of [')','&pi;','e','!'].
     *          The function calls balancingLeftBracketFunction to find if there are unbalanced '(' in the inputTag.
     *          It also switches between parents of current inputTag to find a DOM element with unbalanced '('.
     *          If no unbalanced left brackets are found, ')' is not added.
     */
    function addRightBracket(){
        let unbalancedLeftBrackets = balancingLeftBrackets(inputTag.innerHTML);
        if ((!isNaN(inputStack[inputStack.length-1]) || requiredSpecialTokens.includes(inputStack[inputStack.length-1])))
        {
            if(unbalancedLeftBrackets>0){
                addToInputStack(")");
            }
            else if(unbalancedLeftBrackets===0){
                let numberOfSquareBrackets=0;
                let originalInputTag = inputTag;
                while(inputTag.tagName==="SUP"){
                    inputTag=inputTag.parentNode;
                    numberOfSquareBrackets++;
                    let unbalancedLeftBrackets = balancingLeftBrackets(inputTag.innerHTML);
                    if(unbalancedLeftBrackets>0){
                        let squareBracketsArray = Array.from({length:numberOfSquareBrackets},() => ']');
                        inputStack.push(...squareBracketsArray);
                        addToInputStack(")");
                        break
                    }
                }
                if(inputStack[inputStack.length-1]!==")"){
                    inputTag=originalInputTag;
                }
            }
        }
    }

    /**
     * @name    addNumber
     * @desc    Function which adds a number. It is used for operations that include numbers i.e. 10^x or 1/x.
     *          It allows the number to be pre multiplied if entered after another number.
     * @param   number {string}
     */
    function addNumber(number) {
        if(!isNaN(inputStack[inputStack.length-1]) && inputStack[0]!=="0"){
            addOperation(basicOperations[2]);
        }
        addToInputStack(number);
    }

    /**
     * @name    plusMinus
     * @desc    Alternates between + and -, if +/- operation stands before the number (last item in the stack).
     *          If there is a different operation before the number, an additional token (-1*) is introduced/removed before then number.
     *          This token is later on, changed to '-1' and '*' when calculate button is clicked.
     *          If last token is operation + or -, the function alternates between the two.
     */
    function plusMinus() {
        if(!isNaN(inputStack[inputStack.length-1]) || inputStack[inputStack.length-1]==="&pi;"){
            let index;
            if(inputStack[inputStack.length-2]==="+"){
                index=inputTag.innerHTML.lastIndexOf("+");
                inputTag.innerHTML=inputTag.innerHTML.slice(0,index)+"-"+inputTag.innerHTML.slice(index+1,inputTag.innerHTML.length);
                inputStack[inputStack.length-2]="-";
            }
            else if(inputStack[inputStack.length-2]==="-"){
                index=inputTag.innerHTML.lastIndexOf("-");
                inputTag.innerHTML=inputTag.innerHTML.slice(0,index)+"+"+inputTag.innerHTML.slice(index+1,inputTag.innerHTML.length);
                inputStack[inputStack.length-2]="+";
            }
            else if (inputStack[inputStack.length-1]!=="0"){
                let lastNumberInStack=inputStack[inputStack.length-1];
                if(inputStack[inputStack.length-2]==="-1*"){
                    index=inputTag.innerHTML.lastIndexOf("-");
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,index)+inputTag.innerHTML.slice(index+1,inputTag.innerHTML.length);
                    inputStack.splice(-2);
                    inputStack.push(lastNumberInStack);
                }
                else{
                    index=inputTag.innerHTML.lastIndexOf(lastNumberInStack);
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,index)+"-"+inputTag.innerHTML.slice(index,inputTag.innerHTML.length);
                    inputStack.pop();
                    inputStack.push("-1*",lastNumberInStack);
                }
            }
        }
        else if(inputStack[inputStack.length-1]==="+") {
            inputStack[inputStack.length-1]="-";
            inputTag.innerHTML=inputTag.innerHTML.slice(0,-1)+"-";
        }
        else if(inputStack[inputStack.length-1]==="-"){
            inputStack[inputStack.length-1]="+";
            inputTag.innerHTML=inputTag.innerHTML.slice(0,-1)+"+";
        }
        //console.log(inputStack);
    }

    /**
     * @name    initialClear
     * @desc    Removes '0' from inputStack and input field when first token is introduced.
     */
    function initialClear(){
        if(inputStack[0]==="0" && mainInputField.length===1)
        {
            inputStack.pop();
            mainInputField.innerHTML=""
        }
    }


    function eventHandler() {
        for(let i=0;i<buttons.length;i++){
            buttons[i].addEventListener('click', function () {
                buttonsEvents(i);
            });
        }
    }

    function init() {
        updateInputStack();
        eventHandler();
    }

    window.addEventListener("load", init);
})();