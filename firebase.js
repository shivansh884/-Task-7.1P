import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBJFE6_mWXrmz3IdCbvQQmb91jNOIFpzNQ",
  authDomain: "deakin-web-app-7faca.firebaseapp.com",
  projectId: "deakin-web-app-7faca",
  storageBucket: "deakin-web-app-7faca.firebasestorage.app",
  messagingSenderId: "663258046061",
  appId: "1:663258046061:web:6b1bea63eb6ce7762f2964",
  measurementId: "G-VKLZ8QQ80J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

export { auth, db }; 



