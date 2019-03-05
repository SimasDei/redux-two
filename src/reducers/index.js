import { combineReducers } from 'redux';
import laptopReducers from './laptopReducers';
import cartReducers from './cartReducer';

export default combineReducers({
  laptops: laptopReducers,
  cart: cartReducers
});
