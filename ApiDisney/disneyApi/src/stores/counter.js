import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as api from '../api/api.js'

const Disney_Api_Base_Url = 'https://api.disneyapi.dev'

export const useDisneyStore = defineStore("disney", {
  state: () => ({
    characters: [],
    character: {}
  }),
  getters: {
    getCharacters: (state) => state.characters,
    getCharacter: (state) => state.character,
/*     getImageUrl: (state) => state.imageUrl,
    getName: (state) => state.name,
    getShortFilms: (state) => state.shortFilms,
    getTvShows: (state) => state.tvShows,
    getVideoGames: (state) => state.videoGames */
  },
  actions: {
    async fetchCharacters() {
      try{
        const data = await api.get(Disney_Api_Base_Url, 'character')
        this.characters= data.data
      } catch(error) {
        console.error("Error in store fetching disney charcters", error);
        throw error;
      }
    },
    async fetchCharacter(id) {
      try{
        const data = await api.get(Disney_Api_Base_Url, `character/${id}`)
        this.character= data.data
      } catch(error) {
        console.error("Error in store fetching disney charcter", error);
        throw error;
      }
    }
  }
})


