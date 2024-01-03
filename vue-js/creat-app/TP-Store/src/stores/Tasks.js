import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
  const task = ref(0)
 
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
