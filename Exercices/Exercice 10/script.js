let form = document.querySelector('form');
let inputTel = document.querySelector('input');
let inputMail = document.getElementById('mail');

form.addEventListener('submit', function (e) {
    //vérifier si les champs sont bien formattés
    testInput(inputTel, /^(0|\+33)(6|7)[0-9]{8}$/, e);
    testInput(inputMail, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, e);
});

function testInput(input, regex, e) {
    if (!input.value.match(regex)) {
        input.style.borderColor = 'red';
        e.preventDefault();
    }
    else {
        input.style.borderColor = 'green';
    }
}