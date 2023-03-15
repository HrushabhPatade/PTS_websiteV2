import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import db from "./FirebaseConfig";
import { ref, set } from "firebase/database";
import { getDatabase, onValue} from "firebase/database";


function Login({ setUserCred, setUserDetails }) {
  const nav = useNavigate();

  // useEffect(() =>{
  //     const email = localStorage.getItem("email");
  //     if(email != null)
  //         nav("/");
  // },[])

  const [email, setEmail] = useState("");
  const [pwd1, setPwd1] = useState("");

  const Check = (event) => {
    event.preventDefault();
    

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pwd1)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUserCred(user);
        const db = getDatabase();
        const starCountRef = ref(db, "registrations/"+user.uid);
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          setUserDetails(data);
        });
        nav("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <>
      <center>
        <div className="login" style={{ "padding-top": "100px;" }}>
          <h2>Login Page</h2>
          <div className="login_form" style={{ "padding-bottom": "25px;" }}>
            <form>
              <input
                type="email"
                name="Email"
                placeholder="Enter Email ID"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <br />

              <input
                type="password"
                name="Password"
                placeholder="Enter Password"
                onChange={(event) => {
                  setPwd1(event.target.value);
                }}
              />
              <br />
              <Link to="/fp">Forgot Password ?</Link>

              <div className="login_btn">
                <Link onClick={Check}>Login</Link>
              </div>

              <div className="login_btn" style={{ "padding-top": "10px;" }}>
                <p>Don't have an account ? Register Now - </p>
                <br />
                <Link to="/registration">Register Now</Link>
              </div>
            </form>
            <br />
            <br />
          </div>
        </div>
        <Footer />
      </center>
    </>
  );
}

export default Login;
