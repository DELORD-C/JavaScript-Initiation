let voitures = ['mercedes', 'ferrari', 'renault', 'peugeot', 'toyota'];
// console.log(voitures[3]);
// console.log(voitures.length);

voitures.forEach(voiture => {
    console.log(voiture);
});

// mercedes
// ferrari
// renault
// ...


for (let index = 0; index < voitures.length; index++) {
    console.log(voitures[index]);
}