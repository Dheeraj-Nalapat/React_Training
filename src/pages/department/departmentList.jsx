import { useEffect, useState } from "react";
import "./departmentList.style.css";
import { useGetDepartmentListQuery } from "./departmentApi";
import { Link } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

const DepartmentList = () => {
  const [departmentList, setDeparmentList] = useState([]);
  const { data = [], isSuccess } = useGetDepartmentListQuery();
  useEffect(() => {
    if (isSuccess) {
      const departmentData = data.map((department) => ({
        id: department.id,
        name: department.name,
      }));
      setDeparmentList(departmentData);
    }
  }, [isSuccess, data]);
  return (
    <main className="home-layout">
      <section>
        <br />
        <br />
      </section>
      <section>
        <div className="list-department-title">
          <div className="list-department-text">Departments List</div>
          <div className="list-department-operations">
            <div className="list-department-create">
              <div className="add-button-link">
                <div className="add-button">+</div>
                <p>Create Department</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="department-details-entries">
        <table>
          <thead>
            <tr className="head-tr">
              <th>Department ID</th>
              <th>Department Name</th>
              <th></th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {departmentList.map(({ id, name }) => (
              <Link className="table-row">
                <tr className="table-row">
                  <td>{id}</td>
                  <td>{name}</td>
                  <td></td>
                  <td>
                    <MdOutlineDelete
                      size="25px"
                      color="#e76a6ad9"
                      className="delete-icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => {}}
                    />
                    <MdModeEditOutline
                      size="25px"
                      color="#6ab7e7d9"
                      style={{ cursor: "pointer" }}
                      onClick={() => console.log(`Edit ${id}`)}
                    />
                  </td>
                </tr>
              </Link>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default DepartmentList;
