## Exercice interaction remote (GitHub)

1. **Transferer tout le contenu du cours en local sur votre repository distant.**
```bash 
git add cours
git commit 
git clone https://....... (le lien de connexion de github)
git push 
```

2. **Créer une branche secondaire en remote.**

Aller dans GitHub et créer une nouvelle branche en faisant new branch et la nommé. (ex: le nom de la branche ici est nommé dev-Nawal)

3. **Créer un fichier texte à votre nom et vous le pusher dans cette branche secondaire.**
```bash
Administrateur@LIL-CD1TH5J MINGW64 ~/Desktop/CDA_M2i_2023/GIT (main)
$ git checkout -b dev-Nawal
Switched to a new branch 'dev-Nawal'

Administrateur@LIL-CD1TH5J MINGW64 ~/Desktop/CDA_M2i_2023/GIT (dev-Nawal)
```

```bash
Administrateur@LIL-CD1TH5J MINGW64 ~/Desktop/CDA_M2i_2023/GIT (dev-Nawal)
$ git push origin dev-Nawal
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 443 bytes | 443.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/nawalh08/CDA_M2i_2023.git
   74c08b3..c729abf  dev-Nawal -> dev-Nawal
```

```bash 
Administrateur@LIL-CD1TH5J MINGW64 ~/Desktop/CDA_M2i_2023/GIT (dev-Nawal)
$ git push origin dev-Nawal
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 443 bytes | 443.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/nawalh08/CDA_M2i_2023.git
   74c08b3..c729abf  dev-Nawal -> dev-Nawal
```

4. **Vous récupérez le fichier .txt de quelqu'un d'autre de la formation.**

```bash 
Administrateur@LIL-CD1TH5J MINGW64 ~/Desktop/CDA_M2i_2023/GIT/repo-Roxane (dev-Nawal)
$ git clone --single-branch -b New-branch https://github.com/JaceyStew6/CDA_M2i.git
Cloning into 'CDA_M2i'...
remote: Enumerating objects: 43, done.
remote: Counting objects: 100% (43/43), done.
remote: Compressing objects: 100% (33/33), done.
remote: Total 43 (delta 6), reused 38 (delta 5), pack-reused 0
Receiving objects: 100% (43/43), 243.55 KiB | 22.14 MiB/s, done.
Resolving deltas: 100% (6/6), done.
```