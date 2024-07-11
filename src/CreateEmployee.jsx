import "./styleCreateEmployee.css";
import InputPair from "./components/InputPair";
import SelectPair from "./components/SelectPair";
import Button from "./components/Button";
import { useState } from "react";

const CreateEmployee = () => {
  const [employeeObject, setEmployeeObject] = useState({});
  const onChangeEmployee = (fieldName, fieldValue) => {
    // setEmployeeObject((prev) => {
    //   prev[fieldName] = fieldValue;
    //   return prev;
    // });
    setEmployeeObject({
      ...employeeObject,
      [fieldName]: fieldValue,
    });

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
      label: "Employee ID",
      type: "text",
      id: "employee_ID",
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
      text: "text",
      id: "express",
    },
    {
      key: 7,
      label: "Address",
      text: "text",
      id: "address",
    },
  ];
  return (
    <main className="home-layout">
      <section>
        <div className="title">
          <h2>Create Employee</h2>
        </div>
      </section>
      <section>
        <form className="create-employee-form">
          <div className="create-employee-input">
            {fields.map((field) => {
              return field.component ? (
                <SelectPair
                  key={field.key}
                  label={field.label}
                  id={field.id}
                  option={field.option}
                  onChange={onChangeEmployee}
                  value={employeeObject[field.label]}
                />
              ) : (
                <InputPair
                  key={field.key}
                  label={field.label}
                  type={field.type}
                  id={field.id}
                  onChange={onChangeEmployee}
                  value={employeeObject[field.label]}
                />
              );
            })}
          </div>
          <div className="create-employee-button">
            <Button type="submit" id="create" text="Create" />
            <Button type="reset" id="cancel" text="Cancel" />
          </div>
        </form>
      </section>
    </main>
  );
};

export default CreateEmployee;
