import { Link, useParams } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import "./DetailsEmployee.css";
import { userData } from "../../data/dummydata";
import { labelMap } from "../../data/labelmap";
import { useGetEmployeeDetailsQuery } from "./employeesApi";
import { useEffect, useState } from "react";
import {
  createdDateToJoinDate,
  experienceToYears,
  mapRoleBackendToFrontend,
  mapStatusBackendToFrontend,
} from "../../utils/textFormating";

const DetailsEmployee = () => {
  let { id } = useParams();
  console.log(id);
  const { data = {}, isSuccess } = useGetEmployeeDetailsQuery(id);
  const [employeeDetails, setEmployeeDetails] = useState({});
  useEffect(() => {
    if (isSuccess) {
      setEmployeeDetails({
        ...data,
        role: mapRoleBackendToFrontend(data?.role),
        joinDate: createdDateToJoinDate(data),
        department: data?.department?.name,
        address: data?.address?.line1,
        pincode: data?.address?.pincode,
        status: mapStatusBackendToFrontend(data?.status),
        experience: experienceToYears(data?.experience),
      });
    }
  }, [isSuccess, data]);

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
          {Object.keys(labelMap).map((key, index) => {
            const value =
              key === "status"
                ? `${employeeDetails[key]?.toLowerCase()} status-pill`
                : "data-value";
            const lastindex = Object.keys(labelMap).length;
            let dataPairClass =
              index > lastindex - 3
                ? "label-data-pair"
                : "label-data-pair-border";
            return (
              <div className={dataPairClass}>
                <label className="data-title">{labelMap[key]}</label>
                <br />
                <label className={value}>{employeeDetails[key]}</label>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default DetailsEmployee;
