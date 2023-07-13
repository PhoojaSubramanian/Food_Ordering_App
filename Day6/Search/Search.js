import React from 'react'
import Navbar from '../NavBar/navbar'
import './search.css';
export default function Search() {
  return (
    <div>
        <Navbar/>
        <div className='main_search'>
            <center>
            <input type ='text'placeholder='Search for restaurants and food' style={{width:'700px', height:'30px'}}className='main_search_bar'></input>
            </center>
            <br></br>
            <h3 id="pop_food_head">Popular Foods</h3>
            <div className='popular_food_div'>
            <img src ='/images/coffee2.jpg' alt='coffee' className='popular_foods'></img>
            <img src ='/images/veg.jpg' alt='coffee' className='popular_foods'></img>
            <img src ='/images/pizza.jpg' alt='coffee' className='popular_foods'></img>
            <img src ='/images/noodles.jpg' alt='coffee' className='popular_foods'></img>
            <img src ='/images/french_fries.jpg' alt='coffee' className='popular_foods'></img>
            <img src ='/images/samosa.jpg' alt='coffee' className='popular_foods'></img>
            </div>
            <h3 id="pop_rest_head">Popular Restaurants</h3>
            <div className='popular_rest_div'>
            <img src ='/images/din_award.png' alt='coffee' className='popular_rests'></img>
            <img src ='/images/chew.png' alt='coffee' className='popular_rests'></img>
            <img src ='/images/coco_grove.jpg' alt='coffee' className='popular_rests'></img>
            <img src ='/images/white_cassettes.png' alt='coffee' className='popular_rests'></img>
            <img src ='/images/mcdonald.png' alt='coffee' className='popular_rests'></img>
            <img src ='/images/burger_king.jpg' alt='coffee' className='popular_rests'></img>
            </div>
        </div>
    </div>
  )
}
