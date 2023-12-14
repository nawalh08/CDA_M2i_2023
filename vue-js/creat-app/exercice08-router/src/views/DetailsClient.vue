<script setup>
import { inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const {clients} = inject('clients');

const route = useRoute();
const router = useRouter();

const {clientID} = route.params

const clientFound = clients.value.find(c => c.id == clientID);

if(!clientFound){
  router.push('/not-found')
}

</script>

<template>
<h1>Details Clients</h1>

<div>
  <h3> {{ clientFound?.name }}</h3>
  <ul>
    <li>Id : {{ clientFound?.id }}</li>
    <li>Name : {{ clientFound?.name }}</li>
    <li>Email :{{ clientFound?.email }} </li>
    <li>Phone :{{ clientFound?.phone }} </li>
    <li>City :{{ clientFound?.city }} </li>
    <li> State :{{ clientFound?.state }} </li>
    <li>Country :{{ clientFound?.country }} </li>
    <li>Organization :{{ clientFound?.organization }} </li>
    <li>Job profile :{{ clientFound?.job }} </li>
    <li>additionalInfo :{{ clientFound?.additionalInfo }} </li>
  </ul>
</div>

<div>

  <RouterLink :to="`/`">
                <button class="btn btn-success">Go Back</button>
            </RouterLink>
    
</div>


</template>

<style scoped>

</style>