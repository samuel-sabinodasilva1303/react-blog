import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxsr0DYckLqEAsHKzL7IOa0luSgpwqlUk",
  authDomain: "blog-df713.firebaseapp.com",
  projectId: "blog-df713",
  storageBucket: "blog-df713.appspot.com",
  messagingSenderId: "712908402194",
  appId: "1:712908402194:web:d3a3b2c16ebaeda28432cb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };