import { Link, Outlet, useNavigate } from "react-router-dom";
import "./CreateEmployee.style.css";
import Icon from "../assets/icon.svg";
import Logo from "../assets/kv logo.png";
import Navbar from "../components/Navbar";
import { useEffect, useReducer } from "react";
import reducer from "../store/useReduser";
import { userData } from "../dummydata";

const HomeLayout = () => {
  const [state, dispatch] = useReducer(reducer, {
    employees: userData,
    filterBy: "all",
  });
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || token != "true") {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet context={{ state, dispatch }} />
      </div>
    </>
  );
};

export default HomeLayout;
