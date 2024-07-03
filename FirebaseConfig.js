import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCz_YS3KEbxZhRHfUTPPGh23z4KcGVvoVM",
  authDomain: "test-29693.firebaseapp.com",
  projectId: "test-29693",
  storageBucket: "test-29693.appspot.com",
  messagingSenderId: "566302227632",
  appId: "1:566302227632:web:252d9fe4dabf42780a8f75"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
