import Button from "./Button";
import { Link } from "react-router-dom";

const EmployeeListEntry = (props) => {
  return (
    <div className="employee-list-entry">
      {props.name}
      {props.id}
      {props.joiningdate}
      {props.role}
      {props.status}
      {props.experience}
      <Link to="/employee/update">update</Link>
      <p>delete</p>
    </div>
  );
};

export default EmployeeListEntry;
