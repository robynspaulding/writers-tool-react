export function ProjectsShow(props) {
  return (
    <div>
      <h1>Project Info</h1>
      <p>Working Title: {props.project.working_title}</p>
      <p>Status: {props.project.status}</p>

      <form>
        <div>
          Working Title: <input defaultValue={props.project.working_title} name="working_title" type="text" />
        </div>

        <div>
          Status: <input defaultValue={props.project.status} name="status" type="text" />
        </div>
        <button type="submit"> Update Project </button>
      </form>
    </div>
  );
}
