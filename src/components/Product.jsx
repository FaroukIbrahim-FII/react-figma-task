import React from "react";
import "./CSS/Product.css";
import { Link } from "react-router-dom";
import { add_fav_item } from "../redux/actions/favActions";
import { add_cart_item } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";

function Product({ imgSrc, name, addToFav, addToCart, product }) {
  const dispach = useDispatch();

  return (
    <article id="article">
      <Link to={`/products/${product.id}`}>
        <img src={imgSrc} alt={name} />
      </Link>
      <h3>${product.price}</h3>
      <p>T-shirts with multiple colors, for men and lady</p>
      <button id="cartbtn" onClick={() => dispach(add_cart_item(product))}>
        Add To Cart
      </button>
      <button id="favbtn" onClick={() => dispach(add_fav_item(product))}>
        <i className="fa fa-heart-o"></i>
      </button>
    </article>
  );
}

export default Product;
