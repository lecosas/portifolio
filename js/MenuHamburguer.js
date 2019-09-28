class MenuHamburguer {
    constructor () {
        this.element = document.querySelector('.header .menu-hamburguer');
        //console.log(this.element);
        this.element.addEventListener(
            'click', function(){
                //console.log('aqui');
                this.classList.toggle("change");
                document.querySelector('.header .header__menu-hambuguer').classList.toggle("opacity0");
                //console.log('aqui');
              });
    }

    
}