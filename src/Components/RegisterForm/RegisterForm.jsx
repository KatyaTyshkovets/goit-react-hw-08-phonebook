import { Box, Button, TextField, Typography } from '@mui/material';
//import IconButton from '@mui/material/IconButton';
import useForm from "../../Hooks/useForm";
import {FormContainer,BoxChecked} from './RegisterForm.styled';
import { initialState } from "./InitialState";
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';


const RegisterForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})
   // const [showPassword, setShowPassword] = useState(false);
    const {email, name, password, checked} = state;


    // const togglePassword = () => {
    //     setShowPassword(!showPassword);
    //   };
    
    //   const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    //   };

      
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
        required
      />
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
                <BoxChecked>
                <label  htmlFor="">Remember me</label>
                <Checkbox
  checked={checked}
  onChange={handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
/>
</BoxChecked>
            <Button variant="contained" type="submit">
        Register
      </Button>
        </Box>
        </FormContainer>
    )

}

export default RegisterForm;