const load = () => {
    const backToTop = new BackToTop();
    const menuHamburguer = new MenuHamburguer();
    const tab = new Tab();
}

function enviar() {
    let name = document.querySelector(".field_name").value;
    let subject = document.querySelector(".field_subject").value;
    let email = document.querySelector(".field_email").value;
    let message = document.querySelector(".field_message").value;

    const msg = {
        from:       "lecosas@assessoria.app",
        to:         "lecosas@gmail.com",
        subject:    "Assunto do Heroku",
        text:       `
            Nome de quem entrou em contato: ${name}
            Email de quem entrou em contato: ${email}
            
            Mensagem: ${message}
        `
    }

    fetch(
        'https://fiap-sender.herokuapp.com/email/send',
        {
            method: 'POST',
            body:   JSON.stringify(msg)
        }
    );

    //console.log(msg);
}