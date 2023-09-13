import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import TaskListPage from "./pages/TaskListPage";
import Signin from "./pages/Signin";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";
import TaskDetailsPage from "./pages/TaskDetailsPage";

import NotFound from "./pages/Notfound";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "tasks",
        element: <TaskListPage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "tasks/:id",
        element: <TaskDetailsPage />,
      },
      {
        path: "*",
        element: <Navigate to="/notfound" replace />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
