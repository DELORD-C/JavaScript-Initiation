function removeParagraph() {
    if(confirm('Voulez vous supprimer le paragraphe ?')) {
        document.getElementById('text').remove();
    }
}