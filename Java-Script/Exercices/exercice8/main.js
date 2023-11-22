console.log("Table des matières")

for (let chapitres = 1; chapitres <= 3; chapitres++) {
   console.log("\tchapitre " + chapitres); // le \t est la pour avoir un espace juste avant le chapitre 
    
   for (let parties = 1; parties <= 3; parties++) {
    console.log(" \t\t- partie " + chapitres + "." + parties) // Si je veux deux espaces je rajoute un autre \t pour une tabulation 
    
   }
  
}

