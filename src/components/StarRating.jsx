import React, { useState } from "react";
import GoldStars from "./common/GoldStars";
import EmptyStar from "./common/EmptyStar";
import { useDispatch, useSelector } from "react-redux";
import { filter_products } from "../reduxComponent/actions/disProdsActions";
import "./StarRating.css";
import { faLitecoinSign } from "@fortawesome/free-solid-svg-icons";
import { allProducts } from "./common/allProducts";

const StarRating = () => {
  const products = allProducts;
  const dispatch = useDispatch();
  const [ratingStars, setRatingStars] = useState([
    { id: 5, status: false },
    { id: 4, status: false },
    { id: 3, status: false },
    { id: 2, status: false },
    { id: 1, status: false },
  ]);
  const starPattern = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
  ];
  let index = 0;
  let innerIndex = 100;
  function handleChange(e) {
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
    const filteredArray = products.filter((item) => {
      if (finalRatingArray.includes(item.rate)) return true;
    });
    dispatch(filter_products(filteredArray));
  }
  return (
    <form id="starrating">
      <p id="ratingp">Rating</p>
      {starPattern.map((line) => {
        return (
          <div id="starLine" key={index++}>
            <input type="checkbox" name={index} onChange={handleChange} />
            {line.map((item) => {
              return (
                <span key={innerIndex++}>
                  {item == 1 ? <GoldStars /> : <EmptyStar />}
                </span>
              );
            })}
          </div>
        );
      })}
    </form>
  );
};

export default StarRating;
