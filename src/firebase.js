// Firebase imports
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  // Your firebase config
  apiKey: "AIzaSyCsT4CsBnVct5FivO4HQ4pi0faW5IX1YgE",
  authDomain: "packers-d9457.firebaseapp.com",
  projectId: "packers-d9457",
  storageBucket: "packers-d9457.appspot.com",
  messagingSenderId: "303213134112",
  appId: "1:303213134112:web:1619fd6b5c436100b91745",
  measurementId: "G-X2W0FVK2Q8"
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };