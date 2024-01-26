<template>
  <div>
    <h1>Catalogo</h1>
    <input type="text" v-model="search" @input="filterByName" placeholder="Pesquisar por nome">
    <br>
    <button @click="sortCarros">Ordenar por preço + -</button>
    <br>
    <button>
      <router-link :to="{ name: 'carrinho' }">Ver Carrinho</router-link>
    </button>
    <br><br>
    <div v-for="carro in filteredCars" :key="carro.id">
      <img :src="carro.image" style="width:100px; height:100px" />
      <h2>Marca:{{ carro.brand }}</h2>
      <p>Modelo:{{ carro.model }}</p>
      <p>Ano:{{ carro.year }}</p>
      <p>Preço:{{ carro.price }}€</p>
      <p>Cidade: {{ carro.city }}</p>
      <router-link :to="{ name: 'carro', params: { id: carro.id } }">Ver mais</router-link>
      <br>
      <button @click="addCarrinho(carro)">
        {{ inCarrinho(carro) ? 'Remover do Carrinho' : 'Adicionar ao Carrinho' }}
      </button>
    </div>
  </div>
</template>

<script>
import { useCarStore } from '../stores/counter.js';

  export default {
    data() {
      return {
        carStore: useCarStore(),
        search:'',
      }
    },
    created () {
      try {
        this.carStore.fetchCarros();
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      filterByName() {
        this.carStore.filterByName(this.search);
      },
      inCarrinho(carro) {
        return this.carStore.carrinho.includes(carro);
      },
      addCarrinho(carro) {
        this.carStore.toogleCarrinho(carro);
      }
    },
    computed: {
      filteredCars() {
        const searchTerm = this.search.toLocaleLowerCase();
        return this.carStore.getCarros.filter(carro => 
          carro.brand.toLowerCase().includes(searchTerm));
      },
      sortCarros() {
        return this.carStore.getCarros.sort((a, b) => {
          return b.price - a.price
        });
      },
      carrinho() {
        return this.carStore.getCarrinho;
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
