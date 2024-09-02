import { createRouter, createWebHistory } from 'vue-router';
import AddRecette from '../components/AddRecette.vue';
import ListRecettes from '../components/ListRecettes.vue';
import RecetteDetails from '../components/RecetteDetails.vue';
import EditRecette from '../components/EditRecette.vue';
import Home from '../components/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/list', component: ListRecettes },
  { path: '/add', component: AddRecette },
  { path: '/details/:id', component: RecetteDetails },
  { path: '/edit/:id', component: EditRecette }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
