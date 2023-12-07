<script setup>
import { reactive, ref } from "vue";

let numbers = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


function addEntier() {
  numbers.value.push(numbers.lenght + 1);
}

function suppEntier() {
  numbers.value.pop();
}

function inverseNombre() {
  numbers.value.reverse();
}



</script>

<template>
  
  <div v-if="">
    <ul v-for="number in numbers">
      <li>{{ number }}</li>
    </ul>
  </div>
  <div>
    <button>Toggle liste </button>
    <button @click="addEntier">Ajouter élément </button>
    <button @click="suppEntier">Supprimer élément </button>
    <button @click="inverseNombre">inverser</button>

  </div>
</template>

<style scoped></style>
