//IMPORTS
import {inputStack as infixStack, inputTag, mainOutputField, requiredSpecialTokens, resetInputTag, updateInputStack, balancingLeftBrackets} from "./input-stack";
import {resetPostFixStack, shuntingYard} from "./shunting-yard";
import {output, resetOutputStack, reversePolishNotation} from "./rpn";
//EXPORTS
export let originalStack = [];
/**
 END OF EXPORTS AND IMPORTS
 **/
(function () {
    const calculateButton   = document.querySelector("#equals");
    /**
     * @name        resetCalculator
     * @desc        Resets the calculator by invoking functions that update the inputStack and reset postfix and output stacks.
     * @param       error {boolean}
     */
    function resetCalculator(error=false) {
        updateInputStack(error);
        resetPostFixStack();
        resetOutputStack();
    }
    /**
     * @name        displayOutput
     * @desc        Function used to display the result of the calculation in mainOutputField.
     *              If NaN or Infinity are the result, it sets the mainInputField to '0'.
     *              The function also invokes resetInputTag function.
     */
    function displayOutput() {
        resetInputTag();
        mainOutputField.innerHTML=`${inputTag.innerHTML} = ${output}`;
        (output===Infinity || isNaN(output))? inputTag.innerHTML=0 : inputTag.innerHTML=output.toString();
    }
    /**
     * @name        modifyInfixStack
     * @desc        Modifies infix stack by replacing '-1*' with '-1' and '*'. It also adds missing ']' to the end of the stack.
     */
    function modifyInfixStack() {
        console.log("Infix Stack:",infixStack);
        let unbalancedSquareBrackets=0;
        for(let token of infixStack){
            if(token==="-1*"){
                let index = infixStack.indexOf(token);
                infixStack.splice(index,1,"-1","*");
            }
            else if(token==="["){
                unbalancedSquareBrackets++;
            }
            else if(token==="]"){
                unbalancedSquareBrackets--;
            }
        }
        for(let i=0;i<unbalancedSquareBrackets;i++){
            infixStack.push("]")
        }
        console.log("Modified Infix Stack",infixStack);
    }
    /**
     * @name        duplicateInfixStack
     * @desc        Creates a new stack, which stores all values from infixStack.
     */
    function duplicateInfixStack() {
        originalStack = infixStack.slice();
        console.log("Original Stack:",originalStack);
    }

    function eventHandler() {
        calculateButton.addEventListener("click", () => {
            if((!isNaN(infixStack[infixStack.length-1]) || requiredSpecialTokens.includes(infixStack[infixStack.length-1])) && balancingLeftBrackets(infixStack)===0) {
                try{
                    duplicateInfixStack();
                    modifyInfixStack();
                    shuntingYard();
                    reversePolishNotation();
                    displayOutput();
                    resetCalculator();
                }
                catch (e) {
                    alert(e);
                    resetCalculator(true);
                }
            }
        })
    }

    function init() {
        eventHandler();
    }

    window.addEventListener("load", init);

})();