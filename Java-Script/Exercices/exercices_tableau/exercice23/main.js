// let tab = [];
// let nbNotes = Number(prompt("Nombre de notes"))

// for (let i = 0; i < nbNotes; i++) {
//     let noteUtilisateur = Number(prompt("Veuillez entrer des notes"))
//     tab[i]= noteUtilisateur;
    
// }



let tab2 =[];
let i = 12;
let j = 0;


while (i != -1) {
    i = Number(prompt("saisir la note"))

    if (i != -1) {
        tab2[j] = i;
        j++;
    }
   

}

let max = Number(0);
let min = Number(20);
let moyenne = Number(0);
let tmp = Number(0);

for (i = 0; i < tab2.length; i++) {
    tmp = Number(tab2[i])
    if (tmp > max) {
        max = tmp
    }
    if (tmp < min) {
        min = tmp
    }
    console.log(tmp);

    moyenne += tmp
  
    
};  
alert(moyenne)
moyenne =  moyenne / tab2.length
console.log (`la note max est ${max} et la note mini est ${min} ensuite la moyenne est de ${moyenne}`);


