export function ProjectsUpdate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProject(props.project.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyProject(props.project);
  };

  return (
    <div>
      <h1>Edit Project Info</h1>

      <form onSubmit={handleSubmit}>
        <div>
          Working Title: <input defaultValue={props.project.working_title} name="working_title" type="text" />
        </div>

        <div>
          Status: <input defaultValue={props.project.status} name="status" type="text" />
        </div>
        <br />
        <button type="submit"> Update Project </button>
        <br />
        <br />
        <button onClick={handleClick}>Delete Project</button>
      </form>
    </div>
  );
}
