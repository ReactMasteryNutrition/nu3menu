// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnWbOx8gYsX0sYd7WodDJj06G4Ijr0kvE",
    authDomain: "nu3menu.firebaseapp.com",
    databaseURL: "https://nu3menu-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "nu3menu",
    storageBucket: "nu3menu.appspot.com",
    messagingSenderId: "1004160040248",
    appId: "1:1004160040248:web:fcb4726cd9f80b0c7755cd",
    measurementId: "G-D7SFH1YJQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

