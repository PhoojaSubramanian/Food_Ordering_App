
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/navbar.css'
import Sidebar from '../sidebar/sidebar';

export default function AdminNavbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="navv">
      <Link to="/adminHome">
        <img src="/images/food_logo.png" className="logo" alt="Food Logo" />
      </Link>

      <ul>
        <li>
            <Link to="/adminRestaurant">Restaurants</Link>
        </li>
        <li>
            <Link to="/adminFood">Food</Link>
        </li>
        <li>
          <Link to="/adminrestown">Restaurant Owners</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
        {/* <li>
          <Link to="/cart">
            <img src="/images/cart_orange.png" className="cart" alt="Cart" />
          </Link>
        </li> */}
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
