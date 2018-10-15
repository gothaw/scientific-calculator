import {inputStack as infixStack, inputTag, mainOutputField, requiredSpecialTokens, resetInputTag, updateInputStack} from "./input-stack";
import {resetPostFixStack, shuntingYard} from "./shunting-yard";
import {output, resetOutputStack, reversePolishNotation} from "./rpn";

(function () {
    const calculateButton   = document.querySelector("#equals");

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

    function displayOutput() {
        resetInputTag();
        mainOutputField.innerHTML=`${inputTag.innerHTML} = ${output}`;
        (output===Infinity)? inputTag.innerHTML=0 : inputTag.innerHTML=output.toString();
    }

    function resetCalculator() {
        updateInputStack();
        resetPostFixStack();
        resetOutputStack();
    }

    function eventHandler() {
        calculateButton.addEventListener("click", () => {
            if(!isNaN(infixStack[infixStack.length-1]) || infixStack[infixStack.length-1]==="]" || requiredSpecialTokens.includes(infixStack[infixStack.length-1])) {
                modifyInfixStack();
                shuntingYard();
                reversePolishNotation();
                displayOutput();
                resetCalculator();
            }
        })
    }

    function init() {
        eventHandler();
    }

    window.addEventListener("load", init);

})();