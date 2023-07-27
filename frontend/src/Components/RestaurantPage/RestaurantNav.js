
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/navbar.css'
import Sidebar from '../sidebar/sidebar';

export default function RestaurantNavbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="navv">
      <Link to="/restaurantHome">
        <img src="/images/food_logo.png" className="logo" alt="Food Logo" />
      </Link>

      <ul>
        <li>
          Search Restaurants
        </li>
        <li>
          <a>Add Restaurant</a>
        </li>
        <li>
          Update Restaurant
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
