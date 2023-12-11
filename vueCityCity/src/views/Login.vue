<template>
    <div>
        <h1>Login</h1>
        <input type="text" v-model="username">
        <input type="password" v-model="password">

        <button @click="login(username, password)">Login</button>

        <p v-if="erro">Erro no Login</p>
    </div>
</template>

<script>
import {store} from '../stores/counter.js'
    export default {
        data() {
            return {
                username: '',
                password: '',
                store: store(),
                erro: false,
            }
        },
        methods: {
            login(username,password) {
                if (this.store.login(username,password)) {
                    this.$router.push('/home')
                }
                else{
                    this.erro = true
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>