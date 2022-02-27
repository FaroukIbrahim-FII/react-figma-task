import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import { ReactComponent as PersonSVG } from "../assets/personImage.svg";
import { ReactComponent as FavSVG } from "../assets/favImage.svg";
import { ReactComponent as CartSVG } from "../assets/cartImge.svg";
import NavSearch from "./common/NavSearch";
import "./CSS/navBar.css";

function NavBar(props) {
  return (
    <div>
      <nav>
        <Link className="nav-link" to="/">
          <Logo className="logo" />
        </Link>
        <NavSearch />
        <button id="signin">
          <PersonSVG />
          Sign In
        </button>
        <Link className="nav-link" to="/favorite">
          <button id="fav">
            <FavSVG />
            Wishlist
          </button>
        </Link>
        <Link className="nav-link" to="/cart">
          <button id="cart">
            <CartSVG />
            My cart
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
