(function () {
    const basicButtons = document.querySelectorAll(".basic-btn");
    const topRowButtons = document.querySelectorAll(".top-row-btn");
    const advanceButtons = document.querySelectorAll(".advance-btn");
    const outputField = document.querySelector(".output");
    const inputField = document.querySelector(".input");
    const triHypFunctions = document.querySelectorAll(".tri-hyp-function");


    const basicOperations = ["+","-","*","/"];
    const tokensNotPreMultiplied = ["+","-","*","/",")","^","!"];
    //tokens before basic operations, before right bracket, factorial and tokens which are post multiplied
    const tokensBeforeBasicOperations = [")","&pi;","e","!"];

    let inputStack=[];
    inputStack.push("0");

    console.log(inputStack);

    function calculate(stack) {

    }

    function advanceButtonsEvent(index) {
        switch (advanceButtons[index].id) {
            case "x-to-y":

                break;
            case "x-square":

                break;
            case "10-to-x":

                break;
            case "tan":
                initialClear();
                addToInputStack(triHypFunctions[0].innerHTML);
                addToInputStack("(");
                break;
            case "log":
                initialClear();
                addToInputStack("log");
                addToInputStack("(");
                break;
            case "cos":
                initialClear();
                addToInputStack(triHypFunctions[1].innerHTML);
                addToInputStack("(");
                break;
            case "mod":
                alert(advanceButtons[index].id);
                break;
            case "sin":
                initialClear();
                addToInputStack(triHypFunctions[2].innerHTML);
                addToInputStack("(");
                break;
            case "x-root":

                break;
            case "x-cube":

                break;
            case "e-x":

                break;
            case "atan":
                initialClear();
                addToInputStack(triHypFunctions[3].innerHTML);
                addToInputStack("(");
                break;
            case "ln":
                initialClear();
                addToInputStack("ln");
                addToInputStack("(");
                break;
            case "acos":
                initialClear();
                addToInputStack(triHypFunctions[4].innerHTML);
                addToInputStack("(");
                break;
            case "n!":
                addFactorial();
                break;
            case "asin":
                initialClear();
                addToInputStack(triHypFunctions[5].innerHTML);
                addToInputStack("(");
                break;
            default:
        }
    }

    function topRowButtonsEvent(index) {
        switch (topRowButtons[index].id) {
            case "backspace":
                removeFromInputStack("backspace");
                break;
            case "bracket-right":
                addRightBracket();
                break;
            case "bracket-left":
                initialClear();
                addToInputStack("(");
                break;
            case "plus-minus":
                plusMinus();
                break;
            case "sqrt":
                initialClear();
                addToInputStack("&radic;");
                addToInputStack("(");
                break;
            case "one-over-x":
                addOneOverX();
                break;
            case "pi":
                initialClear();
                addToInputStack("&pi;");
                break;
            default:
        }
    }


    function basicButtonsEvent(index) {
        switch (basicButtons[index].id) {
            case "clear-entry":
                removeFromInputStack("clear-entry");
                break;
            case "clear":
                removeFromInputStack("clear");
                break;
            case "equals":
                calculate(inputStack);
                break;
            case "divide":
                addBasicOperation(basicOperations[3]);
                break;
            case "times":
                addBasicOperation(basicOperations[2]);
                break;
            case "minus":
                addBasicOperation(basicOperations[1]);
                break;
            case "plus":
                addBasicOperation(basicOperations[0]);
                break;
            case "dot":
                addDecimalPoint();
                break;
            default:
                addToInputStack(basicButtons[index].innerHTML);
        }
    }

    function addToInputStack(token) {
        if(isNaN(token) && !(tokensNotPreMultiplied.includes(token)) && !isNaN(inputStack[inputStack.length - 1])){
            displayInput(`*${token}`);
            inputStack.push("*", token);
        }
        else if(!(tokensNotPreMultiplied.includes(token)) && tokensBeforeBasicOperations.includes(inputStack[inputStack.length - 1])) {
            displayInput(`*${token}`);
            inputStack.push("*", token);
        }
        else if(!isNaN(token) && (!isNaN(inputStack[inputStack.length - 1]))) {
            if ((token!==0)&&(inputStack[inputStack.length - 1] === "0")){
                displayInput(token);
                inputStack[inputStack.length - 1] = token;
            }
            else if((inputStack[inputStack.length - 1] !== "0")){
                displayInput(token);
                inputStack[inputStack.length - 1] += token;
            }
        }
        else {
            displayInput(token);
            inputStack.push(token);
        }
        console.log(inputStack);
    }

    function initialClear(){
        if(inputStack[0]==="0")
        {
            inputStack.pop();
            inputField.innerHTML=""
        }
    }

    function displayInput(token) {
        if(inputField.innerHTML.charAt(inputField.innerHTML.length-1)==="0"&&!isNaN(token)){
            inputField.innerHTML=inputField.innerHTML.slice(0,-1)+token;
        }
        else {
            inputField.innerHTML+=token;
        }
    }

    function removeFromInputStack(option) {
        switch (option) {
            case "backspace":
                if((!isNaN(inputStack[inputStack.length - 1])))
                {
                    inputField.innerHTML=inputField.innerHTML.slice(0,-1);
                    inputStack[inputStack.length - 1]=inputStack[inputStack.length - 1].slice(0,-1);
                    if(inputStack[inputStack.length -1].length === 0) {
                        inputStack.pop();
                    }
                }
                else{
                    inputField.innerHTML=inputField.innerHTML.slice(0,inputField.innerHTML.lastIndexOf(inputStack[inputStack.length - 1]));
                    inputStack.pop();
                }
                if(inputStack.length===0)
                {
                    inputField.innerHTML="0";
                    inputStack.push("0");
                }
                console.log(inputStack);
                break;
            case "clear-entry":
                inputStack=["0"];
                inputField.innerHTML="0";
                console.log(inputStack);
                break;
            case "clear":
                inputStack=["0"];
                inputField.innerHTML="0";
                outputField.innerHTML="";
                console.log(inputStack);
                break;
            default:
        }
    }

    function addDecimalPoint() {
       if(isNaN(inputStack[inputStack.length - 1])) {
           addToInputStack("0.");
       }
       else if(inputStack[inputStack.length - 1].indexOf(".") === -1) {
           displayInput(".");
           inputStack[inputStack.length - 1] += ".";
       }
    }

    function addBasicOperation(token) {
        if(!isNaN(inputStack[inputStack.length-1]) || tokensBeforeBasicOperations.includes(inputStack[inputStack.length-1])) {
            addToInputStack(token);
        }
    }

    function addRightBracket(){
        let leftBracketsCount=0;
        let rightBracketsCount=0;
        for(let token of inputStack){
            if(token==="("){
                leftBracketsCount++;
            }
            if(token===")"){
                rightBracketsCount++;
            }
        }
        console.log(leftBracketsCount);
        if ((!isNaN(inputStack[inputStack.length-1]) || tokensBeforeBasicOperations.includes(inputStack[inputStack.length-1])) && rightBracketsCount<leftBracketsCount)
        {
            addToInputStack(")")
        }
    }

    function addOneOverX() {
        if(!isNaN(inputStack[inputStack.length-1]) && inputStack[0]!=="0"){
            addBasicOperation(basicOperations[2]);
        }
        addToInputStack("1");
        addBasicOperation(basicOperations[3]);
    }

    function plusMinus() {
        if(!isNaN(inputStack[inputStack.length-1]) || inputStack[inputStack.length-1]==="&pi;"){
            let index;
            if(inputStack[inputStack.length-2]==="+"){
                index=inputField.innerHTML.lastIndexOf("+");
                inputField.innerHTML=inputField.innerHTML.slice(0,index)+"-"+inputField.innerHTML.slice(index+1,inputField.innerHTML.length);
                inputStack[inputStack.length-2]="-";
            }
            else if(inputStack[inputStack.length-2]==="-"){
                index=inputField.innerHTML.lastIndexOf("-");
                inputField.innerHTML=inputField.innerHTML.slice(0,index)+"+"+inputField.innerHTML.slice(index+1,inputField.innerHTML.length);
                inputStack[inputStack.length-2]="+";
            }
            else if (inputStack[inputStack.length-1]!=="0"){
                let lastNumberInStack=inputStack[inputStack.length-1];
                if(inputStack[inputStack.length-2]==="+/-"){
                    index=inputField.innerHTML.lastIndexOf("-");
                    inputField.innerHTML=inputField.innerHTML.slice(0,index)+inputField.innerHTML.slice(index+1,inputField.innerHTML.length);
                    inputStack.splice(-2);
                    inputStack.push(lastNumberInStack);
                }
                else{
                    index=inputField.innerHTML.lastIndexOf(lastNumberInStack);
                    inputField.innerHTML=inputField.innerHTML.slice(0,index)+"-"+inputField.innerHTML.slice(index,inputField.innerHTML.length);
                    inputStack.pop();
                    inputStack.push("+/-",lastNumberInStack);
                }
            }
        }
        else if(inputStack[inputStack.length-1]==="+") {
            inputStack[inputStack.length-1]="-";
            inputField.innerHTML=inputField.innerHTML.slice(0,-1)+"-";
        }
        else if(inputStack[inputStack.length-1]==="-"){
            inputStack[inputStack.length-1]="+";
            inputField.innerHTML=inputField.innerHTML.slice(0,-1)+"+";
        }
        console.log(inputStack);
    }

    function addFactorial() {
        if (!isNaN(inputStack[inputStack.length-1]) || inputStack[inputStack.length-1]==="&pi;" || inputStack[inputStack.length-1]===")"){
            addToInputStack("!")
        }
    }





    function eventHandler() {
        for(let i=0;i<basicButtons.length;i++){
            basicButtons[i].addEventListener('click', function () {
                basicButtonsEvent(i);
            });
        }
        for(let i=0;i<topRowButtons.length;i++){
            topRowButtons[i].addEventListener('click', function () {
                topRowButtonsEvent(i);
            });
        }
        for(let i=0;i<advanceButtons.length;i++){
            advanceButtons[i].addEventListener('click', function () {
                advanceButtonsEvent(i);
            });
        }
    }

    function init() {
        eventHandler();
    }

    window.addEventListener("load", init);
})();