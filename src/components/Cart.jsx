import React from "react";
import { useSelector } from "react-redux";
import "./CSS/favorite.css";

function Cart(props) {
  const cartList = useSelector((state) => state.cartList);

  if (cartList.length == 0) {
    return <p id="warning">There is no item in your cart</p>;
  }
  return (
    <div id="favorites">
      {cartList.map((item) => {
        return (
          <div key={item.id}>
            <div key={item.name} id="article">
              <img src={item.imgSrc} alt={item.imgName} />
              <h3>$99.50</h3>
              <p>T-shirts with multiple colors, for men and lady</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
