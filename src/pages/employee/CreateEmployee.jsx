import "./CreateEmployee.style.css";
import FormElement from "../../components/FormElement";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useAddEmployeeMutation } from "./employeesApi";
import { useEffect } from "react";
import {
  mapRoleFrontendToBackend,
  mapStatusFrontendToBackend,
} from "../../utils/textFormating";

const CreateEmployee = ({ type }) => {
  const navigate = useNavigate();
  const [addEmployee, { isSuccess, isError }] = useAddEmployeeMutation();
  const onCreateEmployee = (employee) => {
    addEmployee({
      name: employee.name,
      email: employee.email,
      password: employee.password,
      role: mapRoleFrontendToBackend(employee.role),
      status: mapStatusFrontendToBackend(employee.status),
      experience: Number(employee.experience),
      address: { line1: employee.line1, pincode: employee.pincode },
      department: employee.department,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/employee/");
    } else if (isError) {
      console.log(isError);
    }
  }, [isSuccess, addEmployee, isError]);
  return (
    <main className="home-layout">
      <section>
        <div className="title">
          <br />
          <br />
        </div>
      </section>
      <section>
        <div className="title">
          <h2>Create Employee</h2>
        </div>
      </section>
      <section>
        <FormElement operation={type} mutationTrigger={onCreateEmployee} />
      </section>
    </main>
  );
};

export default CreateEmployee;
