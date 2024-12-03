// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqR0kn_-RwW3D1WhcxyEBKZCHSg4eTDZM",
  authDomain: "coffee-store-ec199.firebaseapp.com",
  projectId: "coffee-store-ec199",
  storageBucket: "coffee-store-ec199.firebasestorage.app",
  messagingSenderId: "1005289474136",
  appId: "1:1005289474136:web:2c02256a6f760f4019a22d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);