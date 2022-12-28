import React, { Component } from 'react';
import css from './InputAddNumber.module.css';

export default class InputAddNumber extends Component {
  render() {
    const { number, handleNumber } = this.props;
    return (
      <div className={css.inputWrapper}>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleNumber}
          value={number}
        />
      </div>
    );
  }
}
