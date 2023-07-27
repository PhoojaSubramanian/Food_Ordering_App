
// // import React from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import Navbar from '../NavBar/navbar';
// // import './food.css'
// // import { addToCart } from '../../redux/actions/cartActions';

// // const Food = () => {
// //   const foods = [
// //     { id: 1, image: './images/chicken.jpg', food_name: 'Chicken', food_price: 200,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'20'  },
// //     { id: 2, image: './images/coffee2.jpg', food_name: 'Coffee', food_price: 100,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'20'  },
// //     { id: 2, image: './images/coffee2.jpg', food_name: 'Coffee', food_price: 100,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'20'  },
// //     { id: 2, image: './images/coffee2.jpg', food_name: 'Coffee', food_price: 100,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'20'  },
// //     { id: 1, image: './images/chicken.jpg', food_name: 'Chicken', food_price: 200,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'20'  },
// //     { id: 2, image: './images/coffee2.jpg', food_name: 'Coffee', food_price: 100,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'20'  },
// //     { id: 2, image: './images/coffee2.jpg', food_name: 'Coffee', food_price: 100,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'20'  },
// //     { id: 2, image: './images/coffee2.jpg', food_name: 'Coffee', food_price: 100,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'20'  }
// //   ];

// //   const dispatch = useDispatch();
// //   const reviews =[4.4,4,3.9,4.9,4,4.6,4.5,3.7];
// //   return (
// //     <div>
// //       <Navbar />
// //       <div className='filter'>
// //           <img src="./images/filter.png" style={{height:"30px"}}></img>
// //           <button className='filter'>Cost : Low to High</button>
// //           <button className='filter'>Cost : High to Low</button>
// //           <button className='filter'>Ratings</button>
// //           <button className='filter'>Delivery Time</button>
// //       </div>
// //       <div className='food_main'>
// //         {foods.map((item,i) => (
// //           <div className='main_food' key={item.id}>
// //             <img src={item.image} alt={item.food_name} style={{ height: '120px', width: '300px' }} />
// //             <div className='food_menu'>
// //               <div className='food_left'>
// //                 <p>{item.restaurant_name}</p>
// //                 <p>{item.restaurant_add}</p>
// //                 <button
// //                   style={{ backgroundColor: 'green' }}
// //                   onClick={() => dispatch(addToCart(item))}
// //                 >
// //                   Add to Cart
// //                 </button>
// //               </div>
// //               <div className='food_right'>
// //                 <p>{item.food_name}</p>
// //                 <p>Rs. {item.food_price} <button style={{backgroundColor:'green' ,borderRadius:'5px',color:'white',marginLeft:'10px'}}>{reviews[i]}</button></p>
// //                 <p>{item.time} Mins</p>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// export default Food;
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import Navbar from '../NavBar/navbar';
// import './food.css';
// import { addToCart } from '../../redux/actions/cartActions';

// const Food = () => {
//   const [foods,setFoods] = useState([
//     { id: 1, image: './images/chicken.jpg', food_name: 'Chicken', food_price: 200,restaurant_name:"Bay Grill", restaurant_add :"Valayar" ,time:'20' ,reviews:4.4 },
//     { id: 2, image: './images/coffee2.jpg', food_name: 'Coffee', food_price: 100,restaurant_name:"Mario", restaurant_add :"Kovaipudur" ,time:'10', reviews:3  },
//     { id: 3, image: './images/food.jpg', food_name: 'Chicken Fry', food_price: 300,restaurant_name:"KFC", restaurant_add :"Kovaipudur" ,time:'30', reviews:4.7  },
//     { id: 4, image: './images/french_fries.jpg', food_name: 'French Fries', food_price: 50,restaurant_name:"Marvania", restaurant_add :"Kovaipudur" ,time:'20', reviews:3.8  },
//     { id: 5, image: './images/pizza.jpg', food_name: 'Pizza', food_price: 300,restaurant_name:"Dominos", restaurant_add :"BK Pudur" ,time:'40', reviews:4.9  },
//     { id: 6, image: './images/ras.jpg', food_name: 'Rasgullah', food_price: 400,restaurant_name:"Anandhas", restaurant_add :"Kovaipudur" ,time:'20', reviews:3.9  },
//     { id: 7, image: './images/noodles.jpg', food_name: 'Noodles', food_price: 100,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'15', reviews:4.2  },
//     { id: 8, image: './images/samosa.jpg', food_name: 'Samosa', food_price: 80,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'10', reviews:4  },
//     { id: 9, image: './images/veg.jpg', food_name: 'Veg Fried Rice', food_price: 130,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'40', reviews:3.4  },
//     { id: 10, image: './images/south_indian1.png', food_name: 'Panner Gravy', food_price: 220,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'30', reviews:3.6  }
//   ])

//   const dispatch = useDispatch();

//   const [cartItems, setCartItems] = useState([]);

//   const addToCartHandler = (item) => {
//     dispatch(addToCart(item));
//     setCartItems([...cartItems, item]);
//   };

