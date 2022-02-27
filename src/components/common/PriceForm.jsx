import React from "react";

function PriceForm({ label, formId, placeholder, onChange }) {
  return (
    <form>
      <label htmlFor={formId}>{label}</label>
      <input
        type="number"
        id={formId}
        onChange={onChange}
        placeholder={placeholder}
      />
    </form>
  );
}

export default PriceForm;
