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
      requiresAuth: true,
      title: 'Alphabet.id'
    }
  },
  {
    path: '/',
    name: 'Landing',
    component: Landingpage,
    meta: {
      requiresGuest: true,
      title: 'Most Populer Web Chat App |Alphabet.id'
    }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Settting,
    title: 'setting |Alphabet.id'
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
    title: 'Menu |Alphabet.id'
  },
  {
    path: '/location',
    name: 'Location',
    component: Location,
    title: 'Location |Alphabet.id'
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
