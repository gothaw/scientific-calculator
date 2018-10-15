import {inputStack, requiredSpecialTokens, functionTokens} from './input-stack';

export let postfixStack=[];

export function resetPostFixStack() {
    postfixStack=[];
}

export function shuntingYard() {
    if(!isNaN(inputStack[inputStack.length-1]) || inputStack[inputStack.length-1]==="]" || requiredSpecialTokens.includes(inputStack[inputStack.length-1])){
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
                while(operatorStack.length!==0 && functionTokens.includes(operatorStack[operatorStack.length-1]) || tokenHasPrecedence(operatorStack[operatorStack.length-1],token) && (operatorStack[operatorStack.length-1]!=="(" || operatorStack[operatorStack.length-1]!=="[")){
                    postfixStack.push(operatorStack[operatorStack.length-1]);
                    operatorStack.pop()
                }
                operatorStack.push(token);
            }
        }
        while(operatorStack.length!==0){
            postfixStack.push(operatorStack.pop());
        }
        console.log(postfixStack);
        console.log(operatorStack);
    }
}

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

function tokenHasPrecedence(token1, token2) {
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



