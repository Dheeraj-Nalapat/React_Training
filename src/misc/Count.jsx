import { useState, useEffect, Fragment, useRef } from "react";
let color = "blue";
let color1 = "blue";
const Count = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const readText = (e) => {
    color1 = e.target.value;
    console.log(color1);
  };

  useEffect(() => {
    console.log(color1, "in UE");
    color = color1;
    console.log(color);
    // if (count % 2 == 0) {
    //   color = "red";
    // } else {
    //   color = "blue";
    // }
    return () => {
      console.log("colour changed to", color);
    };
  }, [count]);

  return (
    <Fragment>
      <input ref={inputRef} onChange={readText} />
      <button
        type="button"
        style={{ backgroundColor: color }}
        onClick={() => {
          console.log(color1, "in Click");

          setCount((prev) => prev + 1);
          inputRef.current.focus();
        }}
      >
        {count}
        {color}
      </button>
    </Fragment>
  );
};

export default Count;
