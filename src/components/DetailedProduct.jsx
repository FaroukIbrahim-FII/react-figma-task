import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { add_cart_item } from "../reduxComponent/actions/cartActions";
import { useDispatch } from "react-redux";
import LoremText from "./common/LoremText";
import "./DetailedProduct.css";
import CartIcon from "./common/CartIcon";
import QuantityButton from "./common/QuantityButton";

const DetailedProduct = (props) => {
  const id = useParams();
  const dispach = useDispatch();
  const products = useSelector((state) => state.displayedProducts);

  const [currentOption, setCurrentOption] = useState("1");
  const [value, setValue] = useState(1);

  const product = products.filter((item) => (item.id == +id.id ? true : false));
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
  return (
    <div id="detailedproduct">
      <div id="upperdiv">
        <img
          src={product[0].imgsrc}
          alt={product[0].imgName}
          id="productimage"
        />
        <div id="imageright">
          <h3>Quality Men's Hoodie for Winter, Men's Fashion Casual Hoodie</h3>
          <h3>
            ${product[0].price}
            <mark> /per box</mark>
          </h3>
          <p>
            Modern look and quality demo item is a streetwear-inspired
            collection that continues to break away from the conventions of
            mainstream fashion. Made in Italy, these black and brown clothing
            low-top shirts
          </p>
          <table>
            <tbody>
              {table.map((item) => {
                return (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          <div id="formdiv">
            <form>
              <label htmlFor="size">Size</label>
              <select>
                <option>XXL</option>
              </select>
            </form>
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
          </div>
          <div id="btnsdiv">
            <button id="buybtn">Buy Now</button>
            <button
              id="addtocartbtn"
              onClick={() => dispach(add_cart_item(product))}
            >
              <CartIcon />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div id="belowdiv">
        <div id="belowcontainer">
          <div>
            <ul>
              {optionArray.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => changeCurrentOption(option)}
                    id={currentOption === option.id ? "active" : ""}
                  >
                    <input type="checkbox" id={`btnControl${option.id}`} />
                    <label className="btn" htmlFor={`btnControl${option.id}`}>
                      {option.title}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
          <hr />
          <div>
            <LoremText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedProduct;
