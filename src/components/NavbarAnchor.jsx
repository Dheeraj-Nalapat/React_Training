import { Link } from "react-router-dom";

const NavbarAnchor = (props) => {
  const logout = () => {
    console.log("here");
    if (props.label == "Logout") {
      console.log("here");
      localStorage.removeItem("token");
    }
  };
  return (
    <div className="anchor">
      <Link to={props.link} onClick={() => logout()}>
        <span>
          <img src={props.icon} alt={props.label} />
        </span>
        <span> {props.label} </span>
      </Link>
    </div>
  );
};

export default NavbarAnchor;
