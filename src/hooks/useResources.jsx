import { useState } from "react";

function useResources(props) {
  const [favList, setFavList] = useState([]);
  const [cartList, setCartList] = useState([]);

  function addToFav(obj) {
    setFavList((prevState) => ({ ...prevState, ...obj }));
  }
  function addToCart(obj) {
    setCartList((prevState) => [...prevState, obj]);
  }
  return {
    favList,
    cartList,
    addToCart,
    addToFav,
  };
}

export default useResources;
