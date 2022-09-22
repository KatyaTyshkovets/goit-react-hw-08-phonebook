import LoginForm from "Components/LoginForm";
import {  useDispatch, useSelector } from "react-redux";
import { getAuthError } from "Redux/Auth/Auth-selectors";
import { login } from "Redux/Auth/Auth-operations";


const LoginPage = () =>{
    const dispatch = useDispatch();
   
    const {status, message} = useSelector(getAuthError);
    const onLogin = (data) =>{
        dispatch(login(data));
    }
    

    return (
       

        <div>
            <LoginForm  onSubmit={onLogin}/>
            {status && <p style={{color: "red"}}>{message}</p>}
        </div>
    )
}

export default LoginPage;