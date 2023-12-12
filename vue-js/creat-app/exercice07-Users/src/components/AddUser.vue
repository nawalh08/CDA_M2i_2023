<script setup>
import { ref, defineEmits } from 'vue';

const name = ref('');
const email = ref('');
const emit = defineEmits(['add-user']);

function emitAddUser() {
  emit('add-user', name.value, email.value);
  name.value = '';
  email.value = '';
}



</script>

<template>
  <form action="#">
    <div class="d-flex flex-column ">

      <label class="text-center" for="">Name</label>
      <input type="text" placeholder="Saisir votre nom" class="form-control mx-2 my-2" v-model="name">


      <label class="text-center" for="email">Email</label>
      <input type="email" placeholder="Saisir une adresse e-mail" class="form-control mx-2 my-2" v-model="email"
        @keyup.enter="emitAddUser">


      <button class="btn btn-primary btn-sm mx-auto" @click="emitAddUser">Add User</button>
    </div>

  </form>
</template>

<style scoped></style>