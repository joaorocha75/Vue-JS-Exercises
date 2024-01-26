<template>
    <div>
        <h1>Detalhes do Carro</h1>
        <img :src="carro.image" style="width:100px; height:100px" />
        <h2>Marca:{{ carro.brand }}</h2>
        <p>Modelo:{{ carro.model }}</p>
        <p>Ano:{{ carro.year }}</p>
        <p>Preço:{{ carro.price }}€</p>
        <p>Cidade: {{ carro.city }}</p>
        <p>Descrição: {{ carro.description }}</p>
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
                carStore: useCarStore(),
                carro: null,
            }
        },
        async created() {
            try {
                await this.carStore.fetchCarro(this.$route.params.id);
                this.carro = this.carStore.getCarro;
                console.log(this.carro);
            } catch (error) {
                alert(error.message);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>