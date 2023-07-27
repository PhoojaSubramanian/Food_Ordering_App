const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.food_id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
