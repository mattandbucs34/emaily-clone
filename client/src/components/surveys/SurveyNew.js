//SurveyNew shows Survey Form and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
/*   constructor(props) {
    super(props);

    this.state = { new: true};
  } */

  //equivelant to constructor above
  state = { showFormReview: false };

  renderContent() {
    if(this.state.showFormReview) {
      return <SurveyFormReview surveyBack={() => this.setState({ showFormReview: false})}/>;
    }

    return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true})} />;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  //dumps values...resets survey form
  form: 'surveyForm'
})(SurveyNew);