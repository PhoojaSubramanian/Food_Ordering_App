import React ,{useState}from 'react';
import { addToCart } from '../../redux/actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../NavBar/navbar';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../redux/actions/cartActions';
import './cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const delivery_fee = 10;
  const gst = 20;
  const dispatch = useDispatch();
  
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

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  // console.log(cartItems)
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '20px' }}>
        {cartItems.length == 0 ? (
          <div>
            <center>
              <img src='./images/empty_cart.png' style={{ paddingRight: '50px' }} alt='Empty Cart' />
              <h4>Your Cart is Empty</h4>
              <Link to='/search'><button style={{width:'300px' , height:'40px', backgroundColor:'orangered', borderRadius:'4px' , borderColor:'white' }}>Search for Restaurants or Foods</button></Link>
            </center>
          </div>
        ) : (
          <div className='main_cart'>
      <div className='cart_left_main'>
        <h2 style={{ paddingLeft: '30px', color: 'orangered', fontVariant: 'small-caps' }}>Cart Items</h2>
        {cartItems.map((item) => (
          <div className='sub_cart' key={item.id}>
            {/* {console.log(item.food_id)} */}
            <div id='first_div'>
              <img src={item.food_image} alt={item.food_name} style={{ height: '80px' }} className='ordered_food_img' />
              <div className='first_div_sub'>
                <b>
                  <p>
                    {item.restaurant_name}
                    <br></br>
                    <br></br>
                    {item.restaurant_add}
                  </p>
                </b>
              </div>
            </div>
            <div className='second_div'>
              <b>
                <p>{item.food_name}</p>
              </b>
              <b>
                <p>Rs. {item.food_price}</p>
              </b>
              <div>
                <p>
                  <button style={{ height: '25px', width: '30px', border: '1px solid black', color: 'rgba(0, 128, 0, 0.685)' }} onClick={IncreaseQuantity}>
                    +
                  </button>{' '}
                  {qua}
                  <button style={{ height: '25px', width: '30px', marginLeft: '5px', border: '1px solid black', color: 'rgba(0, 128, 0, 0.685)' }} onClick={DecreaseQuantity}>
                    -
                  </button>
                </p>
              </div>
              <p>
                <img src='./images/delete.png' style={{ height: '25px', border: '1px solid black', cursor: 'pointer' }} onClick={() => handleRemoveFromCart(item.food_id)} alt='Delete' />
              </p>
              <p>
                <b> Rs. {qua * item.food_price} </b>
              </p>
            </div>
            <hr></hr>
          </div>
        ))}
      </div>
      <div className='cart_right_main'>
              <p>Bill Details:</p>
              <br />
              <div className='bill'>
                <div className='bill_left'>
                  Amount:
                  <br /><br />
                  Delivery Fee :<br></br><br></br>
                  GST and Restaurant charges :<br></br><br></br>
                  <hr style={{ border: '1px solid black' }} />
                  <b>Total:</b>
                  <br />
                </div>
                <div className='bill_right'>
                  Rs. {cartItems.reduce((total, item) => total + item.food_price, 0)}
                  <br /><br />
                  Rs.{delivery_fee}<br></br><br></br>
                     Rs.{gst}<br></br><br></br>
                  <hr style={{ border: '1px solid black' }} />
                  Rs. {cartItems.reduce((total, item) => total + qua*item.food_price, 0) + delivery_fee + qua*gst}
                  <br />
                </div>
              </div>
              <br />
              <br />
              <button style={{ height: '35px', width: '300px', backgroundColor: 'orangered', borderRadius: '1px' }}>Add Coupons</button>
              <br />
              <br />
              <button style={{ height: '35px', width: '300px', backgroundColor: 'orangered', borderRadius: '1px' }}>Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
