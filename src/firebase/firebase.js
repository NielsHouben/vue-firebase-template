import firebase from 'firebase/app'

firebase.initializeApp({
  apiKey: "AIzaSyAyKF9lWlG5CcN9QkFHXnFlrdQT7rDTEiQ",
  authDomain: "vue-firebase-crud-da816.firebaseapp.com",
  projectId: "vue-firebase-crud-da816",
  storageBucket: "vue-firebase-crud-da816.appspot.com",
  messagingSenderId: "756130925020",
  appId: "1:756130925020:web:0c8a287e24d0930217a719",
  measurementId: "G-6VW81X87T9"
})

import 'firebase/firestore'
export const db = firebase.firestore()

