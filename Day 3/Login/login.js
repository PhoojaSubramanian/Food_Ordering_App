import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/navbar';
import Footer from '../Footer/footer';
export default function Login() {

    const [number, setNumber] = useState('');
    var mob="";
    
    const UserNumberChange = (e) => {
        setNumber(e.target.value);
    };


    const OnSubmit = (e) => {
        e.preventDefault();
        mob="";
        if(number.length<10)
        mob ="Enter valid 10 digit mobile number";
        document.getElementById("mob").innerHTML=mob;
      };

  return (
    <div>
        <Navbar/>
    <div className="login-container">
        <div className='left'>
        <h1 id = "app_name">Login</h1>
        <form onSubmit={OnSubmit} className='log'>
        <div className="login-form">
            <label htmlFor="number" id="app_name">Mobile Number</label>
            <br></br>
            <br></br>
            <input type="text" id="number" value={number} onChange={UserNumberChange} placeholder='Enter Mobile Number'/>
        </div>
    
        <button id ="login-sub" type="submit">Send Otp</button>
        <br></br>
        {/* <button id ="login-sub" type="submit">Login</button> */}
        <p id ="mob"></p>
        </form>
        </div>
        <div className='right'>
            <center>
                <br></br>
                <br></br>
                <br></br>
            <p className='app_name'>Welcome to LET'S Foody</p>
            <p id="app_name">Don't have an account</p>
            <Link to ='/Signup' id="app_name">Sign Up</Link>
            </center>
            
        </div>
    </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}


 



