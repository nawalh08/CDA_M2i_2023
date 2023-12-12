<script setup>
import {ref} from 'vue';
import AddTodo from './AddTodo.vue';
import TodoItem from './TodoItem.vue';

const todos = ref([]);
let newText = new ref('');

const addTodo = newTodoText => {
  todos.value.push({text: newTodoText})
}

const removeTodo = index => {
  todos.value.splice(index,1)
}

function editTodo(index) {
  newText.value = prompt("Saisir la nouvelle valeur")
  
  todos.value[index].text =newText.value
};
</script>

<template>
  

<div>
  <AddTodo @add-todo="addTodo" />
  <h3 v-if="todos.length" class="mt-4"> Liste des tâches : </h3>
  <ul>
    <TodoItem v-for="(todo,index) in todos"
    :key="index"
    :todo="todo"
    :index="index"
    @remove-todo="removeTodo"
    @edit-todo="editTodo"/>
  </ul>

</div>


</template>

<style scoped>

</style>
