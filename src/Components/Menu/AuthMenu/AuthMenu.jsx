import {Link, AppContainer} from './AuthMenu.styled';

 

export const AuthMenu = () => {
    return(
<AppContainer>
   
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
  
</AppContainer>
    )
}

export default AuthMenu;