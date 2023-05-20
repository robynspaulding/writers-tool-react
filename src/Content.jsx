import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ProjectsIndex } from "./ProjectsIndex";

export function Content() {
  const [projects, setProjects] = useState([]);

  const handleIndexProjects = () => {
    axios.get("http://localhost:3000/projects.json").then((response) => {
      console.log(response.data);
      setProjects(response.data);
    });
  };

  useEffect(handleIndexProjects, []);
  return (
    <div>
      <h1>Welcome to the Writers Tool!</h1>
      <ProjectsIndex projects={projects} />
    </div>
  );
}
