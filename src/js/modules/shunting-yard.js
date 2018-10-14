import {inputStack, requiredSpecialTokens, mainInputField, mainOutputField, functionTokens} from './input-stack'

import * as math from 'mathjs'

(function () {
    const calculateButton=document.querySelector("#equals");
    const angleOptionBtn = document.getElementById("deg-rad-gra");

    let originalStack;

    //let inputStack = ["2","+","6","*","-1*","6","+","6","*","(","tan","(","6",")",")","*","6","^","[","2","^","[","2"];

    //let inputStack = ["(","2","+","1",")","*","1"];


    const operationsArray = [
        {
            token: "!",
            numberOfOperands: 1,
            calculation: (x) => {math.factorial(x)}
        },
        {
            token: "^",
            numberOfOperands: 2,
            calculation: (x,y) => {Math.pow(x,y)}
        },
        {
            token: "x-root",
            numberOfOperands: 2,
            calculation: (x,y) => {Math.pow(y,1/x)}
        },
        {
            token: "√",
            numberOfOperands: 2,
            calculation: (x) => {Math.sqrt(x)}
        },
        {
            token: "tan",
            numberOfOperands: 1,
            calculation: (x) => {Math.tan(angleInRadians(x))}
        },
        {
            token: "cos",
            numberOfOperands: 1,
            calculation: (x) => {Math.cos(angleInRadians(x))}
        },
        {
            token: "sin",
            numberOfOperands: 1,
            calculation: (x) => {Math.sin(angleInRadians(x))}
        },
        {
            token: "atan",
            numberOfOperands: 1,
            calculation: (x) => {calculateAngle(Math.atan(x))}
        },
        {
            token: "acos",
            numberOfOperands: 1,
            calculation: (x) => {calculateAngle(Math.acos(x))}
        },
        {
            token: "asin",
            numberOfOperands: 1,
            calculation: (x) => {calculateAngle(Math.asin(x))}
        },
        {
            token: "tanh",
            numberOfOperands: 1,
            calculation: (x) => {Math.tanh(x)}
        },
        {
            token: "cosh",
            numberOfOperands: 1,
            calculation: (x) => {Math.cosh(x)}
        },
        {
            token: "sinh",
            numberOfOperands: 1,
            calculation: (x) => {Math.sinh(x)}
        },
        {
            token: "atanh",
            numberOfOperands: 1,
            calculation: (x) => {Math.atanh(x)}
        },
        {
            token: "acosh",
            numberOfOperands: 1,
            calculation: (x) => {Math.acosh(x)}
        },
        {
            token: "asinh",
            numberOfOperands: 1,
            calculation: (x) => {Math.asinh(x)}
        },
        {
            token: "ln",
            numberOfOperands: 1,
            calculation: (x) => {Math.log(x)}
        },
        {
            token: "log",
            numberOfOperands: 1,
            calculation: (x) => {Math.log10(x)}
        },
        {
            token: "mod",
            numberOfOperands: 2,
            calculation: (x,y) => {return x%y}
        },
        {
            token: "*",
            numberOfOperands: 2,
            calculation: (x,y) => {return x*y}
        },
        {
            token: "/",
            numberOfOperands: 2,
            calculation: (x,y) => {return x/y}
        },
        {
            token: "+",
            numberOfOperands: 2,
            calculation: (x,y) => {return x+y}
        },
        {
            token: "-",
            numberOfOperands: 2,
            calculation: (x,y) => {return x-y}
        }
    ];


    const precedenceArray = [
        {
            token: "!",
            precedence: 5,
            associativity: "left"
        },
        {
            token: "^",
            precedence: 4,
            associativity: "right"
        },
        {
            token: "x-root",
            precedence: 4,
            associativity: "right"
        },
        {
            token: "mod",
            precedence: 3,
            associativity: "left"
        },
        {
            token: "*",
            precedence: 2,
            associativity: "left"
        },
        {
            token: "/",
            precedence: 2,
            associativity: "left"
        },
        {
            token: "+",
            precedence: 1,
            associativity: "left"
        },
        {
            token: "-",
            precedence: 1,
            associativity: "left"
        }];

    function shuntingYard() {
        if(!isNaN(inputStack[inputStack.length-1]) || requiredSpecialTokens.includes(inputStack[inputStack.length-1])){
            let outputStack=[];
            let operatorStack=[];
            duplicateInputStack();
            modifyInputStack();
            for(let token of inputStack){
                if(!isNaN(token)){
                    outputStack.push(token);
                }
                else if(token==="e"){
                    outputStack.push(Math.exp(1));
                }
                else if(token==="&pi;"){
                    outputStack.push(Math.PI);
                }
                else if(functionTokens.includes(token) || token==="(" || token==="["){
                    operatorStack.push(token)
                }
                else if((token===")" || token==="]") && operatorStack.length!==0){
                    while(operatorStack.length!==0 && (operatorStack[operatorStack.length-1]!=="(" && operatorStack[operatorStack.length-1]!=="[")){
                        outputStack.push(operatorStack[operatorStack.length-1]);
                        operatorStack.pop();
                    }
                    operatorStack.pop();
                }
                else{
                    while(operatorStack.length!==0 && functionTokens.includes(operatorStack[operatorStack.length-1]) || tokenHasPrecedence(operatorStack[operatorStack.length-1],token) && (operatorStack[operatorStack.length-1]!=="(" || operatorStack[operatorStack.length-1]!=="[")){
                        outputStack.push(operatorStack[operatorStack.length-1]);
                        operatorStack.pop()
                    }
                    operatorStack.push(token);
                }
            }
            while(operatorStack.length!==0){
                outputStack.push(operatorStack.pop());
            }
            mainOutputField.innerHTML=mainInputField.innerHTML;
            //console.log(inputStack);
            console.log(outputStack);
            console.log(operatorStack);
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


    function tokenHasPrecedence(token1, token2) {
        let hasPrecedence=false;
        let indexOfToken1 = precedenceArray.findIndex(name => name.token === token1);
        let indexOfToken2 = precedenceArray.findIndex(name => name.token === token2);
        if (indexOfToken1!==-1){
            let precedenceOfToken1 = precedenceArray[indexOfToken1].precedence;
            let precedenceOfToken2 = precedenceArray[indexOfToken2].precedence;
            let associativityOfToken1 = precedenceArray[indexOfToken1].associativity;
            if(precedenceOfToken1 > precedenceOfToken2 || (precedenceOfToken1===precedenceOfToken2 && associativityOfToken1==="left")){
                hasPrecedence = true;
            }
        }
        return hasPrecedence;
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


