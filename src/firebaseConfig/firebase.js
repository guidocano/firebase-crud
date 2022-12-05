// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6eR4e5SIfFIShLwyo79HOt8Cvk1yS6yE",
  authDomain: "crud-firebase-cac.firebaseapp.com",
  projectId: "crud-firebase-cac",
  storageBucket: "crud-firebase-cac.appspot.com",
  messagingSenderId: "959189715630",
  appId: "1:959189715630:web:3e48e64547892627047b3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)