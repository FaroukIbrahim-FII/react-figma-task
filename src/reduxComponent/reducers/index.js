import favReducer from "./favReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  favList: favReducer,
  cartList: cartReducer,
});

export default rootReducer;
