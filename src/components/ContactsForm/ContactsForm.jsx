import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import css from './ContactsForm.module.css';
import InputAddContact from 'components/InputAddContact/InputAddContact';
import ContactsAppCaption from 'components/ContactsAppCaption/ContactsAppCaption';
import InputAddNumber from 'components/InputAddNumber/InputAddNumber';
import Button from 'components/Button/Button';
import { nanoid } from 'nanoid';

export default class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
    isFocus: false,
  };
  handleContactData = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  getContactFormData = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget;
    const contactId = nanoid();
    if (this.props.handleSubmitForm(contactId, name, number)) {
      this.setState({
        name: '',
        number: '',
      });
      return;
    }
  };

  render() {
    const { name, number } = this.state;
    const { handleContactData, getContactFormData } = this;
    return (
      <form onSubmit={getContactFormData} className={css.form}>
        <InputAddContact handleName={handleContactData} name={name} />
        <ContactsAppCaption>Number</ContactsAppCaption>
        <InputAddNumber handleNumber={handleContactData} number={number} />
        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  //   handleSubmitForm: PropTypes.func.isRequired,
  //   handleContactData: PropTypes.func.isRequired,
};
