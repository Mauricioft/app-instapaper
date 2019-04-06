import Vue from 'vue'
import Vuex from 'vuex'
import fb from '../plugins/firebaseConfig'
import { generateUUID } from '../utils/index'
import router from '../router/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    dogs: [],
    dog: undefined,
  },
  mutations: {
    setDog(state, payload){
      state.dog = payload
    },
    setDogs(state, payload){
      state.dogs = payload
    }
  },
  actions: {
    getDogs({ commit, state }){
      fb.dogsCollection.orderBy('created_at', 'desc').onSnapshot((snapshot) => {
        var dogs = [];
        snapshot.forEach((dog) => {
          dogs.push({
            id:dog.id,
            url:dog.data().url,
            comment:dog.data().comment,
            info:dog.data().info
          })
        });
        commit('setDogs', dogs)
      })
    },
    setDogs({ commit, state }, {url, comment, author}){
      let d = new Date()
      let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
      // console.log(url, comment, author)
      let uuid = generateUUID()
      // console.log(fb.dogsCollection)
      fb.dogsCollection.add({
        slug: uuid,
        url,
        comment,
        info: `Posted by ${author != '' ? author : 'Unknow'} on ${days[d.getDay()]}`,
        created_at: new Date().getTime()
      })
      .then(() => router.push({ name: 'home' }))
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    },
    findDog({ commit, state }, payload){
      return new Promise((resolve, reject) => {
        let data = `dogs/${payload.id}`
        fb.db.doc(data)
          .get()
          .then((doc) => {
            if (doc.exists) {
              // this.dog = doc.data();
              resolve(doc.data())
            } else {
              // doc.data() will be undefined in this case
              resolve("No such document!");
            }
          })
          .catch((error) => {
            reject(error)
            // console.log("Error getting document:", error);
          });
      })
    },
    saveTakePhoto({ commit, state }, payload){
      return new Promise((resolve, reject) => {
        let uuid = `images/picture-${generateUUID()}`
        fb.storage.ref().child(uuid).put(payload)
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      })
    }
  }
})
