package org.example;

import java.util.Scanner;
import java.util.Random;
public class batailNavale {

    private static final int BOARD_SIZE = 5;
    private static final int NUM_SHIPS = 3;

    private static char[][] userBoard = new char[BOARD_SIZE][BOARD_SIZE];
    private static char[][] computerBoard = new char[BOARD_SIZE][BOARD_SIZE];

    private static int userShipsRemaining = NUM_SHIPS;
    private static int computerShipsRemaining = NUM_SHIPS;

    public static void main(String[] args) {
        initializeBoards();

        placeShips(userBoard);
        placeShips(computerBoard);

        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        while (userShipsRemaining > 0 && computerShipsRemaining > 0) {
            // Tour du joueur
            System.out.println("Tour du joueur :");
            displayBoard(computerBoard);
            System.out.print("Entrez une ligne : ");
            int row = scanner.nextInt();
            System.out.print("Entrez une colonne : ");
            int col = scanner.nextInt();

            if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE) {
                System.out.println("Position invalide. Veuillez entrer des coordonnées valides.");
                continue;
            }

            if (computerBoard[row][col] == 'X') {
                System.out.println("Vous avez déjà attaqué cette position. Choisissez une autre position.");
                continue;
            }

            if (computerBoard[row][col] == 'S') {
                System.out.println("Touché !");
                computerBoard[row][col] = 'X';
                computerShipsRemaining--;
            } else {
                System.out.println("Dans l'eau !");
                computerBoard[row][col] = '-';
            }

            if (computerShipsRemaining == 0) {
                System.out.println("Félicitations ! Vous avez coulé tous les navires adverses. Vous avez gagné !");
                break;
            }

            // Tour de l'ordinateur
            System.out.println("\nTour de l'ordinateur :");
            row = random.nextInt(BOARD_SIZE);
            col = random.nextInt(BOARD_SIZE);

            if (userBoard[row][col] == 'S') {
                System.out.println("Touché !");
                userBoard[row][col] = 'X';
                userShipsRemaining--;
            } else {
                System.out.println("Dans l'eau !");
                userBoard[row][col] = '-';
            }

            if (userShipsRemaining == 0) {
                System.out.println("Désolé, tous vos navires ont été coulés. L'ordinateur a gagné.");
                break;
            }
        }

        scanner.close();
    }

    private static void initializeBoards() {
        for (int i = 0; i < BOARD_SIZE; i++) {
            for (int j = 0; j < BOARD_SIZE; j++) {
                userBoard[i][j] = '-';
                computerBoard[i][j] = '-';
            }
        }
    }

    private static void placeShips(char[][] board) {
        Random random = new Random();
        int shipsPlaced = 0;

        while (shipsPlaced < NUM_SHIPS) {
            int row = random.nextInt(BOARD_SIZE);
            int col = random.nextInt(BOARD_SIZE);

            if (board[row][col] != 'S') {
                board[row][col] = 'S'; // 'S' représente un navire
                shipsPlaced++;
            }
        }
    }

    private static void displayBoard(char[][] board) {
        System.out.println("  0 1 2 3 4");
        for (int i = 0; i < BOARD_SIZE; i++) {
            System.out.print(i + " ");
            for (int j = 0; j < BOARD_SIZE; j++) {
                System.out.print(board[i][j] + " ");
            }
            System.out.println();
        }
        System.out.println();
    }
}
