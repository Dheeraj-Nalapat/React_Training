import { Outlet, useNavigate } from "react-router-dom";
import "../pages/employee/CreateEmployee.style.css";
import Navbar from "../components/Navbar";
import { useEffect, useReducer } from "react";
import reducer from "../store/useReduser";
import { userData } from "../data/dummydata";

const HomeLayout = () => {
  const [state, dispatch] = useReducer(reducer, {
    employees: userData,
    filterBy: "all",
  });
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
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
