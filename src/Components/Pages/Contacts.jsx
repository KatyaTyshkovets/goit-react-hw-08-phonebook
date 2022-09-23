import ContactForm from '../ContactForm/ContactForm';
import ContactList from 'Components/ContactList';
import Filter from 'Components/Filter';
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



const ContactsPage =() => {


    return (
        
             <Container >
              <Wrapper>
            <ContactForm />
            </Wrapper>
            <Wrapper>
            <Filter />
             <ContactList />
             </Wrapper>
             </Container>
             
             
    )
}

export default ContactsPage;