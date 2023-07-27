import React, { useState } from 'react'
import Navbar from '../NavBar/navbar'
import './DisplayRestaurant.css'
export default function DisplayRestaurant() {
  const restaurant =[{id:1 , restaurant_name :"The Bay Grill" , restaurant_add :"Podanur" ,review : 4.4 , time : 20 , food_price : 300, 
    foods : [{f_name:"Dragon Chicken", price :210 ,food_type :"nonveg", food_desc :"Serves 1 | A deliciously aromatic and flavorful dish prepared from rice and stir-fried vegetables." ,image: './images/chicken.jpg' }
   ,{f_name:"Devil Chicken", price :220 ,food_type :"nonveg", food_desc :"Serves 1 | A deliciously aromatic and flavorful dish prepared from rice and stir-fried vegetables.",image: './images/chicken.jpg'},
    {f_name:"Chicken Lolly Pop", price :220 ,food_type :"nonveg", food_desc :"Serves 1 | A deliciously aromatic and flavorful dish prepared from rice and stir-fried vegetables.",image: './images/chicken.jpg' },
    {f_name:"Butter Naan", price :40 ,food_type :"veg", food_desc :"Serves 1 | A deliciously aromatic and flavorful dish prepared from rice and stir-fried vegetables.",image: './images/chicken.jpg' },
    {f_name:"Panner Tikka", price :200 ,food_type :"veg" , food_desc :"Serves 1 | A deliciously aromatic and flavorful dish prepared from rice and stir-fried vegetables.",image: './images/chicken.jpg'},
    {f_name:"Gobi", price :150 ,food_type :"veg", food_desc :"Serves 1 | A deliciously aromatic and flavorful dish prepared from rice and stir-fried vegetables." ,image: './images/chicken.jpg'}]}
  ]
  const [like, setLike] = useState("./images/heart.png");
  const handleLike =() =>
  {
    if(like == "./images/heart.png")
    setLike("./images/red_heart.png")
    else
    setLike("./images/heart.png")
  }
  const [veg,setVeg] = useState("white");
  const [nonveg,setNonVeg] = useState("white");
  const [foodType,setFoodType] = useState("Recommended")
  const handleVeg =() =>
  {
    if(veg === 'white')
    {
      setVeg("green")
      setFoodType("Veg")
    }
    else
    {
      setVeg("white")
      setFoodType("Recommened")
    }
  }
  const handleNonVeg =() =>
  {
    if(nonveg === 'white')
    {
      setNonVeg("brown")
      setFoodType("Non Veg")
    }
    else
    {
      setNonVeg("white")
      setFoodType("Recommened")
    }
  }

  return (
    <div>
      <Navbar/>
      <div className='main_display_restaurant'>
        {/* <img src='./images/bay-grill.jpg' style={{width:'1100px' , height:'200px'}}></img> */}
        <div className='top_restaurant'>
        <div className='left_restaurant'>
        <b style={{fontSize:'larger'}}>{restaurant[0].restaurant_name}</b><br></br>
        <b style={{fontSize:'smaller' , color : 'rgb(68, 67, 67)'}}>{restaurant[0].restaurant_add}</b>
        </div>
        <div className='right_restaurant'>
        <img src={like} onClick={handleLike} style={{height:'17px'}}></img>
        <button style={{backgroundColor:"green" , height:'30px'   , marginLeft:'20px'}}>{restaurant[0].review}</button><br></br><br></br>
        <input placeholder='Search Food...'></input>
        </div>
        </div>
        <hr></hr>
        <p><img src='./images/time.png' style={{height:'15px' , paddingRight:'10px'}}></img><b>{restaurant[0].time} mins      | <img src ='./images/Indian_Rupee.png' style={{height:'12px' , paddingLeft:'10px' , paddingRight:'5px'}}></img>{restaurant[0].food_price}  for one</b></p>
        <br></br>
        <button style={{backgroundColor : veg}} onClick={handleVeg}>Veg</button><button style={{backgroundColor : nonveg}} onClick={handleNonVeg}>Non Veg</button>
        <br></br><br></br>
        <hr></hr>
        <p><b>{foodType}</b></p>
        {
          restaurant[0].foods.map((item,i) =>(
            <div style={{width:'800px'}}>
            <div className='food_div'>
              <div>
                <br></br>
                <p>{item.f_name}<img src="./images/nonveg_icon.png" style={{height:'13px' , paddingLeft:'10px'}}></img></p>
                <p style={{fontSize:'small' , color:'rgb(68, 67, 67)'}}>Rs.{item.price}<br></br>
                {item.food_desc}</p>
                <br></br>
                <br></br>
              </div>
              <div>
                <br></br>
                <br></br>
                <img src={item.image} style={{height:'60px'}}></img><br></br>
                <button style={{height:'30px'}}>Add to Cart</button>
              </div>
            </div>
              <hr></hr>
            </div>
          )
        )}
      </div>
    </div>
  )
}
