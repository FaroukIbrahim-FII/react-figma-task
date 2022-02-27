const ADD_CART_ITEM = "ADD_CART_ITEM";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      const oldState = [...state];
      const newState = [...oldState, action.payload];
      console.log(newState);
      return newState;
    default:
      return state;
  }
};
export default cartReducer;
