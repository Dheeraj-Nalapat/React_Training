import { Link } from "react-router-dom";

const NavbarAnchor = (props) => {
  return (
    <div className="anchor">
      <Link to={props.link}>
        <span>
          <img src={props.icon} alt={props.label} />
        </span>
        <span> {props.label} </span>
      </Link>
    </div>
  );
};

export default NavbarAnchor;
