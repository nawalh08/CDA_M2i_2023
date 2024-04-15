package org.example;

public class Plante {

    private String nom;
    private double hauteur;
    private String couleur;

    public Plante(String nom , double hauteur , String couleur){
        this.nom = nom;
        this.hauteur = hauteur;
        this.couleur = couleur;
    }

    // getters et setters


    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public double getHauteur() {
        return hauteur;
    }

    public void setHauteur(double hauteur) {
        this.hauteur = hauteur;
    }

    public String getCouleur() {
        return couleur;
    }

    public void setCouleur(String couleur) {
        this.couleur = couleur;
    }

    public void afficher() {
        System.out.println("Nom : " + nom);
        System.out.println("Hauteur : " + hauteur);
        System.out.println("Couleur des feuilles : " + couleur);
    }
}
