import Logo from "../assets/kv logo.png";
import Icon from "../assets/icon.svg";
import NavbarAnchor from "./NavbarAnchor";
import { useSelector } from "react-redux";

const Navbar = () => {
  const role = useSelector((state) => state.employee.role);
  console.log(role);
  let anchors = [
    {
      label: "Employee List",
      link: "/employee",
      icon: Icon,
    },
    {
      label: "Create Employee",
      link: "/employee/create",
      icon: Icon,
    },
    {
      label: "Department",
      link: "/employee/department",
      icon: Icon,
    },
    {
      label: "Logout",
      link: "/",
      icon: Icon,
    },
  ];
  return (
    <aside>
      <div className="keyValue-logo">
        <img src={Logo} alt="KeyValue Logo" />
      </div>
      {anchors.map((anchor) => {
        if (anchor.label === "Department" && role != "CEO") {
          return;
        }
        return (
          <NavbarAnchor
            key={anchor.label}
            label={anchor.label}
            icon={anchor.icon}
            link={anchor.link}
          />
        );
      })}
    </aside>
  );
};

export default Navbar;
