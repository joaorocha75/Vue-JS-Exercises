<template>
  <div>
    <h1>Catalogo</h1>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4" v-for="bag in bagsStore.getBags" :key="bag.brand">
          <div class="card">
            <img :src="bag.image" class="card-img-top" alt="..." width="100" height="100">
            <div class="card-body">
              <h5>{{bag.brand}}</h5>
              <p>{{bag.title}}</p>
              <p>{{bag.price}}</p>
              <button @click="verMais(bag)">Ver Mais</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useBagsStore} from '../stores/counter.js'
  export default {
    data() {
      return {
        bagsStore: useBagsStore(),
      }
    },
    created () {
      try {
        this.bagsStore.fetchBags();
      } catch (error) {
        console.log(error);
      };
    },
    methods: {
      verMais(bag) {
        this.$router.push({name: 'bag', params: {brand: bag.brand}})
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>