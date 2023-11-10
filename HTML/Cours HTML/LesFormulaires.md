# Les formulaires en HTML

Pour ouvrir et fermer un formulaire on applique les balises <form>.
Cette balise contiendra bcq d'attributs important pour notre Js. Mais nous allons d'abord voir le placement des inputs en HTML.

## Les inputs 

En HTML, les éléments `inputs` sont utiliser pour collecter des données entrées par les utilisateurs. Il existe plusieurs types d'input couramment utilisés pour différents types de données et d'interaction.
Si je veux rendre l'un de mes inputs **obligatoire**, j'utilise l'attribut `required`

1. **Texte (`text`):** Ce type d'input permet aux utilisateurs de saisir du texte libre, comme des noms, des adresses, des commentaires...

```html
<input type="text" placeholder="votre nom" name="nom" >
```

2. **Mot de passe (`password`):**  Utilisé pour collecter des mots de passe, ce type masque les caractères saisis.

```html
<input type="password" placeholder="Votre mot de passe" name="password" >
```

3. **Cases à cocher (`checkbox`):** Permet aux utilisateurx de selectionner plusieurs options parmi un groupe d'éléments.

```html
<input type="tcheckbox" name="sport" value="football"> Football
<input type="tcheckbox" name="sport" value="basketball"> Basketball
```

Ici le name servira à regrouper des checkbox autour d'une thématique commune. C'est l'attribut `value` qui nous retournera la valeur de nos checkboxes indépendantes.

4. **Boutons radio (`radio`):** Les boutons radio permettent aux utilisateurs de ne sélectionner qu'une seule option parmi un groupe d'elements. C'est la aussi l'attribut `name` qui permet de rattacher les éléments entre eux.

```html
<input type="radio" name="sport" value="football"> Football
<input type="radio" name="sport" value="basketball"> Basketball

```
5. **Email (`email`):** 


6. **Date (`date`):** Est utiliser pour collecter des dates, il affiche un selecteur de date.

7. **Numerique (`number`) :** Permet au utilisateur de saisir des valeurs numerique 

```html
<input type="number" name="quantite" min="0" max="10" step="1">
```

8. **URL (`url`):** Utiliser pour collecter des URL, il vérifie également la validité de la syntaxe de l'URL saisi.
```html
<input type="url" placehorlder="votre lien" name="Url-web" >
```

9. **Téléphone (`tel`) :** Utiliser pour récolter les numéro de telephone 
```html
<input type="tel" placeholder="Votre numéro de téléphone" name="tel-number" >
```

10. **Fichier (`file`):** Les inputs de type `file` permettent aux utilisateurs de séléctionner et de téléverser des fichier à partir de leur ordinateur.
Grâce à l'attribut `multiple`, je peux permettre à l'utilisateur de choisir plusieurs fichiers

```html
<input type="file" name="user-file" multiple>
```

11. **Bouton (`button`):** Cet élément crée un bouton personnalisable qui peut être utiliseé pour déclencher des actions JS ou des soumissions de formulaires. Il peut également vous permettre de reset le formulaire.

```html
<input type="button" value="Cliquez ici" name="bouton">
<!--Envoyer un formulaire-->
<input type="submit" value="envoyer">
<!--Reset un formulaire-->
<input type="reset" value="reset">
```

## Les labels

Les balises `<label>` en HTML sont utilisées pour associer un labelé descriptif à un élément de formulaire. Les balises label sont éssentielles pour améliorer l'accessibilité des formulaires web, car elles permettent aux utilisateurs de comprendre facilement ce que chaque champ de formulaire représente.

```html
<label for="id_de_l_input"> Texte du libellé: </label>
<input type="text" id="id_de_l_input" > 
```

L'attribut for de la balise <label> est associé à l'attribut id de l'élément de formulaire que vous souhaitez étiqueter. Cela indique au navigateur que le label est lié à cet élément. Lorsque l'utilisateur clique sur le labellé, le champ de formulaire correspondant recoit le focus de l'action associé.

### Autres attributs commun 

`autofocus` : Place directement l'utilisateur dans un champs au chargement de la page. 
`pattern` : Permet de spécifié une expression régulière à un input (utile pour la sécurité). 
`maxlength` : Définit un nombre max de caractère utilisés dans l'input (utile pour la sécurité). 
`size` : Modifie le nombre de caractères visible dans un input. 
`readonly` : Affiche une valeur qui ne peut pas être modifiée par l'utilisateur.
`value` : Pré-remplit un champ.

### La liste de séléction `select`

Pour afficher une liste déroulante en html on utilise la balise `select`. Je délimiterai chacune des options de mon sélécteur à l'aide de la balise `<option>`.

```html
<label for="pays">pays:</label>
<select name="pays">
    <option value="france">France</option>
    <option value="Espagne">Espagne</option>
    <option value="maroc">Maroc</option>
</select>
```

### La boite de texte `textarea`

Un élément textearea est utilisé pour creer une zone de texte multiligne. Je peux définir la taille de ma boite grâce aux attributs `rows` et `cols`.

```html
<textarea name="description" rows="4" cols="20">
    saisissez votre commentaire ici...
</textarea>
```

### Action et la méthode 

Une fois que mon formulaire est complété, je demanderai à l'utilisateur de l'envoyer via un input submit ou un button. A ce moment la, la méthode et l'action se déclencheront. 

Méthodes et actions se configurent à travers leur **attributs** au sein de la balise `form`

L'attribut `action` définit le fichier ou les données du formulaire seront envoyés. On remplit donc généralement avec un lien vers une page du serveur.

La méthode, elle, définit **le type d'envoi** de ces données. On la trouve sous deux formes: **la méthode GET:** On transmet les données directement via l'url en y stockant nos paires name/valeur. Attention, notre URL est limité à 2048 caractères, ce n'est donc pas une méthode pour de gros formulaires. Attention Aucune erreur sera indiqué si on fait de gros formulaire avec la méthode GET. Toutes les informations s'affichent en clair dans l'URL, on ne peut donc pas y passer de données sensibles. C'est la méthode recommandé pour des données neutres ou non personnalisées.

**La méthode POST:** Aveccette méthode on envoie les données à travers une requete HTTP. Les données sont donc masquées et il n'y a pas de limitation de taille. C'est la méthode reommandé pour tous les formulaires qui concernent directement les informations personnelles d'un utilisateur par exemple.

### Le groupement de champs 

Si on veut regrouper manuellement un ensemble de champs d'un formulaire, on en a la possibilité grâce à la balise `fieldset`. Par défaut , elle encadrera différents champs regroupés. On peut nommer ces différents groupements en utilisant à l'intérieur de mon `fieldset` la commande `legend`. 



 
