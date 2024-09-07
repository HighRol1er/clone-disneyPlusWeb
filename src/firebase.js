// import {initializeApp} from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaOGSta5H1z0HdesGFzV34js77kaXBz6s",
  authDomain: "disneyplus-clone-ad72c.firebaseapp.com",
  projectId: "disneyplus-clone-ad72c",
  storageBucket: "disneyplus-clone-ad72c.appspot.com",
  messagingSenderId: "876274018728",
  appId: "1:876274018728:web:72726b774184026cfb159d",
  measurementId: "G-PD2PE9WVSD" 
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