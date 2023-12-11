<template>
  <div>
    <h1>Bem-vindo {{username}}</h1>

    <table border="2">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Foto</th>
          <th>Descrição</th>
          <th>Info</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cidade in cidades">
          <td>{{cidade.nome}}</td>
          <td><img :src="cidade.foto" width="200" height="100"></td>
          <td>{{cidade.descricao}}</td>
          <td><router-link :to="{name: 'city', params: {nome: cidade.nome}}">Info</router-link></td>
        </tr>
      </tbody>
    </table>
    <button @click="filtro()">Filtrar cidades favoritas</button>
  </div>
</template>

<script>
import {store} from '../stores/counter.js'
  export default {
    data() {
      return {
        store: store(),
        username: localStorage.getItem('user'),
        cidades: [],
        filtroFav: false,
      }
    },
    created () {
      this.cidades = this.store.getCidades;
    },
    methods: {
      filtro() {
        this.filtroFav = !this.filtroFav;
        if (this.filtroFav) {
          this.cidades = this.store.getFavorites(this.username);
        }
        else {
          this.cidades = this.store.getCidades;
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>