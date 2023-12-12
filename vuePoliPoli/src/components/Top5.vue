<template>
    <div>
        <table border="1">
            <thead>
                <td>Jogador</td>
                <td>Pontos</td>
            </thead>
            <tbody>
                <tr v-for="jogador in tabela" :key="jogador.id">
                    <td>{{jogador.nome}}</td>
                    <td>{{jogador.pontos}}</td>
                </tr>
            </tbody>
        </table>
        <button><RouterLink :to="{name: 'home'}">Voltar</RouterLink></button>
    </div>
</template>

<script>
import {velocidade} from '../stores/counter.js'
import {qualidade} from '../stores/counter.js'
import {cooperecao} from '../stores/counter.js'
    export default {
        data() {
            return {
                id: this.$route.params.id,
                velocidadeStore: velocidade(),
                qualidadeStore: qualidade(),
                cooperecaoStore: cooperecao(),
                tabela: []
            }
        },
        created () {
            if(this.id == 'velocidadeStore'){
                this.tabela = this.velocidadeStore.jogadoreOrdenados
            }else if(this.id == 'qualidadeStore'){
                this.tabela = this.qualidadeStore.jogadoreOrdenados
            }else if(this.id == 'cooperecaoStore'){
                this.tabela = this.cooperecaoStore.jogadoreOrdenados
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>