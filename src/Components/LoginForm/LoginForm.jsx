import {FormContainer} from '../RegisterForm/RegisterForm.styled';
import { Box, Button, TextField,Typography } from '@mui/material';
import useForm from "../../Hooks/useForm";


const LoginForm = ({onSubmit}) => {
    const initialState ={
        email:"",
        password:"",
    }
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})

    const {email,password} = state;

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
                
            <Button variant="contained" type="submit">
        Log in
      </Button>
        </Box>
        </FormContainer>
    )

}

export default LoginForm;