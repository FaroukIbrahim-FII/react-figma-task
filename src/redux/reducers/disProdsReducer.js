import { allProducts } from "../../components/common/allProducts";

const FILTER_ITEMS = "FILTER_ITEMS";
const products = allProducts;

const disProdsReducer = (state = products, action) => {
  switch (action.type) {
    case FILTER_ITEMS:
      const oldState = [...state];
      const filteredArray = action.payload;
      return filteredArray;
    default:
      return state;
  }
};
export default disProdsReducer;
