import { Input, Label } from './Filter.styled';
import PropTypes from 'prop-types';
export const Filter = ({ filter, changeFilter }) => {
  return (
    <Label>
      Enter name...
      <Input type="text" value={filter} onChange={changeFilter}></Input>
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
