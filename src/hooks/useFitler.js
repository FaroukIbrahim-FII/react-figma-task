import { allProducts } from "../components/common/allProducts";

export function getFilteredData(
  checkbox = null,
  priceArray = [],
  starArray = []
) {
  let filteredProducts = allProducts;
  if (checkbox) {
    console.log("hi from checkbox", checkbox);
    filteredProducts = filteredProducts.filter(
      (item) => item.condition === checkbox
    );
  }
  if (priceArray.length != 0) {
    console.log("hi from price");
    filteredProducts = filteredProducts.filter((item) => {
      if (item.price >= priceArray[0] && item.price <= priceArray[1])
        return true;
    });
  }
  console.log("starArray: ", starArray);
  if (starArray.length != 0) {
    filteredProducts = filteredProducts.filter((item) => {
      if (starArray.includes(item.rate)) return true;
    });
  }
  console.log("after all", filteredProducts);

  return filteredProducts;
}
