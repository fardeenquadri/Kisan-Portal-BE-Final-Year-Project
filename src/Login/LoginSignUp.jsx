import React from 'react'
import './LoginSignUp.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import {Link} from 'react-router-dom'

function LoginSignUp() {

  
  const [values,setValues] = useState({

    name:'',
    email:'',
    mobile:'',
    password:'',
  
    // fimg:'',
    // seventimg:'',
    // eightAimg:''
  
  })

  const navigate = useNavigate();

  async function handleSubmit(e){
     
    e.preventDefault();
   if(values.name==0 || values.email==0 || values.mobile==0 || values.password==0){

    alert("Fill all fields")
   }
   else{

    let response = await  axios.post("http://localhost:4500/reg/",values)
    if(response.data=="sucess"){

      alert("registartion sucessfull")
      navigate("/login")
    }
   }

  }





  return (
    <div className='loginsignup'>
      
      <div className='loginsignup-container'>

       <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
         

          <input type='text' placeholder='Your Name' name="fname" id="name" onChange={e=>setValues({...values,name:e.target.value})}/>
          <input type='email' placeholder='Email Address' name="email" id="email"  onChange={e=>setValues({...values,email:e.target.value})}/>
          <input type='mobile' placeholder='Enter Mobile' name="mobile" id="number" onChange={e=>setValues({...values,mobile:e.target.value})}/>
          <input type='password' placeholder='Enter Password' name="fpassword" id="password" onChange={e=>setValues({...values,password:e.target.value})}/>
          {/* <input type='password' placeholder='Enter Confirm Password' name="cpassword" id="cpassword" onChange={e=>setValues({...values,cpassword:e.target.value})}/> */}
          {/* <input type='file' placeholder='Email Address' name='fimg' id='fimg'  onChange={e=>setValues({...values,fimg:e.target.value})}/>
          <input type='file' placeholder='Email Address'  name='seventimg' onChange={e=>setValues({...values,seventimg:e.target.value})}/>
         
         
          <input type='file' placeholder='file' name="eightAimg" onChange={e=>setValues({...values,eightAimg:e.target.value})}/> */}
      
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span><Link to='/login'>Login here</Link></span></p>

        <div className='loginsignip-agree'>
           
        </div>
        </form>
        
      </div>
    </div>
  )
}

export default LoginSignUp