import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/CatalogView.vue')
    },
    {
      path: '/product',
      // path: '/catalog/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogsView.vue')
    },
    {
      path: '/story',
      name: 'story',
      component: () => import('../views/StoryView.vue')
    },
  ]
})

export default router
