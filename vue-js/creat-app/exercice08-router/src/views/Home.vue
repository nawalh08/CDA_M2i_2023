<script setup>
const { clients } = inject('clients');
import { inject } from 'vue';
console.table(clients)
console.log(clients);
</script>

<template>
    <p>Cliquez sur une carte affiche le nom en dessous</p>
    <p>Cliquez sur "Plus de détails" redirige vers une nouvelle page qui affiche les informations du client</p>
    <ul>
        <div class="card" width="150px" v-for="(name) in clients">

            <h3 card-title>{{ name.name }}</h3>
            <h3 card-title>{{ name.email }}</h3>
            <h3 card-title>{{ name.phone }}</h3>

            <RouterLink :to="`/client/${name.id}`">
                <button class="btn btn-primary">Cliquez pour plus de détails </button>
            </RouterLink>
        </div>
    </ul>
</template>

<style scoped></style>