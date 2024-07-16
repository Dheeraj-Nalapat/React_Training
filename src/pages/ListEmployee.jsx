import { Link, useOutletContext } from "react-router-dom";
import "./ListEmployee.style.css";
import { MdOutlineDelete, MdModeEditOutline } from "react-icons/md";
import DeletePopUp from "../components/DeletePopUp";
import { useState } from "react";
import { actionTypes } from "../store/useReduser";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, deleteEmployee } from "../store/employeeReducer";

const ListEmployee = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const handleDelete = (employee) => {
    setSelectedEmployee(employee);
    setOpenModal(true);
  };

  const employees = useSelector((state) => state.employee.employees);
  const filterBy = useSelector((state) => state.employee.filterBy);

  const dispatch = useDispatch();
  const onChangeFilter = (value) => {
    console.log(value);
    dispatch(changeFilter(value));
  };

  return (
    <main className="home-layout">
      <section>
        <br />
        <br />
      </section>
      <section>
        <div className="list-employee-title">
          <div className="list-employee-text">Employee List</div>
          <div className="list-employee-operations">
            <div className="list-employee-filter">
              <p>Filter By</p>
              <select
                className="status-filter"
                onChange={(e) => onChangeFilter(e.target.value)}
              >
                <option hidden value="status">
                  Status
                </option>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="probation">Probation</option>
              </select>
            </div>
            <div className="list-employee-create">
              <Link to="/employee/create" className="add-button-link">
                <div className="add-button">+</div>
                <p>Create employee</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="employee-details-entries">
        <table>
          <thead>
            <tr className="head-tr">
              <th>Employee</th>
              <th>Employee ID</th>
              <th>Joining Date</th>
              <th>Role</th>
              <th>Status</th>
              <th>Experience</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {employees
              .filter((employee) => {
                return (
                  filterBy === "all" ||
                  employee.status.toLowerCase() === filterBy
                );
              })
              .map(({ name, id, joinDate, role, status, experience }) => (
                <Link to={`/employee/details/${id}`} className="table-row-link">
                  <tr key={id} className="table-row">
                    <td>{name}</td>
                    <td>{id}</td>
                    <td>{joinDate}</td>
                    <td>{role}</td>
                    <td>
                      <div className={`${status.toLowerCase()} status-pill`}>
                        <p>{status}</p>
                      </div>
                    </td>
                    <td>{experience}</td>
                    <td>
                      <MdOutlineDelete
                        size="25px"
                        color="#e76a6ad9"
                        className="delete-icon"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete({ name, id });
                        }}
                      />
                      <Link to={`/employee/edit/${id}`}>
                        <MdModeEditOutline
                          size="25px"
                          color="#6ab7e7d9"
                          style={{ cursor: "pointer" }}
                          onClick={() => console.log(`Edit ${id}`)}
                        />
                      </Link>
                    </td>
                  </tr>
                </Link>
              ))}
          </tbody>
          {openModal && (
            <DeletePopUp
              open={openModal}
              onCancel={() => setOpenModal(false)}
              onConfirm={() => {
                dispatch(deleteEmployee(selectedEmployee.id));
                setSelectedEmployee(null);
                return setOpenModal(false);
              }}
            />
          )}
        </table>
      </div>
    </main>
  );
};
export default ListEmployee;
