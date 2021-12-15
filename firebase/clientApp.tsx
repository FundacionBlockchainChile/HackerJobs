// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  FacebookAuthProvider,
} from 'firebase/auth'

console.log('hello there')

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

const auth = getAuth()

export const loginWithFacebook = () => {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result)
      const accessToken = credential!.accessToken
      console.log(user)
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.email
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error)

      console.log(error)
    })
}

export const loginWithGoogle = () => {
  console.log('login clicked..')
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential!.accessToken
      // The signed-in user info.
      // console.log(token)
      const user = result.user
      // console.log(user)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.email
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      // ...
      console.log(error)
    })
}

export const createUserWithEmail = (email: string, password: string) => {
  console.log('login clicked..')
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      // ..
    })
}

export const signInWithEmail = ({ email, password }: any) => {
  console.log('login clicked..')
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      // console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      alert(errorMessage.replace('Firebase: ', ''))
    })
}

export const logout = () => {
  console.log('logout clicked...')
  signOut(auth)
    .then(() => {
      console.log('user logout')
    })
    .catch((error) => {
      console.log(error)
    })
}
