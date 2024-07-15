import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import HomeLayout from "./pages/homeLayout";
import CreateEmployee from "./pages/CreateEmployee";
import ListEmployee from "./pages/ListEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";
import DetailsEmployee from "./pages/DetailsEmployee";
import { useReducer } from "react";
import { userData } from "./dummydata";
import reducer from "./store/useReduser";

const App = () => {
  const [state, dispatch] = useReducer(reducer, { employees: userData });
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
          element: <ListEmployee state={state} dispatch={dispatch} />,
        },
        {
          path: "create",
          element: (
            <CreateEmployee type="create" state={state} dispatch={dispatch} />
          ),
        },
        { path: "edit/:id", element: <UpdateEmployee type="edit" /> },
        { path: "details/:id", element: <DetailsEmployee /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
