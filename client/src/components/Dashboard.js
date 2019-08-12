import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

class Dashboard extends Component {
  render() {
    return (
      <div className='container'>
        <SurveyList />
        <Link to="/surveys/new">
          <i className="fas fa-plus-circle fa-3x new-survey-btn"></i>
        </Link>
      </div>     
    )
  }
}

export default Dashboard;