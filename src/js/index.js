(function () {
    const toggleBtn = document.getElementById("advance-options-toggle");
    const advanceOptions = document.getElementsByClassName("advance-options")[0];

    //true is second tab of advance options is shown
    let secondTab   = false;

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
    }

    function init() {
        eventHandler();
    }

    window.addEventListener("load", init);
})();