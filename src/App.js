import logo from "./logo.svg";
import "./App.css";
import Quote from "./components/Quote";
import Cart from "./components/Cart";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Reg from "./components/Reg";
import ForgotPassword from "./components/ForgotPassword";
import Cards from "./components/Cards";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Routes, Route, Navigate } from "react-router-dom";
import { getDatabase } from "firebase/database";
import db from "./components/FirebaseConfig";
import { useState, useEffect } from "react";
import BuyNow from "./components/BuyNow";
import Nav from "./components/Nav";
import { CartProvider } from 'react-use-cart';
function App() {
  const [userCred, setUserCred] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  console.log(userDetails);
  console.log(userCred);

  useEffect(() => {
    console.log(userCred);
  }, [userCred]);
  return (
    <>
    <CartProvider>
      <Nav
        userCred={userCred}
        setUserCred={setUserCred}
        setUserDetails={setUserDetails}
        userDetails={userDetails}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/login"
          element={
            <Login setUserCred={setUserCred} setUserDetails={setUserDetails} />
          }
        />
        <Route path="/registration" element={<Reg />} />
        <Route path="/fp" element={<ForgotPassword />} />
        <Route path="/buy" element={<BuyNow />} />
        <Route path="*" element={<Navigate to="/" />} />
        
      </Routes>
      </CartProvider>
    </>
  );
}

export default App;
