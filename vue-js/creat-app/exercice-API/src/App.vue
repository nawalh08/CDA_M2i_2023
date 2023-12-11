<script setup>
import { ref, watchEffect } from "vue"

let disney = ref(null);
let id = ref("18")

watchEffect(async () => {
  const response = await fetch(`https://api.disneyapi.dev/character/${id.value}`)

  disney.value = await response.json();
  console.log(disney.value)
})

</script>

<template>
  <div class="container">

    <input @keyup.enter="id = $event.target.value" placeholder="Saisir l'id ...">


    <div v-if="disney">
      <h2> l'id est : {{ disney.data._id }}</h2>
      <h2> {{ disney.info.count }}</h2>
      <img class="image" :src=disney.data.imageUrl alt="image-disney">

    </div>
  </div>
</template>

<style scoped>
* {
  font-family: Georgia, 'Times New Roman', Times, serif;
}

html,
body {
  margin: 0px;
}
.image {
  border-radius: 10px;
}

.container {
  border: 0.2px solid rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 10px 10px 10px 10px rgb(197, 197, 197);

}
input {
  background-color: rgb(221, 212, 212);
  padding: 6px 26px;
  margin: 2px;
  border-radius: 5px;
}
</style>
