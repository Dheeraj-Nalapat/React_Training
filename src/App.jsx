//import "./style.css";

import CreateEmployee from "./CreateEmployee";
import Login from "./Login";
import { useState } from "react";

const App = () => {
  const [stateValue, setState] = useState(false);

  const handleLogin = () => {
    setState(true);
  };

  return stateValue ? <CreateEmployee /> : <Login handleSubmit={handleLogin} />;
};

export default App;
