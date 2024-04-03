// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAltf6eIu5-IlIX5bacL6fKR8u70J-tpYo",
  authDomain: "auth-integration-private-439d0.firebaseapp.com",
  projectId: "auth-integration-private-439d0",
  storageBucket: "auth-integration-private-439d0.appspot.com",
  messagingSenderId: "394778190234",
  appId: "1:394778190234:web:612b2757b503cebdf95a23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;