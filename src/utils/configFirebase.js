import firebase from "firebase"
import "firebase/firestore"
import 'firebase/messaging'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyASpUxA8ZkFJtseC7RizYhuWXupmMfRFOc",
  authDomain: "instapaper-72255.firebaseapp.com",
  databaseURL: "https://instapaper-72255.firebaseio.com",
  projectId: "instapaper-72255",
  storageBucket: "instapaper-72255.appspot.com",
  messagingSenderId: "900085870801"
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