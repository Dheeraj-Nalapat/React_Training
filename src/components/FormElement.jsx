import Button from "./Button";
import InputPair from "./InputPair";
import SelectPair from "./SelectPair";
import { useState, useOutletContext } from "react";
import { actionTypes } from "../store/useReduser";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const onChangeEmployee = (fieldName, fieldValue) => {
    setEmployeeObject((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const fields = [
    {
      key: 1,
      label: "Employee Name",
      type: "text",
      id: "name",
    },
    {
      key: 2,
      label: "Department",
      type: "text",
      id: "department",
    },
    {
      key: 3,
      label: "Joining Date",
      type: "date",
      id: "joinDate",
    },
    {
      key: 4,
      label: "Role",
      component: "select",
      id: "role",
      option: ["Developer", "Devops", "Tester"],
    },
    {
      key: 5,
      label: "Status",
      component: "select",
      id: "status",
      option: ["active", "inactive"],
    },
    {
      key: 6,
      label: "Experiance",
      type: "text",
      id: "experience",
    },
    {
      key: 7,
      label: "Address",
      type: "text",
      id: "address",
    },

    {
      key: 8,
      label: "Employee ID",
      type: "text",
      id: "id",
    },
  ];
  return (
    <form className="create-employee-form">
      <div className="create-employee-input">
        {fields.map((field) => {
          if (field.id == "id" && props.operation == "create") {
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
            props.dispatch({
              type: actionTypes.ADD_EMPLOYEE,
              payload: {
                ...employeeObject,
                id: String(props.state.employees.length + 1),
              },
            });
            navigate("/employee");
          }}
        />
        <Button type="reset" id="cancel" text="Cancel" />
      </div>
    </form>
  );
};

export default FormElement;
