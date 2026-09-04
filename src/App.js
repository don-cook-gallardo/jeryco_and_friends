import './App.css';
import "../src/styles/style.css";
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Singles from './pages/Singles';
import Tour from './pages/Tour';
import Fashion from './pages/Fashion';
import Merch from './pages/Merch';
import Crush from "./pages/Crush"
import LoadingIcon from "./components/LoadingIcon"
import Tabs from './components/Tabs';

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

    const [slideUp, setSlideUp] = useState(false);
    
    useEffect(() => {
        // Wait 3 seconds, then slide up
        const timer = setTimeout(() => {
            setSlideUp(true);
        }, 3000); // 3000ms = 3 seconds
        
        return () => clearTimeout(timer);
    }, []);

  return (
   <BrowserRouter>
    <div style={{ position: 'relative', width: '100vw', overflow: 'hidden' }}>
        <LoadingIcon/>
<div
                style={{
                    position: 'relative',
                    marginTop: slideUp ? '-100vh' : '0px',
                    transition: 'margin-top 1s ease-in-out',
                    minHeight: '120vh',
                    width: '100vw',
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingTop: "25px",
                }}
            >
 <div style={{padding:'5px'}}></div> 
 <Tabs/>
      <Routes>
        <Route path="/crush" element={<Crush />} />
        <Route path="/singles" element={<Singles />} />
        {/* <Route path="/tour" element={<Tour/>} /> */}
        <Route path="/fashion" element={<Fashion/>} />
        {/* <Route path="/merch" element={<Merch />} /> */}
        <Route path="/" element={<Crush/>} /> {/* default route */}
      </Routes></div></div>
    </BrowserRouter>
  );
}

export default App;
