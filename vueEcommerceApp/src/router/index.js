import { createRouter, createWebHistory } from 'vue-router'
import Catalogo from '../views/Catalogo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalogo',
      component: Catalogo
    },
    {
      path: '/produto/:id',
      name: 'produto',
      component: () => import('../components/Product.vue')
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: () => import('../views/Carrinho.vue')
    }
/*     {
      path: '/finalizar',
      name: 'finalizar',
      component: () => import('../views/Finalizar.vue')
    } */
  ]
})

export default router