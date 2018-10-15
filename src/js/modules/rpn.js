import {inputStack as infixStack, mainInputField, mainOutputField} from './input-stack';
import {shuntingYard} from "./shunting-yard";
import * as math from "mathjs";
import {postfixStack} from "./shunting-yard";
import {updateInputStack} from "./input-stack";
import {resetPostFixStack} from "./shunting-yard";

export let output;

(function () {
    const calculateButton   = document.querySelector("#equals");
    const angleOptionBtn    = document.getElementById("deg-rad-gra");

    let originalStack;
    let outputStack=[];

    const operationsArray = [
        {
            token: "!",
            numberOfOperands: 1,
            calculation: (x) => {return math.factorial(x)}
        },
        {
            token: "^",
            numberOfOperands: 2,
            calculation: (x,y) => {return Math.pow(x,y)}
        },
        {
            token: "x-root",
            numberOfOperands: 2,
            calculation: (x,y) => {return Math.pow(y,1/x)}
        },
        {
            token: "√",
            numberOfOperands: 1,
            calculation: (x) => {return Math.sqrt(x)}
        },
        {
            token: "tan",
            numberOfOperands: 1,
            calculation: (x) => {return Math.tan(angleInRadians(x))}
        },
        {
            token: "cos",
            numberOfOperands: 1,
            calculation: (x) => {return Math.cos(angleInRadians(x))}
        },
        {
            token: "sin",
            numberOfOperands: 1,
            calculation: (x) => {return Math.sin(angleInRadians(x))}
        },
        {
            token: "atan",
            numberOfOperands: 1,
            calculation: (x) => {return calculateAngle(Math.atan(x))}
        },
        {
            token: "acos",
            numberOfOperands: 1,
            calculation: (x) => {return calculateAngle(Math.acos(x))}
        },
        {
            token: "asin",
            numberOfOperands: 1,
            calculation: (x) => {return calculateAngle(Math.asin(x))}
        },
        {
            token: "tanh",
            numberOfOperands: 1,
            calculation: (x) => {return Math.tanh(x)}
        },
        {
            token: "cosh",
            numberOfOperands: 1,
            calculation: (x) => {return Math.cosh(x)}
        },
        {
            token: "sinh",
            numberOfOperands: 1,
            calculation: (x) => {return Math.sinh(x)}
        },
        {
            token: "atanh",
            numberOfOperands: 1,
            calculation: (x) => {return Math.atanh(x)}
        },
        {
            token: "acosh",
            numberOfOperands: 1,
            calculation: (x) => {return Math.acosh(x)}
        },
        {
            token: "asinh",
            numberOfOperands: 1,
            calculation: (x) => {return Math.asinh(x)}
        },
        {
            token: "ln",
            numberOfOperands: 1,
            calculation: (x) => {return Math.log(x)}
        },
        {
            token: "log",
            numberOfOperands: 1,
            calculation: (x) => {return Math.log10(x)}
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


    function reversePolishNotation() {
        for (let token of postfixStack){
            if(!isNaN(token)){
                outputStack.push(JSON.parse(token));
            }
            else {
                let tokenIndex = operationsArray.findIndex(name => name.token === token);
                let numberOfOperands = operationsArray[tokenIndex].numberOfOperands;
                if(numberOfOperands===1){
                    let operand = outputStack.pop();
                    outputStack.push(operationsArray[tokenIndex].calculation(operand));
                }
                else if(numberOfOperands===2){
                    let operand1 = outputStack.pop();
                    let operand2 = outputStack.pop();
                    outputStack.push(operationsArray[tokenIndex].calculation(operand2,operand1));
                }
            }
        }
        output=+outputStack[0].toFixed(14);
        console.log(outputStack)
    }

    function displayOutput() {
        mainOutputField.innerHTML=`${mainInputField.innerHTML} = ${output}`;
        mainInputField.innerHTML=output.toString();
        updateInputStack();
        resetPostFixStack();
        outputStack=[];
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

    function modifyInfixStack() {
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
        console.log(infixStack);
    }

    function duplicateInfixStack() {
        originalStack = infixStack.slice();
        console.log("This is original",originalStack);
    }

    function eventHandler() {
        calculateButton.addEventListener("click", () => {
            duplicateInfixStack();
            modifyInfixStack();
            shuntingYard();
            reversePolishNotation();
            displayOutput();
        })
    }


    function init() {
        eventHandler();
    }

    window.addEventListener("load", init);

})();
