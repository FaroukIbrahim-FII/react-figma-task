import { useMemo } from "react";
import { useSelector } from "react-redux";

function getMinAndMax(products) {
  let minPrice = Infinity;
  let maxPrice = 0;
  for (let product of products) {
    if (product.price < minPrice) minPrice = product.price;
    if (product.price > maxPrice) maxPrice = product.price;
  }
  return {
    minPrice,
    maxPrice,
  };
}

export function usePrices() {
  const products = useSelector((state) => state.displayedProducts);

  const prices = useMemo(
    () => getMinAndMax(products),
    [products, getMinAndMax]
  );

  return prices;
}
