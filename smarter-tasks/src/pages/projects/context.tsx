export default function context(){
    return (
      <div
        className={`h-screen w-full mx-auto py-2 ${
          theme === "dark" ? "dark" : ""
        }`}
      >
        <ProjectsProvider>
          <RouterProvider router={router} />
        </ProjectsProvider>
      </div>
    );
}