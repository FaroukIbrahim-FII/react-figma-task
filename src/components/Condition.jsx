import React from "react";
import { useConditions } from "../hooks/useConditions";
import "./CSS/FilteringComponent.css";

function Condition() {
  const { conditions } = useConditions();
  const { getValue } = useConditions();

  return (
    <form id="filterform" onChange={getValue}>
      <p>Condition</p>
      {conditions.map((item) => {
        return (
          <span className="mb-3" key={item.id}>
            <label htmlFor="filterform" className="form-label">
              <input type="radio" name="filterform" value={item.name} />
              {item.title}
            </label>
          </span>
        );
      })}
    </form>
  );
}

export default Condition;
