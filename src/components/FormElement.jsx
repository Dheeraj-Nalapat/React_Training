import Button from "./Button";
import InputPair from "./InputPair";
import SelectPair from "./SelectPair";
import { useState, useOutletContext } from "react";

const FormElement = (props) => {
  const [employeeObject, setEmployeeObject] = useState({
    employee_name: "",
    department: "",
    joining_date: "",
    role: "",
    status: "",
    experience: "",
    address: "",
    employee_Id: props.employee_Id,
  });
  console.log(employeeObject);
  const onChangeEmployee = (fieldName, fieldValue) => {
    setEmployeeObject((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));

    console.log(employeeObject);
  };
  const fields = [
    {
      key: 1,
      label: "Employee Name",
      type: "text",
      id: "employee_name",
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
      id: "joining_date",
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
      id: "role",
      option: ["active", "inactive"],
    },
    {
      key: 6,
      label: "Experiance",
      type: "text",
      id: "experiance",
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
      id: "employee_Id",
    },
  ];
  return (
    <form className="create-employee-form">
      <div className="create-employee-input">
        {fields.map((field) => {
          if (field.id == "employee_Id" && props.operation == "create") {
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
        <Button type="submit" id="create" text="Save" />
        <Button type="reset" id="cancel" text="Cancel" />
      </div>
    </form>
  );
};

export default FormElement;
