import React from 'react';
import { BrowserRouter,Routes,Route,Link, Router } from 'react-router-dom';
import Home from './Home';
import './App.css';

import Registration from './Registration';
import Login from './Login/Login';
// This is Comment
import Data from './Data';
import Mail from './Mail';
import Info from './Info';
import Admin from './Admin';
import Futter from './Fotter/Fotter'
import Fotter from './Fotter/Fotter';
import LoginSignUp from './Login/LoginSignUp';
import Navbar from './Navbar/Navbar';
import Qr from './TimePass/Qr';
import AddData from './AddData'
import Home2 from './Home2';
import UpdateCropInfo from './UpdateCropInfo';
import AdminLogin from './Login/AdminLogin'

function App() {
  return (
    <div>
       {/* <Navbar/> */}
       <Routes>


        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/registartion' element={<LoginSignUp/>} ></Route>
        <Route path='/login' element={<Login/>}></Route>
        {/* <Route path='/profile' element={<Profile/>}></Route> */}
        <Route path='/addData' element={<AddData/>}></Route>
        <Route path='/data' element={<Data/>}></Route> 
        <Route path='/mail' element={<Mail/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/qr' element={<Qr/>}></Route>
        <Route path='/update/:id' element={<UpdateCropInfo/>}></Route>
        <Route path='/adminLogin' element={<AdminLogin/>}></Route>
        
       </Routes>

      {/* <Fotter/> */}
      {/* <Qr/> */}
      
    </div>
  )
}

export default App;