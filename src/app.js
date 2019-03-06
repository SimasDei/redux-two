import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
/**
 * @react - React Imports
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * @reducer - Combined Reducers
 */
import reducers from './reducers/index';

/**
 * @store - create Redux Store
 */
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

/**
 * @actions - Import Actions
 */
import { addToCart } from './actions/cartActions';
import {
  deleteLaptop,
  postLaptop,
  updateLaptop
} from './actions/laptopActions';

/**
 * @components - import React Components
 */
import LaptopList from './components/pages/laptopList';

render(
  <Provider store={store}>
    <LaptopList />
  </Provider>,
  document.getElementById('app')
);

/**
 * @actions - Laptop actions
 */
// store.dispatch(
//   postLaptop([

//   ])
// );

/**
 * @actions - Shopping Cart actions
 */
// store.dispatch(addToCart([{ id: 1 }]));
