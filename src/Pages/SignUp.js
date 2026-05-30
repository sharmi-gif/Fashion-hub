import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const SignUp = () => {

const navigate=useNavigate();
   const [email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[repassword,setrepassword]=useState("");
  const submit =()=>{
    localStorage.setItem("email", email);
localStorage.setItem("password", password);
localStorage.setItem("repassword",password);
if(password===repassword){
 alert("Account created");
 navigate("/Login")

}
else{
  alert("Invalid Password");
}

  }
  
  return (
    <div className="Sign-Up">
        <h1> Create a account</h1>
        <input type="text" placeholder='Enter the email'onChange={(e)=>setemail(e.target.value)}>
        </input>
        <input type="Password" placeholder="Password"onChange={(e)=>setpassword(e.target.value)}/>
        <input type="Password" placeholder="Re-type Password" onChange={(e)=>setrepassword(e.target.value)}/>
        <button onClick={submit}>Submit</button>


    </div>
  )
}

export default SignUp