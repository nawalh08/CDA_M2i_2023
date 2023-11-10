# Introduction au CSS

## Qu'est ce que le CSS ? 

Le CSS , acronyme de Cascading Style Sheets, est un langage de feuille de style utilisé pour décrire la présentation d'un document HTML. Il permet de contrôler l'apparence, la mise en page et le design des éléments HTML sur une page Web.

## Pourquoi utiliser le CSS ? 

- Séparation des préoccupations: le CSS permet de séparer la structure HTML du style, ce qui améliore la maintenance et la réutilisabilité du code.

- Contrôle visuel : Il offre un contrôle precis sur la couleur, la taille, la police, la mise  en page et d'autres aspects visuels d'une page web contrairement au HTML.

- Adaptabilité : Le CSS permet de creer des designs réactifs pour s'adapter à différentes tailles d'écran et dispositifs.

## Syntaxe de base du CSS 

```css 
selecteur {
    propriété : valeur ;
}
```

- **Sélecteur :** Cible les éléments HTML auxquels vous souhaitez appliquer des styles.
- **Propriété :** Spécifie ce que vous souhaitez changer (par exemple : le couleur du texte).
- **Valeur :** Définit la valeur de la propriété (ex: "red" pour la couleur du texte).


```css 
h1 {
    color: red ;
}
```

## Trois types d'insertion de style dans le HTML 

### Inline CSS 

L'inline CSS consiste à définir les styles directement dans l'élément HTML lui même à l'aide de l'attribut `style`.

```html
<p style="color: blue">Hello, ce texte est en bleu</p>
```

### Internal CSS (Style intégré)

Le style intégré consiste à incorporer les styles CSS dans l'en tête (head) de ma page HTML à l'aide de la balise `<style>`.

``` html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                color: green;
            }
        </style>
    </head>
    <body>
        <p> Ce texte est de couleur vert. </p>
    </body>
</html>
```

### External CSS (Style externe)

Le style externe consiste à placer les styles CSS dans un fichier séparé qui possède l'extension `.css`, puis à lier ce fichier à la page html à l'aide de la balise `<link>` dans l'en tête (head) de notre HTML.

**index.html:** 

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="./styles.css">
    </head>
    <body>
        <p> Ce texte est de couleur vert. </p>
    </body>
</html>
```

**style.css :**
```css
    p{
        color: green;
    }
```

## Sélecteurs et priorités 

### Sélecteurs CSS 
Les sélecteurs sont des motifs qui ciblent des éléments HTML spécifiques pour leur appliquer des styles. Les types de sélecteurs courants incluent: 
- Sélecteur de type (`p`, `h1`, `div`, etc.)
- Sélecteur de classe (`.ma-classe`)
- Sélecteur d'identifiant (`#mon-id`)
- Sélecteur de relation (`nav >a` `div + p`)

### Priorité des styles 
Lorsque vous utilisez plusieurs règles pour styler un élément HTML, il est essentiel de comprendre comment la priorité des styles est déterminée. La priorité des styles est définie par 3 principaux facteurs: 

### Facteur d'importance 
L'importance des styles est évaluée en fonction de leur origine. Voici comment elle est classée de la plus élevée à laplus faible: 

- **Style déclarés avec `!important` :** Les régles CSS qui utilisent `!important` ont la priorité absolue, elles seront appliquées même si d'autres styles sont déclarés après.

```css 

p {
    color: blue !important
}
```
- **Styles définis directement dans l'attribut `style` :** Les styles inline (définis directement dans l'élément HTML) ont une priorité plus élévée que les autres styles.

- **Styles intégrés au document :** Dans l'ordre des priorité vient ensuite le style en interne dans l'en tête (head).

- **Styles dans un fichier CSS externe :** Les styles définis dans un fichier CSS externe sont moins prioritaire que les deux précédents.

### Spécificités de sélecteur 
La spécificité du sélecteur détermine laquelle des règles CSS est appliquées lorsque plusieurs règles ciblent le même élément.

- **Sélecteur d'identifiant :** Chaque identifiant ciblé dans le selecteur ajoute 100 points de priorité à la spécificité. 

- **Sélecteur de classe :** Chaque classe ciblée dans le sélecteur ajoute 10 points à la spécificité.

- **Sélecteur de type :** Chaque élement HTML ciblé  dans le sélecteur de type ajoute 1 points à la spécificité.

- **Sélecteur de relation :** Les sélecteurs de relation tel que `>` (enfant direct) ou `+` (voisin direct) n'affectent pas directement la spécificité 

