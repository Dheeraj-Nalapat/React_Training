import apiWithTag from "../../api/projectBase";

export const departmentApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getDepartmentList: builder.query({
      query: () => "/department",
      providesTags: ["DEPARTMENT_LIST"],
    }),
  }),
});

export const { useGetDepartmentListQuery } = departmentApi;
