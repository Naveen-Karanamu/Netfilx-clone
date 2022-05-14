// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAygoUxhcVKZbApcaxTCUwZBnnvFKLpuDM",
    authDomain: "netflix-clone-knk.firebaseapp.com",
    projectId: "netflix-clone-knk",
    storageBucket: "netflix-clone-knk.appspot.com",
    messagingSenderId: "1008244595995",
    appId: "1:1008244595995:web:2f739462837cd0827987be",
    measurementId: "G-9HJNH4N6DR"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }