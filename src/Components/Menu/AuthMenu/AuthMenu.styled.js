import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';


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
  }
  :hover:not(.active),
  :focus-visible:not(.active){
    color:white;
  }
`;

 

