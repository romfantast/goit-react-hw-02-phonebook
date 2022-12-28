import React, { Component } from 'react';
import css from './InputAddContact.module.css';

export default class InputAddContact extends Component {
  render() {
    const { name, handleName } = this.props;
    return (
      <div className={css.inputWrapper}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleName}
        />
      </div>
    );
  }
}
