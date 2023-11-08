<template>
    <div>
        <h1>{{productName}}</h1>
        <img :src="productImage" alt="Product image">
        <p v-html="productDesc"></p>
        <span v-if="productPrice<1000">{{productPrice}}€</span>
        <br>
        <button @click="productPrice=1200">Voltar ao preço original</button>
        <div>{{productAvailability ? "DISPONIVEL" : "NÂO DISPONIVEL"}}</div>
        <button @click="buy" :disabled="!productAvailability">Comprar</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                productName: "Dell XPS",
                productDesc: "Processor i7<br>Disco SSD 256GB<br>Monitor Samsung 21'",
                productImage: "https://tinyurl.com/2p9dnx68",
                productPrice: 1200,
                productAvailability: true
            }
        },
        methods: {
            buy() {
                this.productAvailability = false;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>