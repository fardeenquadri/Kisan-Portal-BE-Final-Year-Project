import React from 'react'
import axios from 'axios'
import { useState } from 'react'
// import './CSS/LoginSignUp.css'
import {Link,useNavigate,useHistory } from 'react-router-dom'
import './Login.css'


function Login() {

  // const history = useHistory();

  const [values,setValues]= useState({

    email:'',
    password:''

  })

  const navigate = useNavigate();

  function handleSubmit(e){

    e.preventDefault();

    if(values.email.length==0 || values.password.length==0){

      alert("Fill all fields")
    }else{

      axios.post("http://localhost:4500/login/",values)
      .then(res=>{
        console.log(res);
        if(res.data =="sucess"){
          
          // console.log(res.json());
           alert("login sucessfull")
          navigate('/home');

          // history.push('/home', { state: values });
        }
        else{
  
          alert("no record found");
          console.log(res);
        }
  
       
      })
      .catch(err=>console.log(err));

    }
    

  }


  return (
    <div className='loginsignup'>
      
      <div className='login-container'>

      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <div className='loginsignup-fields'>

         
          <input type='email'name="email" placeholder='Email Address' onChange={e=>setValues({...values,email:e.target.value})}/>
          <input type='password' placeholder='Password' name='fpassword' onChange={e=>setValues({...values,password:e.target.value})}/>
        </div>
        <button>Login</button>
        </form>
        {/* <p className='loginsignup-login'>Already have an account? <span></span></p> */}


        <p className='loginsignup-login'>If don't have account? <span><Link to='/registartion'>Register here</Link></span></p>

        <div className='loginsignip-agree'>
           
            
            
        </div>

      </div>
    </div>
  )
}

export default Login;