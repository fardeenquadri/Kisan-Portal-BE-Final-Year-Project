import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios";

function Registration() {

  const [values,setValues] = useState({

    fname:'',
    email:'',
    mobile:'',
    password:'',
    
    // fimg:'',
    // seventimg:'',
    // eightAimg:''
  
  })

  const navigate = useNavigate();

  function handleSubmit(e){
     
    e.preventDefault();
    axios.post("http://localhost:4500/reg/",values)
    .then(res=>{

      console.log(res);
      alert("registration sucessful")
      navigate('/');
    })
    .catch(err=>console.log(err))
  }

  
  return (
    <div>
   

    <div className="sign-up">

        <h1>Registration Page</h1>
       
           <form onSubmit={handleSubmit}>
             <label>Name</label>
               <input type="text" name="fname" id="name" onChange={e=>setValues({...values,fname:e.target.value})}></input>
               <br></br><br></br>
              
             <label>Email:</label>
             <input type="text" name="email" id="email"  onChange={e=>setValues({...values,email:e.target.value})}></input>
             <br></br><br></br>
             <label>Mobile:</label>
             <br></br>
            
               <input type="text" name="mobile" id="number" onChange={e=>setValues({...values,mobile:e.target.value})}></input>
               <br></br><br></br>
            <label>Password:</label>
            <input type="password" name="fpassword" id="password" onChange={e=>setValues({...values,password:e.target.value})}></input>
            <br></br><br></br>
            <label>Confimed password</label>
             <input type="password" name="cpassword" id="cpassword" onChange={e=>setValues({...values,cpassword:e.target.value})}></input>
             <br></br><br></br>
             <label>upload image of farmer</label> 
             <input type='file' name='fimg' id='fimg'  onChange={e=>setValues({...values,fimg:e.target.value})}></input><br></br>

             <label>upload 7/12</label>
             <input type='file' name='seventimg' onChange={e=>setValues({...values,seventimg:e.target.value})}></input><br></br>
            
             <label>upload 8/A</label>
             <input type='file' name="eightAimg" onChange={e=>setValues({...values,eightAimg:e.target.value})}></input><br></br>
            
             <input type="submit" name="submit" class="signbtn" ></input>
             
               </form>
            
            
</div>

    </div>
  )
}

export default Registration
