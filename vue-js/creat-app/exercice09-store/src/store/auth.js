import {ref, computed} from 'vue';
import {defineStore} from 'pinia'

export const authStore = defineStore('auth', ()=> {
  
  const user = ref(null);

  const isLogged = computed((gameId)=> games.value.find(g => g.id === gameId));

  function login(){
    
  }

  function logout(){
   
  }

return {games, gameForId, addGame, removeGame}

})