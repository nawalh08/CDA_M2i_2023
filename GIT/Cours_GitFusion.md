## FUsionner les branches (merge/rebase)

Lorsque j'ai fini de travailler sur ma branche , je voudrais souvent appliquer mon travail à la branche main (branche principale) 
Cette étape est possible grâce à la **fusion de branches**. Mais il existe plusieurs types de fusion possible:

## Le `merge`:

Le merge crée un nouveau commit de fusion *(merge commit)* qui combine les modifications de la branche source dans la branche de destination. Ce commit de fusion à deux parents, un parent pour la branche source et un parent pour la branche destination.

Le merge préserve l'historique des commits de manière linéaire et montre clairement quand et d'où proviennent les modifications.

Il est donc recommandé pour les collaborations où plusieurs contributeurs travaillent sur la même branche, car il préserve l'histoire des contributions individuelles.

**Pour réaliser un merge, je me place dans la branche de destination et j'utilise `git merge`**

```bash 
# par exemple, si je veux fusionner ma branche "feature1" avec ma branche "main"

# je me place dans ma branche main qui va recevoir les changements 
git switch main 

# Je fusionne ma branche feature1
git merge feature1
```

Le merge peut rencontrer deux cas de figures: avec ou sans fast-forward.

- **Le "fast-forward" (avance rapide)**
Il s'agit d'une méthode de fusion particuliere qui se produit lorsque Git peut intégrer les modifications d'une branche dans une autre sans créer de commit de fusion supplémentaire. Le Fast-forward est possible lorsque les conditions sont respecter: 
    - Vous avez une branche destination et une branche principale
    - La branche source contient des commits que la branche destination n'as pas encore incorporés.
    - Les commit de la branche source sont linéaires par rapport à la branche de destination, c'est à dire qu'il s'ajoutent l'un après l'autres dans l'ordre chronologique.

Cel adonne l'apparence d'une fusion propre et lineaire dans l'historique des commits. Le FF est souvent préféré lorsque c'est possible, car il maintient la clarté sans créer de commit de merges supplementaires. Cependant, il n'est pas toujours applicable, en particulier lorsque des divergences importantes existent entre branches à fusionner. Je peux forcer la non-utilisation d'un FF (par ex: si je veux volontairement un merge commit) en ajoutant l'option `git merge nom-branche --no-ff`.

- **Sans fast-foward:**
Lorsque des divergences existent entre les deux branches, je ne peux pas simplement "coller" ma  branche source à ma branche de destination. Un commit de fusion *(merge commit)* est donc créé. Ce commit de fusion héritera des deux branches et n'existera qu'au sein de la branche de destination.
C'est dans cette configuration qu'un **conflit** peut apparaître.
En effet, si une même ligne est modifié dans les deux parents, Git devra faire un choix dans ce qu'il récupère, c'est donc à l'utilisateur de reprendre la main pour faire ce choix et **résoudre** le conflit. 
VSCode utilise un outil graphique pour réparer les conflits mais vous pouvez utiliser le `git mergetool` pour régler les conflits en CLI.
Si ces conflits ne sont pas voulus, **je peux annuler mon merge** grâce à l'option `--abort`
```bash
git merge --abort
```

## Le `rebase`

Il existe une autre méthode pour fusionner deux branches: le rebase

- Le rebase réapplique séquentiellement chaque commit de la branche source sur **le dessus** de la branche de destination. Il "rejoue" l'historique des commits, ce qui donne l'apparence d'une ligne de temps linéaire et propre.

- **Il ne crée pas de commits de fusion supplémentaires.** Les commits originaux de la branche sources sont réécrits avec de nouvelles valeurs de hachage.

- Le rebase peut être utilisé pour garder l'historique des commits plus propre et plus linéaire, mais il peut réécrire l'historique des commits, ce qui peut causer des conflits si plusieurs contributeurs travaillent sur la même branche.

- C'est une stratégie généralement recommandée pour les branches locales où vous voulez garder votre historique propre et pour intégrer régulièrement les mises à jour à la branche principale (main).

**Attention** : Si je souhaite rebase une branche "feature" sur ma branche principale, je viendrai me placer sur ma branche feature et j'utiliserai la commande:
```bash 
git rebase main
```
S'il y a des conflits, Git vous demandera de les résoudre à mesure que chaque commit est réappliqué.

Par exemple pour fusionné une branche de fonctionnalité "feature" sur une branche principale (main):

1. Assurez vous d'être sur la branche "feature" en utilisant `git switch` ou `git checkout`:

```bash 
git switch feature
```

2. Effectuez le rebase de la branche "feature" sur la branche main en utilisant le commande : `git rebase`: 

```bash 
git rebase main 
```
Cela réappliquera séquentiellement les commits de la branche "feature" sur la branche "main"

3. Après avoir résolu les conflits et terminé le rebase, vous pouvez maintenant mettre à jour la branche "main" avec les modifications de la branche "feature" en utilisant une fusion rapide (fast-forward):
```bash
git switch main 
git merge feature
```

Etant donné que vous avez déja réappliquer les commits de la branche "feature" sur "main" lors du rebase, cette fusion devrait être un fast-forward, ce qui signifie qu'aucun commit de fusion (merge commit) supplémentaire ne sera crée, et la branche "main" sera simplement mise à jour pour pointer le commit le plus récent de la branche "feature".


## Quelle stratégie choisir ? 

Le choix entre un merge et un rebase dépend de la manière dont vous souhaitez gérer l'historique des commits et des besoins spécifiques de votre flux de travail. 

**Le merge est généralement recommandé pour les collaborations, tandis que le rebase est utile pour maintenir un historique linéaire et propre dans des branches locales.**
