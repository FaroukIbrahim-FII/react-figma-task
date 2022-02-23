import React from "react";
import { useDispatch } from "react-redux";
import QuantityForm from "./QuantityForm";
import { add_cart_item } from "../../redux/actions/cartActions";
import CartIcon from "./CartIcon";
import { useDetailProducts } from "./useDetailProducts";

function ProductView() {
  const { value, product, table, increaseValue, decreaseValue } =
    useDetailProducts();
  const dispach = useDispatch();

  return (
    <div id="upperdiv">
      <img src={product.imgsrc} alt={product.imgName} id="productimage" />
      <div id="imageright">
        <h3>Quality Men's Hoodie for Winter, Men's Fashion Casual Hoodie</h3>
        <h3>
          ${product.price}
          <mark> /per box</mark>
        </h3>
        <p>
          Modern look and quality demo item is a streetwear-inspired collection
          that continues to break away from the conventions of mainstream
          fashion. Made in Italy, these black and brown clothing low-top shirts
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
          <QuantityForm
            decreaseValue={decreaseValue}
            value={value}
            increaseValue={increaseValue}
          />
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
  );
}

export default ProductView;
