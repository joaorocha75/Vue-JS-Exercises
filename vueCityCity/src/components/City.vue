<template>
    <div>
        <h1>{{cidade.nome}}</h1>
        <img :src="cidade.foto" width="200" height="100">
        <p>{{cidade.descricao}}</p>

        <button @click="this.store.adicionarFavorito(cidade.nome, userLogado)">
            <p v-if="this.store.isFavorito(cidade.nome, userLogado)">
                Remover favorito
            </p>
            <p v-else>Adicionar favorito</p>
        </button>

        <!-- button para dar back na página -->
        <button @click="$router.go(-1)">Voltar</button>
    </div>
</template>

<script>
import {store} from '../stores/counter.js'
    export default {
        data() {
            return {
                store: store(),
                userLogado: localStorage.getItem('user'),
                cidade: {},          
            }
        },
        created () {
            this.cidade = this.store.getCidadeByName(this.$route.params.nome);
        },
    }
</script>

<style lang="scss" scoped>

</style>