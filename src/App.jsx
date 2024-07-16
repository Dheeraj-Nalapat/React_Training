import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import HomeLayout from "./layout/homeLayout";
import CreateEmployee from "./pages/CreateEmployee";
import ListEmployee from "./pages/ListEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";
import DetailsEmployee from "./pages/DetailsEmployee";

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
    ],
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
