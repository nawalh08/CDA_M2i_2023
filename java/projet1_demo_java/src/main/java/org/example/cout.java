package org.example;

import java.util.Scanner;

public class cout {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        double prix_bonbon;
        System.out.print("Prix d'un bonbon? ");
        prix_bonbon = sc.nextDouble();
        double nombre_bonbon;
        System.out.print("nombre de bonbons ? ");
        nombre_bonbon = sc.nextDouble();
        double prix = prix_bonbon * nombre_bonbon;


        System.out.println("==> Le coût est de  " + prix + " €");
        }
    }

