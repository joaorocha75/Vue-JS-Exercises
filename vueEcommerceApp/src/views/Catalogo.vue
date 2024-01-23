<template>
  <div>
    <h1>Catálogo</h1>
    <input type="text" v-model="search" @input="filterByName" placeholder="Pesquisar por nome">
    <br>
    <br>
    <button @click="sortProdutos">Ordenar A-Z</button>
    <br>
    <br>
    <!-- faz-me um router link para ir para a pagina do carrinho -->
    <button>
      <router-link :to="{ name: 'carrinho' }">Carrinho</router-link>
    </button>
    <br>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="produto in filteredProdutos" :key="produto._id">
          <div class="card">
            <img :src="produto.image" class="card-img-top" alt="..." style="width:200px; height:150px;"/>
            <div class="card-body">
              <h5 class="card-title">{{ produto.title }}</h5>
              <p class="card-text">€ {{ produto.price }}</p>
              <button class="btn btn-primary" @click="verMais(produto)">Ver mais</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useProductsStore} from '../stores/counter.js'
  export default {
    data() {
      return {
        produtoStore: useProductsStore(),
        search: '',
      }
    },
    created() {
        try {
            this.produtoStore.fetchProdutos();
        } catch (error) {
            alert(error.message);
        }
    },
    methods: {
        verMais(produto) {
            this.$router.push({ name: 'produto', params: { id: produto.id } });
        },
        filterByName() {
          this.produtoStore.filterByName(this.search);
        },
    },
    computed: {
      filteredProdutos() {
      const searchTerm = this.search.toLowerCase();
      return this.produtoStore.getProdutos.filter(produto =>
        produto.title.toLowerCase().includes(searchTerm)
      );
    },
    sortProdutos() {
      return this.produtoStore.getProdutos.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    },
    }
  }
</script>

<style lang="scss" scoped>

</style>