
let tab = [];
let nbNombre = Number(prompt("Combien de chiffres comporte le tableau ?"));


for (let i = 0; i < nbNombre; i++) {
    tab[i] = Math.floor(Math.random() * 50);
}
for (let j = 0; j < tab.length; j++) {

    if (tab[j] % 2 == 0) {
        console.log(` - Le nombre ${tab[j]} est :  pair. `)
    }
    else {
        console.log(` - Le nombre ${tab[j]} est : impair. `);
    }
}


