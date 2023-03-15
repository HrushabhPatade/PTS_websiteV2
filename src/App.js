import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Reg from "./Reg";
import ForgotPassword from "./ForgotPassword";
import Cards from "./Cards";
import Services from "./Services";
import Contact from "./Contact";
import { Routes, Route, Navigate } from "react-router-dom";
import { getDatabase } from "firebase/database";
import db from "./FirebaseConfig";
import { useState, useEffect } from "react";
import BuyNow from "./BuyNow";
import Nav from "./Nav";

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
    </>
  );
}

export default App;
