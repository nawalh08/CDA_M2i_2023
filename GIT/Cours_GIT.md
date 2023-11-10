# Apprendre à utiliser GIT

Git est un système de contrôle de version distribué (DVCS) largement utilisé dans le d  éveloppement de logiciels et d'autres projets collaboratifs. Il permet de suivre, gérer et enregistrer les modifications apportées à un ensemble de fichiers au fil du temps, tout en facilitant la collaboration entre les membres d'une équipe. Conçu en 2005 par Linus Torvalds, Git est conçu pour être rapide, efficace et décentralisé.

Git agit comme un système de suivi des modifications qui enregistre chaque modification, ajout ou suppression de fichiers dans un historique organisé. Il permet aux développeurs de travailler en parallèle sur différentes fonctionnalités ou branches de projet, de fusionner leurs contributions et de revenir en arrière en cas de besoin. Cette approche facilite la gestion de projets complexes et la préservation d'un historique complet des évolutions du code source.

Git fonctionne en conservant des instantanés (commits) de l'état des fichiers à différents moments. Ces commits sont organisés en une séquence chronologique et peuvent être révisés, fusionnés et partagés avec d'autres membres de l'équipe.

Git est souvent utilisé conjointement avec des plateformes de gestion de code source en ligne telles que GitHub, GitLab ou BitBucket, qui permettent un stockage distant des dépôts Git et la collaboration simplifiée.

## Installer Git

