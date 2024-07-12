import { Link, useParams } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
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
                <MdModeEditOutline
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
      <div className="employee-details-tab">
        {Object.keys(employeeDetails).map((element) => {
          const value =
            element === "status"
              ? `${employeeDetails[element].toLowerCase()} status-pill`
              : "data-value";
          return (
            <div className="label-data-pair">
              <label className="data-title">{labelMap[element]}</label>
              <br />
              <label className={value}>{employeeDetails[element]}</label>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default DetailsEmployee;
