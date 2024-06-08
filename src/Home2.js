import React from 'react'
import { Link } from 'react-router-dom';


function Home2() {
  return (
    <div className='home2'>
      <div id="home-main">

<div class="header">
  <h1><a>National<span> Kisan </span>Portal</a></h1>

  <div>
  <ul>
    <li><a href="#">Pest</a></li>
  <li><a href="#">Fertilizer</a></li>
  <li><a href="#">Weather</a></li>
  <li><a href="#">Crop</a></li>
  <li><a href="#">Market</a></li>
  <Link to="/mail"><li><a>Contact</a></li></Link>
  <Link to="/profile"><li><a>Profile</a></li></Link>
  
  </ul>


  </div>

 

</div>



<div className="image-section">

  <h1>India with <span> 53% Populaton</span><br/>Involved in Agriculture Sector</h1>  

  <div id="btn">

    <button><Link to="/registartion">Registration</Link></button> <button><Link to="/login">Login</Link></button>
  </div>
  </div>

    </div>
   
    </div>
  )
}

export default Home2;
