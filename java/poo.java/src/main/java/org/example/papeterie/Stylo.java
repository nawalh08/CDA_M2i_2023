package org.example.papeterie;

public class Stylo extends ArticleUnitaire {
    private String reference;
    private String nom ;
    private double prix;
    private String couleur;

    public Stylo(String reference, String nom, double prix , String couleur){
        super(reference, nom, prix);
        this.couleur = couleur;
    }

    public String getCouleur() {
        return couleur;
    }

}
