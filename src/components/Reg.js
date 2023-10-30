import Footer from "./Footer";
import { useState, useEffect, useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import db from './FirebaseConfig';
import { ref, set }  from "firebase/database";




function Reg(){

    const rName = useRef();
    const rCno = useRef();

    const nav = useNavigate();
    // useEffect( () =>{
    //     const email = localStorage.getItem("email");
    //         if(email != null)
    //             nav("/")
    // },[])

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[cno, setCno] =  useState("");
    const[pwd1, setPwd1] = useState("");
    const[pwd2,setPwd2] = useState("");
    const[ans, setAns] = useState("");
    const auth = getAuth();


    const Save = (email, pwd1, pwd2) =>{
        if ((name.trim().length == 0) || (! name.match(/^[A-z ]+$/))){
            alert("Invalid Name");
            setName("");
            rName.current.focus();
            setAns("");
            return;
        }
        if ((cno.length<=0)|| (cno.length>11)){
            alert("Invalid Number");
            
            rCno.current.focus();
            setAns("");
            return;
    }
    if (pwd1!=pwd2){
        alert("Password not matching");
        
        
        return;
}

        console.log(pwd1, pwd2, email);
        if(pwd1===pwd2){
            createUserWithEmailAndPassword(auth, email, pwd1)
            .then(res=> {
                nav("/login");
                alert("Registration Successful")
                let data = {name, email, cno, pwd1, pwd2};
                let n = res.user.uid
                let r = ref(db, "registrations/"+n);
                set(r, data);
            })
            .catch(err=> alert(err))
        }
        else{
            setAns("Password not matching")
        }
    }
    return(
        <>
        <center>
       
        <div className="reg" style={{"padding-top": "100px;"}}>
        <h2>Registration Page</h2>
        <div className="reg_form" style={{"padding-bottom": "5px;"}}>
        <div class="reg_form" style={{"padding-bottom": "50px;"}}>
        <form name="reg">
                <input type="text" name="Name" placeholder="Name" onChange={ (event) => { setName(event.target.value);}}/><br/>
                <input type="email" name="Email" placeholder="Email ID" onChange={(event) => { setEmail(event.target.value);}}/><br/>
                <input type="number" name="Contact Number" placeholder="Contact Number" onChange={(event) => { setCno(event.target.value);}}/><br/>
                <input type="password" name="Password" placeholder="Set Password" onChange={ (event) => { setPwd1(event.target.value);}}/><br/>
                <input type="password" name="RPassword" placeholder="Re-enter Password" onChange={(event) => { setPwd2(event.target.value);}}/><br/>
                <div className="reg_btn" style={{"padding-top": "10px;"}}>
                    
                    <Link onClick={()=>{Save(email, pwd1, pwd2)}}>Register</Link>
                </div>
                {/* <div className="login_btn">
                <Link onClick={Save}>Login</Link>
              </div> */}
               </form>
               <br/><br/>
            </div>
        </div>

    </div>
    <Footer/>
    </center>
    </>
    );



}

export default Reg;