(function () {
    const basicButtons = document.querySelectorAll(".basic-btn");
    const outputField = document.querySelector(".output");
    const inputField = document.querySelector(".input");


    let inputStack=[];
    

    function calculate(stack) {

    }




    function basicButtonsEvent(index) {
        switch (basicButtons[index].id) {
            case "backspace":
                removeFromInputStack("backspace");
                break;
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
                if(!isNaN(inputStack[inputStack.length-1])) {
                    addToInputStack("/");
                }
                break;
            case "times":
                if(!isNaN(inputStack[inputStack.length-1])) {
                    addToInputStack("*");
                }
                break;
            case "minus":
                if(!isNaN(inputStack[inputStack.length-1])) {
                    addToInputStack("-");
                }
                break;
            case "plus":
                if(!isNaN(inputStack[inputStack.length-1])) {
                    addToInputStack("+");
                }
                break;
            case "dot":
                addDecimalPoint();
                break;
            default:
                addToInputStack(basicButtons[index].innerHTML);
        }
    }



    function addToInputStack(token) {
        if (isNaN(token)&& inputStack.length===0){
            displayInput(token);
            inputStack.push("0", token);
        }
        else if((token === "(" || token === "pi") && !isNaN(inputStack[inputStack.length - 1])){
            displayInput(`*${token}`);
            inputStack.push("*", token);
        }
        else if(!isNaN(token) && (inputStack[inputStack.length - 1] === ")" || inputStack[inputStack.length - 1] === "num-pi")) {
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

   function addDecimalPoint() {
       if(isNaN(inputStack[inputStack.length - 1])) {
           addToInputStack("0.");
       }
       else if(inputStack[inputStack.length - 1].indexOf(".") === -1) {
           displayInput(".");
           inputStack[inputStack.length - 1] += ".";
       }
   }

    function displayInput(token) {
        if((inputField.innerHTML.charAt(inputField.innerHTML.length-1)==="0")&&(!isNaN(token))){
            inputField.innerHTML=inputField.innerHTML.slice(0,-1)+token;
        }
        else {
            inputField.innerHTML+=token;
        }
    }

    function eventHandler() {
        for(let i=0;i<basicButtons.length;i++){
            basicButtons[i].addEventListener('click', function () {
                basicButtonsEvent(i);
            });
        }
    }
    function init() {
        eventHandler();
    }

    window.addEventListener("load", init);
})();