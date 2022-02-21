import { useEffect } from "react";
import { render } from "@testing-library/react";
import Product from "./Product";
import useResources from "../hooks/useResources";

function Products() {
  const products = [
    { id: 1, imgsrc: "/blueBag.png", imgName: "Blue Bage" },
    { id: 2, imgsrc: "/blueShirt.png", imgName: "Blue Shirt" },
    { id: 3, imgsrc: "/brownJacket.png", imgName: "Brown Jacket" },
    { id: 4, imgsrc: "/letherWallet.png", imgName: "Lether Wallet" },
    { id: 5, imgsrc: "/shorts.png", imgName: "Shorts" },
    { id: 6, imgsrc: "/toxedo.png", imgName: "Toxedo" },
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
