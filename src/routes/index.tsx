import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../screens/Dashboard";
import Calendar from "../screens/Calendar";
import Inventory from "../screens/Inventory";
import OrderHistory from "../screens/OrderHistory";
import UserProfile from "../screens/UserProfile";
import Logout from "../screens/Logout";

export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/signin" exact component={Login} />
                    <ProtectedRoute path="/dashboard" component={Dashboard} />
                    <ProtectedRoute path="/calendar" component={Calendar} />
                    <ProtectedRoute path="/inventory" component={Inventory} />
                    <ProtectedRoute
                        path="/orderHistory"
                        component={OrderHistory}
                    />
                    <ProtectedRoute
                        path="/userProfile"
                        component={UserProfile}
                    />
                    <ProtectedRoute path="/logout" component={Logout} />
                    <Route>
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
