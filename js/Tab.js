class Tab {
    constructor () {
        let tabs = document.querySelectorAll('.main .main__tabs__tab');
        let buttons = document.querySelectorAll('.main .main__tabs .main__tabs__button');    

        this.addEventListeners(buttons);       
    }

    addEventListeners(buttons) {
        buttons.forEach((button) => {
            button.addEventListener(
                'click', this.handleButtons.bind());
                //'click', handleButtons);
            });   
    }

    handleButtons(event) { 
        event.preventDefault();
        let tabNumber = _instance.id.substr(_instance.id.length - 1);
        
        buttons.forEach((button) => {
            if (button.id == "btn_tab" + tabNumber) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });

        tabs.forEach((tab) => {
            if (tab.id == "tab_tab" + tabNumber) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });
    }

}