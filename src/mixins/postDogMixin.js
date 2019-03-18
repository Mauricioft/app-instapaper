import firebase  from '../utils/configFirebase'
import router from '../router/index'

export const add = (url, comment, author) => {
  let d = new Date()
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  console.log('add', url, comment, author)
  /*
  firebase.db.collection('dogs').add(
    {
      slug: generateUUID(),
      url,
      comment,
      info: `Posted by ${author != '' ? author : 'Unknow'} on ${days[d.getDay()]}`,
      created_at: new Date().getTime()
    }
  ).then(
    router.go(-1)
  )
  .catch((error) => {
    console.error('Error adding document: ', error)
  })
  */
}

export const dogList = () => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve(), N);
    firebase.db.collection('dogs').orderBy('created_at').onSnapshot((snapShot) => {
      resolve(snapShot)
      /*
      snapShot.forEach((dog)  => {
        this.dogs.push({
          id:dog.id,
          url:dog.data().url,
          comment:dog.data().comment,
          info:dog.data().info
        })
      });
      */
    })
    .catch((error) => {
      reject(Error("Error listing documents: ", error));
    })
  })
}

const generateUUID = () => {
  let d = new Date().getTime()
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
  return uuid
}