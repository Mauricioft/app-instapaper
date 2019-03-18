import firebase from "firebase"
import "firebase/firestore"
import 'firebase/messaging'

// Initialize Firebase
const config = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_SENDER_ID
}

const settings = {}

const firebaseApp =  firebase.initializeApp(config)

// Initialize Cloud Firestore through Firebase
let db = firebaseApp.firestore();

// Disable deprecated features
db.settings(settings)

export default {
  db
}