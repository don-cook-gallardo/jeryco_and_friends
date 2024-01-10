import './App.css';
import "../src/styles/style.css";
import "animate.css";
import Home from "./components/Home"

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB0M-4ScHH1TtJDnVwgXnay0OaaJjPecgA",
  authDomain: "sundried-c6a7a.firebaseapp.com",
  projectId: "sundried-c6a7a",
  storageBucket: "sundried-c6a7a.appspot.com",
  messagingSenderId: "290455220059",
  appId: "1:290455220059:web:e16d157c7d611ed972f47e",
  measurementId: "G-B0MFVGS2GX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <Home/>
  );
}

export default App;
