import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import './firebaseInit'
import VueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueGeolocation)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBs58h3su-i3H582rjuCuY5LRWNjpCJhPg'
  }
})

let app
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      router,
      // store,
      render: h => h(App)
    }).$mount('#app')
  }
})
