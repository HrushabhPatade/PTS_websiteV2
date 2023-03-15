import { Link } from "react-router-dom";
import pts from "./PTS.jpeg";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import React, { useEffect } from "react";

const Nav = ({ userCred, setUserCred, userDetails, setUserDetails }) => {
  const nav = useNavigate();
  console.log(userDetails);

  // setUser(email)

  // const loc = useLocation();
  const auth = getAuth();

  const lo = () => {
    // console.log(userCred);
    setUserCred(null);
    setUserDetails(null);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        nav("/login");
      })
      .catch((error) => {
        alert(error);
        // An error happened.
      });
  };

  return (
    <>
      <div className="nav nav_top">
        <div className="logo">
          <Link to="/">
            <img src={pts} width="80" />
          </Link>
        </div>
        <div className="nav_side ">
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
          {!userCred ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/registration">Register</Link>
            </>
          ) : (
            <>
              <Link to="/">Hello {userDetails ? userDetails.name : null}</Link>
              <Link
                onClick={() => {
                  lo();
                }}
              >
                Logout
              </Link>
            </>
          )}
          {/* /* //conditionalrendering changepassword */}
        </div>
      </div>
    </>
  );
};

export default Nav;
