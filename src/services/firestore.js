import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDL34s2mOYibiFlvlWA2O3VqlC94ElmWR4",
  authDomain: "groc-manager.firebaseapp.com",
  databaseURL: "https://groc-manager.firebaseio.com",
  projectId: "groc-manager",
  storageBucket: "groc-manager.appspot.com",
  messagingSenderId: "55250541995",
  appId: "1:55250541995:web:bc2c9c7e9b13c7be4bc6ee"
};

firebase.initializeApp(firebaseConfig);

export const GROCERY_ITEMS = 'grocery_items';
const db = firebase.firestore();

const getGroceries = (setItems) => db.collection(GROCERY_ITEMS).get().then(snapshot => {
  let newItems = [];
  snapshot.forEach(doc => {
    const item = doc.data();
    item.id = doc.id
    newItems.push(item);
  });
  setItems(newItems)
})

export const getGroceriesByHave = (setItems, have = true) => db.collection(GROCERY_ITEMS).where('have', '==', have).get().then(snapshot => {
  let newItems = [];

  if (snapshot.empty) {
    console.log('No matching documents.');
  }

  snapshot.forEach(doc => {
    const item = doc.data();
    item.id = doc.id
    newItems.push(item);
  });
  return setItems(newItems)
});

export const deleteItem = (id) => db.collection(GROCERY_ITEMS).doc(id).delete();

export const addItem = (item, setItem) => db.collection(GROCERY_ITEMS).add({
  name: item,
  date_bought: new Date(),
  have: false,
  selected: false,
}).then(() => {
  setItem('')
});

export default getGroceries