import { useState, useEffect } from "react";

const InputPair = (props) => {
  //const [text, setText] = useState("");
  const onChange = (e) => {
    // setText(e.target.value);
    if (props.onChange) {
      props.onChange(props.label, e.target.value);
    }
  };

  return (
    <div className="input-pair">
      <label htmlFor={props.id}>{props.label}:</label>
      <br />
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        placeholder={props.label}
        onChange={onChange}
        value={props.value}
      />
      <br />
    </div>
  );
};

export default InputPair;
