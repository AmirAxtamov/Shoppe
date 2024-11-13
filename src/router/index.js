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
      path: '/catalog/:id', // после двоиточие любой приведет к Product View и если ты ставишь : то роут любой это правильный
      name: 'product-view',
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
    {
      path: '/:catchAll(.*)', // Маршрут для любого неопределенного пути
      name: 'NotFound',
      component: () => import('../views/errors/ProductNotFoundView.vue')
    },
  ]
})

export default router
