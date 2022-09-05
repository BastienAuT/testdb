// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLnV6xpd3UMC0LB4NyDR9vM_ZbD8Z_Mko",
  authDomain: "cvbastien-62f32.firebaseapp.com",
  databaseURL: "https://cvbastien-62f32-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cvbastien-62f32",
  storageBucket: "cvbastien-62f32.appspot.com",
  messagingSenderId: "742470686487",
  appId: "1:742470686487:web:2aa544de16b4f3a8e84952",
  measurementId: "G-TZXVQLE7NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialise Firestore
export const db = getFirestore(app);
