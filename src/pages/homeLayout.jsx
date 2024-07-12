import { Link, Outlet, useNavigate } from "react-router-dom";
import "./CreateEmployee.style.css";
import Icon from "../assets/icon.svg";
import Logo from "../assets/kv logo.png";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const HomeLayout = () => {
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
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
