import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactsList.styled';
import PropTypes from 'prop-types';
export const ContactList = ({ states, removeContact }) => {
  return (
    <List>
      {states.map(state => {
        return (
          <ContactItem
            name={state.name}
            key={state.id}
            number={state.number}
            removeContact={removeContact}
            id={state.id}
          />
        );
      })}{' '}
    </List>
  );
};

ContactList.propTypes = {
  states: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
