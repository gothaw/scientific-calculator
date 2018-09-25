(function () {
    const basicButtons = document.querySelector(".buttons-basic").children;
    const outputField = document.querySelector(".output");
    const inputField = document.querySelector(".input");

    console.log(basicButtons);

    let inputArray=["0"];
    

    function basicButtonsEvent(index) {
        switch (basicButtons[index].id) {
            case "dot":
                console.log(basicButtons[index].id);
                console.log("test");
                break;
            default:
                console.log(basicButtons[index].id);

        }
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