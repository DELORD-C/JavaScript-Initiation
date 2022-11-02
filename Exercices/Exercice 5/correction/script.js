function sapinDeNoel (hauteur) {
    for (let i = 1; i <= hauteur; i++) {
        let nbSpace = hauteur - i;
        let nbHuit = (i * 2) - 1;
        let ligne = "";
        for (let y = 0; y < nbSpace; y++) {
            ligne = ligne + ' ';
        }
        for (let z = 0; z < nbHuit; z++) {
            ligne = ligne + 8;
        }
        console.log(ligne);
    }
}

sapinDeNoel(15);