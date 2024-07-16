import { createAction, createReducer } from "@reduxjs/toolkit";
import { userData } from "../data/dummydata";

const addEmployee = createAction("ADD_EMPLOYEE");
const changeFilter = createAction("CHANGE_FILTER");
const editEmployee = createAction("EDIT_EMPLOYEE");
const deleteEmployee = createAction("DELETE_EMPLOYEE");

const employeeReducer = createReducer(
  { employees: userData, filterBy: "all" },
  (builder) => {
    builder
      .addCase(addEmployee, (state, action) => {
        state.employees.push(action.payload);
      })
      .addCase(changeFilter, (state, action) => {
        state.filterBy = action.payload;
      })
      .addCase(editEmployee, (state, action) => {
        state.employees = state.employees.map((employee) => {
          if (employee.id != action.payload.id) {
            return employee;
          } else {
            return action.payload;
          }
        });
      })
      .addCase(deleteEmployee, (state, action) => {
        state.employees = state.employees.filter(
          (employee) => employee.id != action.payload
        );
      });
  }
);

export {
  employeeReducer as default,
  addEmployee,
  changeFilter,
  editEmployee,
  deleteEmployee,
};
