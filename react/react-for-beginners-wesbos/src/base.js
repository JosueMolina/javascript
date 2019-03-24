import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "apiKey",
  authDomain: "catch-of-the-day-kevin-77d74.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-kevin-77d74.firebaseio.com"
});

export { firebaseApp };

const base = Rebase.createClass(firebaseApp.database());

export default base;