import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
    filter: '',
  };

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const duplicateName = contacts.find(contact => contact.name === name);
    if (duplicateName) {
      alert(`${name} is already in your contacts`);
    } else {
      const newContact = { id: nanoid(), name, number };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = (contacts, filter) =>
    contacts.filter(contact =>
      typeof contact.name === 'string' && contact.name.toLowerCase().includes(filter.toLowerCase().trim()),
    );

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);

    return (
      <div>
        <h1 className={"heading"}>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2 className={"heading"}>Contacts</h2>
        <div className={"list"}>
        <Filter filter={this.state.filter} onChange={this.handleFilterChange} />
          <ContactList contacts={filteredContacts} onDeleteContact={this.handleDeleteContact} />
        </div>
      </div>
    );
  }
}


