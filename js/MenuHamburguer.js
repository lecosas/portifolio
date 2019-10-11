class MenuHamburguer {
    constructor () {
        let elements = document.querySelectorAll('.header .menu-hamburguer, .header .menu-hamburguer-text');
        elements.forEach((element) => {
            element.addEventListener(
                'click', function(){
                    document.querySelector('.header .menu-hamburguer').classList.toggle("change");
                    document.querySelector('.header .header__menu-hambuguer').classList.toggle("active");

                });
            });
       
    }

    
}