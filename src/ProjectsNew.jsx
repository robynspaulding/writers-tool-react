export function ProjectsNew() {
  return (
    <div>
      <h1>New Project</h1>
      <form>
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
