import styled from "styled-components";
import { Field, Form} from "formik";


export const Input = styled(Field)`
padding: 15px;
margin:15px;
width: 250px;
height: 15px;
font-size: 16px;
border-radius: 40px;
outline: none;
color:black;
background: white;
border: 1px solid darkgrey;
transition: border-color 800ms ease-in-out 0s;
transition:transform 500ms linear;
    & :focus , :hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
        transform: scale(1.1);
    }
`;

export const FormContact = styled(Form)`
display:flex;
flex-direction:column;
text-align: center;
width:350px;
padding: 5px;
border: 1px solid darkggrey;
border-radius: 10px;
transition: border-color 800ms ease-in-out 0s;
color:white;
`;

export const Label = styled.label`
display:flex;
flex-direction: column;
width:200px;
`;

export const Button = styled.button`
background-color:darkgrey;
margin: 20px;
 border-radius: 25px;
 padding: 7px;
 width: 180px;
 font-size: 20px;
    curcor:pointer;
    transition:transform 500ms linear;
    & :focus , :hover {
        background-color:white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
        transform: scale(1.1);
    }
`;

export const Error = styled.p`
color: red;
`;


