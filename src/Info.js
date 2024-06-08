import React from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import farm14 from './image/farm14.jpg';
import farm9 from './image/farm9.jpg';
import farm19 from './image/farm19.webp';
import reg1 from './image/reg1.jpg';
import bar1 from './image/bar1.jpg';
import bar2 from './image/bar2.jpg';
import market1 from './image/market1.jpg';
import  crop from'./image/crop.jpg';
import farm20 from './image/farm20.webp';
import  farm17 from'./image/farm17.png';
import  farm18 from'./image/farm18.jpg';
import farm15 from './image/farm15.jpg';
import farm11 from  './image/farm11.jpg';
import Home from './Home';
import Registration from './Registration';
import Login from './Login';












function Info() {
  return (
    <>
    <Home/>
    <div className='info'>
      
      <div className='farm-img'>
        <img src={farm9} height="430px" width="1150px"/>
          <div className='moto'>
          <img src={farm18} height="150px" width="300px"/>
         
           <div>
           <h2>Our Moto</h2>
           <label>Smart Farmer</label><br></br><br></br>
           <label>Farmer Impowerment</label><br></br><br></br>
           <label>Smart Agriculture</label><br></br><br></br>
           <label>Organic Farmig</label><br></br><br></br>
           <label>Real time crop data</label>
           </div>
          

          </div>
      </div>

     <div className='cards'>

        <Link to='/registartion'> <div className='card1'>
            <img src={reg1} height="150px" width="145px"/><br></br>
           <label>Registration</label> 
           
         </div>
         </Link>

        <Link to='/data'><div className='card1'>
            <img src={bar1} height="150px" width="145px"/><br></br>
           <label>Crop Plantation Data</label> 
           
         </div></Link> 

         <div className='card1'>
            <img src={market1} height="150px" width="145px"/><br></br>
           <label>Market</label> 
           
         </div>
         <div className='card1'>
            <img src={crop} height="150px" width="145px"/><br></br>
           <label>Crop Info</label> 
           
         </div>

         <img src={farm15} height="300px" width="200px"/>
       

     </div>

       <div className='steps'>
        <div className='li-div'>
        <h2>Process For Get Real Time Crop Data </h2>
       <ul>
        <li>Step1: Register yourself</li>
        <li>Step2: Create Profile</li>
        <li>Step3: Add crop Information</li>
        <li>Step4: Get Real time data </li>
       </ul>
        </div>

       <div className='contact'>

        <h2>contact</h2>
        <label>Phone:9373103366</label><br></br>
          <label>Email:akshirs2020@gmail.com</label><br></br>
          <label></label>
       </div>
    

       </div>

       
    </div>

    </>
  )
}

export default Info
