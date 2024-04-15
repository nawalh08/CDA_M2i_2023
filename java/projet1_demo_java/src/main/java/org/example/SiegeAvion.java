package org.example;
import java.util.Scanner;

public class SiegeAvion {

    private static char[][] seats; // tableau pour stocker les sièges

    public static void main(String[] args) {
        initializeSeats(5, 10); // Initialiser les sièges du théâtre avec 5 rangées et 10 sièges par rangée
        displaySeats(); // Afficher les sièges disponibles

        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Choisissez un siège (format: rangée colonne) ou entrez 'q' pour quitter : ");
            String input = scanner.nextLine();

            if (input.equals("q")) {
                System.out.println("Au revoir !");
                break;
            }

            String[] parts = input.split(" ");
            if (parts.length != 2) {
                System.out.println("Format incorrect. Veuillez entrer le numéro de rangée suivi du numéro de siège.");
                continue;
            }

            try {
                int row = Integer.parseInt(parts[0]) - 1; // Les rangées commencent à partir de 1
                int seat = Integer.parseInt(parts[1]) - 1; // Les sièges commencent à partir de 1

                if (row < 0 || row >= seats.length || seat < 0 || seat >= seats[0].length) {
                    System.out.println("Siège invalide. Veuillez choisir un siège valide.");
                    continue;
                }

                if (seats[row][seat] == 'X') {
                    System.out.println("Désolé, ce siège est déjà pris. Veuillez choisir un autre siège.");
                } else {
                    seats[row][seat] = 'X'; // Mettre à jour le siège comme étant pris
                    System.out.println("Siège réservé avec succès !");
                    displaySeats(); // Afficher les sièges mis à jour
                }
            } catch (NumberFormatException e) {
                System.out.println("Format incorrect. Veuillez entrer des nombres entiers pour la rangée et le siège.");
            }
        }

        scanner.close();
    }

    private static void initializeSeats(int rows, int seatsPerRow) {
        seats = new char[rows][seatsPerRow];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < seatsPerRow; j++) {
                seats[i][j] = 'O'; // 'O' pour un siège disponible, 'X' pour un siège pris
            }
        }
    }

    private static void displaySeats() {
        System.out.println("Voici le plan des sièges :");
        for (int i = 0; i < seats.length; i++) {
            for (int j = 0; j < seats[0].length; j++) {
                System.out.print(seats[i][j] + " ");
            }
            System.out.println();
        }
        System.out.println();
    }
}