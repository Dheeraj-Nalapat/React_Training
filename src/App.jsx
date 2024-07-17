import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./pages/login/Login";
import NotFound from "./pages/NotFound";
import HomeLayout from "./layout/homeLayout";
import CreateEmployee from "./pages/employee/CreateEmployee";
import ListEmployee from "./pages/employee/ListEmployee";
import UpdateEmployee from "./pages/employee/UpdateEmployee";
import DetailsEmployee from "./pages/employee/DetailsEmployee";
import store from "./store/store";
import DepartmentList from "./pages/department/departmentList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/employee",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <ListEmployee />,
      },
      {
        path: "create",
        element: <CreateEmployee type="create" />,
      },
      {
        path: "edit/:id",
        element: <UpdateEmployee type="edit" />,
      },
      { path: "details/:id", element: <DetailsEmployee /> },
      {
        path: "department",
        element: <DepartmentList />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
};

export default App;
