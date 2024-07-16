import Logo from "../assets/kv logo.png";
import Icon from "../assets/icon.svg";
import NavbarAnchor from "./NavbarAnchor";

const Navbar = () => {
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
        return (
          <NavbarAnchor
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
