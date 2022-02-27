import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function useDetailProducts(props) {
  const id = useParams();
  const products = useSelector((state) => state.displayedProducts);

  const [currentOption, setCurrentOption] = useState("1");
  const [value, setValue] = useState(1);

  const product = useMemo(
    () => products.find((item) => item.id == +id.id),
    [products]
  );
  const optionArray = [
    { id: "1", title: "Overview", checked: "" },
    { id: "2", title: "Specification", checked: "" },
    { id: "3", title: "Customer Review", checked: "" },
    { id: "4", title: "Delievery Info", checked: "" },
  ];
  const table = [
    { name: "Type", value: "Regular" },
    { name: "Color", value: "Brown" },
    { name: "Delivery", value: "Russia, USA & Europe" },
    { name: "Brand", value: "Reebook" },
  ];
  function increaseValue() {
    setValue(value + 1);
  }

  function decreaseValue() {
    setValue((prev) => (prev - 1 < 1 ? 1 : prev - 1));
  }
  function changeCurrentOption(option) {
    setCurrentOption(option.id ? option.id : "1");
  }

  return {
    value,
    currentOption,
    product,
    optionArray,
    table,
    increaseValue,
    decreaseValue,
    changeCurrentOption,
  };
}
