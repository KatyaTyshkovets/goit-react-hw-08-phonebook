import { Suspense } from "react";
import styled from "styled-components";
import { Outlet } from "react-router";
import NavMenu from "../NavMenu/NavMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import { ToastContainer } from "react-toastify";
import UserMenu from "../UserMenu/UserMenu";
import useAuth from "Hooks/useAuth";
import { NavLink } from "react-router-dom";
import {Toolbar, Container} from "@mui/material";
import ImportContacts from "@mui/icons-material/ImportContacts";
import Loader from "Components/Loader/Loader";

const Logo = styled(NavLink)`
display: flex;
align-items: center;
color: white;
font-family: 'Dancing Script, cursive';
font-size: 24px;
font-weight: 400;
  };
  &:hover {
    color: dark;
    cursor: pointer;
  };
`;

const AppContainer = styled(Toolbar)`
background-color: #bca2b21f;
display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  > nav {
    display: flex;
  }
`;


export const SharedLayout = () => {
  const isLogin = useAuth();
    return (
    
      <Container position="static" mb={3}>
      <AppContainer >
<Logo to="/">
<ImportContacts size={80}/>
Книга контактів
        </Logo>

{isLogin &&  <NavMenu /> }
          {isLogin ? <UserMenu /> : <AuthMenu />}
</AppContainer>
   
          
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer /> 
        </Container>
        
        
    );
  };


  
             
    
        
               
          