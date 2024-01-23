import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as api from '../api/api.js'

const Products_API_URL = 'https://fakestore.iotechpis.com'

export const useProductsStore = defineStore('produtos', {
  state: () => ({
    produtos: [],
    produto:{},
    carrinho: [],
  }),
  getters: {
    getProdutos: (state) => state.produtos,
    getProduto: (state) => state.produto,
    getCarrinho: (state) => state.carrinho,
    //preço total
    getTotal: (state) => {
      return state.carrinho.reduce((total, produto) => total + produto.price, 0)
    },
  },
  actions: {
    async fetchProdutos() {
      try{
        const data = await api.get(Products_API_URL, 'products')
        this.produtos= data
      } catch(error) {
        console.error("Error in store fetching produtos", error);
        throw error;
      }
    },
    async fetchProduto(id) {
      try{
        const data = await api.get(Products_API_URL, `products/${id}`)
        this.produto= data
      } catch(error) {
        console.error("Error in store fetching produto", error);
        throw error;
      }
    },
    adicionarAoCarrinho(id){
      const produto = this.produtos.find((produto) => produto.id === id)
      this.carrinho.push(produto)
      localStorage.setItem('carrinho', JSON.stringify(this.carrinho))
    },
    removerDoCarrinho(id){
      this.carrinho = this.carrinho.filter((produto) => produto.id !== id)
      localStorage.setItem('carrinho', JSON.stringify(this.carrinho))
    },
  
  }
})