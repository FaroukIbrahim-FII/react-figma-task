import React from "react";
import Condition from "./Condition";
import Price from "./Price";
import StarRating from "./StarRating";
import "./CSS/FilteringComponent.css";

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
