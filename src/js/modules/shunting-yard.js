//IMPORTS
import {inputStack, functionTokens} from './input-stack';
//EXPORTS
//postfixStack - stack used to store postfix equation i.e. result of shunting yard algorithm
export let postfixStack=[];
/**
 * @name        resetPostfixStack
 * @desc        Resets the postfixStack to an empty array.
 */
export function resetPostfixStack() {
    postfixStack=[];
}
/**
 * @name        shuntingYard
 * @desc        Function that carries out shunting yard algorithm on inputStack.
 *              It produces a post fix notation for given infix notation.
 *              It stores output in postfixStack. Operators and functions are stored in operatorStack.
 *              Algorithm description: https://en.wikipedia.org/wiki/Shunting-yard_algorithm#The_algorithm_in_detail
 */
export function shuntingYard() {
    let operatorStack=[];
    for(let token of inputStack){
        if(!isNaN(token)){
            postfixStack.push(token);
        }
        else if(token==="e"){
            postfixStack.push(Math.exp(1).toString());
        }
        else if(token==="&pi;"){
            postfixStack.push(Math.PI.toString());
        }
        else if(functionTokens.includes(token) || token==="(" || token==="["){
            operatorStack.push(token)
        }
        else if((token===")" || token==="]") && operatorStack.length!==0){
            while(operatorStack.length!==0 && (operatorStack[operatorStack.length-1]!=="(" && operatorStack[operatorStack.length-1]!=="[")){
                postfixStack.push(operatorStack[operatorStack.length-1]);
                operatorStack.pop();
            }
            operatorStack.pop();
        }
        else{
            while(operatorStack.length!==0 && functionTokens.includes(operatorStack[operatorStack.length-1]) || firstTokenHasPrecedence(operatorStack[operatorStack.length-1],token) && (operatorStack[operatorStack.length-1]!=="(" || operatorStack[operatorStack.length-1]!=="[")){
                postfixStack.push(operatorStack[operatorStack.length-1]);
                operatorStack.pop()
            }
            operatorStack.push(token);
        }
    }
    while(operatorStack.length!==0){
        postfixStack.push(operatorStack.pop());
    }
    //console.log("Postfix Stack:", postfixStack);
    //console.log(operatorStack);
}
/**
 END OF EXPORTS AND IMPORTS
 **/
//precedenceArray - array of object literals for each operation, does not include functions which are treated separately,
//for each operation it defines precedence and associativity.
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
    }
];
/**
 * @name        firstTokenHasPrecedence
 * @desc        checks whether token1 has greater precedence thank token2,
 *              if tokens have equal precedence but token1 has left associativity than token1 takes precedence
 * @param       token1 {string} token which is checked for precedence against token2
 * @param       token2 {string} token which is compared to when checking token1
 * @returns     {boolean}
 */
function firstTokenHasPrecedence(token1, token2) {
    let hasPrecedence=false;
    let indexOfToken1 = precedenceArray.findIndex(name => name.token === token1);
    let indexOfToken2 = precedenceArray.findIndex(name => name.token === token2);
    if (indexOfToken1!==-1 && indexOfToken2!==-1){
        let precedenceOfToken1 = precedenceArray[indexOfToken1].precedence;
        let precedenceOfToken2 = precedenceArray[indexOfToken2].precedence;
        let associativityOfToken1 = precedenceArray[indexOfToken1].associativity;
        if(precedenceOfToken1 > precedenceOfToken2 || (precedenceOfToken1===precedenceOfToken2 && associativityOfToken1==="left")){
            hasPrecedence = true;
        }
    }
    return hasPrecedence;
}



