// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUUCwjny29pIK8ttolTKPxDJUm6KI7X8A",
  authDomain: "cs-ia2-2ca07.firebaseapp.com",
  databaseURL: "https://cs-ia2-2ca07-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cs-ia2-2ca07",
  storageBucket: "cs-ia2-2ca07.appspot.com",
  messagingSenderId: "403185341237",
  appId: "1:403185341237:web:1942429ae467f6f520f27c",
  measurementId: "G-NMEP9QK9KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };