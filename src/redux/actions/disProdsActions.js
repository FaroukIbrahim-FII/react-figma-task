import { getFilteredData } from "../../hooks/useFitler";

export const filter_products = (checkbox, priceArray, starArray) => {
  return {
    type: "FILTER_ITEMS",
    payload: getFilteredData(checkbox, priceArray, starArray),
  };
};
