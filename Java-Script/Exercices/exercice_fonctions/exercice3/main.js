// Exercice 3 
// Ecrire un programme queueMicrotask, a partir de la saisie d'un rayon et d'une hauteur , calculer le volume d'un cône droit.


let rayon = Number(prompt ("Veuillez saisir le rayon"));
let hauteur = Number(prompt ("veuillez saisir la hauteur"));
let volume = (1/3)*Math.PI * rayon ** 2* hauteur;

console.log ("Le volume est de" + volume);

// Méthode de calcul en 3 lignes:

let rayon = Number(prompt ("Veuillez saisir le rayon"));
let hauteur = Number(prompt ("veuillez saisir la hauteur"));
console.log ((1/3)*Math.PI * rayon ** 2* hauteur);



// Méthode de calcul sur une seule ligne à ne pas faire  : 
console.log ((1/3)*Math.PI *(Number(prompt ("Veuillez saisir le rayon")) ** 2*(Number(prompt ("veuillez saisir la hauteur")))).toFixed(3));
alert ((1/3)*Math.PI *(Number(prompt ("Veuillez saisir le rayon")) ** 2*(Number(prompt ("veuillez saisir la hauteur"))))).toFixed(3); // le .toFixed() est utilisé pour avoir le nombre de chiffres après la virgule.
