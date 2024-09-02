<template>
  <div class="container">
    <h2>{{ recette.title }}</h2>
    <p><strong>Ingrédients:</strong> {{ recette.ingredients }}</p>
    <p><strong>Type:</strong> {{ recette.type }}</p>
    <button @click="editRecette" class="btn btn-primary">Modifier</button>
    <button @click="deleteRecette" class="btn btn-danger">Supprimer</button>
  </div>
</template>

<script setup>
import { useRecettesStore } from '@/stores/recettesStore';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const recettesStore = useRecettesStore();
const recette = ref(recettesStore.recettes.find(r => r.id === parseInt(route.params.id)));

function editRecette() {
  router.push(`/edit/${recette.value.id}`);
}

function deleteRecette() {
  recettesStore.deleteRecette(recette.value.id);
  router.push('/');
}
</script>
