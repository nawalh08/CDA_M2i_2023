// un commentaire sur une ligne


/*
Commentaires
sur 
plusieurs
lignes
*/


// Interaction :

//alert("Coucou !!!!")

// console.log("Coucou !!!")
// console.error("Une erreur !!!")
// console.warn("Attention !!!");
// console.info("Une infos !!!!")

// console.log("%cUn joli Message !!!","font-size : 32px; background-color : blue;");

// Variables

// var : (ES5)

var maVariable = "Salut à tous !!!!";

maVariable = 42;

console.log(maVariable)

// const  (ES6)

const PI = 3.14;

// PI = 3.141 // erreur

console.log(PI);

// let (ES6)

let maVariableLet; // Déclaration

console.log(maVariableLet); // non défini

console.log("type de ma varaibale maVariableLet : " + typeof maVariableLet + " .")

maVariableLet = "salut" // Assignation

console.log(maVariableLet); // salut

console.log("type de ma variable maVariableLet : " + typeof maVariableLet + " .")

maVariableLet = 33; 

console.log("type de ma variable maVariableLet : " + typeof maVariableLet + " .")

let str = "Ma chaine de caractéres" // string
console.log("type de ma variable str : " + typeof str + " .")

let nbr = 15 // number
console.log("type de ma variable nbr : " + typeof nbr + " .")

let boolean = true //  boolean
boolean = false //  boolean
console.log("type de ma variable boolean : " + typeof boolean + " .")

let maVariableNull = null
console.log("type de ma variable maVariableNull : " + typeof maVariableNull + " .")

// Interaction
// prompt

let maValeur;

maValeur = prompt("Taper une valeur");

console.clear() // nettoyage de la console
console.log(maValeur);

console.log("type de ma variable maValeur : " + typeof maValeur + " .")

//

console.log(`type de ma variable maValeur : ${typeof maValeur} .`)

 

// Les Opérateurs Arithmétiques

// Déclaration variables à la volée
let nb1 = 10, nb2 = 65, resultat;

// L'addition
resultat = nb1 + nb2
console.log(nb1 + " + " + nb2 + " = " + resultat)
console.log(`${nb1} + ${nb2} = ${resultat}`);

// Soustraction
resultat = nb1 - nb2
console.log(nb1 + " - " + nb2 + " = " + resultat)
console.log(`${nb1} - ${nb2} = ${resultat}`);

// Multiplication
resultat = nb1 * nb2
console.log(nb1 + " x " + nb2 + " = " + resultat)
console.log(`${nb1} x ${nb2} = ${resultat}`);

// Division
resultat = nb1 / nb2
console.log(nb1 + " / " + nb2 + " = " + resultat)
console.log(`${nb1} / ${nb2} = ${resultat}`);

// Modulo (reste de la division)
resultat = nb1 % nb2
console.log(nb1 + " % " + nb2 + " = " + resultat)
console.log(`${nb1} % ${nb2} = ${resultat}`);

// Puissance
resultat = nb1 ** nb2
console.log(nb1 + " puissance " + nb2 + " = " + resultat)
console.log(`${nb1} puissance ${nb2} = ${resultat}`);


console.log("Les opérateurs d'incrémentation et combinés")

// Incrementation
nb1 = nb1 + 1 // Incrementation classique
console.log(" nb1 vaut : "+ nb1); // 11
// operateur combiné +=
nb1 += 1
console.log(" nb1 vaut : "+ nb1); // 12
// operateur d'incrementation
console.log(nb1++); // 12
console.log(" nb1 vaut : "+ nb1); // 13


// Decrementation
nb1 = nb1 - 1 // Incrementation classique
console.log(" nb1 vaut : "+ nb1); // 12
// operateur combiné -=
nb1 -= 1
console.log(" nb1 vaut : "+ nb1); // 11
// operateur d'incrementation
console.log(nb1--); // 11
console.log(" nb1 vaut : "+ nb1); // 10

console.log("Détail operateurs -- et ++")

// Précision pour les Operateurs ++ et --
console.log(nb1); // 10
// Incrementation puis lecture de la valeur (préincrementation)
console.log(++nb1); // 11
// Decrementation puis lecture de la valeur (predecrementation)
console.log(--nb1); // 10
// lecture de la valeur puis => incrementation (postincrementation)
console.log(nb1++); // 10
console.log(nb1); // 11
// lecture de la valeur puis => decrementation (preincrementation)
console.log(nb1--); // 11
console.log(nb1); // 10