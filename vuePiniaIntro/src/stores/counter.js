import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    users: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ],
  }),
  getters: {
    getUserById: (state) => (userId) => state.users.find(user=>user.id == userId),
  },
});