//   const handleSort = (option) => {
//     let sortedFoods = [...foods];
//     switch (option) {
//       case 'lowToHigh':
//         sortedFoods.sort((a, b) => a.food_price - b.food_price);
//         break;
//       case 'highToLow':
//         sortedFoods.sort((a, b) => b.food_price - a.food_price);
//         break;
//       case 'ratings':
//         sortedFoods.sort((a, b) => b.reviews - a.reviews);
//         break;
//       case 'delivery_time':
//         sortedFoods.sort((a, b) => a.time - b.time);
//         break;
//       default:
//         break;
//     }
//     setFoods(sortedFoods);
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
//         <input placeholder='Search Food'></input>
//       </div>
//       <div className='food_main'>
//         {foods.map((item) => (
//           <div className='main_food' key={item.id}>
//             <img src={item.image} alt={item.food_name} style={{ height: '120px', width: '300px' }} />
//             <div className='food_menu'>
//               <div className='food_left'>
//                 <p>{item.restaurant_name}</p>
//                 <p>{item.restaurant_add}</p>
//                 <button
//                   style={{ backgroundColor: 'green' }}
//                   onClick={() => addToCartHandler(item)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//               <div className='food_right'>
//                 <p>{item.food_name}</p>
//                 <p>Rs. {item.food_price} <button style={{backgroundColor:'green' ,borderRadius:'5px',color:'white',marginLeft:'10px'}}>{item.reviews}</button></p>
//                 <p>{item.time} Mins</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Food;

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import Navbar from '../NavBar/navbar';
// import './food.css';
// import { addToCart } from '../../redux/actions/cartActions';

// const Food = () => {
//   const foodsData = [
//     { id: 1, image: './images/chicken.jpg', food_name: 'Chicken', food_price: 200,restaurant_name:"Bay Grill", restaurant_add :"Valayar" ,time:'20' ,reviews:4.4 , food_type :'nonveg' },
//     { id: 2, image: './images/coffee2.jpg', food_name: 'Coffee', food_price: 100,restaurant_name:"Mario", restaurant_add :"Kovaipudur" ,time:'10', reviews:3 , food_type :'veg' },
//     { id: 3, image: './images/food.jpg', food_name: 'Chicken Fry', food_price: 300,restaurant_name:"KFC", restaurant_add :"Kovaipudur" ,time:'30', reviews:4.7 , food_type :'nonveg' },
//     { id: 4, image: './images/french_fries.jpg', food_name: 'French Fries', food_price: 50,restaurant_name:"Marvania", restaurant_add :"Kovaipudur" ,time:'20', reviews:3.8 , food_type :'veg' },
//     { id: 5, image: './images/pizza.jpg', food_name: 'Pizza', food_price: 300,restaurant_name:"Dominos", restaurant_add :"BK Pudur" ,time:'40', reviews:4.9  , food_type :'nonveg'},
//     { id: 6, image: './images/ras.jpg', food_name: 'Rasgullah', food_price: 400,restaurant_name:"Anandhas", restaurant_add :"Kovaipudur" ,time:'20', reviews:3.9  , food_type :'veg'},
//     { id: 7, image: './images/noodles.jpg', food_name: 'Noodles', food_price: 100,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'15', reviews:4.2 , food_type :'nonveg' },
//     { id: 8, image: './images/samosa.jpg', food_name: 'Samosa', food_price: 80,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'10', reviews:4 , food_type :'veg' },
//     { id: 9, image: './images/veg.jpg', food_name: 'Veg Fried Rice', food_price: 130,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'40', reviews:3.4 , food_type :'veg' },
//     { id: 10, image: './images/south_indian1.png', food_name: 'Panner Gravy', food_price: 220,restaurant_name:"Punjabi Dhaba", restaurant_add :"Kovaipudur" ,time:'30', reviews:3.6 , food_type :'veg' }
//   ];

//   const dispatch = useDispatch();

//   const [foods, setFoods] = useState(foodsData);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value;
//     setSearchTerm(searchTerm);
//     const filteredFoods = foodsData.filter((food) => food.food_name.toLowerCase().includes(searchTerm.toLowerCase()));
//     setFoods(filteredFoods);
//   };

//   const handleSort = (option) => {
//     let sortedFoods = [...foods];
//     switch (option) {
//       case 'lowToHigh':
//         sortedFoods.sort((a, b) => a.food_price - b.food_price);
//         break;
//       case 'highToLow':
//         sortedFoods.sort((a, b) => b.food_price - a.food_price);
//         break;
//       case 'ratings':
//         sortedFoods.sort((a, b) => b.reviews - a.reviews);
//         break;
//       case 'delivery_time':
//         sortedFoods.sort((a, b) => a.time - b.time);
//         break;
//       default:
//         break;
//     }
//     setFoods(sortedFoods);
//   };

