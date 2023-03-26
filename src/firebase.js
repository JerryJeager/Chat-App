// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAau92LzgTFPAdhAJet3y6udD-ujY0ZY7E",
    authDomain: "eldians.firebaseapp.com",
    projectId: "eldians",
    storageBucket: "eldians.appspot.com",
    messagingSenderId: "507395908212",
    appId: "1:507395908212:web:a7184211181b5428eda721",
    measurementId: "G-TF0DR971DX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()