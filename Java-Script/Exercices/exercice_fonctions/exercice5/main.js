// Exercice 5 : 
let eau =Number (prompt ("saisir une valeur en ℃"));


if (eau >=0 && eau <=100) {
    console.log("Etat liquide");
} else if (eau >100) {
    console.log("etat gazeux");
} else {
    console.log("etat solide");
}


// Avec un ternaire

// let etat = (eau <0 ) ? "solid" : ((eau <= 100) ? "liquide" : "gazeux");
// alert (etat);