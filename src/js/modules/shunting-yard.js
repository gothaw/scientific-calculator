import {inputStack, requiredSpecialTokens} from './input-stack'

(function () {
    const calculateButton=document.querySelector("#equals");


    function calculate() {
        if(!isNaN(inputStack[inputStack.length-1]) || requiredSpecialTokens.includes(inputStack[inputStack.length-1])){

        }
    }

    function eventHandler() {
        calculateButton.addEventListener("click", () => calculate())
    }
    
    
    function init() {
        eventHandler();
    }

    window.addEventListener("load", init);
})();


