<template>
  <div class="container">
    <h2>Modifier la Recette</h2>
    <form @submit.prevent="updateRecette">
      <div class="mb-3">
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
      <button type="submit" class="btn btn-primary">Modifier</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRecettesStore } from '../stores/recettesStore';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const recettesStore = useRecettesStore();
const recette = ref({ id: null, title: '', ingredients: '', type: '' });

onMounted(() => {
  const recetteToEdit = recettesStore.recettes.find(r => r.id === parseInt(route.params.id));
  if (recetteToEdit) {
    recette.value = { ...recetteToEdit };
  }
});

function updateRecette() {
  recettesStore.updateRecette(recette.value);
  router.push('/list');
}
</script>
