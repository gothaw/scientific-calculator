import {inputStack, requiredSpecialTokens, mainInputField, mainOutputField} from './input-stack'

import * as math from 'mathjs'

(function () {
    const calculateButton=document.querySelector("#equals");
    const angleOptionBtn = document.getElementById("deg-rad-gra");

    let originalStack;


    //let inputStack = ["2","+","6","*","-1*","6","+","6","*","(","tan","(","6",")",")","*","6","^","[","2","^","[","2"];

    let operations = [
        {
            token: "!",
            numberOfOperands: 1,
            calculation: (a) => {math.factorial(a)}
        },
        {
            token: "^",
            numberOfOperands: 2,
            calculation: (a,b) => {Math.pow(a,b)}
        },
        {
            token: "x-root",
            numberOfOperands: 2,
            calculation: (a,b) => {Math.pow(b,1/a)}
        },
        {
            token: "√",
            numberOfOperands: 2,
            calculation: (a) => {Math.sqrt(a)}
        },
        {
            token: "tan",
            numberOfOperands: 1,
            calculation: (a) => {Math.tan(angleInRadians(a))}
        },
        {
            token: "cos",
            numberOfOperands: 1,
            calculation: (a) => {Math.cos(angleInRadians(a))}
        },
        {
            token: "sin",
            numberOfOperands: 1,
            calculation: (a) => {Math.sin(angleInRadians(a))}
        },
        {
            token: "atan",
            numberOfOperands: 1,
            calculation: (a) => {calculateAngle(Math.atan(a))}
        },
        {
            token: "acos",
            numberOfOperands: 1,
            calculation: (a) => {calculateAngle(Math.acos(a))}
        },
        {
            token: "asin",
            numberOfOperands: 1,
            calculation: (a) => {calculateAngle(Math.asin(a))}
        },
        {
            token: "tanh",
            numberOfOperands: 1,
            calculation: (a) => {Math.tanh(a)}
        },
        {
            token: "cosh",
            numberOfOperands: 1,
            calculation: (a) => {Math.cosh(a)}
        },
        {
            token: "sinh",
            numberOfOperands: 1,
            calculation: (a) => {Math.sinh(a)}
        },
        {
            token: "atanh",
            numberOfOperands: 1,
            calculation: (a) => {Math.atanh(a)}
        },
        {
            token: "acosh",
            numberOfOperands: 1,
            calculation: (a) => {Math.acosh(a)}
        },
        {
            token: "asinh",
            numberOfOperands: 1,
            calculation: (a) => {Math.asinh(a)}
        },
        {
            token: "mod",
            numberOfOperands: 2,
            calculation: (a,b) => {return a%b}
        }


    ];

    function shuntingYard() {
        if(!isNaN(inputStack[inputStack.length-1]) || requiredSpecialTokens.includes(inputStack[inputStack.length-1])){
            let outputStack=[];
            let operatorStack=[];
            duplicateInputStack();
            modifyInputStack();
            for(let token of inputStack){
                if(!isNaN(token) || token==="e" || token==="&pi;"){
                    outputStack.push(token);
                }

            }

            mainOutputField.innerHTML=mainInputField.innerHTML;
            console.log({inputStack});
            console.log({originalStack});
        }
    }



    function angleInRadians(angle) {
        if(angleOptionBtn.innerHTML==="deg"){
            angle*=Math.PI/180;
        }
        else if(angleOptionBtn.innerHTML==="gra"){
            angle*=Math.PI/200;
        }
        return angle
    }

    function calculateAngle(angle){
        if(angleOptionBtn.innerHTML==="deg"){
            angle*=180/Math.PI;
        }
        else if(angleOptionBtn.innerHTML==="gra"){
            angle*=200/Math.PI;
        }
        return angle
    }



    function modifyInputStack() {
        let unbalancedSquareBrackets=0;
        for(let token of inputStack){
            if(token==="-1*"){
                let index = inputStack.indexOf(token);
                inputStack.splice(index,1,"-1","*");
            }
            else if(token==="["){
                unbalancedSquareBrackets++;
            }
            else if(token==="]"){
                unbalancedSquareBrackets--;
            }
        }
        for(let i=0;i<unbalancedSquareBrackets;i++){
            inputStack.push("]")
        }
    }
    
    function duplicateInputStack() {
        originalStack = inputStack.slice();
    }

    function eventHandler() {
        calculateButton.addEventListener("click", () => shuntingYard())
    }
    
    
    function init() {
        eventHandler();
    }

    window.addEventListener("load", init);
})();


