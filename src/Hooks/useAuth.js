import { useSelector } from "react-redux";
import { isAuth } from "Redux/Auth/Auth-selectors";


const useAuth = () =>{
    const result = useSelector(isAuth);
    return result;
}

export default useAuth
