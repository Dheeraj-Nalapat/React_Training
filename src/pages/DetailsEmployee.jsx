import { Link, useParams } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import "./DetailsEmployee.css";
import { userData } from "../dummydata";
import { labelMap } from "./labelmap";

const DetailsEmployee = () => {
  let { id } = useParams();
  let employeeDetails = userData.find((employee) => employee.id == id);
  console.log(employeeDetails);
  return (
    <main className="home-layout">
      <section>
        <br />
        <br />
      </section>
      <section>
        <div className="list-employee-title">
          <div className="list-employee-text">Employee Details</div>
          <div className="detail-employee-edit">
            <Link to={`/employee/edit/${id}`} className="edit-button-link">
              <div className="edit-button">
                <MdOutlineEdit
                  size="25px"
                  color="#ffffff"
                  style={{ cursor: "pointer" }}
                  onClick={() => console.log(`Edit ${id}`)}
                />
              </div>
              <p>Edit</p>
            </Link>
          </div>
        </div>
      </section>
      <div className="employee-details-wrapper">
        <div className="employee-details-tab">
          {Object.keys(employeeDetails).map((element, index) => {
            const value =
              element === "status"
                ? `${employeeDetails[element].toLowerCase()} status-pill`
                : "data-value";
            const lastindex = Object.keys(employeeDetails).length;
            let dataPairClass =
              index > lastindex - 3
                ? "label-data-pair"
                : "label-data-pair-border";
            return (
              <div className={dataPairClass}>
                <label className="data-title">{labelMap[element]}</label>
                <br />
                <label className={value}>{employeeDetails[element]}</label>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default DetailsEmployee;
