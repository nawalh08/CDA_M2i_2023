package org.example.traiding;
import java.util.*;
import java.util.stream.Collector;
import java.util.stream.Collectors;
public class Main {
    public static void main(String[] args){
        Trader raoul = new Trader("Raoul", "Cambridge");
        Trader mario = new Trader("Mario", "Milan");
        Trader alan = new Trader("Alan", "Cambridge");
        Trader brian = new Trader("Brian", "Cambridge");
        List<Transaction> transactions = Arrays.asList(
                new Transaction(brian, 2011, 400),
                new Transaction(brian, 2012, 300),
                new Transaction(raoul, 2012, 1000),
                new Transaction(raoul, 2011, 410),
                new Transaction(mario, 2012, 710),
                new Transaction(mario, 2012, 700),
                new Transaction(alan, 2012, 950)
        );
        // question 1 : Trouvez toutes les transactions en 2011 et les trier par valeur
        // (petite à élevée) stocker ces données dans une liste de
        // transactions.

        List<Transaction> transactions2011Sorted = transactions.stream()
                .filter(transaction -> transaction.getYear() == 2011)
                .sorted(Comparator.comparingInt(Transaction::getValue))
                .toList();
        transactions2011Sorted.stream().forEach(System.out::println);

        // question 2 :  Quelles sont toutes les villes uniques où les traders travaillent :
        // stocker ses données dans une liste de villes (chaîne de caractères).
        // 2 possibilités (dont une en utilisant les Set)

        List<String> uniqueCities = transactions.stream()
                .map(transaction -> transaction.getTrader().getCity())
                .distinct()
                .toList();
        uniqueCities.stream().forEach(System.out::println);

        //question 3 : En vous basant, toujours uniquement sur les transactions, renvoyez
        // une chaîne de noms de tous les traders triés par ordre
        // alphabétique


        String traderNames = transactions.stream()
                .map(transaction -> transaction.getTrader().getName())
                .distinct()
                .sorted()
                .collect(Collectors.joining(", "));

        System.out.println();

    }



}
