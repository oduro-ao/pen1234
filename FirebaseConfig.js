import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDpIkzWoGwh67r3ewzgTL5UqZw_zZtgrJQ",
  authDomain: "peniel-bd099.firebaseapp.com",
  projectId: "peniel-bd099",
  storageBucket: "peniel-bd099.appspot.com",
  messagingSenderId: "1077687082209",
  appId: "1:1077687082209:web:266f1239531b757bca6ba0"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
