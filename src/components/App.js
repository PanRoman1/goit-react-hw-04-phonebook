import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  static defaultProps = {
    initialContacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const saveContacts = localStorage.getItem('Phone_contacts');
    if (saveContacts !== null) {
      return this.setState({ contacts: JSON.parse(saveContacts) });
    }
    this.setState({
      contacts: this.props.initialContacts,
    });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        'Phone_contacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  checkContact = name => {
    return this.state.contacts.map(contact => contact.name).includes(name);
  };

  addContact = (name, number) => {
    if (this.checkContact(name)) {
      alert(`${name} is already exist in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  clearFilter = () => {
    this.setState({
      filter: this.setState({ filter: '' }),
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {contacts.length === 0 ? (
          <p>Contact list is empty now</p>
        ) : (
          <>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              contacts={this.getFilteredContacts()}
              onDelete={this.deleteContact}
            />
          </>
        )}
      </Layout>
    );
  }
}
