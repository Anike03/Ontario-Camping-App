import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsTbVBmYgkYMQVNZKiyMSDmBtbKesCHPM",
  authDomain: "ontario-camping-site.firebaseapp.com",
  projectId: "ontario-camping-site",
  storageBucket: "ontario-camping-site.appspot.com",
  messagingSenderId: "549917062404",
  appId: "1:549917062404:web:5b75d6c189131069694c51",
  measurementId: "G-Y5V0FMPRTS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };