const laptopReducer = (state = { laptops: [] }, action) => {
  switch (action.type) {
    case 'POST_LAPTOP':
      return {
        laptops: [...state.laptops, ...action.payload]
      };
    case 'DELETE_LAPTOP':
      const currentLaptopToDelete = [...state.laptops];
      const indexToDelete = currentLaptopToDelete.findIndex(
        book => book.id === action.payload.id
      );
      return {
        laptops: [
          ...currentLaptopToDelete.slice(0, indexToDelete),
          ...currentLaptopToDelete.slice(indexToDelete + 1)
        ]
      };
    case 'UPDATE_LAPTOP':
      const currentLaptopToUpdate = [...state.laptops];
      const indexToUpdate = currentLaptopToUpdate.findIndex(
        book => book.id === action.payload.id
      );
      const newLaptopUpdate = {
        ...currentLaptopToUpdate[indexToUpdate],
        title: action.payload.title,
        description: action.payload.description,
        price: action.payload.price
      };
      return {
        laptops: [
          ...currentLaptopToUpdate.slice(0, indexToUpdate),
          newLaptopUpdate,
          ...currentLaptopToUpdate.slice(indexToUpdate + 1)
        ]
      };
  }

  return state;
};

export default laptopReducer;
