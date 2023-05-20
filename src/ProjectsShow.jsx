export function ProjectsShow(props) {
  return (
    <div>
      <h1>Project Info</h1>
      <p>Working Title: {props.project.working_title}</p>
      <p>Status: {props.project.status}</p>
    </div>
  );
}
