import React from "react";

const Radio = ({ options = [], val, onChange, type='vertical' }) => {
  return (
    <div className={`custom-radio ${type}`}>
      {options.map((option) => (
        <label className="custom-radio__label">
          <input type="radio" name="radio" checked />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
