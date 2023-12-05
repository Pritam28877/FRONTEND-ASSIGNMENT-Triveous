// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//getAuth for authentication, getFirestore for database, getStorage to store any uploaded file/image
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkwPQjYl4-kMhX9Liok7Qx38F98nN6EVk",
  authDomain: "chat-app-838b0.firebaseapp.com",
  projectId: "chat-app-838b0",
  storageBucket: "chat-app-838b0.appspot.com",
  messagingSenderId: "154224321393",
  appId: "1:154224321393:web:49124adbd8df7a0d3c8cd0",
  measurementId: "G-X2MDN6XHEL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
