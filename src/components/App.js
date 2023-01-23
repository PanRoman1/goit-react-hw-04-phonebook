import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import initialContacts from '../initialContacts.json';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('Phone_contacts')) ?? initialContacts
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('Phone_contacts', JSON.stringify(contacts));
  }, [contacts]);

  const checkContact = name => {
    return contacts.map(contact => contact.name).includes(name);
  };

  const addContact = (name, number) => {
    if (checkContact(name)) {
      alert(`${name} is already exist in contacts.`);
      return;
    }

    const newContact = { id: nanoid(), name, number };

    setContacts(() => [newContact, ...contacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(state => state.filter(({ id }) => id !== contactId));
  };
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>Contact list is empty now</p>
      ) : (
        <>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={getFilteredContacts()}
            onDelete={deleteContact}
          />
        </>
      )}
    </Layout>
  );
};
