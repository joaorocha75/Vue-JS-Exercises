<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="login">
      <v-text-field v-model="username" label="Username"></v-text-field>
      <v-text-field v-model="password" label="Password"></v-text-field>
      <v-btn type="submit" block class="mt-2">Login</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import {store} from '../stores/counter.js'
    export default {
        data() {
            return {
                store: store(),
                username: "",
                password: "",
            }
        },
        methods: {
            login() {
                try{
                    this.store.login(this.username, this.password)
                    this.$router.push({name: "Animals"});
                } catch(error) {
                    alert(`Error: ${error.message}`);
                }
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>