let rouge = document.getElementsByClassName('rouge')[0],
    bleue = document.getElementsByClassName('bleue')[0],
    verte = document.getElementsByClassName('verte')[0],
    violette = document.getElementsByClassName('violette')[0],
    orange = document.getElementsByClassName('orange')[0];

rouge.addEventListener('mouseenter', function() {
    rouge.style.opacity = 0;
});

rouge.addEventListener('mouseleave', function() {
    rouge.style.opacity = 1;
});