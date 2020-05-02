import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import './firebaseInit'
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// const firebase = require("firebase/app");

// Add the Firebase products that you want to use
// require("firebase/auth");
// require("firebase/firestore");

Vue.config.productionTip = false

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
