import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

/**
 * @reducer - Combined Reducers
 */
import reducers from './reducers/index';

/**
 * @store - create Redux Store
 */
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// store.subscribe(() => console.log('current state is: ', store.getState()));
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
 * @actions - Laptop actions
 */
store.dispatch(
  postLaptop([
    {
      id: 1,
      title: 'this is a laptop title',
      description: 'this is the laptop description',
      price: 1299.99
    },
    {
      id: 2,
      title: 'this is a another laptop title',
      description: 'this is the second laptop description',
      price: 1655.99
    }
  ])
);

store.dispatch(deleteLaptop({ id: 1 }));
store.dispatch(
  updateLaptop({
    id: 2,
    title: 'Updated Title'
  })
);
/**
 * @actions - Shopping Cart actions
 */
store.dispatch(addToCart([{ id: 1 }]));
