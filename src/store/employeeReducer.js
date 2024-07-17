import { createAction, createReducer } from "@reduxjs/toolkit";

const changeFilter = createAction("CHANGE_FILTER");
const setRole = createAction("SET_ROLE");

const employeeReducer = createReducer(
  { role: "", filterBy: "all" },
  (builder) => {
    builder
      .addCase(changeFilter, (state, action) => {
        state.filterBy = action.payload;
      })
      .addCase(setRole, (state, action) => {
        state.role = action.payload;
      });
  }
);

export { employeeReducer as default, changeFilter, setRole };
