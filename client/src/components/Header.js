import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Nav>
            <Nav.Item>
              <Nav.Link href="/auth/google">Log In</Nav.Link>
            </Nav.Item>
          </Nav>
        )
      default:
        return (
          <Nav>
            <Navbar.Text style={{ margin: '0 10px'}}>
              Credits: {this.props.auth.credits}
            </Navbar.Text>
            <Nav.Item>
              <Payments />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/api/logout">Log Out</Nav.Link>
            </Nav.Item>
          </Nav>
        );
    }
  }
  render () {
    return (
      <Navbar expand='lg' bg='dark' variant='dark'>
        <Link to={this.props.auth ? '/surveys' : '/'}>
          <Navbar.Brand>Emaily</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-right justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link href="#">Link 1</Nav.Link>
            </Nav.Item>
          </Nav>
          {this.renderContent()}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);