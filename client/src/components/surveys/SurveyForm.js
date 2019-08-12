//SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmail from '../../utilities/validateEmail';
import formFields from './formFields';


class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, field => {//ES6 Destructure {label, name}
      return <Field key={field.name} component={SurveyField} type="text" label={field.label} name={field.name}/>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} className="surveyForm">
          {this.renderFields()}
          <Link to="/surveys" className="btn btn-danger">Cancel</Link>
          <button type="submit" className="btn btn-success right">Next<i className="material-icons right">done</i></button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmail(values.recipients || '');
  
  _.each(formFields, ({ name }) => {
    if(!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);