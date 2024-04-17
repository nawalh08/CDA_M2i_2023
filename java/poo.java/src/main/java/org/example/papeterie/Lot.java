package org.example.papeterie;

public class Lot extends Article {

    private String article;
    private double quantite;
    private double pourcentage;


    public Lot(String reference,String nom , double prix,  String article, double quantite , double pourcentage){
    super(reference);
        this.article = article;
        this.quantite = quantite;
        this.pourcentage = pourcentage;
    }
}
