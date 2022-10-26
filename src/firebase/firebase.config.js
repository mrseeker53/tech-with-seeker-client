// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWkphyaSSGgOOde6StYSkxhQ4OFXxHrIc",
    authDomain: "tech-with-seeker.firebaseapp.com",
    projectId: "tech-with-seeker",
    storageBucket: "tech-with-seeker.appspot.com",
    messagingSenderId: "604209819192",
    appId: "1:604209819192:web:fbe8175fe2897fe1a0c0cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;