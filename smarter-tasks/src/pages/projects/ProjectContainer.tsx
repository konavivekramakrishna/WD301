import { useEffect } from "react";
import { useProjectsDispatch } from "../../context/projects/context";
import { fetchProjects } from "../../context/projects/actions";
import { Outlet } from "react-router-dom";
import { useMemberDispatch } from "../../context/members/context";
import { fetchAllMembers } from "../../context/members/actions";
const ProjectContainer = () => {
  const projectDispatch = useProjectsDispatch();
  const memberDispatch = useMemberDispatch();
  useEffect(() => {
    fetchProjects(projectDispatch);
    fetchAllMembers(memberDispatch);
  }, [projectDispatch, memberDispatch]);
  return <Outlet />;
};

export default ProjectContainer;
