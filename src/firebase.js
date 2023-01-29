import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrbMoTN4lbdi_CN7shfoY9EdRyZ00ln44",
  authDomain: "twitter-clone-final.firebaseapp.com",
  projectId: "twitter-clone-final",
  storageBucket: "twitter-clone-final.appspot.com",
  messagingSenderId: "524050591010",
  appId: "1:524050591010:web:7d6caa5be72da99b7b097b",
  measurementId: "G-68DH1W46YC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
