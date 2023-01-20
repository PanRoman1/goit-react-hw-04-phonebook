import PropTypes from 'prop-types';
import { Btn, ContactItem } from './Contact.styled';

export const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <ContactItem>
      {name}: {number} <Btn onClick={() => onDelete(id)}>Delete</Btn>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
