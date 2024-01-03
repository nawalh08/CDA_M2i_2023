<script setup>
const { clients } = inject('clients'); 
import { inject } from 'vue'; 
</script>

<template>
    <p>Cliquez sur une carte affiche le nom en dessous</p>
    <p>Cliquez sur "Plus de détails" redirige vers une nouvelle page qui affiche les informations du client</p>
    <ul>
        <div class="card shadow p-3 mb-5 bg-body-tertiary rounded " v-for="(name) in clients">
            <div class="card-body">

                <!-- On récupére les données voulu dans notre tableau Clients , -->
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-success p-2 text-dark bg-opacity-10 fs-4 ">{{ name.name }}</li>
                    <li class="list-group-item bg-success p-2 text-dark bg-opacity-10 ">{{ name.email }}</li>
                    <li class="list-group-item bg-success p-2 text-dark bg-opacity-10">{{ name.phone }}</li>


                   <!--On met en place un bouton qui nous ramène sur la page /client/${name.id}. On met un routerLink pour accéder directement à notre page en cliquant sur le bouton-->
                        <RouterLink :to="`/client/${name.id}`">
                            <button class="btn btn-primary mt-2">Cliquez pour plus de détails </button>
                        </RouterLink>
                    

                </ul>
            </div>
        </div>
    </ul>
</template>

<style scoped></style>