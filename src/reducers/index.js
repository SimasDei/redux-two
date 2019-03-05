import { combineReducers } from 'redux';
import laptopReducers from './laptopReducers';

export default combineReducers({
  laptops: laptopReducers
});
