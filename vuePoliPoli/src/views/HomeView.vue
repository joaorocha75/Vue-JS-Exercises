<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <h3>Velocidade</h3>
                    <table class="table" border="1">
                        <thead>
                            <tr>
                                <th scope="col">Posição</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Pontuação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in tabelaVelocidade" :key="index">
                                <th scope="row">{{index+1}}</th>
                                <td>{{item.nome}}</td>
                                <td>{{item.pontos}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button><RouterLink :to="{name: 'top5', params: {id: 'velocidadeStore'}}">Ver informação de detalhada</RouterLink></button>
                </div>
                <div class="col-4">
                    <h3>Qualidade</h3>
                    <table class="table" border="1">
                        <thead>
                            <tr>
                                <th scope="col">Posição</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Pontuação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in tabelaQualidade" :key="index">
                                <th scope="row">{{index+1}}</th>
                                <td>{{item.nome}}</td>
                                <td>{{item.pontos}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button><RouterLink :to="{name: 'top5', params: {id: 'qualidadeStore'}}">Ver informação de detalhada</RouterLink></button>
                </div>
                <div class="col-4">
                    <h3>Cooperação</h3>
                    <table class="table" border="1">
                        <thead>
                            <tr>
                                <th scope="col">Posição</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Pontuação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in tabelaCooperecao" :key="index">
                                <th scope="row">{{index+1}}</th>
                                <td>{{item.nome}}</td>
                                <td>{{item.pontos}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button><RouterLink :to="{name: 'top5', params: {id: 'cooperecaoStore'}}">Ver informação de detalhada</RouterLink></button>
                </div>
            </div>
        </div>
        <!-- Permita que no ecrã principal as leaderboards possam ser configuradas para apresentarem o TOPN onde N é o no de jogadores a ser apresentados -->
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <label for="topn">Top N</label>
                    <input type="number" id="topn" v-model="topn">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {velocidade} from '../stores/counter.js'
import {qualidade} from '../stores/counter.js'
import {cooperecao} from '../stores/counter.js'
    export default {
        data() {
            return {
                velocidadeStore: velocidade(),
                qualidadeStore: qualidade(),
                cooperecaoStore: cooperecao(),
                tabelaVelocidade: [],
                tabelaQualidade: [],
                tabelaCooperecao: [],
                topn: 5,
            }
        },
        created () {
            this.tabelaVelocidade = this.velocidadeStore.topN(this.topn);
            this.tabelaQualidade = this.qualidadeStore.topN(this.topn);
            this.tabelaCooperecao = this.cooperecaoStore.topN(this.topn);
        },
        updated () {
            this.tabelaVelocidade = this.velocidadeStore.topN(this.topn);
            this.tabelaQualidade = this.qualidadeStore.topN(this.topn);
            this.tabelaCooperecao = this.cooperecaoStore.topN(this.topn)
        },
    }
</script>

<style lang="scss" scoped>

</style>