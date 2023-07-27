import React, { useState } from 'react'
import Navbar from '../NavBar/navbar'
import { Link } from 'react-router-dom';
import './search.css';
export default function Search() {
  const[border_col,setBorder_Col] = useState("white");
  const[border_col1,setBorder_Col1]=useState("orangered");
  const ChangeRestColor =() =>
  {
    if(border_col=="white")
    {
      setBorder_Col("orangered");
      setBorder_Col1("white");
    }
    else
    {
      setBorder_Col("white")
      setBorder_Col1("orangered")
    }
  }
  return (
    <div>
        <Navbar/>
        <div className='main_search' >
            <center>
              <br></br>
              <br></br>
            <p><Link to='/restaurant'><button style={{height:'50px' , width:'120px' , backgroundColor:border_col , borderRadius: '25px',margin:'10px'}} onClick={ChangeRestColor}>Restaurants</button></Link>
            <Link to ="/foods"><button style={{height:'50px' , width:'120px' , backgroundColor:border_col1 , borderRadius: '25px',margin:'10px'}} onClick={ChangeRestColor}>Dishes</button></Link></p>
            
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
