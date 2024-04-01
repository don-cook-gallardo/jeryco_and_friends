import './App.css';
import "../src/styles/style.css";
import "animate.css";
import Home from "./components/Home"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR-8A8FmdswN9FG7zpaHRZuUHun8hDzxU",
  authDomain: "popkink-1762c.firebaseapp.com",
  projectId: "popkink-1762c",
  storageBucket: "popkink-1762c.appspot.com",
  messagingSenderId: "942629504102",
  appId: "1:942629504102:web:7f4ce25d6bfc1c880699a7",
  measurementId: "G-6NQCM80XB5"
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
