import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createParty } from '../actions';

class PartiesNew extends Component {

  renderTextField(field) {
    return(
      <div>
        <label>{field.label}</label>
        <input
          type='text'
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
    this.props.createParty(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='Party Name'
          name='party_name'
          component={this.renderTextField}
        />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // Check values

  return errors;
}

export default reduxForm({
  validate,
  form: 'PartiesNewForm'
})(
  connect(null, { createParty })(PartiesNew)
);
