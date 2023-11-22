let nombre = parseInt(prompt("Veuillez siaisr un entier supérieur à 0"))

while (isNaN(nombre) && nombre > 0) {
    nombre = parseInt(prompt("Erreur !! Veuillez siaisr un entier supérieur à 0")) // On rajoute des condition de saisie, ici on oblige l'utilisateur à rentrer un nombre plus grand que 0 sinon on lui affiche le message erreur.
}

for(let entier = 1; entier < nombre / 2 + 1; entier++){
    let somme = entier; // premier entier
    let chaine = `${nombre} = ${entier}`
    for(let j = entier + 1; j < nombre / 2 + 1; j++){
        somme += j;
        chaine += ` + ${j}`;
        if(somme > nombre)
            break;
        else if(somme === nombre){
            console.log(chaine);
            break;
        }
    }
}



// bonus nombres premiers

// let inputNumber = 100, divider = 2;
// let primeNumbers = ""

// function isPrime(number){
//     //Les nombres paires ne sont pas premiers sauf 2
//     if (number % 2 === 0 && number !== 2){
//         return false;
//     }
    
//   //Si on trouve un diviseur le nombre n'est pas premier
//     for (let i = 3; i < number / 2; i+= 2){
//         if (number % i === 0){
//             return false;
//         }
//     }

//     return true;
// }

// while (divider <= inputNumber){
//     if (isPrime(divider)){
//         primeNumbers += `${divider}-`
//     }

//     //On ne check que les nombres impairs
//     divider += divider % 2 === 0 ? 1 : 2;
// }

// console.log(primeNumbers)