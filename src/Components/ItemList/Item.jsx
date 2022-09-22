import { useSelector, useDispatch } from 'react-redux';
import { Button, Text, Item } from './Item.styled';
import { removeContact } from '../../Redux/Contacts/Contact-operations';
import { getFilter, getItem } from '../../Redux/Contacts/Contact-selectors'
import { useEffect } from 'react';
import { fetchContacts } from '../../Redux/Contacts/Contact-operations';

export const ContactItem = () => {
    const filter = useSelector(getFilter);
    const states = useSelector(getItem);
    const dispatch = useDispatch();

    const deleteContact = id => {
        dispatch(removeContact(id));
    };

    const getVisisbleContacts = states?.filter(state =>
        state?.name.toLowerCase().includes(filter.toLowerCase())
    );
    useEffect(() => {
    dispatch(fetchContacts())
},[dispatch])
    return (
        <>
            {getVisisbleContacts?.map(({ id, name, number }) =>
            (
                <Item key={id}>
            <Text>
                {name} : {number}
            </Text>
            <Button onClick={()=>deleteContact(id)}>Delete</Button>
            </Item>
            ) )}
        
            </>
    );
};




