window.addEventListener('resize', function (event) {
    console.log(event);
});

let form = document.querySelector('form');
let input = document.querySelector('input');

form.addEventListener('submit', function (e) {
    //prevenir l'envoi du formulaire
    e.preventDefault();

    //vérifier si le champ est vide ou bien formatté
    if (input.value == '' || input.value.match(/^(0|\+33)(6|7)[0-9]{8}$/)) {
        form.submit();
    }
});