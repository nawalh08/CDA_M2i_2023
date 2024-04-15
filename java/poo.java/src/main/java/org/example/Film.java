package org.example;

public class Film {
    private String titre;
    private String realisateur;
    private String dateSortie;
    private String genre;


//    public Film() {
//        this("La haine", "Mathieu Kassovitz", "1995-05-31", "Drame");
//
//    }


    // constructeur
    public Film(String titre, String realisateur, String dateSortie, String genre) {
        this.titre = titre;
        this.realisateur = realisateur;
        this.dateSortie = dateSortie;
        this.genre = genre;
    }

    //getter et setter
    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getRealisateur() {
        return realisateur;
    }

    public void setRealisateur(String realisateur)
    {
        this.realisateur = realisateur;
    }

    public String getDateSortie()
    {
        return dateSortie;
    }

    public void setDateSortie(String dateSortie)
    {
        this.dateSortie = dateSortie;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String toString() {
        return "Film {" +
                " titre =" + titre  +
                ", realisateur =  " + realisateur +
                ", dateSortie = " + dateSortie +
                ", genre = " + genre +
                '}';
    }
}


