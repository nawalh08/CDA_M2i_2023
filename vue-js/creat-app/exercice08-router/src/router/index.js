import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import DetailsClient from '../views/DetailsClient.vue';



const router = createRouter({
  history : createWebHistory(),
  routes : [
    {path: '/', component : Home},
    {path: '/client/:clientID' , component : DetailsClient},
  ]
});
export default router;