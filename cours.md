# Formation Javascript

# Liens Utiles

Repository Github
> https://github.com/DELORD-C/JavaScript-Initiation

Liste des évènnements DOM JS
> https://www.w3schools.com/jsref/dom_obj_event.asp

Rappels HTML CSS
> https://hedgedoc.dawan.fr/Amf1r7tLRX6Q2yh6ryPpdw

Ahaslides
> https://ahaslides.com/

Liste des méthode de l'objet Array
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Pour tester ses Regex
> https://regex101.com/


# Variables

## Définition

```javascript=
let chainedecaracteres = "Valeur";
let nombre = 12;
let boolean = true;
let tableau = [13, 'yes', 78, false];

// On utilise let au lieu de var car c'est une meilleur pratique
```

## Utilisation

```javascript=
console.log(nombre + chainedecaracteres);
// Affichera "12Valeur" dans la console.
```

## Opérateurs


| Addition | Soustraction | Multiplication | Division | Modulo |
| -------- | -------- | -------- | -------- | -------- |
| + | - | * | / | % |
> L'opérateur `+` sert aussi à concaténer les chaînes de caractères.

# Structures de contrôle


## Conditions


```javascript=
//if (si)
if (a < b) {
    console.log('A est inférieur à B');
}
else if (a > b) {
    console.log('B est inférieur à A');
}
else {
    console.log('A est égal à B');
}
```

```javascript=
//switch
switch (nombre) {
    case 12:
        console.log("Douze");
        break;
}
```

### Opérateurs de condition



| Opérateur | Définition |
| -------- | -------- |
| >     | Supérieur à |
| >=    | Supérieur ou égal à |
| <     | Inférieur à |
| <=    | Inférieur ou égal à |
| ==    | égal à |
| !=    | différent de |
| ===   | égal à (avec type) |
| !==   | différent de (avec type) |


## Boucles

```javascript=
//for
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// Affichera :
// 1
// 2
// 3
// etc.
```

```javascript=
//foreach
tableau.foreach(element => {
    console.log(element);
})
// Affichera :
// 13
// yes
// 78
// false
```

# Fonctions

## Déclaration

```javascript=
function nomDeLaFonction (argument1, argument2, ...) {
    console.log(argument1);
}
```

## Utilisation

```javascript=
nomDeLaFonction('Test', 0);
// Affichara 'Test'
```

## Paramètre optionnel & valeur par défaut
> Si on affecte une valeur à un paramètre dans la déclaration de la fonction, celui-ci deviens alors facultatif :
```javascript=
function nomDeLaFonction (argument1, argument2 = 'Non') {
    console.log(argument1);
    console.log(argument2);
}

nomDeLaFonction('Test');
// Affichera :
// Test
// Non
```

# DOM

## Récupérer un élément

```javascript=
//Via son id
let button = document.getElementById('button')

//Via leurs balises
let buttons = document.getElementsByTagName('button');

//Via leurs classes
let buttons = document.getElementsByClassName('button');

//Via un identifiant CSS
let button = document.querySelector('button#button');
let buttons = document.querySelectorAll('.button');
```

## Ecouter un évènement

```javascript=
let button = document.getElementById('button');

button.addEventListener('click', function () {
    console.log('Button pressed !');
});
```

## Affecter un élement

```javascript=
let button = document.getElementById('button');

//changer le css
button.style.color = 'red';
```


## Naviguer dans le DOM

> On peut utiliser les voisins, les parents et les enfants pour se déplacer manuellement dans le dom

```htmlmixed=
<div>
    <span>Test</span>
    <button id='button'>Press</button>
    <img src='/image1.jpg'>
</div>
```

```javascript=
let button = document.getElementById('button');
let img = button.nextElementSibling();
let div = button.parent();
let span = div.firstElementChild();
```



# Les Objets

## Créer un objet literral et accéder à ses propriétés

```javascript=
let personne = {
    "nom" : "DELORD",
    "prenom" : "Clément",
    "age" : 28,
    "presence" : true
}

console.log(personne.prenom);
// Affichera "Clément"
```

## Ajouter une méthode à un objet litteral

```javascript=
personne.presentation = function () {
    console.log("Bonjour, je m'appelle " + this.prenom + ".");
}
```
> `this` permet de faire référence à l'objet du contexte

## Objet Math

```javascript=
console.log(Math.random());
// Math.random() renvoie un nombre décimal compris entre 0 et 1

let rand = Math.ceil(Math.random() * 10); 
//on récupère un nombre entre 1 et 10

// Math.ceil donne l'arrondi supérieur
// Math.floor donne l'arrondi inférieur
// Math.round donne l'arrondi proche
```

## Classes

> Une classe est modèle réutilisable d'un objet, il contient des attributs et des méthodes

```javascript=
class NomDeLaClasse {
    constructor(param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
    }
    
    direBonjour() {
        console.log('Bonjour je suis ' + this.param1)
    }
}

let objet = new NomDeLaClasse('param1', 'param2');
```

# Sucres syntaxiques

```javascript=
//Fonction fléchée anonyme
() => {

}

//Ternaire
let a = 1;
let b = 2;
let c = a + b > 3 ? true : false;
// Si a+b > 3, alors valeur true sinon valeur false
// CONDITION ? VALEUR SI VRAI : VALEUR SI FAUX

// Affectation par décomposition
let y, x, rest;
[y, x] = [10, 20];
[y, x, ...rest] = [10, 20, 30, 40, 50, 60, 70];

function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}

// ... est un spread operator il permet de transformer un tableau en suite de donnée
sum(...rest);
```
## Spécificité click
> Il est possible d'affecter un écouteur d'évènnement directement dans le code html5, on évite ainsi d'avoir à le coder en js
```htmlmixed=
<button onclick="fonctionPersonnalisee()">Press</button>
```
> On affecte en réalité une fonction à l'évènnement.