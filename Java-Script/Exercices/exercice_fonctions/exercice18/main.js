// function palindrome(mot) {

//     let long = mot.length / 2;
//     let j = mot.length - 1; 
    
//     for ( let i = 0; i < long; i++ ) {
//         if (mot[i] !== mot[j]) {
//             return console.log ("Le mot " + mot + " n'est pas un palindrome");
//         }
//         j-- ;
//     } 
    
//     return console.log("le mot " + mot +  " est un palindrome");

// }
// palindrome("banane");
// palindrome("kayak");



// Correction , autre façon de faire 

// function isPalindrom (word){
//     word = word.trim().toLowerCase(); // On met un trim() pour que les espaces en fin de mots se retirent.

//     let reverseWord = "";


//     for (let end = word.length-1; end >= 0; end--) {
//         reverseWord += word[end];
        
//     }
    
//     return word === reverseWord;

// }
// console.log (isPalindrom("banane"));
// console.log (isPalindrom("kayak"));


// Une autre façon de faire encore 

function isPalindrom(word) {
    return word === word.split("").reverse().join(""); // On met split pour découper le mot en 2 mais tout se met dans un tableau , le reverse() pour inverser les lettres et on rajoute join() pour l'avoir de nouveau en lettres normale et non pas en tableau.

}
console.log (isPalindrom("kayak"));
console.log (isPalindrom("kabanana"));