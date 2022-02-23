import favReducer from "./favReducer";
import cartReducer from "./cartReducer";
import disProdsReducer from "./disProdsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  favList: favReducer,
  cartList: cartReducer,
  displayedProducts: disProdsReducer,
});

export default rootReducer;
