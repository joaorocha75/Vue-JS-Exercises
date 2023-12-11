<template>
    <v-container>
        <v-row>
            <v-col v-for="animal in animals" :key="animal.id" cols="12" md="4">
                <v-card>
                    <v-img class='align-end text-white' :src="animal.image" height="200px" cover></v-img>
                    <v-card-title>{{ animal.name }}</v-card-title>
                    <v-card-text>{{ animal.desc }}</v-card-text>
                    <v-card-actions>
                        <router-link :to="{ name: 'animal', params: { id: animal.id } }"> See More </router-link>
                        <v-btn @click="remove(animal.id)">REMOVE</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {useStore} from "../stores/counter.js";
import {RouterLink} from "vue-router";
    export default {
        data() {
            return {
                store: useStore(),
            }
        },
        computed: {
            isAdmin() {
                return this.store.getUser?.type == "admin";
            },  
            animals() {
                return this.store.getAnimals;
            },
        },
        methods: {
            remove(id) {
                if(confirm('Deseja mesmo remover o animal?')) {
                    this.store.removeAnimal(id);
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>