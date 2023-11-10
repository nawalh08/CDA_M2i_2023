**Langages**


Il existe deux types de langages : le langage procédural comme le PHP, le C..
et nous avons aussi le langage orienté objet comme le Java, C++, C#..

**Etapes de la réalisation d'un programme**

- Enoncé du problème -> Spécification
- Cahier des charges -> Analyse 
- Algorithme  -> Analyse /Traduction en langage 
- Programme source -> Traduction en langage / Compilation
- Programme ewécutable -> Compilation
- Version finale -> Tests et modifications

**Notions de variables**

Dans les langages de programmation une **variable** sert à stocker la valeur d'une donnée.

Une variable c'est une petite boite vide qu'on initialise et qui va contenir par exemple un chiffre ou une chaine de caractère. Si la chaine de caractère rentre alors le chiffre sort car la boite peut contenir qu'une seule valeur.
Les variables doivent être déclarer avant dêtre utilisées, elles doivent être caractérisées par: 


- un nom (identificateur)
- un type (entier, reel,caractère,chaine de caractère...) ce sont des caractères primitifs.

**Choix des identificateurs**

- Un nom commence tjr par une lettre comme par exemple A1 et **non pas 1A**
- il doit être constitué uniquement de lettre, chiffres et du soulignement _ (ex: cdi_2016).
- donner un nom concret avec du sens pour pouvoir se repérer plus facilement (ex: TotalVente2016).

**Type de variable**

Type numérique (entier ou réel) :
- byte (codé sur 1 octet): de 0 à 255
- entier court (codé sur 2 octets): -32 768 à 32 767
- Entier long (codé sur 4 ou 8 octets)
- Réel simple précision (codé sur 4 octets)
- Réel double précision (codé sur 8 octets)

-> Type logique ou booléen : deux variables Vrai ou Faux 

-> Type caractère : Lettre majuscules, minuscules,chifres,symboles... 

-> Type chaine de caractère : toutes suites de caractères **exemple: "nom,prenom", "code postale"**


**Déclaration de variables** 

On déclare en début de code notre variable. 

exemple : Variables i,j,k:entier 
- vrai/faux : bool 
- j,k : reel 
- ch1,ch2 : chaine de caractère 


--- 


### Exercices

- **Exercice 4 : Si...Alors**

Ecrire un algorithme qui demande un nombre entier à l'utilisateur, puis qui teste et affiche s'il est divisible par 3 ou non. 

```bach

FONCTIONS_UTILISEES
VARIABLES
A EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME
AFFICHER "Veuillez entrer une valeur"
LIRE A
	SI (A%3==0) ALORS 
		DEBUT_SI
		AFFICHER* "divisible"
		FIN_SI
	
	SINON

		DEBUT_SI
		AFFICHER* "pas divisible"
		FIN_SI
	
	
	
	
FIN_ALGORITHME
```

- ***Exercice 5 : Test imbriqué***

Le prix de photocopies dans une reprographie varie selon le nombre demané:

- 0.5 euro la copie pour un nombre de copies inferieur à 10
- 0.4 euro pour un nombre compris entre 10 et 20.
- et 0.3 euro au delà.

Ecrivez un algorithme qui demande à l'utilisateur le nombre de photocopies effectuées, qui calcule et affiche le prix à payer.

```bash 

FONCTIONS_UTILISEES
VARIABLES
A EST_DU_TYPE NOMBRE
prix EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME
AFFICHER "le nombre de photocopies"
LIRE A
	SI (A<10) ALORS
		DEBUT_SI
		prix PREND_LA_VALEUR (0.5 * A)
		AFFICHER* "le prix est de " 
		AFFICHER prix
		FIN_SI
	
	SINON
		DEBUT_SINON
		
	SI (A>=10 ET A<=20) ALORS

		DEBUT_SI
		prix PREND_LA_VALEUR (0.4 *A)
		AFFICHER* "le prix est de" 
		AFFICHER prix
		FIN_SI
	
		
	SINON
	SI (A>20) ALORS
		DEBUT_SI
		prix PREND_LA_VALEUR (0.3*A)
		AFFICHER* " le prix est de"
		AFFICHER prix
		FIN_SI
		FIN_SINON
	
FIN_ALGORITHME
```
***Exercice 6***

Déterminer le montant d'un capital C placé à un taux fixe T pendant un nombre n d'années. On suppose que c,t,n sont lus.

Exemple de calcul : (le taux est de 4%, soit 0.4)
cn = 10 000*(1+0.04)^5 = 12166 euro, soit un gain de 2166 euros.

```bash
 FONCTIONS_UTILISEES

VARIABLES
c EST_DU_TYPE NOMBRE
t EST_DU_TYPE NOMBRE
n EST_DU_TYPE NOMBRE
Total EST_DU_TYPE NOMBRE
g EST_DU_TYPE NOMBRE
DEBUT_ALGORITHME

AFFICHER "Veuillez entrer le capital"
LIRE c	
AFFICHER* "Veuillez entrer le taux"
LIRE t
AFFICHER* "veuillez entrer le nombre d'années"
lire n 


AFFICHER* "Le capital final est de "
AFFICHERCALCUL* Total = round(c*pow(1+ t/100,n))  -> pow est la puissance sur algobox et round sert à arrondir la valeur

AFFICHER* "le gain est de"
AFFICHERCALCUL* g = Total-c

FIN_ALGORITHME
```
***Exercice 7***

