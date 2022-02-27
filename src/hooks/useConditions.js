import { useDispatch } from "react-redux";
import { allProducts } from "../components/common/allProducts";
import { filter_products } from "../redux/actions/disProdsActions";

export function useConditions(props) {
  const conditions = [
    { id: 1, title: "Brand New", name: "new" },
    { id: 2, title: "Second Hand", name: "second hand" },
    { id: 3, title: "Refurbished", name: "refurbished" },
    { id: 4, title: "Other", name: "other" },
  ];
  const products = allProducts;
  const dispatch = useDispatch();
  const getValue = (e) => {
    const value = e.target.value;
    dispatch(filter_products(value, [], []));
  };

  return {
    conditions,
    getValue,
  };
}
