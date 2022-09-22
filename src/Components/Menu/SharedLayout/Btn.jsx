import  Switch from '@mui/material/Switch';
import styled from 'styled-components';

export const Btn = ({ theme, toggleTheme }) => {
	
  return (
    <SwitchStyled>
      <label style={{ marginRight: '10px' }}>
        {theme === 'light' ? 'Light Mood' : 'Dark Mood'}
      </label>
      <Switch
  checked={theme === 'dark'}
  onChange={toggleTheme}
  inputProps={{ 'aria-label': 'controlled' }}
/>
  
    </SwitchStyled>
  );
};

const SwitchStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 60px;
`;