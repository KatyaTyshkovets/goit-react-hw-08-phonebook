import useAuth from "Hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute =() =>{
    const isLogin = useAuth();
    if(isLogin) {
        return <Navigate to="/contacts" />
    }
    return <Outlet />
}

export default PublicRoute;