import React, { Component } from 'react';
import { AddForm } from 'components/Form/Form';
import { MainTitle } from './MainTitle/MainTitle';
import { Section } from './SectionWithTitle/SectionWithTitle';
import { Message } from './Messages/Message';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  updateContact = values => {
    const contacts = this.state.contacts;

    contacts.every(contact => contact.name !== values.name)
      ? this.setState({
          contacts: this.state.contacts.concat(values),
        })
      : Notify.failure('You have this contact in your list');
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(_, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  iNeedName = values => {
    this.setState({
      name: values.name,
    });
  };
  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };
  filter = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    if (filterContacts.length < 1) {
      Notify.warning('No matches =(');
    }
    return filterContacts;
  };
  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const { contacts, filter } = this.state;
    return (
      <div
        style={{
          width: '1000px',
          margin: '0 auto',
          padding: '0 50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <MainTitle />
        <AddForm
          updateContacts={this.updateContact}
          iNeedName={this.iNeedName}
        />
        <Filter filter={filter} changeFilter={this.changeFilter} />{' '}
        <Section title="Contacts">
          {contacts.length >= 1 ? (
            <ContactList
              states={this.filter(contacts, filter)}
              removeContact={this.removeContact}
            />
          ) : (
            <Message msg="No contacts yet =("></Message>
          )}
        </Section>
      </div>
    );
  }
}
