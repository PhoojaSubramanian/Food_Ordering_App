// import React, { useState } from 'react';
// import Navbar from '../NavBar/navbar';
// import './Restaurant.css';
// import { Link } from 'react-router-dom';

// const Restaurant = () => {
//   const RestaurantData = [
//     { id: 1, image: './images/bay-grill.jpg', food_name: ' Chinese · South Indian · Chettinad', food_price: 200,restaurant_name:"Bay Grill", restaurant_add :"Valayar" ,time:'20' ,reviews:4.4 },
//     { id: 2, image: './images/mario.jpg', food_name: 'Juices . Shakes . Fat Food', food_price: 100,restaurant_name:"Mario", restaurant_add :"Kovaipudur" ,time:'10', reviews:3  },
//     { id: 3, image: './images/kfc.png', food_name: 'Chicken Fry . Burger . Pizza', food_price: 300,restaurant_name:"KFC", restaurant_add :"Kovaipudur" ,time:'30', reviews:4.7  },
//     { id: 4, image: './images/marvania.png', food_name: 'Juices . French Fries . Shakes', food_price: 50,restaurant_name:"Marvania", restaurant_add :"Kovaipudur" ,time:'20', reviews:3.8  },
//     { id: 5, image: './images/dominos.png', food_name: 'Pizza . pepperoni . grilled chicken,', food_price: 300,restaurant_name:"Dominos", restaurant_add :"BK Pudur" ,time:'40', reviews:4.9  },
//     { id: 6, image: './images/surya.jpg', food_name: 'Cakes . Sweets . Ice Cream ', food_price: 100,restaurant_name:"Surya Bakkery", restaurant_add :"Kovaipudur" ,time:'20', reviews:3.9  },
//     { id: 7, image: './images/pun_dhaba.jpg', food_name: 'All NonVeg . Veg . Shakes', food_price: 100,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'15', reviews:4.2  },
//     { id: 8, image: './images/hot_mess.png', food_name: 'Chats . Samosa . Juices . Shakes', food_price: 80,restaurant_name:"Hot Mess", restaurant_add :"Kovaipudur" ,time:'10', reviews:4  },
//     { id: 9, image: './images/annaporna.jpg', food_name: 'All Veg Dishes . Sweets . Panner', food_price: 130,restaurant_name:"Annaporna", restaurant_add :"Kovaipudur" ,time:'40', reviews:3.4  },
//     { id: 10, image: './images/popeyes.jpg', food_name: 'All Veg . Non Veg . Shakes ', food_price: 220,restaurant_name:"Popeyes", restaurant_add :"Kovaipudur" ,time:'30', reviews:3.6  }
//   ];


//   const [Restaurant, setRestaurant] = useState(RestaurantData);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value;
//     setSearchTerm(searchTerm);
//     const filteredRestaurant = RestaurantData.filter((restaurant) => restaurant.restaurant_name.toLowerCase().includes(searchTerm.toLowerCase()));
//     setRestaurant(filteredRestaurant);
//   };

//   const handleSort = (option) => {
//     let sortedRestaurant = [...RestaurantData];
//     switch (option) {
//       case 'lowToHigh':
//         sortedRestaurant.sort((a, b) => a.food_price - b.food_price);
//         break;
//       case 'highToLow':
//         sortedRestaurant.sort((a, b) => b.food_price - a.food_price);
//         break;
//       case 'ratings':
//         sortedRestaurant.sort((a, b) => b.reviews - a.reviews);
//         break;
//       case 'delivery_time':
//         sortedRestaurant.sort((a, b) => a.time - b.time);
//         break;
//       default:
//         break;
//     }
//     setRestaurant(sortedRestaurant);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className='filter'>
//         <img src="./images/filter.png" style={{ height: '30px' }} alt="filter-icon" />
//         <button className='filter' onClick={() => handleSort('lowToHigh')}>
//           Cost : Low to High
//         </button>
//         <button className='filter' onClick={() => handleSort('highToLow')}>
//           Cost : High to Low
//         </button>
//         <button className='filter' onClick={() => handleSort('ratings')}>
//           Ratings
//         </button>
//         <button className='filter' onClick={() => handleSort('delivery_time')}>
//           Delivery Time
//         </button>
//         <input placeholder='Search Restaurant' value={searchTerm} onChange={handleSearch} style={{height:'20px'}}/>
//       </div>
//       <div className='rest_main'>
//         {Restaurant.map((item) => (
//           <a href = './displayrestaurant'><div className='main_rest' key={item.id}>
//             <img src={item.image} alt={item.food_name} style={{ height: '120px', width: '300px' }} />
//             <div className='rest_menu'>
//               <div className='rest_left'>
//                 <br></br>
//                 <b>{item.restaurant_name}<br></br></b>
//                 <b><p style={{fontSize:'smaller' , color:'gray'}}>{item.restaurant_add}</p></b>
//                 <p style={{fontSize:'small'}}>{item.food_name}</p>
//               </div>
//               <div className='rest_right'>
//                 <p style={{fontSize:'smaller'}}>Rs. {item.food_price} for one</p>
//                 <p> {item.time} Mins</p>
//                 <p><button style={{backgroundColor:'green' ,borderRadius:'5px',color:'white',marginLeft:'10px'}}>{item.reviews}</button></p>
                
//               </div>
//             </div>
//           </div></a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Restaurant;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../NavBar/navbar';
import './Restaurant.css';
import { Link } from 'react-router-dom';

const Restaurant = () => {
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
      <Navbar />
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

export default Restaurant;
