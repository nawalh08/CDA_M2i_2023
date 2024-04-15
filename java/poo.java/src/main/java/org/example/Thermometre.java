package org.example;

public class Thermometre {

    private double temperature;

   public double temperatureBase;

    public Thermometre(double temperature){
        this.temperatureBase = temperature;
    }

    public double getTemperature() {
        return temperatureBase;
    }
    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }

    public void setTemperatureCelsius(double temp){
        this.temperatureBase = temp - 273.15;
    }
    public double getTemperatureCelsius() {
        return this.temperatureBase = temperatureBase + 273.15;
    }

    public double getTemperatureFahrenheit (){
       return this.temperatureBase = (temperatureBase - 273.15) * 5/9 + 32;
    }

    public void setTemperatureFahrenheit(double temp) {
        this.temperatureBase = (temp-32) * 5/9 +273.15;
    }

    @Override
    public String toString() {
        return ("Valeur " + this.temperatureBase);
    }


}

