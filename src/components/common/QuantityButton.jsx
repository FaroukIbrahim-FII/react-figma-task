import React from "react";

function QuantityButton({ label, value, onClick, btnid }) {
  return (
    <div className="value-button" id={btnid} onClick={onClick} value={value}>
      {label}
    </div>
  );
}

export default QuantityButton;
