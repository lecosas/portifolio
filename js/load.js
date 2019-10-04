const load = () => {
    const backToTop = new BackToTop();
    const menuHamburguer = new MenuHamburguer();
    const tab = new Tab();
}

function enviar() {
    const loading = document.querySelector(".loading");
    loading.className = loading.className + ' show';

    const name = document.querySelector(".field_name").value;
    const subject = document.querySelector(".field_subject").value;
    const email = document.querySelector(".field_email").value;
    const message = document.querySelector(".field_message").value;

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
            method:     'POST',
            headers:    {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            },
            body:       JSON.stringify(msg),
        }
    )
        .then(data => {
            loading.className = loading.className.replace('show', '');
            alert('Contato enviado com sucesso!');
        })
        .catch(err => {
            loading.className = loading.className.replace('show', '');
            alert('Erro ao enviar contato. Tente novamente!');
        });

    //console.log(msg);
}