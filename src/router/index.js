import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PizzaView from '../views/Pizzas/index.vue'
import PizzaCreate from '../views/Pizzas/create.vue'
import AuthLogin from '../views/Auth/Login.vue'
import AuthReg from '../views/Auth/Register.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pizzas',
      name: 'pizzas',
      component: PizzaView
    },
    {
      path: '/pizzas/create',
      name: 'pizzas_create',
      component: PizzaCreate
    },
    {
      path: '/auth/login',
      name: 'auth_login',
      component: AuthLogin
    },
    {
      path: '/auth/register',
      name: 'auth_reg',
      component: AuthReg
    }
  ]
})

export default router
