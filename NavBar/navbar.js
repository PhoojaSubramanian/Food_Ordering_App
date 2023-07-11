import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
export default function Navbar() {
  return (
    <div className='navv'>
           <Link to='/'><img src="/images/food_logo.png" className='logo'></img></Link>
        
           <ul>
            <li><a >Search</a></li> 
            <li><Link to='/log'>Login</Link></li>
            <li><Link to='/Signup'>SignUp</Link></li>
            <li><Link to ='/cart'><img src="/images/cart_orange.png" className='cart'></img></Link></li>
            <li><a><img src='/images/logo_orange.png' className='profile'></img></a></li>
           </ul>
       
    </div>
  )
}
