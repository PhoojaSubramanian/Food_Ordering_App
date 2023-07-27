import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import loginReducer from './reducers/loginReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  login: loginReducer,
});

const store = createStore(rootReducer);

export default store;
