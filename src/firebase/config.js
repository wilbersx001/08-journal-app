// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMgbPc__tEMSlLIEPIASvQ7raVUOAJ7Qg",
  authDomain: "react-curso-e2a73.firebaseapp.com",
  projectId: "react-curso-e2a73",
  storageBucket: "react-curso-e2a73.appspot.com",
  messagingSenderId: "248670127595",
  appId: "1:248670127595:web:cdbd14ae9c60c0759b45ae",
  measurementId: "G-7E5CY0G248"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FireBaseApp);
export const FirebaseDB = getFirestore(FireBaseApp);