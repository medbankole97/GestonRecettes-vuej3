<template>
  <div class="page-background container bg-color mt-5">
    <RouterLink
      class="list text-decoration-none text-white me-5 fw-bold"
      to="/add"
    >
      <button
        class="clr btn text-white mt-5 mb-4 fw-bold"
        v-if="affichebtn"
        @click="btnfiche"
      >
        Ajouter une recette
      </button>
    </RouterLink>
    <div class="table-responsive">
      <table class="table table-striped table-bordered border-black">
        <thead class="table-success">
          <tr>
            <th>id</th>
            <th>Titre</th>
            <th>Ingrédients</th>
            <th>Type de recette</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(recette, index) in store.recettes" :key="recette.id">
            <td>{{ recette.id }}</td>
            <td>{{ recette.title }}</td>
            <td>{{ recette.ingredients }}</td>
            <td>{{ recette.type }}</td>
            <td class="text-center">
              <button class="btn btn-sm" @click="openModal(recette)">
                <i class="fa-solid fa-eye" style="color: #4596d3; font-size: 25px"></i>
              </button>
              <RouterLink :to="{ path: `/edit/${recette.id}` }">
                <button class="btn btn-sm">
                  <i class="fa-solid fa-pen-to-square" style="color: #1ac163; font-size: 25px"></i>
                </button>
              </RouterLink>
              <button class="btn btn-sm" @click="destroyRecette(recette.id)">
                <i class="fa-solid fa-trash" style="color: #e30d0d; font-size: 25px"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-body">
        <h3>Détails de la Recette</h3>
        <p><strong>Titre :</strong> {{ selectedRecette?.title }}</p>
        <p><strong>Ingrédients :</strong> {{ selectedRecette?.ingredients }}</p>
        <p><strong>Type :</strong> {{ selectedRecette?.type }}</p>
      </div>
      <button class="btn btn-danger" @click="closeModal">Fermer</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRecettesStore } from '../stores/recettesStore';  // Ajustez ce chemin si nécessaire

const store = useRecettesStore();
const affichebtn = ref(true);
const isModalVisible = ref(false);
const selectedRecette = ref(null);

const btnfiche = () => {
  affichebtn.value = false;
};

const openModal = (recette) => {
  selectedRecette.value = recette;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

const destroyRecette = (id) => {
  store.deleteRecette(id);
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: fit-content;
  position: relative;
}

.modal-body {
  padding: 20px;
}

.clr {
  background-color: rgb(77, 109, 149);
}



</style>
