import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Info from './Info';
import { useLocation } from 'react-router-dom';



function Home() {
  const location = useLocation();
  const dataObject = location.state;
  return (
    <div className='home'>
              <Navbar/>
        
      <div id="home-main">

{/* <div class="header">
  <h1><a>National<span> Kisan </span>Portal</a></h1>

  <div>
  <ul>
  
    
 <Link to="/data"> <li><a href="#">Crop Data</a></li></Link>  
 <Link to="/profile"><li><a>Add Crop</a></li></Link> 

 <Link to="/admin"> <li><a href="#">Admin</a></li></Link>   
  <Link to="/mail"><li><a>Contact</a></li></Link>
 
  
  </ul>


  </div>

 

</div> */}



<div className="image-section">

  <h1>India with <span> 53% Populaton</span><br/>Involved in Agriculture Sector</h1>  

  <div id="btn">

    {/* <button><Link to="/registartion">Registration</Link></button> <button><Link to="/login">Login</Link></button> */}
  </div>
  </div>

    </div>
   {/* <Info/> */}
   {/* <pre>{JSON.stringify(dataObject, null, 2)}</pre> */}
    </div>
  )
}

export default Home;