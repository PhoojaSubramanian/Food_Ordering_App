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
  const images = ["./images/south_indian1.png","./images/cakess.jpg","./images/chicken.jpg","./images/south_indian1.jpg","./images/pasta.jpg"];
  // const im = './images/south_indian1.jpg'
  useEffect(() => {
    const intervalId = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
        <Navbar/>
        <div style={{ backgroundImage : `url(${images[index]})` ,backgroundRepeat : 'no-repeat', width: '100%', height: '500px', top: '50%', position: 'top 120px',opacity:'0.8'}}>
          <center>
          <div className='demo'>
            <br></br>
                  <b>
                  <p style={{fontSize:'40px' , fontVariant :'small-caps' , color:'white'}}>LET'S Foody</p>
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
           </div>
           </center>
        </div> 
        <Footer/>
    </div>
  ) 
}

