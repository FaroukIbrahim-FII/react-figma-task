import React from "react";
import LoremText from "./LoremText";

function DetailedDiv({ optionArray, changeCurrentOption, currentOption }) {
  return (
    <div id="belowdiv">
      <div id="belowcontainer">
        <div>
          <ul>
            {optionArray.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => changeCurrentOption(option)}
                  id={currentOption === option.id ? "active" : ""}
                >
                  <input type="checkbox" id={`btnControl${option.id}`} />
                  <label className="btn" htmlFor={`btnControl${option.id}`}>
                    {option.title}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <hr />
        <div>
          <LoremText />
        </div>
      </div>
    </div>
  );
}

export default DetailedDiv;
