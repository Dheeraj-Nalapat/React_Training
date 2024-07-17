import { useNavigate, useParams } from "react-router-dom";
import FormElement from "../../components/FormElement";
import { useUpdateEmployeeMutation } from "./employeesApi";
import {
  mapRoleFrontendToBackend,
  mapStatusFrontendToBackend,
} from "../../utils/textFormating";
import { useEffect } from "react";

const UpdateEmployee = ({ type }) => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [editEmployee, { isSuccess, isError }] = useUpdateEmployeeMutation();
  const onEditEmployee = (employee) => {
    editEmployee({
      ...employee,
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
  });
  return (
    <main className="home-layout">
      <section>
        <br />
        <br />
      </section>
      <section>
        <div className="title">
          <h2>Edit Employee</h2>
        </div>
      </section>
      <section>
        <FormElement
          operation={type}
          employee_Id={id}
          mutationTrigger={onEditEmployee}
        />
      </section>
    </main>
  );
};

export default UpdateEmployee;
