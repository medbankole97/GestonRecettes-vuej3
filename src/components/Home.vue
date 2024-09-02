<template>
  <div class="homepage bg-light">
    <div class="container text-center py-5">
      <h1 class="display-4 mt-5">Bienvenue dans l'App de Gestion des Recettes</h1>
      <p class="lead mb-4">Découvrez, ajoutez et gérez vos recettes de cuisine préférées avec simplicité.</p>
      <div class="d-flex justify-content-center">
        <RouterLink to="/list" class="btn btn-primary btn-lg me-3">Voir les Recettes</RouterLink>
        <RouterLink to="/add" class="btn btn-secondary btn-lg">Ajouter une Recette</RouterLink>
      </div>
    </div>

    <div class="bg-info text-white text-center py-4">
      <h2 class="mb-3">Pourquoi utiliser notre application ?</h2>
      <p class="mb-4">Notre application vous permet de gérer toutes vos recettes facilement et rapidement, avec des fonctionnalités de recherche et de filtre pour trouver ce que vous cherchez en un rien de temps.</p>
    </div>

   
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
.homepage {
  background-image: url('@/assets/background.jpg'); 
  background-size: cover;
  background-position: center;
  color: #333;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #4e555b;
}

.bg-info {
  background-color: #17a2b8 !important;
}

.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
