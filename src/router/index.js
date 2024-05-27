import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import AdminView from '../views/admin/Admin.vue'
import Welcome from '../views/user/Welcome.vue'
import StaffView from '../views/staffs/StaffView.vue'
import PizzaView from '../views/Pizzas/index.vue'
import UserOrder from '../views/user/User_index.vue'
import PizzaCreate from '../views/Pizzas/create.vue'
import PizzaEdit from '../views/Pizzas/edit.vue'
import Login from '../views/user/Login.vue'
import S_Login from '../views/staffs/S_Login.vue'
import A_Login from '../views/admin/A_Login.vue'
import S_Register from '../views/admin/S_Register.vue'
import Register from '../views/user/Register.vue'
import ForgotPassword from '@/views/user/ForgotPassword.vue'
import ResetPassword from '@/views/user/ResetPassword.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {home: true}
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: {a_Nav: true}
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/staff',
      name: 'staffs',
      component: StaffView,
      meta: {s_Nav: true}
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pizzas',
      name: 'pizzas',
      component: PizzaView,
      meta: {s_Nav: true}
    },
    {
      path: '/your_order',
      name: 'pizza',
      component: UserOrder
    },
    {
      path: '/pizzas/create',
      name: 'pizzas_create',
      component: PizzaCreate
    },
    {
      path: '/pizzas/:pizzaId/edit',
      name: 'pizzas_edit',
      component: PizzaEdit
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/staff/login',
      name: 's_login',
      component: S_Login,
      meta: {s_Nav: true}
    },
    {
      path: '/admin/login',
      name: 'a_login',
      component: A_Login,
      meta: {a_Nav: true}
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/staff/register',
      name: 's_register',
      component: S_Register,
      meta: {a_Nav: true}
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: ForgotPassword
    },
    {
      path: '/password-reset/:token',
      name: 'resetPassword',
      component: ResetPassword
    }
  ]
})

export default router
