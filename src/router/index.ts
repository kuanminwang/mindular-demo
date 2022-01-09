import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Discover from '../views/Discover.vue'
import Clouds from '../views/Clouds.vue'
import Register from '../views/Register.vue'
import AuthService from '../services/authService'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/waterfall'
  },
  {
    path: '/waterfall',
    name: 'Waterfall',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/clouds',
    name: 'Clouds',
    component: Clouds
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!AuthService.getToken() && to.name !== 'Login' && to.name !== 'Register') {
    next('/login')
  }
  else {
    next()
  }
});

export default router
