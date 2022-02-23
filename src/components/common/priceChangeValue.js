import { useState } from "react";

export function useChangeValue() {
  let leftValue = 50;
  let rightValue = 100;
  const [value, setValue] = useState([leftValue, rightValue]);

  const updateValue = (e, data) => {
    setValue(data);
    return data;
  };
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
  return {
    leftValue,
    rightValue,
    value,
    updateValue,
    changeLeftValue,
    changeRightValue,
  };
}
