//IMPORTS
import {postFixStack} from "./shunting-yard";
import {factorial} from "./factorial";
//EXPORTS
//output - primitive used to store the final value of calculation
export let output;
//outputStack - stack used to store value of calculations carried out in postfix evaluation
export let outputStack=[];
/**
 * @name        resetOutputStack
 * @desc        Resets the outputStack to an empty array.
 */
export function resetOutputStack() {
    outputStack=[];
}

/**
 * @name        reversePolishNotation
 * @desc        Functions carries out Reverse Polish Notation evaluation on a postfix stack obtained from shunting yard algorithm.
 *              Algorithm description: https://en.wikipedia.org/wiki/Reverse_Polish_notation#Postfix_evaluation_algorithm
 */
export function reversePolishNotation() {
    for (let token of postFixStack){
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
    //console.log("Output Stack:",outputStack);
}
/**
 END OF EXPORTS AND IMPORTS
 **/
const angleOptionBtn    = document.getElementById("deg-rad-gra");
//operationsArray - an array with object literals for each operation and function.
//For each object it defines a token, numberOfOperands and calculation function.
const operationsArray = [
    {
        token: "!",
        numberOfOperands: 1,
        calculation: (x) => {return factorial(x)}
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

/**
 * @name        angleInRadians
 * @desc        Changes angle given in degrees/radians/grads to radians. Used in trigonometric functions.
 *              The option depends on the inner HTML of angleOptionBtn DOM element.
 * @param       {number} angle in radians/degrees/grads
 * @returns     {number} angle in radians
 */
function angleInRadians(angle) {
    if(angleOptionBtn.innerHTML==="deg"){
        angle*=Math.PI/180;
    }
    else if(angleOptionBtn.innerHTML==="gra"){
        angle*=Math.PI/200;
    }
    return angle
}

/**
 * @name        calculateAngle
 * @desc        Changes angle in radians calculated by inverse trigonometric functions to degrees/grads or radians.
 *              The option depends on the inner HTML of angleOptionBtn DOM element.
 * @param       {number} angle in radians
 * @returns     {number} angle in radians/degrees/grads
 */
function calculateAngle(angle){
    if(angleOptionBtn.innerHTML==="deg"){
        angle*=180/Math.PI;
    }
    else if(angleOptionBtn.innerHTML==="gra"){
        angle*=200/Math.PI;
    }
    return angle
}
