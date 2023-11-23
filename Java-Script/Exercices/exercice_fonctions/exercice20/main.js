let chaine = "actgactggg"
let sequence = "act"
let regex = new RegExp(sequence, "g") // expression regex que vous verrez plus tard
let occurrences = chaine.match(regex)?.length ?? 0 // compte le nombre de fois où la chaine apparaît
 
function verificationAdn(chaineAdn) {
    
    for (let i = 0; i < chaineAdn.length; i++) {

        if ((chaineAdn.charAt(i).toLowerCase() !== "a" )&& (chaineAdn.charAt(i).toLowerCase() !== "t") &&( chaineAdn.charAt(i).toLowerCase() !== "g") && (chaineAdn.charAt(i).toLowerCase() !== "c")) {


            return (false)
        }
        
    } 
            return (true)
   
}

console.log(verificationAdn("ac"));
console.log(verificationAdn("BBD"));