### Les Pseudo-Classes 
Les pseudo-classes en css sont des sélecteur spéciaux qui permettent de cibler les éléments HTML en fonction de leur position dans la structure du document. Elles sont précédées de deux points (`:`) dans les régles CSS, nous allons en voir plusieurs: 

### Les pseudo-classes de base 

1. **:hover** : Permet de ciblé un élément lorsque la souris le survol. Par exemple , vous pouvez changer la couleur d'un lien lorsqu'il est survolé par la souris.

2. **:active** : Cible un élément au moment ou il est cativé, généralemnt lorsque l'utilisateur clique dessus. Vous pouvez utiliser pour creer un effet de clic visuel.

3. **:focus** : Cible un élément lorsqu'il optient un focus, généralement après avoir cliqué ou lors de la navigation au clavier. Il est couramment utilisé pour styliser les champs de formulaire lorsqu'ils sont séléctionnés.

### Les pseudo-classes de liens 

1. **:link** : Cible les liens non visités, c'est à dire les liens vers lesquels l'utilisateur n'a pas encore navigué.

2. **:visited** : Cible les liens déjà visité par l'utilisateur.

### Les pseudo-Classes de position

1. **:first-child** : Cible le premier élément enfant par rapport à un parent. Vous pouvez l'utiliser pour, par exemple , ajouter des styles spéciaux au premier élément d'une liste.

2. **:last-child** : Cible le dernier élément enfant par rapport à un parent . (pour les:last-child ou tout les child si on colle les deux points(:) on cible les enfants mais si on met un espace entre le nom et les deux points(:) dans ces cas la , on cible les parents).

3. **:nth-child(*n*)** : Permet de ciblé un élément enfant en fonction de sa position définie entre parenthèses. Vous pouvez utiliser des formules comme `nth-child(odd)` ou `nth-child(even)` pour cibler des éléments pairs ou impairs.

### Les Pseudo-Classes de formulaires

1. **:checked** : Cible les éléments d'entrée (comme les cases à cocher ou le boutons radio) qui sont cochés ou séléctionnés.

2. **:disabled** : Cible les éléments d'entrée qui sont désactivés.


## Les propriétés CSS

Le CSS offre un large éventail de propriétés pour contrôler l'apparence et la mise en page des éléments HTML. Voici quelques unes des propriétés les plus utilisées: 

### Les propriétés de texte

1. **`font-family` :** Permet de spécifier la famille de police utilisée pour afficher du texte dans un élément HTML. Elle peut être définie avec une liste de nom de police, séparer par des virgules, pour spécifier des alternatives en cas d'indisponibilité des la premiere police.

2. **`font-size` :** Cette propriété détermine la taille de la police utilisée dans le texte à l'intérieur d'un élément. Elle peut être utilisée en pixel(`px`), pourcentage (`%`), points(`pt`) ou d'autres unités de mesures.(`en`, `rem`...).

3. **`font-weight` :** Cette propriété détermine l'épaisseur de la police utilisée pour le texte à l'intérieur d'un élément. Elle peut être définie avec des valeurs telles que `normal`, `bold`, `bolder`, `lighter`, ou des numériques pour des épaisseurs spécifiques.

4. **`font-style` :** Cette propriété permet de définir le style de la police, tel que `normal` (par défaut), `italic`, ou `oblique`.

5. **`color` :** Cette propriété définit la couleur du texte à l'intérieur d'un élément HTML. Vous pouvez utiliser des noms de couleurs, des codes hexadécimaux, ou des valeurs `rgb` pour définir la couleur.

6. **`line-height` :** La propriété `line-height` contrôle la hauteur de ligne, c'est à dire l'espace vertical entre les lignes de texte. Elle peut être définie en tant que valeur numérique ou en pourcentage de la taille de la police. Sa valeur de base est 1.2, on privilégiera une taille entre 1.5 et 1.7 pour une lecture confortable.

7. **`text-align` :** Cette propriété règle l'alignement horizontal du texte à l'intérieur de son parent. Les valeurs courantes sont `left`, `right`, `center` et `justify`.

8. **`text-transform` :** Cette propriété permet de modifier la casse du texte. Vous pouvez l'utiliser pour mettre en majuscules (`uppercase`), en minuscules (`lowercase`), ou pour capitaliser la première lettre de chaque mot (`capitalize`).

9. **`text-decoration` :** Cette propriété contrôle la décoration du texte, telle que les soulignements (`underline`), les surlignements (`overline`), et les mots barrés (`line-through`). Elle peut également être utilisée pour supprimer ces décorations si elles sont mises par défaut en mettant la valeur `none`.