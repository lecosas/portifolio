class Tab {
    constructor () {
        this.tabs = document.querySelectorAll('.main .main__tabs__tab');
        this.buttons = document.querySelectorAll('.main .main__tabs .main__tabs__button');    

        this.addEventListeners();       
    }

    addEventListeners() {
        this.buttons.forEach(button => button.addEventListener('click', this.handleButtons.bind(event, this)));   
    }

    handleButtons(_instance, event) {
        event.preventDefault();
        const tabNumber = event.currentTarget.id.substr(event.currentTarget.id.length - 1);
        
        _instance.buttons.forEach((button) => {
            if (button.id === 'btn_tab' + tabNumber) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        _instance.tabs.forEach((tab) => {
            if (tab.id === 'tab_tab' + tabNumber) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }

}