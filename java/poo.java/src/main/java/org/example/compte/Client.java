package org.example.compte;

import java.util.List;

public class Client {
    private String nom ;
    private String prenom;
    private String identifiant;

    private int numeroTel;


    public Client(String nom , String prenom, String identifiant, int numeroTel){
        this.nom = nom;
        this.prenom = prenom;
        this.identifiant = identifiant;
        this.numeroTel = numeroTel;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getIdentifiant() {
        return identifiant;
    }

    public void setIdentifiant(String identifiant) {
        this.identifiant = identifiant;
    }

    public int getNumeroTel() {
        return numeroTel;
    }

    public void setNumeroTel(int numeroTel) {
        this.numeroTel = numeroTel;
    }


}
