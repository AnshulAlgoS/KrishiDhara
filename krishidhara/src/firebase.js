// src/firebase.js
import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDIhXQLbTI788pBxU6kIfDQUhrHkM2WVaM",
  authDomain: "krishidhara-978f8.firebaseapp.com",
  projectId: "krishidhara-978f8",
  storageBucket: "krishidhara-978f8.firebasestorage.app",
  messagingSenderId: "1075359261156",
  appId: "1:1075359261156:web:7d59f8c3e007b6deaaa7f1",
  measurementId: "G-ZP7GZQKG97"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
