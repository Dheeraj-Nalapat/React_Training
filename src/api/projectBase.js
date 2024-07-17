import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectBaseApi = createApi({
  reducerPath: "BaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: () => ({}),
});

const apiWithTag = projectBaseApi.enhanceEndpoints({
  addTagTypes: ["EMPLOYEE_LIST", "DEPARTMENT_LIST"],
});

export default apiWithTag;
