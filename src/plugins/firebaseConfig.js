import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/messaging'
import 'firebase/storage'

// Initialize Firebase
const config = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_SENDER_ID
}

// date issue fix according to firebase
const settings = {}

const firebaseApp = firebase.initializeApp(config)
// Initialize Cloud Firestore through Firebase
const db = firebaseApp.firestore()
// const auth = firebase.auth()
// const currentUser = auth.currentUser

db.enablePersistence({
  experimentalTabSynchronization: true
}).then(() => {
  console.log('Woohoo! Multi-Tab Persistence!')
}).catch((error) => {
  console.log('enablePersistence@error', error)
  if (error.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
  } else if (error.code === 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
  }
})

const storage = firebase.storage()

db.settings(settings)

// firebase collections
const dogsCollection = db.collection('dogs')

export default {
  db,
  storage,
  // auth,
  // currentUser,
  dogsCollection
}
