import useAuth from "Hooks/useAuth";
import { Navigate,Outlet } from "react-router-dom";


const PrivateRoute = () =>{
    const isLogin = useAuth();
    if(!isLogin) {
        return <Navigate to="/login" />
    }
    return <Outlet />
};

export default PrivateRoute;