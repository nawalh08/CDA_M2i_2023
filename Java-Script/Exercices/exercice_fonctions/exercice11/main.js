// Combien de fois on doit plier 


// let epaisseurInitiale = 0.0001;
let nbFois=0;

// while (epaisseurInitiale<= 400) {
//     epaisseurInitiale = epaisseurInitiale*2 ; nbFois++
// }
// console.log(nbFois)


// Combien de fois on doit déplier ? 

let epaisseurInitiale= 400;

while (epaisseurInitiale >= 0.0001) {
    epaisseurInitiale = epaisseurInitiale/2 ; nbFois++;
}
console.log(nbFois);

