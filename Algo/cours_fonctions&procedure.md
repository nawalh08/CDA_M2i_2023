## Les fonctions

Nous avons deux types de programmations : 

- la programmation precédurale (linéaire)
- la programmation fonctionnelle (modulaire) 

Les fonctions et les precédures sont des modules independants désignés par un nom .
Elles ont plusieurs interets : 

- permettent de "factoriser" les programmes 
- permettent une structuration et une meilleure lisibilité des programmes 
- Facilitent la maintenance du code (il suffit de modifier qu'une seule fois)
- les procedure et les fonctions peuvent être réutilisées plusieurs fois. 

***Rôles d'une fonction***

Son rôle est de retourner un résultat à partir des valeurs des paramètres 

Une fonction s'écrit en dehors du programme principale sous forme 

```bash 
Fonction nom_fonction (parametre et leur type) : type_fonction 
instructions constituant le corps de la fonction 
```
---
**Exercice 18**
Définir une fonction qui renvoie le plus grand de deux nombres différents. 

Ecrire un programme qui demande deux nombres à l'utilisateur et qui affiche le plus grand des deux nombres en appelant la fonction précédemment créée.

```bash
FONCTIONS_UTILISEES
FONCTION NombreGrand(nb1, nb2)
VARIABLES_FONCTION
Nbmax EST_DU_TYPE NOMBRE
	DEBUT_FONCTION
	
	SI (nb1 > nb2) ALORS
		DEBUT_SI
	Nbmax PREND_LA_VALEUR nb1
	
	FIN_SI
	SINON
		DEBUT_SINON
		Nbmax PREND_LA_VALEUR nb2

FIN_SINON

	RENVOYER Nbmax
	FIN_FONCTION
VARIABLES
nb1 EST_DU_TYPE NOMBRE
nb2 EST_DU_TYPE NOMBRE
max EST_DU_TYPE NOMBRE
DEBUT_ALGORITHME
	AFFICHER* "Veuillez entrer un nombre"
	LIRE nb1
	AFFICHER* "Veuillez entrer un second nombre"
	LIRE nb2
	max PREND_LA_VALEUR NombreGrand(nb1,nb2)
	AFFICHER "Le plus grand nombre est : "
	AFFICHER max
	
FIN_ALGORITHME
```

---
## Procédure 

**C'est quoi ?**

Dans un certain cas, on peut avoir besoin de répéter une tache dans plusieurs endroits du programme. 

Une procédure s'écrit en dehors du programme principal sous forme 

```bash 
Procedurenom_procedure(parametre et leur types) 
instructions constituant le corps de la procédure 
fin procedure
```

Une procédure est un sous programme semblable à une fonction mais qui ne retourne rien.

```bash

FONCTIONS_UTILISEES
FONCTION Menu()
VARIABLES_FONCTION
	DEBUT_FONCTION
	TANT_QUE (choixUser != 4 ) FAIRE
			DEBUT_TANT_QUE
			AFFICHER* "appuyer sur 1 si vous voulez la plus grande note"
			AFFICHER* "appuyer sur 2 si vous voulez la note la plus basse" 
			AFFICHER* "appuyer sur 3 si vous voulez la moyenne"
			AFFICHER* "pour quitter appuyer sur 4"
			LIRE choixUser
			
			SI (choixUser == 1) ALORS
				DEBUT_SI
				AFFICHER* "la plus grande note est"
				AFFICHER* max
				FIN_SI
			SI (choixUser == 2) ALORS
				DEBUT_SI
				AFFICHER* "la note la plus basse est "
				AFFICHER* min
				FIN_SI
			SI (choixUser == 3) ALORS
				DEBUT_SI
				AFFICHER* "la moyenne est de"
				AFFICHER* moyenne
				FIN_SI

			
			
			FIN_TANT_QUE
	FIN_FONCTION
VARIABLES
notesUser EST_DU_TYPE NOMBRE
note EST_DU_TYPE NOMBRE
max EST_DU_TYPE NOMBRE
min EST_DU_TYPE NOMBRE
moyenne EST_DU_TYPE NOMBRE
choixUser EST_DU_TYPE NOMBRE
DEBUT_ALGORITHME
	max PREND_LA_VALEUR 0
	min PREND_LA_VALEUR 20
	POUR note ALLANT_DE 1 A 3
		DEBUT_POUR
		AFFICHER "Veuillez entrer les notes"
		LIRE  notesUser
		
		SI (notesUser > max) ALORS
				DEBUT_SI
				max PREND_LA_VALEUR notesUser
				FIN_SI
			SI (notesUser < min ) ALORS
				DEBUT_SI
				min PREND_LA_VALEUR notesUser
				FIN_SI
		moyenne PREND_LA_VALEUR moyenne + notesUser 
		
		
		FIN_POUR 
			moyenne PREND_LA_VALEUR moyenne /3 
		
		moyenne PREND_LA_VALEUR moyenne
		AFFICHER* "la plus grande note est "
		AFFICHER* max
		AFFICHER* "la note la plus basse est "
		AFFICHER* min
		AFFICHER* "la moyenne des notes est "
		AFFICHER moyenne 
		APPELER_FONCTION Menu ()
FIN_ALGORITHME

```
---
**Les tableaux**

C'est un ensemble d'éléments de même type désignés par un identificateur unique.

Une variable entiere nommée indice permet d'indiquer la position d'un element donné au sein du tableau et de déterminer sa valeur.

La déclaration d'un tableau s'effectue en précisant le type de ses elements et sa dimension (le nombre de ses éléments)

---
***Exercice 19***

Ecrire un algorithme qui déclare et stocke dans un tableau 10 chiffres, puis qui affiche le 9ème élément de ma liste.

```bash 
FONCTIONS_UTILISEES

VARIABLES
Tab EST_DU_TYPE LISTE
chiffre EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME
POUR chiffre ALLANT_DE 0 A 9  
		DEBUT_POUR
		Tab[chiffre] PREND_LA_VALEUR chiffre
				
		FIN_POUR
	AFFICHER* Tab[8]
FIN_ALGORITHME
```

***Exercice 20***

Ecrire un algorithme qui permet de saisir 15 notes et de les afficher

```bash

```

--- 

***Exercice 21***

Ecrire un algorithme qui permet de saisir des notes de 15 etudiants sur 3 matières.
```bash

FONCTIONS_UTILISEES

VARIABLES
tab EST_DU_TYPE LISTE
notes EST_DU_TYPE NOMBRE
etudiant EST_DU_TYPE NOMBRE
matiere EST_DU_TYPE NOMBRE
DEBUT_ALGORITHME

POUR matiere ALLANT_DE 0 A 2
	DEBUT_POUR
	POUR etudiant ALLANT_DE 0 A 5
		DEBUT_POUR
		
	AFFICHER "Entrer une note pour la matiere "
	AFFICHER* matiere
	LIRE notes
	tab [etudiant * 3 + matiere] PREND_LA_VALEUR notes
	FIN_POUR  
	FIN_POUR  
	
	POUR matiere ALLANT_DE 0 A 2
	
	DEBUT_POUR
	AFFICHER* "-----------------" 
	AFFICHER "Matiere "
	AFFICHERCALCUL* matiere +1
	AFFICHER* "-------------------"
	POUR etudiant ALLANT_DE 0 A 5
		DEBUT_POUR
	
	
	AFFICHER* tab[etudiant * 3 + matiere] -> Le 3 ici est la pour une précision de colonnes, si on a 3 colonnes alors on note 3 si on en a 5 on met 5 à la place de 3.
	FIN_POUR  
	FIN_POUR 
			
FIN_ALGORITHME
```
