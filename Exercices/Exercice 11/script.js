window.addEventListener('resize', function (event) {
    if (window.innerWidth < 1000) {
        if (window.matchMedia("(orientation: landscape)").matches) {
            // alert("Merci de retourner votre écran");
            let tag = document.createElement("p");
            tag.innerHTML = "Merci de retourner votre écran";
            document.body.appendChild(tag);
        }
        // if (window.innerHeight < window.innerWidth) {
        //     alert("Merci de retourner votre écran");
        // }
    }
});


// window.addEventListener('resize', function () {
//     if (window.innerHeight / window.innerWidth < 1 && window.innerWidth < 1000) {
//         alert("Merci de retourner votre téléphone");
//     }
// });