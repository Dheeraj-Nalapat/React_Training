import { forwardRef, useEffect, useState } from "react";
import { RiEye2Line } from "react-icons/ri";
import { RiEyeCloseFill } from "react-icons/ri";

const TextField = forwardRef((props, ref) => {
  const onChange = (e) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };
  const [passwordShow, setPasswordShow] = useState(false);
  console.log(props);
  return (
    <span className="login-textfield">
      <input
        ref={ref}
        type={passwordShow ? "text" : props.type}
        name={props.name}
        id={props.id}
        placeholder=""
        onChange={onChange}
        value={props.value}
        style={{ borderColor: props.borderColor }}
      />
      <label htmlFor={props.id}>{props.label}</label>
      {props.type === "password" && (
        <button
          className="eye"
          type="button"
          onClick={() => setPasswordShow((prev) => !prev)}
        >
          {passwordShow ? (
            <RiEyeCloseFill size={18} />
          ) : (
            <RiEye2Line size={18} />
          )}
        </button>
      )}
      <p className="error">{props.error}</p>
    </span>
  );
});

export default TextField;
