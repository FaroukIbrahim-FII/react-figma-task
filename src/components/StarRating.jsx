import React from "react";
import GoldStars from "./common/GoldStars";
import EmptyStar from "./common/EmptyStar";
import "./CSS/StarRating.css";
import { useStarsDependencies } from "./common/starsDependencies";

const StarRating = () => {
  const { starPattern } = useStarsDependencies();
  const { handleChange } = useStarsDependencies();

  let index = 4;
  let innerIndex = 100;

  return (
    <form id="starrating">
      <p id="ratingp">Rating</p>
      {starPattern.map((line) => {
        return (
          <div id="starLine" key={index--}>
            <input
              data-testid={`star${index}`}
              type="checkbox"
              name={`${index}`}
              onChange={handleChange}
            />
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
