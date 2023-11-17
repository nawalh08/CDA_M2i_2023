// Demander à l'utilisateur de rentrer son nom ensuite son prenom puis l'afficher dans la console ainsi que dans une fenêtre qui s'ouvre avec noté dessus "Bonjour à vous le nom + le prenom"

// let nom = prompt ("Quel est votre nom ?");
// let prenom = prompt ("Quel est votre prénom ?");
// console.log(" Bonjour à vous " + nom + " " + prenom );
// alert( " Bonjour à vous " + nom + " " + prenom );

// Réaliser un programme permettant d'obtenir la somme de deux variables numérique 
// - Les deux nombres à additionner sont issus de saisies utilisateur 
// - Procéder à l'addition des 2 variables 
// - afficher le résultat de l'operation sous la forme nb1 + nb2 = resultat. 


 


let nb1 = parseInt(prompt ("Veuillez taper un nombre")); // On rajoute le parseInt pour avoir une addition et non pas une concatenation , on peut le faire aussi d'une autre façon : 

// nb1 = Number(prompt("Veuillez taper un nombre"));
let nb2 = parseInt(prompt ("Veuillez taper un deuxième nombre"));
let resultat = nb1 + nb2;
console.log("Le résultat de " + (nb1 + "+" + nb2 )+ "=" + resultat );
alert ("Le résultat de " + (nb1 + "+" + nb2 )+ "=" + resultat );
