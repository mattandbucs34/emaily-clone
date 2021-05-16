import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  constructor() {
    super();

    this.state = {
      newstate: []
    }
  }
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div key={survey._id} className="card shadow mb-3 rounded">
          <div className="card-header">
            {survey.title}
          </div>
          <div className="card-body">
            <p>
              {survey.body}
            </p>
            <p>
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div>
            <Link to="#" className="btn btn-success m-1">Yes: {survey.yes}</Link>
            <Link to="#" className="btn btn-danger m-1">No: {survey.no}</Link>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>SurveyList</h2>
        {this.renderSurveys()}
      </div>
    )
  }
}

function mapStateToProps({ surveys }) {
  console.log({ surveys })
  return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);