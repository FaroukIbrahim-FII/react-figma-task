import { useEffect } from "react";
import { render } from "@testing-library/react";
import Product from "./Product";
import useResources from "../hooks/useResources";

function Products() {
  const products = [
    {
      id: 1,
      imgsrc: "http://localhost:3000/blueBag.png",
      imgName: "Blue Bage",
    },
    {
      id: 2,
      imgsrc: "http://localhost:3000/blueShirt.png",
      imgName: "Blue Shirt",
    },
    {
      id: 3,
      imgsrc: "http://localhost:3000/brownJacket.png",
      imgName: "Brown Jacket",
    },
    {
      id: 4,
      imgsrc: "http://localhost:3000/letherWallet.png",
      imgName: "Lether Wallet",
    },
    { id: 5, imgsrc: "http://localhost:3000/shorts.png", imgName: "Shorts" },
    { id: 6, imgsrc: "http://localhost:3000/toxedo.png", imgName: "Toxedo" },
  ];
  const { favList, cartList, addToCart, addToFav } = useResources();
  useEffect(() => {
    console.log(favList, cartList);
  }, [favList, cartList]);
  return (
    <div id="products">
      {products.map((product) => {
        return (
          <div key={product.imgName}>
            <Product
              product={product}
              key={product.imgName}
              imgSrc={product.imgsrc}
              name={product.imgName}
              addToFav={addToFav}
              addToCart={addToCart}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Products;
