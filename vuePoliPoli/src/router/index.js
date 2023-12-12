import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import top5 from '../components/Top5.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/top5/:id',
      name: 'top5',
      component: top5
    }
  ]
})

export default router
