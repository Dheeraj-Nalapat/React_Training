const actionTypes = {
  ADD_EMPLOYEE: "ADD_EMPLOYEE",
  DELETE_EMPLOYEE: "DELETE_EMPLOYEE",
  UPDATE_EMPLOYEE: "UPDATE_EMPLOYEE",
  SET_FILTER: "SET_FILTER",
};

const reducer = (state, action) => {
  let employees = [...state.employees];
  switch (action.type) {
    case actionTypes.SET_FILTER:
      return {
        ...state,
        filterBy: action.payload,
      };
    case actionTypes.ADD_EMPLOYEE:
      console.log(action);
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case actionTypes.DELETE_EMPLOYEE:
      console.log(employees);

      return {
        ...state,
        employees: employees.filter(
          (employee) => employee.id != action.payload
        ),
      };
    case actionTypes.UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: [
          ...employees.map((employee) => {
            if (employee.id != action.payload.id) {
              return employee;
            } else {
              return action.payload;
            }
          }),
        ],
      };
    default:
      return state;
  }
};

export { reducer as default, actionTypes };
