import styled from "@emotion/styled";
import { FormControl} from "@mui/material";
import { Container } from "@mui/system";
import { Button } from "../ContactForm/ContactForm.styled";
import apple from '../../img/apple.jpeg'


export const FormContainer = styled(Container)`
display: flex;
width:50%;
margin-top: 30px;
border: 1px solid #6d6d6c;
border-radius: 10px;
display: flex;
flex-direction:column;
background:white;
`
export const BoxChecked = styled.div`

display: block;
`
export const RedisterForm = styled.form`
width:50%;
margin-top: 30px;
border: 1px solid #6d6d6c;
border-radius: 10px;
display: flex;
flex-direction:column;
background:white;
`
export const Field = styled(FormControl)`
margin-bottom:10px;
`
export const Btn = styled(Button)`
width: 30%;
align-self:center;
`

export const FormTitle = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin:80px 0 20px 0;
`
export const TitleText = styled.h1`
margin: 3px 0 0 0;
color:#6d6d6c;
`
export const SteledImage = styled.div`
background-image: url(${apple});
background-size: cover;
width: 40%;
margin: 40px 50px 0 0;
border-radius: 5px;

`

