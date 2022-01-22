// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBolARj0Xx7OJSaSmQ-FIOd9-_9MDBHZfM",
  authDomain: "fms-systems.firebaseapp.com",
  projectId: "fms-systems",
  storageBucket: "fms-systems.appspot.com",
  messagingSenderId: "990910060521",
  appId: "1:990910060521:web:dd44dfcb6fce63bfb55d78",
  measurementId: "G-6W7K341T7R",
};

export const app = initializeApp(firebaseConfig);

export const fireStorage = getFirestore(app);

initializeApp(firebaseConfig);
