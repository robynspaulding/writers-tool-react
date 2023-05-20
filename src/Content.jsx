import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ProjectsIndex } from "./ProjectsIndex";
import { ProjectsNew } from "./ProjectsNew";

export function Content() {
  const [projects, setProjects] = useState([]);

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
  useEffect(handleIndexProjects, []);
  return (
    <div>
      <h1>Welcome to the Writers Tool!</h1>
      <ProjectsIndex projects={projects} />
      <ProjectsNew onCreateProject={handleCreateProject} />
    </div>
  );
}
