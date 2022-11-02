console.log("Hello World !");

let a = 5;
let b = 2;
let array = [a, b, 10];
const NOM = 'Georges';
let phrase = a + b + NOM + NOM + NOM;
// console.log(phrase);
// Opérateur principaux : + - * / %



// Opérateurs de condition :
// == === != !== >= <= > <
if (a > b) {
    console.log("a est supérieur à b.");
}
else if (a < b) {
    console.log("a est inférieur à b.");
}
else {
    console.log("a est égal à b.");
}

switch (a) {
    case 5:
        console.log("Cinq");
        break;

    case 1:
        console.log("Un");
        break;

    default:
        console.log("Inconnu");
        break;
}



for (let i = 0; i < a; i++) {    
    // console.log(i);
}

array.forEach(element => {
    // console.log(element);
});

// array.forEach(function(element) {
//     console.log(element);
// });

// For IN
// For OF

do {
    // console.log(a);
    a--;
}
while (a > 0);

//EXERCICE 1
let voiture1 = 'Mercedes';
let voiture2 = 'Ferrari';
let modele1 = 34;
let modele2 = 12.6;

let phrase1 = voiture1 + ' ' + modele1 + ', ' + voiture2 + ' ' + modele2;
console.log(phrase1);