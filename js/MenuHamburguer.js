class MenuHamburguer {
    constructor () {
        this.element = document.querySelector('.header .menu-hamburguer');
        this.element.addEventListener(
            'click', function(){
                this.classList.toggle("change");
                document.querySelector('.header .header__menu-hambuguer').classList.toggle("active");
              });
    }

    
}