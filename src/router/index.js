import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        enterClass: 'animate__animated animate__fadeInUp',
        leaveClass: 'animate__animated animate__fadeOutUp'
      },
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        enterClass: 'animate__animated animate__fadeInUp',
        leaveClass: 'animate__animated animate__fadeOutUp'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      meta: {
        enterClass: 'animate__animated animate__fadeInUp',
        leaveClass: 'animate__animated animate__fadeOutUp'
      },
      // route level code-splitting
      // this generates a separate chunk (Projects.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        enterClass: 'animate__animated animate__fadeInUp',
        leaveClass: 'animate__animated animate__fadeOutUp'
      }, 
      // route level code-splitting
      // this generates a separate chunk (Contact.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
