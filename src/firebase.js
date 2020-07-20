import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  // Add your firebase config here!
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
