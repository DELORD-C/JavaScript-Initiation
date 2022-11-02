console.log("Hello World !");

let a = 5;
let b = 2;
let array = [a, b, 10];
const NOM = 'Georges';
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

