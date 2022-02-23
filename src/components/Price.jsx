import React from "react";
import { Slider } from "@mui/material";
import "./CSS/Price.css";
import PriceForm from "./common/PriceForm";
import usePriceFunctions from "../hooks/usePriceFunctions";

function Price(props) {
  const {
    changeLeftValue,
    changeRightValue,
    filterOnPrice,
    value,
    updateValue,
    minPrice,
    maxPrice,
    leftValue,
    rightValue,
  } = usePriceFunctions();

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
