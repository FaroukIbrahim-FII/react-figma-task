import React, { Component, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Slider } from "@mui/material";
import { filter_products } from "../reduxComponent/actions/disProdsActions";
import "./Price.css";
import PriceForm from "./common/PriceForm";

function Price(props) {
  const products = useSelector((state) => state.displayedProducts);
  const dispatch = useDispatch();
  let leftValue = 50;
  let rightValue = 100;
  const [value, setValue] = useState([leftValue, rightValue]);
  const updateValue = (e, data) => {
    setValue(data);
    return data;
  };
  let minPrice = Infinity;
  let maxPrice = 0;
  for (let product of products) {
    if (product.price < minPrice) minPrice = product.price;
    if (product.price > maxPrice) maxPrice = product.price;
  }
  function changeLeftValue(e) {
    let value = e.target.value;
    leftValue = +value;
    setValue([leftValue, rightValue]);
  }
  function changeRightValue(e) {
    let value = e.target.value;
    rightValue = +value;
    setValue([leftValue, rightValue]);
  }
  function filterOnPrice() {
    const filteredProducts = products.filter((item) => {
      if (item.price > value[0] && item.price < value[1]) return true;
    });
    dispatch(filter_products(filteredProducts));
  }
  return (
    <div id="middle">
      <p id="pricep">Price</p>
      <Slider
        id="slider"
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={updateValue}
        valueLabelDisplay="auto"
        min={minPrice}
        max={maxPrice}
        sx={{
          "& .MuiSlider-thumb": {
            color: "white",
          },
        }}
      />
      <div id="rightandleft">
        <PriceForm
          label="Min"
          formId="leftvalue"
          placeholder={`$${leftValue}`}
          onChange={changeLeftValue}
        />
        <PriceForm
          label="Max"
          formId="rightvalue"
          placeholder={`$${rightValue}`}
          onChange={changeRightValue}
        />
      </div>
      <div>
        <button id="apply" onClick={filterOnPrice}>
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default Price;
