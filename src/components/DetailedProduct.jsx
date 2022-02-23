import React from "react";
import "./CSS/DetailedProduct.css";
import { useDetailProducts } from "./common/useDetailProducts";
import DetailedDiv from "./common/DetailedDiv";
import ProductView from "./common/ProductView";

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
      <DetailedDiv
        optionArray={optionArray}
        changeCurrentOption={changeCurrentOption}
        currentOption={currentOption}
      />
    </div>
  );
};

export default DetailedProduct;
