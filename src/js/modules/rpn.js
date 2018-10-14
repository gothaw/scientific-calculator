import {inputStack, mainInputField, mainOutputField} from './input-stack';
import {shuntingYard} from "./shunting-yard";
import * as math from "mathjs";

(function () {
    const calculateButton   = document.querySelector("#equals");
    const angleOptionBtn    = document.getElementById("deg-rad-gra");

    //let inputStack = ["2","+","6","*","-1*","6","+","6","*","(","tan","(","6",")",")","*","6","^","[","2","^","[","2"];

    //let inputStack = ["(","2","+","1",")","*","1"];
    let originalStack;

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

    function reversePolishNotation() {
        mainOutputField.innerHTML=mainInputField.innerHTML;
        console.log("hello world")
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
        calculateButton.addEventListener("click", () => {
            duplicateInputStack();
            modifyInputStack();
            shuntingYard();
            reversePolishNotation();
        })
    }


    function init() {
        eventHandler();
    }

    window.addEventListener("load", init);

})();
