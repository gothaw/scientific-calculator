(function () {
    const toggleBtn         = document.getElementById("advance-options-toggle");
    const advanceOptions    = document.getElementsByClassName("advance-options")[0];
    const triHypFunctionBtn = document.getElementById("tri-hyp");
    const triHypFunctions   = document.getElementsByClassName("tri-hyp-function");
    const angleOptionBtn    = document.getElementById("deg-rad-gra");

    //true is second tab of advance options is shown
    let secondTab           = false;

    /**
     * @name    advanceOptions
     * @desc    toggles between degrees, radians and grads
     */
    function angleOptions() {
        switch (angleOptionBtn.innerHTML) {
            case "deg":
                angleOptionBtn.innerHTML="rad";
                break;
            case "rad":
                angleOptionBtn.innerHTML="gra";
                break;
            default:
                angleOptionBtn.innerHTML="deg";
        }
    }
    
    /**
     * @name    triHypFunctions
     * @desc    toggles between trigonometric and hyperbolic options for advance functions, modifies inner HTML for these functions
     */
    function triHypOptions() {
        if(triHypFunctionBtn.innerHTML==="tri"){
            triHypFunctionBtn.innerHTML="hyp";
            for(let btn of triHypFunctions){
                btn.innerHTML+="h"
            }
        }
        else if(triHypFunctionBtn.innerHTML==="hyp"){
            triHypFunctionBtn.innerHTML="tri";
            for(let btn of triHypFunctions){
                btn.innerHTML=btn.innerHTML.slice(0,-1);
            }
        }
    }

    /**
     * @name    showOptions
     * @desc    toggles between first and second tab for advance options
     * @returns secondTab
     */
    function showOptions() {
        if(secondTab){
            advanceOptions.style.left = `${0}`;
            secondTab = false;
        }
        else{
            advanceOptions.style.left = `-${100}%`;
            secondTab = true;
        }
        return secondTab;
    }

    function eventHandler() {
        toggleBtn.addEventListener("click",showOptions);
        triHypFunctionBtn.addEventListener("click",triHypOptions);
        angleOptionBtn.addEventListener("click",angleOptions);
    }

    function init() {
        eventHandler();
    }

    window.addEventListener("load", init);
})();