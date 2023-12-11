import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const store = defineStore('store', {
  state: () => ({
    users: [
      { "id": 1, "username": 'dinis', "password": '12345', "favorites": [] },
      { "id": 2, "username": 'artur', "password": '12345', "favorites": [] },
      { "id": 3, "username": 'rita', "password": '12345', "favorites": [] },
    ],
    cities: [
      {
        nome: "Lisboa",
        foto: "https://cdn.visitportugal.com/sites/www.visitportugal.com/files/mediateca/TAP_PracaComercio_01e_CL-co.jpg",
        descricao: "Lisboa é uma cidade...",
      },
      {
        nome: "Porto",
        foto: "https://www.portugal-live.net/images/rotator/321-porto-a.jpg",
        descricao: "Porto é uma cidade...",
      },
      {
        nome: "Coimbra",
        foto: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Coimbra_e_o_rio_Mondego_%286167200429%29_%28cropped%29.jpg",
        descricao: "Coimbra é uma cidade...",
      },
    ],
  }),

  actions: {
    login(username,password) {
      const user = this.users.find(user => user.username === username && user.password === password)
      if (user) {
        localStorage.setItem('user', user.username)
        return true
      } else {
        return false
      }
    },
    isFavorito(cidade, userLogado) {
      const user = this.users.find((u) => u.username == userLogado);
      return user.favorites.find((c) => c.nome === cidade.nome);
    },
    adicionarFavorito(cidade, userLogado) {
      const user = this.users.find((u) => u.username == userLogado);
      if (!this.isFavorito(cidade, userLogado)) {
        user.favorites.push(cidade);
      } else {
        user.favorites = user.favorites.filter((c) => c.nome !== cidade.nome);
      }
    },
  },
  getters: {
    getCidades: (state) => {
      return state.cities
    },
    getCidadeByName: (state) => (nome) => {
      return state.cities.find(cidade => cidade.nome === nome)
    },
    getFavorites: (state) => (userLogado) => { 
      const user = state.users.find((u) => u.username == userLogado); 
      return state.cities.filter((c) => user.favorites.includes(c.nome)); 
    },
  }
})
