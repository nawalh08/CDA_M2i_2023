<script setup>
import {computed , ref , reactive} from 'vue'

let message = "Vous avez"
 let personne =  {firstName: "Nawel", lastName : "hammoudi", dateNaissance : "2010/12/08" }
 reactive(personne);
 console.log(personne);

function getAge(date) { 
        var diff = Date.now() - date.getTime();
        var age = new Date(diff); 
        return Math.abs(age.getUTCFullYear() - 1970);
    }
    console.log(getAge(new Date(1990, 12, 6))); //Date(année, mois, jour)   

</script>

<template>
  
  <div>
    
    <button >Modifier naissance</button>
    
  </div>

  
</template>

<style scoped>

</style>
