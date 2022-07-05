// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCgExAjPgGDy70tb5yhBvPjRmPzKO2GIw",
  authDomain: "olx-clone-iitg.firebaseapp.com",
  projectId: "olx-clone-iitg",
  storageBucket: "olx-clone-iitg.appspot.com",
  messagingSenderId: "854653747680",
  appId: "1:854653747680:web:e5fade07e5f546321a6b85"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
