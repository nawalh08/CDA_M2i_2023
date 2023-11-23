let n = Number(prompt("saisir la hauteur")) ;
let etoiles = "*";
let espaces = " ";
let nbEspace= n-1;

for (let lignes = 1; lignes <n ; lignes++) {
   
    console.log (`${espaces.repeat(nbEspace)}${etoiles}`);
   etoiles += "**";
   nbEspace --;
}


