import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyDnoM-PAMmsuqGNhwCEawgvxN5utmuRANM',
  authDomain: 'alphabet-446d0.firebaseapp.com',
  databaseURL: 'https://alphabet-446d0.firebaseio.com',
  projectId: 'alphabet-446d0',
  storageBucket: 'alphabet-446d0.appspot.com',
  messagingSenderId: '4870023682',
  appId: '1:4870023682:web:71f328c6a1487b5db6951b',
  measurementId: 'G-KX56Z8RW8H'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots: true })
export default firestore
