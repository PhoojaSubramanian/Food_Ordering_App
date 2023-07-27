import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/navbar';
import Footer from '../Footer/footer';
import {ImSearch} from'react-icons/im';
import './homepage.css';
export default function Homepage() {

  const [index, setIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // onSearch(searchTerm);
  };
  const images = ["./images/white_food.jpg","./images/cakess.jpg","./images/dark_food.jpg","./images/south_indian1.jpg","./images/pasta.jpg"];
  // const im = './images/south_indian1.jpg'
  // const images1 = ["./images/food_offer.jpg", "./images/grab_on offer.png", "./images/healthy_offer.jpg", "./images/burger_offer.jpg", "./images/best_spot.jpg"];
  useEffect(() => {
    const intervalId = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
        <Navbar/>
        <div style={{ backgroundImage : `url(${images[index]})` ,backgroundRepeat : 'no-repeat', width: '100%', height: '500px', top: '50%', position: 'top 120px'}}>
          <center>
          <div className='demo'>
            <br></br>
                  <b>
                  <p style={{fontSize:'45px' , fontVariant :'small-caps' , color:'orangered'}}>LET'S Foody</p>
                  <p style={{fontSize:'25px' , color:'Orangered'}}>Discover the Finest Foods and Trendiest Restaurants in Our App – Satisfy Your Cravings with Every Bite!</p>
                  </b>
                  <form onSubmit={handleSubmit}>
                  <input
                    className='sear'
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleInputChange}/>
                  <button type="submit" className='sub'>
                  <ImSearch />
                  </button>
                  </form>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
           </div>
           </center>
        </div> 
        <br></br>
        <div className='offer_main'>
          <b><p style={{fontVariant:'small-caps' , color:'black',padding:'15px' , fontSize:'25px'}}>Best Offers For You </p></b>
          <img src="./images/food_offer.jpg" className='offer_image'></img>
          <img src="./images/grab_on offer.png" className='offer_image'></img>
          <img src="./images/healthy_offer.jpg" className='offer_image'></img>
          <img src="./images/burger_offer.jpg" className='offer_image'></img>
          {/* <img src="./images/best_spot.jpg" className='offer_image'></img> */}
        </div>

        <Footer/>
    </div>
  ) 
}

