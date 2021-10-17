import { Route, Redirect, useLocation, NavLink } from "react-router-dom";
import { isAuthenticated } from "../services/auth";

const ProtectedRoute = (props: any) => {
    const location = useLocation();
    if (isAuthenticated()) {
        return (
            <>
                <nav>
                    <li>
                        <NavLink to="/register">Register</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signin">Sign in</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/calendar">Calendar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/inventory">Inventory</NavLink>
                    </li>
                    <li>
                        <NavLink to="/orderHistory">Order History</NavLink>
                    </li>
                    <li>
                        <NavLink to="/userProfile">User Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/logout">Logout</NavLink>
                    </li>
                </nav>
                <main>
                    <Route {...props} />
                </main>
            </>
        );
    }
    return <Redirect to="/" from={location.pathname} />;
};

export default ProtectedRoute;
