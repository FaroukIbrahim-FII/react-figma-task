import React from "react";
import { useDispatch } from "react-redux";
import { filter_products } from "../reduxComponent/actions/disProdsActions";
import { allProducts } from "./common/allProducts";
import "./FilteringComponent.css";

function Condition(props) {
  const conditions = [
    { id: 1, title: "Brand New", name: "new" },
    { id: 2, title: "Second Hand", name: "second hand" },
    { id: 3, title: "Refurbished", name: "refurbished" },
    { id: 4, title: "Other", name: "other" },
  ];
  const products = allProducts;
  const dispatch = useDispatch();
  const getValue = (e) => {
    const value = e.target.value;
    const filteredProducts = products.filter((item) => {
      if (item.condition === value) return true;
    });
    dispatch(filter_products(filteredProducts));
  };
  return (
    <form id="filterform" onChange={getValue}>
      <p>Condition</p>
      {conditions.map((item) => {
        return (
          <span className="mb-3" key={item.id}>
            <input type="radio" name="filterform" value={item.name} />
            <label htmlFor="filterform" className="form-label">
              {item.title}
            </label>
          </span>
        );
      })}
    </form>
  );
}

export default Condition;
