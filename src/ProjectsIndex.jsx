export function ProjectsIndex(props) {
  return (
    <div id="projects-index">
      <h1> All Projects!! </h1>
      {props.projects.map((project) => (
        <div key={project.id}>
          <h2>Title: {project.working_title}</h2>
          <p>Status: {project.status}</p>
        </div>
      ))}
    </div>
  );
}
