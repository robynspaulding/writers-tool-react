import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Signup } from "./Signup";

export function Content() {
  return (
    <div>
      <h1>Welcome to the Writers Tool!</h1>
      <Signup />
      <Login />
      <LogoutLink />
    </div>
  );
}
