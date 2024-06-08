import React, { useState } from 'react'
import axios from 'axios';

function Mail() {

    const [values,setValues] = useState({

        mail:'',
        subject:'',
        message:''

    })

    function handleSubmit(e){

        e.preventDefault();
        //alert("Email send Sucessfully");
        axios.post("http://localhost:4500/mail/",values)
        .then(res=>{
    
          console.log(res);
          alert("Email send Sucessfully");
          
        })
        .catch(err=>console.log(err))

    }

  return (
    <div className='mail'>
      
      <form onSubmit={handleSubmit}>
        <h1>Send Email</h1>
        <input type='email' name='mail' placeholder='Enter your email' onChange={e=>setValues({...values,mail:e.target.value})}/><br></br>
        <input type='text' name='subject' placeholder='Enter your subject' onChange={e=>setValues({...values,subject:e.target.value})}/><br></br>
        <textarea rows={10} cols={70} placeholder='Write your message' onChange={e=>setValues({...values,message:e.target.value})}/><br></br>
        <button type='submit'>Send</button>

      </form>
    </div>
  )
}

export default Mail
