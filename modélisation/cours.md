## Modélisation 

**Conception** 

On commence toujours par un MCD avec une shématisaion des entités et des relations. 

ensuite on fait le MLD ou cette fois-ci nos entités et nos relations deviennent des tables uniquement quand c'est des many to many (ex: table prof avec IDprof, nom.. et une autre table : cours ou on retrouve à l'intérieur coursID et la relation qu'on avait dans le MCD devient une table Prof-cours et à l'intérieur on retrouve les deux ID ).

Ensuite avant d'arriver à la base de données , on fini par le MPD qui lui reprend tout mais cette fois ci même les colonnes avec les types, savoir si c'est nullable ou non.... et cette fois ci avec obligatoirement un shémas. 



![exercice modelisation bdd](./asset/exercice-normalisation-BDD.PNG "Titre de l'image")

***Correction*** 

| Participant |
|-------------|
| id          |
| nom         |
| prénom      |
| email       |

| Evenement |
|-----------|
| id        |
| type      |
| date      |

|Lieu            |
|----------------|
| id             |
| salle          |


