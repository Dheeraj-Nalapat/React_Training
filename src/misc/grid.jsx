import InputPair from "../components/InputPair";
import SelectPair from "../components/SelectPair";
import "./grid.css";

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

const CreateEmployee = () => {
  return (
    <main>
      <h1>Create Employee</h1>
      <form>
        {fields.map((field) => {
          return field.component ? (
            <SelectPair
              key={field.key}
              label={field.label}
              id={field.id}
              option={field.option}
            />
          ) : (
            <InputPair label={field.label} type={field.type} id={field.id} />
          );
        })}
      </form>
    </main>
  );
};

export default CreateEmployee;
