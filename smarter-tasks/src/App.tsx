import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signin from "./pages/signin";
import ProtectedRoute from "./ProtectedRoute";

import Notfound from "./pages/Notfound";

import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
