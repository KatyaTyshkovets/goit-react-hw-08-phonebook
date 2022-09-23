import { Box, Button, TextField, Typography } from '@mui/material';
//import IconButton from '@mui/material/IconButton';
import useForm from "../../Hooks/useForm";
import {FormContainer,BoxChecked,IconContainer} from './RegisterForm.styled';
import { initialState } from "./InitialState";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { NavLink } from 'react-router-dom';


const RegisterForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})
  
    const {email, name, password, checked} = state;

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
          style={{ fontFamily: 'Caveat', fontWeight: '400' ,textAlign: 'center' }}
        >
          Register
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
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        fullWidth required
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        fullWidth required
      />
      <TextField
        label="Password"
        type={type}
        name="password"
        value={password}
        onChange={handleChange}
       fullWidth required
        helperText="7 symbols at least for password"

        />
        <IconContainer>
          <span onClick={togglePassword} >
            <VisibilityOff icon={icon}/>
            </span> 
            </IconContainer>
        
                <BoxChecked>
                <label  htmlFor="">Remember me</label>
                <Checkbox
  checked={checked}
  onChange={handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
/>
</BoxChecked>
            <Button  variant="contained" type="submit" style={btnstyle}>
        Register
      </Button>
     
              <Typography> Do you have an a account ?
                <NavLink to='/login'>
                  Sign up ?
                </NavLink>
              </Typography>
        </Box>
        </FormContainer>
    )

}

export default RegisterForm;