let search = document.getElementById('search');

// search.value;

search.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        // Récupération des éléments de la liste
        let imageList = document.getElementsByTagName('img');

        // Iteration sur les images
        for (let image of imageList) {
            // Vérification et comparaison des valeurs du champ texte et de 
            // l'attribut alt de l'image
            if (image.getAttribute('Alt').includes(search.value)) {
                image.style.display = 'inline';
            }
            else {
                image.style.display = 'none';
            }
        }
    }
});