# Les tableaux et les boutons en HTML

## Les tableaux 

Pour construire un tableau, il me faut avnt tout une balise `<table></table>`. A l'intérieur de cette balise, je spécifie le nombre de lignes que comporte mon tableau à l'aide de `<tr></tr>`

```html
<table>
    <tr></tr>
    <tr></tr>
    <tr></tr>
    <tr></tr>
</table>
```

A l'intérieur de ces lignes, je peux placer des en tetes (header) avec `<th></th>` ou des données simples avec des `<td></td>`

```html
<table>
    <thead>
        <tr>
            <th>header1</th>
            <th>header2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>data1</td>
            <td>data2</td>
        </tr>
        <tr>
            <td>data3</td>
            <td>data4</td>
        </tr>
    </tbody>
</table>
```

On peut rajouter un titre à son tableau grâce à la balise `<caption></caption>`.
Au niveau des attributs, on peut rajouter des attributs de style de notre tableau, mais on évitera de le faire si on utilise du css.

`border= taille_en_px` -> La taille en pixels des bordures


`width= taille_en_px` -> Longueur en pixel de notre tab 


`height= taille_en_px` -> Hauteur en pixel de notre tab


`align= left, right ou center` -> L'alignement vertical des données

Si on veut que l'une de nos données prennent plus de ligne ou colonnes, on lui appliquera l'attribut : `rowspan="nombre"` ou `colspan="nombre"`.

## Les boutons 

Pour creer un bouton en HTML, on utilisera la balise `<button></button>`.

Il est cependant intéressant de spécifier le type de bouton, grâce à l'attribut `type`:

- `<button type="button">`: Il s'agit d'un bouton classique. C'est le choix par défaut si le type n'est pas spécifié.
- `<button type="submit">`: Utile également au sein d'un formulaire, il envoie le formulaire.
- `<button type="reset">`: Uniquement au sein d'un formulaire, il reinitialise les champs de ce formulaire.

Si on veut désactiver un bouton, on lui met l'attribut `disabled`

## Les images `<img>`

C'est une balise auto-fermante.

Pour afficher une image, je dois indiquer à ma balise sa **source** via l'attribut `src`. Elle peut provenir du web ou être stocker en local dans mon ordinateur.
Attention, si l'image est stocké dans votre ordinateur, le fichier devra être fourni durant l'hébergement de votre site si vous souhaitez que tout le monde puisse le consulter. Dans tous les cas, on préfère indiquer le chemin des images sous forme de **chemin relatif**.

On peut redimensionner nos images grâce aux **attributs** `width` et `height` auxquels je donnerai une valeur en pixels.

Enfin, très important pour l'accessibilité, j'essaye, dès que j'ai une balise image de lui mettre un **attribut** `alt`. C'est un texte qui va s'afficher si l'image n'arrive pas elle même à s'afficher. Ce texte alternantif est également utile pour les personnes qui consultent le site tout en etat mal voyant.

Au sein de notre répertoire de projet, on preferera stocker nos images dans un dossier.