Ecrire un algorithme qui demande l'âge d'un enfant à l'utilisateur. Ensuite, il l'informe de sa catégorie pour une licence sportive.

```bash
FONCTIONS_UTILISEES
VARIABLES
Age EST_DU_TYPE NOMBRE
Licence EST_DU_TYPE CHAINE

DEBUT_ALGORITHME

AFFICHER "Veuillez entrer l'âge de votre enfant"
LIRE Age
SI (Age<3 ou Age>=18) ALORS
	DEBUT_SI
	AFFICHER* "vous ne pouvez pas inscrire votre enfant"
	FIN_SI

SI (Age>=3 ET Age<=6) ALORS
		DEBUT_SI
		Licence PREND_LA_VALEUR "baby"
		FIN_SI

	SINON
		DEBUT_SINON
		
SI (Age==7 OU Age==8) ALORS

		DEBUT_SI
	Licence PREND_LA_VALEUR "Poussin"
		FIN_SI
	
		
	SINON
SI (Age==9 OU Age==10) ALORS

	DEBUT_SI
		Licence PREND_LA_VALEUR "Pupille"
	FIN_SI
		
SI (Age==11 OU Age==12) ALORS

	DEBUT_SI
		Licence PREND_LA_VALEUR "Minime"
	FIN_SI
		
		SINON
	DEBUT_SINON
		Licence PREND_LA_VALEUR "Cadet"
	FIN_SINON
AFFICHER* "Vous avez une licence"
AFFICHER* Licence
	
FIN_ALGORITHME
```

***Exercice 9***

(voir correction)


## Les boucles

**Types de boucles**

- boucle tant que (while) -> on y répéte des instructions tant qu'une certaine condition est réalisée
- boucle pour (for) ou avec compteur ->  on y répéte des instructions en faisant évoluer un compteur. 

1. compteur est une variable qui doit être déclarée.

2. **Pas** est un entier qui peut ^tre positif ou négatif , **Pas** ne peut pas être mentionné car par defaut sa valeur est égal à 1. Dans ce cas, le nombre d'itérations est égal à finale - initiale + 1.

- boucle jusqu'à  (do while) -> répéte plusieur fois les instruction mais joue une fois les conditions. 
1. La condition est évaluée apres chaque itération 




**Exercice 1**

```bash
FONCTIONS_UTILISEES

VARIABLES
val EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME
	
AFFICHER* "veuillez entrer une valeur compris entre 1 et 3"
LIRE val
	
		
		 TANT_QUE (val<1 OU val >3) FAIRE
		 DEBUT_TANT_QUE
			AFFICHER "Entre 1 et 3 on a dit !"
			LIRE val
			FIN_TANT_QUE

FIN_ALGORITHME
```

**Exercice 2**

Soit un capital c placé à un taux t. On veut connaître le nombre d'années nécessaires au doublement de ce capital. 
ex calcul (avec un taux de 4%): Cn = 10000 * (1+0.04)^5 = 12166

```bash
FONCTIONS_UTILISEES

VARIABLES
c EST_DU_TYPE NOMBRE
t EST_DU_TYPE NOMBRE
année EST_DU_TYPE NOMBRE
total EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME
AFFICHER* "veuillez entrer un capital"
LIRE c
AFFICHER* "veuillez entrer un taux"
LIRE t
année PREND_LA_VALEUR 1

TANT_QUE (total < c*2) FAIRE
	DEBUT_TANT_QUE
	AFFICHER* "le capital n'as pas doublé"
	
	total PREND_LA_VALEUR round(c*pow(1+ t/100,année))
	année PREND_LA_VALEUR année+1
	FIN_TANT_QUE
	AFFICHER* total 
	année PREND_LA_VALEUR année -1
	AFFICHER*  année 
	AFFICHER* "ans pour doubler" 


FIN_ALGORITHME
```
***Exercice 3***

Ecrire un algorithme permettant d'afficher la table de multiplication par 9. 

```bash 
FONCTIONS_UTILISEES

VARIABLES
i EST_DU_TYPE NOMBRE 
calcul EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME
		
	
		POUR i ALLANT_DE 0 A 10  
		DEBUT_POUR
		calcul PREND_LA_VALEUR i * 9
		AFFICHER* calcul
		FIN_POUR
		 
	
FIN_ALGORITHME
```

***Exercice 4***

Ecrire l'algo qui demande à l'utilisateur 6 nombres, et qui lui dit ensuite quel était le plus grand parmi ces 6 nombres.

