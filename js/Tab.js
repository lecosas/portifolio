class Tab {
    constructor () {
        let tabs = document.querySelectorAll('.main .main__tabs__tab');
        let buttons = document.querySelectorAll('.main .main__tabs .main__tabs__button');    

        //Refatorar o código:
        buttons.forEach((button) => {
            button.addEventListener(
                'click', (event) => {
                    event.preventDefault();
                    let tabNumber = this.id.substr(this.id.length - 1);
                    
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
                });
            });   
        }
}