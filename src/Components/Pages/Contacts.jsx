import ContactForm from '../ContactForm/ContactForm';
import ContactList from 'Components/ContactList';
import Filter from 'Components/Filter';
import { useState,createContext } from 'react';
import { Btn } from 'Components/Menu/SharedLayout/Btn';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 30px;
  margin-top: 30px;
  align-items: baseline;
  justify-content: space-evenly;
`;

const Wrapper = styled.div`
  padding: 15px;
  box-shadow: rgb(33 33 33) 0px 2px 10px 1px;
`;

export const ThemeContext = createContext(null);


const ContactsPage =() => {
    const [theme, setTheme] = useState('dark');
    


    const toggleTheme = () => {
        setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
      };


    


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
             <Container id={theme}>
              <Wrapper>
            <ContactForm />
            </Wrapper>
            <Wrapper>
            <Filter />
             <ContactList />
             </Wrapper>
             </Container>
             <Btn theme={theme} toggleTheme={toggleTheme} />
             </ThemeContext.Provider>
    )
}

export default ContactsPage;