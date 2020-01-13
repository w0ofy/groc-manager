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
const groceryItemsRef = () => db.collection(GROCERY_ITEMS);
const getGroceryDoc = id => groceryItemsRef().doc(id);


const getGroceries = (setItems) => groceryItemsRef().orderBy('name').onSnapshot(snapshot => {
  let newItems = [];
  snapshot.forEach(doc => {
    const item = doc.data();
    item.id = doc.id
    newItems.push(item);
  });
  setItems(newItems)
});



export const updateItem = (id, data) => getGroceryDoc(id).update(data)

export const deleteItem = (id) => getGroceryDoc(id).delete();

export const addItem = (item, setItem) => groceryItemsRef().add({
  name: item,
  date_bought: new Date(),
  have: false,
  selected: false,
}).then(() => {
  setItem('')
});

export default getGroceries