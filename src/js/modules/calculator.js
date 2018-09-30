(function () {
    const basicButtons = document.querySelectorAll(".basic-btn");
    const topRowButtons = document.querySelectorAll(".top-row-btn");
    const outputField = document.querySelector(".output");
    const inputField = document.querySelector(".input");

    const basicOperations = ["+","-","*","/"];
    const tokensForBasicOperations = [")","&pi;"];


    let inputStack=[];
    inputStack.push("0");

    console.log(inputStack);

    function calculate(stack) {

    }

    function advanceButtonsEvent() {

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
                if(inputStack[0]==="0")
                {
                    inputStack.pop();
                    inputField.innerHTML=""
                }
                addToInputStack("(");
                break;
            case "plus-minus":
                plusMinus();
                break;
            case "sqrt":
                if(inputStack[0]==="0")
                {
                    inputStack.pop();
                    inputField.innerHTML=""
                }
                addToInputStack("&radic;");
                break;
            case "one-over-x":
                addOneOverX();
                break;
            case "pi":
                if(inputStack[0]==="0")
                {
                    inputStack.pop();
                    inputField.innerHTML=""
                }
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
        if(isNaN(token) && !(basicOperations.includes(token)) && token!==")" && (!isNaN(inputStack[inputStack.length - 1])||inputStack[inputStack.length - 1]==="&pi;")){
            displayInput(`*${token}`);
            inputStack.push("*", token);
        }
        else if(!(basicOperations.includes(token)) && token!==")" && (inputStack[inputStack.length - 1] === ")" || inputStack[inputStack.length - 1] === "&pi;")) {
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
                    inputStack[inputStack.length - 1]=inputStack[inputStack.length - 1].slice(0,-1);
                    if(inputStack[inputStack.length -1].length === 0) {
                        inputStack.pop();
                    }
                }
                else{
                    inputStack.pop();
                }
                inputField.innerHTML=inputField.innerHTML.slice(0,-1);
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
        if(!isNaN(inputStack[inputStack.length-1]) || tokensForBasicOperations.includes(inputStack[inputStack.length-1])) {
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
        if ((!isNaN(inputStack[inputStack.length-1]) || inputStack[inputStack.length-1]==="&pi;") && rightBracketsCount<leftBracketsCount)
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
    }

    function init() {
        eventHandler();
    }

    window.addEventListener("load", init);
})();