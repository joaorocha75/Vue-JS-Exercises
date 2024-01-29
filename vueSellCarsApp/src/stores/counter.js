import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as api from '../api/api.js'

const CAR_API_URL = 'https://carswap-api.vercel.app'

export const useCarStore = defineStore('carros', {
  state: () => ({
    carros: [],
    carro: {},
    carrinho: [],
    carrosComprados: [],
  }),
  getters: {
    getCarros: (state) => state.carros,
    getCarro: (state) => state.carro,
    getCarrinho: (state) => state.carrinho,
    getTotal: (state) => {
      return state.carrinho.reduce((acc, carro) => acc + carro.price, 0)
    }
  },
  actions: {
    async fetchCarros() {
      try {
        const data = await api.get(CAR_API_URL, 'ads')
        this.carros = data
      } catch (error) {
        console.error('Error fetching cars', error);
      }
    },
    async fetchCarro(id) {
      try {
        const data = await api.get(CAR_API_URL, `ads/${id}`)
        this.carro = data
      } catch (error) {
        console.error('Error fetching car', error);
      }
    },
    adicionarAoCarrinho(id){
      const carro = this.carros.find((carro) => carro.id === id)
      this.carrinho.push(carro)
      localStorage.setItem('carrinho', JSON.stringify(this.carrinho))
    },
    removerDoCarrinho(id){
      this.carrinho = this.carrinho.filter((carro) => carro.id !== id)
      localStorage.setItem('carrinho', JSON.stringify(this.carrinho))
    },
    toogleCarrinho(id) {
      if(this.carrinho.find(carro => carro.id === id)) {
        this.carrinho = this.carrinho.filter((carro) => carro.id !== id)
      } else {
        this.carrinho.push(id)
      }
    },
    checkOut() {
      this.carrosComprados.push({ carrinho: this.carrinho, data: new Date() });
      console.log(this.carros);
      //os carros que estão no carrinho são removidos do carros
      try {
        this.carros = this.carros.filter((carro) => !this.carrinho.some(c => c.id === carro.id));
      } catch (error) {
        console.error('Error fetching cars', error);
      }
      // Limpa o carrinho
      this.carrinho = [];
      console.log(this.carrosComprados);
    }
    
  },
})
