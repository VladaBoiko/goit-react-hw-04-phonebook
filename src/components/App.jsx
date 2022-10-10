/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { AddForm } from 'components/Form/Form';
import { MainTitle } from './MainTitle/MainTitle';
import { Section } from './SectionWithTitle/SectionWithTitle';
import { Message } from './Messages/Message';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const contactList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? contactList
  );
  const [name, setName] = useState('');
  const [filter, setFilter] = useState('');

  const updateContact = values => {
    contacts.every(contact => contact.name !== values.name)
      ? setContacts(state => state.concat(values))
      : Notify.failure('You have this contact in your list');
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const iNeedName = values => {
    setName(values.name);
  };
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const filtered = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    if (filterContacts.length < 1) {
      Notify.warning('No matches =(');
    }
    return filterContacts;
  };
  const removeContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };
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
      <AddForm updateContacts={updateContact} iNeedName={iNeedName} />
      <Filter filter={filter} changeFilter={changeFilter} />{' '}
      <Section title="Contacts">
        {contacts.length >= 1 ? (
          <ContactList
            states={filtered(contacts, filter)}
            removeContact={removeContact}
          />
        ) : (
          <Message msg="No contacts yet =("></Message>
        )}
      </Section>
    </div>
  );
}
