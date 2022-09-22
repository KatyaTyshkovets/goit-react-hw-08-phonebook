import { useSelector,useDispatch } from "react-redux";
import { getUser } from "Redux/Auth/Auth-selectors";
import { logout } from "Redux/Auth/Auth-operations";
import {  Image, UserName,AppContainer } from './UserMenu.styled';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = () =>{
const {name} = useSelector(getUser);
const dispatch = useDispatch();
const onLogout = () => dispatch(logout());
    return (
        <AppContainer>
            <Image>
        <AccountCircle />
      </Image>
      <UserName>{`Hello, ${name.toUpperCase()}`}</UserName>
      <Button variant="contained" type="button" onClick={onLogout}>
        < LogoutIcon size="30"/>
      </Button>
    </AppContainer>
            
    )
};

export default UserMenu;