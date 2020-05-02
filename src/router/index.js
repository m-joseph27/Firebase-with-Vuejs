import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Landingpage from '../views/Landingpage.vue'
import firebase from 'firebase'
import Settting from '../components/Setting.vue'
import Menu from '../components/Menu.vue'
import Location from '../components/Location.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'Landing',
    component: Landingpage,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Settting
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/location',
    name: 'Location',
    component: Location
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // check reqiure
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // check not login
    if (!firebase.auth().currentUser) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // check login
    if (firebase.auth().currentUser) {
      next({
        path: '/home',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
