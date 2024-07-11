import { forwardRef, useEffect, useState } from "react";
import { RiEye2Line } from "react-icons/ri";

const TextField = forwardRef((props, ref) => {
  // const onChange = (e) => {
  //   if (e.target.value.length > 10) {
  //     setColor("red");
  //     console.log("value more than 10 characters");
  //   } else {
  //     setText(e.target.value);
  //     if (props.onChange) {
  //       props.onChange(text);
  //     }
  //     setColor(undefined);
  //   }
  // };
  const onChange = (e) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };

  console.log(props);
  return (
    <span className="login-textfield">
      <input
        ref={ref}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder=""
        onChange={onChange}
        value={props.text}
        style={{ borderColor: props.borderColor }}
      />
      <label htmlFor={props.id}>{props.label}</label>
      <span className="eye">
        <RiEye2Line color="blue" />
      </span>
      <p className="error">{props.error}</p>
    </span>
  );
});

export default TextField;
