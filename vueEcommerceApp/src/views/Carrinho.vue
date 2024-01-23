<template>
    <div>
        <h1>Carrinho</h1>
        <div v-for="produto in carrinho" :key="produto._id">
            <p><img :src="produto.image" alt="Imagem do produto" style="width:200px; height:150px;"></p>
            <p><strong>Nome: </strong>{{ produto.title }}</p>
            <p><strong>Preço: </strong>{{ produto.price }}</p>
            <button @click="removerDoCarrinho(produto.id)">Remover Item</button>
        </div>
        <p><strong>Total: </strong>{{ total }}</p>
        <button>
            <router-link :to="{ name: 'catalogo' }">Voltar</router-link>
        </button>
    </div>
</template>

<script>
import {useProductsStore} from '../stores/counter.js'
    export default {
        data() {
            return {
                produtoStore: useProductsStore(),
                carrinho: [],
                total: 0,
            }
        },
        created () {
            this.carrinho = this.produtoStore.getCarrinho;
            this.total = this.produtoStore.getTotal;
        },
        methods: {
            removerDoCarrinho(id) {
                this.produtoStore.removerDoCarrinho(id);
                //faz update quando é clicado dos produtos e do valor total
                this.carrinho = this.produtoStore.getCarrinho;
                this.total = this.produtoStore.getTotal;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>