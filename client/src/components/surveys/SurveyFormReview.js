// SurveyFormReview shows user form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyReview = ({ surveyBack, formValues, sendSurvey, history }) => {
  const reviewFields = _.map(formFields, ({name, label}) => {
    return (
      <div key={name} className="form-group">
        <label className="review-header">{label}</label>
        <input type="text" className="form-control" readOnly value={formValues[name]}></input>
      </div>
    );
  });

  return (
    <div className="surveyForm">
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button type="button" className="btn btn-outline-danger" onClick={ surveyBack }>
        <i className="material-icons arrow-left">arrow_back</i>
        Back
        </button>
      <button type="submit" className="btn btn-success right" onClick={() => sendSurvey(formValues, history)}>
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  )
}

function matStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(matStateToProps, actions)(withRouter(SurveyReview));