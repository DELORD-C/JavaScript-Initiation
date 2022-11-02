// let element = document.getElementsByTagName("h1");

let button = document.querySelector('button');

function changeColor() {
    let elements = document.querySelectorAll(".blue");
    for (let elem of elements) {
        elem.style.color = 'blue';
    }
}