// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBahZi4kvD3Ml5PmVvE1SyEqkYYL59MRrk",
    authDomain: "berkeleyhacks24.firebaseapp.com",
    projectId: "berkeleyhacks24",
    storageBucket: "berkeleyhacks24.appspot.com",
    messagingSenderId: "657471536183",
    appId: "1:657471536183:web:186128126ac79e4b1553b2",
    measurementId: "G-QBZFW1XJJM"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app)
export const storage = getStorage(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

