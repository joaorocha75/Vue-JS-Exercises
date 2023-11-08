<template>
    <div>
        <button @click="numero++">+</button>
        <span>{{ numero }}</span>
        <button @click="numero--" :disabled="numero == minNumero">-</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                numero: 0,
                minNumero:0,
            }
        },
        created () {
            console.log('A instancia vue foi criada.');
        },
        mounted () {
            console.log('A instancia vue foi montada na DOM.');
        },
        updated () {
            console.log('O número foi alterado.');
        },
    }
</script>

<style lang="scss" scoped>

</style>