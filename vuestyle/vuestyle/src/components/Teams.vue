<template>
    <div>
        <h1>Lista de equipas</h1>
        <button @click="addTeam('braga', 1500)">Adicionar Equipa</button>
        <br>
        <button @click="teams=filteredTeams">Filtrar equipas de lisboa</button>
        <ul>
            <li v-for="team in teams" :key="team.name">
                Name: {{ team.name }} AND year: {{ team.year }} AND location: {{team.location}}
            </li>
        </ul>
        <table border=1>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Ano</th>
                <th>Localização</th>
            </tr>
            <tr v-for="(team,index) in teams" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ team.name }}</td>
                <td>{{ team.year }}</td>
                <td>{{ team.location }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                teams: [
                    {name:'benfica', year:1910, location:'Lisboa'},
                    {name:'porto', year:1893, location:'Porto'},
                    {name:'sporting', year:1906, location:'Lisboa'},
                ],
            }
        },
        methods: {
            addTeam(team, year) {
                this.teams.push({name:team, year:year})
            }
        },
        computed: {
            filteredTeams() {
                return this.teams.filter(team => team.location == 'Lisboa')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>