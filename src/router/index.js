import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '@/views/DashboardView'
import GoalsView from '@/views/GoalsView'
import TransactionsView from '@/views/TransactionsView'


import { getAuth } from "firebase/auth";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'DashboardView',
    component: DashboardView,
    meta: { requiresAuth: true }

  },
  {
    path: '/goals',
    name: 'GoalsView',
    component: GoalsView,
    meta: { requiresAuth: true }

  },
  {
    path: '/transactions',
    name: 'TransactionsView',
    component: TransactionsView,
    meta: { requiresAuth: true }

  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = getAuth().currentUser;

  if (requiresAuth && !isAuthenticated) {
    next("/");
  } else {
    next();
  }

})

export default router
