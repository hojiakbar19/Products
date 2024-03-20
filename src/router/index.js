import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/category',
      name: 'Category',
      component: () => import('@/pages/CategoryPage.vue'),   
    },
    {
      path: "/card-single/:id",
      name: 'cardSingle',
      component: () => import('@/pages/ProductSinglePage.vue'),   
    },
    {
      path: "/category-single/:category",
      name: 'categorySingle',
      component: () => import('@/pages/CategorySinglePage.vue'),   
    },
   
  ]
})

export default router
