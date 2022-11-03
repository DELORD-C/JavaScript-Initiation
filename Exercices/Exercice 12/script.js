let tempLi = document.createElement('li');
tempLi.style.listStyle = 'none';
tempLi.style.height = '20px';
tempLi.style.display = 'none';
document.querySelector('ul').append(tempLi);
let elements = document.querySelectorAll('li');
let dragElem;
let lastDragElem;

elements.forEach(element => {
    element.addEventListener('dragstart', function(e) {
        tempLi.style.display = 'list-item';
        dragElem = e.target;
        dragElem.style.opacity = '0';
        dragElem.style.height = '0px';
    });

    element.addEventListener('dragover', function(e) {
        lastDragElem = e.target;
        e.target.style.borderTop = "solid 10px gray";
    });

    element.addEventListener('dragleave', function(e) {
        e.target.style.borderTop = "none";
    });

    element.addEventListener('dragend', function(e) {
        if (dragElem != lastDragElem && lastDragElem != null) {
            dragElem.remove();
            lastDragElem.before(dragElem);
        }
        dragElem.style.opacity = '1';
        dragElem.style.height = '';
        tempLi.style.display = 'none';
        dragElem = null;
        lastDragElem = null;
    });
});