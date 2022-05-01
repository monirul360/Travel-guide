// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAV_ed0fTodjStdCclKMFopxEz6eQKpKAg",
    authDomain: "assginment-10.firebaseapp.com",
    projectId: "assginment-10",
    storageBucket: "assginment-10.appspot.com",
    messagingSenderId: "896663288527",
    appId: "1:896663288527:web:bd8ba3e44a0a69b6a7d5ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;