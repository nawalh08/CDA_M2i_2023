package org.example.traiding;

public class Trader {
   private String name ;
   private String city;

   public Trader(String n , String c){
       this.name = n;
       this.city= c;
   }

    public String getName() {
        return name;
    }

    public String getCity() {
        return city;
    }

    public String toString(){
       return "trader: " + this.name + " in " + this.city;

    }
}
