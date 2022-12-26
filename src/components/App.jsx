import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import { AppStyled } from './App.styled';
// import PropTypes from 'prop-types';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createNewContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <AppStyled>
      <Section title="Phonebook">
        <Form onSubmit={createNewContact} />
      </Section>
      <Section title="Contacts">
        <Filter
          value={filter}
          onChange={changeFilter}
        />
        <ContactList
          contacts={filtredContacts()}
          onDelete={deleteContact}
        />
      </Section>
    </AppStyled>
  );
};
