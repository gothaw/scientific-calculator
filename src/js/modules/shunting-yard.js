import {inputStack, requiredSpecialTokens, mainInputField, mainOutputField} from './input-stack'

(function () {
    const calculateButton=document.querySelector("#equals");

    let originalStack;

    //let inputStack = ["2","+","6","*","-1*","6","+","6","*","(","tan","(","6",")",")","*","6","^","[","2","^","[","2"];
    
    function calculate() {
        if(!isNaN(inputStack[inputStack.length-1]) || requiredSpecialTokens.includes(inputStack[inputStack.length-1])){
            duplicateStack();
            for(let token of inputStack){
                if(token==="-1*"){
                    let index = inputStack.indexOf(token);
                    inputStack.splice(index,1,"-1","*");
                }
                if(token==="["){
                    inputStack=[...inputStack,"]"]
                }
            }
            mainOutputField.innerHTML=mainInputField.innerHTML;
            console.log(inputStack);
            console.log(originalStack);
        }
    }

    function duplicateStack() {
        originalStack = inputStack.slice();
    }

    function eventHandler() {
        calculateButton.addEventListener("click", () => calculate())
    }
    
    
    function init() {
        eventHandler();
    }

    window.addEventListener("load", init);
})();


