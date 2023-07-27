

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../NavBar/navbar';
import '../Restaurant/Restaurant.css';
import { Link } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
const AdminRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Function to fetch restaurant data from the backend API
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/RestAll`); // Replace '/api/restaurants' with your actual API endpoint
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filteredRestaurants = restaurants.filter((restaurant) => restaurant.restaurant_name.toLowerCase().includes(searchTerm.toLowerCase()));
    setRestaurants(filteredRestaurants);
  };

  const handleSort = (option) => {
    let sortedRestaurants = [...restaurants];
    switch (option) {
      case 'lowToHigh':
        sortedRestaurants.sort((a, b) => a.food_price - b.food_price);
        break;
      case 'highToLow':
        sortedRestaurants.sort((a, b) => b.food_price - a.food_price);
        break;
      case 'ratings':
        sortedRestaurants.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'delivery_time':
        sortedRestaurants.sort((a, b) => a.time - b.time);
        break;
      default:
        break;
    }
    setRestaurants(sortedRestaurants);
  };

  return (
    <div>
      <AdminNavbar/>
      <div className='filter'>
        <img src="./images/filter.png" style={{ height: '30px' }} alt="filter-icon" />
        <button className='filter' onClick={() => handleSort('lowToHigh')}>
          Cost : Low to High
        </button>
        <button className='filter' onClick={() => handleSort('highToLow')}>
          Cost : High to Low
        </button>
        <button className='filter' onClick={() => handleSort('ratings')}>
          Ratings
        </button>
        <button className='filter' onClick={() => handleSort('delivery_time')}>
          Delivery Time
        </button>
        <input placeholder='Search Restaurant' value={searchTerm} onChange={handleSearch} style={{ height: '20px' }} />
      </div>
      <div className='rest_main'>
        <div>
            <button style={{height:'40px',width:'200px',marginLeft:'25px' ,color:'orangered',backgroundColor:'white', border:'1px solid black'}}>ADD RESTAURANT</button>
            <button style={{height:'40px',width:'200px',marginLeft:'25px' ,color:'orangered',backgroundColor:'white', border:'1px solid black'}}>UPDATE RESTAURANT</button>
        </div>
        {restaurants.map((item) => (
          <Link to='/displayrestaurant' key={item.id}>
            <div className='main_rest'>
              <img src={item.restaurant_image} alt={item.food_name} style={{ height: '120px', width: '300px' }} />
              <div className='rest_menu'>
                <div className='rest_left'>
                  <br />
                  <b>{item.restaurant_name}<br /></b>
                  <b><p style={{ fontSize: 'smaller', color: 'gray' }}>{item.restaurant_address}</p></b>
                  <p style={{ fontSize: 'small' }}>{item.food_name}</p>
                </div>
                <div className='rest_right'>
                  {/* <p style={{ fontSize: 'smaller' }}>Rs. {item.food_price} for one</p> */}
                  {/* <p> {item.time} Mins</p> */}
                  <p><button style={{ backgroundColor: 'green', borderRadius: '5px', color: 'white', marginLeft: '10px' }}>{item.restaurant_rating}</button></p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminRestaurant;

