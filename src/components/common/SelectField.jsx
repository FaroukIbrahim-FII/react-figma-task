import React from "react";

const SelectField = ({ name, label, options = [], value, onChange, error }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        name={name}
        className="form-control"
        id={name}
        className="form-select"
      >
        <option value=""></option>
        {options.map((option) => {
          return (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          );
        })}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SelectField;
