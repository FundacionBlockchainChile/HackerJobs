import { getFirestore } from 'firebase/firestore'
import { collection, addDoc } from 'firebase/firestore'
// CRUD

const db = getFirestore()
console.log(db)
// CREATE
// const createDog = (name, raza) => {
//   db.collection('news')
//     .add({
//       name,
//       raza,
//     })
//     .then((snapshot) => {
//       console.log(snapshot)
//     })
// }

export const writeSomething = async () => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    })
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

writeSomething()

// // READ - REAL TIME LISTENER OF FIRESTORE DB
// db.collection('cafes')
//   .orderBy('city')
//   .onSnapshot((snapshot) => {
//     let changes = snapshot.docChanges()
//     changes.forEach((change) => {
//       // console.log(change.doc.data())
//       if (change.type === 'added') renderCafe(change.doc)
//       if (change.type === 'removed') deleteCafe(change.doc)
//     })
//   })

// // UPDATE
// const updateData = (id) => {
//   db.collection('cafes')
//     .doc(id) //id of document...
//     .update({ name: 'Mokka' })
//     .then(() => console.log('Updated from Firestore'))
// }

// // DELETE DOCUMENT OF FIRESTORE
// const deleteItem = (id) => {
//   db.collection('cafes')
//     .doc(id)
//     .delete()
//     .then(() => console.log('Deleted from Firestore'))
// }

// OTHER FUNCTIONS

// SET (Is equal to set method but it overrides fields even without content leaving the field undefined on db)
// db.collection('cafes').doc('47vnuDH0exlBdfMK6PlB').set({ name: 'Seted Field' })

// GET DATA FROM FIRESTORE
// let cafes = db
//   .collection('cafes')
//   .where('city', '==', 'London') //this allows to make queries....awesome (case sensitive)
//   .orderBy('name') //this allows to make order data by field....awesome (case sensitive)
//   .get()
//   .then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//       renderCafe(doc)
//     })
//   })
