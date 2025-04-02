// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCktKCGEC51gqk25vxvjltQIvqco3jDVdQ",
  authDomain: "dragon-news-auth-e76e9.firebaseapp.com",
  projectId: "dragon-news-auth-e76e9",
  storageBucket: "dragon-news-auth-e76e9.firebasestorage.app",
  messagingSenderId: "1043935312024",
  appId: "1:1043935312024:web:c1f9d804c22d119b4df8ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);