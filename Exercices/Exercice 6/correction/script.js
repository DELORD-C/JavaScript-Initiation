function changeSize() {
    let paragraphe = document.getElementById('text');
    paragraphe.style.fontSize = '40px';
}

let title = document.querySelector('h1');

title.addEventListener('mouseenter', function () {
    title.style.display = 'none';
});