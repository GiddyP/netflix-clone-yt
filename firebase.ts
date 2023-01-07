// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXOk1i86RktyKRIq4JsDBskwzSm_qeCrc",
  authDomain: "netflix-clone-yt-9ca50.firebaseapp.com",
  projectId: "netflix-clone-yt-9ca50",
  storageBucket: "netflix-clone-yt-9ca50.appspot.com",
  messagingSenderId: "329792465657",
  appId: "1:329792465657:web:5960c470cb5b67e40cd028"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
