import './App.css';
import "../src/styles/style.css";
import Home from "./components/Home"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0M-4ScHH1TtJDnVwgXnay0OaaJjPecgA",
  authDomain: "sundried-c6a7a.firebaseapp.com",
  projectId: "sundried-c6a7a",
  storageBucket: "sundried-c6a7a.appspot.com",
  messagingSenderId: "290455220059",
  appId: "1:290455220059:web:e16d157c7d611ed972f47e",
  measurementId: "G-B0MFVGS2GX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <Home/>
  );
}

export default App;
