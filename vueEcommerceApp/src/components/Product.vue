<template>
    <div>
        <h1>Detalhes do Produto</h1>
        <p><img :src="produto.image" alt="Imagem do produto" style="width:200px; height:150px;"></p>
        <p><strong>Nome: </strong>{{ produto.title }}</p>
        <p><strong>Preço: </strong>{{ produto.price }}</p>
        <p><strong>Descrição: </strong>{{ produto.description }}</p>
        <p><strong>Categoria: </strong>{{ produto.category }}</p>
        <!-- adicionar ao carrinho -->
        <button @click="adicionarAoCarrinho(produto.id)">
            Adicionar ao carrinho
        </button>
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
                produto: null,
            }
        },
        async created() {
            try {
                await this.produtoStore.fetchProduto(this.$route.params.id);
                this.produto = this.produtoStore.getProduto;
            } catch (error) {
                alert(error.message);
            }
        },
        methods: {
            adicionarAoCarrinho(id) {
                this.produtoStore.adicionarAoCarrinho(id);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>