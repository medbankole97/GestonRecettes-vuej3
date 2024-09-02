import { defineStore } from 'pinia';

export const useRecettesStore = defineStore('recettes', {
  state: () => ({
    recettes: [
      {
        id: 1,
        title: "Monplat",
        ingredients: "oignons, citron, épices",
        type: "plat"
      },
      {
        id: 2,
        title: "Tiramisu",
        ingredients: "mascarpone, café, biscuits, cacao",
        type: "dessert"
      },
      {
        id: 3,
        title: "Salade Caesar",
        ingredients: "laitue, poulet grillé, parmesan, croûtons, sauce Caesar",
        type: "entrée"
      },
      {
        id: 4,
        title: "Soupe à l'oignon",
        ingredients: "oignons, bouillon de bœuf, pain, fromage",
        type: "entrée"
      },
      {
        id: 5,
        title: "Quiche Lorraine",
        ingredients: "pâte brisée, lardons, œufs, crème, fromage",
        type: "plat"
      }
    ],
    
  }),
  actions: {
    addRecette(recette) {
      this.recettes.push(recette);
    },
    updateRecette(updatedRecette) {
      const index = this.recettes.findIndex(r => r.id === updatedRecette.id);
      if (index !== -1) {
        this.recettes[index] = updatedRecette;
      }
    },
    deleteRecette(id) {
      this.recettes = this.recettes.filter(r => r.id !== id);
    }
  }
});
