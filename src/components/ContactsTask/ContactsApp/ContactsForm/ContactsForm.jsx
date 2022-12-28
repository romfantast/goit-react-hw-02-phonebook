import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/ContactsTask/Button/Button';
import ContactsAppCaption from 'components/ContactsTask/ContactsAppCaption/ContactsAppCaption';
import InputAddContact from 'components/ContactsTask/InputAddContact/InputAddContact';
import InputAddNumber from 'components/ContactsTask/InputAddNumber/InputAddNumber';
import css from './ContactsForm.module.css';

export default class ContactsForm extends Component {
  render() {
    const { handleContactData, handleSubmitForm } = this.props;
    return (
      <form onSubmit={handleSubmitForm} className={css.form}>
        <InputAddContact handleName={handleContactData} />
        <ContactsAppCaption>Number</ContactsAppCaption>
        <InputAddNumber handleNumber={handleContactData} />
        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
  handleContactData: PropTypes.func.isRequired,
};
