public class Exercices_java {

    // Exercice nom complet
    public static String nomComplet(String prenom, String nom) {
        return prenom + " " + nom;
    }

    public static void main(String[] args) {
        String prenom = "John";
        String nom = "Doe";
        String resultat = nomComplet(prenom, nom);
        System.out.println(resultat);
    }
}