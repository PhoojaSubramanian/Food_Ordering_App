import React, { useState } from 'react';
import Food from '../Food/Food';
import Cart from './cart';
// import Cart from './Components/Cart/cart';



const Parent_Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log(cartItems);
  };

  return (
    <div>
      <h1>My Online Store</h1>
      <Food addToCart={addToCart} />
      <Cart cart_items={cartItems} />
    </div>
  );
};

export default Parent_Cart;
