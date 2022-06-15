// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPepxB7rP2Vj4XRyls91Nl6zUyfT5otDE",
    authDomain: "chore-wheel-c9628.firebaseapp.com",
    projectId: "chore-wheel-c9628",
    storageBucket: "chore-wheel-c9628.appspot.com",
    messagingSenderId: "325402278762",
    appId: "1:325402278762:web:240683e3236f6643254313"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;