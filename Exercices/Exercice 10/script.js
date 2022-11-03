let form = document.querySelector('form');
let input = document.querySelector('input');
let inputMail = document.getElementById('mail');

form.addEventListener('submit', function (e) {
    //prevenir l'envoi du formulaire
    e.preventDefault();

    //vérifier si le champ est vide ou bien formatté
    if (input.value.match(/^(0|\+33)(6|7)[0-9]{8}$/)) {
        if (inputMail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            form.submit();
        }
    }
});