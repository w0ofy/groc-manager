import firebase from 'firebase';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
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