import { Fragment, useEffect, useRef, useState } from "react";
import TextField from "./components/TextField";
import "./style.css";
import KvLogo from "./assets/kv logo.png";
import Logo from "./assets/kv-login.jpeg";
import Button from "./components/Button";
import Count from "./components/Count";

const Login = ({ handleSubmit }) => {
  const [userName, setUserName] = useState("");
  const usernameRef = useRef();
  const [error, setError] = useState("");
  const [color, setColor] = useState(undefined);
  const onUserNameChange = (text) => {
    if (text.length > 10) {
      setColor("red");
      setError("value has more than 10 charachters");
    } else {
      setUserName(text);
      setColor("");
      setError("");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      usernameRef.current.focus();
    }, 1500);
  }, []);
  // useEffect(() => {
  //   console.log(userName);
  //   if (userName.length > 10) {
  //     setColor("red");
  //   } else {
  //     setColor(undefined);
  //   }
  // }, [userName]);
  return (
    <Fragment>
      <main className="login-layout">
        {/*<!---hero section--->*/}
        <div className="hero">
          <div className="wrapper-hero">
            <img src={Logo} alt="Login Image" className="login-image" />
          </div>
        </div>
        {/*<!---login section--->*/}
        <div className="login">
          <form action="/" method="post">
            <img src={KvLogo} alt="Logo" className="logo" />
            <TextField
              label="Username"
              type="text"
              name="username"
              id="uname"
              onChange={onUserNameChange}
              borderColor={color}
              text={userName}
              error={error}
              ref={usernameRef}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              id="password"
            />
            <Button text="Log in" type="submit" handleSubmit={handleSubmit} />
            {/* <Count color="blue" /> */}
          </form>
        </div>
      </main>
    </Fragment>
  );
};

export default Login;
