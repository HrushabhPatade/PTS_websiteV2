import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

function BuyNow(){

    const [name,setName] = useState("");
    const [ cno, setCno] = useState("");
    const [ desc, setDesc ] = useState("");

    const Buy = (event) =>{
        event.preventDefault();
        if ((name.trim().length == 0) || (! name.match(/^[A-z ]+$/))){
            alert("Invalid Name");
            setName("");
           
          
            return;
        }

        if (desc.length==0){
            alert("Description can't be empty"); 
            
            return;
        }  
        if ((cno.length<=0)|| (cno.length>11)){
            alert("Invalid Number");
            
           
          
            return;
    }  
        alert("Order Placed Successfully")
    }

    return(
        <>
        
        <center>
   
   <div className="login" style={{"padding-top": "100px;"}}>
   <h2>Enter Details</h2>
   <div className="login_form" style={{"padding-bottom": "25px;"}}>
       <form >

           <input type="text" name="Name" placeholder="Enter Name"  onChange={(event)=>{setName(event.target.value);}}/><br/>

           <input type="number" name="Cno" placeholder="Enter Contact Number" onChange={(event)=>{setCno(event.target.value);}}/>
           <br/>

           <textarea placeholder="Enter Address" style={{"resize":"none"}} cols={60} rows={5} onChange={(event)=>{setDesc(event.target.value);}}></textarea><br/>

           
           

           <div className="login_btn">
               <Link onClick={Buy}>Buy Now</Link>
           </div>

           
       </form>
       <br/><br/>
   </div>

</div>
<Footer/>
</center>
        
        
        
        
        
        
        </>



    );



}
export default BuyNow;