import { filter_products } from "../redux/actions/disProdsActions";
import { useSelector, useDispatch } from "react-redux";
import { usePrices } from "./getMinAndMaxPrice";
import { useChangeValue } from "../components/common/priceChangeValue";

function usePriceFunctions() {
  const products = useSelector((state) => state.displayedProducts);
  const dispatch = useDispatch();
  const { minPrice, maxPrice } = usePrices();
  const {
    value,
    leftValue,
    rightValue,
    updateValue,
    changeLeftValue,
    changeRightValue,
  } = useChangeValue();

  function filterOnPrice() {
    const filteredProducts = products.filter((item) => {
      if (item.price >= value[0] && item.price <= value[1]) return true;
    });
    dispatch(filter_products(filteredProducts));
  }
  return {
    changeLeftValue,
    changeRightValue,
    filterOnPrice,
    value,
    updateValue,
    minPrice,
    maxPrice,
    leftValue,
    rightValue,
  };
}

export default usePriceFunctions;
