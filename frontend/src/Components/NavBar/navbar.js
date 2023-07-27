// import React from 'react'
// import { Link } from 'react-router-dom';
// import './navbar.css';
// export default function Navbar() {
//   return (
//     <div className='navv'>
//            <Link to='/'><img src="/images/food_logo.png" className='logo'></img></Link>
        
//            <ul>
//             <li><Link to ='/search'>Search</Link></li> 
//             <li><a>Offers</a></li> 
//             <li><Link to='/log'>Login</Link></li>
//             <li><Link to='/Signup'>SignUp</Link></li>
//             <li><Link to ='/cart'><img src="/images/cart_orange.png" className='cart'></img></Link></li>
//             <li><a><img src='/images/logo_orange.png' className='profile'></img></a></li>
//            </ul>
       
//     </div>
//   )
// }

// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Sidebar from '../sidebar/sidebar';

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="navv">
      <Link to="/home">
        <img src="/images/food_logo.png" className="logo" alt="Food Logo" />
      </Link>

      <ul>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <a>Offers</a>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/Signup">SignUp</Link>
        </li>
        <li>
          <Link to="/cart">
            <img src="/images/cart_orange.png" className="cart" alt="Cart" />
          </Link>
        </li>
        <li>
          <a onClick={toggleSidebar}>
            <img src="/images/logo_orange.png" className="profile" alt="Profile" />
          </a>
        </li>
      </ul>

      {/* Render the sidebar if showSidebar is true */}
      {showSidebar && <Sidebar onClose={toggleSidebar} />}
    </div>
  );
}