Pour pouvoir être utilisé, Git nécessite d'abord d'être installé sur votre OS, vous pourrez trouver les installateurs sur le site officiel:
[Télécharger Git](https://git-scm.com/downloads)

Git est compatible avec macOS, Linux et Windows.

## Premiers pas

Git peut être utilisé via une interface en ligne de commandes ou un interface graphique (comme celle de VS Code par exemple). On privilégiera toutefois le CLI pour sa polyvalence et sa rapidité.  
En CLI, toutes les commandes de git commencent par le mot-clé git (par exemple `git init`)

### Configurer son compte Git

`git config` est un outil qui permet de voir et modifier les variables de configuration qui contrôlent tous les aspects de l'apparence et du comportement de Git.  
On va d'abord s'en servir pour configurer son compte:
```bash
$ git config --global user.name "Mon nom"
$ git config --global user.email "exemple@gmail.com"
```

### Obtenir de l'aide

- Pour obtenir la documentation liée à une commande, il suffit d'utiliser l'une des commandes suivantes:

```bash
$ git help "commande"
$ git "commande" --help 
```

Par exemple pour obtenir l'aide de la commande config: `git help config`  
Pour une documentation plus concise: `git "commande" -h`

## Initialiser un dépôt (working directory)

Pour commencer à suivre les modifications d'un projet, vous devez créer un dépôt Git. Vous pouvez le faire en exécutant la commande suivante **dans le répertoire de votre projet**
```bash
git init
```

Si votre dépôt a bien été généré, un fichier **.git** est apparu dans le répertoire courant.  
Pour supprimer ce dépôt, il suffit de supprimer ce fichier **.git**
```bash
rm -rf .git
```

## Le staging (indexage)

Le staging, également appelé indexage, est une étape intermédiaire essentielle lors de l'utilisation de Git. C'est le mécanisme qui vous permet de préparer soigneusement les modifications que vous souhaitez inclure dans votre prochain commit.  
Je peux ajouter les fichiers que je souhaite à mon commit grâce à la commande `git add "nomdufichier"`

```bash
git add fichier1.txt
```

Si je souhaite suivre tous les fichiers présents dans mon dépôt, j'utiliserai `git add .`

Pour afficher la liste des fichiers qui sont actuellement en staging (indexés) et prêts à être inclus dans le prochain commit, vous pouvez utiliser la commande `git status`.

Pour retirer un fichier de la staging area (zone de staging) sans annuler les modifications apportées au fichier, vous pouvez utiliser `git rm --cached "nomdufichier"`:

```bash
git rm --cached fichier1.txt 
```

## Créer notre instantané (commit)

Lorsque nos fichiers surveillés sont prêts dans la staging area, je peux prendre à tout moment un instantané (commit) de leur état. Ce commit agira comme une sauvegarde à laquelle je pourrais réaccéder quand je le souhaite. La commande est simplement `git commit`.

Cela nous ouvre notre éditeur de texte pour que nous puissions indiquer le nom de notre commit:

---
L'éditeur de texte utilisé de base par Git est Vim. C'est un éditeur très ancien dont l'ergonomie peut être difficile à appréhender au début. Voici les seules commandes qui vous seront utiles pour écrire un commit:

- Par défault, nous ne sommes pas en mode insertion de caractères, pour entrer dans ce mode, il faut appuyer sur la touche `a` ou la touche `i`, le mode dans lequel vous vous trouvez est spécifié en bas de votre terminal
- Nous pouvons maintenant écrire le nom de notre souhait en première ligne du fichier. Pour quitter ce mode insertion ou n'importe quel autre mode, il suffit d'appuyer sur la touche `Echap`
- En dehors du mode insertion, je peux écrire des lignes de commandes, si je les commence par le caractère `:` (deux points). Voici les différentes commandes que vous pouvez utiliser pour quitter l'éditeur:
    - `:q` (quit). Cette commande quitte Vim mais uniquement si aucun changement n'a été apporté au document. Si c'est le cas, Vim vous indiquera un message d'erreur. **Si le fichier est quitté en étant vide, le commit est annulé**
    - `:q!` (force quit). Quitte l'éditeur même si des changements ont été apportés. Ceux-là seront définitivement perdus et **le commit sera annulé**
    - `:wq` (write&quit). Vos changements sont sauvegardés et vous quittez l'éditeur. Le commit est envoyé. Vous pouvez également utiliser le raccourci `:x`


---
Pour de très longs noms cela pourra servir mais de manière générale nous préfèrerons ajouter l'option -m (pour message) à notre commit pour indiquer son nom directement dans la commande

```bash
git commit -m "Nom du commit"
```
Si j'ajoute l'option -a (add) , j'ajouterai toutes modifications des fichiers déja suivis par la staging area sans avoir besoin à répéter mon `git add`, mais n'ajoutera pas les nouveaux fichiers après le commit (que je devrais intégrer classiquement avec `git add`) ni ceux qui ont été supp.

Les options sont cumulables dans git, par exemple:
```bash 
git commit -am "nom du commit"
```

Pour voir l'historique de tous mes commits, j'utiliserai git log.

```bash
git log
```

Deux options sont souvent ajoutées à `git log` : 
- `-n "nombre de notre choix"`: limite à un nombre *n* de commits. (affiche à partir des plus récent) 
- `--oneline`: offre une virsion condensé en une ligne de chaque commit. On aura nos commit mais sur une seule ligne. 

Pour voir les détails spécifique d'un commit, j'utiliserai la commande `git show`:
```bash
git show id-du-commit
```

Enfin, si je souhaite comparer deux commits, j'utilise la commande `git diff` sur leurs identifiants
```bash
git diff id-commit1 id-commit2
```

## Revenir à une version antérieure 
Une fois que je dispose de plusieurs commit, je peux revenir à une version antérieure. Pour revenir à une version du commit précédent dans le git, vous pouvez utiliser la commande : `git checkout` ou `git reset`. Le choix entre ces deux commandes dépend de ce que vous allez accomplir. Voici un résumé des deux méthodes.

- utiliser `git chekout` pour revenir à un commit précédent: 
Si vous voulez simplement examiner le contenu d'un commit précédent sans effectuer votre position actuelle, vous pouvez utiliser la commande `git chekout` suivi de l'identifiant du commit que vous voulez vérifier.
Cependant, notez que tout nouveau commit crée à partir de cet état ne sera pas sur une branche et pourrais être perdu.
Pour revenir au commit actuel, on utilise la commande `git switch - ` (le `-` est un raccourci qui nous ramène à la précédente branche).

- Utiliser `git reset` pour revenir à un commit précédent: 
Si vous voulez revenir à un commit précédent **tout en annulant les commit ultérieurs**, vous pouvez utiliser le `git reset`. Il existe 3 modes principaux:
--soft, --mixed (par defaut) et --hard.
    - `--soft`: Réinitialise le HEAD au commit précédent tout en conservant les modifications en staging. Vous pouvez créer un nouveau commit avec les modifications actuelles si nécessaire.
    - `--mixed` c'est le comportement par defaut, il fait à la fois la réinitialisation du HEAD au commit précédent et annule les modifications en traging.
    - `--hard` : Il réinitialise completement le HEAD au commit précédent, supprimant toutes les modifications locales. Il supprime toute la nouvelle version et nous ramème à la version précédente. 

```bash
git reset --hard id-du-commit
```
Il est important que les commit ne sont pas immédiatement supp après un git reset, ils sont simplement déréférencés de la branche et deviennent des commits orphelins.Ils seront en revanche automatiquement supp par Git et sa collecte automatiquement des déchets (garbage collector) un mois plus tard si ils ne sont pas ré-référencés.

## Création d'étiquettes (tags)

La commande `git tag` est utilisée pour gérer les tags dans git. Les tags sont des références immuables qui pointent généralement vers des commits spécifiques dans l'historique d'un projet. Les tags sont souvent utilisés pour marquer des versions stables ou des points de repère important dans le développement d'un projet. 
**Un tag ne peut pas contenir d'espacement**

1. **Creer un tag léger** : 
```bash
git tag nom-du-tag id-commit
```
Un tag ça peut être par exemple une version du projet, ex: v1.0.
Cette commande crée un tag léger qui est simplement une référence à un commit spécifique. Si vous ne spécifiez pas le commit, il viendra se placer sur le commit dans lequel vous vous situez actuellement.

2. **Creer un tag complexe** :
```bash
git tag -a nom-du-tag -m "description du tag" id-commit
```

Cette commande crée un tag annoté avec un message de description optionnel.

3. **Lister les tags** : 
```bash
git tag
```
Cette commande liste tous le stags présent dans le dépot git.

4. **Afficher les info d'un tag** : 
```bash
git show nom-du-tag
```

Cette commande affiche les info sur un tag spécifique, y compris le commit sur lequel il pointe et le message de description s'il s'agit d'un tag annoté.

5. **Supp un tag** : 
```bash
git tag -d nom-du-tag
```

Cette commande sert à supprimer un tag si on s'est trompé sur un nom de tag... 

## Création de branches 
Créer des branches dans git est un concept fondamental pour la gestion du code source et la collaboration au sein d'un projet. Les branches permettent aux dev de travailler sur des fonctionnalitées, des correctifs ou des améliorations isolées sans perturber le code principal.

Ce systeme de branches va passer par plusieurs étapes : 
- Créer une nouvelle branche : utilisez la commande `git branch` suivie du nom de la nouvelle branche pour la créer.
`git branch nom-de-la-branche`

- Se déplacer vers la nouvelle branche: Utilisez la commande `git chekout nom-de-la-branche` pour basculer de MAIN à la nouvelle branche.
- Ou depuis Git 2.23, vous pouvez combiner les les deux étapes précédentes en une seule commande (création + déplacement) 
```bash
git checkout -b nom-de-la-branche
```

- Depuis la version Git 2.23, il est recommander de se déplacer avec la commande `git switch` à la place d'utiliser le `git checkout` qui lui est utiliser pour se déplacer dans tout tandis que le `git switch` set uniquement à se déplacer entre les branches.
```bash
# déplacement entre branches
git switch ma-branche
# déplacement + création
git switch -c nouvelle-branche
```

- Si vous souhaitez renommé une des branches, il faudra utiliser la commande `git branch -m nouveau-nom`, celle ci est modifier directement dans la branche dans laquelleon se situe.

- Je supprime ma branche avec la commande `git branch -d nom-de-la-branche` ou avec un `-D`

- Si je n'écris que `git branch` j'obtiens la liste de mes branches.

- Enfin, la commande `git diff`, sert à comparer mes branches
```bash
git diff branche1 branche2
```

## Le fichier .gitignore

Ce fichier est utilisé pour spécifier des régles qui servent à ignorer certains fichiers ou répertoires lors des opérations Git, comme lors du git add ou git status par exemple. Il possède une syntaxe particulière : 

**Pour ignorer un fichier ou un dossier spécifique :**
Pour ignorer un fichier ou un dossier en particulier, vous ajouter son chemin relatif au répertoire racine du projet Git. Pour qu'un dossier ou document soit ignoré il faut mettre dans le dossier gitignore le nom du dossier ou du document..tout en mettant le chemin que ce dossier ou document prend.
exemple : Si dans mon dossier exercice j'ai un document à ignorer alors dans ce cas je met dans mon dossier gitignore le chemin suivant -> **exercice/fichier1.txt** et donc la le document que je veux ignorer est grisé. 
```pl
# vous pouvez commenter un fichier .gitignore en commençant par un (#)

#fichier à la racine 
monfichier.extension
mondossier/

#Avec un chemin 
mondossier/monfichier.extension

```
**Utiliser des patternes:** Vous pouvez également spécifier des plages plus grande de dossiers et de fichiers grâce au caractere spéciaux de patterne (combinables):
- **\* (étoile):** matche n'importe quelle suite de caractère 
- **\* (double étoile):** Matche n'importe quel nombre de dossier
- **! (point d'exclamation):** négation. Inverse une régle précédemment établie dans le .gitignore
- **? (point d'interrogation):** Matche un caractere unique 

```pl
#ignore tout les fichiers .txt 
*.txt

# malgré que tous mes .txt soient ignorés, je veux que mon fichier1.txt soit surveillé 
!fichier1.txt

# Ignore tous les fichiers .txt d'un dossier spécifique 
mondossier/*.txt

# Ignorer tous les fichiers .txt quelque soit leur dossier 
**/*.txt

# Ignore tous les fichirs .txt faisant 4 caractères 
????.txt
```

Une fois votre fichier configuré, vous pouvez utiliser la commande `git add .gitignore` pour l'ajouter, puis `git commit` pour la valider.