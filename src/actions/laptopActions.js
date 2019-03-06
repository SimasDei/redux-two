/**
 * @create
 */
export function postLaptop(laptop) {
  return {
    type: 'POST_LAPTOP',
    payload: laptop
  };
}
/**
 * @update
 */
export function updateLaptop(laptop) {
  return {
    type: 'UPDATE_LAPTOP',
    payload: laptop
  };
}

/**
 * @delete
 */
export function deleteLaptop(id) {
  return {
    type: 'DELETE_LAPTOP',
    payload: id
  };
}

/**
 * @get
 */
export function getLaptops() {
  return {
    type: 'GET_LAPTOPS'
  };
}

/**
  * type: 'POST_LAPTOP',
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
  */
