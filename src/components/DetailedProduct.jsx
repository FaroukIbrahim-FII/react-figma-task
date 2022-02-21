import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { add_cart_item } from "../reduxComponent/actions/cartActions";
import { useDispatch } from "react-redux";
import "./DetailedProduct.css";

const DetailedProduct = (props) => {
  const id = useParams();
  const dispach = useDispatch();
  const products = [
    { id: 1, imgsrc: "/blueBag.png", imgName: "Blue Bage" },
    { id: 2, imgsrc: "/blueShirt.png", imgName: "Blue Shirt" },
    { id: 3, imgsrc: "/brownJacket.png", imgName: "Brown Jacket" },
    { id: 4, imgsrc: "/letherWallet.png", imgName: "Lether Wallet" },
    { id: 5, imgsrc: "/shorts.png", imgName: "Shorts" },
    { id: 6, imgsrc: "/toxedo.png", imgName: "Toxedo" },
  ];
  const [value, setValue] = useState(1);
  const product = products.filter((item) => (item.id == +id.id ? true : false));
  const [optionArray, setOptionArray] = useState([
    { id: "1", title: "Overview", checked: "" },
    { id: "2", title: "Specification", checked: "" },
    { id: "3", title: "Customer Review", checked: "" },
    { id: "4", title: "Delievery Info", checked: "" },
  ]);
  const [currentOption, setCurrentOption] = useState("");
  useEffect(() => {
    console.log(optionArray);
  });
  function increaseValue() {
    isNaN(value) ? setValue(0) : setValue(value);
    setValue(value + 1);
  }

  function decreaseValue() {
    setValue(value - 1);
    value < 1 ? setValue(1) : setValue(1);
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
            $98.00<mark> /per box</mark>
          </h3>
          <p>
            Modern look and quality demo item is a streetwear-inspired
            collection that continues to break away from the conventions of
            mainstream fashion. Made in Italy, these black and brown clothing
            low-top shirts
          </p>
          <table>
            <tbody>
              <tr>
                <td>Type</td>
                <td>Regular</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>Brown</td>
              </tr>
              <tr>
                <td>Delivery</td>
                <td>Russia, USA & Europe</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>Reebook</td>
              </tr>
            </tbody>
          </table>
          <hr />
          {/* { display: block; margin-before: 0.5em; margin-after: 0.5em; margin-start: auto; margin-end: auto; overflow: hidden; border-style: inset; border-width: 1px;} */}
          <div id="formdiv">
            <form>
              <label htmlFor="size">Size</label>
              <select>
                <option>XXL</option>
              </select>
            </form>
            <form>
              <label htmlFor="quantity">Quantity</label>
              <div
                className="value-button"
                id="decrease"
                onClick={decreaseValue}
                value="Decrease Value"
              >
                -
              </div>
              <input type="number" id="number" value={value} />
              <div
                className="value-button"
                id="increase"
                onClick={increaseValue}
                value="Increase Value"
              >
                +
              </div>
            </form>
          </div>
          <div id="btnsdiv">
            <button id="buybtn">Buy Now</button>
            <button
              id="addtocartbtn"
              onClick={() => dispach(add_cart_item(product))}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.08292 14.6663C5.12043 14.6663 4.3417 15.4537 4.3417 16.4162C4.3417 17.3787 5.12043 18.1662 6.08292 18.1662C7.0454 18.1662 7.83289 17.3787 7.83289 16.4162C7.83289 15.4537 7.0454 14.6663 6.08292 14.6663ZM0.833008 1.54149C0.833008 2.02273 1.22675 2.41647 1.70799 2.41647H2.58298L5.73292 9.05761L4.55169 11.1926C3.91295 12.365 4.75294 13.7913 6.08291 13.7913H15.7077C16.189 13.7913 16.5827 13.3975 16.5827 12.9163C16.5827 12.435 16.189 12.0413 15.7077 12.0413H6.08291L7.0454 10.2913H13.564C14.2203 10.2913 14.7978 9.93259 15.0953 9.3901L18.2277 3.71145C18.5514 3.13396 18.1315 2.41647 17.4665 2.41647H4.51669L3.93045 1.16525C3.79046 0.859001 3.47546 0.666504 3.14297 0.666504H1.70799C1.22675 0.666504 0.833008 1.06025 0.833008 1.54149ZM14.8328 14.6663C13.8703 14.6663 13.0915 15.4537 13.0915 16.4162C13.0915 17.3787 13.8703 18.1662 14.8328 18.1662C15.7952 18.1662 16.5827 17.3787 16.5827 16.4162C16.5827 15.4537 15.7952 14.6663 14.8328 14.6663Z"
                  fill="white"
                />
              </svg>
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedProduct;
