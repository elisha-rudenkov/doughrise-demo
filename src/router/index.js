import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProtectedView from '@/views/ProtectedView'


import { getAuth } from "firebase/auth";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'ProtectedView',
    component: ProtectedView,
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
