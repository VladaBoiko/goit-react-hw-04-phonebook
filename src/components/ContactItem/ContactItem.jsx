import { Item, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';
export const ContactItem = ({ id, name, number, removeContact }) => {
  return (
    <Item>
      <span>{name}</span>
      <span>{number}</span>
      <Button onClick={() => removeContact(id)} type="button">
        Delete
      </Button>
    </Item>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};
