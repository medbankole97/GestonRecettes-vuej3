<template>
  
  <body>
    <div class="container">
    <h2>Ajouter une Recette</h2>
    <form @submit.prevent="addRecette">
      <div class="mt-5">
        <label for="title" class="form-label">Titre</label>
        <input type="text" id="title" v-model="recette.title" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="ingredients" class="form-label">Ingrédients</label>
        <textarea id="ingredients" v-model="recette.ingredients" class="form-control" required></textarea>
      </div>
      <div class="mb-3">
        <label for="type" class="form-label">Type</label>
        <select id="type" v-model="recette.type" class="form-select" required>
          <option value="entrée">Entrée</option>
          <option value="plat">Plat</option>
          <option value="dessert">Dessert</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary me-2">Ajouter</button>
      <RouterLink to="/list" class="btn btn-primary">Voir les Recettes</RouterLink>
    </form>
  </div>
  </body>
</template>

<script setup>
import { ref } from 'vue';
import { useRecettesStore } from '../stores/recettesStore';

const recette = ref({
  id: Date.now(),
  title: '',
  ingredients: '',
  type: ''
});

const recettesStore = useRecettesStore();

function addRecette() {
  recettesStore.addRecette({ ...recette.value });
  recette.value = { id: Date.now(), title: '', ingredients: '', type: '' };
  router.push('/list');
}
</script>
<style scoped>
body{
  background-color: beige;
}
</style>