//   const handleAddToCart = (item) => {
//     dispatch(addToCart(item));
//     console.log(`Added ${item.food_name} to cart`);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className='filter_food'>
//         <img src="./images/filter.png" style={{ height: '30px' }} alt="filter-icon" />
//         <button className='filter_food' onClick={() => handleSort('lowToHigh')}>
//           Cost : Low to High
//         </button>
//         <button className='filter_food' onClick={() => handleSort('highToLow')}>
//           Cost : High to Low
//         </button>
//         <button className='filter_food' onClick={() => handleSort('ratings')}>
//           Ratings
//         </button>
//         <button className='filter_food' onClick={() => handleSort('delivery_time')}>
//           Delivery Time
//         </button>
//         {/* <button className='filter_food' onClick={() => handleSort('Veg')}>
//           Veg
//         </button>
//         <button className='filter_food' onClick={() => handleSort('NonVeg')}>
//           Non Veg
//         </button> */}
//         <input placeholder='Search Food' value={searchTerm} onChange={handleSearch} style={{height:'20px'}}/>
//       </div>
//       <div className='food_main'>
//         {foods.map((item) => (
//           <div className='main_food' key={item.id}>
//             <img src={item.image} alt={item.food_name} style={{ height: '120px', width: '300px' }} />
//             <div className='food_menu'>
//               <div className='food_left'>
//                 <b><p>{item.restaurant_name}</p></b>
//                 <b><p  style={{color:'darkgray'}}>{item.restaurant_add}</p></b>
//                 <button
//                   style={{ backgroundColor: 'green' ,color:'white'}}
//                   onClick={() => handleAddToCart(item)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//               <div className='food_right'>
//                 <b><p>{item.food_name}</p></b>
//                 <p>Rs. {item.food_price} <button style={{backgroundColor:'green' ,color:'white',marginLeft:'10px'}}>{item.reviews}</button></p>
//                 <p>{item.time} Mins 
//                   {
//                     item.food_type =="veg" ? (<img src ="./images/veg_icon.png" style={{height:'15px' , paddingLeft:'20px'}}></img>) : (<img src ="./images/nonveg_icon.png" style={{height:'15px', paddingLeft:'20px'}}></img>)
//                   }
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Food;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../NavBar/navbar';
import './food.css';
import { addToCart } from '../../redux/actions/cartActions';
import axios from 'axios'; // Import Axios

const Food = () => {
  const [foods, setFoods] = useState([]);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filteredFoods = foods.filter((food) => food.food_name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFoods(filteredFoods);
  };

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/FoodAll'); // Replace '/api/foods' with your backend API endpoint URL
        setFoods(response.data); // Assuming the response contains an array of food objects
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []);

  const handleSort = (option) => {
    let sortedFoods = [...foods];
    switch (option) {
      case 'lowToHigh':
        sortedFoods.sort((a, b) => a.food_price - b.food_price);
        break;
      case 'highToLow':
        sortedFoods.sort((a, b) => b.food_price - a.food_price);
        break;
      case 'ratings':
        sortedFoods.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'delivery_time':
        sortedFoods.sort((a, b) => a.time - b.time);
        break;
      default:
        break;
    }
    setFoods(sortedFoods);
  };

  const handleAddToCart = (item) => {
    console.log(item);
    dispatch(addToCart(item));
    console.log(`Added ${item.food_name} to cart`);
  };

  return (
    <div>
      <Navbar />
      <div className='filter_food'>
        <img src="./images/filter.png" style={{ height: '30px' }} alt="filter-icon" />
        <button className='filter_food' onClick={() => handleSort('lowToHigh')}>
          Cost : Low to High
        </button>
        <button className='filter_food' onClick={() => handleSort('highToLow')}>
          Cost : High to Low
        </button>
        <button className='filter_food' onClick={() => handleSort('ratings')}>
          Ratings
        </button>
        <button className='filter_food' onClick={() => handleSort('delivery_time')}>
          Delivery Time
        </button>
        {/* <button className='filter_food' onClick={() => handleSort('Veg')}>
          Veg
        </button>
        <button className='filter_food' onClick={() => handleSort('NonVeg')}>
          Non Veg
        </button> */}
        <input placeholder='Search Food' value={searchTerm} onChange={handleSearch} style={{height:'20px'}}/>
      </div>
      <div className='food_main'>
        {foods.map((item) => (
          <div className='main_food' key={item.food_id}>
            <img src={item.food_image} alt={item.food_name} style={{ height: '120px', width: '300px' }} />
            <div className='food_menu'>
              <div className='food_left'>
                <b><p>{item.restaurant_name}</p></b>
                <b><p  style={{color:'darkgray'}}>{item.restaurant_add}</p></b>
                <button
                  style={{ backgroundColor: 'green' ,color:'white'}}
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
              <div className='food_right'>
                <b><p>{item.food_name}</p></b>
                <p>Rs. {item.food_price} <button style={{backgroundColor:'green' ,color:'white',marginLeft:'10px'}}>{item.food_rating}</button></p>
                <p>{10 } Mins 
                  {
                    item.food_type === "veg" ? (<img src ="./images/veg_icon.png" style={{height:'15px' , paddingLeft:'20px'}} alt="veg-icon" />) : (<img src ="./images/nonveg_icon.png" style={{height:'15px', paddingLeft:'20px'}} alt="nonveg-icon" />)
                  }
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;

