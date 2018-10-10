(function () {
    const buttons = document.querySelectorAll(".btn");
    const mainOutputField = document.querySelector(".output");
    const mainInputField = document.querySelector(".input");
    const triHypFunctions = document.querySelectorAll(".tri-hyp-function");

    // tokens for basic operations + factorial symbol
    const basicOperations = ["+","-","*","/","!","mod"];
    // tokens not required to be pre multiplied i.e. if entered after a number or )
    const tokensNotPreMultiplied = ["+","-","*","/",")","^","!","x-root","mod"];
    // special tokens which:
    // 1. are required to be at the end of the stack when basicOperations token is entered
    // 2. are required to be at the end of the stack when ")" is entered
    // 4. are required to be at the end of the stack when "^" or "x√" is entered
    // 3. are post multiplied
    const requiredSpecialToken = ["]",")","&pi;","e","!"];
    // tokens for functions trigonometric, hyperbolic, logarithms
    const functionTokens = ["√","tan","tanh","atan","atanh","cos","acos","cosh","acosh","sin","asin","sinh","asinh","log","ln"];

    // input stack containing operations and operands showed in the input field
    let inputStack=[];
    inputStack.push("0");

    // initiating, which HTML tag is an input tag for user input
    let inputTag=mainInputField;

    console.log(inputStack);

    function calculate(stack) {

    }

    function buttonsEvents(index) {
        switch (buttons[index].id) {
            // Advance Buttons
            case "x-to-y":
                addOperation("^");
                break;
            case "x-square":
                addOperation("^","2");
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
                addOperation("mod");
                break;
            case "sin":
                initialClear();
                addToInputStack(triHypFunctions[2].innerHTML);
                addToInputStack("(");
                break;
            case "x-root":
                addOperation("x-root");
                break;
            case "x-cube":
                addOperation("^","3");
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
            // Top Row Buttons
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
                addToInputStack("√");
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
            // Basic Buttons
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
                addToInputStack(buttons[index].innerHTML);
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
        else if(!(tokensNotPreMultiplied.includes(token)) && requiredSpecialToken.includes(inputStack[inputStack.length - 1])) {
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

        if(token==="^")
        {
            let placeholder = document.createTextNode("□");
            let superscript = document.createElement("SUP");
            superscript.appendChild(placeholder);
            inputTag.appendChild(superscript);
            inputTag=inputTag.lastChild;
        }
        else if(token==="x-root")
        {
            let degree;
            let superscript = document.createElement("SUP");
            let indexNumber=inputStack.length-1;
            let numberOfRightBrackets=0;
            while(indexNumber>=0 && isNaN(inputStack[indexNumber]) && inputStack[indexNumber]!=="&pi;" && inputStack[indexNumber]!=="e"){
                if(inputStack[indexNumber]===")")
                {
                    numberOfRightBrackets++;
                }
                indexNumber--;
            }
            if(numberOfRightBrackets===0){
                degree = document.createTextNode(inputTag.innerHTML.slice(inputTag.innerHTML.lastIndexOf(inputStack[inputStack.length - indexNumber],inputTag.innerHTML.length)));
                inputTag.innerHTML=inputTag.innerHTML.slice(0,inputTag.innerHTML.lastIndexOf(inputStack[inputStack.length - indexNumber]));
                superscript.appendChild(degree);
                inputTag.appendChild(superscript);
            }
            else{
                let numberOfLeftBrackets=0;
                let indexLastLeftBracket=inputTag.innerHTML.length-1;
                for(let i=1;indexLastLeftBracket>=0 && numberOfLeftBrackets<numberOfRightBrackets;i++){
                    if(inputTag.innerHTML.charAt(indexLastLeftBracket-i)==="("){
                        numberOfLeftBrackets++;
                        indexLastLeftBracket-=i;
                    }
                }
                degree = inputTag.innerHTML.slice(indexLastLeftBracket,inputTag.innerHTML.length);
                inputTag.innerHTML=inputTag.innerHTML.slice(0,indexLastLeftBracket);
                inputTag.appendChild(superscript);
                inputTag=inputTag.lastChild;
                inputTag.innerHTML+=degree;
                inputTag=inputTag.parentNode;
            }
            inputTag.innerHTML+="&radic;";
        }
        else
        {
            if(inputTag.innerHTML.charAt(inputTag.innerHTML.length-1)==="0" && !basicOperations.includes(token) && token!=="." && token!==")"){
                inputTag.innerHTML=inputTag.innerHTML.slice(0,-1)+token;
            }
            else {
                if(inputTag.tagName==="SUP"){
                    if(inputTag.innerHTML.charAt(0)==="□"){
                        inputTag.innerHTML="";
                    }
                    unbalancedLeftBrackets=balancingLeftBrackets(inputTag.innerHTML);
                    if(basicOperations.includes(token) || token.charAt(0)==="*") {
                        while (inputTag.tagName==="SUP" && unbalancedLeftBrackets===0)
                        {
                            inputTag=inputTag.parentNode;
                            inputStack.push("]");
                            unbalancedLeftBrackets=balancingLeftBrackets(inputTag.innerHTML);
                        }
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
                else if(inputStack[inputStack.length-1]==="[" && inputStack[inputStack.length-2]==="^"){
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,-1);
                    inputStack.splice(-2);
                    inputTag=inputTag.parentNode;
                    let inputTagChild = inputTag.lastChild;
                    if(inputTagChild.innerHTML==="")
                    {
                        inputTagChild.remove();
                    }
                }
                else if(inputStack[inputStack.length-1]==="x-root"){
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,-1);
                    let inputTagChild = inputTag.lastChild;
                    inputTagChild.remove();
                    inputTag.innerHTML+=inputTagChild.innerHTML;
                    inputStack.pop();
                }
                else if(inputStack[inputStack.length-1]==="(" && functionTokens.includes(inputStack[inputStack.length-2])){
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,inputTag.innerHTML.lastIndexOf(inputStack[inputStack.length - 2]));
                    inputStack.splice(-2);
                }
                else{
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,inputTag.innerHTML.lastIndexOf(inputStack[inputStack.length - 1]));
                    inputStack.pop();
                }
                while (inputStack[inputStack.length-1]==="]"){
                    inputTag.innerHTML=inputTag.innerHTML.slice(0,-1);
                    inputStack.pop();
                    inputTag=inputTag.lastChild;
                }
                if(inputStack[inputStack.length-1]==="["){
                    inputTag.innerHTML+="□"
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

    function addOperation(token, exp="0") {
        if(!isNaN(inputStack[inputStack.length-1]) || requiredSpecialToken.includes(inputStack[inputStack.length-1])) {
            addToInputStack(token);
            if(token==="^"){
                inputStack.push("[");
                if(exp!=="0"){
                    addNumber(exp);
                }
            }
            else if(token==="x-root")
            {
                addToInputStack("(");
            }
        }
    }


    function addRightBracket(){
        let unbalancedLeftBrackets = balancingLeftBrackets(inputTag.innerHTML);
        let originalInputTag = inputTag;
        console.log(unbalancedLeftBrackets);
        if ((!isNaN(inputStack[inputStack.length-1]) || requiredSpecialToken.includes(inputStack[inputStack.length-1])))
        {
            if(unbalancedLeftBrackets>0){
                addToInputStack(")");
            }
            else if(unbalancedLeftBrackets===0){
                let numberOfSquareBrackets=0;
                while(inputTag.tagName==="SUP"){
                    inputTag=inputTag.parentNode;
                    numberOfSquareBrackets++;
                    let unbalancedLeftBrackets = balancingLeftBrackets(inputTag.innerHTML);
                    if(unbalancedLeftBrackets>0){
                        let squareBracketsArray = Array.from({length:numberOfSquareBrackets},() => ']');
                        inputStack.push(...squareBracketsArray);
                        addToInputStack(")");
                        break
                    }
                }
                if(inputStack[inputStack.length-1]!==")"){
                    inputTag=originalInputTag;
                }
            }
        }
    }

    function balancingLeftBrackets(textString){
        let count=0;
        for(let token of textString){
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
        for(let i=0;i<buttons.length;i++){
            buttons[i].addEventListener('click', function () {
                buttonsEvents(i);
            });
        }
    }

    function init() {
        eventHandler();
    }

    window.addEventListener("load", init);
})();