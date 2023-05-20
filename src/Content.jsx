import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ProjectsIndex } from "./ProjectsIndex";
import { Signup } from "./Signup";

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
      <Signup />
      <LogoutLink />
      <ProjectsIndex projects={projects} />
    </div>
  );
}
