import { createRouter, createWebHistory } from 'vue-router'
import Catalogo from '../views/Catalogo.vue'
import Bag from '../components/Bag.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalogo',
      component: Catalogo
    },
    {
      path: '/bag/:brand',
      name: 'bag',
      component: Bag
    }
  ]
})

export default router
