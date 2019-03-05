import { createStore } from 'redux';

/**
 * @reducer - Combined Reducers
 */
import reducers from './reducers/index';

/**
 * @store - create Redux Store
 */
const store = createStore(reducers);
store.subscribe(() => console.log('current state is: ', store.getState()));

/**
 * @actions - create and dispatch actions
 */
store.dispatch({
  type: 'POST_LAPTOP',
  payload: [
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
  ]
});

store.dispatch({
  type: 'DELETE_LAPTOP',
  payload: {
    id: 1
  }
});

store.dispatch({
  type: 'UPDATE_LAPTOP',
  payload: {
    id: 2,
    title: 'Updated title',
    description: 'Updated Description',
    price: 999.99
  }
});
