import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const [values,setValues]= useState({

    email:'',
    fpassword:''

  })

  const navigate = useNavigate();

  function handleSubmit(e){

    e.preventDefault();
     axios.post("http://localhost:4500/login/",values)
    .then(res=>{
      console.log(res);
      if(res.data === "success"){
        
        // console.log(res.json());
         alert("login sucessfull")
        navigate('/');
      }
      else{

        alert("no record found");
        console.log(res);
      }

     
    })
    .catch(err=>console.log(err));

  }
  return (
   <div className='login-main'>

<div className='login'>
      <div id="sign-up" class="login1">

<h1>Login Form</h1>

   <form onSubmit={handleSubmit}>
     
     <label>Username</label>
     <input type="text" name="email" onChange={e=>setValues({...values,email:e.target.value})}></input>
     
    <label>Password:</label>
    <input type="password" name="fpassword" onChange={e=>setValues({...values,fpassword:e.target.value})}></input>

     
    
  <input type="submit" name="submit" class="signbtn" id="lbtn"></input>
       </form>
    
    
    
 </div>
 
    </div>
   </div>
  )
}

export default Login
