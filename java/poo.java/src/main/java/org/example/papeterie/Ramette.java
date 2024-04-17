package org.example.papeterie;

public class Ramette extends ArticleUnitaire {
    private String reference;
    private String nom;
    private double prix;
    private double grammage;

    public Ramette(String reference, String nom, double prix , double grammage){
        super(reference, nom , prix);
        this.grammage = grammage;
    }

}
