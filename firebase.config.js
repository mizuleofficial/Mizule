// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBxUxq5ma1eFx6DELwpmhrZCQcrZbygQU",
  authDomain: "mizule-official.firebaseapp.com",
  projectId: "mizule-official",
  storageBucket: "mizule-official.appspot.com",
  messagingSenderId: "939081152453",
  appId: "1:939081152453:web:74cc76887f7e9b8979bdac",
  measurementId: "G-3JBD4MVEJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);