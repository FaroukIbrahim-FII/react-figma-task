const ADD_FAV_ITEM = "ADD_FAV_ITEM";

const favReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAV_ITEM:
      const oldState = [...state];
      const newState = [...oldState, action.payload];
      return newState;
    default:
      return state;
  }
};
export default favReducer;
