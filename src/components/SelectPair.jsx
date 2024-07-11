import { useState, useEffect } from "react";

const SelectPair = (props) => {
  const onChange = (e) => {
    if (props.onChange) {
      props.onChange(props.label, e.target.value);
    }
  };
  return (
    <div className="input-pair">
      <label htmlFor={props.id}>{props.label}:</label>
      <br />
      <select onChange={onChange}>
        <option hidden value={props.label}>
          {props.label}
        </option>
        {props.option.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
    </div>
  );
};

export default SelectPair;
