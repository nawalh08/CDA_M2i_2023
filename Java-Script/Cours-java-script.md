## déclaration de variable :

Pour déclarer une variable en java-script , on utilise les termes `let` ou `const`. 
`const` est une variable ou on stock une valeur et on la change pas. `Let` est quant à elle changeable , elle peut contenir plusieurs valeur mais à chaque nouvelle déclaration l'ancienne valeur est supprimée. Les variables se déclare de la façon à avoir une une minuscule au début et chaque fois que le nom à un deuxieme nom qui suit alors la premiere lettre de mot suivant est en majuscule. exemple : `let myBirthday`

## Nom de variable :

Le nom ne doit contenir que des lettres des chiifres et des symboles `$ et _`.


## Les constantes : 
 Pour déclarer une constante non changeable on utilise `const`.

```js
const myBirthday = "08.04.94"
```
 
 ## Types de données en JS : 


 Nous avons 8 types de données : 
 1. number `let n=123`
 2. bigint
 3. string `let str = "hello"` 
 4. boolean `let nameFieldChecked = true` 
 5. null `let age = null`
 6. undefined 
 7. symbol 
 8. object

# Les raccourci en javascript : 

- clg = (console log)  `console.log(object);`
- clt = console log tableau `console.table(object);`

## opérateur de comparaison 

- egalité -> 3 == var1
- inégalité -> var1 != 4
- égalité strict -> 3 === var1
- Inégalité stricte -> var 1!== "3"
- supériorité stricte -> var2 > var1
- supériorité -> var2 >= var1
- Infériorité stricte -> var1 < var2
- Infériorité -> var2 <= var 1 

### Boucles

## boucle while 

```javascript
let nombre = 0 ;
while (nombre < 3){
    console.log(nombre)
    nombre++ // On rajoute un a chaque fois pour pas avoir une boucle à l'infini.
}
```

## boucle Do......While

```javascript
nombre = 0;
do {
    console.log(nombre);
    nombre++;
} while(nombre < 3)
```

## Boucle For 

```javascript
for (let cpt = 0; cpt <3 ; cpt++){
    console.log(ctp)
};
```

## Le jeu du juste prix avec le random 

```javascript
let random = Math.floor(Math.random() *10); // le * 10 ici sert à avoir des valeurs qui vont de 0 à 10 parce que le random vaut entre 0 et 1 donc on multiplie par 10.
console.log(random);

let reponse;

do {
    reponse = Number(prompt("saisir un nombre entre 1 et 10"))
} while (reponse !== random);


let nombre = 0;

while(nombre < 10){
    nombre++ ;

    if (nombre === 4){
        console.log("Quatre => boucle suivante")
        continue; // le continue sert à continuer et à passer à la boucle suivante sans prendre en considération les instructions suivante qui sont dans l'autre boucle qui est égale (=== 7)
    }

    if(nombre === 7){
        console.log("sept => je casse la boucle avec le break") 
        break; // Le break sert à stopper la boucle 
    }

    console.log(nombre);
}

console.log("après la boucle")

```




