import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate("")
  const [email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const Loginfs =()=>{
   const savedEmail = localStorage.getItem("email");
const savedPassword = localStorage.getItem("password");

if(savedEmail === email && savedPassword === password){
   alert("Login Success");
   navigate("/Home");
}
else{
   alert("Invalid Credentials");
}


  }

  return (
    <div className="Login-Page">
       <div className = "Login-card">
        <h1>Login Page</h1>
       
        <input type="text" placeholder="Enter the Email" onChange={(e)=>setemail(e.target.value)} />
        <input type="Password" placeholder='Password' onChange={(e)=>setpassword(e.target.value)}/>

<button onClick={Loginfs}> Login</button>
</div>
    </div>
    
  )
}

export default Login