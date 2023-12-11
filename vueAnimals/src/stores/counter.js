import {ref,computed} from 'vue'
import {defineStore} from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    isUserAuthenticated: false,
    user:null,
    users: [
      {username: 'rui', password:'12345', type:'admin'},
      {username: 'maria', password:'54321', type:'guest'} 
    ],
    animals: [
      {
        id: 1,
        name: 'macaco',
        desc: 'Termo utilizado para descrever diversos primatas pertencentes à ordem dos primatas.',
        image: 'https://tinyurl.com/w5utf6u5'
      },
      {
        id: 2,
        name: 'leão',
        desc: 'Mamífero carnívoro pertencente à família dos felinos, conhecido cientificamente como Panthera leo.',
        image: 'https://tinyurl.com/3tck98xm'
      },
      {
        id: 3,
        name: 'zebra',
        desc: 'Mamífero herbívoro da família dos equídeos, caracterizado pelas listras distintas e marcantes em seu corpo.',
        image: 'https://tinyurl.com/yvr5shv8'
      },
      {
        id: 4,
        name: 'golfinho',
        desc: 'O golfinho é um mamífero marinho pertencente à ordem dos cetáceos, especificamente da família Delphinidae. Eles são conhecidos porsua natureza inteligente, habilidades sociais avançadas e pela sua agilidade na água ',
        image: 'https://tinyurl.com/mr3u3yje'
      },
    ],
  }),
  getters: {
    getAnimals: (state) => state.animals,
    getAnimal: (state) => (id) => 
      state.animals.find(animal => animal.id === id),
    getUser: (state) => state.user,
    isUser: (state) => state.isUserAuthenticated,
  },
  actions: {
    login(username, password) {
      const user = this.users.find(
        (user) => user.username == username && user.password == password
      );
      if (user) {
        this.isUserAuthenticated = true;
        this.user = user;
      } else {
        throw Error("User invalid!");
      }
    },
    remove(id) {
      this.animals = this.animals.filter((animal) => animal.id != id)
    },
    logout() {
      this.isUserAuthenticated = false;
      this.user = null;
    },
  },  
  persist: true,
});
