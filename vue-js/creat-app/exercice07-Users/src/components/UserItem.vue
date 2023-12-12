<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  userName: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

</script>

<template>
  <li class="d-flex flex-row justify-content-between my-2">
    <div>
      {{ userName }}
      {{ email}}
    </div>
    <div>
      <button class="btn btn-danger mx-2" @click="$emit('remove-user', index)">Remove</button>
    </div>
  </li>
</template>

<style scoped></style>
