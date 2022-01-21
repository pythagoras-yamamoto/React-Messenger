// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfing = {
  apiKey: "AIzaSyCehIr5CcOwZaE95PUASlP8TvQzqw0BGJ4",
  authDomain: "react-messenger-58a88.firebaseapp.com",
  // databaseURL: "http://react-messenger-58a88.firebaseio.com",
  projectId: "react-messenger-58a88",
  storageBucket: "react-messenger-58a88.appspot.com",
  messagingSenderId: "739305412974",
  appId: "1:739305412974:web:700f8910519494007e897f",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig); // eslint-disable-line
const firebaseApp = firebase.initializeApp(firebaseConfing);
const db = firebaseApp.firestore(); // eslint-disable-line
const auth = firebase.auth(); // eslint-disable-line

export { db, auth };
