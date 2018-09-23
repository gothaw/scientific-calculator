(function () {
    const numberButtons = document.querySelectorAll(".number");
    const outputField = document.querySelector(".output");
    const inputField = document.querySelector(".input");

    let number="0";
    let decimal=false;

    function inputNumber(index){
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
    }

    function eventHandler() {
        for(let i=0;i<numberButtons.length;i++){
            numberButtons[i].addEventListener('click', function () {
                inputNumber(i)
            });
        }
    }
    function init() {
        eventHandler();
    }

    window.addEventListener("load", init);
})();