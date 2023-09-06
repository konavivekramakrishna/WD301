import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "./App.css";
import React from "react";
import TaskApp from "./TaskApp";

import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tasks",
    element: <TaskListPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
