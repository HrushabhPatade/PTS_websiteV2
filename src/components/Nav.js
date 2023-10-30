import { Link } from "react-router-dom";
import pts from "../images/PTS.jpeg";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const Nav = ({ userCred, setUserCred, userDetails, setUserDetails }) => {
  const nav = useNavigate();
  const auth = getAuth();

  const lo = () => {
    setUserCred(null);
    setUserDetails(null);
    signOut(auth)
      .then(() => {
        nav("/login");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center  justify-content-md-between py-3 mb-4 border-bottom bg-white">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link to="/">
            <img src={pts} width="80" alt="Logo" />
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li className="nav-item">
            <Link to="/" className="nav-link text-dark">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link text-dark">
              Our Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link text-dark">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link text-dark">
              About Us
            </Link>
          </li>
          {userCred && (
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark" onClick={lo}>
                Logout
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link to="/cart" className="nav-link text-dark">
              <BsFillCartFill size={24} /> {/* Cart icon without explicit color */}
            </Link>
          </li>
        </ul>

        <div className="d-flex align-items-center">
          {userCred ? (
            <>
              <div className="me-3">Hello, {userDetails ? userDetails.name : "Username"}</div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-dark me-2">
                Login
              </Link>
              <Link to="/registration" className="btn btn-dark">
                Register
              </Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Nav;
