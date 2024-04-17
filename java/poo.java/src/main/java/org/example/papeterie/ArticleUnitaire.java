package org.example.papeterie;

public class ArticleUnitaire {
    private String reference;
    private String nom;
    private double prix;


    public ArticleUnitaire(String reference, String nom , double prix){
        this.reference = reference;
        this.nom = nom;
        this.prix = prix;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public double getPrix() {
        return prix;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }
}
