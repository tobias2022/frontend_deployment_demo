import { NavLink } from "react-router-dom";

const Register = () => (
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
            <h1>This is the Register page</h1>
        </div>
    </>
);

export default Register;
