import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as api from '../api/api.js'

const Bags_API_URL = 'https://nearfetch-api.vercel.app'

export const useBagsStore = defineStore('malas', {
  state: () => ({
    bags:[],
    bag:{},
  }),
  getters: {
    getBags: (state) => state.bags,
    getBag: (state) => state.bag,
  },
  actions: {
    async fetchBags() {
      try{
        const data = await api.get(Bags_API_URL, 'bags')
        console.log(data);
        this.bags = data
      } catch(error) {
        console.error("Error in store fetching bags", error);
        throw error;
      }
    },
    async fetchBag(brand) {
      try {
        const data = await api.get(Bags_API_URL, `bags/${brand}`)
        this.bag = data
      } catch (error) {
        console.error("Error in store fetching bag", error);
        throw error;
      }
    },
  }

})
