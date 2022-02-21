import { React, useEffect } from "react";
import useResources from "../hooks/useResources";
import { useSelector } from "react-redux";
import "./favorite.css";

function Favorite(props) {
  const favList = useSelector((state) => state.favList);
  useEffect(() => {
    console.log(favList.length == 0);
  });
  if (favList.length == 0)
    return <p id="warning">There is no item in the favorite</p>;
  return (
    <div id="favorites">
      {favList.map((item) => {
        return (
          <div>
            <div key={item.name} id="article">
              <img src={item.imgSrc} alt={item.imgName} />
              <h3>$99.50</h3>
              <p>T-shirts with multiple colors, for men and lady</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Favorite;
