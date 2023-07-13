import React, { useState } from 'react'
import Navbar from '../NavBar/navbar'
import { Link } from 'react-router-dom';
import './cart.css'
export default function Cart() {
      const cart_items =[
        {image:"./images/chicken.jpg",item_name:"Chicken",item_price:200,restaurant_name:"Punjabi Dhaba",quantity:1 , restaurant_add :"Kovaipudur" },
        {image:"./images/coffee2.jpg",item_name:"Chicken",item_price:200,restaurant_name:"Punjabi Dhaba",quantity:2 , restaurant_add :"Kovaipudur" }
        ]
        const delivery_fee=10;
        const gst = 20;
        const[qua,setQua]=useState(1);
        const IncreaseQuantity=()=>
        {
          setQua(qua+1);
        }
        const DecreaseQuantity=()=>
        {
          if(qua==0)
          setQua(0);
          else
          setQua(qua-1);
        }

  return (
    <div>
        <Navbar/>
        <div style={{paddingTop :'20px'}}>
        {cart_items.length==0 ? 
        
        <div>
        <center>
        <img src='./images/empty_cart.png' style={{paddingRight:'50px'}}></img>
        <h4>Your Cart is Empty</h4>
        <Link to='/search'><button style={{width:'300px' , height:'40px', backgroundColor:'orangered', borderRadius:'4px' , borderColor:'white' }}>Search for Restaurants or Foods</button></Link>
        </center>
        </div>
          
          : 
            <div className='main_cart'>
              <h2 style={{paddingLeft :'30px', color:'orangered'}}>Cart Items</h2>
            {
                cart_items.map((item,i) =>
                <div className='sub_cart'>
                  <div className='cart_left_main'>

                  <div id ="first_div">
                    <img src={item.image} style={{height:'80px'}} className='ordered_food_img'></img>
                    <div className='first_div_sub'>
                    <p>{item.restaurant_name}
                    <br></br><br></br>{item.restaurant_add}</p>
                    </div>
                  </div>
                  <div className='second_div'>
                    <b>
                    <p>{item.item_name}</p></b>
                    <b><p>Rs.{item.item_price}</p></b>
                    <div>
                    <p><button style={{height:'25px'}} onClick={IncreaseQuantity}>+</button> { qua } 
                        <button style={{height:'25px'}} onClick={DecreaseQuantity}> -</button></p>
                    </div>
                  </div>

                  </div>
                  <div className='cart_right_main'>

                      Bill Details:<br></br>
                      <div className='bill'>
                        <div className='bill_left'>
                          Amount :<br></br>
                          Delivery Fee :<br></br>
                          GST and Restaurant charges :<br></br>
                          Total:<br></br>
                        </div>
                        <div className='bill_right'>
                          {qua*item.item_price}<br></br>
                          {delivery_fee}<br></br>
                          {gst}<br></br>
                          {qua*item.item_price + delivery_fee + gst}<br></br>
                        </div>
                      </div>
                    </div>
                </div>
                )
            }
            </div>

          }
        </div>
    </div>
  )
}

