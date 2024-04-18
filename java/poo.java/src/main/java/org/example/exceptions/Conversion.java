package org.example.exceptions;
import java.util.Scanner;

public class Conversion {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean conversionReussie = false;

        while (!conversionReussie) {
            System.out.println("Veuillez saisir un entier : ");
            String input = scanner.nextLine();

            try {
                int entier = Integer.parseInt(input);
                System.out.println("Conversion réussie : " + entier);
                conversionReussie = true;
            } catch (NumberFormatException e) {
                System.out.println("Erreur : La saisie n'est pas un entier valide. Veuillez réessayer.");
            }
        }

        scanner.close();
    }
}
