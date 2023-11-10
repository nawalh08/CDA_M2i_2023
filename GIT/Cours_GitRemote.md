## Utiliser Git en remote 

Pour connecter un référentiel Git local à Github, vous devez suivre ces quelques étapes: 

1. **Crrer un compte Github** en allant sur le site officiel https://github.com.

2. **Installer Git:** En allant sur le site officiel on télécharge Git. 

3. **Configurer Git:** Avant de pouvoir utiliser Git avec Github, on configure d'abord avec le nom d'utilisateur et le mail de façon locale. On peut le faire en exécutant ces commandes sur le terminal: 

```bash 
git config --global user.name "nom"
git config --global user.email "email@gmail.com".
```
4. **Creer un nouveau référentiel sur GitHub:** Se connecter sur le compte github, cliquer sur "new" en haut de l'écran pour creer un nouveau référentiel (repository). Suivre les étapes pour le configurer selon les besoins.

5. **Clônez le référentiel GitHub en local:** Pour cloner le référentiel GitHub sur l'ordinateur, utilisez la commande `git clone` en spécifiant l'url du référentiel distant: 

```bash
git clone URL-du-referentiel
```

6. **Travaillez sur votre projet localement:** Vous pouvez maintenant travailler sur votre projet localement en ajoutant, modifiant et supprimant des fichiers dans le répertoire cloné.

7. **Validez et publiez vos modifications:** Une fois que vous avez effectué des modifications que vous souhaitez envoyer sur GitHub, vous devez ajouter ces modifications (add), valider les changements (commit) et le pousser vers le repo distant (push), en l'occurence GitHub. par exemple 
```bash 
git add .
git commit -m "description"
git push origin main 
```
Assurez-vous de remplacer `main` par la branche que vous souhaitez pousser si vous travaillez sur une branche différente.

8. **Consulter votre référentiel sur GitHub:** Après avoir poussé vos modifications, vous pouvez vous rendre sur votre référentiel GitHub pour voir les changements en ligne. 
Votre référentiel Git local est maintenant connecté à GitHub, et vous pouvez continuer à travailler sur votre projet tout en collaborant avec d'autres personnes via GitHub.

## Envoyer son projet GitHub sans cloner

Pour rattacher un référentiel distant à un dossier local sans utiliser `git clone`, vous pouvez utiliser la commande `git remote` pour ajouter un dépot distant et `git fetch` pour récupérer **les références** du dépot distant: 

1. **Creer un nouveau référentiel distant sur GitHub si ce n'est déja fait**

2. **Dans votre dossier local, initialiser un repo Git**

3. **Ajouter le référentiel distant en utilisant `git remote add`**

```bash
git remote add nom-perso-distant url-du-referentiel
```

Remplacez `nom-perso-distant` par le nom que vous souhaitez (par exemple, origin) et vous récupérez l'url sur GitHub.
Si vous avez une erreur, et que vous souhaitez supp un remote, utilisez la commande `git remote remove nom-du-remote`

4. **Vérifier que le referentiel distant à été ajouter avec succés**

```bash
git remote -v
```

Cela affichera l'url des référentiels distants que vous avez configurés.

5. **Récupérez les références du dépot distant avec `git fetch`**
```bash 
git fetch nom-distant
```

Cela récupérera les info sur le branches et les tafs du référentiel distant, mais ne fusionnera pas automatiquement les modifications dans votre branche locale.

6. **Ensuite, pour travailler sur les modifications du référentiel distant, vous pouvez creer une branche locale qui suit une branche distante avec `git checkout`

```bash
git checkout -b nom-de-votre-branche-locale origin/nom-de-la-branche-distante
```

Vous avez maintenant connecté un référentiel distant à votre dossier sans utiliser `git clone`

## Le Git pull
```bash 
git pull branche-distante branche-locale 

#Exemple 
git pull origin main 
```

Lorsque vous exécuter un `git pull`, ces étapes se succèdent:
1. Git commence par exécuter une opération `git fetch` pour récupérer toutes les modifications depuis la branche distante spécifique. Cela met à jour les références distantes dans votre dépot local pour refleter l'état actuel du dépot distant, mais à ce moment la, on ne modifie pas encore sa branche locale.

2. Fusion automatique: Après avoir récupérer les info distantes, Git exécute une opération de fusion (ou de rebase, si vous lui spécifiez) pour integrer les modifications récupérées dans votre branche locale. Si Git détecte des conflits entre les modifications distantes et locales, il vous demandera de les résoudre manuellement avnt de terminer la fusion.

3. Finalisation: Une fois que la fusion ou le rebase est réussie, votre branche locale est mise à jour avec les dernieres modifications de la branche distante. Votre arborescence de travail reflète désormais l'état actuel de l abranche distante.

