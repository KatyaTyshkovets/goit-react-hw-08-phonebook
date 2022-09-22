import { Suspense } from "react";
import styled from "styled-components";
import { Outlet } from "react-router";
import NavMenu from "../NavMenu/NavMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import { ToastContainer } from "react-toastify";
import UserMenu from "../UserMenu/UserMenu";
import useAuth from "Hooks/useAuth";
import { NavLink } from "react-router-dom";
import  Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
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


export const SharedLayout = () => {
  const isLogin = useAuth();
    return (
      <>
      <Container position="static">
      <Toolbar >
      <ImportContacts size={80}/>
          <Logo to="/">
Книга контактів
</Logo>

{isLogin &&  <NavMenu /> }
          {isLogin ? <UserMenu /> : <AuthMenu />}
</Toolbar>
    </Container>
          
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer /> 
        
        </>
        
    );
  };


  
             
    
        
               
          