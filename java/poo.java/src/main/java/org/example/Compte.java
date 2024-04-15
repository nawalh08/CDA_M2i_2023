package org.example;

import java.util.List;

public abstract class Compte  {
    private double solde;
    private String client;
    private List<Operation> operation;

    public Compte(double solde, String client, List<Operation> operation ){

        this.solde = solde;
        this.client = client;
        this.operation = operation;
    }

    public double getSolde() {
        return solde;
    }

    public void setSolde(double solde) {
        this.solde = solde;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public List<Operation> getOperation() {
        return operation;
    }

    public void setOperation(List<Operation> operation) {
        this.operation = operation;
    }
}
