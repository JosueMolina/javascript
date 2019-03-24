import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCoEa4jBUcri-O_FyzR4VxZrxRjEzUCx0",
  authDomain: "catch-of-the-day-kevin-77d74.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-kevin-77d74.firebaseio.com"
});

export { firebaseApp };

const base = Rebase.createClass(firebaseApp.database());

export default base;