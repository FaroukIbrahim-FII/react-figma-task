import React from "react";
import QuantityButton from "./QuantityButton";

function QuantityForm({ decreaseValue, value, increaseValue }) {
  return (
    <form>
      <label htmlFor="quantity">Quantity</label>
      <QuantityButton
        label="-"
        value="Decrease Value"
        onClick={decreaseValue}
        btnid="decrease"
      />
      <input type="number" id="number" value={value} />
      <QuantityButton
        label="+"
        value="Increase Value"
        onClick={increaseValue}
        btnid="increase"
      />
    </form>
  );
}

export default QuantityForm;
