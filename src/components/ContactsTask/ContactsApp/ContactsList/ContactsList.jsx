import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BiUserCircle } from 'react-icons/bi';
import css from './ContactsList.module.css';
import Button from 'components/ContactsTask/Button/Button';
import NoContactsInfo from 'components/ContactsTask/NoContactsInfo/NoContactsInfo';
import { BsXCircle } from 'react-icons/bs';

export default class ContactsList extends Component {
  render() {
    const { showFilteredContacts, handleDeleteContact } = this.props;
    return (
      <>
        <ul className={css.contactList}>
          {showFilteredContacts().length ? (
            showFilteredContacts().map(contact => (
              <li className={css.contactItem} key={contact.id}>
                <p className={css.contactInfoWrapper}>
                  <BiUserCircle className={css.contactIcon} />
                  <span className={css.contactName}>{contact.name}:</span>&nbsp;
                  <span className={css.contactPhone}>{contact.phone}</span>
                </p>

                <Button
                  type="button"
                  onDeleteContact={handleDeleteContact}
                  id={contact.id}
                >
                  Delete
                  <BsXCircle />
                </Button>
              </li>
            ))
          ) : (
            <NoContactsInfo />
          )}
        </ul>
      </>
    );
  }
}

ContactsList.propTypes = {
  showFilteredContacts: PropTypes.func.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};
