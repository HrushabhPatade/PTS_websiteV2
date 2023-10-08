import { useState, useRef } from "react";
import db from "./FirebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { getDatabase } from "firebase/database";
import { set, ref } from "firebase/database";
import emailjs from "@emailjs/browser";

import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS5zj1kuRd2t3p7588HFk7uDnWQm5oxhE",
  authDomain: "ptswebsite-16219.firebaseapp.com",
  databaseURL: "https://ptswebsite-16219-default-rtdb.firebaseio.com",
  projectId: "ptswebsite-16219",
  storageBucket: "ptswebsite-16219.appspot.com",
  messagingSenderId: "53527251557",
  appId: "1:53527251557:web:1a699c8a505612ac7b548c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const db = getDatabase(app);

function Quote(){
    const rName = useRef();
    

    const[ans,setAns] = useState("");

    const[name, setName] =useState("");
    const[email, setEmail] =useState("");
    const[cno, setCno] =useState("");
    const[desc, setDesc] = useState("");
    const[otp, setOtp] = useState("");
    const[code, setCode] = useState("");

    const configureCaptcha = () => {
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button',{
			'size':'invisible',
			'callback':(response)=>{
				Generate();
				console.log("Recaptca verified")
			},
			defaultCountry: "IN"
	});
	}

    const Generate = (event) =>{
		event.preventDefault();
            

		configureCaptcha();
		let pn = "+91" + cno;
		let av = window.recaptchaVerifier;
		firebase.auth().signInWithPhoneNumber(pn, av)
		.then( res => {
			setCode(res);
			console.log(res);
			console.log("OTP sent");
			alert("OTP sent");
		})
		.catch(err => {
			console.log(err);
		})
	}

    const Check = (event) => {
		event.preventDefault();
		code.confirm(otp)
		.then( res => {
			const d = new Date().toString();
			const n = name + "-->>" + d;
			const data = { name, cno, email, desc, d}
			set(ref(db, "qoutes/"+n), data)
			.then( res => { 
				console.log(res);
                alert("Quotation request send")
                let emaildata ={"from_name":name, "from_email":email, "from_phone":cno, "message":desc};
		        emailjs.send("service_y55jvlk","template_0fl5l1z",emaildata,"RqjTTaqQxpQXbS7Ue")
		        .then(res=>{
                    
                    if(d>10 && d<20)
                        setAns("We will call in 2 hrs");
                    else
                        setAns("We will call you soon");

                })
		        .catch(err=>console.log(err));
				
				// window.location.reload()
			})
			.catch(err=> console.log(err))
		})
		.catch(err=> {
			console.log(err);
			alert("Invalid OTP");
			window.location.reload()

        
	})
	}

    
    return(
        <>
        <div className="quote"  >
        <h2>If you need Quotation for any other Product, please enter information below:</h2>
        <div className="quote_form">
            

		<form name="quote" onSubmit={Generate}>
                <div id="sign-in-button"></div>
                <input type="text" name="name" placeholder="Name" onChange={ (event) => { setName(event.target.value);}}  /><br/>
                
                <input type="email" name="email" placeholder="Email ID" onChange={ (event) => { setEmail(event.target.value);}}  /><br/>
               
                <textarea rows="5" cols="7" name="desc" onChange={ (event) => { setDesc(event.target.value);}}  placeholder="Write the Description of the Product you needed for best price quotation. "></textarea><br/>
                
                <input type="number" name="cno" placeholder="Contact Number" onChange={ (event) => { setCno(event.target.value);}} /><br/>

                <button type="submit">Generate OTP</button>
            </form>



            <form onSubmit={Check}>
                
                <input type="number" name="otp" onChange={(event)=>{setOtp(event.target.value);}} placeholder="Enter OTP"/><br/>
                
                <button type="submit">Submit</button>
            </form>
            <h1>{ans}</h1>
        </div>

        </div>


        </>
    );




}
export default Quote;