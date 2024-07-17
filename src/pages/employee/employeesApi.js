import apiWithTag from "../../api/projectBase";

export const employeeApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => "/employee",
      providesTags: ["EMPLOYEE_LIST"],
    }),
    getEmployeeDetails: builder.query({
      query: (id) => `/employee/${id}`,
    }),
    addEmployee: builder.mutation({
      query: (body) => ({
        url: `/employee`,
        method: "POST",
        body,
      }),
    }),
    updateEmployee: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/employee/${id}`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
    deleteEmployee: builder.mutation({
      query: ({ id }) => ({
        url: `/employee/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
  }),
});

export const {
  useGetEmployeeListQuery,
  useGetEmployeeDetailsQuery,
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeApi;
