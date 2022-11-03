let titre = document.getElementById("titre");
let tooltipText = titre.getAttribute("data-tooltip");

titre.addEventListener('mouseenter', function() {
    let span = document.createElement("span");
    span.setAttribute('id', 'tooltip');
    span.textContent = tooltipText;
    span.classList.add('tooltip');
    titre.appendChild(span);
});

titre.addEventListener('mouseleave', function() {
    let span = document.getElementById("tooltip");
    span.remove();
});