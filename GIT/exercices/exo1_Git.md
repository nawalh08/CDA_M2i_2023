## Exercice 1:
Créer un nouveau repository Git : 
- git init

Ajouter un fichier et le commiter : 
- On creer un nouveau fichier et par la suite on fait : git add fichier2.txt par exemple.
- `git commit -m "premier commit"`

Modifier le fichier et le commit : 
- Aller dans le fichier qui a été creer et le modifier en écrivant dedans, à ce moment la un M apparait à côté du nom de fichier. ensuite faire un `git commit -am "2eme commit"`

Observer l'historique :
- `git log`
``` bash 
$ git log
commit 9932b28bd6296cda5a7188abeddb0a921074eb20 (HEAD -> main)
Author: Nawal Hammoudi <nawal.hammoudi@outlook.fr>
Date:   Mon Oct 30 09:38:11 2023 +0100

    2eme commit

commit d77f1efca67b130cc45cf598d12f176e126176aa
Author: Nawal Hammoudi <nawal.hammoudi@outlook.fr>
Date:   Mon Oct 30 09:37:15 2023 +0100

    premier commit
:
```

## Exercice 2 :
