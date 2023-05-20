import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ProjectsIndex } from "./ProjectsIndex";
import { ProjectsNew } from "./ProjectsNew";
import { Modal } from "./Modal";
import { ProjectsShow } from "./ProjectsShow";

export function Content() {
  const [projects, setProjects] = useState([]);
  const [isProjectShowVisible, setIsProjectShowVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const handleIndexProjects = () => {
    axios.get("http://localhost:3000/projects.json").then((response) => {
      console.log(response.data);
      setProjects(response.data);
    });
  };

  const handleCreateProject = (params) => {
    console.log("Handle create project", params);
    axios.post("http://localhost:3000/projects.json", params).then((response) => {
      setProjects([...projects, response.data]);
    });
  };

  const handleShowProject = (project) => {
    console.log("handleShowProject", project);
    setIsProjectShowVisible(true);
    setCurrentProject(project);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProjectShowVisible(false);
  };

  const handleUpdateProject = (id, params) => {
    console.log("handleUpdateProject", params);
    axios.patch(`http://localhost:3000/projects/${id}.json`, params).then((response) => {
      setProjects(
        projects.map((project) => {
          if (project.id === response.data.id) {
            return response.data;
          } else {
            return project;
          }
        })
      );
      handleClose();
    });
  };

  const handleDestroyProject = (project) => {
    console.log("handleDestroyProject", project);
    axios.delete(`http://localhost:3000/projects/${project.id}.json`).then((response) => {
      setProjects(projects.filter((p) => p.id !== project.id));
      handleClose();
    });
  };

  useEffect(handleIndexProjects, []);
  return (
    <div>
      <h1>Welcome to the Writers Tool!</h1>
      <ProjectsIndex projects={projects} onShowProject={handleShowProject} />
      <ProjectsNew onCreateProject={handleCreateProject} />
      <Modal show={isProjectShowVisible} onClose={handleClose}>
        <ProjectsShow
          project={currentProject}
          onUpdateProject={handleUpdateProject}
          onDestroyProject={handleDestroyProject}
        />
      </Modal>
    </div>
  );
}
