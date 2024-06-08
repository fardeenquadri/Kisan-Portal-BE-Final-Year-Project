import React from 'react'
import axios from 'axios'
import { useState } from 'react'
// import './CSS/LoginSignUp.css'
import {Link,useNavigate,useHistory } from 'react-router-dom'
import './Login.css'

function AdminLogin() {

  // const history = useHistory();

  const [values,setValues]= useState({

   adminCode:""
  })

  const navigate = useNavigate();

  function handleSubmit(e){

    e.preventDefault();

    if(values.adminCode.length==0){

      alert("Enter admin code")
    }else{

     
        if(values.adminCode =="admin@1837"){
          
          // console.log(res.json());
           alert("welcome to admin page")
          navigate('/admin');

         
        }
        else{
  
          alert("admin code not  matched");
          
        }
  
       
    }
     

    }
    

  


  return (
    <div className='loginsignup'>
      
      <div className='login-container'>

      <form onSubmit={handleSubmit}>
        <h3>Security Code</h3>
        <div className='loginsignup-fields'>

         
          <input type='text' placeholder='Email admin security code' onChange={e=>setValues({...values,adminCode:e.target.value})}/>
         
        </div>
        <button>Go to Admin Page</button>
        </form>

      </div>
    </div>
  )
}

export default AdminLogin;