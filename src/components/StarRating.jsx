import React from "react";
import { ReactComponent as GoldStar } from "../assets/goldStar.svg";
import { ReactComponent as EmptyStar } from "../assets/grayStar.svg";
import { useStarsDependencies } from "../hooks/starsDependencies";
import "./CSS/StarRating.css";

const StarRating = () => {
  const { starPattern, handleChange } = useStarsDependencies();

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
                  {item == 1 ? <GoldStar /> : <EmptyStar />}
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
