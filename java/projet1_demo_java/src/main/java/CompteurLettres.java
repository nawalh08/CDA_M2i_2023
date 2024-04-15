public class CompteurLettres {

    public static int compterLettreA(String chaine) {
        //initialisation du compteur à 0
        int compteur = 0;
        chaine = chaine.toLowerCase();
        // On fait la boucle for pour compter
        // condition si il y a la lettre a dans la chaine increment le compteur + 1
        for (int i = 0; i < chaine.length(); i++) {
            if (chaine.charAt(i) == 'a') { // Si la chaine de caractere et égale à "a" alors on compte
                compteur++; // On incrémente
            }
        }
        return compteur;
    }

    public static void main(String[] args) {
        System.out.println(compterLettreA("C'est le b-Aa ba")); // affichera 2 car deux lettre dans le mot
        System.out.println(compterLettreA("mixer")); // affichera 0 car aucune lettre a dans le mot
    }

}

