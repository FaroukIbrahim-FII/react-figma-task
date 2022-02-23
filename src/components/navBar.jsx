import React from "react";
import { Link } from "react-router-dom";
import "./CSS/navBar.css";
import Logo from "../assets/Logo";

function NavBar(props) {
  const doSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <nav>
        <Link className="nav-link" to="/">
          <Logo className="logo" />
        </Link>
        <form id="form" onSubmit={doSubmit}>
          <input type="text" placeholder="Search" id="searchbar" />
          <select name="select" id="select" placeholder="search">
            <option defaultValue="search" disabled hidden>
              search
            </option>
          </select>
          <input type="submit" id="submit" />
        </form>
        <button id="signin">
          <svg
            id="personsvg"
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.99984 8.99984C11.3019 8.99984 13.1665 7.13525 13.1665 4.83317C13.1665 2.53109 11.3019 0.666504 8.99984 0.666504C6.69775 0.666504 4.83317 2.53109 4.83317 4.83317C4.83317 7.13525 6.69775 8.99984 8.99984 8.99984ZM8.99984 10.2498C6.21859 10.2498 0.666504 11.6457 0.666504 14.4165V15.4582C0.666504 16.0311 1.13525 16.4998 1.70817 16.4998H16.2915C16.8644 16.4998 17.3332 16.0311 17.3332 15.4582V14.4165C17.3332 11.6457 11.7811 10.2498 8.99984 10.2498Z"
              fill="#9DA1A7"
            />
          </svg>
          Sign In
        </button>
        <Link className="nav-link" to="/favorite">
          <button id="fav">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.1249 14.7751C9.49155 15.3501 8.51655 15.3501 7.88322 14.7667L7.79155 14.6834C3.41655 10.7251 0.558217 8.13339 0.66655 4.90006C0.71655 3.48339 1.44155 2.12506 2.61655 1.32506C4.81655 -0.174943 7.53322 0.525057 8.99988 2.24172C10.4666 0.525057 13.1832 -0.183276 15.3832 1.32506C16.5582 2.12506 17.2832 3.48339 17.3332 4.90006C17.4499 8.13339 14.5832 10.7251 10.2082 14.7001L10.1249 14.7751Z"
                fill="#9DA1A7"
              />
            </svg>
            Wishlist
          </button>
        </Link>
        <Link className="nav-link" to="/cart">
          <button id="cart">
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.3335 6.5H14.3418L10.6835 1.025C10.3502 0.533333 9.62516 0.533333 9.30016 1.025L5.64183 6.5H1.66683C1.2085 6.5 0.833496 6.875 0.833496 7.33333C0.833496 7.40833 0.841829 7.48333 0.866829 7.55833L2.9835 15.2833C3.17516 15.9833 3.81683 16.5 4.5835 16.5H15.4168C16.1835 16.5 16.8252 15.9833 17.0252 15.2833L19.1418 7.55833L19.1668 7.33333C19.1668 6.875 18.7918 6.5 18.3335 6.5ZM9.99183 2.99167L12.3335 6.5H7.65016L9.99183 2.99167ZM10.0002 13.1667C9.0835 13.1667 8.3335 12.4167 8.3335 11.5C8.3335 10.5833 9.0835 9.83333 10.0002 9.83333C10.9168 9.83333 11.6668 10.5833 11.6668 11.5C11.6668 12.4167 10.9168 13.1667 10.0002 13.1667Z"
                fill="#9DA1A7"
              />
            </svg>
            My cart
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
