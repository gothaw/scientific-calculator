(function () {
    const basicButtons = document.querySelectorAll(".basic-btn");
    const outputField = document.querySelector(".output");
    const inputField = document.querySelector(".input");

    console.log(basicButtons);

    let inputStack=[];
    

    function basicButtonsEvent(index) {
        switch (basicButtons[index].id) {
            case "backspace":

                break;
            case "clear-entry":

                break;
            case "clear":

                break;
            case "equals":

                break;
            case "divide":

                break;
            case "times":

                break;
            case "minus":

                break;
            case "plus":

                break;
            case "dot":

                break;
            default:
                addToInputStack(basicButtons[index].innerHTML);
        }
    }



    function addToInputStack(token) {
        if(isNaN(token)) {
            if((token === "bracket-left" || token === "num-pi") && !isNaN(inputStack[inputStack.length - 1])) {
                inputStack.push("op-multiply");
            }
            inputStack.push(token);
        }
        else if(!isNaN(inputStack[inputStack.length - 1]))
        {
            inputStack[inputStack.length - 1] = inputStack[inputStack.length - 1] + token;
        }
        else if(!isNaN(token) && (inputStack[inputStack.length - 1] === "bracket-right" || inputStack[inputStack.length - 1] === "num-pi"))
        {
            inputStack.push("op-multiply");
        }
        else
        {
            inputStack.push(token);
        }
        //displayEquation();
        console.log(inputStack);
    }






    
    
    
    /*function inputNumber(index){
        if(inputField.innerHTML==='0')
        {
            inputField.innerHTML = '';
        }
        inputField.innerHTML+=numberButtons[index].textContent;
        if(number==="0")
        {
            number=numberButtons[index].textContent;
        }
        else{
            number+=numberButtons[index].textContent;
        }
        console.log(number);
        return number;
    }*/

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