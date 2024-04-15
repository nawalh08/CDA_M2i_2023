package org.example;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Chaise chaise1 = new Chaise();
        System.out.println("Chaise 1: " + chaise1);

        // Instanciation d'une chaise avec le constructeur avec paramètres
        Chaise chaise2 = new Chaise(3, "Bambou", "Gris", 14.5);
        System.out.println("Chaise 2: " + chaise2);

        Film film1 = new Film("la haine", "Mathieu Kassovitz", "1995-05-31", "Drame");
        System.out.println(film1.toString());


        Joueur joueur1 = new Joueur("Alice", 1, 120);

        // Affichage des informations initiales du joueur
        System.out.println("Informations initiales du joueur : ");
        afficherInformationsJoueur(joueur1);

        // Simulation de l'accomplissement d'une quête
        joueur1.Quete();

        // Affichage des informations mises à jour du joueur après l'accomplissement de la quête
        System.out.println("\nInformations mises à jour après l'accomplissement de la quête : ");
        afficherInformationsJoueur(joueur1);



        Thermometre termo1 = new Thermometre(10);
        System.out.println(termo1.toString());
        System.out.println(termo1.getTemperatureCelsius());
        System.out.println(termo1.getTemperatureFahrenheit());
        Thermometre termo2 = new Thermometre(50);
        System.out.println(termo2.toString());
        System.out.println(termo2.getTemperatureCelsius());
        System.out.println(termo2.getTemperatureFahrenheit());


        // exercice plante

       Plante tulipe = new Plante( "tulipe" , 20 , "vert");
       tulipe.afficher();

    }


    private static void afficherInformationsJoueur(Joueur joueur) {        System.out.println("Nom du joueur : " + joueur.getNom());
        System.out.println("Niveau du joueur : " + joueur.getNiveau());
        System.out.println("Points d'expérience du joueur : " + joueur.getPointExperience());
    }




}







