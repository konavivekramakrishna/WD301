import NewProject from "./NewProject";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <NewProject />
      <ProjectList />
    </div>
  );
};

export default Projects;
