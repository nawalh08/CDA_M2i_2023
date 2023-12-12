<script setup>
import {ref} from 'vue';
import AddUser from './AddUser.vue';
import UserItem from './UserItem.vue';

const users = ref([]);


const addUser = (name, email) => {
  users.value.push({name: name, email:email})
}

const removeUser = index => {
  users.value.splice(index,1)
}
</script>

<template>
  

<div>
 
  <AddUser @add-user="addUser" />
  <table>
    <ul>
    <UserItem v-for="(user,index) in users"
    :key="index"
    :user-name="user.name"
    :email ="user.email"
    :index="index"
    @remove-user="removeUser"/>
  </ul>
  </table>
  

</div>


</template>

<style scoped>

</style>
