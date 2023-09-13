import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter, Navigate, RouterProvider, } from "react-router-dom";
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
        element: _jsx(Navigate, { to: "/signin", replace: true }),
    },
    {
        path: "/notfound",
        element: _jsx(NotFound, {}),
    },
    {
        path: "/signin",
        element: _jsx(Signin, {}),
    },
    {
        element: (_jsx(ProtectedRoute, { children: _jsx(Layout, {}) })),
        children: [
            {
                path: "tasks",
                element: _jsx(TaskListPage, {}),
            },
            {
                path: "home",
                element: _jsx(HomePage, {}),
            },
            {
                path: "tasks/:id",
                element: _jsx(TaskDetailsPage, {}),
            },
            {
                path: "*",
                element: _jsx(Navigate, { to: "/notfound", replace: true }),
            },
        ],
    },
]);
const App = () => {
    return _jsx(RouterProvider, { router: router });
};
export default App;
