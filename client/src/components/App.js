import Container from 'react-bootstrap/Container';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../assets/styles.css';

import Header from './Header';
import Landing from './Landing';

const Dashboard = () =>  <h2>Dashboard</h2>;
const SurveyNew = () =>  <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render () {
    return (
      <Container>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
      </Container>
    );
  }
};

export default connect(null, actions)(App);