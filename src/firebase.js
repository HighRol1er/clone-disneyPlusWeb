// import {initializeApp} from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID 
}

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); 
const auth = getAuth();
// const provider = new firebase.auth.GoogleAuthProvider();
const provider = new GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
export { provider, firebaseApp, auth };
export default db;