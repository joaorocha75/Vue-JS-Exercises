import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const velocidade = defineStore('velocidade', {
  state: () =>({
    jogadores: [
      {id:1, nome: 'Jonh Pelintra', pontos: 100},
      {id:2, nome: 'Jonh Montijo', pontos: 200},
      {id:3, nome: 'Jonh Travolta da wish', pontos: 300},
      {id:4, nome: 'Jonh Ganzas', pontos: 400},
      {id:5, nome: 'Jonh Cepo', pontos: 250},
    ]
  }),
  //função para mostrar esta leaderbord no home
  getters: {
    topN: (state) => (n) => {
      return state.jogadores.sort((a,b) => b.pontos - a.pontos).slice(0,n)
    },
    jogadoreOrdenados: (state) => {
        return state.jogadores.sort((a,b) => b.pontos - a.pontos)
    },
  }
})

//agora faz-me outra store mas para qualidade
export const qualidade = defineStore('qualidade', {
  state: () =>({
    jogadores: [
      {id:1, nome: 'Jonh Pelintra', pontos: 100},
      {id:2, nome: 'Jonh Montijo', pontos: 200},
      {id:3, nome: 'Jonh Travolta da wish', pontos: 300},
      {id:4, nome: 'Jonh Ganzas', pontos: 400},
      {id:5, nome: 'Jonh Cepo', pontos: 250},
    ]
  }),
  getters: {
    topN: (state) => (n) => {
      return state.jogadores.sort((a,b) => b.pontos - a.pontos).slice(0,n)
    },
    jogadoreOrdenados: (state) => {
        return state.jogadores.sort((a,b) => b.pontos - a.pontos)
    },
  }
})

//agora outra para cooperecao
export const cooperecao = defineStore('cooperecao', {
  state: () =>({
    jogadores: [
      {id:1, nome: 'Jonh Pelintra', pontos: 100},
      {id:2, nome: 'Jonh Montijo', pontos: 200},
      {id:3, nome: 'Jonh Travolta da wish', pontos: 300},
      {id:4, nome: 'Jonh Ganzas', pontos: 400},
      {id:5, nome: 'Jonh Cepo', pontos: 250},
    ]
  }),
  getters: {
    topN: (state) => (n) => {
      return state.jogadores.sort((a,b) => b.pontos - a.pontos).slice(0,n)
    },
    jogadoreOrdenados: (state) => {
        return state.jogadores.sort((a,b) => b.pontos - a.pontos)
    },
  }
})
