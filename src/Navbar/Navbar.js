import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import farmer17 from '../image/farm17.png'

function Navbar() {


  const [menu, setMenu] = useState("home");


  return (
    <div className='navbar'>
      
      <div class="header">
  <div className='logo'>
  {/* <p><a>National<span> Kisan </span>Portal</a></p> */}
    <img src={farmer17}/>
  <p><a>National<span> Kisan </span>Portal</a></p>

  </div>
  <div>
  <ul>
  
  <Link to="/home"> <li><a href="#">Home</a></li></Link>  
 <Link to="/data"> <li ><a href="#">Crop Data</a></li></Link>  
 <Link to="/addData"><li ><a>Add Crop</a></li></Link> 
  {/* <Link> <li><a href="http://127.0.0.1:5000/">Recommendation</a></li></Link> */}

  <li><a href="http://127.0.0.1:5000/">Recommendation</a></li>
  
  <Link to="/adminLogin"> <li><a href="#">Admin</a></li></Link>   
 
  
  </ul>


  </div>

   <Link to='/registartion'> <div className='login-btn'>

  <button><Link to="/login">Logout</Link></button>
    </div></Link>

  

</div>
{/* <hr></hr> */}
    </div>
  )
}

export default Navbar