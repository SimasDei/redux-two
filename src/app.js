import { createStore } from 'redux';

/**
 * @reducer
 */
const reducer = (state = { laptops: [] }, action) => {
  switch (action.type) {
    case 'POST_LAPTOP':
      return {
        laptops: [...state.laptops, ...action.payload]
      };
  }

  return state;
};

/**
 * @store - create Redux Store
 */
const store = createStore(reducer);
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
  type: 'POST_LAPTOP',
  payload: [
    {
      id: 3,
      title: 'this is the third laptop title',
      description: 'this is the tertiary laptop description',
      price: 3299.99
    }
  ]
});
