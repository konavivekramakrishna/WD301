import { Navigate, createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";

const TaskDetailsContainer = React.lazy(
  () => import("../pages/tasks/TaskDetailsContainer")
);
const ProjectContainer = React.lazy(
  () => import("../pages/projects/ProjectContainer")
);
const NotFound = React.lazy(() => import("../pages/Notfound"));
const AccountLayout = React.lazy(() => import("../layouts/account"));
const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));
const Projects = React.lazy(() => import("../pages/projects"));
const Signin = React.lazy(() => import("../pages/signin"));
const Signup = React.lazy(() => import("../pages/signup"));
const ProjectDetails = React.lazy(() => import("../pages/project_details"));
const Members = React.lazy(() => import("../pages/members"));
const Logout = React.lazy(() => import("../pages/logout"));
const NewTask = React.lazy(() => import("../pages/tasks/NewTask"));

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/account/projects" replace /> },
  { path: "/", element: <Signin /> },
  { path: "/notfound", element: <NotFound /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/account",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <AccountLayout />
        </Suspense>
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: "projects",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectContainer />
          </Suspense>
        ),
        children: [
          { index: true, element: <Projects /> },
          {
            path: ":pid",
            element: <ProjectDetails />,
            children: [
              { index: true, element: <></> },
              {
                path: "tasks",
                children: [
                  { index: true, element: <Navigate to="../" replace /> },
                  { path: "new", element: <NewTask /> },
                  {
                    path: ":tid",
                    children: [
                      { index: true, element: <TaskDetailsContainer /> },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "members",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Members />
          </Suspense>
        ),
      },
    ],
  },
  { path: "/logout", element: <Logout /> },
]);

export default router;
  