```bash
FONCTIONS_UTILISEES

VARIABLES
UserNb EST_DU_TYPE NOMBRE 
max EST_DU_TYPE NOMBRE
i EST_DU_TYPE NOMBRE
DEBUT_ALGORITHME
		POUR i ALLANT_DE 1 A 6 
			DEBUT_POUR
			AFFICHER* "veuillez entrer un nombre"
			LIRE UserNb
			SI (UserNb==1) ALORS
				DEBUT_SI
				max PREND_LA_VALEUR UserNb
				FIN_SI
			SI (UserNb >= max ) ALORS
				DEBUT_SI
				max PREND_LA_VALEUR UserNb
				FIN_SI
			FIN_POUR 
			AFFICHER "le plus grand nombre est "
			AFFICHER* max
FIN_ALGORITHME
```

**Exercice 5**:

Ecrire un algorithme qui demande un nombre de départ et qui calcule la somme des entiers jusqu'a ce nombre. 
Par exemple, si on entre 4, le programme doit calculer : 1+2+3+4 = 10.

```bash 
FONCTIONS_UTILISEES

VARIABLES
UserNb EST_DU_TYPE NOMBRE
somme EST_DU_TYPE NOMBRE
i EST_DU_TYPE NOMBRE
DEBUT_ALGORITHME
AFFICHER "veuillez entrer un nombre"
	LIRE UserNb
	
	POUR i ALLANT_DE 1 A UserNb
	
	DEBUT_POUR
		
	SI (UserNb >1) ALORS
		somme PREND_LA_VALEUR somme + i
	 
		
	FIN_POUR
		AFFICHER somme
FIN_ALGORITHME
```

*** Exercice 6 ***

Ecrire un algorithme qui permet d'afficher les tables de multiplications des nombres allant de 1 à 10 d'un seul coup

**Exemple avec deux boucles**  
```bash

FONCTIONS_UTILISEES

VARIABLES
multiplication EST_DU_TYPE NOMBRE
i EST_DU_TYPE NOMBRE
j EST_DU_TYPE NOMBRE
DEBUT_ALGORITHME
POUR j ALLANT_DE 1 A 10
	DEBUT_POUR
	
	POUR i ALLANT_DE 1 A 10  
		DEBUT_POUR
		
		multiplication PREND_LA_VALEUR j * i 
		AFFICHER j
		afficher "X"
		AFFICHER i
		AFFICHER "="
		AFFICHER multiplication
		AFFICHER* " "
		FIN_POUR
		FIN_POUR
FIN_ALGORITHME
```
**Exemple avec une seule boucle**

```bash
FONCTIONS_UTILISEES
VARIABLES
  i EST_DU_TYPE NOMBRE
  j EST_DU_TYPE NOMBRE
DEBUT_ALGORITHME
  j PREND_LA_VALEUR 1
  POUR i ALLANT_DE 1 A 10
    DEBUT_POUR
    SI (j <= 10) ALORS
      DEBUT_SI
      SI (i == 1) ALORS
        DEBUT_SI
        AFFICHER* "----------"
        AFFICHER "Table de "
        AFFICHER* j
        AFFICHER* "----------"
        FIN_SI
      SI (i < 10) ALORS
        DEBUT_SI
        AFFICHER j
        AFFICHER " x "
        AFFICHER i
        AFFICHER " = "
        AFFICHERCALCUL* j*i
        FIN_SI
        SINON
          DEBUT_SINON
          AFFICHER j
          AFFICHER " x "
          AFFICHER i
          AFFICHER " = "
          AFFICHERCALCUL* j*i
          j PREND_LA_VALEUR j + 1
          i PREND_LA_VALEUR 0
          FIN_SINON
      FIN_SI
      SINON
        DEBUT_SINON
        i PREND_LA_VALEUR 10
        FIN_SINON
    FIN_POUR
FIN_ALGORITHME
```
***Exercice 7***

La ville de tourcoing a un taux d'accroissement de 0.89%. 

Ecrire un algorithme donnant le nombre d'années nécessaire pour atteindre 120000 habitants.

On sait qu'en 2015 la ville comptait 96 809 habitants.

```bash 

FONCTIONS_UTILISEES


VARIABLES
nbAnnee EST_DU_TYPE NOMBRE
habitant EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME
habitant PREND_LA_VALEUR 96809
nbAnnee PREND_LA_VALEUR 1
TANT_QUE (habitant < 120000) FAIRE
	DEBUT_TANT_QUE
	
habitant PREND_LA_VALEUR habitant * (1+0.89/100)


SI (habitant < 120000) ALORS
	DEBUT_SI
	nbAnnee PREND_LA_VALEUR nbAnnee + 1
	FIN_SI


FIN_TANT_QUE
AFFICHER "le nombre d'années pour atteindre 120000 habitants est de "
AFFICHER nbAnnee 
AFFICHER " an(s)"

FIN_ALGORITHME
```


**Exercice 7**
Demander à un utilisateur de rentrer des notes sur 20 notes lui donner la plus grande note, la plus petite et la moyenne.

Par la suite faire un menu dans le choix de l'utilisateur.

```bash
FONCTIONS_UTILISEES

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
		moyenne PREND_LA_VALEUR moyenne
		AFFICHER* "la plus grande note est "
		AFFICHER* max
		AFFICHER* "la note la plus basse est "
		AFFICHER* min
		AFFICHER* "la moyenne des notes est "
		AFFICHER moyenne 
FIN_ALGORITHME
```