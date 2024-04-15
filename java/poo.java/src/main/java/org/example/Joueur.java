package org.example;

public class Joueur {

    private String nom;
    private int niveau;
    private int pointExperience;


    public Joueur(String nom , int niveau , int pointExperience ){
        this.nom = nom ;
        this.niveau = niveau;
        this.pointExperience = pointExperience;

    }

    //getter_setter
    public String getNom() {
        return  nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public int getNiveau() {
        return niveau;
    }

    public void setNiveau(int niveau) {
        this.niveau = niveau;
    }

    public int getPointExperience() {
        return pointExperience;
    }

    public void setPointExperience(int pointExperience) {
        this.pointExperience = pointExperience;
    }





    public void Quete() {
        pointExperience += 10;
        if (pointExperience > 100) {
            niveau++;
            pointExperience = 0; // Réinitialisation des points d'expérience
        }
    }

}
