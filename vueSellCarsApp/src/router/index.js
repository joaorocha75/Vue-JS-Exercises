import { createRouter, createWebHistory } from 'vue-router'
import Catalogo from '../views/Catalogo.vue'
import CarroDetails from '../components/Carro.vue'
import Carrinho from '../views/Carrinho.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalogo',
      component: Catalogo
    },
    {
      path: '/carro/:id',
      name: 'carro',
      component: CarroDetails,
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: Carrinho,
    },
  ]
})

export default router
