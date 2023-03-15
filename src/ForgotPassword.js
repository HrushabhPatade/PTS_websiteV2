import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import db from './FirebaseConfig';
import { ref, set }  from "firebase/database";


function ForgotPassword()
{
    const nav = useNavigate();

    useEffect(() =>{
        if(email != null)
            nav("/");
    },[])

    const[email, setEmail] = useState("");
    

    const FP = (event) =>{
        event.preventDefault();
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
        .then(res=>{
            alert("Please Check your Email");
             nav("/login")
        })
        .catch(err=> alert("issue" + err))
}


    return(
        <>
        <center>
        <div className="login" style={{"padding-top": "100px;"}}>
        <h2>Forgot Password</h2>
        <div className="login_form" style={{"padding-bottom": "25px;"}}>
            <form >

                <input type="email" name="Email" placeholder="Enter Email ID" onChange={(event) =>{setEmail(event.target.value);}}/><br/>

                

                <div className="login_btn">
                    <Link onClick={FP}>Send Email</Link>
                </div>

                <br/><br/><br/><br/><br/><br/>
            </form>
        </div>

    </div>
    <Footer/>
    </center>
        </>
    );



}

export default ForgotPassword;