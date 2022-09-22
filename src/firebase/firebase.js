// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU1_yRVCeB2X-kFVxQUsxFNcmRLQW7-bs",
  authDomain: "dionel-shop.firebaseapp.com",
  projectId: "dionel-shop",
  storageBucket: "dionel-shop.appspot.com",
  messagingSenderId: "1054581206636",
  appId: "1:1054581206636:web:f28e34b203f8442b90b249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)