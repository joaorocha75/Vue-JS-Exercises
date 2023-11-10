<template>
    <div>
        <form @submit.prevent="addSerie">
            <h1>Vueflix</h1>
            <!-- Nome do filme -->
            <p>
                <label for="txtName">Nome do filme:</label>
                <input type="text" id="txtName" required v-model="name" />
            </p>
            <!-- Categoria do filme -->
            <p>
                <label for="sltCategory">Categoria:</label>
                <select id="sltCategory" required v-model="category">
                    <option value="">SELECIONA UMA CATEGORIA</option>
                    <option value="comedy">Comédia</option>
                    <option value="mystery">Mistério</option>
                    <option value="romance">Romance</option>
                    <option value="terror">Terror</option>
                </select>
            </p>
            <!-- Pontuação -->
            <p>
                <label for="txtScore">Pontuação:</label>
                <input 
                    type="number" 
                    id="txtScore"
                    required
                    min="1"
                    max="10"
                    v-model="score"
                />
            </p>
            <!-- Botão para adicionar o filme -->
            <p>
                <input type="submit" value="ADD SERIE">
            </p>
        </form>
        <br>
        <p v-if="series.length != 0">
            <!-- FILTER -->
            <p>
                <label for="txtFilterName">Filter By Name:</label>
                <input type="text" id="txtFilterName" v-model="filterName" />
            </p>
            <!-- Tabela de filmes ordenados por pontuação -->
            <table border='1'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Pontuação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="serie in filterSeriesByName" :key="serie.name">
                        <td>{{ serie.name }}</td>
                        <td>{{ serie.category }}</td>
                        <td>{{ serie.score }}</td>
                        <td><button @click="removeSerie(serie.name)">Remove</button></td>
                    </tr>
                </tbody>
            </table>
        </p>
        <p v-else>Series not found</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                series: [],
                name:"",
                category:"",
                score:1,
                filterName: "",
            }
        },
        created () {
            window.addEventListener("beforeunload", this.saveSeries);
            this.series = localStorage.series ? JSON.parse(localStorage.series) : []
        },
        /* Adiciona uma serie que nao exista, se existir manda uma mensagemd e alerta */
        methods: {
            addSerie() {
                const serie = {
                    name: this.name,
                    category: this.category,
                    score: this.score,
                }
                if (this.series.find(s => s.name === serie.name)) {
                    alert('Série já cadastrada!')
                } else {
                    this.series.push(serie)
                }
            },
            removeSerie(name) {
                if(confirm('Are you sure you want to remove this serie?')) {
                    this.series = this.series.filter(s => s.name !== name)
                }
            },
            saveSeries() {
                localStorage.series = JSON.stringify(this.series)
            }      
        },
        /*Crie um filtro no topo da tabela por nome da série */
        computed: {
            sortedSeries() {
                return this.series.sort((a, b) => b.score - a.score)
            },
            filterSeriesByName() {
                return this.sortedSeries.filter(
                    (serie) => !serie.name.indexOf(this.filterName)
                );
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>