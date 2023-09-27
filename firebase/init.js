import {getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJJcEP4qI9ratFsEh2v_O2O_0S17KPDJI",
  authDomain: "senior-project-f120a.firebaseapp.com",
  projectId: "senior-project-f120a",
  storageBucket: "senior-project-f120a.appspot.com",
  messagingSenderId: "171164681339",
  appId: "1:171164681339:web:28712bbfa2a409f6af4ede"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db //this will allow us to use the database anywhere from the application
export const auth = getAuth()