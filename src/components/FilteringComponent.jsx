import React, { useEffect } from "react";
import Condition from "./Condition";
import Price from "./Price";
import StarRating from "./StarRating";
import "./FilteringComponent.css";

function FilteringComponent(props) {
  return (
    <>
      <Condition products={props.products} />
      <Price products={props.products} />
      <StarRating />
    </>
  );
}

export default FilteringComponent;
