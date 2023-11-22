let popInitiale = Number(prompt("indiquez la population initiale"))
let taux= Number(prompt("Indiquez le taux d'accroissement"))
let popVisee = Number(prompt("Indiquez la population visée"))


let nbrAnnees=1;


while (popInitiale < popVisee) {
    
    popInitiale = popInitiale * (1+(taux)/100)
    ;
    if (popInitiale < popVisee) {
        nbrAnnees = nbrAnnees +1 ;  
    } 
} console.log("Le nombre d'années pour atteindre la population visée est de " + nbrAnnees + "an(s)")

      
