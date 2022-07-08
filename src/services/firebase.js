import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCaPCqZQHA5D_LBao5vQ79MC9UOfiTDgJ8",
  authDomain: "chat-e70bf.firebaseapp.com",
  projectId: "chat-e70bf",
  storageBucket: "chat-e70bf.appspot.com",
  messagingSenderId: "481364455849",
  appId: "1:481364455849:web:96805c54b22b9a6dd154b8"
}

const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()

const auth = app.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
