// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDt3RvISwEpfB9ZbkmdzF7_hB27x-sQ6NY',
  authDomain: 'netflix-clone-23347.firebaseapp.com',
  projectId: 'netflix-clone-23347',
  storageBucket: 'netflix-clone-23347.appspot.com',
  messagingSenderId: '847357362543',
  appId: '1:847357362543:web:2e544373af5bad46f2a89a',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
