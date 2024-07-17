import Button from "./Button";
import InputPair from "./InputPair";
import SelectPair from "./SelectPair";
import { useState, useEffect } from "react";
import { actionTypes } from "../store/useReduser";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, editEmployee } from "../store/employeeReducer";
import {
  useAddEmployeeMutation,
  useGetEmployeeDetailsQuery,
  useUpdateEmployeeMutation,
} from "../pages/employee/employeesApi";
import {
  mapRoleBackendToFrontend,
  mapRoleFrontendToBackend,
  mapStatusBackendToFrontend,
  mapStatusFrontendToBackend,
} from "../utils/textFormating";

const FormElement = (props) => {
  const [employeeObject, setEmployeeObject] = useState({
    name: "",
    department: "",
    joinDate: "",
    role: "",
    status: "",
    experience: "",
    address: "",
    id: props.employee_Id,
  });

  const {
    data = {},
    isSuccess,
    isError,
  } = useGetEmployeeDetailsQuery(props.employee_Id);
  useEffect(() => {
    console.log(data);
    if (isSuccess) {
      setEmployeeObject({
        ...data,
        name: data.name,
        email: data.email,
        role: mapRoleBackendToFrontend(data.role),
        status: mapStatusBackendToFrontend(data.status),
        experience: Number(data.experience),
        line1: data?.address?.line1,
        pincode: data?.address?.pincode,
        department: data?.department?.name,
      });
    }
    console.log(employeeObject);
  }, [props.employee_Id, data, isSuccess]);
  const onChangeEmployee = (fieldName, fieldValue) => {
    setEmployeeObject((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const fields = [
    {
      key: 1,
      label: "Employee ID",
      type: "text",
      id: "id",
    },
    {
      key: 2,
      label: "Employee Name",
      type: "text",
      id: "name",
    },
    {
      key: 3,
      label: "Email",
      type: "text",
      id: "email",
    },
    {
      key: 4,
      label: "Password",
      type: "text",
      id: "password",
    },
    {
      key: 5,
      label: "Department",
      type: "text",
      id: "department",
    },
    {
      key: 6,
      label: "Role",
      component: "select",
      id: "role",
      option: [
        "Developer",
        "Tester",
        "Ui",
        "Ux",
        "HR",
        "CEO",
        "Sales Manager",
        "Accountant",
        "Customer Support",
        "IT Manager",
        "Researcher",
        "Legal Advisor",
        "Project Manager",
      ],
    },
    {
      key: 7,
      label: "Status",
      component: "select",
      id: "status",
      option: ["active", "inactive", "probation"],
    },
    {
      key: 8,
      label: "Experiance",
      type: "number",
      id: "experience",
    },
    {
      key: 9,
      label: "Address",
      type: "text",
      id: "line1",
    },
    {
      key: 10,
      label: "Pincode",
      type: "text",
      id: "pincode",
    },
  ];
  return (
    <form className="create-employee-form">
      <div className="create-employee-input">
        {fields.map((field) => {
          if (
            (field.id == "id" && props.operation == "create") ||
            (field.id == "password" && props.operation != "create")
          ) {
            return;
          }
          return field.component ? (
            <SelectPair
              disable={field.disable}
              key={field.key}
              label={field.label}
              id={field.id}
              option={field.option}
              onChange={onChangeEmployee}
              value={employeeObject[field.id]}
            />
          ) : (
            <InputPair
              key={field.key}
              label={field.label}
              type={field.type}
              id={field.id}
              onChange={onChangeEmployee}
              value={employeeObject[field.id]}
            />
          );
        })}
      </div>
      <div className="create-employee-button">
        <Button
          type="button"
          id="create"
          text="Save"
          handleSubmit={() => {
            props.mutationTrigger({
              ...employeeObject,
            });
          }}
        />
        <Button type="reset" id="cancel" text="Cancel" />
      </div>
    </form>
  );
};

export default FormElement;
