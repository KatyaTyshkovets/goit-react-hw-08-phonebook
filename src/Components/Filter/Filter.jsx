import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../Redux/Contacts/Contact-selectors';
import { setFilter } from '../../Redux/Contacts/Filter-slice';

const Filter = () => {
   const dispatch = useDispatch();
     const filter = useSelector(getFilter);
    const changeFilter = e => {
        dispatch(setFilter(e.currentTarget.value));
    };
    return (
        
        <Label htmlFor=''>
            Find contacts by name
            <Input type="text"  value={filter} onChange={changeFilter} />
            </Label>
            
    );
};


Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};


export default Filter;