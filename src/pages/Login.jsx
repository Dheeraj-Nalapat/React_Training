import { Fragment, useEffect, useRef, useState } from "react";
import TextField from "../components/TextField";
import "./Login.style.css";
import KvLogo from "../assets/kv logo.png";
import Logo from "../assets/kv-login.jpeg";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (loginCredential.username && loginCredential.password) {
      localStorage.setItem("token", "true");
    } else {
      localStorage.setItem("token", "false");
    }
    console.log(e);
    navigate("/employee");
  };

  const [loginCredential, setLoginCredential] = useState({
    username: "",
    password: "",
  });

  const usernameRef = useRef();
  const [error, setError] = useState("");
  const [color, setColor] = useState("");

  const onUserNameChange = (text) => {
    if (text.length > 10) {
      setColor("red");
      setError("value has more than 10 charachters");
    } else {
      setLoginCredential((prev) => ({
        ...prev,
        username: text,
      }));
      setColor("");
      setError("");
    }
  };

  const onPasswordChange = (text) => {
    setLoginCredential((prev) => ({
      ...prev,
      password: text,
    }));
  };

  useEffect(() => {
    setTimeout(() => {
      usernameRef.current.focus();
    }, 1500);
  }, []);

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
              value={loginCredential.username}
              error={error}
              ref={usernameRef}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              id="password"
              onChange={onPasswordChange}
              value={loginCredential.password}
            />
            <Button
              className="login-layout-button"
              text="Log in"
              type="submit"
              handleSubmit={handleSubmit}
            />
          </form>
        </div>
      </main>
    </Fragment>
  );
};

export default Login;
