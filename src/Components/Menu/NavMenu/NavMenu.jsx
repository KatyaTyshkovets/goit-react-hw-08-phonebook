//import { createGlobalStyle } from 'styled-components';
//import apple from '../../../img/apple.jpeg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


// const GlobalStyle = createGlobalStyle`
// body {
//   background-image: url(${apple});
//   width: 100%;
//   height: 100%;
// }
// `;


export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active){
    color:white;
  }
`;




const NavMenu = () =>{
    return(
  
  <Link to="/contacts">Contacts</Link>


    )
}

export default NavMenu;

