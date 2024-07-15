const actionTypes = {
  ADD_EMPLOYEE: "ADD_EMPLOYEE",
  DELETE_EMPLOYEE: "DELETE_EMPLOYEE",
  UPDATE_EMPLOYEE: "UPDATE_EMPLOYEE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_EMPLOYEE:
      console.log(action);
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case actionTypes.DELETE_EMPLOYEE:
      employees = [...state.employees];
      console.log(employees);

      return {
        ...state,
        employees: employees.filter(
          (employee) => employee.id != action.payload
        ),
      };
    case actionTypes.UPDATE_EMPLOYEE:
      let employees = [...state.employees];
    default:
      return state;
  }
};

export { reducer as default, actionTypes };
