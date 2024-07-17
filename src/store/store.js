import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import employeeReducer from "./employeeReducer";
import apiWithTag from "../api/projectBase";

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    [apiWithTag.reducerPath]: apiWithTag.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiWithTag.middleware),
});

setupListeners(store.dispatch);

export default store;
