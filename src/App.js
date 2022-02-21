import "./App.css";
import NavBar from "./components/navBar";
import Cart from "./components/Cart";
import Favorite from "./components/Favorite";
import Products from "./components/Products";
import { Routes, Route, Redirect } from "react-router-dom";
import { render } from "@testing-library/react";
import Resources from "./context/Resources";
import { createStore } from "redux";
import DetailedProduct from "./components/DetailedProduct";

function App() {
  // element={<DetailedProduct  />}
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/favorite" element={<Favorite />} />
          <Route exact path="/products/:id" element={<DetailedProduct />} />
          <Route exact path="/" element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
