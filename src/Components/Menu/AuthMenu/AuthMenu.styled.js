import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';
import  Container  from '@mui/material/Container';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  background-color: #bca2b21f;
  color: white;
  font-size: 18px;
  &:not(:last-child){
    margin-right:30px;
  }
  &.active {
    color: white;
    background-color: grey;
  }
  :hover:not(.active),
  :focus-visible:not(.active){
    color:black;
  }
`;

 export const AppContainer = styled(Container)`
display: flex;
justify-content: space-around;
padding: 15px 0;
background-color: #bca2b21f;
`;

