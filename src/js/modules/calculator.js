(function () {
    const basicButtons = document.querySelectorAll(".basic-btn");
    const topRowButtons = document.querySelectorAll(".top-row-btn");
    const advanceButtons = document.querySelectorAll(".advance-btn");
    const mainOutputField = document.querySelector(".output");
    const mainInputField = document.querySelector(".input");
    const triHypFunctions = document.querySelectorAll(".tri-hyp-function");


    const basicOperations = ["+","-","*","/","!"];
    //tokens not required to be pre multiplied i.e. if entered after a number or )
    const tokensNotPreMultiplied = ["+","-","*","/",")","^","!"];
    //tokens before basic operations, before right bracket, factorial and tokens which are post multiplied
    const tokensBeforeBasicOperations = [")","&pi;","e","!"];

    let inputStack=[];
    inputStack.push("0");

    console.log(inputStack);

    let inputTag=mainInputField;

    function calculate(stack) {

    }

    function advanceButtonsEvent(index) {
        switch (advanceButtons[index].id) {
            case "x-to-y":
                addOperation("^");
                break;
            case "x-square":
                addOperation("^");
                addNumber("2");
                break;
            case "10-to-x":
                initialClear();
                addNumber("10");
                addOperation("^");
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

                break;
            case "sin":
                initialClear();
                addToInputStack(triHypFunctions[2].innerHTML);
                addToInputStack("(");
                break;
            case "x-root":

                break;
            case "x-cube":
                addOperation("^");
                addNumber("3");
                break;
            case "e":
                initialClear();
                addToInputStack("e");
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
                addOperation(basicOperations[4]);
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
                addNumber("1");
                addOperation(basicOperations[3]);
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
                addOperation(basicOperations[3]);
                break;
            case "times":
                addOperation(basicOperations[2]);
                break;
            case "minus":
                addOperation(basicOperations[1]);
                break;
            case "plus":
                addOperation(basicOperations[0]);
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
            if(inputStack[inputStack.length - 1]==="0") {
                displayInput(token);
                inputStack[inputStack.length - 1] = token;
            }
            else {
                displayInput(`*${token}`);
                inputStack.push("*", token);
            }
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
        if(inputStack[0]==="0" && mainInputField.length===1)
        {
            inputStack.pop();
            mainInputField.innerHTML=""
        }
    }

    function displayInput(token) {

        let unbalancedLeftBrackets;

        if (inputTag.innerHTML.includes("sup") && inputTag.innerHTML.lastIndexOf("sup")===inputTag.innerHTML.length-4)
        {
            inputTag=inputTag.lastChild;
        }
        if(token==="^")
        {
            let placeholder = document.createTextNode("□");
            let superscript = document.createElement("SUP");
            superscript.appendChild(placeholder);
            inputTag.appendChild(superscript);
        }
        else
        {
            if(inputTag.innerHTML.charAt(inputTag.innerHTML.length-1)==="0" && !basicOperations.includes(token)){
                inputTag.innerHTML=inputTag.innerHTML.slice(0,-1)+token;
            }
            else {
                if(inputTag.tagName==="SUP"){
                    if(inputTag.innerHTML.charAt(0)==="□"){
                        inputTag.innerHTML="";
                    }
                    if(basicOperations.includes(token) || token.charAt(0)==="*") {
                        while (inputTag!==mainInputField && !inputTag.innerHTML.includes("("))
                        {
                            console.log(inputTag);
                            inputTag=inputTag.parentNode;
                            inputStack.push("]");
                            console.log(inputTag);
                        }
                    }
                    unbalancedLeftBrackets=balancingLeftBrackets(inputTag.innerHTML);
                    if(inputStack[inputStack.length-1]===")" && unbalancedLeftBrackets===0){
                        inputTag=inputTag.parentNode;
                        inputStack.push("]");
                    }
                }
                inputTag.innerHTML+=token;
            }
        }
    }

    function removeFromInputStack(option) {
        switch (option) {
            case "backspace":
                if((!isNaN(inputStack[inputStack.length - 1])))
                {
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,-1);
                    inputStack[inputStack.length - 1]=inputStack[inputStack.length - 1].slice(0,-1);
                    if(inputStack[inputStack.length -1].length === 0) {
                        inputStack.pop();
                    }
                }
                else{
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,inputTag.innerHTML.lastIndexOf(inputStack[inputStack.length - 1]));
                    inputStack.pop();
                }
                if(inputStack.length===0)
                {
                    inputTag.innerHTML="0";
                    inputStack.push("0");
                }
                console.log(inputStack);
                break;
            case "clear-entry":
                inputStack=["0"];
                mainInputField.innerHTML="0";
                inputTag=mainInputField;
                console.log(inputStack);
                break;
            case "clear":
                inputStack=["0"];
                mainInputField.innerHTML="0";
                mainOutputField.innerHTML="";
                inputTag=mainInputField;
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

    function addOperation(token) {
        if(!isNaN(inputStack[inputStack.length-1]) || tokensBeforeBasicOperations.includes(inputStack[inputStack.length-1])) {
            addToInputStack(token);
            if (token==="^"){
                inputStack.push("[")
            }
        }
    }

    function addRightBracket(){
        let unbalancedLeftBrackets = balancingLeftBrackets(inputStack);
        console.log(unbalancedLeftBrackets);
        if ((!isNaN(inputStack[inputStack.length-1]) || tokensBeforeBasicOperations.includes(inputStack[inputStack.length-1])) && unbalancedLeftBrackets>0)
        {
            addToInputStack(")")
        }
    }

    function balancingLeftBrackets(array){
        let count=0;
        for(let token of array){
            if(token==="("){
                count++;
            }
            if(token===")"){
                count--;
            }
        }
        return count;
    }

    function addNumber(number) {
        if(!isNaN(inputStack[inputStack.length-1]) && inputStack[0]!=="0"){
            addOperation(basicOperations[2]);
        }
        addToInputStack(number);
    }

    function plusMinus() {
        if(!isNaN(inputStack[inputStack.length-1]) || inputStack[inputStack.length-1]==="&pi;"){
            let index;
            if(inputStack[inputStack.length-2]==="+"){
                index=inputTag.innerHTML.lastIndexOf("+");
                inputTag.innerHTML=inputTag.innerHTML.slice(0,index)+"-"+inputTag.innerHTML.slice(index+1,inputTag.innerHTML.length);
                inputStack[inputStack.length-2]="-";
            }
            else if(inputStack[inputStack.length-2]==="-"){
                index=inputTag.innerHTML.lastIndexOf("-");
                inputTag.innerHTML=inputTag.innerHTML.slice(0,index)+"+"+inputTag.innerHTML.slice(index+1,inputTag.innerHTML.length);
                inputStack[inputStack.length-2]="+";
            }
            else if (inputStack[inputStack.length-1]!=="0"){
                let lastNumberInStack=inputStack[inputStack.length-1];
                if(inputStack[inputStack.length-2]==="+/-"){
                    index=inputTag.innerHTML.lastIndexOf("-");
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,index)+inputTag.innerHTML.slice(index+1,inputTag.innerHTML.length);
                    inputStack.splice(-2);
                    inputStack.push(lastNumberInStack);
                }
                else{
                    index=inputTag.innerHTML.lastIndexOf(lastNumberInStack);
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,index)+"-"+inputTag.innerHTML.slice(index,inputTag.innerHTML.length);
                    inputStack.pop();
                    inputStack.push("+/-",lastNumberInStack);
                }
            }
        }
        else if(inputStack[inputStack.length-1]==="+") {
            inputStack[inputStack.length-1]="-";
            inputTag.innerHTML=inputTag.innerHTML.slice(0,-1)+"-";
        }
        else if(inputStack[inputStack.length-1]==="-"){
            inputStack[inputStack.length-1]="+";
            inputTag.innerHTML=inputTag.innerHTML.slice(0,-1)+"+";
        }
        console.log(inputStack);
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