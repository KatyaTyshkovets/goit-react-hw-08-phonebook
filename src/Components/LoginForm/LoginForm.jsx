import {FormContainer, BoxChecked, IconBox} from '../RegisterForm/RegisterForm.styled';
import { Box, Button, TextField,Typography } from '@mui/material';
import useForm from "../../Hooks/useForm";
import Checkbox from '@mui/material/Checkbox';
import { NavLink } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';


const LoginForm = ({onSubmit}) => {
    const initialState ={
        email:"",
        password:"",
        remember: false,
    }
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})

    const {email,password,checked} = state;

    const [type,setType] = useState('text');
    const [icon, setIcon] = useState(Visibility);
        const togglePassword = () => {
           if(type === 'password'){
            setIcon(Visibility);
            setType('text');
           }
           else{
            setIcon(VisibilityOff);
            setType('password');
           }
          };
        
          
    const btnstyle={margin:'5px 0'}


    return (
        <FormContainer>
          <Typography
          variant="h4"
          style={{ fontFamily: 'Caveat', fontWeight: '400', textAlign: 'center' }}
        >
          Log in
        </Typography>
        <Box
      component="form"
      autoComplete='off'
      onSubmit={handleSubmit}
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        rowGap: 2,
        my: 2,
        background:"white",
      }}
    >
      <TextField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Password"
        type='password'
        name="password"
        value={password}
        onChange={handleChange}
         required
        helperText="7 symbols at least for password"

          />

        <IconBox>
          <span onClick={togglePassword} >
            <VisibilityOff icon={icon}/>
            </span> 
            </IconBox>
           <BoxChecked>
                <label  htmlFor="">Remember me</label>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                 inputProps={{ 'aria-label': 'controlled' }}
               />
            </BoxChecked>     
             
            <Button variant="contained" type="submit" style={btnstyle}>  
                 Log in
            </Button>
            <Typography>
                <NavLink to='/register'>
                  Forgot password ?
                </NavLink>
              </Typography>
        </Box>
        </FormContainer>
    )

}

export default LoginForm;