import java.util.Scanner;
public class Soustraction {
    public static int soustraction(int a , int b) {

        return a - b;
    }

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.println("rentrez le premier chiffre");
        int a = scanner.nextInt();
        System.out.println("rentrez le deuxieme chiffre");
        int b = scanner.nextInt();
        int result = soustraction(a , b);
        System.out.println("le résultat de la soustraction :"  + result);
        scanner.close();
    }
}
