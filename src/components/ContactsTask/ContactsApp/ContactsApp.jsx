import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactsApp.module.css';
import ContactsAppCaption from '../ContactsAppCaption/ContactsAppCaption';
import ContactsList from './ContactsList/ContactsList';
import ContactsForm from './ContactsForm/ContactsForm';
import InputFilterContact from '../InputFilterContact/InputFilterContact';
import { Notify } from 'notiflix';

export default class ContactsApp extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleContactData = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const contactId = nanoid();
    for (let contact of this.state.contacts) {
      let name = contact.name.split(' ')[0].toLowerCase();
      if (name === e.currentTarget.name.value.toLowerCase()) {
        return Notify.warning('This contact is already in the list');
      }
    }
    const { name, number } = e.currentTarget;
    const contactObj = { id: contactId, name: name.value, phone: number.value };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactObj],
    }));
  };

  handleFilterContact = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  showFilteredContacts = () => {
    const filterStr = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterStr)
    );
  };

  handleDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const {
      handleContactData,
      handleSubmitForm,
      handleFilterContact,
      showFilteredContacts,
      handleDeleteContact,
    } = this;
    return (
      <div className={css.contacts}>
        <ContactsAppCaption>Name</ContactsAppCaption>
        <ContactsForm
          handleContactData={handleContactData}
          handleSubmitForm={handleSubmitForm}
        />
        <InputFilterContact
          filter={filter}
          handleFilterContact={handleFilterContact}
        />
        <ContactsList
          showFilteredContacts={showFilteredContacts}
          handleDeleteContact={handleDeleteContact}
        />
      </div>
    );
  }
}
