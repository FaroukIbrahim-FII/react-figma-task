import React from "react";
import { useDetailProducts } from "./common/useDetailProducts";
import DiscripDiv from "./common/DiscripDiv";
import ProductView from "./common/ProductView";
import "./CSS/DetailedProduct.css";

const DetailedProduct = (props) => {
  const {
    value,
    currentOption,
    product,
    optionArray,
    table,
    increaseValue,
    decreaseValue,
    changeCurrentOption,
  } = useDetailProducts();

  return (
    <div id="detailedproduct">
      <ProductView
        product={product}
        table={table}
        decreaseValue={decreaseValue}
        value={value}
        increaseValue={increaseValue}
      />
      <DiscripDiv
        optionArray={optionArray}
        changeCurrentOption={changeCurrentOption}
        currentOption={currentOption}
      />
    </div>
  );
};

export default DetailedProduct;
