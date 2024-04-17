package org.example.papeterie;

public class Facture {
    private static final int MAX_LIGNES = 10;

    private String numeroFacture;
    private String client;
    private String date;
//    private List<Lot> lignesAchat;
//
//    public Facture(String numeroFacture, String client, String date) {
//        this.numeroFacture = numeroFacture;
//        this.client = client;
//        this.date = date;
//        this.lignesAchat = new ArrayList<>();
//    }
//
//    // Méthode pour ajouter une ligne d'achat à la facture
//    public void ajouterLigne(ArticleUnitaire article, int quantite) {
//        lignesAchat.add(new Lot(article, quantite, 0));
//    }
//
//    // Méthode pour calculer le prix total de la facture
//    public double getPrixTotal() {
//        double prixTotal = 0;
//        for (Lot ligne : lignesAchat) {
//            double prixUnitaire = ligne.getArticle().getPrixUnitaire();
//            int quantite = ligne.getQuantite();
//            double pourcentageRemise = ligne.getPourcentage();
//            double prixLigne = prix * quantite * (1 - pourcentage / 100);
//            prixTotal += prixLigne;
//        }
//        return prixTotal;
    }

//}
