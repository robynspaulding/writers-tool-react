import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ProjectsIndex } from "./ProjectsIndex";
import { ProjectsNew } from "./ProjectsNew";
import { Modal } from "./Modal";
import { ProjectsUpdate } from "./ProjectsUpdate";

export function Content() {
  const [projects, setProjects] = useState([]);
  const [isProjectShowUpdateVisible, setisProjectShowUpdateVisible] = useState(false);
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

  const handleShowUpdateProject = (project) => {
    console.log("handleShowUpdateProject", project);
    setisProjectShowUpdateVisible(true);
    setCurrentProject(project);
  };

  const handleClose = () => {
    console.log("handleClose");
    setisProjectShowUpdateVisible(false);
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
    axios.delete(`http://localhost:3000/projects/${project.id}.json`).then(() => {
      setProjects(projects.filter((p) => p.id !== project.id));
      handleClose();
    });
  };

  useEffect(handleIndexProjects, []);
  return (
    <div>
      <h1>Welcome to the Writers Tool!</h1>
      <ProjectsIndex projects={projects} onShowUpdateProject={handleShowUpdateProject} />
      <ProjectsNew onCreateProject={handleCreateProject} />
      <Modal show={isProjectShowUpdateVisible} onClose={handleClose}>
        <ProjectsUpdate
          project={currentProject}
          onUpdateProject={handleUpdateProject}
          onDestroyProject={handleDestroyProject}
        />
      </Modal>
    </div>
  );
}
