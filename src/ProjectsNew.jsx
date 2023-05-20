export function ProjectsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProject(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Project</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Working Title: <input name="working_title" type="text" />
        </div>
        <div>
          Status: <input name="status" type="text" />
        </div>
        <button type="submit">Create project</button>
      </form>
    </div>
  );
}
