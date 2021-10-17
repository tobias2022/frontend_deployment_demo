import { NavLink } from "react-router-dom";
import { login } from "../../services/auth";

login();
const Login = () => (
    <>
        <nav>
            <li>
                <NavLink to="/register">Register</NavLink>
            </li>
            <li>
                <NavLink to="/signin">Sign in</NavLink>
            </li>
        </nav>
        <div>
            <h1>This is the Login page</h1>
        </div>
    </>
);

export default Login;
