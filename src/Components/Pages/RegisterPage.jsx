import {useSelector, useDispatch} from "react-redux";
import RegisterForm from "Components/RegisterForm";
import {signup} from "../../Redux/Auth/Auth-operations";
import { getAuthError } from "../../Redux/Auth/Auth-selectors";
import {toast} from 'react-toastify';


const RegisterPage = () => {
    const dispatch = useDispatch();
    const {status, message} = useSelector(getAuthError);
   

    const onRegister = data => {
        console.log(data);
        if (status === 400) {
          toast.success('You are already authorized');
        }
        dispatch(signup(data));
      };

    

    return (
      <>
    
            <RegisterForm onSubmit={onRegister} />
            {status && <p style={{color: "red"}}>{message}</p>}
            
           
       </>
    )
}

export default RegisterPage;