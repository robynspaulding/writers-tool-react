export function ProjectsIndex(props) {
  return (
    <div id="projects-index">
      <h1> All Projects!! </h1>
      {props.projects.map((project) => (
        <div key={project.id}>
          <h2>Title: {project.working_title}</h2>
          <p>Status: {project.status}</p>
          <button onClick={() => props.onShowUpdateProject(project)}>Edit Project Info</button>
        </div>
      ))}
    </div>
  );
}
