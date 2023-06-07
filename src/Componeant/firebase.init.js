// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDh4sF4NA_LfGSGuiRQGblXdt9nnvQ2YaU",
    authDomain: "login-setup-in-firebase.firebaseapp.com",
    projectId: "login-setup-in-firebase",
    storageBucket: "login-setup-in-firebase.appspot.com",
    messagingSenderId: "691491869531",
    appId: "1:691491869531:web:03be6d9c95f5a9ebe7407e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;