<template>
    <div>
        <h1>Carrinho</h1>
        <div v-for="carro in carrinho" :key="carro.id">
            <img :src="carro.image" style="width:100px; height:100px" />
            <h2>Marca:{{ carro.brand }}</h2>
            <p>Modelo:{{ carro.model }}</p>
            <p>Preço:{{ carro.price }}€</p>
            <button @click="removerDoCarrinho(carro.id)">Remover Item</button>
        </div>
        <br>
        <p>Total: {{ total }}€</p>
        <br>
        <button>
            <router-link :to="{ name: 'catalogo' }">Voltar</router-link>
        </button>
    </div>
</template>

<script>
import { useCarStore } from '../stores/counter.js';

export default {
    data() {
        return {
            carrinho: [],
            total: 0,
        };
    },
    computed: {
        carStore() {
            return useCarStore();
        }
    },
    created() {
        this.carrinho = this.carStore.getCarrinho;
        this.total = this.carStore.getTotal;
    },
    methods: {
        removerDoCarrinho(id) {
            this.carStore.removerDoCarrinho(id);
            this.carrinho = this.carStore.getCarrinho;
            this.total = this.carStore.getTotal;   
        },
    },
};
</script>

<style lang="scss" scoped>

</style>