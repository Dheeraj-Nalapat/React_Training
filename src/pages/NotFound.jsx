import { Link } from "react-router-dom";
import notFoundImg from "../assets/404.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="NotFound">
      <img src={notFoundImg} alt="404 not found"></img>
      <Link to="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
