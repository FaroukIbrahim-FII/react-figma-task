import { useSelector } from "react-redux";
import Product from "./Product";
import FilteringComponent from "./FilteringComponent";

function Products() {
  const products = useSelector((state) => state.displayedProducts);

  return (
    <div id="main">
      <div id="filterdiv">
        <FilteringComponent products={products} />
      </div>

      <div id="products">
        {products.map((product) => {
          return (
            <div key={product.imgName}>
              <Product
                product={product}
                key={product.imgName}
                imgSrc={product.imgsrc}
                name={product.imgName}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
