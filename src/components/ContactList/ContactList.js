import { Contact } from 'components/ContactList/Contact/Contact';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(item => (
        <Contact key={item.id} contact={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};
