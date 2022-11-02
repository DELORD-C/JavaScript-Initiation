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

bleue.addEventListener('mouseenter', function() {
    bleue.style.transform = 'scale(2)'
});

bleue.addEventListener('mouseleave', function() {
    bleue.style.transform = 'scale(1)'
});

verte.addEventListener('mouseenter', function() {
    // verte.style.marginLeft = '50px';
    verte.style.transform = 'translateX(50px)';
});

verte.addEventListener('mouseleave', function() {
    // verte.style.marginLeft = '5px';
    verte.style.transform = 'translateX(0)';
});

violette.addEventListener('mouseenter', function() {
    violette.style.transform = 'rotate(180deg)';
});

violette.addEventListener('mouseleave', function() {
    violette.style.transform = 'rotate(0deg)';
});

orange.addEventListener('mouseenter', function() {
    orange.style.filter = 'grayscale(1)';
});

orange.addEventListener('mouseleave', function() {
    orange.style.filter = 'grayscale(0)';
});