import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { allProducts } from "../components/common/allProducts";
import { filter_products } from "../redux/actions/disProdsActions";

const stars = [
  { id: 5, status: false },
  { id: 4, status: false },
  { id: 3, status: false },
  { id: 2, status: false },
  { id: 1, status: false },
];

export function useStarsDependencies(props) {
  const products = allProducts;
  const dispatch = useDispatch();
  const [ratingStars, setRatingStars] = useState(stars);
  const starPattern = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
  ];

  const handleChange = useCallback(
    (e) => {
      let newRatingStars = [...ratingStars];
      for (let ratingStar of newRatingStars) {
        if (ratingStar.id === +e.target.name + 1) {
          ratingStar.status = e.target.checked;
        }
      }
      setRatingStars(newRatingStars);
      const finalRatingArray = newRatingStars.map((item) => {
        if (item.status === true) return item.id;
      });
      dispatch(filter_products(null, [], finalRatingArray));
    },
    [ratingStars]
  );
  return {
    starPattern,
    handleChange,
  };
}
