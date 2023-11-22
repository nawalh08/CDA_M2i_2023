let tables;
let n = Number(prompt("Quelle table voulez-vous ? Entrez un nombre entier "));
let multiplier; 
let ligne;

// for ( tables = 1; tables <= n ; tables++) {
//     console.log(" - \nTable de " + tables)  // le \n est la pour un passage à la ligne 
    
//     for ( multiplier = 1; multiplier <10 ; multiplier++) {
//         console.log(tables + "X" + multiplier + "=" + tables * multiplier)
        
//     };
// };


// Deuxieme style d'affichage 

let affichageTotalTables = "";

let entete = ""
for(let chiffre = 1; chiffre <= 10; chiffre++){
    entete += `\t${chiffre}`;
}
affichageTotalTables += entete + "\n";

affichageTotalTables += "----".repeat(10) + "---" + "\n";

for(let table = 1; table <= n; table++){
    let ligneAAfficher = ""
    for(let mul = 1; mul <= 10; mul++){
        ligneAAfficher += `\t${table*mul}`;
    }
    affichageTotalTables += ligneAAfficher + "\n";
}

console.log(affichageTotalTables);








      
