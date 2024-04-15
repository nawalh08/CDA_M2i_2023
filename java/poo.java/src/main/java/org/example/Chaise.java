package org.example;

public class Chaise {
    private int nombreDePieds;
    private String materiaux;
    private String couleur;
    private double prix;

    public Chaise() {
        this(4, "chaîne", "Bleu" ,14.4);
    }
    public Chaise(int nombreDePieds, String materiaux, String couleur , double prix) {
        this.nombreDePieds = nombreDePieds;
        this.materiaux = materiaux;
        this.couleur = couleur;
        this.prix = prix;
    }

    public String toString() {
        return "Je suis une chaise à " + nombreDePieds + " pieds " +  " en " + materiaux + " de couleur " + couleur + " à un prix est de " + prix + ".";
    }

}
